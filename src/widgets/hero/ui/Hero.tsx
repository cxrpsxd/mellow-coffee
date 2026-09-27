'use client';

import { motion } from 'framer-motion';
import { Button } from '@/shared/ui/Button';
import { FloatingBadge } from '@/shared/ui/FloatingBadge';

export function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="section-heading text-[15vw] md:text-[9vw] leading-[0.9] uppercase text-espresso"
          >
            Mellow<br />Coffee
          </motion.h1>

          <FloatingBadge
            label="☕"
            className="absolute right-2 top-2 md:right-10 md:top-6 h-16 w-16 md:h-24 md:w-24 text-3xl md:text-5xl"
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-xl mt-6 text-lg text-espresso/70"
        >
          Кофейня с обжаркой под себя. Мягкий свет, тёплое дерево и напитки,
          которые не хочется торопить.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-8 flex gap-4"
        >
          <Button onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
            Забронировать стол
          </Button>
          <Button
            variant="outline"
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Смотреть меню
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 grid grid-cols-3 gap-3 md:gap-4 h-56 md:h-80"
        >
          <div className="col-span-1 relative rounded-2xl overflow-hidden">
            <img
              src="https://picsum.photos/seed/mellow-coffee-1/600/800"
              alt="Чашка кофе в интерьере кофейни"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="col-span-1 relative rounded-2xl overflow-hidden">
            <img
              src="https://picsum.photos/seed/mellow-coffee-2/600/800"
              alt="Интерьер кофейни Mellow Coffee"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="col-span-1 relative rounded-2xl overflow-hidden">
            <img
              src="https://picsum.photos/seed/mellow-coffee-3/600/800"
              alt="Десерт и напиток на столе"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
