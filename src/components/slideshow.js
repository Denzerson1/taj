import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import fullTable from '../images/1.jpg';
import fullTable2 from '../images/fulltable2.jpg';
import drinks from '../images/drink3.jpg';
import privateevents from '../images/ambiente/ambiente.jpg';
import drink2 from '../images/drink.jpg';
import drink3 from '../images/drink1.jpg';
import fulltable3 from '../images/fulltable3.jpg';
import Logo from '../images/logo.png';
import takeout from '../images/takeout.jpg';
import flasche from '../images/flasche.jpg';
import chicken from '../images/ingredients.jpg';
import ambiente2 from '../images/ambiente/ambiente2.jpg';
import pfeile from '../images/pfeile.png'; // Import the image

const slides = [
    { image: fullTable },
    { image: fullTable2 },
    { image: drinks },
    { image: drink2 },
    { image: privateevents },
    { image: fulltable3 },
    { image: drink3 },
    { image: takeout },
    { image: flasche },
    { image: chicken },
    { image: ambiente2 },
];

const Slideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(interval);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length); // Loop back to the first slide
    };

    // Function to handle scroll to section
    const scrollToSection = () => {
        const section = document.getElementById('richtext');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="font-mukta relative w-full h-screen overflow-hidden bg-gray-900">
            <style>
                {`
          .slide-container {
            display: flex;
            width: 100%; /* Full width for the slide container */
            height: 100%;
            transition: transform 1s ease-in-out;
            transform: translateX(-${currentIndex * 100}%); /* Move to current slide */
          }

          .slide {
            width: 100%; /* Ensure each slide takes full width */
            height: 100%; /* Full height of the container */
            flex-shrink: 0;
            object-fit: cover; /* Adjust image to fill the slide without empty spaces */
          }

          .social-icons a {
            color: #d4af37;
            transition: color 0.3s;
          }

          .social-icons a:hover {
            color: #b89f30;
          }
        `}
            </style>

            {/* Slide container with images aligned horizontally */}
            <div className="absolute inset-0 flex slide-container">
                {slides.map((slide, index) => (
                    <img key={index} src={slide.image} alt={`Slide ${index + 1}`} className="slide" />
                ))}
            </div>

            {/* Logo with Subtitle */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center">
                <img
                    src={Logo}
                    alt="Logo"
                    className="h-36 sm:h-48 md:h-60 lg:h-72 xl:h-80 opacity-90 pointer-events-none user-select-none"
                />
                <p className="text-white mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-light">
                    Experience the Essence of Indian Culinary
                </p>

                {/* Down Arrow Image */}
                <img 
                    src={pfeile} 
                    alt="Down Arrow" 
                    className="mt-4 cursor-pointer w-8 h-8" 
                    onClick={scrollToSection} // Add onClick handler
                />
            </div>

            {/* Social Media Icons */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 social-icons">
                <div className="flex space-x-6 text-white">
                    <a href="https://www.facebook.com/austriantaj/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                        <FaFacebookF size={24} className="text-[#d4af37] hover:text-[#b89f30]" />
                    </a>
                    <a href="https://www.instagram.com/austriantaj1080/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                        <FaInstagram size={24} className="text-[#d4af37] hover:text-[#b89f30]" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Slideshow;
