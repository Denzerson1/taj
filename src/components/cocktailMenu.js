import { useState } from 'react';

const CocktailMenu = () => {
    // State to track active tab
    const [activeTab, setActiveTab] = useState('signature');

    // Sample data for classic cocktails
    const classicCocktails = [
        { name: "Cosmopolitan", ingredients: "Vodka, Cointreau & Cranberry" },
        { name: "Espresso Martini", ingredients: "Espresso Shot, Vodka & Kahlua" },
        { name: "Margarita", ingredients: "Silver Tequila, Cointreau & Lemon Juice" },
        { name: "Martini", ingredients: "Whiskey, Sweet Vermouth & Angostura Bitter" },
        { name: "Tommy Margarita", ingredients: "Tequila, Agave & Lime" },
    ];

    // Signature cocktails data
    const signatureCocktails = [
        { name: "Mughal E Negroni", ingredients: "Spiced Saffron Gin and Spice, Vermouth, Campari, Orange zest with a delicate saffron mist." },
        { name: "Highway 44", ingredients: "Cold Masala Chai, Bourbon, Lemon and Sugar, garnished with a star anise." },
        { name: "Spicy Tequila Margarita", ingredients: "Tequila, Chilli, Agave and Lime, served with a chili-salt rim." },
        { name: "Tequila Paan Refresher", ingredients: "Tequila, Betel Leaf, Apricot Liqueur, served with fresh Lime and Berries." },
    ];

    return (
        <div className="pt-12 pb-12">
            {/* Line separator above tabs with added margin */}
            <div className="flex justify-center mb-4">
                <div className="w-1/2 border-t border-gray-500" />
            </div>

            {/* Responsive Tabs with extra spacing above and below */}
            <div className="flex justify-center items-center mb-4 space-x-6">
                <button
                    className={`font-semibold text-lg sm:text-base ${activeTab === 'signature' ? 'text-[#FFC107]' : 'text-white'
                        }`}
                    onClick={() => setActiveTab('signature')}
                >
                    <span
                        className={`pb-1 ${activeTab === 'signature' ? 'border-b-2 sm:border-b' : ''}`}
                        style={{
                            borderBottomColor: activeTab === 'signature' ? '#FFC107' : 'transparent',
                        }}
                    >
                        Signature
                    </span>
                </button>
                <button
                    className={`font-semibold text-lg sm:text-base ${activeTab === 'classic' ? 'text-[#FFC107]' : 'text-white'
                        }`}
                    onClick={() => setActiveTab('classic')}
                >
                    <span
                        className={`pb-1 ${activeTab === 'classic' ? 'border-b-2 sm:border-b' : ''}`}
                        style={{
                            borderBottomColor: activeTab === 'classic' ? '#FFC107' : 'transparent',
                        }}
                    >
                        Classic
                    </span>
                </button>
            </div>

            {/* Line separator below tabs with added margin */}
            <div className="flex justify-center mb-6">
                <div className="w-1/2 border-t border-gray-500" />
            </div>

            {/* Cocktail List - No layout changes for desktop */}
<div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-8 xl:pl-96 xl:pr-96">
    {(activeTab === 'signature' ? signatureCocktails : classicCocktails).map((cocktail, index) => (
        <div
            className={`text-center ${cocktail.name === 'Tommy Margarita' ? 'sm:col-span-2 xl:col-span-2 xl:mx-auto' : ''}`}
            key={index}
        >
            <h3 className="pl-2 pr-2 text-lg font-semibold text-white">{cocktail.name}</h3>
            <p className="pl-2 pr-2 text-gray-400">{cocktail.ingredients}</p>
        </div>
    ))}
</div>


        </div>
    );
};

export default CocktailMenu;
