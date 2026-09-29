import { useState } from 'react';
import manifest from '../content/imageManifest.json';

const base = `${process.env.PUBLIC_URL}/images`;

/**
 * Responsive image backed by the pre-generated WebP variants in public/images.
 * Width/height come from the manifest so the browser reserves space (no layout shift).
 */
export default function Img({ name, alt, sizes = '100vw', priority = false, className = '', ...rest }) {
  const meta = manifest[name];
  const [loaded, setLoaded] = useState(false);

  if (!meta) {
    if (process.env.NODE_ENV !== 'production') console.warn(`Img: unknown image "${name}"`);
    return null;
  }

  const { widths } = meta;
  const src = widths ? `${base}/${name}-${widths[Math.min(1, widths.length - 1)]}.webp` : `${base}/${name}.webp`;
  const srcSet = widths?.map((w) => `${base}/${name}-${w}.webp ${w}w`).join(', ');

  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={widths ? sizes : undefined}
      width={meta.w}
      height={meta.h}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchpriority={priority ? 'high' : undefined}
      onLoad={() => setLoaded(true)}
      className={`transition-opacity duration-700 ease-smooth ${loaded || priority ? 'opacity-100' : 'opacity-0'} ${className}`}
      {...rest}
    />
  );
}
