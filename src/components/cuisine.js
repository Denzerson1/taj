import React from "react";
import image1 from '../images/butterchicken.jpg';
import image2 from '../images/manhattan.jpg';
import image3 from '../images/about.jpg';
import image2Mobile from '../images/manhattan2.jpg'; // Import the mobile image

const InfoSection = () => {
  return (
    <div className="bg-[#f8f5ec]">
      {/* Cuisine Section */}
      <div className="flex flex-col md:flex-row items-center gap-0 overflow-hidden">
        <div className="md:w-3/5 w-full">
          <img
            src={image1}
            alt="Cuisine"
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
        </div>
        <div className="md:w-2/5 w-full flex flex-col items-center justify-center text-center py-10 px-4">
          <h2 className="text-black text-lg font-bold">OUR CUISINE</h2>
          <p className="text-gray-700 my-4">
            A celebration of regional Indian flavors brought to life using fresh
            local produce, our progressive menu gives a nod to the past while
            looking straight into the future.
          </p>
          <button className="px-6 py-2 border border-[#FFC107] text-[#FFC107] font-semibold hover:bg-[#FFD54F] transition-all">
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
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
        </div>
        <div className="md:w-2/5 w-full flex flex-col items-center justify-center text-center py-10 px-4">
          <h2 className="text-black text-lg font-bold">OUR COCKTAILS</h2>
          <p className="text-gray-700 my-4">
            An ancient elixir, a forgotten ingredient, a curious spirit — the
            bar at Baar Baar turns convention upside down by giving every drink
            its own stage.
          </p>
          <button className="px-6 py-2 border border-[#FFC107] text-[#FFC107] font-semibold hover:bg-[#FFD54F] transition-all">
            VIEW OUR DRINKS
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="flex flex-col md:flex-row items-center gap-0 overflow-hidden mt-10 md:-mt-24">
        <div className="md:w-3/5 w-full">
          <img
            src={image3}
            alt="About Baar Baar"
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
        </div>
        <div className="md:w-2/5 w-full flex flex-col items-center justify-center text-center py-10 px-4">
          <h2 className="text-black text-lg font-bold">ABOUT TAJ</h2>
          <p className="text-gray-700 my-4">
            Sarkar’s contemporary approach to authentic Indian dishes in a
            vibrant, colorful setting inspired by the culture, art, and spirit
            of his home country.
          </p>
          <button className="px-6 py-2 border border-[#FFC107] text-[#FFC107] font-semibold hover:bg-[#FFD54F] transition-all">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
