import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { useCopy, useLanguage } from '../i18n/LanguageContext';
import { BOOKING_LINK } from '../config/site';
import Img from './Img';

const copy = {
  EN: {
    about: 'About',
    food: 'Food',
    drinks: 'Drinks',
    info: 'Visit',
    blog: 'Journal',
    book: 'Book a table',
    menu: 'Open menu',
    close: 'Close menu',
  },
  DE: {
    about: 'Über uns',
    food: 'Speisen',
    drinks: 'Getränke',
    info: 'Besuch',
    blog: 'Journal',
    book: 'Reservieren',
    menu: 'Menü öffnen',
    close: 'Menü schließen',
  },
};

const LINKS = ['about', 'food', 'drinks', 'info', 'blog'];

function LanguageToggle({ className = '' }) {
  const { language, changeLanguage, languages } = useLanguage();
  return (
    <div className={`flex items-center text-xs font-semibold tracking-widest ${className}`} role="group" aria-label="Language">
      {languages.map((lang, i) => (
        <span key={lang} className="flex items-center">
          {i > 0 && <span className="mx-3 text-cream/30">/</span>}
          <button
            type="button"
            onClick={() => changeLanguage(lang)}
            aria-pressed={language === lang}
            className={`-m-2 p-2 transition-colors duration-300 ${language === lang ? 'text-gold' : 'text-cream/60 hover:text-cream'}`}
          >
            {lang}
          </button>
        </span>
      ))}
    </div>
  );
}

export default function Navbar() {
  const t = useCopy(copy);
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Only the home page has a full-screen hero the bar can sit transparently on top of.
  const overHero = pathname === '/' && !scrolled && !open;

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setScrolled(window.scrollY > 40));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const linkClass = ({ isActive }) =>
    `relative py-1 text-sm tracking-wide transition-colors duration-300 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-gold after:transition-transform after:duration-500 after:ease-smooth ${
      isActive ? 'text-gold after:scale-x-100' : 'text-cream/85 hover:text-cream after:scale-x-0 hover:after:scale-x-100'
    }`;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ease-smooth ${
          overHero ? 'bg-gradient-to-b from-black/50 to-transparent' : 'bg-ink/90 shadow-[0_1px_0_rgba(214,169,79,0.15)] backdrop-blur-md'
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:h-20 lg:px-8">
          <Link to="/" aria-label="Taj – Home" className={`shrink-0 transition-opacity duration-500 ${overHero ? 'pointer-events-none opacity-0 lg:pointer-events-auto lg:opacity-100' : 'opacity-100'}`}>
            <Img name="brand/logo" alt="Taj" priority className="h-9 w-auto lg:h-11" />
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {LINKS.map((key) => (
              <li key={key}>
                <NavLink to={`/${key}`} className={linkClass}>
                  {t[key]}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-6 lg:flex">
            <LanguageToggle />
            <a {...BOOKING_LINK} className="btn-primary px-5 py-2.5 text-xs">
              {t.book}
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 p-2 text-cream lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.close : t.menu}
          >
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu: rendered outside <header>, whose backdrop-filter would otherwise trap this fixed overlay inside it. */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[45] overflow-y-auto bg-ink pb-10 pt-16 transition-[opacity,visibility] duration-500 ease-smooth lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <ul className="flex flex-col items-center gap-2 pt-10">
          {LINKS.map((key, i) => (
            <li
              key={key}
              className={`transition-[opacity,transform] duration-500 ease-smooth ${open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`}
              style={{ transitionDelay: open ? `${80 + i * 50}ms` : '0ms' }}
            >
              <NavLink
                to={`/${key}`}
                className={({ isActive }) => `block px-6 py-2 font-display text-3xl ${isActive ? 'text-gold' : 'text-cream'}`}
              >
                {t[key]}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-col items-center gap-8">
          <a {...BOOKING_LINK} className="btn-primary">
            {t.book}
          </a>
          <LanguageToggle className="text-sm" />
        </div>
      </div>
    </>
  );
}
