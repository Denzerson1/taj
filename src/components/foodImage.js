import React from 'react';
import { useLanguage } from '../LanguageContext'; // Import the language context
import foodImage from '../images/foodImage.jpg';
import { motion } from 'framer-motion'; // Import Framer Motion

const HeroBanner = ({ onScrollToMenu }) => {
    const { language } = useLanguage(); // Access the current language

    // Define text based on language selection
    const bannerText = {
        EN: 'CELEBRATING INDIAN HERITAGE THROUGH A VIENNESE LENS',
        DE: 'INDISCHE KULTUR DURCH EINE WIENER PERSPEKTIVE FEIERN', // German translation
    };

    const buttonText = {
        EN: 'View Food Menu',
        DE: 'Speisekarte ansehen', // German translation
    };

    return (
        <div className="font-mukta" style={styles.bannerContainer}>
            <img src={foodImage} loading="lazy" alt="Indian-inspired cocktails" style={styles.image} />
            <div style={styles.overlay}>
                {/* Header with fade-in animation */}
                <motion.h1
                    style={styles.header}
                    initial={{ opacity: 0 }} // Start with 0 opacity
                    animate={{ opacity: 1 }} // Fade in to full opacity (100%)
                    transition={{ duration: 1 }} // Duration of the fade-in (1 second)
                >
                    {bannerText[language]}
                </motion.h1>

                {/* Button with fade-in animation */}
                <motion.button
                    onClick={() => window.open('/FoodMenu.pdf', '_blank')}
                    className="mt-4 px-6 py-3 border border-radiu border-[#FFC107] bg-[#FFC107] text-black font-semibold transition-all ease-in-out duration-300 hover:bg-[#FFC1071A] hover:text-gray-200"
                    initial={{ opacity: 0 }} // Start with 0 opacity
                    animate={{ opacity: 1 }} // Fade in to full opacity (100%)
                    transition={{ duration: 1 }} // Same duration as header (1 second)
                >
                    {buttonText[language]}
                </motion.button>
            </div>
        </div>
    );
};

const styles = {
    bannerContainer: {
        position: 'relative',
        width: '100%',
        height: '500px', // Adjust height as needed
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Optional darker overlay for text readability
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column', // Stack header and button vertically
    },
    header: {
        color: 'white',
        fontSize: '24px', // Adjust font size as needed
        fontWeight: 'bold',
        textAlign: 'center',
        padding: '0 20px', // Optional padding for mobile responsiveness
    },
    button: {
        marginTop: '20px',
        padding: '12px 18px',
        backgroundColor: '#FFD700', // Gold color
        color: 'black', // Text color in black for contrast
        border: 'none', // Remove default border
        borderRadius: '5px',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '16px',
        cursor: 'pointer', // Change cursor to pointer
        transition: 'background-color 0.3s ease',
    },
};

export default HeroBanner;
