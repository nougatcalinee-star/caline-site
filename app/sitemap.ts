import type { MetadataRoute } from 'next';
import { PRODUCTS } from '@/lib/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const staticRoutes = ['', '/boutique', '/notre-histoire', '/contact', '/mentions-legales'];

  return [
    ...staticRoutes.map((route) => ({
      url: `${base}${route}`,
      lastModified: new Date(),
    })),
    ...PRODUCTS.map((p) => ({
      url: `${base}/produit/${p.slug}`,
      lastModified: new Date(),
    })),
  ];
}
