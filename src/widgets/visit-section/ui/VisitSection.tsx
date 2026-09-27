import { Reveal } from '@/shared/ui/Reveal';
import { siteConfig } from '@/shared/config/site';

export function VisitSection() {
  return (
    <section id="visit" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8 grid md:grid-cols-2 gap-10">
        <Reveal>
          <h2 className="section-heading text-4xl md:text-6xl uppercase mb-8">Визит</h2>
          <dl className="space-y-6">
            <div>
              <dt className="text-sm uppercase tracking-wide text-espresso/50">Адрес</dt>
              <dd className="text-lg font-medium mt-1">{siteConfig.address}</dd>
            </div>
            <div>
              <dt className="text-sm uppercase tracking-wide text-espresso/50">Телефон</dt>
              <dd className="text-lg font-medium mt-1">
                <a href={`tel:${siteConfig.phone.replace(/[^\d+]/g, '')}`}>{siteConfig.phone}</a>
              </dd>
            </div>
            <div>
              <dt className="text-sm uppercase tracking-wide text-espresso/50">Instagram</dt>
              <dd className="text-lg font-medium mt-1">{siteConfig.instagram}</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="rounded-2xl bg-foam border border-espresso/10 p-6">
            <h3 className="font-display font-bold text-xl mb-4">Часы работы</h3>
            <ul className="space-y-3">
              {siteConfig.hours.map((h) => (
                <li key={h.day} className="flex justify-between text-espresso/80">
                  <span>{h.day}</span>
                  <span className="font-semibold">{h.time}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 aspect-video rounded-xl overflow-hidden border border-espresso/10">
              <iframe
                src={siteConfig.mapEmbedUrl}
                title="Карта — как нас найти"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
