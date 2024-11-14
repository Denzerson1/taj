import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import aboutImage from '../images/about.jpg';
import aboutImage2 from '../images/2.jpg';
import { useLanguage } from '../LanguageContext'; // Import the language context

// Translations for the AboutPage component
const translations = {
  EN: {
    title: "Taj: A Feast for the Senses – The Flavors of India in the Heart of Vienna",
    description: "Step into a world where tradition meets elegance. At Taj, we invite you to embark on a culinary journey through the vibrant landscapes of India, reimagined for the refined tastes of our discerning guests.",
    symphonyTitle: "A Symphony of Flavors, Curated with Passion",
    symphonyText: "At Taj, each dish is a masterpiece crafted with meticulous care, capturing the boldness and beauty of India’s culinary heritage. From the royal Mughlai feasts of Rajasthan to the coastal delicacies of Kerala, every plate tells a story of timeless tradition blended with contemporary sophistication.",
    missionTitle: "Our Mission and Vision",
    missionText: "Our mission is to create a haven where the spirit of Indian hospitality and flavors unite, offering an immersive experience that transports you from Vienna to the heart of India. We are dedicated to excellence, not only in taste but in every moment of your visit.",
    experienceTitle: "An Experience Beyond Dining",
    experienceText: "Taj Vienna is more than a restaurant—it is an experience. Amidst an ambiance that combines opulence and warmth, our guests are treated to exceptional service and attention to detail. Every moment is designed to evoke the charm and grandeur of Indian hospitality.",
    ctaTitle: "Ready to Begin Your Culinary Journey?",
    ctaText: "Whether it’s an intimate dinner or a celebration with loved ones, Taj Vienna offers the perfect setting for unforgettable moments. Reserve your table and allow us to share the flavors and traditions of India with you.",
    reserveButton: "Reserve a table",
  },
  DE: {
    title: "Taj: Ein Fest für die Sinne – Indiens Aromen im Herzen Wiens",
    description: "Treten Sie ein in eine Welt, in der Tradition auf Eleganz trifft. Im Taj laden wir Sie ein, eine kulinarische Reise durch die lebendigen Landschaften Indiens zu unternehmen, neu interpretiert für die raffinierten Geschmäcker unserer anspruchsvollen Gäste.",
    symphonyTitle: "Eine Symphonie der Aromen, mit Leidenschaft kreiert",
    symphonyText: "Im Taj ist jedes Gericht ein Meisterwerk, das mit sorgfältiger Hingabe zubereitet wird und die Kühnheit und Schönheit des kulinarischen Erbes Indiens einfängt. Vom königlichen Mughlai-Fest in Rajasthan bis hin zu den Küstengerichten aus Kerala erzählt jeder Teller eine Geschichte von zeitloser Tradition, die mit zeitgenössischer Raffinesse vermischt wird.",
    missionTitle: "Unsere Mission und Vision",
    missionText: "Unsere Mission ist es, einen Ort zu schaffen, an dem der Geist der indischen Gastfreundschaft und der Aromen vereint wird, um ein immersives Erlebnis zu bieten, das Sie von Wien ins Herz Indiens entführt. Wir sind der Exzellenz verpflichtet, nicht nur im Geschmack, sondern in jedem Moment Ihres Besuchs.",
    experienceTitle: "Ein Erlebnis jenseits des Essens",
    experienceText: "Das Taj Wien ist mehr als ein Restaurant—es ist ein Erlebnis. Inmitten einer Atmosphäre, die Opulenz und Wärme vereint, werden unsere Gäste mit außergewöhnlichem Service und Liebe zum Detail behandelt. Jeder Moment ist darauf ausgelegt, den Charme und die Grandeur der indischen Gastfreundschaft zu wecken.",
    ctaTitle: "Bereit, Ihre kulinarische Reise zu beginnen?",
    ctaText: "Ob es sich um ein intimes Abendessen oder eine Feier mit Ihren Liebsten handelt, Taj Wien bietet die perfekte Kulisse für unvergessliche Momente. Reservieren Sie Ihren Tisch und lassen Sie uns die Aromen und Traditionen Indiens mit Ihnen teilen.",
    reserveButton: "Zur Reservierung",
  }
};

const AboutPage = () => {
  const { language } = useLanguage(); // Get the current language from context
  const {
    title,
    description,
    symphonyTitle,
    symphonyText,
    missionTitle,
    missionText,
    experienceTitle,
    experienceText,
    ctaTitle,
    ctaText,
    reserveButton,
  } = translations[language]; // Get translations based on the selected language

  return (
    <div className="relative min-h-screen font-mukta text-gray-900">
      <Navbar />

      {/* Header Section with Gradient Background */}
      <div style={{backgroundImage: 'linear-gradient(to bottom, #4D2816, #512E1F'}} className="relative pt-24 pb-16 px-4 sm:pt-32 sm:pb-20 lg:px-24 text-center text-gray-100">
        <h1 className="text-lightgold text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
          {title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-3xl mx-auto">
          {description}
        </p>
      </div>

      {/* Main Content Section with Smooth Gradient */}
      <div style={{backgroundImage: 'linear-gradient(to bottom, #512E1F, #3E261C'}} className="text-gray-100 py-12 sm:py-16 px-4 lg:px-24">
        <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-2">
          {/* Left Column: Rich Text */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-lightgold mb-6 sm:mb-8">
              {symphonyTitle}
            </h2>
            <p className="leading-relaxed text-gray-200 mb-6 sm:mb-8">
              {symphonyText}
            </p>
            <p className="leading-relaxed text-gray-200">
              {missionText}
            </p>
          </div>

          {/* Right Column: Image with Overlay */}
          <div className="relative">
            <img
              src={aboutImage}
              alt="Indian cuisine"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <div style={{backgroundImage: 'linear-gradient(to bottom, #512E1F, transperant'}}  className="absolute bottom-0 left-0 w-full h-20 sm:h-32"></div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section with Smooth Gradient */}
      <div style={{backgroundImage: 'linear-gradient(to bottom, #3E261C, #2F2019'}} className="py-16 sm:py-20 px-4 lg:px-24 text-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">
            {missionTitle}
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            {missionText}
          </p>
        </div>
      </div>

      {/* Experience Section with Smooth Gradient */}
      <div style={{backgroundImage: 'linear-gradient(to bottom, #2F2019, #1E0D0D'}} className="py-16 sm:py-20 px-4 lg:px-24 text-gray-100">
        <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-2 items-center">
          {/* Left Column: Image */}
          <div className="relative">
            <img
              src={aboutImage2}
              alt="Elegant Indian restaurant interior"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <div style={{backgroundImage: 'linear-gradient(to bottom, #3E261C, transparent'}} className="absolute top-0 left-0 w-full h-20 sm:h-32"></div>
          </div>

          {/* Right Column: Description */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-lightgold mb-6 sm:mb-8">
              {experienceTitle}
            </h2>
            <p className="leading-relaxed text-gray-200 mb-6 sm:mb-8">
              {experienceText}
            </p>
            <p className="leading-relaxed text-gray-200">
              {experienceText}
            </p>
          </div>
        </div>
      </div>

      {/* Final CTA Section with Smooth Gradient */}
      <div style={{backgroundImage: 'linear-gradient(to bottom, #1E0D0D, #0B0706'}} className="py-16 sm:py-20 px-4 lg:px-24 text-center text-gray-100">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
          {ctaTitle}
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed mb-6 sm:mb-8">
          {ctaText}
        </p>
        <a
          href="#reservation"
          className="inline-block bg-lightgold text-gray-900 px-8 py-3 sm:py-4 rounded-lg shadow-lg hover:bg-gray-800 hover:text-white transition"
        >
          {reserveButton}
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
