import React, { useEffect, useRef, useState } from 'react';
import image1 from '../images/Richtext.jpg'; // Replace with your actual path for the image

const BombayComponent = () => {
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

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      id="richtext"
      ref={elementRef}
      className={`font-mukta bg-[#f8f5ec] text-gray-800 px-4 py-12 md:py-24 transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Section */}
        <div className="lg:pr-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif leading-snug md:leading-tight text-center lg:text-left text-gray-900 mb-6 md:mb-8 lg:mb-12">
            At Taj, every dish is a journey through India’s vibrant flavors, &nbsp;
            <br className="hidden lg:block" />
            where each spice tells a story&nbsp;
            <br className="hidden lg:block" />
            and every ingredient speaks of tradition.
          </h2>
          <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-700">
            So, sit back and let us transport you from the streets of Vienna to the royal kitchens of Rajasthan, 
            the bustling eateries of Delhi, and the coastal delights of Kerala. Here, amidst the soft glow of candles 
            and the gentle hum of Indian music, Taj invites you to share stories, laughter, and unforgettable meals with your loved ones.
          </p>
        </div>

        {/* Right Section */}
        <div className="relative">
          {/* Image with Button Positioned Inside */}
          <div className="relative inline-block">
            <img
              src={image1}
              alt="Chicken Biryani"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
            <p className="absolute top-4 left-4 bg-white bg-opacity-75 px-2 py-1 rounded text-xs text-gray-600">
              The legendary Chicken?
            </p>
            <a 
              href="https://www.quandoo.at/place/taj-indisches-restaurant-bar-52222" 
              className="absolute bottom-2 right-2 bg-[#FFC107] text-black font-semibold py-2 px-4 rounded shadow-lg transition duration-300 hover:bg-[#ffca2d]"
              style={{ zIndex: '10' }}
            >
              Book a table
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BombayComponent;
