import { create } from 'zustand';
import { BookingFormValues } from '@/shared/lib/validators';

export const emptyBookingForm: BookingFormValues = {
  name: '',
  phone: '',
  date: '',
  time: '',
  guests: 2,
  notes: '',
};

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

interface BookingStore {
  values: BookingFormValues;
  status: SubmitStatus;
  setField: <K extends keyof BookingFormValues>(field: K, value: BookingFormValues[K]) => void;
  setAll: (values: BookingFormValues) => void;
  setStatus: (status: SubmitStatus) => void;
  reset: () => void;
}

export const useBookingStore = create<BookingStore>((set) => ({
  values: emptyBookingForm,
  status: 'idle',
  setField: (field, value) =>
    set((state) => ({ values: { ...state.values, [field]: value } })),
  setAll: (values) => set({ values }),
  setStatus: (status) => set({ status }),
  reset: () => set({ values: emptyBookingForm, status: 'idle' }),
}));
