'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { useClickOutside } from '@/shared/lib/useClickOutside';

interface DatePickerProps {
  value: string; // 'YYYY-MM-DD'
  onChange: (value: string) => void;
  error?: boolean;
}

const WEEKDAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

function toISODate(d: Date): string {
  const y = d.getFullYear();
  const m = (d.getMonth() + 1).toString().padStart(2, '0');
  const day = d.getDate().toString().padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function startOfDay(d: Date): Date {
  const copy = new Date(d);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

// Понедельник = 0 ... Воскресенье = 6
function mondayIndex(jsDay: number): number {
  return (jsDay + 6) % 7;
}

export function DatePicker({ value, onChange, error }: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const today = startOfDay(new Date());

  const selected = value ? startOfDay(new Date(value)) : null;
  const [viewDate, setViewDate] = useState(selected ?? today);

  useClickOutside(rootRef, () => setOpen(false), open);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const leadingBlanks = mondayIndex(firstOfMonth.getDay());

  const cells: (Date | null)[] = [
    ...Array(leadingBlanks).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => new Date(year, month, i + 1)),
  ];

  const monthLabel = viewDate.toLocaleDateString('ru-RU', { month: 'long', year: 'numeric' });
  const displayLabel = selected
    ? selected.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })
    : '';

  function changeMonth(delta: number) {
    setViewDate(new Date(year, month + delta, 1));
  }

  function pick(day: Date) {
    onChange(toISODate(day));
    setOpen(false);
  }

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
          <CalendarIcon size={16} className="text-terracotta shrink-0" />
          {displayLabel || 'Выберите дату'}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="absolute z-20 mt-2 w-[min(18rem,calc(100vw-3.5rem))] rounded-2xl border border-espresso/10 bg-foam p-4 shadow-xl"
          >
            <div className="flex items-center justify-between mb-3">
              <button
                type="button"
                onClick={() => changeMonth(-1)}
                className="rounded-full p-1.5 hover:bg-espresso/5 transition-colors"
                aria-label="Предыдущий месяц"
              >
                <ChevronLeft size={18} />
              </button>
              <span className="font-display font-medium text-sm capitalize">{monthLabel}</span>
              <button
                type="button"
                onClick={() => changeMonth(1)}
                className="rounded-full p-1.5 hover:bg-espresso/5 transition-colors"
                aria-label="Следующий месяц"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-1">
              {WEEKDAYS.map((w) => (
                <div key={w} className="text-center text-[11px] font-semibold text-espresso/40 py-1">
                  {w}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {cells.map((day, i) => {
                if (!day) return <div key={`blank-${i}`} />;
                const isPast = day < today;
                const isSelected = selected && day.getTime() === selected.getTime();
                const isToday = day.getTime() === today.getTime();

                return (
                  <button
                    key={day.toISOString()}
                    type="button"
                    disabled={isPast}
                    onClick={() => pick(day)}
                    className={`relative aspect-square rounded-full text-sm transition-colors ${
                      isPast
                        ? 'text-espresso/25 cursor-not-allowed'
                        : isSelected
                          ? 'bg-terracotta text-foam font-semibold'
                          : 'text-espresso hover:bg-espresso/8'
                    }`}
                  >
                    {day.getDate()}
                    {isToday && !isSelected && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-terracotta" />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
