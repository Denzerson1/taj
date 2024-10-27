import React from 'react';
import image1 from '../images/Richtext.jpg'; // Replace with your actual path for the image

const BombayComponent = () => {
  return (
    <div id="richtext" className="font-mukta bg-[#f8f5ec] text-gray-800 px-4 py-12 md:py-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
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
          <img
            src={image1}
            alt="Chicken Biryani alt"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
          <p className="text-xs text-gray-600 mt-2 lg:mt-4 lg:absolute lg:top-4 lg:left-4 lg:bg-white lg:bg-opacity-75 lg:px-2 lg:py-1 lg:rounded">
            The legendary Chicken?
          </p>
          {/* Overlapping Button */}
          <a 
            href="https://www.quandoo.at/place/taj-indisches-restaurant-bar-52222" 
            className="absolute bottom-4 right-4 bg-[#FFC107] text-black font-semibold py-3 px-6 rounded shadow-lg transition duration-300 hover:bg-[#ffca2d]"
          >
            Book a table
          </a>
        </div>
      </div>
    </div>
  );
};

export default BombayComponent;
