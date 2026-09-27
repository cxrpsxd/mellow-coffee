'use client';

import { useEffect, useRef } from 'react';

/**
 * Синхронизирует произвольный объект-состояние с localStorage.
 * Читает черновик один раз при монтировании (через onHydrate)
 * и сохраняет его при каждом изменении value.
 */
export function useLocalStorageDraft<T>(
  key: string,
  value: T,
  onHydrate: (draft: T) => void,
) {
  const hydrated = useRef(false);

  // Гидратация черновика при первом рендере (только в браузере)
  useEffect(() => {
    if (hydrated.current) return;
    hydrated.current = true;
    try {
      const raw = window.localStorage.getItem(key);
      if (raw) {
        const draft = JSON.parse(raw) as T;
        onHydrate(draft);
      }
    } catch {
      // повреждённый черновик — игнорируем
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Сохранение черновика при каждом изменении
  useEffect(() => {
    if (!hydrated.current) return;
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // localStorage недоступен (приватный режим и т.п.) — молча пропускаем
    }
  }, [key, value]);
}

export function clearLocalStorageDraft(key: string) {
  try {
    window.localStorage.removeItem(key);
  } catch {
    /* noop */
  }
}
