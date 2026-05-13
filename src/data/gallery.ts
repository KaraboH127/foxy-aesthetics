export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: string;
  width: number;
  height: number;
}

export const galleryCategories = [
  { id: 'all', name: 'All' },
  { id: 'classic', name: 'Classic Sets' },
  { id: 'hybrid', name: 'Hybrid Sets' },
  { id: 'volume', name: 'Volume Sets' },
  { id: 'wispy', name: 'Wispy Sets' },
  { id: 'brows', name: 'Brow Transformations' },
  { id: 'lift', name: 'Lash Lift Results' },
];

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    src: '/images/lash-portrait.jpg',
    alt: 'Beautiful natural classic lash set with elegant curl',
    category: 'classic',
    width: 600,
    height: 800,
  },
  {
    id: '2',
    src: 'https://images.pexels.com/photos/5128220/pexels-photo-5128220.jpeg?w=600&h=700&fit=crop&auto=format',
    alt: 'Lash technician applying hybrid extensions with precision',
    category: 'hybrid',
    width: 600,
    height: 700,
  },
  {
    id: '3',
    src: '/images/hero-lash.jpg',
    alt: 'Dramatic volume lash set with full fluffy fans',
    category: 'volume',
    width: 600,
    height: 750,
  },
  {
    id: '4',
    src: '/images/lash-studio.jpg',
    alt: 'Wispy lash extensions with textured winged effect',
    category: 'wispy',
    width: 600,
    height: 850,
  },
  {
    id: '5',
    src: '/images/lash-portrait.jpg',
    alt: 'Subtle everyday classic lashes on natural eye',
    category: 'classic',
    width: 600,
    height: 700,
  },
  {
    id: '6',
    src: '/images/lash-studio.jpg',
    alt: 'Perfectly feathered brow lamination with tinted finish',
    category: 'brows',
    width: 600,
    height: 750,
  },
  {
    id: '7',
    src: '/images/hero-lash.jpg',
    alt: 'Mega volume lashes for ultimate glamour and density',
    category: 'volume',
    width: 600,
    height: 900,
  },
  {
    id: '8',
    src: '/images/lash-portrait.jpg',
    alt: 'Before and after lash lift transformation with dramatic curl',
    category: 'lift',
    width: 600,
    height: 700,
  },
  {
    id: '9',
    src: 'https://images.pexels.com/photos/5128220/pexels-photo-5128220.jpeg?w=600&h=800&fit=crop&auto=format',
    alt: 'Soft wispy hybrid lash set with custom curl pattern',
    category: 'wispy',
    width: 600,
    height: 800,
  },
  {
    id: '10',
    src: '/images/lash-studio.jpg',
    alt: 'Beautiful hybrid lashes framing the eye perfectly',
    category: 'hybrid',
    width: 600,
    height: 750,
  },
  {
    id: '11',
    src: '/images/hero-lash.jpg',
    alt: 'Lash lift and tint results with natural curl enhancement',
    category: 'lift',
    width: 600,
    height: 800,
  },
  {
    id: '12',
    src: '/images/lash-portrait.jpg',
    alt: 'Defined brow lamination with brushed-up feathered look',
    category: 'brows',
    width: 600,
    height: 700,
  },
  {
    id: '13',
    src: 'https://images.pexels.com/photos/5128220/pexels-photo-5128220.jpeg?w=600&h=800&fit=crop&auto=format',
    alt: 'Luxury beauty studio lash application session in progress',
    category: 'classic',
    width: 600,
    height: 800,
  },
  {
    id: '14',
    src: '/images/hero-lash.jpg',
    alt: 'Volume lash set with natural density increase',
    category: 'volume',
    width: 600,
    height: 750,
  },
  {
    id: '15',
    src: '/images/lash-studio.jpg',
    alt: 'Stunning before and after lash extension transformation',
    category: 'wispy',
    width: 600,
    height: 800,
  },
  {
    id: '16',
    src: '/images/lash-portrait.jpg',
    alt: 'Soft glam beauty portrait with hybrid lash extensions',
    category: 'hybrid',
    width: 600,
    height: 850,
  },
];
