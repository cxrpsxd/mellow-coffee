'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/shared/config/site';
import { Button } from '@/shared/ui/Button';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-espresso/10">
      <div className="mx-auto max-w-6xl px-5 md:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="font-display font-bold text-lg tracking-tight">
          Mellow Coffee
        </a>

        <nav className="hidden md:flex items-center gap-2">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-pill px-4 py-2 text-sm font-medium text-espresso/70 hover:text-espresso hover:bg-espresso/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button variant="dark" className="!px-5 !py-2 text-sm" onClick={() => scrollToBooking()}>
            Забронировать
          </Button>
        </div>

        <button
          aria-label="Открыть меню"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-0.5 w-6 bg-espresso transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-espresso transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-espresso transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-cream border-t border-espresso/10"
          >
            <div className="flex flex-col p-5 gap-2">
              {siteConfig.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-pill px-4 py-3 font-medium hover:bg-espresso/5"
                >
                  {link.label}
                </a>
              ))}
              <Button onClick={() => { setOpen(false); scrollToBooking(); }}>Забронировать стол</Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function scrollToBooking() {
  document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
}
