import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import type { Testimonial } from '@/data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

export default function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative bg-white dark:bg-gray-900 rounded-3xl p-6 md:p-8 border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <Quote
        size={32}
        className="text-brand-200 dark:text-brand-800 mb-4"
      />
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200 dark:text-gray-700'}
          />
        ))}
      </div>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-sm md:text-base">
        "{testimonial.text}"
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          loading="lazy"
          className="w-11 h-11 rounded-full object-cover ring-2 ring-brand-100 dark:ring-brand-800"
        />
        <div>
          <p className="font-semibold text-gray-900 dark:text-white text-sm">
            {testimonial.name}
          </p>
          {testimonial.service && (
            <p className="text-xs text-brand-500 dark:text-brand-400 font-medium">
              {testimonial.service}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
