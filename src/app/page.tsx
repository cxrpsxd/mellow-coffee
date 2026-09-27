import { Header } from '@/widgets/header/ui/Header';
import { Hero } from '@/widgets/hero/ui/Hero';
import { MenuSection } from '@/widgets/menu-section/ui/MenuSection';
import { AboutSection } from '@/widgets/about-section/ui/AboutSection';
import { SpaceSection } from '@/widgets/space-section/ui/SpaceSection';
import { VisitSection } from '@/widgets/visit-section/ui/VisitSection';
import { BookingSection } from '@/widgets/booking-section/ui/BookingSection';
import { Footer } from '@/widgets/footer/ui/Footer';

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <MenuSection />
      <AboutSection />
      <SpaceSection />
      <VisitSection />
      <BookingSection />
      <Footer />
    </main>
  );
}
