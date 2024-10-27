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
  const [visibleRecipes, setVisibleRecipes] = useState(3); // Default number of visible recipes

  // Function to determine number of visible recipes based on window size
  const updateVisibleRecipes = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setVisibleRecipes(5); // For large screens
    } else if (width >= 768) {
      setVisibleRecipes(3); // For medium screens
    } else {
      setVisibleRecipes(1); // For small screens
    }
  };

  useEffect(() => {
    // Update visible recipes on initial render and resize
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
    <div className="bg-[#f7f4eb] px-5 pt-8 lg:pt-0 lg:px-20"> {/* Adjusted padding */}
      <div className="text-center mb-6">
        <h2 className="text-sm font-semibold tracking-wider text-gray-500 uppercase">
          Food Blog
        </h2>
        <h3 className="text-2xl font-light text-gray-800 mt-2">
          A selection of the best recipes from Taj
        </h3>
      </div>

      <div className="mt-10">
        {/* Mobile View: Single Recipe with Left/Right Arrows */}
        <div className="lg:hidden relative flex items-center justify-center">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-2 p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors"
          >
            <FaArrowLeft />
          </button>

          {/* Recipe Image with Slide Animation */}
          <div className="w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${(currentIndex * 100) / visibleRecipes}%)` }} // Adjust based on visible recipes
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

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-2 p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Desktop View: Carousel with Left/Right Arrows */}
        <div className="hidden lg:flex relative items-center">
          {/* Previous Button for Desktop */}
          <button
            onClick={handlePrev}
            className="absolute left-2 p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors"
          >
            <FaArrowLeft />
          </button>

          {/* Recipe Image Carousel */}
          <div className="w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${(currentIndex * 100) / visibleRecipes}%)` }} // Adjust based on visible recipes
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

          {/* Next Button for Desktop */}
          <button
            onClick={handleNext}
            className="absolute right-2 p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors"
          >
            <FaArrowRight />
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
