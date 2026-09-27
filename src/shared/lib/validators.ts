export interface BookingFormValues {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  notes: string;
}

export type BookingFormErrors = Partial<Record<keyof BookingFormValues, string>>;

const PHONE_REGEX = /^\+?[0-9()\-\s]{10,18}$/;

export function validateBookingForm(values: BookingFormValues): BookingFormErrors {
  const errors: BookingFormErrors = {};

  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = 'Укажите имя (минимум 2 символа)';
  }

  if (!PHONE_REGEX.test(values.phone.trim())) {
    errors.phone = 'Введите корректный номер телефона';
  }

  if (!values.date) {
    errors.date = 'Выберите дату визита';
  } else {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selected = new Date(values.date);
    if (selected < today) {
      errors.date = 'Дата не может быть в прошлом';
    }
  }

  if (!values.time) {
    errors.time = 'Выберите время';
  }

  if (!values.guests || values.guests < 1 || values.guests > 20) {
    errors.guests = 'От 1 до 20 гостей';
  }

  return errors;
}

export function isFormValid(errors: BookingFormErrors): boolean {
  return Object.keys(errors).length === 0;
}
