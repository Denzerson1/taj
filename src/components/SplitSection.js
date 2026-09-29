import Img from './Img';
import Reveal from './Reveal';

/**
 * Image + text section.
 * Phones: heading → image → text, so a photo is always framed by text and two sections' photos never touch.
 * Desktop: image on one side (right when `reverse`), heading + text vertically centred beside it.
 * The whole row slides in from the image's side.
 */
export default function SplitSection({ image, alt, eyebrow, title, reverse = false, aspect = 'aspect-[4/5]', children }) {
  const textCol = reverse ? 'md:col-start-1' : 'md:col-start-2';
  const imageCol = reverse ? 'md:col-start-2' : 'md:col-start-1';

  return (
    <section className={`overflow-x-clip ${reverse ? 'md:bg-glow-right' : 'md:bg-glow-left'} bg-glow`}>
      <Reveal
        from={reverse ? 'right' : 'left'}
        className="mx-auto grid max-w-6xl px-5 py-10 md:grid-cols-2 md:grid-rows-[1fr_auto_auto_1fr] md:gap-x-14 md:py-16 lg:px-8"
      >
        <div className={`md:row-start-2 ${textCol}`}>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 className="mt-3 text-[2rem] font-medium leading-[1.15] text-cream sm:text-4xl lg:text-5xl">{title}</h2>
          <div className="mt-5 h-px w-16 bg-gold/60" />
        </div>
        <div className={`mx-auto mt-7 w-full max-w-md ${aspect} overflow-hidden rounded-sm bg-cocoa shadow-2xl shadow-black/40 md:row-span-4 md:row-start-1 md:mt-0 md:max-w-none ${imageCol}`}>
          <Img
            name={image}
            alt={alt}
            sizes="(min-width: 768px) 45vw, 100vw"
            className="h-full w-full object-cover transition-transform duration-[1.2s] ease-smooth hover:scale-[1.03]"
          />
        </div>
        <div className={`prose-taj mt-7 md:row-start-3 md:mt-6 ${textCol}`}>{children}</div>
      </Reveal>
    </section>
  );
}
