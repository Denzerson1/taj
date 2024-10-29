// src/components/DrinkSection.js
import React from 'react';
import drink from '../images/cocktail.jpg'; // Update the image path if necessary
import Navbar from '../components/navbar';
import DrinkImage from '../components/drinkImage';

const DrinkSection = () => {
    return (
        <div className="bg-black font-mukta mt-20 min-h-screen flex flex-col">
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
                <div className="w-full lg:w-1/2 h-auto lg:h-[400px] bg-black text-white flex items-center">
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
                            <button
                                style={{
                                    padding: '12px 24px',
                                    backgroundColor: '#FFD700', // Gold color
                                    color: 'black',
                                    fontWeight: 'bold',
                                    borderRadius: '5px',
                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                    transition: 'background-color 0.3s ease',
                                }}
                                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#FFC107')} // Darker gold on hover
                                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#FFD700')} // Back to gold on mouse out
                            >
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
