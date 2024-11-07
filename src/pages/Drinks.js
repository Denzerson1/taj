// src/components/DrinkSection.js
import React, { useRef } from 'react'; // Import useRef
import drink from '../images/cocktail.jpg'; // Update the image path if necessary
import Navbar from '../components/navbar';
import image1 from '../images/cocktails/classic.png';
import image2 from '../images/cocktails/Pg2.png';
import image3 from '../images/cocktails/Pg3.png';
import image4 from '../images/cocktails/Pg4.png';
import image5 from '../images/cocktails/Pg5.png';
import DrinkBanner from '../components/drinkImage'; // Import DrinkBanner
import Footer from '../components/Footer';

const DrinkSection = () => {
    const galleryRef = useRef(null); // Create a ref for the gallery

    const scrollToGallery = () => {
        if (galleryRef.current) {
            galleryRef.current.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the gallery
        }
    };

    return (
        <div>
            <div className="bg-[#B2B2B2] font-mukta mt-20 min-h-screen flex flex-col"> {/* Changed background color to match FoodSection */}
                <Navbar />
                {/* Pass scroll function as prop to DrinkBanner */}
                <DrinkBanner onScrollToGallery={scrollToGallery} />
                <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center lg:justify-start bg-gray-600"> {/* Updated background color */}
                    {/* Left - Drink Image */}
                    <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-[500px]">
                        <img
                            src={drink}
                            alt="Refreshing drinks"
                            className="w-full h-full object-cover shadow-lg"
                        />
                    </div>

                    {/* Right - Text Content */}
                    <div className="w-full lg:w-1/2 h-auto lg:h-[500px] bg-gray-600 flex items-center"> {/* Keeping the background gray */}
                        <div className="p-6 sm:p-8">
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-white">SIGNATURE COCKTAILS & CRAFTED DRINKS</h2>
                            <p className="mb-4 text-gray-200 text-sm sm:text-base">
                                Discover a world of flavors through our expertly crafted cocktails and drinks. Our bartenders bring creativity to each glass, balancing unique ingredients to create a taste experience that’s truly special.
                            </p>
                            <p className="mb-4 text-gray-200 text-sm sm:text-base">
                                From bold and refreshing concoctions to smooth, sophisticated classics, our drink menu is designed to enhance your experience. Whether you're here for a quiet evening or a lively celebration, there's something for every mood and moment.
                            </p>
                            <p className="text-gray-200 mb-6 text-sm sm:text-base">
                                Raise a glass and savor the spirit of good company, unique flavors, and unforgettable memories.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Image Gallery - Vertical Scrollable Layout */}
                <div ref={galleryRef} className="flex flex-col items-center gap-4 p-6 bg-gray-600"> {/* Keeping the background gray */}
                    <h1 className="text-3xl font-semibold text-white m-4">Our Menu</h1>
                    <img src={image2} alt="Cocktail 2" className="w-full max-w-2xl h-auto object-cover rounded shadow-md" />
                    <img src={image3} alt="Cocktail 3" className="w-full max-w-2xl h-auto object-cover rounded shadow-md" />
                    <img src={image4} alt="Cocktail 4" className="w-full max-w-2xl h-auto object-cover rounded shadow-md" />
                    <img src={image5} alt="Cocktail 5" className="w-full max-w-2xl h-auto object-cover rounded shadow-md" />
                    <img src={image1} alt="Cocktail 1" className="w-full max-w-2xl h-auto object-cover rounded shadow-md" />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DrinkSection;
