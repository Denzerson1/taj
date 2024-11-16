import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/Footer';
import { useLanguage } from '../../LanguageContext';

import img1 from '../../images/blogs/eggplant.jpg';

const translations = {
    EN: {
        title: "Eggplant Magic: Beyond the Basics",
        description: "How to make eggplant the star of your meal with creative and delicious recipes.",
        introHeading: "Introduction",
        introText: "Eggplants are versatile and full of potential. Whether baked, fried, or grilled, they can shine as the centerpiece of any dish. This guide will help you unlock the magic of this humble vegetable.",
        ingredientsHeading: "Ingredients & Preparation",
        ingredientsText: "To bring out the best in eggplants, you'll need:",
        ingredientsList: [
            "2 medium-sized eggplants",
            "3 tbsp olive oil",
            "1 tsp smoked paprika",
            "1 tsp garlic powder",
            "1/2 cup breadcrumbs",
            "1/4 cup grated Parmesan cheese (optional)",
            "Salt and pepper to taste",
            "Fresh herbs like parsley or basil for garnish"
        ],
        cookingHeading: "Cooking Instructions",
        steps: [
            "Prep the Eggplants: Slice the eggplants into rounds or lengthwise. Sprinkle with salt and let sit for 15 minutes to remove excess moisture. Pat dry with a paper towel.",
            "Season the Slices: Brush the eggplants with olive oil and sprinkle with smoked paprika, garlic powder, salt, and pepper.",
            "Coat and Bake: Dredge the eggplant slices in breadcrumbs mixed with Parmesan (if using). Arrange on a baking sheet and bake at 400°F (200°C) for 20-25 minutes, flipping halfway.",
            "Optional Toppings: Top with tomato sauce and mozzarella for a twist on Eggplant Parmesan.",
            "Garnish and Serve: Sprinkle fresh herbs over the baked eggplants and serve as a main dish or side."
        ]
    },
    DE: {
        title: "Auberginen-Magie: Über die Grundlagen hinaus",
        description: "Wie Sie Auberginen mit kreativen und köstlichen Rezepten zum Star Ihres Gerichts machen.",
        introHeading: "Einführung",
        introText: "Auberginen sind vielseitig und voller Potenzial. Ob gebacken, gebraten oder gegrillt, sie können der Mittelpunkt jedes Gerichts sein. Dieser Leitfaden hilft Ihnen, die Magie dieses bescheidenen Gemüses zu entdecken.",
        ingredientsHeading: "Zutaten & Vorbereitung",
        ingredientsText: "Um das Beste aus Auberginen herauszuholen, benötigen Sie:",
        ingredientsList: [
            "2 mittelgroße Auberginen",
            "3 EL Olivenöl",
            "1 TL geräuchertes Paprikapulver",
            "1 TL Knoblauchpulver",
            "1/2 Tasse Semmelbrösel",
            "1/4 Tasse geriebener Parmesan (optional)",
            "Salz und Pfeffer nach Geschmack",
            "Frische Kräuter wie Petersilie oder Basilikum zur Garnierung"
        ],
        cookingHeading: "Kochanleitung",
        steps: [
            "Auberginen vorbereiten: Die Auberginen in Scheiben oder längs schneiden. Mit Salz bestreuen und 15 Minuten ruhen lassen, um überschüssige Feuchtigkeit zu entfernen. Mit einem Küchentuch trocken tupfen.",
            "Scheiben würzen: Die Auberginen mit Olivenöl bestreichen und mit geräuchertem Paprikapulver, Knoblauchpulver, Salz und Pfeffer würzen.",
            "Panieren und backen: Die Auberginenscheiben in einer Mischung aus Semmelbröseln und Parmesan (falls verwendet) wälzen. Auf ein Backblech legen und bei 200°C (400°F) 20-25 Minuten backen, dabei nach der Hälfte der Zeit wenden.",
            "Optionale Toppings: Mit Tomatensoße und Mozzarella belegen für eine Variante von Auberginen-Parmesan.",
            "Garnieren und servieren: Frische Kräuter über die gebackenen Auberginen streuen und als Hauptgericht oder Beilage servieren."
        ]
    }
};

const EggplantMagicBlog = () => {
    const { language } = useLanguage();
    const { title, description, introHeading, introText, ingredientsHeading, ingredientsText, ingredientsList, cookingHeading, steps } = translations[language];

    return (
        <div>
            <Navbar />
            <div style={{ backgroundImage: 'linear-gradient(to bottom, #36160F, #492016)' }} className="font-mukta bg-[#b2b2b2] text-gray-100 min-h-screen">
                <section className="relative h-[60vh] flex items-center justify-center">
                    <img
                        src={img1}
                        alt="Eggplant Magic Banner"
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
            </div>
            <Footer />
        </div>
    );
};

export default EggplantMagicBlog;
