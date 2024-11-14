import React, { useRef } from 'react';
import { useLanguage } from '../LanguageContext';
import drink from '../images/cocktail.jpg';
import Navbar from '../components/navbar';
import DrinkBanner from '../components/drinkImage';
import Footer from '../components/Footer';

const DrinkSection = () => {
    const galleryRef = useRef(null);
    const { language } = useLanguage();

    const sectionText = {
        EN: {
            header: 'SIGNATURE COCKTAILS & CRAFTED DRINKS',
            intro:
                'Discover a world of flavors through our expertly crafted cocktails and drinks. Our bartenders bring creativity to each glass, balancing unique ingredients to create a taste experience that’s truly special.',
            description:
                'From bold and refreshing concoctions to smooth, sophisticated classics, our drink menu is designed to enhance your experience. Whether you’re here for a quiet evening or a lively celebration, there’s something for every mood and moment.',
            closing:
                'Raise a glass and savor the spirit of good company, unique flavors, and unforgettable memories.',
            menu: 'Our Menu',
            buttonText: 'View Drink Menu',
        },
        DE: {
            header: 'Einzigartige Cocktails',
            intro:
                'Entdecken Sie eine Welt voller Aromen durch unsere meisterhaft zubereiteten Cocktails und Getränke. Unsere Barkeeper bringen Kreativität in jedes Glas und kombinieren einzigartige Zutaten, um ein wirklich besonderes Geschmackserlebnis zu schaffen.',
            description:
                'Von kräftigen und erfrischenden Kreationen bis hin zu glatten, raffinierten Klassikern – unsere Getränkekarte ist darauf ausgelegt, Ihr Erlebnis zu bereichern. Ob für einen ruhigen Abend oder eine lebhafte Feier, es ist für jede Stimmung und jeden Moment etwas dabei.',
            closing:
                'Stoßen Sie an und genießen Sie den Geist guter Gesellschaft, einzigartiger Aromen und unvergesslicher Erinnerungen.',
            menu: 'Unser Menü',
            buttonText: 'Getränkekarte ansehen',
        },
    };

    const scrollToGallery = () => {
        if (galleryRef.current) {
            galleryRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <div
                style={{
                    backgroundImage: 'linear-gradient(to bottom,#1E0D0D, #0B0706)',
                }}
                className="font-mukta mt-20 min-h-screen flex flex-col"
            >
                <Navbar />
                <DrinkBanner onScrollToGallery={scrollToGallery} />

                <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center lg:justify-start">
                    <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-[400px]">
                        <img
                            src={drink}
                            loading="lazy"
                            alt="Refreshing drinks"
                            className="w-full h-full object-cover shadow-lg"
                        />
                    </div>

                    <div className="w-full lg:w-1/2 h-auto lg:h-[400px] flex items-center">
                        <div className="p-6 sm:p-8">
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-lightgold">
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

                            <button
                                onClick={() => window.open('/food.pdf', '_blank')}
                                className="px-6 py-3 border border-radiu border-[#FFC107] bg-[#FFC107] text-black font-semibold transition-all ease-in-out duration-300 hover:bg-[#FFC1071A] hover:text-gray-200"
                            >
                                {sectionText[language].buttonText}
                            </button>
                        </div>
                    </div>
                </div>

                {/* New Layout - Image with Description, Alternating Positions */}
                <div ref={galleryRef} className="flex flex-col gap-8 my-10">
                    {/* First Row: Image Left, Text Right */}
                    <div className="px-6 lg:px-32 xl:px-40">
                        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
                            <img
                                src={drink}
                                alt="Cocktail"
                                loading="lazy"
                                className="w-full lg:w-1/2 h-[300px] object-cover rounded shadow-md"
                            />
                            <div className="w-full lg:w-1/2 text-gray-200 text-sm sm:text-base">
                                <h3 className="text-xl font-semibold mb-2 text-[#FFC107]">Refreshing Cocktail</h3>
                                <p>
                                    This cocktail features a blend of bold flavors, with notes of citrus and herbs for a refreshing finish.
                                    It’s perfect for any occasion, whether you’re celebrating or just winding down.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Second Row: Image Right, Text Left */}
                    <div className="px-6 lg:px-32 xl:px-40">
                        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
                            <div className="w-full lg:w-1/2 text-gray-200 text-sm sm:text-base">
                                <h3 className="text-xl font-semibold mb-2 text-[#FFC107]">Classic Old Fashioned</h3>
                                <p>
                                    A timeless classic, the Old Fashioned is crafted with care to bring out the deep flavors of aged whiskey, combined with subtle hints of orange and bitters.
                                </p>
                            </div>
                            <img
                                src={drink}
                                alt="Old Fashioned"
                                loading="lazy"
                                className="w-full lg:w-1/2 h-[300px] object-cover rounded shadow-md"
                            />
                        </div>
                    </div>


                    {/* First Row: Image Left, Text Right */}
                    <div className="px-6 lg:px-32 xl:px-40">
                        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
                            <img
                                src={drink}
                                alt="Cocktail"
                                loading="lazy"
                                className="w-full lg:w-1/2 h-[300px] object-cover rounded shadow-md"
                            />
                            <div className="w-full lg:w-1/2 text-gray-200 text-sm sm:text-base">
                                <h3 className="text-xl font-semibold mb-2 text-[#FFC107]">Refreshing Cocktail</h3>
                                <p>
                                    This cocktail features a blend of bold flavors, with notes of citrus and herbs for a refreshing finish.
                                    It’s perfect for any occasion, whether you’re celebrating or just winding down.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Second Row: Image Right, Text Left */}
                    <div className="px-6 lg:px-32 xl:px-40">
                        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
                            <div className="w-full lg:w-1/2 text-gray-200 text-sm sm:text-base">
                                <h3 className="text-xl font-semibold mb-2 text-[#FFC107]">Classic Old Fashioned</h3>
                                <p>
                                    A timeless classic, the Old Fashioned is crafted with care to bring out the deep flavors of aged whiskey, combined with subtle hints of orange and bitters.
                                </p>
                            </div>
                            <img
                                src={drink}
                                alt="Old Fashioned"
                                loading="lazy"
                                className="w-full lg:w-1/2 h-[300px] object-cover rounded shadow-md"
                            />
                        </div>
                    </div>
                </div>

                {/* Signature Cocktails List */}
                <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-6 text-center text-[#FFC107]">Signature Cocktails</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="text-center">
                            <h3 className="text-lg font-semibold text-white">ANARKALI</h3>
                            <p className="text-gray-400">Gin, Campari, sweet vermouth, Darjeeling tea, and cardamom.</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-lg font-semibold text-white">SHOLAY</h3>
                            <p className="text-gray-400">Curry leaf-infused rum, Malibu, pineapple, and vanilla liqueur.</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-lg font-semibold text-white">HERA PHERI</h3>
                            <p className="text-gray-400">Mezcal, orange liqueur, spicy guava chutney, and pink salt.</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-lg font-semibold text-white">MERA NAAM JOKER</h3>
                            <p className="text-gray-400">Ghee-washed bourbon, Angostura bitters, and saffron syrup.</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-lg font-semibold text-white">DILWALE DULHANIA LE JAYENGE</h3>
                            <p className="text-gray-400">Tequila, tamarind, aged balsamic, blackberry syrup, and soda.</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-lg font-semibold text-white">LAGAAN</h3>
                            <p className="text-gray-400">Gin, honeydew melon, kale, Midori, and egg white.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DrinkSection;
