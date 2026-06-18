// Catalogue Câline — un seul produit (Le Classique, pistache & miel),
// décliné en 3 formats de pack. Les prix sont en CENTIMES (3990 = 39,90 €).

export type Accent = 'abricot' | 'pistache' | 'candy';

export type Product = {
  slug: string;
  name: string; // "Le pack de 12"
  flavor: string; // "Pistache & Miel"
  packQty: number; // nombre de barres
  priceCents: number;
  perBarCents: number;
  weight: string; // "12 × 40 g"
  image: string;
  color: Accent;
  badges: string[];
  popular?: boolean;
  shortDesc: string;
  longDesc: string;
};

// Infos communes au produit (partagées par tous les packs)
export const PRODUCT = {
  name: 'Le Classique',
  flavor: 'Pistache & Miel',
  heroImage: '/products/classique-hero.png',
  pitch:
    'Notre nougat signature : ultra-moelleux, généreux en pistaches, lié au bon miel français. Une seule recette, faite main — celle qu’on a voulu réussir avant tout le reste.',
  ingredients: [
    'Miel de France',
    'Pistaches',
    'Amandes',
    'Blanc d’œuf',
    'Sucre de canne',
    'Vanille',
  ],
};

export const PRODUCTS: Product[] = [
  {
    slug: 'pack-6',
    name: 'Le pack de 6',
    flavor: 'Pistache & Miel',
    packQty: 6,
    priceCents: 2190,
    perBarCents: 365,
    weight: '6 × 40 g',
    image: '/products/pack-6.png',
    color: 'abricot',
    badges: ['Pour goûter'],
    shortDesc: 'Six barres pour découvrir (ou se faire un petit plaisir).',
    longDesc:
      'Le format découverte : six barres de notre nougat pistache & miel, fait main en petites fournées. Parfait pour goûter sans trop réfléchir.',
  },
  {
    slug: 'pack-12',
    name: 'Le pack de 12',
    flavor: 'Pistache & Miel',
    packQty: 12,
    priceCents: 3990,
    perBarCents: 333,
    weight: '12 × 40 g',
    image: '/products/pack-12.png',
    color: 'pistache',
    badges: ['Le plus aimé', 'Livraison offerte'],
    popular: true,
    shortDesc: 'Le format chouchou. Meilleur rapport plaisir/prix, livraison offerte.',
    longDesc:
      'Douze barres de nougat pistache & miel : de quoi tenir un moment (en théorie). Livraison offerte, et le prix à la barre qui devient tout doux.',
  },
  {
    slug: 'pack-24',
    name: 'Le pack de 24',
    flavor: 'Pistache & Miel',
    packQty: 24,
    priceCents: 6990,
    perBarCents: 291,
    weight: '24 × 40 g',
    image: '/products/pack-24.png',
    color: 'candy',
    badges: ['Meilleur prix', 'À partager'],
    shortDesc: 'Le grand format à partager — ou à offrir. Prix à la barre le plus doux.',
    longDesc:
      'Vingt-quatre barres : le format à poser sur la table pour les fêtes, à offrir, ou à garder précieusement pour soi. Le meilleur prix à la barre.',
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
