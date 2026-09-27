'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Reveal } from '@/shared/ui/Reveal';

export function SpaceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const y2 = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section id="space" ref={ref} className="bg-honey/25 py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <h2 className="section-heading text-4xl md:text-6xl uppercase mb-4">Пространство</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-espresso/70 max-w-lg mb-10">
            Дерево, тёплый свет и много воздуха между столами — заходите, чтобы
            остаться подольше.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <motion.div style={{ y: y1 }} className="col-span-1 aspect-[3/4] rounded-2xl overflow-hidden">
            <img
              src="https://picsum.photos/seed/mellow-coffee-space-1/500/700"
              alt="Зона с деревянными столами и мягким светом"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.div style={{ y: y2 }} className="col-span-1 aspect-[3/4] rounded-2xl overflow-hidden mt-8">
            <img
              src="https://picsum.photos/seed/mellow-coffee-space-2/500/700"
              alt="Барная стойка кофейни"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.div style={{ y: y1 }} className="hidden md:block col-span-1 aspect-[3/4] rounded-2xl overflow-hidden">
            <img
              src="https://picsum.photos/seed/mellow-coffee-space-3/500/700"
              alt="Уютный уголок кофейни"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
