import React, { useState, useEffect, useRef } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { useLanguage } from '../LanguageContext';
import recipeImage1 from '../images/IMG_6166.jpg';
import recipeImage2 from '../images/One dish_The Taj_Paneer Shashlik_02 (1).jpg';
import recipeImage3 from '../images/One dish_The Taj_Paneer Tikka (1).jpg';
import recipeImage4 from '../images/Ready to eat_The Taj_Chicken Kabli 02 (1).jpg';
import recipeImage5 from '../images/Start eating_The Taj_04 (1).jpg';
import recipeImage6 from '../images/Action_The Taj_Gin Fizz_06 (1).jpg';
import recipeImage7 from '../images/Action_The Taj_Smoked Old Fashioned_08 (1).jpg';
import recipeImage8 from '../images/Action_The Taj_Cocktail 14 (1).jpg';
import recipeImage9 from '../images/Full Table_The Taj_Butter Chicken (1).jpg';

const recipes = [
  { title: 'Some food', type: 'RECIPE', image: recipeImage1, link: '#' },
  { title: 'Paneer Shashlik', type: 'RECIPE', image: recipeImage2, link: '#' },
  { title: 'Paneer Tikka', type: 'RECIPE', image: recipeImage3, link: '#' },
  { title: 'Chicken Kabli', type: 'DINNER', image: recipeImage4, link: '#' },
  { title: 'Some food', type: 'RECIPE', image: recipeImage5, link: '#' },
  { title: 'New Dish 1', type: 'RECIPE', image: recipeImage6, link: '#' },
  { title: 'New Dish 2', type: 'RECIPE', image: recipeImage7, link: '#' },
  { title: 'New Dish 3', type: 'DINNER', image: recipeImage8, link: '#' },
  { title: 'New Dish 4', type: 'RECIPE', image: recipeImage9, link: '#' },
];

const translations = {
  en: {
    foodBlog: 'Food Blog',
    title: 'A selection of the best recipes from Taj',
    exploreButton: 'Explore our blog',
  },
  de: {
    foodBlog: 'Food Blog',
    title: 'Eine Auswahl der besten Rezepte von Taj',
    exploreButton: 'Entdecken Sie einzigartige Gerichte ',
  },
};

const RecipeSection = () => {
  const { language } = useLanguage();
  const currentTranslations = translations[language.toLowerCase()] || translations['en'];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleRecipes, setVisibleRecipes] = useState(3);

  const updateVisibleRecipes = () => {
    const width = window.innerWidth;
    setVisibleRecipes(width >= 1024 ? 5 : width >= 768 ? 3 : 1);
  };

  useEffect(() => {
    updateVisibleRecipes();
    window.addEventListener('resize', updateVisibleRecipes);
    return () => window.removeEventListener('resize', updateVisibleRecipes);
  }, []);

  const handleNext = () => currentIndex + visibleRecipes < recipes.length && setCurrentIndex((prev) => prev + 1);
  const handlePrev = () => currentIndex > 0 && setCurrentIndex((prev) => prev - 1);

  return (
    <div
      className="px-5 pt-8 lg:pt-0 lg:px-20"
      style={{
        backgroundImage: 'linear-gradient(to bottom, #27140D, #0B0706)', // Darker brown to black gradient
      }}
    >
      <div className="bg-transparent">
        <div className="text-center mb-6">
          <h2 className="text-sm font-semibold tracking-wider text-gray-300 uppercase">
            {currentTranslations.foodBlog}
          </h2>
          <h3 className="text-2xl font-light text-gray-200 mt-2">
            {currentTranslations.title}
          </h3>
        </div>

        <div className="mt-10">
          {/* Mobile view */}
          <div className="lg:hidden relative flex items-center justify-center">
            <button
              onClick={handlePrev}
              className="absolute left-2 p-2 rounded-full z-10"
              disabled={currentIndex === 0}
            >
              <FaArrowLeft className="text-black" />
            </button>

            <div className="w-full overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {recipes.map((recipe, index) => (
                  <RecipeCard key={index} recipe={recipe} />
                ))}
              </div>
            </div>

            <button
              onClick={handleNext}
              className="absolute right-2 p-2 rounded-full z-10"
              disabled={currentIndex + visibleRecipes >= recipes.length}
            >
              <FaArrowRight className="text-black" />
            </button>
          </div>

          {/* Desktop view */}
          <div className="hidden lg:flex relative items-center">
            <button
              onClick={handlePrev}
              className="absolute left-2 p-2 rounded-full z-10"
              disabled={currentIndex === 0}
            >
              <FaArrowLeft className="text-black" />
            </button>

            <div className="w-full overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${(currentIndex * 100) / visibleRecipes}%)` }}>
                {recipes.map((recipe, index) => (
                  <RecipeCard key={index} recipe={recipe} largeView />
                ))}
              </div>
            </div>

            <button
              onClick={handleNext}
              className="absolute right-2 p-2 rounded-full z-10"
              disabled={currentIndex + visibleRecipes >= recipes.length}
            >
              <FaArrowRight className="text-black" />
            </button>
          </div>

          <div className="text-center mt-6">
            <a href="/blog" className="px-6 py-2 border border-[#FFC107] text-gray-200 font-semibold hover:bg-[#FFC1071A]  transition-all inline-block">
              {currentTranslations.exploreButton}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable RecipeCard Component with Lazy Loading
const RecipeCard = ({ recipe, largeView = false }) => (
  <div className={`flex-shrink-0 ${largeView ? 'w-full sm:w-1/2 lg:w-1/5 px-2' : 'w-full flex flex-col items-center'}`}>
    <a href={recipe.link} className="block w-full h-48">
      <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover rounded-md transition-transform duration-300 hover:scale-105" loading="lazy" />
    </a>
    <div className="text-center mt-2">
      <span className="text-xs font-semibold text-gray-500 uppercase">{recipe.type}</span>
      <a href={recipe.link}>
        <h4 className="text-lg font-normal text-gray-200 mt-1 hover:text-gray-600 transition-colors">
          {recipe.title}
        </h4>
      </a>
    </div>
  </div>
);

export default RecipeSection;
