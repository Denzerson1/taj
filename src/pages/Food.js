// src/components/FoodSection.js
import React from 'react';
import food from '../images/food.jpg';
import Navbar from '../components/navbar';
import FoodImage from '../components/foodImage';

const FoodSection = () => {
    return (
        <div className="mt-20 min-h-screen bg-gray-50 flex flex-col">
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
                <div className="w-full lg:w-1/2 h-auto lg:h-[400px] bg-teal-800 text-white flex items-center">
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
                        <a href="/food.pdf">
                        <button className="px-6 py-2 bg-white text-teal-800 font-semibold rounded shadow hover:bg-gray-100 transition duration-300">
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
