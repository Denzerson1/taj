import { useCopy } from '../i18n/LanguageContext';
import { BOOKING_LINK } from '../config/site';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import SplitSection from '../components/SplitSection';
import Reveal from '../components/Reveal';

const copy = {
  EN: {
    seoTitle: 'About us',
    seoDescription: 'The story of Taj: Indian cuisine, hospitality and signature cocktails in Vienna-Josefstadt. Discover what makes our restaurant special.',
    eyebrow: 'About us',
    title: 'A feast for the senses in the heart of Vienna',
    subtitle: 'Step into a world where tradition meets elegance — a culinary journey through India, reimagined for Vienna.',
    symphonyEyebrow: 'Our kitchen',
    symphonyTitle: 'A symphony of flavours, curated with passion',
    symphonyText: 'Each dish is crafted with care, capturing the boldness and beauty of India’s culinary heritage. From the rich Mughlai kitchens of the north to the coastal cooking of Kerala, every plate tells a story of timeless tradition with a contemporary touch.',
    missionTitle: 'Our mission',
    missionText: 'We want to create a place where the spirit of Indian hospitality and flavour come together — an experience that carries you from Vienna to the heart of India. We care about excellence, not only in taste, but in every moment of your visit.',
    experienceEyebrow: 'The experience',
    experienceTitle: 'More than dinner',
    experienceText: [
      'Taj is more than a restaurant. In a setting that combines warmth with a touch of opulence, our team looks after every detail — from the first greeting to the last cup of chai.',
      'Brass lamps, soft candlelight and an intimate dining room make it the right place for a quiet dinner for two as much as for a long evening with friends.',
    ],
    barEyebrow: 'The bar',
    barTitle: 'Stay for one more',
    barText: 'Our bar pairs Indian spices with classic mixology. Saffron, masala chai, chilli and betel leaf find their way into cocktails made to accompany your meal — or to be enjoyed on their own.',
    ctaTitle: 'Ready to begin your culinary journey?',
    ctaText: 'Whether it’s an intimate dinner or a celebration with loved ones, we look forward to welcoming you.',
    reserve: 'Reserve a table',
  },
  DE: {
    seoTitle: 'Über uns',
    seoDescription: 'Die Geschichte des Taj: indische Küche, Gastfreundschaft und Signature-Cocktails in Wien-Josefstadt. Entdecken Sie, was unser Restaurant besonders macht.',
    eyebrow: 'Über uns',
    title: 'Ein Fest für die Sinne im Herzen Wiens',
    subtitle: 'Treten Sie ein in eine Welt, in der Tradition auf Eleganz trifft — eine kulinarische Reise durch Indien, neu interpretiert für Wien.',
    symphonyEyebrow: 'Unsere Küche',
    symphonyTitle: 'Eine Symphonie der Aromen, mit Leidenschaft kreiert',
    symphonyText: 'Jedes Gericht wird mit Hingabe zubereitet und fängt die Kraft und Schönheit des kulinarischen Erbes Indiens ein. Von den reichhaltigen Mogul-Küchen des Nordens bis zur Küstenküche Keralas erzählt jeder Teller eine Geschichte zeitloser Tradition mit zeitgemäßer Note.',
    missionTitle: 'Unsere Mission',
    missionText: 'Wir möchten einen Ort schaffen, an dem indische Gastfreundschaft und Aromen zusammenkommen — ein Erlebnis, das Sie von Wien ins Herz Indiens entführt. Exzellenz ist uns wichtig, nicht nur im Geschmack, sondern in jedem Moment Ihres Besuchs.',
    experienceEyebrow: 'Das Erlebnis',
    experienceTitle: 'Mehr als ein Abendessen',
    experienceText: [
      'Das Taj ist mehr als ein Restaurant. In einem Ambiente, das Wärme mit einem Hauch Opulenz verbindet, kümmert sich unser Team um jedes Detail — von der Begrüßung bis zur letzten Tasse Chai.',
      'Messinglampen, sanftes Kerzenlicht und ein intimer Gastraum machen es zum richtigen Ort für ein ruhiges Abendessen zu zweit ebenso wie für einen langen Abend mit Freunden.',
    ],
    barEyebrow: 'Die Bar',
    barTitle: 'Auf einen Drink mehr',
    barText: 'Unsere Bar verbindet indische Gewürze mit klassischer Mixologie. Safran, Masala Chai, Chili und Betelblatt finden ihren Weg in Cocktails, die Ihr Essen begleiten — oder für sich allein genossen werden.',
    ctaTitle: 'Bereit für Ihre kulinarische Reise?',
    ctaText: 'Ob intimes Abendessen oder Feier mit Ihren Liebsten — wir freuen uns auf Ihren Besuch.',
    reserve: 'Tisch reservieren',
  },
};

export default function About() {
  const t = useCopy(copy);

  return (
    <>
      <Seo title={t.seoTitle} description={t.seoDescription} />
      <PageHero image="pages/dining-room" alt="The Taj dining room" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

      <SplitSection image="home/about" alt="Indian cuisine at Taj" eyebrow={t.symphonyEyebrow} title={t.symphonyTitle}>
        <p>{t.symphonyText}</p>
      </SplitSection>

      <section className="bg-band px-5 py-12 md:py-20">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl text-gold-light sm:text-4xl lg:text-5xl">{t.missionTitle}</h2>
          <p className="mt-8 font-display text-lg italic leading-relaxed text-cream/85 sm:text-2xl">{t.missionText}</p>
        </Reveal>
      </section>

      <SplitSection image="pages/about-interior" alt="A cocktail being poured at the Taj bar" eyebrow={t.experienceEyebrow} title={t.experienceTitle} reverse>
        {t.experienceText.map((p) => <p key={p}>{p}</p>)}
      </SplitSection>

      <SplitSection image="pages/bar" alt="The Taj bar" eyebrow={t.barEyebrow} title={t.barTitle}>
        <p>{t.barText}</p>
      </SplitSection>

      <section className="bg-band px-5 py-12 text-center md:py-20">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="text-3xl text-cream sm:text-4xl">{t.ctaTitle}</h2>
          <p className="mt-5 text-lg text-cream/70">{t.ctaText}</p>
          <a {...BOOKING_LINK} className="btn-primary mt-10">{t.reserve}</a>
        </Reveal>
      </section>
    </>
  );
}
