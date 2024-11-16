import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/Footer';
import { useLanguage } from '../../LanguageContext';

import img1 from '../../images/blogs/greengoddess1.jpg';
import img2 from '../../images/blogs/greengoddess2.jpg';

const translations = {
    EN: {
        title: "Green Goodness: Salads That Satisfy",
        description: "Explore the world of hearty, satisfying salads filled with fresh ingredients, bold flavors, and healthy goodness.",
        introHeading: "Introduction",
        introText: "Salads are no longer just a side dish! With the right combination of ingredients, they become a wholesome, satisfying meal. Packed with nutrients and vibrant flavors, these salads redefine health and taste.",
        ingredientsHeading: "Ingredients & Tips",
        ingredientsText: "Craft a satisfying Green Gooddess Salad with these fresh and healthy ingredients:",
        ingredientsList: [
            "2 cups mixed greens (spinach, kale, arugula)",
            "1 cup cherry tomatoes, halved",
            "1 cucumber, sliced",
            "1 avocado, diced",
            "1/4 cup red onion, thinly sliced",
            "1/4 cup feta cheese or vegan alternative",
            "1/4 cup roasted chickpeas",
            "2 tbsp olive oil",
            "1 tbsp balsamic vinegar",
            "Salt and pepper to taste"
        ],
        cookingHeading: "Assembly Instructions",
        steps: [
            "Prepare the Ingredients: Wash and dry the greens, slice the vegetables, and dice the avocado.",
            "Create the Dressing: Whisk together olive oil, balsamic vinegar, salt, and pepper in a small bowl.",
            "Assemble the Salad: In a large bowl, combine the greens, cherry tomatoes, cucumber, avocado, and red onion.",
            "Top It Off: Sprinkle with feta cheese and roasted chickpeas for added texture and flavor.",
            "Drizzle and Toss: Pour the dressing over the salad and toss gently to coat everything evenly.",
            "Serve and Enjoy: Transfer to serving bowls or plates and enjoy this healthy, satisfying meal."
        ]
    }
};

const GreenGoodnessBlog = () => {
    const { language } = useLanguage();
    const { title, description, introHeading, introText, ingredientsHeading, ingredientsText, ingredientsList, cookingHeading, steps } = translations[language];

    return (
        <div>
            <Navbar />
            <div  style={{ backgroundImage: 'linear-gradient(to bottom, #241007, #27140D' }} className="font-mukta bg-[#b2b2b2] text-gray-100 min-h-screen">
                <section className="relative h-[60vh] flex items-center justify-center">
                    <img
                        src={img1}
                        alt="Green Goodness Banner"
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
                            alt="Salad Ingredients"
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

export default GreenGoodnessBlog;
