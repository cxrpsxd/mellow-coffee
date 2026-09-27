'use client';

import { motion } from 'framer-motion';
import { ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'outline' | 'dark';

type ConflictingHandlers =
  | 'onAnimationStart'
  | 'onAnimationEnd'
  | 'onAnimationIteration'
  | 'onDrag'
  | 'onDragStart'
  | 'onDragEnd';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, ConflictingHandlers> {
  variant?: Variant;
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-terracotta text-foam hover:bg-terracotta-dark',
  outline: 'bg-transparent text-espresso border-2 border-espresso hover:bg-espresso hover:text-foam',
  dark: 'bg-espresso text-foam hover:bg-black',
};

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05, rotate: -1 }}
      whileTap={{ scale: 0.96, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
      className={`inline-flex items-center justify-center rounded-pill px-6 py-3 font-body font-semibold text-sm md:text-base transition-colors duration-200 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
