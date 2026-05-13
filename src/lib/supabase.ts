// Supabase client placeholder — ready for production integration
// Replace these with your actual Supabase project URL and anon key

export const SUPABASE_CONFIG = {
  url: import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co',
  anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key',
};

export const SUPABASE_TABLES = {
  BOOKINGS: 'bookings',
  SERVICES: 'services',
  GALLERY: 'gallery_images',
  TESTIMONIALS: 'testimonials',
  CONTACTS: 'contact_submissions',
  PROFILES: 'profiles',
} as const;

// Example query patterns for future Supabase integration:
//
// import { createClient } from '@supabase/supabase-js';
// const supabase = createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
//
// // Fetch services
// const { data: services } = await supabase.from(SUPABASE_TABLES.SERVICES).select('*');
//
// // Create booking
// const { data: booking } = await supabase.from(SUPABASE_TABLES.BOOKINGS).insert({...});
//
// // Fetch gallery
// const { data: gallery } = await supabase.from(SUPABASE_TABLES.GALLERY).select('*');
