import React from 'react';
import { useLanguage } from '../LanguageContext'; // Import the language context
import foodImage from '../images/foodImage.jpg';

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
        <div className='font-mukta' style={styles.bannerContainer}>
            <img src={foodImage} alt="Indian Cuisine" style={styles.image} />
            <div style={styles.overlay}>
                <h1 style={styles.header}>{bannerText[language]}</h1>
                <button onClick={onScrollToMenu} style={styles.button}>
                    {buttonText[language]}
                </button>
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
        flexDirection: 'column', // Added to stack the header and button vertically
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
