import React, { useRef } from 'react';
import { useLanguage } from '../LanguageContext';
import drink from '../images/cocktail.jpg';
import Navbar from '../components/navbar';
import DrinkBanner from '../components/drinkImage';
import Footer from '../components/Footer';
import CocktailMenu from '../components/cocktailMenu';

// Original Images
import mughal from '../images/drinks-images/negroni.jpg';
import highway44 from '../images/drinks-images/highway44.jpg';
import espressomartini from '../images/drinks-images/espresso-martini.jpg';
import paan from '../images/drinks-images/paan.jpg';
import spicemargarita from '../images/drinks-images/spicemagaritha.jpg';

// Desktop Images
import newEspressoMartini from '../images/new-images/espresso-martini - Kopie.jpg';
import newHighway44 from '../images/new-images/highway44 - Kopie.jpg';
import newNegroni from '../images/new-images/negroni - Kopie.jpg';
import newPaan from '../images/new-images/paan - Kopie.jpg';
import newSpicemargarita from '../images/new-images/spicemagaritha - Kopie.jpg';

const DrinkSection = () => {
    const galleryRef = useRef(null);
    const { language } = useLanguage();

    const sectionText = {
        EN: {
            header: 'SIGNATURE COCKTAILS & CRAFTED DRINKS',
            description:
                'From bold and refreshing concoctions to smooth, sophisticated classics, our drink menu is designed to enhance your experience. Whether you’re here for a quiet evening or a lively celebration, there’s something for every mood and moment.',
            closing:
                'Raise a glass and savor the spirit of good company, unique flavors, and unforgettable memories.',
            menu: 'Our Menu',
            buttonText: 'View Drink Menu',
        },
        DE: {
            header: 'Einzigartige Cocktails',
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

    const isDesktop = window.innerWidth >= 1024; // Check if the viewport is desktop size

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
                                {sectionText[language].description}
                            </p>
                            <p className="text-gray-200 mb-6 text-sm sm:text-base">
                                {sectionText[language].closing}
                            </p>

                            <button
                                onClick={() => window.open('/drinks.pdf', '_blank')}
                                className="px-6 py-3 border border-radiu border-[#FFC107] bg-[#FFC107] text-black font-semibold transition-all ease-in-out duration-300 hover:bg-[#FFC1071A] hover:text-gray-200"
                            >
                                {sectionText[language].buttonText}
                            </button>
                        </div>
                    </div>
                </div>

                <CocktailMenu />

                {/* First Row: Image Top, Text Bottom on Mobile */}
                <div ref={galleryRef} className="flex flex-col gap-8 my-10">
                    <div className="px-6 lg:px-32 xl:px-40">
                        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
                            <img
                                src={isDesktop ? newNegroni : mughal}
                                alt="Negroni"
                                loading="lazy"
                                className="w-full lg:w-1/2 h-[300px] object-cover rounded shadow-md"
                            />
                            <div className="w-full lg:w-1/2 text-gray-200 text-sm sm:text-base">
                                <h3 className="text-xl font-semibold mb-2 text-[#FFC107]">Mughal E Negroni</h3>
                                <p>
                                    Gin, spiced vermouth, and bitter aperitif. This Negroni variation is inspired by the grandeur of the Mughal era, blending classic bitter notes with aromatic Indian spices for a regal twist on a timeless cocktail.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="px-6 lg:px-32 xl:px-40">
                        <div className="flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-12">
                            <div className="w-full lg:w-1/2 text-gray-200 text-sm sm:text-base">
                                <h3 className="text-xl font-semibold mb-2 text-[#FFC107]">Espresso Martini</h3>
                                <p>
                                    Vodka, espresso, and coffee liqueur, topped with coffee beans. Bold, rich, and velvety, this cocktail is a coffee lover's dream—a perfect pick-me-up that combines smooth vodka with intense espresso flavors.
                                </p>
                            </div>
                            <img
                                src={isDesktop ? newEspressoMartini : espressomartini}
                                alt="Espresso Martini"
                                loading="lazy"
                                className="w-full lg:w-1/2 h-[300px] object-cover rounded shadow-md"
                            />
                        </div>
                    </div>
                    <div className="px-6 lg:px-32 xl:px-40">
                        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
                            <img
                                src={isDesktop ? newHighway44 : highway44}
                                alt="Highway 44"
                                loading="lazy"
                                className="w-full lg:w-1/2 h-[300px] object-cover rounded shadow-md"
                            />
                            <div className="w-full lg:w-1/2 text-gray-200 text-sm sm:text-base">
                                <h3 className="text-xl font-semibold mb-2 text-[#FFC107]">Highway 44</h3>
                                <p>
                                    A unique blend of cold masala chai, bourbon, lemon, and sugar, garnished with star anise. Inspired by India’s Highway 44, this cocktail combines the warmth of chai spices with the smoothness of bourbon for a refreshing twist.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="px-6 lg:px-32 xl:px-40">
                        <div className="flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-12">
                            <div className="w-full lg:w-1/2 text-gray-200 text-sm sm:text-base">
                                <h3 className="text-xl font-semibold mb-2 text-[#FFC107]">Spicy Tequila Margarita</h3>
                                <p>
                                    Tequila, chili, agave, and lime with a chili salt rim. This bold margarita brings the spice of Indian chilies and balances it with sweet agave, creating a refreshing, flavor-packed drink.
                                </p>
                            </div>
                            <img
                                src={isDesktop ? newSpicemargarita : spicemargarita}
                                alt="Spicy Margarita"
                                loading="lazy"
                                className="w-full lg:w-1/2 h-[300px] object-cover rounded shadow-md"
                            />
                        </div>
                    </div>
                    <div className="px-6 lg:px-32 xl:px-40">
                        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
                            <img
                                src={isDesktop ? newPaan : paan}
                                alt="Paan Refresher"
                                loading="lazy"
                                className="w-full lg:w-1/2 h-[300px] object-cover rounded shadow-md"
                            />
                            <div className="w-full lg:w-1/2 text-gray-200 text-sm sm:text-base">
                                <h3 className="text-xl font-semibold mb-2 text-[#FFC107]">Tequila Paan Refresher</h3>
                                <p>
                                    Tequila, betel leaf (paan), and lime juice. A refreshing cocktail inspired by the iconic Indian paan, blending tequila with the bold, aromatic flavors of betel leaf.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DrinkSection;
