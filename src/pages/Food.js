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
import { useLanguage } from '../LanguageContext'; // Import the language context

const FoodSection = () => {
    const galleryRef = useRef(null); // Create a ref for the gallery
    const { language } = useLanguage(); // Access current language from context

    const scrollToGallery = () => {
        if (galleryRef.current) {
            galleryRef.current.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the gallery
        }
    };

    // Translations for different languages
    const content = {
        en: {
            title: "Indian Cuisine",
            description: "Experience the diversity of Indian traditions through our exquisite dishes. Every meal is made with the freshest ingredients, bursting with flavor and tradition.",
            menuTitle: "Our Menu",
            descriptionTwo: "From savory street food to elaborate curries, our menu offers a taste of India's diverse culinary landscape – perfect for any occasion.",
            descriptionThree: "Come to us and enjoy the true India on your plate.",
            buttonText: "View Menu"
        },
        de: {
            title: "Indische Küche",
            description: "Erleben Sie die Vielfalt der indischen Traditionen durch unsere exquisiten Gerichte. Jede Mahlzeit wird mit den frischesten Zutaten zubereitet, die voller Aromen und Traditionen stecken.",
            menuTitle: "Unser Menü",
            descriptionTwo: "Vom herzhaften Street Food bis zu aufwendigen Currys bietet unsere Speisekarte einen Geschmack der vielfältigen kulinarischen Landschaft Indiens – perfekt für jede Gelegenheit.",
            descriptionThree: "Kommen Sie zu uns und genießen Sie das wahre Indien auf Ihrem Teller.",
            buttonText: "Speisekarte ansehen"
        }
    };

    // Use the current language to fetch the relevant content
    const currentContent = language === 'DE' ? content.de : content.en;

    return (
        <div >
            <div
                style={{
                    backgroundImage: 'linear-gradient(to bottom, #4D2816, #0B0706)', // Darker brown to black gradient
                }}
                className="font-mukta mt-20 min-h-screen flex flex-col">
                <Navbar />
                <FoodBanner onScrollToMenu={scrollToGallery} />
                <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center lg:justify-start">
                    {/* Left - Food Image */}
                    <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-[500px]">
                        <img
                            loading="lazy"
                            src={foodImage}
                            alt="Delicious food"
                            className="w-full h-full object-cover shadow-lg"
                        />
                    </div>

                    {/* Right - Text Content */}
                    <div className="w-full lg:w-1/2 h-auto lg:h-[500px] flex items-center">
                        <div className="p-6 sm:p-8">
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-white">{currentContent.title}</h2> {/* Title */}
                            <p className="mb-4 text-gray-200 text-sm sm:text-base">
                                {currentContent.description}
                            </p>
                            <p className="mb-4 text-gray-200 text-sm sm:text-base">
                                {currentContent.descriptionTwo}
                            </p>
                            <p className="text-gray-200 mb-6 text-sm sm:text-base">
                                {currentContent.descriptionThree}
                            </p>

                            {/* Takeout Button */}
                            <button
                                onClick={() => window.open('/food.pdf', '_blank')} // Open a blank page
                                className="px-6 py-3 border border-radiu border-[#FFC107] bg-[#FFC107] text-black font-semibold transition-all ease-in-out duration-300 hover:bg-[#FFC1071A] hover:text-gray-200"
                            >
                                {currentContent.buttonText}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Image Gallery - Vertical Scrollable Layout */}
                <div ref={galleryRef} className="flex flex-col items-center gap-4 p-6 ">
                    <h1 className="text-3xl font-semibold text-white m-4">{currentContent.menuTitle}</h1> {/* Menu Title */}
                    <img src={image1} alt="Food 1" loading="lazy" className="w-full max-w-2xl h-auto object-cover rounded shadow-md" />
                    <img src={image2} alt="Food 2" loading="lazy" className="w-full max-w-2xl h-auto object-cover rounded shadow-md" />
                    <img src={image3} alt="Food 3" loading="lazy" className="w-full max-w-2xl h-auto object-cover rounded shadow-md" />
                    <img src={image4} alt="Food 4" loading="lazy" className="w-full max-w-2xl h-auto object-cover rounded shadow-md" />
                    <img src={image5} alt="Food 5" loading="lazy" className="w-full max-w-2xl h-auto object-cover rounded shadow-md" />
                    <img src={image6} alt="Food 6" loading="lazy" className="w-full max-w-2xl h-auto object-cover rounded shadow-md" />
                    <img src={image7} alt="Food 7" loading="lazy" className="w-full max-w-2xl h-auto object-cover rounded shadow-md" />
                    <img src={image8} alt="Food 8" loading="lazy" className="w-full max-w-2xl h-auto object-cover rounded shadow-md" />
                    <img src={image9} alt="Food 9" loading="lazy" className="w-full max-w-2xl h-auto object-cover rounded shadow-md" />
                    <img src={image10} alt="Food 10" loading="lazy" className="w-full max-w-2xl h-auto object-cover rounded shadow-md" />
                    <img src={image11} alt="Food 11" loading="lazy" className="w-full max-w-2xl h-auto object-cover rounded shadow-md" />
                    <img src={image12} alt="Food 12" loading="lazy" className="w-full max-w-2xl h-auto object-cover rounded shadow-md" />
                    <img src={image13} alt="Food 13" loading="lazy" className="w-full max-w-2xl h-auto object-cover rounded shadow-md" />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default FoodSection;
