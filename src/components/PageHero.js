import Img from './Img';

/** Full-bleed banner image with a dark gradient and centered heading, used at the top of inner pages. */
export default function PageHero({ image, alt, eyebrow, title, subtitle, children, className = 'h-[62vh] min-h-[420px]' }) {
  return (
    <section className={`relative flex items-end overflow-hidden ${className}`}>
      <Img name={image} alt={alt} priority className="absolute inset-0 h-full w-full animate-ken-burns object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/65 to-ink/40 md:via-ink/45 md:to-ink/20" />
      <div className="relative mx-auto w-full max-w-5xl px-5 pb-12 text-center [text-shadow:0_2px_16px_rgb(0_0_0/0.55)] sm:pb-20">
        {eyebrow && <p className="eyebrow animate-fade-up">{eyebrow}</p>}
        <h1 className="mt-4 animate-fade-up text-4xl font-medium leading-tight text-cream [animation-delay:120ms] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl animate-fade-up text-base text-cream/80 md:text-lg [animation-delay:240ms]">{subtitle}</p>
        )}
        {children && <div className="mt-8 animate-fade-up [animation-delay:360ms]">{children}</div>}
      </div>
    </section>
  );
}
