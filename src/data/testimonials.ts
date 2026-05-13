export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  rating: number;
  text: string;
  avatar: string;
  service?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Jasmine Carter',
    rating: 5,
    text: 'Absolutely obsessed with my lashes! The Hybrid set is pure perfection — so fluffy and natural-looking. I wake up feeling camera-ready every single day.',
    avatar: '/images/hero-lash.jpg',
    service: 'Hybrid Lashes',
  },
  {
    id: '2',
    name: 'Sophia Williams',
    rating: 5,
    text: 'The most luxurious lash experience I have ever had. The studio is stunning, the attention to detail is impeccable, and my lashes have never looked this good.',
    avatar: '/images/lash-portrait.jpg',
    service: 'Volume Lashes',
  },
  {
    id: '3',
    name: 'Amara Thompson',
    rating: 5,
    text: 'I trust no one else with my lashes. The wispy sets are pure artistry — every appointment feels like a luxury beauty treatment. My forever lash home.',
    avatar: '/images/lash-studio.jpg',
    service: 'Wispy Lash Set',
  },
  {
    id: '4',
    name: 'Olivia Bennett',
    rating: 5,
    text: 'Finally found my forever lash artist! My Classic set looks so natural and elegant. The studio vibe is so calming and chic. I recommend Foxy to everyone.',
    avatar: '/images/hero-lash.jpg',
    service: 'Classic Lashes',
  },
  {
    id: '5',
    name: 'Zara Mitchell',
    rating: 5,
    text: 'The lash lift and tint completely transformed my look. No more curlers and mascara — just naturally beautiful, curled lashes every morning. Life-changing!',
    avatar: '/images/lash-portrait.jpg',
    service: 'Lash Lift & Tint',
  },
  {
    id: '6',
    name: 'Layla Richards',
    rating: 5,
    text: 'My brow lamination is incredible — the brushed-up, feathery look I always wanted! Plus the brow tint perfectly frames my face. Foxy Aesthetics is the best.',
    avatar: '/images/lash-studio.jpg',
    service: 'Brow Lamination',
  },
];
