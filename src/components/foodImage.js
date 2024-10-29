import React from 'react';
import foodImage from '../images/foodImage.jpg';

const HeroBanner = () => {
    return (
        <div style={styles.bannerContainer}>
            <img src={foodImage} alt="Indian Cuisine" style={styles.image} />
            <div style={styles.overlay}>
                <h1 style={styles.header}>CELEBRATING INDIAN HERITAGE THROUGH A VIENNESE LENS</h1>
                <a href="/food.pdf" style={styles.button}>
                    View Menu
                </a>
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
        backgroundColor: '#008080',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '16px',
        transition: 'background-color 0.3s ease',
    },
};

export default HeroBanner;
