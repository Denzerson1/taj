import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE_URL } from '../config/site';

const SITE_NAME = 'Taj – Indian Restaurant & Bar Wien';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.rel = 'canonical';
    document.head.appendChild(el);
  }
  el.href = href;
}

/** Sets per-page title, description, canonical, Open Graph/Twitter tags and optional JSON-LD. */
export default function Seo({ title, description, image, type = 'website', jsonLd }) {
  const { pathname } = useLocation();
  const ld = jsonLd ? JSON.stringify(jsonLd) : null;

  useEffect(() => {
    const fullTitle = title ? `${title} | Taj Wien` : SITE_NAME;
    const url = `${SITE_URL}${pathname === '/' ? '' : pathname}`;
    const imageUrl = image ? `${SITE_URL}${image}` : DEFAULT_IMAGE;

    document.title = fullTitle;
    setMeta('name', 'description', description);
    setCanonical(url);
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:image', imageUrl);
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', imageUrl);

    let script;
    if (ld) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.page = 'true';
      script.textContent = ld;
      document.head.appendChild(script);
    }
    return () => script?.remove();
  }, [title, description, image, type, ld, pathname]);

  return null;
}
