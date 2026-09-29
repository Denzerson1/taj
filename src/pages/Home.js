import { Link } from 'react-router-dom';
import { useCopy } from '../i18n/LanguageContext';
import { BOOKING_LINK } from '../config/site';
import Seo from '../components/Seo';
import HeroSlideshow from '../components/HeroSlideshow';
import SplitSection from '../components/SplitSection';
import DeliveryLinks from '../components/DeliveryLinks';
import BlogCarousel from '../components/BlogCarousel';
import Reveal from '../components/Reveal';
import Img from '../components/Img';

const copy = {
  EN: {
    seoDescription:
      'Taj in Vienna-Josefstadt: authentic Indian cuisine, vegan & vegetarian dishes and Indian-inspired signature cocktails. Book a table at Kochgasse 9, 1080 Vienna.',
    intro: {
      eyebrow: 'Welcome to Taj',
      title: 'Every dish a journey through India’s flavours — every spice a story.',
      text: 'Sit back and let us take you from the streets of Vienna to the royal kitchens of Rajasthan, the bustling eateries of Delhi and the coastal kitchens of Kerala. Amid soft candlelight and the gentle hum of Indian music, Taj invites you to share stories, laughter and unforgettable meals with the people you love.',
      cta: 'Book a table',
    },
    cuisine: {
      eyebrow: 'Our cuisine',
      title: 'Regional India, cooked with care',
      text: 'Our menu celebrates the vibrant regional flavours of India, made with fresh, local ingredients — honouring tradition while embracing a modern culinary vision.',
      cta: 'View our food',
    },
    cocktails: {
      eyebrow: 'The bar',
      title: 'Cocktails with a sense of place',
      text: 'At Taj, cocktails are a journey of flavour: classic recipes meet masala chai, saffron, betel leaf and chilli. Pull up a stool and explore every sip.',
      cta: 'View our drinks',
    },
    takeout: {
      eyebrow: 'Order online',
      title: 'Taj at home',
      text: 'Enjoy the flavours of India on your sofa — freshly prepared and delivered through your favourite platform.',
    },
    about: {
      eyebrow: 'Our story',
      title: 'Tradition and hospitality',
      text: 'Discover the story behind Taj — how a passion for exceptional flavours and warm hospitality became a home for Indian cuisine in the heart of Josefstadt.',
      cta: 'Discover our story',
    },
  },
  DE: {
    seoDescription:
      'Taj in Wien-Josefstadt: authentische indische Küche, vegane & vegetarische Gerichte und indisch inspirierte Signature-Cocktails. Jetzt Tisch reservieren – Kochgasse 9, 1080 Wien.',
    intro: {
      eyebrow: 'Willkommen im Taj',
      title: 'Jedes Gericht eine Reise durch Indiens Aromen — jedes Gewürz eine Geschichte.',
      text: 'Lehnen Sie sich zurück und lassen Sie sich von den Straßen Wiens in die königlichen Küchen Rajasthans, die belebten Garküchen Delhis und an die Küste Keralas entführen. Bei sanftem Kerzenlicht und leiser indischer Musik lädt das Taj Sie ein, Geschichten, Lachen und unvergessliche Mahlzeiten mit Ihren Liebsten zu teilen.',
      cta: 'Tisch reservieren',
    },
    cuisine: {
      eyebrow: 'Unsere Küche',
      title: 'Indiens Regionen, mit Sorgfalt gekocht',
      text: 'Unsere Speisekarte feiert die lebendigen regionalen Aromen Indiens, zubereitet mit frischen, regionalen Zutaten — traditionsbewusst und mit moderner Handschrift.',
      cta: 'Zur Speisekarte',
    },
    cocktails: {
      eyebrow: 'Die Bar',
      title: 'Cocktails mit Herkunft',
      text: 'Im Taj sind Cocktails eine Geschmacksreise: Klassiker treffen auf Masala Chai, Safran, Betelblatt und Chili. Nehmen Sie Platz und entdecken Sie jeden Schluck.',
      cta: 'Zu den Getränken',
    },
    takeout: {
      eyebrow: 'Online bestellen',
      title: 'Taj für Zuhause',
      text: 'Genießen Sie Indiens Aromen auf dem Sofa — frisch zubereitet und geliefert über Ihre Lieblingsplattform.',
    },
    about: {
      eyebrow: 'Unsere Geschichte',
      title: 'Tradition und Gastfreundschaft',
      text: 'Erfahren Sie, wie aus der Leidenschaft für außergewöhnliche Aromen und herzliche Gastfreundschaft ein Zuhause für indische Küche im Herzen der Josefstadt wurde.',
      cta: 'Mehr über uns',
    },
  },
};

export default function Home() {
  const t = useCopy(copy);

  return (
    <>
      <Seo description={t.seoDescription} />
      <HeroSlideshow scrollTargetId="welcome" />

      <section id="welcome" className="scroll-mt-20 bg-gradient-to-b from-ink via-espresso to-cocoa">
        {/* Phones: heading → image → text (same rhythm as the sections below); desktop: text left, image right. */}
        <div className="mx-auto grid max-w-6xl px-5 pb-4 pt-14 md:pb-16 md:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:grid-rows-[1fr_auto_auto_1fr] lg:gap-x-16 lg:px-8">
          <Reveal className="lg:col-start-1 lg:row-start-2">
            <p className="eyebrow">{t.intro.eyebrow}</p>
            <h2 className="mt-4 text-3xl font-medium leading-tight text-cream sm:text-4xl lg:text-5xl">{t.intro.title}</h2>
          </Reveal>
          <Reveal delay={0.15} className="relative mx-auto mt-8 w-full max-w-md lg:col-start-2 lg:row-span-4 lg:row-start-1 lg:mt-0 lg:max-w-none">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <Img name="home/intro" alt="Indian dish served at Taj" sizes="(min-width: 1024px) 38vw, 100vw" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -left-4 -z-10 hidden h-full w-full border border-gold/30 lg:block" />
          </Reveal>
          <Reveal className="mt-8 lg:col-start-1 lg:row-start-3 lg:mt-6">
            <p className="text-base leading-relaxed text-cream/75 md:text-lg">{t.intro.text}</p>
            <a {...BOOKING_LINK} className="btn-primary mt-8">
              {t.intro.cta}
            </a>
          </Reveal>
        </div>
      </section>

      <div className="bg-gradient-to-b from-cocoa via-espresso to-ink">
        <SplitSection image="home/cuisine" alt="Butter chicken" eyebrow={t.cuisine.eyebrow} title={t.cuisine.title}>
          <p>{t.cuisine.text}</p>
          <Link to="/food" className="btn-primary mt-4">{t.cuisine.cta}</Link>
        </SplitSection>

        <SplitSection image="home/cocktails" alt="Cocktails" eyebrow={t.cocktails.eyebrow} title={t.cocktails.title} reverse>
          <p>{t.cocktails.text}</p>
          <Link to="/drinks" className="btn-primary mt-4">{t.cocktails.cta}</Link>
        </SplitSection>

        <SplitSection image="home/takeout" alt="Takeaway dishes from Taj" eyebrow={t.takeout.eyebrow} title={t.takeout.title}>
          <p>{t.takeout.text}</p>
          <DeliveryLinks className="mt-4" />
        </SplitSection>

        <SplitSection image="home/about" alt="Guests dining at Taj" eyebrow={t.about.eyebrow} title={t.about.title} reverse>
          <p>{t.about.text}</p>
          <Link to="/about" className="btn-outline mt-4">{t.about.cta}</Link>
        </SplitSection>
      </div>

      <BlogCarousel />
    </>
  );
}
