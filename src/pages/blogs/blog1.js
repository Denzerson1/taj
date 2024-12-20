import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/Footer';
import { useLanguage } from '../../LanguageContext';

import img1 from '../../images/Ready to eat_The Taj_ChickenKorma (1).jpg';
import img2 from '../../images/Ingredients_The Taj_Chana Masala (1).jpg';
import img3 from '../../images/Ready to eat_The Taj_Chicken Kabli 02 (1).jpg';
import Carousel from '../../components/carousel';

const translations = {
    EN: {
        title: "Savor the Spices: A Journey through Indian Curries",
        description: "Explore the magical world of spices that make Indian curries a global favorite. From aromatic blends to bold flavors, this dish promises an unforgettable experience.",
        introHeading: "Introduction",
        introText: "Indian curries are famous for their intricate spice blends, which create a symphony of flavors. Each region offers a unique twist, from creamy butter chicken in the north to tangy fish curry in the south.",
        ingredientsHeading: "Ingredients & Cooking Tips",
        ingredientsText: "Here are the key ingredients you’ll need for an authentic Indian curry:",
        ingredientsList: [
            "2 tbsp cooking oil",
            "1 large onion, finely chopped",
            "3 cloves of garlic, minced",
            "1 tbsp ginger paste",
            "2 medium tomatoes, pureed",
            "1 tsp turmeric powder",
            "1 tsp red chili powder",
            "1 tbsp garam masala",
            "1 lb chicken or vegetables",
            "1 cup coconut milk or cream",
            "Salt to taste"
        ],
        cookingHeading: "Cooking Instructions",
        steps: [
            "Heat oil in a pan and sauté onions until golden brown.",
            "Add garlic and ginger paste, cooking until aromatic.",
            "Stir in the tomato puree, turmeric, and chili powder, letting it cook until the oil separates.",
            "Add your choice of chicken or vegetables, cooking until well-coated with spices.",
            "Pour in coconut milk or cream, simmering until the curry thickens.",
            "Sprinkle garam masala, garnish with fresh cilantro, and serve with naan or rice."
        ]
    },
    DE: {
        title: "Genieße die Gewürze: Eine Reise durch indische Currys",
        description: "Tauchen Sie ein in die magische Welt der Gewürze, die indische Currys weltweit beliebt machen. Von aromatischen Mischungen bis zu kräftigen Aromen verspricht dieses Gericht ein unvergessliches Erlebnis.",
        introHeading: "Einführung",
        introText: "Indische Currys sind berühmt für ihre komplexen Gewürzmischungen, die eine Geschmackssymphonie schaffen. Jede Region bietet eine einzigartige Variante, von cremigem Butterhühnchen im Norden bis zu säuerlichem Fischcurry im Süden.",
        ingredientsHeading: "Zutaten & Kochtipps",
        ingredientsText: "Hier sind die wichtigsten Zutaten für ein authentisches indisches Curry:",
        ingredientsList: [
            "2 EL Speiseöl",
            "1 große Zwiebel, fein gehackt",
            "3 Knoblauchzehen, gehackt",
            "1 EL Ingwerpaste",
            "2 mittelgroße Tomaten, püriert",
            "1 TL Kurkumapulver",
            "1 TL Chilipulver",
            "1 EL Garam Masala",
            "450 g Huhn oder Gemüse",
            "1 Tasse Kokosmilch oder Sahne",
            "Salz nach Geschmack"
        ],
        cookingHeading: "Kochanleitung",
        steps: [
            "Öl in einer Pfanne erhitzen und die Zwiebeln goldbraun anbraten.",
            "Knoblauch und Ingwerpaste hinzufügen und anbraten, bis es duftet.",
            "Tomatenpüree, Kurkuma und Chilipulver einrühren und kochen, bis sich das Öl absetzt.",
            "Huhn oder Gemüse hinzufügen und gut mit den Gewürzen vermengen.",
            "Kokosmilch oder Sahne eingießen und köcheln lassen, bis das Curry eindickt.",
            "Mit Garam Masala bestreuen, mit frischem Koriander garnieren und mit Naan oder Reis servieren."
        ]
    }
};

const IndianCurryBlog = () => {
    const { language } = useLanguage();
    const { title, description, introHeading, introText, ingredientsHeading, ingredientsText, ingredientsList, cookingHeading, steps } = translations[language];

    return (
        <div>
            <Navbar />
            <div style={{ backgroundImage: 'linear-gradient(to bottom, #241007, #27140D' }}className="font-mukta bg-[#b2b2b2] text-gray-100 min-h-screen">
                <section className="relative h-[60vh] flex items-center justify-center">
                    <img
                        src={img1}
                        alt="Indian Curry Banner"
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
                    <section className="flex items-center justify-center gap-6 sm:gap-10 lg:gap-12 mb-10 lg:mb-16">
                        <div className="lg:w-7/12 px-4 sm:px-0 text-center">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-yellow-300 mb-4">{introHeading}</h2>
                            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-200">
                                {introText}
                            </p>
                        </div>
                    </section>

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
                            alt="Curry Ingredients"
                            className="w-full sm:w-8/12 lg:w-7/12 rounded-lg shadow-lg mx-auto"
                        />
                    </section>

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
                            alt="Finished Curry"
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

export default IndianCurryBlog;

