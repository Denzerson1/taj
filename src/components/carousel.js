import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import recipeImage1 from '../images/IMG_6166.jpg';
import recipeImage2 from '../images/One dish_The Taj_Paneer Shashlik_02 (1).jpg';
import recipeImage3 from '../images/One dish_The Taj_Paneer Tikka (1).jpg';
import recipeImage4 from '../images/Ready to eat_The Taj_Chicken Kabli 02 (1).jpg';
import recipeImage5 from '../images/Start eating_The Taj_04 (1).jpg';
import recipeImage6 from '../images/Action_The Taj_Gin Fizz_06 (1).jpg';
import recipeImage7 from '../images/Action_The Taj_Smoked Old Fashioned_08 (1).jpg';
import recipeImage8 from '../images/Full Table_The Taj_MUghal Negroni 02 (1).jpg';
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

const RecipeSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleRecipes, setVisibleRecipes] = useState(3);
  const [isInViewport, setIsInViewport] = useState(false);
  const sectionRef = useRef(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInViewport(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
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

  const slideInFromTop = {
    initial: { y: '-100vh', opacity: 0 },
    animate: isInViewport ? { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } } : {},
  };

  return (
    <motion.div
      ref={sectionRef}
      initial="initial"
      animate="animate"
      variants={slideInFromTop}
      className="bg-[#B2B2B2] px-5 pt-8 lg:pt-0 lg:px-20"
    >
      <div className="text-center mb-6">
        <h2 className="text-sm font-semibold tracking-wider text-gray-500 uppercase">
          Food Blog
        </h2>
        <h3 className="text-2xl font-light text-gray-800 mt-2">
          A selection of the best recipes from Taj
        </h3>
      </div>

      {/* Recipe cards */}
      <div className="mt-10">
        {/* Mobile View */}
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
                <div key={index} className="w-full flex-shrink-0 flex flex-col items-center">
                  <a href={recipe.link} className="block w-full h-48">
                    <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover rounded-md transition-transform duration-300 hover:scale-105" />
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
            className="absolute right-2 p-2 rounded-full z-10" 
            disabled={currentIndex + visibleRecipes >= recipes.length}
          >
            <FaArrowRight className="text-black" />
          </button>
        </div>

        {/* Desktop View */}
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
                <div key={index} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/5 px-2">
                  <a href={recipe.link} className="block w-full">
                    <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded-md transition-transform duration-300 hover:scale-105" />
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
            className="absolute right-2 p-2 rounded-full z-10" 
            disabled={currentIndex + visibleRecipes >= recipes.length}
          >
            <FaArrowRight className="text-black" />
          </button>
        </div>

        {/* Explore Recipes Button */}
        <div className="text-center mt-6">
          <a href="/blog" className="px-6 py-2 border border-[#FFC107] text-black font-semibold hover:bg-gray-200 transition-all inline-block">
            Explore our blog
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default RecipeSection;
