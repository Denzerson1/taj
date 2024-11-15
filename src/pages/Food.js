import React, { useState, useRef } from 'react'; // Import useState for toggling
import foodImage from '../images/food.jpg'; // Update the image path if necessary
import Navbar from '../components/navbar';
import FoodBanner from '../components/foodImage'; // Import the FoodBanner component
import chowNowLogo from '../images/takeout/1.png';
import grubhubLogo from '../images/takeout/2.png';
import caviarLogo from '../images/takeout/3.png';
import Footer from '../components/Footer';
import { useLanguage } from '../LanguageContext'; // Import the language context

const FoodSection = () => {
    const galleryRef = useRef(null); // Create a ref for the gallery
    const { language } = useLanguage(); // Access current language from context
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu

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
            buttonText: "View Menu",
            takeoutButton: "Order Online"
        },
        de: {
            title: "Indische Küche",
            description: "Erleben Sie die Vielfalt der indischen Traditionen durch unsere exquisiten Gerichte. Jede Mahlzeit wird mit den frischesten Zutaten zubereitet, die voller Aromen und Traditionen stecken.",
            menuTitle: "Unser Menü",
            descriptionTwo: "Vom herzhaften Street Food bis zu aufwendigen Currys bietet unsere Speisekarte einen Geschmack der vielfältigen kulinarischen Landschaft Indiens – perfekt für jede Gelegenheit.",
            descriptionThree: "Kommen Sie zu uns und genießen Sie das wahre Indien auf Ihrem Teller.",
            buttonText: "Speisekarte ansehen",
            takeoutButton: "Online bestellen"
        }
    };

    // Use the current language to fetch the relevant content
    const currentContent = language === 'DE' ? content.de : content.en;

    return (
        <div>
            <div
                style={{
                    backgroundImage: 'linear-gradient(to bottom, #4D2816, #0B0706)', // Darker brown to black gradient
                }}
                className="font-mukta mt-20 min-h-screen flex flex-col"
            >
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
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-white">
                                {currentContent.title}
                            </h2>
                            <p className="mb-4 text-gray-200 text-sm sm:text-base">
                                {currentContent.description}
                            </p>
                            <p className="mb-4 text-gray-200 text-sm sm:text-base">
                                {currentContent.descriptionTwo}
                            </p>
                            <p className="text-gray-200 mb-6 text-sm sm:text-base">
                                {currentContent.descriptionThree}
                            </p>


                        </div>
                    </div>


                </div>


                <div className="flex flex-col items-center gap-4 pt-10">
                    {/* Food Menu Button */}
                    <button
                        onClick={() => window.open('/FoodMenu.pdf', '_blank')} // Open Food Menu
                        className="w-[250px] px-6 py-3 border border-[#FFC107] bg-[#FFC107] text-black font-semibold transition-all ease-in-out duration-300 hover:bg-[#FFC1071A] hover:text-gray-200"
                    >
                        Food Menu
                    </button>

                    

                    {/* Vegan Menu Button */}
                    <button
                        onClick={() => window.open('/VeganMenu.pdf', '_blank')} // Open Vegan Menu
                        className="w-[250px] px-6 py-3 border border-[#FFC107] bg-[#FFC107] text-black font-semibold transition-all ease-in-out duration-300 hover:bg-[#FFC1071A] hover:text-gray-200"
                    >
                        Vegan Menu
                    </button>

                    {/* Vegetarian Menu Button */}
                    <button
                        onClick={() => window.open('/VegetarianMenu.pdf', '_blank')} // Open Vegetarian Menu
                        className="w-[250px] px-6 py-3 border border-[#FFC107] bg-[#FFC107] text-black font-semibold transition-all ease-in-out duration-300 hover:bg-[#FFC1071A] hover:text-gray-200"
                    >
                        Vegetarian Menu
                    </button>
                </div>

                {/* Takeout Button */}
                <div className="flex justify-center pt-4">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle the menu
                        className="w-[250px] px-6 py-3 border border-[#FFC107] bg-[#FFC107] text-black font-semibold transition-all ease-in-out duration-300 hover:bg-[#FFC1071A] hover:text-gray-200"
                    >
                        {currentContent.takeoutButton}
                    </button>
                </div>
                {/* Dynamic Takeout Menu */}
                <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="flex justify-center gap-4 mt-4">
                        <button
                            onClick={() => window.location.href = 'https://wolt.com/de-at/aut/vienna/restaurant/taj-indian-restaurant-bar'}
                            className="flex flex-col items-center"
                        >
                            <img src={chowNowLogo} alt="Wolt" className="h-16 mb-2" />
                            <span className="text-sm text-gray-200">Wolt</span>
                        </button>
                        <button
                            onClick={() => window.location.href = 'https://www.lieferando.at/speisekarte/the-taj-restaurant-bar'}
                            className="flex flex-col items-center"
                        >
                            <img src={grubhubLogo} alt="Grubhub" className="h-16 mb-2" />
                            <span className="text-sm text-gray-200">Lieferando</span>
                        </button>
                        <button
                            onClick={() => window.location.href = 'https://www.foodora.at/restaurant/zwlp/taj'}
                            className="flex flex-col items-center"
                        >
                            <img src={caviarLogo} alt="Foodora" className="h-16 mb-2" />
                            <span className="text-sm text-gray-200">Foodora</span>
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default FoodSection;
