import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  className?: string;
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  alignment = 'center',
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      className={cn(
        'max-w-2xl',
        alignment === 'center' && 'mx-auto text-center',
        alignment === 'left' && 'text-left',
        className
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
    >
      {label && (
        <span
          className={cn(
            'inline-block text-xs md:text-sm font-semibold tracking-widest uppercase mb-3 md:mb-4 px-4 py-1.5 rounded-full',
            light
              ? 'bg-white/20 text-white backdrop-blur-sm'
              : 'bg-brand-100 text-brand-700 dark:bg-brand-900/50 dark:text-brand-300'
          )}
        >
          {label}
        </span>
      )}
      <h2
        className={cn(
          'font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-4 md:mb-6',
          light ? 'text-white' : 'text-gray-900 dark:text-white'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'text-base md:text-lg leading-relaxed max-w-xl',
            alignment === 'center' && 'mx-auto',
            light
              ? 'text-white/70'
              : 'text-gray-500 dark:text-gray-400'
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
