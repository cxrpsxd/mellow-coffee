'use client';

import { motion } from 'framer-motion';
import { MenuItem } from '../model/types';

export function MenuCard({ item }: { item: MenuItem }) {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: '0 12px 24px rgba(30,23,18,0.12)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="flex items-start justify-between gap-4 rounded-2xl bg-foam p-5 border border-espresso/10"
    >
      <div>
        <h4 className="font-display font-bold text-lg text-espresso">{item.name}</h4>
        <p className="text-sm text-espresso/60 mt-1">{item.description}</p>
      </div>
      <span className="font-display font-bold text-terracotta whitespace-nowrap">{item.price} ₽</span>
    </motion.div>
  );
}
