import { Sparkles, Scissors, Image, Heart, Calendar, MessageCircle } from 'lucide-react';

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'About', href: '/about' },
  { name: 'Booking', href: '/booking' },
  { name: 'Contact', href: '/contact' },
];

export const navLinksWithIcons = [
  { name: 'Home', href: '/', icon: Sparkles },
  { name: 'Services', href: '/services', icon: Scissors },
  { name: 'Gallery', href: '/gallery', icon: Image },
  { name: 'About', href: '/about', icon: Heart },
  { name: 'Booking', href: '/booking', icon: Calendar },
  { name: 'Contact', href: '/contact', icon: MessageCircle },
];
