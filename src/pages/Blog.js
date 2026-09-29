import { useSearchParams } from 'react-router-dom';
import { m, AnimatePresence } from 'framer-motion';
import { useCopy, useLanguage } from '../i18n/LanguageContext';
import { CATEGORY_LABELS, POSTS } from '../content/blog/posts';
import { SITE_URL } from '../config/site';
import Seo from '../components/Seo';
import BlogCard from '../components/BlogCard';
import Reveal from '../components/Reveal';

const CATEGORIES = ['all', 'classics', 'vegetarian', 'vegan', 'drinks'];

const copy = {
  EN: {
    seoTitle: 'Journal: Indian recipes & cocktail stories',
    seoDescription: 'Indian recipes, cooking tips and cocktail stories from Taj in Vienna: biryani, dal, chana masala, paneer tikka, masala chai and more.',
    eyebrow: 'The Taj Journal',
    title: 'Recipes, stories & spice',
    subtitle: 'A culinary journey for every kind of food lover — from our kitchen and bar to yours.',
    filter: 'Filter by category',
  },
  DE: {
    seoTitle: 'Journal: Indische Rezepte & Cocktail-Geschichten',
    seoDescription: 'Indische Rezepte, Kochtipps und Cocktail-Geschichten vom Taj in Wien: Biryani, Dal, Chana Masala, Paneer Tikka, Masala Chai und mehr.',
    eyebrow: 'Das Taj Journal',
    title: 'Rezepte, Geschichten & Gewürze',
    subtitle: 'Eine kulinarische Reise für alle Feinschmecker — aus unserer Küche und Bar zu Ihnen nach Hause.',
    filter: 'Nach Kategorie filtern',
  },
};

export default function Blog() {
  const t = useCopy(copy);
  const { language } = useLanguage();
  const [params, setParams] = useSearchParams();
  const active = CATEGORIES.includes(params.get('category')) ? params.get('category') : 'all';
  const posts = active === 'all' ? POSTS : POSTS.filter((p) => p.category === active);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: t.eyebrow,
    url: `${SITE_URL}/blog`,
    blogPost: POSTS.map((p) => ({
      '@type': 'BlogPosting',
      headline: p[language].title,
      url: `${SITE_URL}/blog/${p.slug}`,
      datePublished: p.published,
    })),
  };

  return (
    <>
      <Seo title={t.seoTitle} description={t.seoDescription} jsonLd={jsonLd} />
      <header className="bg-gradient-to-b from-cocoa to-ink px-5 pb-10 pt-28 text-center md:pb-14 md:pt-36">
        <p className="eyebrow animate-fade-up">{t.eyebrow}</p>
        <h1 className="mt-4 animate-fade-up text-4xl text-cream [animation-delay:100ms] sm:text-5xl lg:text-6xl">{t.title}</h1>
        <p className="mx-auto mt-5 max-w-xl animate-fade-up text-lg text-cream/70 [animation-delay:200ms]">{t.subtitle}</p>

        <div className="mt-10 flex animate-fade-up flex-wrap justify-center gap-2 [animation-delay:300ms]" role="group" aria-label={t.filter}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              aria-pressed={active === cat}
              onClick={() => setParams(cat === 'all' ? {} : { category: cat }, { replace: true })}
              className={`rounded-full border px-5 py-2 text-sm transition-colors duration-300 ${
                active === cat ? 'border-gold bg-gold text-ink' : 'border-cream/20 text-cream/75 hover:border-gold/60 hover:text-cream'
              }`}
            >
              {CATEGORY_LABELS[language][cat]}
            </button>
          ))}
        </div>
      </header>

      <m.div layout className="bg-glow mx-auto grid max-w-7xl gap-x-8 gap-y-12 overflow-x-clip px-5 pb-20 pt-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        <AnimatePresence mode="popLayout" initial={false}>
          {posts.map((post, i) => (
            <m.div
              key={post.slug}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Reveal from={i % 2 ? 'right' : 'left'}>
                <BlogCard post={post} />
              </Reveal>
            </m.div>
          ))}
        </AnimatePresence>
      </m.div>
    </>
  );
}
