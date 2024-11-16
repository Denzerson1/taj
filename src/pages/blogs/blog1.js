import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/Footer';
import { useLanguage } from '../../LanguageContext';

import img1 from '../../images/Ready to eat_The Taj_ChickenKorma (1).jpg';
import img2 from '../../images/Ingredients_The Taj_Chana Masala (1).jpg';
import img3 from '../../images/Ready to eat_The Taj_Chicken Kabli 02 (1).jpg';
import Carousel from '../../components/carousel';

// Translations for the component
const translations = {
    EN: {
        title: "Classic Chicken Tikka Masala",
        description: "Indulge in the aromatic blend of tender chicken and bold spices simmered in a creamy, tomato-rich sauce. Perfect for weeknights or special occasions, this recipe will take your taste buds on a flavorful journey.",
        introHeading: "Introduction",
        introText: "Chicken Tikka Masala is a beloved classic that combines marinated, grilled chicken with a rich, spiced sauce. With its origins deeply rooted in India and a journey through British cuisine, it’s become an iconic fusion of cultures. Each bite captures the depth of Indian spices balanced by creamy tomato sauce, creating a dish loved around the globe.",
        ingredientsHeading: "Ingredients & Cooking Tips",
        ingredientsText: "Every ingredient in Chicken Tikka Masala serves a purpose. Here are the essentials you’ll need:",
        ingredientsList: [
            "1 lb chicken breast, diced into bite-sized pieces",
            "1 cup plain yogurt, for marinating",
            "2 tbsp lemon juice for tenderizing",
            "1 tbsp ginger-garlic paste for flavor depth",
            "1 tsp turmeric powder",
            "1 tsp cumin powder",
            "1 tbsp garam masala for a warming spice blend",
            "1/2 cup heavy cream for creaminess",
            "2 cups tomato puree for the base of the sauce",
            "Salt, to taste"
        ],
        cookingHeading: "Cooking Instructions",
        steps: [
            "Marinate the Chicken: In a bowl, combine the yogurt, lemon juice, ginger-garlic paste, turmeric, cumin, and a pinch of salt. Add the chicken, coat well, and marinate for at least 30 minutes (or overnight for extra flavor).",
            "Grill the Chicken: Heat a grill pan over medium heat and cook the marinated chicken pieces for about 5-6 minutes, turning to get a nice char. Set aside. This step builds a smoky flavor that’s essential for the dish.",
            "Prepare the Sauce: In a large skillet, heat a tablespoon of oil. Sauté ginger and garlic until aromatic, then add tomato puree, salt, and garam masala. Let it simmer, allowing the sauce to thicken and spices to bloom.",
            "Add Cream and Chicken: Stir in the heavy cream to create a velvety texture. Add the grilled chicken, coating it in the sauce. Let simmer for an additional 10 minutes, allowing the flavors to meld together.",
            "Garnish and Serve: Top with fresh cilantro. Serve hot with fluffy naan or basmati rice for a complete meal."
        ]
    },
    DE: {
        title: "Klassisches Chicken Tikka Masala",
        description: "Genießen Sie die aromatische Mischung aus zartem Hühnchen und kräftigen Gewürzen, die in einer cremigen, tomatenreichen Sauce köcheln. Perfekt für Wochentage oder besondere Anlässe, wird dieses Rezept Ihre Geschmacksknospen auf eine aromatische Reise mitnehmen.",
        introHeading: "Einführung",
        introText: "Chicken Tikka Masala ist ein beliebter Klassiker, der mariniertes, gegrilltes Hühnchen mit einer reichhaltigen, gewürzten Sauce kombiniert. Mit seinen tief in Indien verwurzelten Ursprüngen und einer Reise durch die britische Küche ist es zu einer ikonischen Fusion der Kulturen geworden. Jeder Bissen fängt die Tiefe der indischen Gewürze ein, die durch die cremige Tomatensauce ausgewogen sind und ein weltweit beliebtes Gericht schaffen.",
        ingredientsHeading: "Zutaten & Kochtipps",
        ingredientsText: "Jede Zutat im Chicken Tikka Masala erfüllt einen bestimmten Zweck. Hier sind die wichtigsten Zutaten:",
        ingredientsList: [
            "450 g Hühnerbrust, gewürfelt",
            "1 Tasse Naturjoghurt, zum Marinieren",
            "2 EL Zitronensaft für die Zartheit",
            "1 EL Ingwer-Knoblauch-Paste für Geschmackstiefe",
            "1 TL Kurkumapulver",
            "1 TL Kreuzkümmelpulver",
            "1 EL Garam Masala für eine warme Gewürzmischung",
            "120 ml Sahne für Cremigkeit",
            "500 ml Tomatenpüree als Basis für die Sauce",
            "Salz nach Geschmack"
        ],
        cookingHeading: "Kochanleitung",
        steps: [
            "Hähnchen marinieren: In einer Schüssel Joghurt, Zitronensaft, Ingwer-Knoblauch-Paste, Kurkuma, Kreuzkümmel und eine Prise Salz vermengen. Hähnchen hinzufügen, gut bedecken und mindestens 30 Minuten marinieren (oder über Nacht für zusätzlichen Geschmack).",
            "Hähnchen grillen: Eine Grillpfanne auf mittlerer Hitze erhitzen und die marinierten Hähnchenstücke etwa 5-6 Minuten grillen, dabei wenden, um eine schöne Bräunung zu erreichen. Beiseite stellen. Dieser Schritt baut einen rauchigen Geschmack auf, der für das Gericht wesentlich ist.",
            "Sauce zubereiten: In einer großen Pfanne einen Esslöffel Öl erhitzen. Ingwer und Knoblauch anbraten, dann Tomatenpüree, Salz und Garam Masala hinzufügen. Köcheln lassen, bis die Sauce eindickt und die Gewürze ihren Geschmack entfalten.",
            "Sahne und Hähnchen hinzufügen: Die Sahne einrühren, um eine samtige Textur zu erhalten. Das gegrillte Hähnchen hinzufügen und in der Sauce wenden. Weitere 10 Minuten köcheln lassen, damit sich die Aromen verbinden.",
            "Garnieren und Servieren: Mit frischem Koriander garnieren. Heiß mit fluffigem Naan oder Basmati-Reis servieren."
        ]
    }
};

const IndianDishBlog = () => {
    const { language } = useLanguage();
    const { title, description, introHeading, introText, ingredientsHeading, ingredientsText, ingredientsList, cookingHeading, steps } = translations[language];

    return (
        <div>
            <Navbar />
            <div style={{ backgroundImage: 'linear-gradient(to bottom, #241007, #27140D' }}className="font-mukta bg-[#b2b2b2]  text-gray-100 min-h-screen">
                {/* Banner Section */}
                <section className="relative h-[60vh] flex items-center justify-center">
                    <img
                        src={img1}
                        alt="Banner background"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-20"></div>
                    <div className="relative text-center px-4 sm:px-8 lg:px-20 py-16 z-10">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-300 mb-4 mt-6">
                            {title}
                        </h1>
                        <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 max-w-3xl mx-auto">
                            {description}
                        </p>
                    </div>
                </section>

                <div className="text-black px-4 sm:px-8 lg:px-20 py-16">
                    {/* Introduction Section */}
                    <section className="flex items-center justify-center gap-6 sm:gap-10 lg:gap-12 mb-10 lg:mb-16">
                        <div className="lg:w-7/12 px-4 sm:px-0 text-center">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-yellow-300 mb-4">{introHeading}</h2>
                            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-200">
                                {introText}
                            </p>
                        </div>
                    </section>


                    {/* Ingredients Section */}
                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        <div className="flex flex-col gap-4 px-4 sm:px-0">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-yellow-300">{ingredientsHeading}</h2>
                            <p className="text-base sm:text-lg leading-relaxed text-gray-200 mb-4">
                                {ingredientsText}
                            </p>
                            <ul className="list-disc ml-6 text-base sm:text-lg text-gray-200">
                                {ingredientsList.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                            </ul>
                        </div>
                        <img
                            src={img2}
                            alt="Spices"
                            className="w-full sm:w-8/12 lg:w-7/12 rounded-lg shadow-lg mx-auto"
                        />
                    </section>

                    {/* Instructions Section */}
                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="flex flex-col gap-6 px-4 sm:px-0">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-yellow-300">{cookingHeading}</h2>
                            <ol className="list-decimal ml-6 text-base sm:text-lg text-gray-200 leading-relaxed">
                                {steps.map((step, index) => (
                                    <li key={index} className="mb-2">{step}</li>
                                ))}
                            </ol>
                        </div>
                        <img
                            src={img3}
                            alt="Chicken Tikka Masala"
                            className="w-full sm:w-8/12 lg:w-7/12 rounded-lg shadow-lg mx-auto"
                        />
                    </section>
                </div>
                <Carousel />
            </div>

            <Footer />

        </div>
    );
};

export default IndianDishBlog;
