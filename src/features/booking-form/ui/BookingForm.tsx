'use client';

import { FormEvent, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBookingStore } from '../model/store';
import { sendBooking } from '../api/sendBooking';
import { Button } from '@/shared/ui/Button';
import { Select } from '@/shared/ui/Select';
import { DatePicker } from '@/shared/ui/DatePicker';
import { useLocalStorageDraft, clearLocalStorageDraft } from '@/shared/lib/useLocalStorageDraft';
import { generateTimeSlots } from '@/shared/lib/timeSlots';
import {
  validateBookingForm,
  isFormValid,
  BookingFormValues,
  BookingFormErrors,
} from '@/shared/lib/validators';

const DRAFT_KEY = 'mellow-coffee:booking-draft';
const TIME_SLOTS = generateTimeSlots(10, 22, 30); // 10:00 — 22:00, шаг 30 минут

export function BookingForm() {
  const { values, status, setField, setAll, setStatus, reset } = useBookingStore();

  // Гидратация черновика из localStorage при первом рендере + автосохранение при изменениях
  useLocalStorageDraft<BookingFormValues>(DRAFT_KEY, values, (draft) => setAll(draft));

  const allErrors = useMemo(() => validateBookingForm(values), [values]);
  // Ошибки показываем только после первой попытки отправки, а не сразу при загрузке страницы
  const [showErrors, setShowErrors] = useState(false);
  const errors: BookingFormErrors = showErrors ? allErrors : {};

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setShowErrors(true);
    if (!isFormValid(allErrors)) {
      setStatus('error');
      return;
    }
    setStatus('submitting');
    try {
      await sendBooking(values);
      setStatus('success');
      clearLocalStorageDraft(DRAFT_KEY);
      reset();
      setShowErrors(false);
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5 md:grid-cols-2">
      <Field label="Имя" error={errors.name}>
        <input
          className="input-base"
          value={values.name}
          onChange={(e) => setField('name', e.target.value)}
          placeholder="Как к вам обращаться"
        />
      </Field>

      <Field label="Телефон" error={errors.phone}>
        <input
          className="input-base"
          value={values.phone}
          onChange={(e) => setField('phone', e.target.value)}
          placeholder="+7 900 000-00-00"
          inputMode="tel"
        />
      </Field>

      <Field label="Дата" error={errors.date}>
        <DatePicker value={values.date} onChange={(v) => setField('date', v)} error={!!errors.date} />
      </Field>

      <Field label="Время" error={errors.time}>
        <Select
          value={values.time}
          onChange={(v) => setField('time', v)}
          options={TIME_SLOTS}
          placeholder="Выберите время"
          icon="clock"
          error={!!errors.time}
        />
      </Field>

      <Field label="Количество гостей" error={errors.guests}>
        <input
          type="number"
          min={1}
          max={20}
          className="input-base"
          value={values.guests}
          onChange={(e) => setField('guests', Number(e.target.value))}
        />
      </Field>

      <Field label="Пожелания" className="md:col-span-2">
        <textarea
          className="input-base min-h-[96px] resize-none"
          value={values.notes}
          onChange={(e) => setField('notes', e.target.value)}
          placeholder="Столик у окна, детский стул и т.д."
        />
      </Field>

      <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2">
        <Button type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Отправляем…' : 'Забронировать стол'}
        </Button>

        <AnimatePresence mode="wait">
          {status === 'success' && (
            <motion.p
              key="success"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-sm font-semibold text-sage"
            >
              Готово! Мы свяжемся с вами для подтверждения ✨
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p
              key="error"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-sm font-semibold text-terracotta"
            >
              Проверьте поля формы или попробуйте ещё раз чуть позже.
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <p className="md:col-span-2 text-xs text-espresso/50">
        Черновик формы сохраняется автоматически — можно спокойно закрыть вкладку и вернуться позже.
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  children,
  className = '',
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-1.5 ${className}`}>
      <span className="text-sm font-semibold text-espresso/70">{label}</span>
      {children}
      {error && <span className="text-xs text-terracotta">{error}</span>}
    </label>
  );
}
