'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Clock } from 'lucide-react';
import { useClickOutside } from '@/shared/lib/useClickOutside';

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
  icon?: 'clock';
  error?: boolean;
}

export function Select({ value, onChange, options, placeholder = 'Выберите', icon, error }: SelectProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useClickOutside(rootRef, () => setOpen(false), open);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`input-base flex items-center justify-between gap-2 text-left ${
          error ? 'border-terracotta' : ''
        }`}
      >
        <span className={`flex items-center gap-2 ${value ? 'text-espresso' : 'text-espresso/40'}`}>
          {icon === 'clock' && <Clock size={16} className="text-terracotta shrink-0" />}
          {value || placeholder}
        </span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={16} className="text-espresso/50" />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="absolute z-20 mt-2 w-full max-h-60 overflow-y-auto rounded-xl border border-espresso/10 bg-foam p-1.5 shadow-xl"
          >
            {options.map((opt) => (
              <li key={opt}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(opt);
                    setOpen(false);
                  }}
                  className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                    opt === value
                      ? 'bg-terracotta text-foam font-semibold'
                      : 'text-espresso/80 hover:bg-espresso/5'
                  }`}
                >
                  {opt}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
