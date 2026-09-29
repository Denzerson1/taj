import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../LanguageContext'; // Import the language context
import image1 from '../images/Richtext.jpg'; // Replace with your actual path for the image
import './richtext.css';

// Translations for the component
const translations = {
  EN: {
    title: "At Taj, every dish is a journey through India’s vibrant flavors, where each spice tells a story and every ingredient speaks of tradition.",
    paragraph: "So, sit back and let us transport you from the streets of Vienna to the royal kitchens of Rajasthan, the bustling eateries of Delhi, and the coastal delights of Kerala. Here, amidst the soft glow of candles and the gentle hum of Indian music, Taj invites you to share stories, laughter, and unforgettable meals with your loved ones.",
    button: "Book a table"
  },
  DE: {
    title: "Im Taj ist jedes Gericht eine Reise durch Indiens lebendige Aromenwelt, wo jedes Gewürz eine Geschichte erzählt und jede Zutat von Tradition spricht.",
    paragraph: "Lehnen Sie sich zurück und lassen Sie sich von uns von den Straßen Wiens zu den königlichen Küchen Rajasthans, den geschäftigen Lokalen Delhis und den Küstendelikatesse Keralas entführen. Hier, im sanften Kerzenlicht und dem leisen Klang indischer Musik, lädt das Taj Sie ein, Geschichten, Lachen und unvergessliche Mahlzeiten mit Ihren Lieben zu teilen.",
    button: "Tisch reservieren"
  }
};

const BombayComponent = () => {
  const { language } = useLanguage(); // Get the current language from context
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const { title, paragraph, button } = translations[language]; // Use the translations for the selected language

  return (
    <div
      id="richtext"
      ref={elementRef}
      className="bombay-container font-merriweather text-[#F5F5F5] px-4 py-12 md:py-24 transition-all duration-700 ease-out transform"
    >
      <div
        className={`content-wrapper max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        {/* Left Section */}
        <div className="lg:pr-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif leading-snug md:leading-tight text-center lg:text-left text-[#F5F5F5] mb-6 md:mb-8 lg:mb-12">
            {title}
          </h2>
          <p className="text-base sm:text-m md:text-lg lg:text-xl leading-relaxed text-[#E0E0E0]">
            {paragraph}
          </p>
        </div>

        {/* Right Section */}
        <div className="relative">
          {/* Image with Button Positioned Inside */}
          <div className="relative inline-block">
            <img
              src={image1}
              alt="Indian dish"
              className="w-full h-[400px] md:h-[600px] lg:h-[700px] object-cover rounded-lg shadow-md"
            />

            <a
              href="https://reservier.at/de/taj-indian-restaurant-bar"
              open-widget="reservier.at"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-2 right-2 bg-gray-800 text-gray-100 font-semibold py-2 px-4 rounded shadow-md transition duration-300 hover:bg-gray-700"
              style={{ zIndex: '10' }}
            >
              {button}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BombayComponent;
