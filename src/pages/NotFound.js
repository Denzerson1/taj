import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCopy } from '../i18n/LanguageContext';
import Seo from '../components/Seo';

const copy = {
  EN: { title: 'Page not found', text: 'This page seems to have wandered off. Let’s get you back to the table.', cta: 'Back to home' },
  DE: { title: 'Seite nicht gefunden', text: 'Diese Seite hat sich wohl verirrt. Wir bringen Sie zurück an den Tisch.', cta: 'Zur Startseite' },
};

export default function NotFound() {
  const t = useCopy(copy);

  useNoIndex();

  return (
    <>
      <Seo title={t.title} description={t.text} />
      <div className="bg-glow flex min-h-[80vh] flex-col items-center justify-center px-5 pt-20 text-center">
        <p className="font-display text-8xl text-gold/40">404</p>
        <h1 className="mt-4 text-4xl text-cream">{t.title}</h1>
        <p className="mt-4 max-w-md text-cream/70">{t.text}</p>
        <Link to="/" className="btn-primary mt-10">{t.cta}</Link>
      </div>
    </>
  );
}

function useNoIndex() {
  // Keep soft-404s out of search results.
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex';
    document.head.appendChild(meta);
    return () => meta.remove();
  }, []);
}
