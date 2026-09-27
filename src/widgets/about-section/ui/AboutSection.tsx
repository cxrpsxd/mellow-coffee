import { Reveal } from '@/shared/ui/Reveal';

const facts = [
  { value: '2019', label: 'год открытия' },
  { value: '6', label: 'сортов зерна в ротации' },
  { value: '100%', label: 'обжарка своими руками' },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-sage/25 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8 grid md:grid-cols-2 gap-10 items-center">
        <Reveal>
          <div className="aspect-[4/5] rounded-3xl bg-terracotta/30 grain" />
        </Reveal>

        <div>
          <Reveal>
            <h2 className="section-heading text-4xl md:text-6xl uppercase mb-6">О нас</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-espresso/70 text-lg leading-relaxed mb-8">
              Mellow Coffee началась с одной маленькой обжарочной машины и убеждения:
              хороший кофе не терпит спешки. Мы обжариваем зерно небольшими партиями,
              подбираем профиль под сезон и стараемся, чтобы каждая чашка звучала мягко —
              как разговор с другом за соседним столиком.
            </p>
          </Reveal>

          <div className="grid grid-cols-3 gap-4">
            {facts.map((f, i) => (
              <Reveal key={f.label} delay={0.15 + i * 0.08}>
                <div>
                  <div className="font-display font-bold text-3xl md:text-4xl text-terracotta">
                    {f.value}
                  </div>
                  <div className="text-xs md:text-sm text-espresso/60 mt-1">{f.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
