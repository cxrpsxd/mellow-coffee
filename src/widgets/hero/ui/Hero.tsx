'use client';

import { motion } from 'framer-motion';
import { Button } from '@/shared/ui/Button';
import { FloatingBadge } from '@/shared/ui/FloatingBadge';
import { images } from '@/shared/config/images';

export function Hero() {
  return (
    <section id="hero" className="relative pt-36 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="section-heading text-[13vw] sm:text-[12vw] md:text-[9vw] leading-[0.9] uppercase text-espresso"
          >
            Mellow<br />Coffee
          </motion.h1>

          <FloatingBadge
            label="☕"
            className="absolute -top-16 right-0 h-14 w-14 text-2xl md:right-10 md:top-6 md:h-24 md:w-24 md:text-5xl"
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
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4"
        >
          <Button
            className="w-full sm:w-auto"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Забронировать стол
          </Button>
          <Button
            variant="outline"
            className="w-full sm:w-auto"
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
              src={images.hero[0].src}
              alt={images.hero[0].alt}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="col-span-1 relative rounded-2xl overflow-hidden">
            <img
              src={images.hero[1].src}
              alt={images.hero[1].alt}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="col-span-1 relative rounded-2xl overflow-hidden">
            <img
              src={images.hero[2].src}
              alt={images.hero[2].alt}
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
