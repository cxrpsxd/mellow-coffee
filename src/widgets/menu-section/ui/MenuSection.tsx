'use client';

import { useState } from 'react';
import { Reveal } from '@/shared/ui/Reveal';
import { Marquee } from '@/shared/ui/Marquee';
import { MenuCard } from '@/entities/menu-item/ui/MenuCard';
import { menuItems, MenuCategory } from '@/entities/menu-item/model/types';

const tabs: { id: MenuCategory; label: string }[] = [
  { id: 'coffee', label: 'Кофе' },
  { id: 'drinks', label: 'Напитки' },
  { id: 'bakery', label: 'Выпечка' },
];

export function MenuSection() {
  const [tab, setTab] = useState<MenuCategory>('coffee');

  return (
    <>
      <Marquee />
      <section id="menu" className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <h2 className="section-heading text-5xl md:text-7xl uppercase mb-8">Меню</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex gap-2 mb-8 flex-wrap">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`rounded-pill px-5 py-2 text-sm font-semibold transition-colors ${
                    tab === t.id ? 'bg-espresso text-foam' : 'bg-espresso/5 text-espresso/60 hover:bg-espresso/10'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2">
            {menuItems
              .filter((item) => item.category === tab)
              .map((item, i) => (
                <Reveal key={item.id} delay={i * 0.06}>
                  <MenuCard item={item} />
                </Reveal>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
