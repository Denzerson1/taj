import { useEffect, useRef, useState } from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import { useCopy } from '../i18n/LanguageContext';
import { SOCIAL } from '../config/site';
import Img from './Img';

const SLIDES = [
  { image: 'hero/ambience', alt: 'Candle-lit dining room at Taj' },
  { image: 'hero/spread', alt: 'A table full of Indian dishes' },
  { image: 'hero/cocktails', alt: 'Signature cocktails at the Taj bar' },
  { image: 'hero/table', alt: 'Curry being served at the table' },
  { image: 'hero/drinks', alt: 'Cocktails on the bar' },
  { image: 'hero/dining-room', alt: 'The Taj dining room' },
  { image: 'hero/table-2', alt: 'Dinner for two at Taj' },
  { image: 'hero/favourite', alt: 'A cocktail with Indian spices' },
];

const INTERVAL = 6000;
const FADE = 1600;

const copy = {
  EN: { subtitle: 'Experience the Essence of Indian Culinary', scroll: 'Scroll down', slide: 'Show slide' },
  DE: { subtitle: 'Erleben Sie die indische Küche', scroll: 'Nach unten scrollen', slide: 'Bild anzeigen' },
};

export default function HeroSlideshow({ scrollTargetId }) {
  const t = useCopy(copy);
  const [current, setCurrent] = useState(0);
  // Slides are only mounted once they're (about to be) shown, so the page doesn't download all of them up front.
  const [mounted, setMounted] = useState(() => new Set([0, 1]));

  useEffect(() => {
    const id = setTimeout(() => setCurrent((i) => (i + 1) % SLIDES.length), INTERVAL);
    return () => clearTimeout(id);
  }, [current]);

  useEffect(() => {
    const next = (current + 1) % SLIDES.length;
    setMounted((prev) => (prev.has(next) ? prev : new Set(prev).add(next)));
  }, [current]);

  // Swipe left/right to change slides on touch screens.
  const touchX = useRef(null);
  const goTo = (i) => {
    const next = (i + SLIDES.length) % SLIDES.length;
    setMounted((prev) => new Set(prev).add(next));
    setCurrent(next);
  };
  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) > 50) goTo(current + (dx < 0 ? 1 : -1));
  };

  const scrollDown = () => document.getElementById(scrollTargetId)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative h-[100svh] min-h-[560px] overflow-hidden bg-ink" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      {SLIDES.map((slide, i) => {
        const active = i === current;
        return (
          <div
            key={slide.image}
            aria-hidden={!active}
            className="absolute inset-0 will-change-[opacity,transform]"
            style={{
              opacity: active ? 1 : 0,
              transform: active ? 'scale(1.08)' : 'scale(1)',
              // Zoom slowly while visible; reset scale only after the fade-out has finished.
              transition: active
                ? `opacity ${FADE}ms ease-in-out, transform ${INTERVAL + FADE}ms linear`
                : `opacity ${FADE}ms ease-in-out, transform 0s linear ${FADE}ms`,
            }}
          >
            {mounted.has(i) && <Img name={slide.image} alt={slide.alt} priority={i === 0} className="h-full w-full object-cover" />}
          </div>
        );
      })}

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/45 to-black/75 md:from-black/40 md:via-black/35 md:to-black/70" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
        <h1 className="sr-only">Taj – Indian Restaurant & Bar Wien</h1>
        <Img name="brand/logo" alt="" priority className="h-32 w-auto animate-fade-up drop-shadow-2xl sm:h-44 lg:h-56" />
        <p className="mt-6 animate-fade-up font-display text-xl italic text-cream/90 [animation-delay:200ms] sm:text-2xl lg:text-3xl">
          {t.subtitle}
        </p>
        <button
          type="button"
          onClick={scrollDown}
          aria-label={t.scroll}
          className="mt-10 animate-fade-up rounded-full border border-gold/50 p-3 text-gold transition-colors duration-300 [animation-delay:400ms] hover:bg-gold/10"
        >
          <FiChevronDown size={22} className="animate-bob" />
        </button>
      </div>

      <div className="absolute inset-x-0 bottom-20 z-10 flex items-center justify-center px-5 lg:bottom-8 lg:px-10">
        <div className="absolute left-5 hidden gap-4 text-gold sm:flex lg:left-10">
          <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-colors hover:text-cream">
            <FaInstagram size={20} />
          </a>
          <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition-colors hover:text-cream">
            <FaFacebookF size={18} />
          </a>
        </div>
        <div className="flex gap-2">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.image}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`${t.slide} ${i + 1}`}
              className="px-1.5 py-4"
            >
              <span className={`block h-0.5 rounded-full transition-all duration-700 ease-smooth ${i === current ? 'w-8 bg-gold' : 'w-4 bg-cream/40'}`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
