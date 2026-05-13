import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import GalleryGrid from '@/components/GalleryGrid';
import { galleryItems, galleryCategories } from '@/data/gallery';

export default function Gallery() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-nude-50 via-brand-50 to-white dark:from-gray-950 dark:via-brand-950 dark:to-gray-950">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-brand-200/20 blur-3xl"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Work"
            title="Gallery of Lash Artistry"
            subtitle="Browse our collection of stunning lash transformations — from classic elegance to bold volume glamour."
          />
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid items={galleryItems} categories={galleryCategories} />
        </div>
      </section>
    </>
  );
}
