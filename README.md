# Câline — boutique en ligne

Site e-commerce de **Câline**, le nougat tout doux (pistache & miel), fait main en France.
Next.js 15 (App Router) + Tailwind + Stripe Checkout.

## Lancer en local
```bash
npm install
npm run dev
```
Puis ouvre http://localhost:3000

## Mettre en ligne (gratuit)
Déploie sur **Vercel** (vercel.com) : importe le dossier, ça build tout seul.

## Paiement (Stripe)
Copie `.env.example` en `.env.local` et renseigne :
- `STRIPE_SECRET_KEY` (Dashboard Stripe → Clés API, commence par `sk_test_...`)
- `NEXT_PUBLIC_SITE_URL` (l'URL du site en prod)
Sans clé, le site marche mais le bouton "Commander" affiche un message.

## Modifier le contenu
- **Marque / contacts** : `lib/site.ts`
- **Produit & prix (packs 6/12/24)** : `lib/products.ts`
- **Visuels produit** : `public/products/`
- **Police** : Poppins embarqué en local (`app/fonts/`) — aucun fetch externe au build.

## Structure
- `app/` pages (accueil, boutique, produit/[slug], panier, contact, notre-histoire, mentions-légales)
- `components/` Nav, Footer, ProductCard, panier (CartDrawer/CartProvider), FAQ…
- `app/api/checkout/` création de session Stripe

> Note : les visuels produit/packs sont des **placeholders illustrés** à la charte.
> À remplacer par de vraies photos quand le produit existe (mêmes noms de fichiers dans `public/products/`).
