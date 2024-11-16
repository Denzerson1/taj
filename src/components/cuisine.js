import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion'; // Import framer-motion and useInView
import { useLanguage } from '../LanguageContext'; // Import language context
import image1 from '../images/butterchicken.jpg';
import image2 from '../images/manhattan.jpg';
import image3 from '../images/about.jpg';
import chowNowLogo from '../images/takeout/1.png';
import grubhubLogo from '../images/takeout/2.png';
import caviarLogo from '../images/takeout/3.png';
import image2Mobile from '../images/manhattan.jpg';
import takeoutImage from '../images/takeout.jpg';

// Translations for the component
const translations = {
  EN: {
    cuisine: {
      title: "OUR CUISINE",
      description: "Our menu showcases the vibrant regional flavors of India, crafted with fresh, local ingredients. It honors tradition while embracing a modern culinary vision.",
      button: "VIEW OUR FOOD"
    },
    cocktails: {
      title: "OUR COCKTAILS",
      description: "At Taj, cocktails are a journey of flavor, where classic recipes meet innovative twists, inviting you to explore every sip.",
      button: "VIEW OUR DRINKS"
    },
    takeout: {
      title: "ORDER ONLINE",
      description: "Enjoy the flavors of India at home with our delicious takeout options, perfectly prepared and ready for you to savor.",
      button: "ORDER ONLINE",
      menuTitle: "Takeout Menu",
      platforms: {
        wolt: "Wolt",
        grubhub: "Lieferando",
        caviar: "Foodora"
      }
    },
    about: {
      title: "ABOUT US",
      description: "Dive into our rich history and culinary journey that fuses the traditional and modern. Learn how our passion for exceptional flavors and welcoming atmosphere creates unforgettable experiences.",
      button: "DISCOVER OUR STORY"
    }
  },
  DE: {
    cuisine: {
      title: "UNSERE KÜCHE",
      description: "Unser Menü zeigt die lebendigen regionalen Aromen Indiens, zubereitet mit frischen, lokalen Zutaten. Es ehrt die Tradition, während es eine moderne kulinarische Vision umarmt.",
      button: "UNSERE SPEISEKARTE ANSEHEN"
    },
    cocktails: {
      title: "UNSERE COCKTAILS",
      description: "Im Taj sind Cocktails eine Reise des Geschmacks, bei der klassische Rezepte auf innovative Wendungen treffen und Sie zu jedem Schluck einladen.",
      button: "UNSERE GETRÄNKE ANSEHEN"
    },
    takeout: {
      title: "ONLINE BESTELLEN",
      description: "Genießen Sie die Aromen Indiens zu Hause mit unseren köstlichen Takeout-Optionen, die perfekt zubereitet und bereit sind, von Ihnen genossen zu werden.",
      button: "ONLINE BESTELLEN",
      menuTitle: "Takeout-Menü",
      platforms: {
        wolt: "Wolt",
        grubhub: "Lieferando",
        caviar: "Foodora"
      }
    },
    about: {
      title: "ÜBER UNS",
      description: "Tauchen Sie ein in unsere reiche Geschichte und kulinarische Reise, die Tradition und Moderne vereint. Erfahren Sie, wie unsere Leidenschaft für außergewöhnliche Aromen und eine einladende Atmosphäre unvergessliche Erlebnisse schafft.",
      button: "ENTDECKEN SIE UNSERE GESCHICHTE"
    }
  }
};

const InfoSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage(); // Get the current language from context

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Slide-in variants for left and right animations
  const slideInLeft = {
    hidden: { x: '-100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const slideInRight = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  // Refs for sections
  const cuisineRef = useRef(null);
  const cocktailsRef = useRef(null);
  const takeoutRef = useRef(null);
  const aboutRef = useRef(null);

  // Check if each section is in view
  const cuisineInView = useInView(cuisineRef, { once: true });
  const cocktailsInView = useInView(cocktailsRef, { once: true });
  const takeoutInView = useInView(takeoutRef, { once: true });
  const aboutInView = useInView(aboutRef, { once: true });

  const { cuisine, cocktails, takeout, about } = translations[language]; // Get translations for current language

  return (
    <div className="font-mukta"
      style={{
        backgroundImage: 'linear-gradient(to bottom, #1E0D0D, #321808, #3E261C, #2F2019,#27140D)', // Darker brown to black gradient
      }}>
      {/* Cuisine Section */}
      <motion.div
        ref={cuisineRef}
        className="flex flex-col md:flex-row items-center gap-8 overflow-hidden"
        initial="hidden"
        animate={cuisineInView ? "visible" : "hidden"}
        variants={slideInLeft}
      >
        <div className="md:w-3/5 w-full">
          <img
            src={image1}
            alt="Cuisine"
            className="w-full h-[300px] md:h-[400px] object-cover shadow-lg"
          />
        </div>
        <div className="md:w-2/5 w-full flex flex-col items-center justify-center text-center py-8 px-6">
          <h2 className="text-[#FFC107] text-3xl font-serif font-semibold">{cuisine.title}</h2>
          <p className="text-gray-200 my-6 text-lg">{cuisine.description}</p>
          <a href="/food">
            <button className="px-6 py-3 border border-[#FFC107] bg-[#FFC107] text-black font-semibold transition-all ease-in-out duration-300 hover:bg-[#FFC1071A] hover:text-gray-200">
              {cuisine.button}
            </button>
          </a>
        </div>
      </motion.div>

      {/* Cocktails Section */}
      <motion.div
        ref={cocktailsRef}
        className="flex flex-col md:flex-row-reverse items-center gap-8 overflow-hidden mt-10 md:-mt-24 md:py-24"
        initial="hidden"
        animate={cocktailsInView ? "visible" : "hidden"}
        variants={slideInRight}
      >
        <div className="md:w-3/5 w-full">
          <img
            srcSet={`${image2} 1024w, ${image2} 480w`}
            src={image2Mobile}
            alt="Cocktails"
            className="w-full h-[300px] md:h-[400px] object-cover shadow-lg"
          />
        </div>
        <div className="md:w-2/5 w-full flex flex-col items-center justify-center text-center py-8 px-6">
          <h2 className="text-[#FFC107] text-3xl font-serif font-semibold">{cocktails.title}</h2>
          <p className="text-gray-200 my-6 text-lg">{cocktails.description}</p>
          <a href="/drinks">
            <button className="px-6 py-3 border border-[#FFC107] bg-[#FFC107] text-black font-semibold transition-all ease-in-out duration-300 hover:bg-[#FFC1071A] hover:text-gray-200">
              {cocktails.button}
            </button>
          </a>
        </div>
      </motion.div>

      {/* Takeout Section */}
      <motion.div
        ref={takeoutRef}
        className="flex flex-col md:flex-row items-center gap-8 overflow-hidden mt-10 md:-mt-24"
        initial="hidden"
        animate={takeoutInView ? "visible" : "hidden"}
        variants={slideInLeft}
      >
        <div className="md:w-3/5 w-full">
          <img
            src={takeoutImage}
            alt="Takeout"
            className="w-full h-[400px] md:h-[500px] object-cover shadow-lg" // Increased height
          />
        </div>
        <div className="md:w-2/5 w-full flex flex-col items-center justify-center text-center py-8 px-6">
          <h2 className="text-[#FFC107] text-3xl font-serif font-semibold">{takeout.title}</h2>
          <p className="text-gray-200 my-6 text-lg">{takeout.description}</p>
          <button
            onClick={toggleMenu}
            className="px-6 py-3 border border-[#FFC107] bg-[#FFC107] text-black font-semibold transition-all ease-in-out duration-300 hover:bg-[#FFC1071A] hover:text-gray-200"
          >
            {takeout.button}
          </button>

          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
              }`}
          >
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={() => window.location.href = 'https://wolt.com/de-at/aut/vienna/restaurant/taj-indian-restaurant-bar'}
                className="flex flex-col items-center"
              >
                <img src={chowNowLogo} alt="Chow Now" className="h-16 mb-2" />
                <span className="text-sm text-gray-200">{takeout.platforms.wolt}</span>
              </button>
              <button
                onClick={() => window.location.href = 'https://www.lieferando.at/speisekarte/the-taj-restaurant-bar'}
                className="flex flex-col items-center"
              >
                <img src={grubhubLogo} alt="Grubhub" className="h-16 mb-2" />
                <span className="text-sm text-gray-200">{takeout.platforms.grubhub}</span>
              </button>
              <button
                onClick={() => window.location.href = 'https://www.foodora.at/restaurant/zwlp/taj'}
                className="flex flex-col items-center"
              >
                <img src={caviarLogo} alt="Caviar" className="h-16 mb-2" />
                <span className="text-sm text-gray-200">{takeout.platforms.caviar}</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>


      {/* About Section */}
      <motion.div
        ref={aboutRef}
        className="flex flex-col md:flex-row items-center gap-8 overflow-hidden mt-10 md:-mt-24 md:py-24"
        initial="hidden"
        animate={aboutInView ? "visible" : "hidden"}
        variants={slideInRight}
      >
        <div className="md:hidden w-full">
          <img
            srcSet={`${image3} 1024w, ${image3} 480w`}
            sizes="(max-width: 768px) 480px, 1024px"
            src={image3}
            alt="About Us"
            className="w-full h-[300px] object-cover mb-4"
          />
        </div>

        <div className="md:w-2/5 w-full flex flex-col items-center justify-center text-center py-8 px-6">
          <h2 className="text-[#FFC107] text-3xl font-serif font-semibold">{about.title}</h2>
          <p className="text-gray-200 my-6 text-lg">{about.description}</p>
          <a href="/about">
            <button className="px-6 py-3 border border-[#FFC107] bg-[#FFC107] text-black font-semibold transition-all ease-in-out duration-300 hover:bg-[#FFC1071A] hover:text-gray-200">
              {about.button}
            </button>
          </a>
        </div>

        <div className="hidden md:block md:w-3/5 w-full">
          <img
            srcSet={`${image3} 1024w, ${image3} 480w`}
            sizes="(max-width: 768px) 480px, 1024px"
            src={image3}
            alt="About Us"
            className="w-full h-[400px] object-cover mb-4"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default InfoSection;
