import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/Footer';
import { useLanguage } from '../../LanguageContext';

import img1 from '../../images/blogs/linsen1.jpg';
import img2 from '../../images/kichererbsen.jpg';
import img3 from '../../images/fulltable.jpg';

const translations = {
    EN: {
        title: "Deliciously Meat-Free: Best Vegetarian Comfort Food",
        description: "Satisfying and hearty vegetarian dishes that prove you don’t need meat for a flavorful meal.",
        introHeading: "Introduction",
        introText: "Comfort food doesn't have to rely on meat. With the right ingredients and techniques, vegetarian meals can be just as indulgent and satisfying. From creamy curries to hearty casseroles, there’s no limit to the possibilities.",
        ingredientsHeading: "Ingredients & Cooking Tips",
        ingredientsText: "Create hearty vegetarian dishes with these core ingredients:",
        ingredientsList: [
            "1 cup lentils or chickpeas",
            "2 tbsp olive oil or butter",
            "1 onion, diced",
            "2 cloves garlic, minced",
            "1 cup fresh spinach or kale",
            "1 cup coconut milk or cream",
            "1 tsp turmeric",
            "1 tsp cumin",
            "Salt and pepper to taste"
        ],
        cookingHeading: "Cooking Instructions",
        steps: [
            "Prepare the Lentils: Cook lentils or chickpeas in boiling water until tender. Drain and set aside.",
            "Sauté the Base: Heat olive oil or butter in a pan. Sauté onion and garlic until fragrant.",
            "Add the Spices: Stir in turmeric and cumin, then add fresh greens like spinach or kale.",
            "Combine: Add cooked lentils/chickpeas and coconut milk. Simmer for 10 minutes.",
            "Season and Serve: Adjust salt and pepper to taste. Serve with rice or bread."
        ]
    },
    DE: {
        title: "Köstlich fleischlos: Die besten vegetarischen Komfortgerichte",
        description: "Sättigende und herzhafte vegetarische Gerichte, die beweisen, dass es für Geschmack kein Fleisch braucht.",
        introHeading: "Einführung",
        introText: "Komfortessen muss nicht auf Fleisch setzen. Mit den richtigen Zutaten und Techniken können vegetarische Gerichte genauso indulgent und befriedigend sein. Von cremigen Currys bis hin zu herzhaften Aufläufen sind die Möglichkeiten endlos.",
        ingredientsHeading: "Zutaten & Kochtipps",
        ingredientsText: "Bereiten Sie die Gerichte mit diesen Grundzutaten zu:",
        ingredientsList: [
            "1 Tasse Linsen oder Kichererbsen",
            "2 EL Olivenöl oder Butter",
            "1 Zwiebel, gewürfelt",
            "2 Knoblauchzehen, gehackt",
            "1 Tasse frischer Spinat oder Grünkohl",
            "1 Tasse Kokosmilch oder Sahne",
            "1 TL Kurkuma",
            "1 TL Kreuzkümmel",
            "Salz und Pfeffer nach Geschmack"
        ],
        cookingHeading: "Kochanleitung",
        steps: [
            "Linsen vorbereiten: Linsen oder Kichererbsen in kochendem Wasser garen, bis sie weich sind. Abtropfen lassen und beiseite stellen.",
            "Die Basis anbraten: Olivenöl oder Butter in einer Pfanne erhitzen. Zwiebel und Knoblauch anbraten, bis sie duften.",
            "Die Gewürze hinzufügen: Kurkuma und Kreuzkümmel einrühren, dann frisches Grün wie Spinat oder Grünkohl hinzufügen.",
            "Kombinieren: Gekochte Linsen/Kichererbsen und Kokosmilch hinzufügen. 10 Minuten köcheln lassen.",
            "Abschmecken und servieren: Salz und Pfeffer nach Geschmack anpassen. Mit Reis oder Brot servieren."
        ]
    }
};

const VegetarianComfortFoodBlog = () => {
    const { language } = useLanguage();
    const { title, description, introHeading, introText, ingredientsHeading, ingredientsText, ingredientsList, cookingHeading, steps } = translations[language];

    return (
        <div>
            <Navbar />
            <div style={{ backgroundImage: 'linear-gradient(to bottom, #27140D, #3E2010)' }} className="font-mukta bg-[#b2b2b2] text-gray-100 min-h-screen">
                <section className="relative h-[60vh] flex items-center justify-center">
                    <img
                        src={img1}
                        alt="Vegetarian Comfort Food Banner"
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
                            alt="Vegetarian Comfort Food Ingredients"
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
                            alt="Finished Vegetarian Comfort Food"
                            className="w-full sm:w-8/12 lg:w-7/12 rounded-lg shadow-lg mx-auto"
                        />
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default VegetarianComfortFoodBlog;
