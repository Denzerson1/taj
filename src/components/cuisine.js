import React, { useState } from 'react';
import image1 from '../images/butterchicken.jpg';
import image2 from '../images/manhattan.jpg';
import image3 from '../images/about.jpg';
import chowNowLogo from '../images/takeout/1.png'; // Adjust path as necessary
import grubhubLogo from '../images/takeout/2.png'; // Adjust path as necessary
import caviarLogo from '../images/takeout/3.png'; // Adjust path as necessary
import image2Mobile from '../images/manhattan.jpg'; // Import the mobile image
import takeoutImage from '../images/takeout.jpg'; // Add your takeout image here

const InfoSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="font-mukta bg-[#f8f5ec]">
      {/* Cuisine Section */}
      <div className="flex flex-col md:flex-row items-center gap-0 overflow-hidden">
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
      </div>

      {/* Cocktails Section */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-0 overflow-hidden mt-10 md:-mt-24 md:py-24">
        <div className="md:w-3/5 w-full">
          <img
            srcSet={`${image2} 1024w, ${image2} 480w`} // Add srcSet for responsive images
            sizes="(max-width: 768px) 480px, 1024px" // Define sizes for different breakpoints
            src={image2Mobile}
            alt="Cocktails"
            className="w-full h-[300px] md:h-[400px] object-cover" // Ensure consistent height
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
      </div>

      {/* Takeout Section */}
      <div className="flex flex-col md:flex-row items-center gap-0 overflow-hidden mt-10 md:-mt-24">
        <div className="md:w-3/5 w-full">
          <img
            src={takeoutImage}
            alt="Takeout"
            className="w-full h-[300px] md:h-[400px] object-cover" // Ensure consistent height
          />
        </div>
        <div className="md:w-2/5 w-full flex flex-col items-center justify-center text-center py-4 px-4">
          <h2 className="text-black text-lg font-bold">ORDER TAKEOUT</h2>
          <p className="text-gray-700 my-4">
            Enjoy the flavors of India at home with our delicious takeout options, perfectly prepared and ready for you to savor.
          </p>
          <button
            onClick={toggleMenu} // Toggle menu visibility on button click
            className="px-6 py-2 border border-[#FFC107] text-black font-semibold hover:bg-[#FFF9E3] transition-all inline-block"
          >
            ORDER ONLINE
          </button>

          {/* Conditionally render the takeout menu with animation */}
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
              }`}
          >
            <h3 className="text-black text-md font-bold">Takeout Menu</h3>
            <div className="flex justify-center gap-4 mt-1"> {/* Reduced margin and gap */}
              <button
                onClick={() => window.location.href = 'https://wolt.com/de-at/aut/vienna/restaurant/taj-indian-restaurant-bar?utm_source=googlemapreserved&utm_campaign=taj-indian-restaurant-bar&utm_content=65a919182b481e1b9b085e82&rwg_token=AJKvS9UpCVcxeAihFrWNbDIHqG8PM_-UDfbHVqByQtyDr2V3X-g_j6_yRalL92LdVqCXNK47TxQzx8HZJG1gXbjeia58YFAWEc--6nr0jzB-QHoJeWzRTNU%3D'} // Change to the actual link for Chow Now
                className="flex flex-col items-center"
              >
                <img src={chowNowLogo} alt="Chow Now" className="h-16" />
                <span className="text-sm">Wolt</span>
              </button>
              <button
                onClick={() => window.location.href = 'https://www.lieferando.at/speisekarte/the-taj-restaurant-bar?utm_campaign=foodorder&utm_medium=organic&utm_source=google'} // Change to the actual link for Grubhub
                className="flex flex-col items-center"
              >
                <img src={grubhubLogo} alt="Grubhub" className="h-16" />
                <span className="text-sm">Lieferando</span>
              </button>
              <button
                onClick={() => window.location.href = 'https://www.foodora.at/restaurant/zwlp/taj?utm_source=google&utm_medium=organic&utm_campaign=google_reserve_place_order_action'} // Change to the actual link for Caviar
                className="flex flex-col items-center"
              >
                <img src={caviarLogo} alt="Caviar" className="h-16" />
                <span className="text-sm">Foodora</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="flex flex-col md:flex-row items-center gap-0 overflow-hidden mt-10 md:-mt-24 md:py-24">
        <div className="md:hidden w-full">
          <img
            srcSet={`${takeoutImage} 1024w, ${takeoutImage} 480w`}
            sizes="(max-width: 768px) 480px, 1024px"
            src={takeoutImage}
            alt="About Us"
            className="w-full h-[300px] object-cover mb-4"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-2/5 w-full flex flex-col items-center justify-center text-center py-4 px-4">
          <h2 className="text-black text-lg font-bold">ABOUT US</h2>
          <p className="text-gray-700 my-4">
            Dive into our rich history and culinary journey that fuses the traditional and modern. Learn how our passion for exceptional flavors and welcoming atmosphere creates unforgettable experiences.
          </p>
          <button className="px-6 py-2 border border-[#FFC107] text-black font-semibold hover:bg-[#FFF9E3] transition-all inline-block">
            DISCOVER OUR STORY
          </button>
        </div>

        {/* Image on desktop only */}
        <div className="hidden md:block md:w-3/5 w-full">
          <img
            srcSet={`${image3} 1024w, ${image3} 480w`}
            sizes="(max-width: 768px) 480px, 1024px"
            src={image3}
            alt="About Us"
            className="w-full h-[400px] object-cover mb-4"
          />
        </div>

      </div>
    </div>
  );
};

export default InfoSection;
