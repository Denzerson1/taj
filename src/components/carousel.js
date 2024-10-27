import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import recipeImage1 from '../images/IMG_6166.jpg';
import recipeImage2 from '../images/One dish_The Taj_Paneer Shashlik_02 (1).jpg';
import recipeImage3 from '../images/One dish_The Taj_Paneer Tikka (1).jpg';
import recipeImage4 from '../images/Ready to eat_The Taj_Chicken Kabli 02 (1).jpg';
import recipeImage5 from '../images/Start eating_The Taj_04 (1).jpg';

const recipes = [
  { title: 'Some food', type: 'RECIPE', image: recipeImage1, link: '#' },
  { title: 'Paneer Shashlik', type: 'RECIPE', image: recipeImage2, link: '#' },
  { title: 'Paneer Tikka', type: 'RECIPE', image: recipeImage3, link: '#' },
  { title: 'Chicken Kabli', type: 'DINNER', image: recipeImage4, link: '#' },
  { title: 'Some food', type: 'RECIPE', image: recipeImage5, link: '#' },
];

const RecipeSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleRecipes, setVisibleRecipes] = useState(3);

  const updateVisibleRecipes = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setVisibleRecipes(5);
    } else if (width >= 768) {
      setVisibleRecipes(3);
    } else {
      setVisibleRecipes(1);
    }
  };

  useEffect(() => {
    updateVisibleRecipes();
    window.addEventListener('resize', updateVisibleRecipes);
    return () => {
      window.removeEventListener('resize', updateVisibleRecipes);
    };
  }, []);

  const handleNext = () => {
    if (currentIndex + visibleRecipes < recipes.length) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="bg-[#f7f4eb] px-5 pt-8 lg:pt-0 lg:px-20">
      <div className="text-center mb-6">
        <h2 className="text-sm font-semibold tracking-wider text-gray-500 uppercase">
          Food Blog
        </h2>
        <h3 className="text-2xl font-light text-gray-800 mt-2">
          A selection of the best recipes from Taj
        </h3>
      </div>

      <div className="mt-10">
        {/* Mobile View */}
        <div className="lg:hidden relative flex items-center justify-center">
          <button
            onClick={handlePrev}
            className="absolute left-2 p-2 rounded-full transition-colors"
            disabled={currentIndex === 0}
            style={{ backgroundColor: 'rgba(255, 193, 7, 0.5)', zIndex: 10 }}
          >
            <FaArrowLeft className="text-white" />
          </button>

          <div className="w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {recipes.map((recipe, index) => (
                <div key={index} className="w-full flex-shrink-0 flex flex-col items-center">
                  <a href={recipe.link} className="block w-full h-48">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-full object-cover rounded-md transition-transform duration-300 hover:scale-105"
                    />
                  </a>
                  <div className="text-center mt-2">
                    <span className="text-xs font-semibold text-gray-500 uppercase">{recipe.type}</span>
                    <a href={recipe.link}>
                      <h4 className="text-lg font-normal text-gray-800 mt-1 hover:text-gray-600 transition-colors">
                        {recipe.title}
                      </h4>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-2 p-2 rounded-full transition-colors"
            disabled={currentIndex + visibleRecipes >= recipes.length}
            style={{ backgroundColor: 'rgba(255, 193, 7, 0.5)', zIndex: 10 }}
          >
            <FaArrowRight className="text-white" />
          </button>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:flex relative items-center">
          <button
            onClick={handlePrev}
            className="absolute left-2 p-2 rounded-full transition-colors"
            style={{ backgroundColor: 'rgba(255, 193, 7, 0.5)', zIndex: 10 }}
          >
            <FaArrowLeft className="text-white" />
          </button>

          <div className="w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${(currentIndex * 100) / visibleRecipes}%)` }}
            >
              {recipes.map((recipe, index) => (
                <div key={index} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/5 px-2">
                  <a href={recipe.link} className="block w-full">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-48 object-cover rounded-md transition-transform duration-300 hover:scale-105"
                    />
                  </a>
                  <div className="text-center mt-2">
                    <span className="text-xs font-semibold text-gray-500 uppercase">{recipe.type}</span>
                    <a href={recipe.link}>
                      <h4 className="text-lg font-normal text-gray-800 mt-1 hover:text-gray-600 transition-colors">
                        {recipe.title}
                      </h4>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-2 p-2 rounded-full transition-colors"
            style={{ backgroundColor: 'rgba(255, 193, 7, 0.5)', zIndex: 10 }}
          >
            <FaArrowRight className="text-white" />
          </button>
        </div>

        {/* Explore Recipes Button */}
        <div className="text-center mt-6">
          <a
            href="/order"
            className="px-6 py-2 border border-[#FFC107] text-black font-semibold hover:bg-[#FFF9E3] transition-all inline-block"
          >
            Explore our blog
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecipeSection;
