import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { CATEGORY_LABELS } from '../content/blog/posts';
import Img from './Img';

export default function BlogCard({ post, className = '' }) {
  const { language } = useLanguage();
  const text = post[language] ?? post.EN;
  const minutes = language === 'DE' ? 'Min. Lesezeit' : 'min read';

  return (
    <Link to={`/blog/${post.slug}`} className={`group block ${className}`}>
      <div className="aspect-[4/3] overflow-hidden rounded-sm bg-cocoa">
        <Img
          name={post.image}
          alt={text.title}
          sizes="(min-width: 1024px) 28vw, (min-width: 640px) 50vw, 85vw"
          className="h-full w-full object-cover transition-transform duration-[1.2s] ease-smooth group-hover:scale-105"
        />
      </div>
      <p className="eyebrow mt-5 text-[0.65rem]">
        {CATEGORY_LABELS[language][post.category]} · {post.readingTime} {minutes}
      </p>
      <h3 className="mt-2 text-2xl leading-snug text-cream transition-colors duration-300 group-hover:text-gold-light">{text.title}</h3>
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-cream/60">{text.excerpt}</p>
    </Link>
  );
}
