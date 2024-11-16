import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/Footer';
import { useLanguage } from '../../LanguageContext';

import img1 from '../../images/blogs/dumplings1.jpg';
import img2 from '../../images/blogs/dumplings2.jpg';
import Carousel from '../../components/carousel';

const translations = {
    EN: {
        title: "Dumpling Paradise: Around the World in a Bite",
        description: "Travel the world with dumplings! From the delicate folds of Chinese dumplings to the hearty pierogies of Poland, each bite tells a story of culture and flavor.",
        introHeading: "Introduction",
        introText: "Dumplings are the ultimate comfort food, cherished across continents. Whether steamed, fried, or boiled, they bring together unique flavors and traditions, uniting people through food.",
        ingredientsHeading: "Ingredients & Cooking Tips",
        ingredientsText: "While every culture has its unique dumpling recipes, here’s a basic guideline for creating delicious dumplings at home:",
        ingredientsList: [
            "2 cups all-purpose flour (for dough)",
            "3/4 cup warm water",
            "1/2 lb ground pork or chicken (for filling)",
            "1 cup finely chopped cabbage",
            "1 tbsp soy sauce",
            "1 tsp sesame oil",
            "1 tsp minced ginger",
            "Salt and pepper to taste"
        ],
        cookingHeading: "Cooking Instructions",
        steps: [
            "Prepare the Dough: Mix flour and warm water to form a soft dough. Knead until smooth and set aside for 30 minutes.",
            "Make the Filling: Combine ground meat, cabbage, soy sauce, sesame oil, ginger, salt, and pepper in a bowl. Mix thoroughly.",
            "Assemble the Dumplings: Roll out the dough and cut into small circles. Place a spoonful of filling in the center, fold, and seal the edges.",
            "Cook the Dumplings: Steam, boil, or pan-fry the dumplings until cooked through and golden brown.",
            "Serve: Pair with soy dipping sauce and enjoy!"
        ]
    },
    DE: {
        title: "Knödelparadies: Eine kulinarische Weltreise",
        description: "Reisen Sie mit Knödeln um die Welt! Von den zarten Falten chinesischer Jiaozi bis zu den herzhaften Pierogi Polens erzählt jeder Bissen eine Geschichte von Kultur und Geschmack.",
        introHeading: "Einführung",
        introText: "Knödel sind das ultimative Wohlfühlessen und werden auf der ganzen Welt geschätzt. Ob gedämpft, gebraten oder gekocht – sie vereinen einzigartige Aromen und Traditionen und bringen Menschen durch Essen zusammen.",
        ingredientsHeading: "Zutaten & Kochtipps",
        ingredientsText: "Jede Kultur hat ihre eigenen Knödelrezepte. Hier ist eine grundlegende Anleitung für köstliche Knödel zu Hause:",
        ingredientsList: [
            "2 Tassen Allzweckmehl (für den Teig)",
            "3/4 Tasse warmes Wasser",
            "250 g Hackfleisch (z. B. Schwein oder Hähnchen, für die Füllung)",
            "1 Tasse fein gehackter Kohl",
            "1 EL Sojasauce",
            "1 TL Sesamöl",
            "1 TL gehackter Ingwer",
            "Salz und Pfeffer nach Geschmack"
        ],
        cookingHeading: "Kochanleitung",
        steps: [
            "Den Teig vorbereiten: Mehl und warmes Wasser mischen, um einen weichen Teig zu formen. Kneten, bis er glatt ist, und 30 Minuten ruhen lassen.",
            "Die Füllung zubereiten: Hackfleisch, Kohl, Sojasauce, Sesamöl, Ingwer, Salz und Pfeffer in einer Schüssel mischen. Gut vermengen.",
            "Die Knödel formen: Den Teig ausrollen und in kleine Kreise schneiden. Einen Löffel Füllung in die Mitte geben, falten und die Ränder verschließen.",
            "Die Knödel garen: Knödel dämpfen, kochen oder anbraten, bis sie durchgegart und goldbraun sind.",
            "Servieren: Mit einer Sojasauce-Dip servieren und genießen!"
        ]
    }
};

const DumplingBlog = () => {
    const { language } = useLanguage();
    const { title, description, introHeading, introText, ingredientsHeading, ingredientsText, ingredientsList, cookingHeading, steps } = translations[language];

    return (
        <div>
            <Navbar />
            <div style={{ backgroundImage: 'linear-gradient(to bottom, #241007, #27140D' }}className="font-mukta bg-[#b2b2b2] text-gray-100 min-h-screen">
                <section className="relative h-[60vh] flex items-center justify-center">
                    <img
                        src={img1}
                        alt="Dumpling Banner"
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
                            alt="Dumpling Ingredients"
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
                        
                    </section>
                </div>
                <Carousel />
            </div>
            <Footer />
        </div>
    );
};

export default DumplingBlog;
