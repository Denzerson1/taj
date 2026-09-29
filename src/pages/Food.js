import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import { useCopy } from '../i18n/LanguageContext';
import { MENUS } from '../config/site';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import SplitSection from '../components/SplitSection';
import DeliveryLinks from '../components/DeliveryLinks';
import Reveal from '../components/Reveal';
import Img from '../components/Img';

const DISHES = [
  { image: 'blog/butter-chicken', name: 'Butter Chicken', slug: 'indian-curry-guide' },
  { image: 'blog/biryani', name: 'Chicken Biryani', slug: 'chicken-biryani' },
  { image: 'blog/paneer-tikka', name: 'Paneer Tikka', slug: 'paneer-tikka' },
  { image: 'blog/chana-masala', name: 'Chana Masala', slug: 'chana-masala' },
  { image: 'blog/thali', name: 'Thali', slug: 'what-is-a-thali' },
];

const copy = {
  EN: {
    seoTitle: 'Food & Menu',
    seoDescription: 'Explore the Taj menu: curries, biryani, tandoori, vegan and vegetarian Indian dishes in Vienna 1080. View our food, vegan and vegetarian menus online.',
    eyebrow: 'Food',
    title: 'Celebrating Indian heritage through a Viennese lens',
    menuCta: 'View the menu',
    introEyebrow: 'Indian cuisine',
    introTitle: 'From street food to royal curries',
    intro: [
      'Experience the diversity of Indian traditions through our dishes. Every plate is made with the freshest ingredients and carefully balanced spices.',
      'From savoury street food to slow-cooked curries, our menu is a tour of India’s culinary landscape — perfect for a quick dinner, a long evening or a celebration.',
    ],
    dishesEyebrow: 'Guest favourites',
    dishesTitle: 'Dishes worth crossing town for',
    menusEyebrow: 'Our menus',
    menusTitle: 'Something for every appetite',
    menus: [
      { key: 'food', title: 'Food menu', text: 'Starters, tandoori, curries, biryani and breads.' },
      { key: 'vegetarian', title: 'Vegetarian menu', text: 'Paneer, dal, vegetable curries and more.' },
      { key: 'vegan', title: 'Vegan menu', text: 'Fully plant-based, full of flavour.' },
    ],
    orderEyebrow: 'Takeout & delivery',
    orderTitle: 'Order online',
    orderText: 'Enjoy Taj at home — order through your favourite delivery platform.',
  },
  DE: {
    seoTitle: 'Speisen & Speisekarte',
    seoDescription: 'Die Speisekarte des Taj: Currys, Biryani, Tandoori sowie vegane und vegetarische indische Gerichte in Wien 1080. Speisekarten online ansehen.',
    eyebrow: 'Speisen',
    title: 'Indisches Erbe, mit Wiener Blick gefeiert',
    menuCta: 'Speisekarte ansehen',
    introEyebrow: 'Indische Küche',
    introTitle: 'Von Street Food bis zum königlichen Curry',
    intro: [
      'Erleben Sie die Vielfalt der indischen Traditionen in unseren Gerichten. Jeder Teller wird mit frischesten Zutaten und sorgfältig abgestimmten Gewürzen zubereitet.',
      'Vom herzhaften Street Food bis zum langsam geschmorten Curry ist unsere Karte eine Reise durch Indiens kulinarische Landschaft — für das schnelle Abendessen, den langen Abend oder die große Feier.',
    ],
    dishesEyebrow: 'Lieblinge unserer Gäste',
    dishesTitle: 'Gerichte, für die sich der Weg lohnt',
    menusEyebrow: 'Unsere Karten',
    menusTitle: 'Für jeden Appetit',
    menus: [
      { key: 'food', title: 'Speisekarte', text: 'Vorspeisen, Tandoori, Currys, Biryani und Brote.' },
      { key: 'vegetarian', title: 'Vegetarische Karte', text: 'Paneer, Dal, Gemüsecurrys und mehr.' },
      { key: 'vegan', title: 'Vegane Karte', text: 'Rein pflanzlich, voller Geschmack.' },
    ],
    orderEyebrow: 'Abholung & Lieferung',
    orderTitle: 'Online bestellen',
    orderText: 'Genießen Sie das Taj zu Hause — bestellen Sie über Ihre Lieblingsplattform.',
  },
};

export default function Food() {
  const t = useCopy(copy);

  return (
    <>
      <Seo title={t.seoTitle} description={t.seoDescription} />
      <PageHero image="pages/food-banner" alt="Indian dishes at Taj" eyebrow={t.eyebrow} title={t.title}>
        <a href={MENUS.food} target="_blank" rel="noopener noreferrer" className="btn-primary">{t.menuCta}</a>
      </PageHero>

      <section className="bg-glow mx-auto max-w-6xl px-5 pb-4 pt-12 md:pt-16 lg:px-8">
        <Reveal className="text-center">
          <p className="eyebrow">{t.menusEyebrow}</p>
          <h2 className="mt-3 text-3xl text-cream sm:text-4xl">{t.menusTitle}</h2>
        </Reveal>
        <div className="mt-8 grid gap-3 md:mt-12 md:grid-cols-3 md:gap-5">
          {t.menus.map((menu, i) => (
            <Reveal key={menu.key} delay={i * 0.1}>
              <a
                href={MENUS[menu.key]}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-row items-center justify-between gap-4 border border-gold/25 p-5 transition-colors md:flex-col md:items-stretch md:p-8 duration-500 ease-smooth hover:border-gold hover:bg-gold/[0.06]"
              >
                <div>
                  <h3 className="text-2xl text-cream">{menu.title}</h3>
                  <p className="mt-1 text-sm text-cream/65 md:mt-3 md:text-base">{menu.text}</p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-widest text-gold md:mt-8">
                  PDF <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <SplitSection image="pages/food" alt="Freshly prepared Indian food" eyebrow={t.introEyebrow} title={t.introTitle}>
        {t.intro.map((p) => <p key={p}>{p}</p>)}
      </SplitSection>

      <section className="bg-band py-12 md:py-20">
        <Reveal className="mx-auto max-w-7xl px-5 text-center lg:px-8">
          <p className="eyebrow">{t.dishesEyebrow}</p>
          <h2 className="mt-3 text-3xl text-cream sm:text-4xl">{t.dishesTitle}</h2>
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-7xl grid-cols-2 gap-4 px-5 sm:gap-6 lg:grid-cols-5 lg:px-8">
          {DISHES.map((dish, i) => (
            <Reveal key={dish.slug} delay={i * 0.08} className={i === DISHES.length - 1 ? 'col-span-2 lg:col-span-1' : ''}>
              {/* The odd last tile spans the full row on phones, so it gets a wide shape there instead of a giant portrait. */}
              <Link
                to={`/blog/${dish.slug}`}
                className={`group relative block overflow-hidden rounded-sm bg-cocoa ${i === DISHES.length - 1 ? 'aspect-[16/9] lg:aspect-[4/5]' : 'aspect-[4/5]'}`}
              >
                <Img name={dish.image} alt={dish.name} sizes="(min-width: 1024px) 20vw, 50vw" className="h-full w-full object-cover transition-transform duration-[1.2s] ease-smooth group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
                <span className="absolute inset-x-0 bottom-0 p-4 font-display text-xl text-cream sm:text-2xl">{dish.name}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>


      <section className="bg-glow px-5 py-12 text-center md:py-20">
        <Reveal>
          <p className="eyebrow">{t.orderEyebrow}</p>
          <h2 className="mt-3 text-3xl text-cream sm:text-4xl">{t.orderTitle}</h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/70">{t.orderText}</p>
          <DeliveryLinks className="mt-10 justify-center" />
        </Reveal>
      </section>
    </>
  );
}
