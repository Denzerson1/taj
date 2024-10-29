// src/components/FoodSection.js
import React from 'react';
import food from '../images/food.jpg';
import Navbar from '../components/navbar';
import FoodImage from '../components/foodImage';

const FoodSection = () => {
    return (
        <div className="bg-black font-mukta mt-20 min-h-screen flex flex-col">
            <Navbar />
            <FoodImage />
            <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center lg:justify-start bg-gray-50">
                {/* Left - Food Image */}
                <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-[400px]">
                    <img
                        src={food}
                        alt="Delicious food"
                        className="w-full h-full object-cover shadow-lg"
                    />
                </div>

                {/* Right - Text Content */}
                <div className="w-full lg:w-1/2 h-auto lg:h-[400px] bg-black text-white flex items-center">
                    <div className="p-6 sm:p-8">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">A GLOBAL TWIST ON INDIAN FLAVORS</h2>
                        <p className="mb-4 text-gray-200 text-sm sm:text-base">
                            Our kitchen reimagines classic Indian flavors with a modern twist, blending spices and techniques from around the world. Each dish is crafted with a spirit of innovation, honoring traditional Indian roots while embracing global influences.
                        </p>
                        <p className="mb-4 text-gray-200 text-sm sm:text-base">
                            From small bites to shareable platters, our menu celebrates the essence of Indian cooking with fresh, local ingredients and a hint of European finesse. The result is a vibrant dining experience that’s as bold and unique as the city itself.
                        </p>
                        <p className="text-gray-200 mb-6 text-sm sm:text-base">
                            Join us for an unforgettable journey where cultures collide, flavors surprise, and every plate tells a new story. Let’s raise a glass to culinary creativity and to bringing people together, one dish at a time.
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
                                View Food Menu
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodSection;
