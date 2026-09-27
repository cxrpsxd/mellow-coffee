'use client';

import { motion } from 'framer-motion';

export function FloatingBadge({
  className = '',
  label = '☕',
}: {
  className?: string;
  label?: string;
}) {
  return (
    <motion.div
      animate={{ y: [0, -14, 0], rotate: [0, 6, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      className={`flex items-center justify-center rounded-full bg-honey text-espresso font-display font-bold shadow-md select-none ${className}`}
    >
      {label}
    </motion.div>
  );
}
