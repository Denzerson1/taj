import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { useCopy } from '../i18n/LanguageContext';
import { POSTS } from '../content/blog/posts';
import BlogCard from './BlogCard';
import Reveal from './Reveal';

const GUTTER = 'max(1.25rem, calc((100vw - 80rem) / 2 + 2rem))';

const copy = {
  EN: { eyebrow: 'The Taj Journal', title: 'Recipes, stories & spice', cta: 'Read the journal', prev: 'Previous', next: 'Next' },
  DE: { eyebrow: 'Das Taj Journal', title: 'Rezepte, Geschichten & Gewürze', cta: 'Zum Journal', prev: 'Zurück', next: 'Weiter' },
};

/** Horizontally scrolling row of blog cards (native scroll-snap, so swiping feels natural on touch). */
export default function BlogCarousel({ title, exclude }) {
  const t = useCopy(copy);
  const track = useRef(null);
  const posts = POSTS.filter((p) => p.slug !== exclude);

  const scroll = (dir) => {
    const el = track.current;
    el?.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' });
  };

  return (
    <section className="bg-band py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h2 className="mt-3 text-3xl text-cream sm:text-4xl">{title ?? t.title}</h2>
          </div>
          <div className="flex gap-3">
            {[[-1, FiArrowLeft, t.prev], [1, FiArrowRight, t.next]].map(([dir, Icon, label]) => (
              <button
                key={dir}
                type="button"
                onClick={() => scroll(dir)}
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors duration-300 hover:bg-gold hover:text-ink"
              >
                <Icon />
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <div
        ref={track}
        className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        // Align the first card with the page's content column; scroll-padding keeps snapping from pulling it to the edge.
        style={{ paddingInline: GUTTER, scrollPaddingInline: GUTTER }}
      >
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} className="w-[80vw] shrink-0 snap-start sm:w-[21rem] lg:w-[22.5rem]" />
        ))}
      </div>

      <div className="mt-8 text-center md:mt-12">
        <Link to="/blog" className="btn-outline">{t.cta}</Link>
      </div>
    </section>
  );
}
