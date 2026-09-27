import { siteConfig } from '@/shared/config/site';

export function Footer() {
  return (
    <footer className="bg-espresso text-foam/70 py-10">
      <div className="mx-auto max-w-6xl px-5 md:px-8 flex flex-col md:flex-row justify-between gap-4 text-sm">
        <span className="font-display text-foam">{siteConfig.name}</span>
        <span>{siteConfig.address}</span>
        <span>{siteConfig.phone}</span>
        <span>© {new Date().getFullYear()} {siteConfig.name}</span>
      </div>
    </footer>
  );
}
