import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/Footer';
import { useLanguage } from '../../LanguageContext';

import img1 from '../../images/blogs/stirfry.jpg';
import img2 from '../../images/blogs/stirfry2.jpg';

const translations = {
    EN: {
        title: "Vibrant Vegan: A Rainbow on Your Plate",
        description: "Fresh, colorful vegan dishes that burst with flavor",
        introHeading: "Introduction",
        introText: "Vegan food has taken the world by storm, proving that plant-based meals are anything but boring. With vibrant colors and bold flavors, vegan dishes bring creativity to your plate.",
        ingredientsHeading: "Ingredients & Cooking Tips",
        ingredientsText: "Crafting colorful vegan meals starts with the right ingredients. Here’s what you’ll need for a vibrant vegetable stir-fry:",
        ingredientsList: [
            "1 red bell pepper, sliced",
            "1 yellow squash, sliced",
            "1 zucchini, sliced",
            "1 cup broccoli florets",
            "1/2 cup snap peas",
            "2 tbsp soy sauce",
            "1 tbsp sesame oil",
            "1 tsp grated ginger",
            "Salt and pepper to taste"
        ],
        cookingHeading: "Cooking Instructions",
        steps: [
            "Heat sesame oil in a wok or large skillet over medium-high heat.",
            "Add grated ginger and stir until fragrant.",
            "Toss in the vegetables and stir-fry for 3-5 minutes.",
            "Add soy sauce and stir for another minute.",
            "Serve hot with a sprinkle of sesame seeds and enjoy!"
        ]
    }
};

const VibrantVeganBlog = () => {
    const { language } = useLanguage();
    const { title, description, introHeading, introText, ingredientsHeading, ingredientsText, ingredientsList, cookingHeading, steps } = translations[language];

    return (
        <div>
            <Navbar />
            <div  style={{ backgroundImage: 'linear-gradient(to bottom, #241007, #27140D' }} className="font-mukta bg-[#b2b2b2] text-gray-100 min-h-screen">
                <section className="relative h-[60vh] flex items-center justify-center">
                    <img
                        src={img1}
                        alt="Vibrant Vegan Banner"
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
                            alt="Vegan Ingredients"
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
                <Footer />
            </div>
        </div>
    );
};

export default VibrantVeganBlog;
