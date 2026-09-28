import { Reveal } from '@/shared/ui/Reveal';
import { BookingForm } from '@/features/booking-form/ui/BookingForm';

export function BookingSection() {
  return (
    <section id="booking" className="bg-espresso py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <Reveal>
          <h2 className="section-heading text-[clamp(1.4rem,7vw,2.25rem)] md:text-5xl lg:text-6xl uppercase mb-4 text-foam">
            Бронирование
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-foam/70 max-w-lg mb-10">
            Оставьте заявку — мы подтвердим бронь по телефону в течение дня.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="rounded-3xl bg-cream p-6 md:p-10">
            <BookingForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
