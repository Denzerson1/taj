import { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { useCopy, useLanguage } from '../i18n/LanguageContext';
import { MENUS } from '../config/site';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import SplitSection from '../components/SplitSection';
import Reveal from '../components/Reveal';
import Img from '../components/Img';

const MENU = {
  signature: [
    { name: 'Mughal E Negroni', EN: 'Saffron-spiced gin, vermouth, Campari, orange zest and a delicate saffron mist.', DE: 'Safran-Gewürzgin, Wermut, Campari, Orangenzeste und ein feiner Safrannebel.' },
    { name: 'Highway 44', EN: 'Cold masala chai, bourbon, lemon and sugar, garnished with star anise.', DE: 'Kalter Masala Chai, Bourbon, Zitrone und Zucker, garniert mit Sternanis.' },
    { name: 'Spicy Tequila Margarita', EN: 'Tequila, chilli, agave and lime with a chilli-salt rim.', DE: 'Tequila, Chili, Agave und Limette mit Chili-Salz-Rand.' },
    { name: 'Tequila Paan Refresher', EN: 'Tequila, betel leaf, apricot liqueur, fresh lime and berries.', DE: 'Tequila, Betelblatt, Marillenlikör, frische Limette und Beeren.' },
  ],
  classic: [
    { name: 'Cosmopolitan', EN: 'Vodka, Cointreau & cranberry', DE: 'Wodka, Cointreau & Cranberry' },
    { name: 'Espresso Martini', EN: 'Espresso, vodka & Kahlúa', DE: 'Espresso, Wodka & Kahlúa' },
    { name: 'Margarita', EN: 'Silver tequila, Cointreau & lime', DE: 'Silver Tequila, Cointreau & Limette' },
    { name: 'Martini', EN: 'Whiskey, Sweet Vermouth & Angostura Bitter', DE: 'Whiskey, roter Wermut & Angostura Bitter' },
    { name: 'Tommy’s Margarita', EN: 'Tequila, agave & lime', DE: 'Tequila, Agave & Limette' },
  ],
};

const FEATURED = [
  { image: 'drinks/negroni', name: 'Mughal E Negroni', EN: 'Inspired by the grandeur of the Mughal era: classic bitter notes meet aromatic Indian spices and saffron for a regal twist on a timeless cocktail.', DE: 'Inspiriert von der Pracht der Mogulzeit: klassische Bitternoten treffen auf aromatische indische Gewürze und Safran — ein königlicher Twist auf einen zeitlosen Klassiker.' },
  { image: 'drinks/highway-44', name: 'Highway 44', EN: 'Named after the road that runs the length of India, past countless chai stalls. The warmth of masala chai meets the smoothness of bourbon.', DE: 'Benannt nach der Straße, die ganz Indien durchquert — vorbei an unzähligen Chai-Ständen. Die Wärme von Masala Chai trifft auf die Weichheit von Bourbon.' },
  { image: 'drinks/spicy-margarita', name: 'Spicy Tequila Margarita', EN: 'The heat of Indian chillies balanced with sweet agave and fresh lime — bold, bright and dangerously refreshing.', DE: 'Die Schärfe indischer Chilis, ausbalanciert mit süßer Agave und frischer Limette — kräftig, frisch und gefährlich erfrischend.' },
  { image: 'drinks/paan', name: 'Tequila Paan Refresher', EN: 'A tribute to paan, India’s beloved after-dinner betel leaf: herbal, fruity and cooling, with tequila and fresh berries.', DE: 'Eine Hommage an Paan, Indiens beliebtes Betelblatt nach dem Essen: kräuterig, fruchtig und kühlend, mit Tequila und frischen Beeren.' },
  { image: 'drinks/espresso-martini', name: 'Espresso Martini', EN: 'Vodka, fresh espresso and coffee liqueur. Rich, velvety and the perfect finale to a long dinner.', DE: 'Wodka, frischer Espresso und Kaffeelikör. Vollmundig, samtig und das perfekte Finale eines langen Abendessens.' },
];

const copy = {
  EN: {
    seoTitle: 'Cocktails & Drinks',
    seoDescription: 'Indian-inspired signature cocktails in Vienna: Mughal E Negroni, Highway 44 with masala chai, spicy margarita and more at the Taj bar, Kochgasse 9, 1080 Vienna.',
    eyebrow: 'Drinks',
    title: 'Elevate your evening with exotic cocktails',
    menuCta: 'View the drinks menu',
    introEyebrow: 'The bar',
    introTitle: 'Signature cocktails & crafted drinks',
    intro: [
      'From bold, refreshing creations to smooth, sophisticated classics, our drinks are made to complement the food. Whether it’s a quiet evening or a lively celebration, there’s a glass for every mood.',
      'Raise a glass to good company, unexpected flavours and memorable nights.',
    ],
    tabs: { signature: 'Signature', classic: 'Classics' },
    featuredEyebrow: 'Behind the glass',
    featuredTitle: 'Our signatures',
  },
  DE: {
    seoTitle: 'Cocktails & Getränke',
    seoDescription: 'Indisch inspirierte Signature-Cocktails in Wien: Mughal E Negroni, Highway 44 mit Masala Chai, Spicy Margarita und mehr an der Taj Bar, Kochgasse 9, 1080 Wien.',
    eyebrow: 'Getränke',
    title: 'Exotische Cocktails für besondere Abende',
    menuCta: 'Getränkekarte ansehen',
    introEyebrow: 'Die Bar',
    introTitle: 'Signature-Cocktails & besondere Drinks',
    intro: [
      'Von kräftigen, erfrischenden Kreationen bis zu eleganten Klassikern — unsere Drinks sind gemacht, um das Essen zu begleiten. Ob ruhiger Abend oder ausgelassene Feier: Für jede Stimmung gibt es das passende Glas.',
      'Stoßen Sie an — auf gute Gesellschaft, überraschende Aromen und unvergessliche Abende.',
    ],
    tabs: { signature: 'Signature', classic: 'Klassiker' },
    featuredEyebrow: 'Hinter dem Glas',
    featuredTitle: 'Unsere Signatures',
  },
};

function CocktailMenu({ t, lang }) {
  const [tab, setTab] = useState('signature');

  return (
    <section className="mx-auto max-w-4xl px-5 py-12 md:py-20">
      <div className="flex justify-center gap-10 border-y border-gold/20 py-4" role="tablist">
        {Object.keys(MENU).map((key) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={tab === key}
            onClick={() => setTab(key)}
            className={`relative pb-1 font-display text-2xl transition-colors duration-300 ${tab === key ? 'text-gold' : 'text-cream/60 hover:text-cream'}`}
          >
            {t.tabs[key]}
            {tab === key && <m.span layoutId="tab-underline" className="absolute inset-x-0 -bottom-0.5 h-px bg-gold" />}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <m.ul
          key={tab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2"
        >
          {MENU[tab].map((drink) => (
            <li key={drink.name} className="text-center sm:text-left">
              <h3 className="text-2xl text-cream">{drink.name}</h3>
              <p className="mt-1 text-cream/60">{drink[lang]}</p>
            </li>
          ))}
        </m.ul>
      </AnimatePresence>
    </section>
  );
}

export default function Drinks() {
  const t = useCopy(copy);
  const { language: lang } = useLanguage();

  return (
    <>
      <Seo title={t.seoTitle} description={t.seoDescription} />
      <PageHero image="pages/drinks-banner" alt="Cocktail at the Taj bar" eyebrow={t.eyebrow} title={t.title}>
        <a href={MENUS.drinks} target="_blank" rel="noopener noreferrer" className="btn-primary">{t.menuCta}</a>
      </PageHero>

      <SplitSection image="pages/drinks" alt="Cocktails at Taj" eyebrow={t.introEyebrow} title={t.introTitle}>
        {t.intro.map((p) => <p key={p}>{p}</p>)}
      </SplitSection>

      <div className="bg-band">
        <CocktailMenu t={t} lang={lang} />
      </div>

      <section className="bg-glow mx-auto max-w-6xl overflow-x-clip px-5 py-12 md:py-20 lg:px-8">
        <Reveal className="text-center">
          <p className="eyebrow">{t.featuredEyebrow}</p>
          <h2 className="mt-3 text-3xl text-cream sm:text-4xl">{t.featuredTitle}</h2>
        </Reveal>
        <div className="mt-14 space-y-12 md:space-y-16">
          {FEATURED.map((drink, i) => (
            <div key={drink.name} className={`grid items-center gap-8 md:gap-16 ${i % 2 ? 'md:grid-cols-[7fr_5fr]' : 'md:grid-cols-[5fr_7fr]'}`}>
              <Reveal from={i % 2 ? 'right' : 'left'} className={i % 2 ? 'md:order-2' : ''}>
                <div className="mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-sm bg-cocoa md:max-w-none">
                  <Img name={drink.image} alt={drink.name} sizes="(min-width: 768px) 35vw, 90vw" className="h-full w-full object-cover" />
                </div>
              </Reveal>
              <Reveal from={i % 2 ? 'right' : 'left'} delay={0.1} className="text-center md:text-left">
                <span className="font-display text-5xl text-gold/30">0{i + 1}</span>
                <h3 className="mt-2 text-3xl text-gold-light sm:text-4xl">{drink.name}</h3>
                <p className="mt-3 text-base leading-relaxed text-cream/75 md:mt-4 md:text-lg">{drink[lang]}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
