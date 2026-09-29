import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { useCopy, useLanguage } from '../i18n/LanguageContext';
import { CATEGORY_LABELS, getPost } from '../content/blog/posts';
import { SITE_URL } from '../config/site';
import manifest from '../content/imageManifest.json';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Img from '../components/Img';
import Reveal from '../components/Reveal';
import BlogCarousel from '../components/BlogCarousel';
import NotFound from './NotFound';

const copy = {
  EN: { back: 'All articles', ingredients: 'Ingredients', method: 'Method', tip: 'Chef’s tip', serves: 'Serves', prep: 'Prep', cook: 'Cook', min: 'min', more: 'Keep reading', read: 'min read' },
  DE: { back: 'Alle Artikel', ingredients: 'Zutaten', method: 'Zubereitung', tip: 'Tipp aus der Küche', serves: 'Portionen', prep: 'Vorbereitung', cook: 'Kochzeit', min: 'Min.', more: 'Weiterlesen', read: 'Min. Lesezeit' },
};

/** ISO 8601 duration (PT1H20M) → minutes */
const minutes = (iso) => {
  const [, h = 0, mins = 0] = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?/) ?? [];
  return Number(h) * 60 + Number(mins);
};

const imageUrl = (name) => {
  const widths = manifest[name]?.widths ?? [];
  return `${SITE_URL}/images/${name}-${widths[widths.length - 1]}.webp`;
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);
  const t = useCopy(copy);
  const { language } = useLanguage();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setArticle(null);
    if (post) {
      import(`../content/blog/articles/${post.slug}.js`).then((mod) => {
        if (!cancelled) setArticle(mod.default);
      });
    }
    return () => {
      cancelled = true;
    };
  }, [post]);

  if (!post) return <NotFound />;

  const meta = post[language] ?? post.EN;
  const body = article?.[language] ?? article?.EN;
  const date = new Date(post.updated ?? post.published).toLocaleDateString(language === 'DE' ? 'de-AT' : 'en-GB', { year: 'numeric', month: 'long', day: 'numeric' });

  const jsonLd = body && {
    '@context': 'https://schema.org',
    '@type': body.recipe ? 'Recipe' : 'BlogPosting',
    ...(body.recipe ? { name: meta.title } : { headline: meta.title }),
    description: meta.excerpt,
    image: [imageUrl(post.image)],
    datePublished: post.published,
    dateModified: post.updated ?? post.published,
    inLanguage: language === 'DE' ? 'de-AT' : 'en',
    author: { '@type': 'Organization', name: 'Taj – Indian Restaurant & Bar', url: SITE_URL },
    publisher: { '@type': 'Organization', name: 'Taj – Indian Restaurant & Bar', logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/brand/logo.webp` } },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    ...(body.recipe && {
      recipeCuisine: 'Indian',
      recipeCategory: post.category === 'drinks' ? 'Drink' : 'Main course',
      recipeYield: String(article.recipe.servings),
      prepTime: article.recipe.prepTime,
      cookTime: article.recipe.cookTime,
      recipeIngredient: body.recipe.ingredients,
      recipeInstructions: body.recipe.steps.map((text) => ({ '@type': 'HowToStep', text })),
      ...(post.category === 'vegan' && { suitableForDiet: 'https://schema.org/VeganDiet' }),
      ...(post.category === 'vegetarian' && { suitableForDiet: 'https://schema.org/VegetarianDiet' }),
    }),
  };

  return (
    <>
      <Seo title={meta.title} description={meta.excerpt} image={`/images/${post.image}-${manifest[post.image]?.widths?.at(-1)}.webp`} type="article" jsonLd={jsonLd} />

      <PageHero
        image={post.image}
        alt={meta.title}
        eyebrow={`${CATEGORY_LABELS[language][post.category]} · ${post.readingTime} ${t.read}`}
        title={meta.title}
        subtitle={meta.excerpt}
        className="h-[72vh] min-h-[480px]"
      />

      <article className="bg-glow mx-auto max-w-3xl px-5 pb-20 pt-10">
        <div className="flex items-center justify-between border-b border-cream/10 pb-6 text-sm text-cream/50">
          <Link to="/blog" className="inline-flex items-center gap-2 text-gold transition-colors hover:text-gold-light">
            <FiArrowLeft /> {t.back}
          </Link>
          <time dateTime={post.updated ?? post.published}>{date}</time>
        </div>

        {!body ? (
          <div className="min-h-[50vh] animate-pulse pt-12">
            <div className="h-5 w-3/4 rounded bg-cream/10" />
            <div className="mt-4 h-5 w-full rounded bg-cream/10" />
            <div className="mt-4 h-5 w-5/6 rounded bg-cream/10" />
          </div>
        ) : (
          <div className="animate-fade-up">
            <div className="prose-taj pt-10">
              {body.intro.map((p, i) => (
                <p key={i} className={i === 0 ? 'font-display !text-xl !leading-relaxed !text-cream/90 md:!text-2xl' : ''}>{p}</p>
              ))}
            </div>

            {body.sections.map((section) => (
              <section key={section.heading} className="mt-12">
                <Reveal>
                  <h2 className="text-3xl text-gold-light sm:text-4xl">{section.heading}</h2>
                  <div className="prose-taj mt-5">
                    {section.text.map((p) => <p key={p}>{p}</p>)}
                  </div>
                </Reveal>
                {section.image && (
                  <Reveal as="figure" className="my-10 sm:-mx-12">
                    <div className="aspect-[3/2] overflow-hidden rounded-sm bg-cocoa">
                      <Img name={section.image.name} alt={section.image.alt} sizes="(min-width: 768px) 60vw, 100vw" className="h-full w-full object-cover" />
                    </div>
                    <figcaption className="mt-3 text-center text-sm text-cream/45">{section.image.alt}</figcaption>
                  </Reveal>
                )}
              </section>
            ))}

            {body.recipe && (
              <Reveal as="section" className="mt-16 border border-gold/25 bg-espresso/60 p-6 sm:p-10">
                <h2 className="text-3xl text-cream sm:text-4xl">{body.recipe.title}</h2>
                <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-sm text-cream/60">
                  <div><dt className="inline">{t.serves}: </dt><dd className="inline text-cream">{article.recipe.servings}</dd></div>
                  <div><dt className="inline">{t.prep}: </dt><dd className="inline text-cream">{minutes(article.recipe.prepTime)} {t.min}</dd></div>
                  <div><dt className="inline">{t.cook}: </dt><dd className="inline text-cream">{minutes(article.recipe.cookTime)} {t.min}</dd></div>
                </dl>

                <div className="mt-8 grid gap-10 md:grid-cols-[2fr_3fr]">
                  <div>
                    <h3 className="eyebrow font-sans">{t.ingredients}</h3>
                    <ul className="mt-4 space-y-2.5 text-cream/80">
                      {body.recipe.ingredients.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="eyebrow font-sans">{t.method}</h3>
                    <ol className="mt-4 space-y-5">
                      {body.recipe.steps.map((step, i) => (
                        <li key={step} className="flex gap-4 text-cream/80">
                          <span className="font-display text-2xl leading-none text-gold">{i + 1}</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                {body.recipe.tip && (
                  <p className="mt-10 border-l-2 border-gold pl-5 text-cream/80">
                    <strong className="font-semibold text-gold">{t.tip}: </strong>
                    {body.recipe.tip}
                  </p>
                )}
              </Reveal>
            )}
          </div>
        )}
      </article>

      <BlogCarousel title={t.more} exclude={post.slug} />
    </>
  );
}
