import { FiCalendar, FiMapPin, FiPhone } from 'react-icons/fi';
import { useCopy } from '../i18n/LanguageContext';
import { BOOKING_LINK, CONTACT, DIRECTIONS_URL } from '../config/site';

const copy = {
  EN: { call: 'Call', directions: 'Directions', book: 'Book a table' },
  DE: { call: 'Anrufen', directions: 'Anfahrt', book: 'Reservieren' },
};

/** Thumb-reachable quick actions, pinned to the bottom of the screen on phones and tablets. */
export default function MobileActionBar() {
  const t = useCopy(copy);

  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/20 bg-ink/95 backdrop-blur-md lg:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="grid h-16 grid-cols-[1fr_1fr_1.4fr] items-stretch">
        <a href={CONTACT.phoneHref} className="flex flex-col items-center justify-center gap-1 text-xs uppercase tracking-wider text-cream/80 active:bg-cream/5">
          <FiPhone size={18} className="text-gold" />
          {t.call}
        </a>
        <a
          href={DIRECTIONS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 border-x border-cream/10 text-xs uppercase tracking-wider text-cream/80 active:bg-cream/5"
        >
          <FiMapPin size={18} className="text-gold" />
          {t.directions}
        </a>
        <a
          {...BOOKING_LINK}
          className="flex items-center justify-center gap-2 bg-gold text-sm font-semibold uppercase tracking-widest text-ink active:bg-gold-dark"
        >
          <FiCalendar size={17} />
          {t.book}
        </a>
      </div>
    </nav>
  );
}
