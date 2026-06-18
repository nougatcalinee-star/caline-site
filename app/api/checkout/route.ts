import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { PRODUCTS } from '@/lib/products';
import { SITE } from '@/lib/site';

export const runtime = 'nodejs';

type IncomingItem = { slug: string; qty: number };

export async function POST(req: NextRequest) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        {
          error:
            'Le paiement n’est pas encore configuré. Ajoute ta clé STRIPE_SECRET_KEY dans le fichier .env.local.',
        },
        { status: 500 }
      );
    }

    const body = await req.json().catch(() => ({}));
    const items: IncomingItem[] = Array.isArray(body.items) ? body.items : [];

    if (items.length === 0) {
      return NextResponse.json({ error: 'Panier vide.' }, { status: 400 });
    }

    // On reconstruit les lignes à partir du catalogue serveur (jamais des prix du client).
    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];
    let subtotalCents = 0;

    for (const item of items) {
      const product = PRODUCTS.find((p) => p.slug === item.slug);
      const qty = Math.max(1, Math.min(50, Math.floor(item.qty || 1)));
      if (!product) continue;
      subtotalCents += product.priceCents * qty;
      lineItems.push({
        quantity: qty,
        price_data: {
          currency: 'eur',
          unit_amount: product.priceCents,
          product_data: {
            name: `${product.name} — ${product.flavor}`,
            description: product.weight,
          },
        },
      });
    }

    if (lineItems.length === 0) {
      return NextResponse.json({ error: 'Produits introuvables.' }, { status: 400 });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2025-09-30.clover' as any,
    });

    const origin =
      req.headers.get('origin') || process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

    // Frais de port : offerts au-dessus du seuil
    const shippingCents =
      subtotalCents >= SITE.freeShippingThresholdCents ? 0 : SITE.shippingCents;

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: lineItems,
      success_url: `${origin}/commande/merci?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/panier`,
      payment_method_types: ['card'],
      allow_promotion_codes: true,
      billing_address_collection: 'required',
      shipping_address_collection: { allowed_countries: ['FR', 'BE', 'LU', 'CH', 'DE'] },
      shipping_options:
        shippingCents === 0
          ? [
              {
                shipping_rate_data: {
                  type: 'fixed_amount',
                  fixed_amount: { amount: 0, currency: 'eur' },
                  display_name: 'Livraison offerte',
                },
              },
            ]
          : [
              {
                shipping_rate_data: {
                  type: 'fixed_amount',
                  fixed_amount: { amount: shippingCents, currency: 'eur' },
                  display_name: 'Colissimo 24–48 h',
                },
              },
            ],
      locale: 'fr',
      customer_creation: 'always',
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error('Stripe checkout error:', err);
    return NextResponse.json({ error: err.message ?? 'Erreur inconnue' }, { status: 500 });
  }
}
