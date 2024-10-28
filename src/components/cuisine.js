import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion'; // Import framer-motion and useInView
import image1 from '../images/butterchicken.jpg';
import image2 from '../images/manhattan.jpg';
import image3 from '../images/about.jpg';
import chowNowLogo from '../images/takeout/1.png';
import grubhubLogo from '../images/takeout/2.png';
import caviarLogo from '../images/takeout/3.png';
import image2Mobile from '../images/manhattan.jpg';
import takeoutImage from '../images/takeout.jpg';

const InfoSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <div className="font-mukta bg-[#f8f5ec]">
      
      {/* Cuisine Section */}
      <motion.div
        ref={cuisineRef}
        className="flex flex-col md:flex-row items-center gap-0 overflow-hidden"
        initial="hidden"
        animate={cuisineInView ? "visible" : "hidden"}
        variants={slideInLeft}
      >
        <div className="md:w-3/5 w-full">
          <img
            src={image1}
            alt="Cuisine"
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
        </div>
        <div className="md:w-2/5 w-full flex flex-col items-center justify-center text-center py-4 px-4">
          <h2 className="text-black text-lg font-bold">OUR CUISINE</h2>
          <p className="text-gray-700 my-4">
            Our menu showcases the vibrant regional flavors of India, crafted with fresh, local ingredients. It honors tradition while embracing a modern culinary vision.
          </p>
          <button className="px-6 py-2 border border-[#FFC107] text-black font-semibold hover:bg-[#FFF9E3] transition-all inline-block">
            VIEW OUR FOOD
          </button>
        </div>
      </motion.div>

      {/* Cocktails Section */}
      <motion.div
        ref={cocktailsRef}
        className="flex flex-col md:flex-row-reverse items-center gap-0 overflow-hidden mt-10 md:-mt-24 md:py-24"
        initial="hidden"
        animate={cocktailsInView ? "visible" : "hidden"}
        variants={slideInRight}
      >
        <div className="md:w-3/5 w-full">
          <img
            srcSet={`${image2} 1024w, ${image2} 480w`}
            sizes="(max-width: 768px) 480px, 1024px"
            src={image2Mobile}
            alt="Cocktails"
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
        </div>
        <div className="md:w-2/5 w-full flex flex-col items-center justify-center text-center py-4 px-4">
          <h2 className="text-black text-lg font-bold">OUR COCKTAILS</h2>
          <p className="text-gray-700 my-4">
            At Taj, cocktails are a journey of flavor, where classic recipes meet innovative twists, inviting you to explore every sip.
          </p>
          <button className="px-6 py-2 border border-[#FFC107] text-black font-semibold hover:bg-[#FFF9E3] transition-all inline-block">
            VIEW OUR DRINKS
          </button>
        </div>
      </motion.div>

      {/* Takeout Section */}
      <motion.div
        ref={takeoutRef}
        className="flex flex-col md:flex-row items-center gap-0 overflow-hidden mt-10 md:-mt-24"
        initial="hidden"
        animate={takeoutInView ? "visible" : "hidden"}
        variants={slideInLeft}
      >
        <div className="md:w-3/5 w-full">
          <img
            src={takeoutImage}
            alt="Takeout"
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
        </div>
        <div className="md:w-2/5 w-full flex flex-col items-center justify-center text-center py-4 px-4">
          <h2 className="text-black text-lg font-bold">ORDER TAKEOUT</h2>
          <p className="text-gray-700 my-4">
            Enjoy the flavors of India at home with our delicious takeout options, perfectly prepared and ready for you to savor.
          </p>
          <button
            onClick={toggleMenu}
            className="px-6 py-2 border border-[#FFC107] text-black font-semibold hover:bg-[#FFF9E3] transition-all inline-block"
          >
            ORDER ONLINE
          </button>

          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
              }`}
          >
            <h3 className="text-black text-md font-bold">Takeout Menu</h3>
            <div className="flex justify-center gap-4 mt-1">
              <button
                onClick={() => window.location.href = 'https://wolt.com/de-at/aut/vienna/restaurant/taj-indian-restaurant-bar'}
                className="flex flex-col items-center"
              >
                <img src={chowNowLogo} alt="Chow Now" className="h-16" />
                <span className="text-sm">Wolt</span>
              </button>
              <button
                onClick={() => window.location.href = 'https://www.lieferando.at/speisekarte/the-taj-restaurant-bar'}
                className="flex flex-col items-center"
              >
                <img src={grubhubLogo} alt="Grubhub" className="h-16" />
                <span className="text-sm">Lieferando</span>
              </button>
              <button
                onClick={() => window.location.href = 'https://www.foodora.at/restaurant/zwlp/taj'}
                className="flex flex-col items-center"
              >
                <img src={caviarLogo} alt="Caviar" className="h-16" />
                <span className="text-sm">Foodora</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* About Section */}
      <motion.div
        ref={aboutRef}
        className="flex flex-col md:flex-row items-center gap-0 overflow-hidden mt-10 md:-mt-24 md:py-24"
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

        <div className="md:w-2/5 w-full flex flex-col items-center justify-center text-center py-4 px-4">
          <h2 className="text-black text-lg font-bold">ABOUT US</h2>
          <p className="text-gray-700 my-4">
            Dive into our rich history and culinary journey that fuses the traditional and modern. Learn how our passion for exceptional flavors and welcoming atmosphere creates unforgettable experiences.
          </p>
          <button className="px-6 py-2 border border-[#FFC107] text-black font-semibold hover:bg-[#FFF9E3] transition-all inline-block">
            DISCOVER OUR STORY
          </button>
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
