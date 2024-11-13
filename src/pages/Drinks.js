import React, { useRef } from 'react'; // Import useRef
import { useLanguage } from '../LanguageContext'; // Import the language context
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
    const { language } = useLanguage(); // Get the current language

    // Define dynamic text based on the selected language
    const sectionText = {
        EN: {
            header: 'SIGNATURE COCKTAILS & CRAFTED DRINKS',
            intro:
                'Discover a world of flavors through our expertly crafted cocktails and drinks. Our bartenders bring creativity to each glass, balancing unique ingredients to create a taste experience that’s truly special.',
            description:
                'From bold and refreshing concoctions to smooth, sophisticated classics, our drink menu is designed to enhance your experience. Whether youre here for a quiet evening or a lively celebration, theres something for every mood and moment.',
            closing:
                'Raise a glass and savor the spirit of good company, unique flavors, and unforgettable memories.',
            menu: 'Our Menu',
            buttonText: 'View Drink Menu', // Button Text
        },
        DE: {
            header: 'Einzigartige Cocktails', // German translation
            intro:
                'Entdecken Sie eine Welt voller Aromen durch unsere meisterhaft zubereiteten Cocktails und Getränke. Unsere Barkeeper bringen Kreativität in jedes Glas und kombinieren einzigartige Zutaten, um ein wirklich besonderes Geschmackserlebnis zu schaffen.',
            description:
                'Von kräftigen und erfrischenden Kreationen bis hin zu glatten, raffinierten Klassikern – unsere Getränkekarte ist darauf ausgelegt, Ihr Erlebnis zu bereichern. Ob für einen ruhigen Abend oder eine lebhafte Feier, es ist für jede Stimmung und jeden Moment etwas dabei.',
            closing:
                'Stoßen Sie an und genießen Sie den Geist guter Gesellschaft, einzigartiger Aromen und unvergesslicher Erinnerungen.',
            menu: 'Unser Menü',
            buttonText: 'Getränkekarte ansehen', // Button Text in German
        },
    };

    const scrollToGallery = () => {
        if (galleryRef.current) {
            galleryRef.current.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the gallery
        }
    };

    return (
        <div>
            <div
                style={{
                    backgroundImage: 'linear-gradient(to bottom, #4D2816, #0B0706)', // Darker brown to black gradient
                }} className=" font-mukta mt-20 min-h-screen flex flex-col"> {/* Changed background color to match FoodSection */}
                <Navbar />
                {/* Pass scroll function as prop to DrinkBanner */}
                <DrinkBanner onScrollToGallery={scrollToGallery} />
                <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center lg:justify-start"> {/* Updated background color */}
                    {/* Left - Drink Image */}
                    <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-[500px]">
                        <img
                            src={drink}
                            loading="lazy"
                            alt="Refreshing drinks"
                            className="w-full h-full object-cover shadow-lg"
                        />
                    </div>

                    {/* Right - Text Content */}
                    <div className="w-full lg:w-1/2 h-auto lg:h-[500px] flex items-center"> {/* Keeping the background gray */}
                        <div className="p-6 sm:p-8">
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-white">
                                {sectionText[language].header}
                            </h2>
                            <p className="mb-4 text-gray-200 text-sm sm:text-base">
                                {sectionText[language].intro}
                            </p>
                            <p className="mb-4 text-gray-200 text-sm sm:text-base">
                                {sectionText[language].description}
                            </p>
                            <p className="text-gray-200 mb-6 text-sm sm:text-base">
                                {sectionText[language].closing}
                            </p>

                            {/* Button - View Menu */}
                            <button
                                onClick={() => window.open('/food.pdf', '_blank')} // Open a blank page (can change the path if needed)
                                className="px-6 py-3 border border-radiu border-[#FFC107] bg-[#FFC107] text-black font-semibold transition-all ease-in-out duration-300 hover:bg-[#FFC1071A] hover:text-gray-200"
                            >
                                {sectionText[language].buttonText}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Image Gallery - Vertical Scrollable Layout */}
                <div ref={galleryRef} className="flex flex-col items-center gap-4 p-6"> {/* Keeping the background gray */}
                    <h1 className="text-3xl font-semibold text-white m-4">{sectionText[language].menu}</h1>
                    <img src={image2} alt="Cocktail 2" loading="lazy" className="w-full max-w-2xl h-auto object-cover rounded shadow-md" />
                    <img src={image3} alt="Cocktail 3" loading="lazy" className="w-full max-w-2xl h-auto object-cover rounded shadow-md" />
                    <img src={image4} alt="Cocktail 4" loading="lazy" className="w-full max-w-2xl h-auto object-cover rounded shadow-md" />
                    <img src={image5} alt="Cocktail 5" loading="lazy" className="w-full max-w-2xl h-auto object-cover rounded shadow-md" />
                    <img src={image1} alt="Cocktail 1" loading="lazy" className="w-full max-w-2xl h-auto object-cover rounded shadow-md" />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DrinkSection;
