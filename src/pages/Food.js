// src/components/FoodSection.js
import React, { useRef } from 'react'; // Import useRef
import foodImage from '../images/food.jpg'; // Update the image path if necessary
import Navbar from '../components/navbar';
import FoodBanner from '../components/foodImage'; // Import the FoodBanner component

// Food images
import image1 from '../images/food/food-01.png';
import image2 from '../images/food/food-02.png';
import image3 from '../images/food/food-03.png';
import image4 from '../images/food/food-04.png';
import image5 from '../images/food/food-05.png';
import image6 from '../images/food/food-06.png';
import image7 from '../images/food/food-07.png';
import image8 from '../images/food/food-08.png';
import image9 from '../images/food/food-09.png';
import image10 from '../images/food/food-10.png';
import image11 from '../images/food/food-11.png';
import image12 from '../images/food/food-12.png';
import image13 from '../images/food/food-13.png';
import Footer from '../components/Footer';

const FoodSection = () => {
    const galleryRef = useRef(null); // Create a ref for the gallery

    const scrollToGallery = () => {
        if (galleryRef.current) {
            galleryRef.current.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the gallery
        }
    };

    return (
        <div>
            <div className="bg-[#B2B2B2] font-mukta mt-20 min-h-screen flex flex-col">
                <Navbar />
                <FoodBanner onScrollToMenu={scrollToGallery} />
                <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center lg:justify-start bg-gray-600">
                    {/* Left - Food Image */}
                    <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-[500px]">
                        <img
                            src={foodImage}
                            alt="Delicious food"
                            className="w-full h-full object-cover shadow-lg"
                        />
                    </div>

                    {/* Right - Text Content */}
                    <div className="w-full lg:w-1/2 h-auto lg:h-[500px] bg-gray-600 flex items-center"> {/* Keeping the background gray */}
                        <div className="p-6 sm:p-8">
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-white">INDIAN CUISINE</h2>
                            <p className="mb-4 text-gray-200 text-sm sm:text-base">
                                Experience the richness of Indian heritage through our exquisite dishes. Each meal is prepared with the freshest ingredients, bursting with flavors and traditions.
                            </p>
                            <p className="mb-4 text-gray-200 text-sm sm:text-base">
                                From savory street food to elaborate curries, our menu offers a taste of India's diverse culinary landscape, perfect for every occasion.
                            </p>
                            <p className="text-gray-200 mb-6 text-sm sm:text-base">
                                Join us and savor the essence of India on your plate.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Image Gallery - Vertical Scrollable Layout */}
                <div ref={galleryRef} className="flex flex-col items-center gap-4 p-6 bg-gray-600">
                    <h1 className="text-3xl font-semibold text-white m-4">Our Menu</h1>
                    <img src={image1} alt="Food 1" className="w-full max-w-2xl h-auto object-cover rounded shadow-md" />
                    <img src={image2} alt="Food 2" className="w-full max-w-2xl h-auto object-cover rounded shadow-md" />
                    <img src={image3} alt="Food 3" className="w-full max-w-2xl h-auto object-cover rounded shadow-md" />
                    <img src={image4} alt="Food 4" className="w-full max-w-2xl h-auto object-cover rounded shadow-md" />
                    <img src={image5} alt="Food 5" className="w-full max-w-2xl h-auto object-cover rounded shadow-md" />
                    <img src={image6} alt="Food 6" className="w-full max-w-2xl h-auto object-cover rounded shadow-md" />
                    <img src={image7} alt="Food 7" className="w-full max-w-2xl h-auto object-cover rounded shadow-md" />
                    <img src={image8} alt="Food 8" className="w-full max-w-2xl h-auto object-cover rounded shadow-md" />
                    <img src={image9} alt="Food 9" className="w-full max-w-2xl h-auto object-cover rounded shadow-md" />
                    <img src={image10} alt="Food 10" className="w-full max-w-2xl h-auto object-cover rounded shadow-md" />
                    <img src={image11} alt="Food 11" className="w-full max-w-2xl h-auto object-cover rounded shadow-md" />
                    <img src={image12} alt="Food 12" className="w-full max-w-2xl h-auto object-cover rounded shadow-md" />
                    <img src={image13} alt="Food 13" className="w-full max-w-2xl h-auto object-cover rounded shadow-md" />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default FoodSection;
