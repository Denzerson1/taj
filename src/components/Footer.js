import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { useCopy } from '../i18n/LanguageContext';
import { CONTACT, DIRECTIONS_URL, HOURS, BOOKING_LINK, SOCIAL } from '../config/site';
import Img from './Img';

const copy = {
  EN: {
    tagline: 'Indian cuisine & cocktail bar in the heart of Josefstadt, Vienna.',
    hours: 'Opening hours',
    daily: 'Monday – Sunday',
    takeout: 'Takeout & delivery',
    takeoutHours: 'Daily 11:00 – 22:30',
    explore: 'Explore',
    visit: 'Visit us',
    links: { about: 'About', food: 'Food', drinks: 'Drinks', info: 'Contact', blog: 'Journal' },
    reserve: 'Reservations',
    imprint: 'Imprint',
  },
  DE: {
    tagline: 'Indische Küche & Cocktailbar im Herzen der Josefstadt, Wien.',
    hours: 'Öffnungszeiten',
    daily: 'Montag – Sonntag',
    takeout: 'Abholung & Lieferung',
    takeoutHours: 'Täglich 11:00 – 22:30',
    explore: 'Entdecken',
    visit: 'Besuchen Sie uns',
    links: { about: 'Über uns', food: 'Speisen', drinks: 'Getränke', info: 'Kontakt', blog: 'Journal' },
    reserve: 'Reservierung',
    imprint: 'Impressum',
  },
};

export default function Footer() {
  const t = useCopy(copy);

  return (
    <footer className="border-t border-gold/15 bg-ink bg-gradient-to-b from-ink via-ink to-espresso pb-16 lg:pb-0">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-10 px-5 py-12 md:py-16 lg:grid-cols-4 lg:gap-12 lg:px-8">
        <div className="col-span-2 lg:col-span-1">
          <Img name="brand/logo" alt="Taj" className="h-12 w-auto" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/60">{t.tagline}</p>
          <div className="mt-6 flex gap-3">
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors duration-300 hover:bg-gold hover:text-ink">
              <FaInstagram size={16} />
            </a>
            <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors duration-300 hover:bg-gold hover:text-ink">
              <FaFacebookF size={14} />
            </a>
          </div>
        </div>

        <div>
          <h2 className="eyebrow">{t.hours}</h2>
          <dl className="mt-5 space-y-4 text-sm text-cream/75">
            <div>
              <dt className="text-cream">{t.daily}</dt>
              <dd>{HOURS.open} – {HOURS.close}</dd>
            </div>
            <div>
              <dt className="text-cream">{t.takeout}</dt>
              <dd>{t.takeoutHours}</dd>
            </div>
          </dl>
        </div>

        <div>
          <h2 className="eyebrow">{t.explore}</h2>
          <ul className="mt-5 space-y-2.5 text-sm">
            {Object.entries(t.links).map(([key, label]) => (
              <li key={key}>
                <Link to={`/${key}`} className="text-cream/75 transition-colors hover:text-gold">{label}</Link>
              </li>
            ))}
            <li>
              <a {...BOOKING_LINK} className="text-cream/75 transition-colors hover:text-gold">{t.reserve}</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="eyebrow">{t.visit}</h2>
          <address className="mt-5 space-y-2.5 text-sm not-italic text-cream/75">
            <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="block transition-colors hover:text-gold">
              {CONTACT.street}
              <br />
              {CONTACT.postalCode} {CONTACT.city}
            </a>
            <a href={CONTACT.phoneHref} className="block transition-colors hover:text-gold">{CONTACT.phone}</a>
            <a href={`mailto:${CONTACT.email}`} className="block transition-colors hover:text-gold">{CONTACT.email}</a>
          </address>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-cream/45 sm:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} Taj – Indian Restaurant & Bar · Site by DK</p>
          <Link to="/imprint" className="transition-colors hover:text-gold">{t.imprint}</Link>
        </div>
      </div>
    </footer>
  );
}
