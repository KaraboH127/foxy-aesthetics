import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { type LucideIcon } from 'lucide-react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  external?: boolean;
  disabled?: boolean;
}

export default function AnimatedButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  className,
  type = 'button',
  external = false,
  disabled = false,
}: AnimatedButtonProps) {
  const baseStyles =
    'relative inline-flex items-center justify-center gap-2 font-medium rounded-full transition-colors duration-300 group cursor-pointer overflow-hidden';

  const variants = {
    primary:
      'bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-lg shadow-brand-200 hover:shadow-xl hover:shadow-brand-300 hover:from-brand-600 hover:to-brand-700',
    secondary:
      'bg-nude-100 text-nude-800 shadow-md shadow-nude-100 hover:bg-nude-200 hover:shadow-lg',
    outline:
      'border-2 border-brand-300 text-brand-700 hover:bg-brand-50 dark:border-brand-600 dark:text-brand-300 dark:hover:bg-brand-950',
    ghost:
      'text-brand-600 hover:bg-brand-50 dark:text-brand-400 dark:hover:bg-brand-950',
  };

  const sizes = {
    sm: 'text-sm px-5 py-2',
    md: 'text-sm md:text-base px-6 py-3',
    lg: 'text-base md:text-lg px-8 py-4',
  };

  const iconSizes = {
    sm: 16,
    md: 18,
    lg: 20,
  };

  const Comp = href ? motion(Link) : motion.button;

  const content = (
    <>
      <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      {Icon && iconPosition === 'left' && <Icon size={iconSizes[size]} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon size={iconSizes[size]} />}
    </>
  );

  if (href && !external) {
    return (
      <Comp
        to={href}
        className={cn(baseStyles, variants[variant], sizes[size], disabled && 'opacity-50 pointer-events-none', className)}
        whileHover={disabled ? {} : { scale: 1.03 }}
        whileTap={disabled ? {} : { scale: 0.97 }}
      >
        {content}
      </Comp>
    );
  }

  if (href && external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <Comp
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(baseStyles, variants[variant], sizes[size], disabled && 'opacity-50 pointer-events-none', className)}
      whileHover={disabled ? {} : { scale: 1.03 }}
      whileTap={disabled ? {} : { scale: 0.97 }}
    >
      {content}
    </Comp>
  );
}
