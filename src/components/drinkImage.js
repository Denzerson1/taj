// src/components/DrinkBanner.js
import React from 'react'; // Removed useRef as it's no longer needed
import drinkImage from '../images/oldfashioned.jpg'; // Update the image path if necessary

const DrinkBanner = ({ onScrollToGallery }) => {
    return (
        <div className="font-mukta" style={styles.bannerContainer}>
            <img src={drinkImage} alt="Indian-inspired cocktails" style={styles.image} />
            <div style={styles.overlay}>
                <h1 style={styles.header}>ELEVATE YOUR EVENING WITH EXOTIC COCKTAILS</h1>
                {/* Updated to use a button for better accessibility */}
                <button onClick={onScrollToGallery} style={styles.button}>
                    View Drink Menu
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
        flexDirection: 'column',
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

export default DrinkBanner;
