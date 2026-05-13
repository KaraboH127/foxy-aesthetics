export interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  duration: string;
  price: string;
  priceFrom?: string;
  image: string;
  features: string[];
  popular?: boolean;
  aftercare?: string;
}

export const serviceCategories = [
  { id: 'all', name: 'All Services' },
  { id: 'extensions', name: 'Lash Extensions' },
  { id: 'fills', name: 'Fills & Removal' },
  { id: 'lift', name: 'Lift & Tint' },
  { id: 'brows', name: 'Brow Services' },
];

export const services: Service[] = [
  {
    id: 'classic-lash',
    name: 'Classic Lashes',
    category: 'extensions',
    description: 'Timeless, elegant, and natural-looking. One premium extension applied to each natural lash for a refined, everyday glam look.',
    duration: '1h 45min',
    price: '$120',
    priceFrom: 'From $70 (fill)',
    image: '/images/lash-portrait.jpg',
    features: ['1:1 application ratio', 'Natural enhancement', 'Soft everyday glam', 'Lasts 4–6 weeks'],
    popular: true,
    aftercare: 'Avoid water & steam for 24 hours. Brush daily with a spoolie.',
  },
  {
    id: 'hybrid-lash',
    name: 'Hybrid Lashes',
    category: 'extensions',
    description: 'The perfect balance of natural and voluminous. A mix of classic and volume techniques for beautifully textured, fluffy lashes.',
    duration: '2h',
    price: '$145',
    priceFrom: 'From $85 (fill)',
    image: '/images/hero-lash.jpg',
    features: ['Classic + volume blend', 'Textured & fluffy', 'Best of both worlds', 'Lasts 4–6 weeks'],
    popular: true,
    aftercare: 'Avoid oil-based products near eyes. Use lash-safe cleanser.',
  },
  {
    id: 'volume-lash',
    name: 'Volume Lashes',
    category: 'extensions',
    description: 'Ultra-lightweight, handmade fans of 2–6 extensions per natural lash. Delivers dramatic, full, and fluffy volume without the weight.',
    duration: '2h 15min',
    price: '$170',
    priceFrom: 'From $100 (fill)',
    image: 'https://images.pexels.com/photos/5128220/pexels-photo-5128220.jpeg?w=600&h=800&fit=crop&auto=format',
    features: ['Handmade fans (2–6D)', 'Dramatic volume', 'Feather-light feel', 'Lasts 4–5 weeks'],
    popular: true,
    aftercare: 'Sleep on your back when possible. Schedule fills every 2–3 weeks.',
  },
  {
    id: 'wispy-lash',
    name: 'Wispy Lash Sets',
    category: 'extensions',
    description: 'The Instagram-famous wispy look. Alternating lengths create a textured, winged-out style that photographs beautifully from every angle.',
    duration: '2h 15min',
    price: '$185',
    image: '/images/lash-portrait.jpg',
    features: ['Alternating spike lengths', 'Textured winged effect', 'Camera-ready finish', 'Lasts 4–5 weeks'],
    popular: true,
    aftercare: 'Use a lash sealant for extended wear. Avoid mascara.',
  },
  {
    id: 'mega-volume',
    name: 'Mega Volume Lashes',
    category: 'extensions',
    description: 'Maximum density, maximum drama. Ultra-fine extensions in dense fans (6–16D) for the boldest, most glamorous lash look possible.',
    duration: '2h 30min',
    price: '$210',
    priceFrom: 'From $125 (fill)',
    image: '/images/hero-lash.jpg',
    features: ['Maximum density (6–16D)', 'Showstopping glamour', 'Special event ready', 'Lasts 4–5 weeks'],
    aftercare: 'Professional maintenance is key. Book fills every 2–3 weeks.',
  },
  {
    id: 'lash-fills',
    name: 'Lash Fills',
    category: 'fills',
    description: 'Keep your lash set looking fresh and full. We replace grown-out or fallen extensions to restore your perfect lash line.',
    duration: '1h',
    price: '$65',
    priceFrom: 'Within 3 weeks of full set',
    image: 'https://images.pexels.com/photos/5128220/pexels-photo-5128220.jpeg?w=600&h=800&fit=crop&auto=format',
    features: ['Quick refresh', 'Replace lost lashes', 'Maintain fullness', 'Recommended every 2–3 weeks'],
  },
  {
    id: 'lash-removal',
    name: 'Lash Removal',
    category: 'fills',
    description: 'Gentle, safe removal of extensions using professional-grade remover. Your natural lashes are preserved and conditioned throughout.',
    duration: '30min',
    price: '$35',
    image: '/images/lash-studio.jpg',
    features: ['Gentle professional removal', 'Natural lash preservation', 'Conditioning treatment', 'Comfortable process'],
  },
  {
    id: 'lash-lift-tint',
    name: 'Lash Lift & Tint',
    category: 'lift',
    description: 'A perm-like treatment that curls and lifts your natural lashes from the base, paired with a dark tint for that mascara-effect — no extensions needed.',
    duration: '1h',
    price: '$95',
    image: '/images/lash-portrait.jpg',
    features: ['Natural curl enhancement', 'Dark tint included', 'Lasts 6–8 weeks', 'Zero maintenance'],
    popular: true,
    aftercare: 'Avoid water for 24 hours. No mascara needed — enjoy the low-maintenance life.',
  },
  {
    id: 'brow-tinting',
    name: 'Brow Tinting',
    category: 'brows',
    description: 'Semi-permanent dye shapes and defines your brows, adding depth and fullness. Wake up with beautiful, defined brows every morning.',
    duration: '30min',
    price: '$40',
    priceFrom: 'Add to any service for $30',
    image: '/images/lash-studio.jpg',
    features: ['Custom color matching', 'Lasts 2–4 weeks', 'Water-resistant', 'Frames your face'],
  },
  {
    id: 'brow-lamination',
    name: 'Brow Lamination',
    category: 'brows',
    description: 'The ultimate brow transformation. Hair is lifted, smoothed, and set into your perfect arch shape — creating that brushed-up, feathery brow look.',
    duration: '1h',
    price: '$85',
    image: '/images/hero-lash.jpg',
    features: ['Brushed-up feathery look', 'Custom shaping', 'Lasts 6–8 weeks', 'Instant brow transformation'],
    popular: true,
    aftercare: 'Keep brows dry for 24 hours. Apply nourishing oil daily.',
  },
];
