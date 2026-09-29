import { FiClock, FiMapPin, FiPhone } from 'react-icons/fi';
import { useCopy } from '../i18n/LanguageContext';
import { CONTACT, DIRECTIONS_URL, HOURS, MAP_EMBED_URL, BOOKING_LINK } from '../config/site';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';

const copy = {
  EN: {
    seoTitle: 'Opening hours, directions & contact',
    seoDescription: 'Visit Taj Indian Restaurant & Bar at Kochgasse 9, 1080 Vienna. Open daily 17:00–23:00. Phone +43 1 924 7141 — reserve a table online.',
    eyebrow: 'Visit us',
    title: 'Discover a journey of flavours and traditions',
    subtitle: 'Where every meal tells a story, connecting people through flavours and memories.',
    hours: 'Opening hours',
    daily: 'Monday – Sunday',
    location: 'Location',
    directions: 'Get directions',
    contact: 'Contact',
    contactText: 'Questions or special requests? We’re happy to help.',
    reservationTitle: 'Make a reservation',
    reservationText: 'Reserve a table for a memorable evening with friends and family.',
    book: 'Book now',
  },
  DE: {
    seoTitle: 'Öffnungszeiten, Anfahrt & Kontakt',
    seoDescription: 'Besuchen Sie das Taj Indian Restaurant & Bar in der Kochgasse 9, 1080 Wien. Täglich 17:00–23:00 geöffnet. Tel. +43 1 924 7141 — jetzt online reservieren.',
    eyebrow: 'Besuchen Sie uns',
    title: 'Eine Reise voller Aromen und Traditionen',
    subtitle: 'Wo jedes Gericht eine Geschichte erzählt und Menschen durch Aromen und Erinnerungen verbindet.',
    hours: 'Öffnungszeiten',
    daily: 'Montag – Sonntag',
    location: 'Adresse',
    directions: 'Route planen',
    contact: 'Kontakt',
    contactText: 'Fragen oder besondere Wünsche? Wir helfen gerne weiter.',
    reservationTitle: 'Tisch reservieren',
    reservationText: 'Reservieren Sie einen Tisch für einen unvergesslichen Abend mit Freunden und Familie.',
    book: 'Jetzt reservieren',
  },
};

function Card({ icon: Icon, title, children, delay }) {
  return (
    <Reveal delay={delay} className="border border-gold/20 p-6 text-center md:p-8">
      <Icon className="mx-auto text-gold" size={24} />
      <h2 className="mt-3 text-2xl text-cream md:mt-4">{title}</h2>
      <div className="mt-3 space-y-1 text-cream/75 md:mt-4">{children}</div>
    </Reveal>
  );
}

export default function Info() {
  const t = useCopy(copy);

  return (
    <>
      <Seo title={t.seoTitle} description={t.seoDescription} />
      <PageHero image="pages/info-banner" alt="Candle-lit table at Taj" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

      <section className="bg-glow mx-auto grid max-w-6xl gap-4 px-5 py-12 md:grid-cols-3 md:gap-5 md:py-16 lg:px-8">
        <Card icon={FiClock} title={t.hours}>
          <p className="text-cream">{t.daily}</p>
          <p>{HOURS.open} – {HOURS.close}</p>
        </Card>
        <Card icon={FiMapPin} title={t.location} delay={0.1}>
          <p>{CONTACT.street}</p>
          <p>{CONTACT.postalCode} {CONTACT.city}</p>
          <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block py-3 text-sm font-semibold uppercase tracking-widest text-gold hover:text-gold-light">
            {t.directions}
          </a>
        </Card>
        <Card icon={FiPhone} title={t.contact} delay={0.2}>
          <p className="text-sm">{t.contactText}</p>
          <a href={CONTACT.phoneHref} className="block py-2 hover:text-gold">{CONTACT.phone}</a>
          <a href={`mailto:${CONTACT.email}`} className="block py-2 hover:text-gold">{CONTACT.email}</a>
        </Card>
      </section>

      <Reveal className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-gold/20 bg-cocoa sm:aspect-[16/7]">
          {/* Lazy: the map only loads once it scrolls near the viewport, so it doesn't slow the page's first paint. */}
          <iframe title="Google Maps – Taj" src={MAP_EMBED_URL} className="h-full w-full border-0" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </Reveal>

      <section className="bg-glow px-5 py-12 text-center md:py-20">
        <Reveal className="mx-auto max-w-xl">
          <h2 className="text-3xl text-cream sm:text-4xl">{t.reservationTitle}</h2>
          <p className="mt-4 text-lg text-cream/70">{t.reservationText}</p>
          <a {...BOOKING_LINK} className="btn-primary mt-8">{t.book}</a>
        </Reveal>
      </section>
    </>
  );
}
