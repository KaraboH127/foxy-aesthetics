import { motion } from 'framer-motion';
import { Clock, Sparkles } from 'lucide-react';
import AnimatedButton from './AnimatedButton';
import type { Service } from '@/data/services';

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-shadow duration-500"
    >
      {service.popular && (
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-lg shadow-brand-200">
            <Sparkles size={12} />
            Popular
          </span>
        </div>
      )}

      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-6 md:p-7">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-serif text-xl md:text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
              {service.name}
            </h3>
            <div className="flex items-center gap-2 mt-1.5 text-sm text-gray-500 dark:text-gray-400">
              <Clock size={14} />
              <span>{service.duration}</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl md:text-3xl font-serif font-bold text-brand-600 dark:text-brand-400">
              {service.price}
            </p>
            {service.priceFrom && (
              <p className="text-xs text-gray-400 mt-0.5">{service.priceFrom}</p>
            )}
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-4">
          {service.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {service.features.map((feature) => (
            <span
              key={feature}
              className="text-xs px-3 py-1 rounded-full bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300 font-medium"
            >
              {feature}
            </span>
          ))}
        </div>

        <AnimatedButton
          href="/booking"
          variant="outline"
          size="sm"
          className="w-full"
        >
          Book This Service
        </AnimatedButton>
      </div>
    </motion.div>
  );
}
