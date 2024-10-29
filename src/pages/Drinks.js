// src/components/DrinkSection.js
import React from 'react';
import drink from '../images/cocktail.jpg'; // Update the image path if necessary
import Navbar from '../components/navbar';
import DrinkImage from '../components/drinkImage';

const DrinkSection = () => {
    return (
        <div className="mt-20 min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <DrinkImage />
            <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center lg:justify-start bg-gray-50">
                {/* Left - Drink Image */}
                <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-[400px]">
                    <img
                        src={drink}
                        alt="Refreshing drinks"
                        className="w-full h-full object-cover shadow-lg"
                    />
                </div>

                {/* Right - Text Content */}
                <div className="w-full lg:w-1/2 h-auto lg:h-[400px] bg-teal-800 text-white flex items-center">
                    <div className="p-6 sm:p-8">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">SIGNATURE COCKTAILS & CRAFTED DRINKS</h2>
                        <p className="mb-4 text-gray-200 text-sm sm:text-base">
                            Discover a world of flavors through our expertly crafted cocktails and drinks. Our bartenders bring creativity to each glass, balancing unique ingredients to create a taste experience that’s truly special.
                        </p>
                        <p className="mb-4 text-gray-200 text-sm sm:text-base">
                            From bold and refreshing concoctions to smooth, sophisticated classics, our drink menu is designed to enhance your experience. Whether you're here for a quiet evening or a lively celebration, there's something for every mood and moment.
                        </p>
                        <p className="text-gray-200 mb-6 text-sm sm:text-base">
                            Raise a glass and savor the spirit of good company, unique flavors, and unforgettable memories.
                        </p>
                        <a href="/drinks.pdf">
                            <button className="px-6 py-2 bg-white text-teal-800 font-semibold rounded shadow hover:bg-gray-100 transition duration-300">
                                View Drink Menu
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DrinkSection;
