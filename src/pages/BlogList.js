import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import Img5 from '../images/Action detail_The Taj_01 (1).jpg';
import img2 from '../images/Action detail_The Taj_03 (1).jpg';
import img3 from '../images/Action detail_The Taj_04 (1).jpg';
import img4 from '../images/Action detail_The Taj_Chicken Korma (1).jpg';
import img1 from '../images/One dish_The Taj_Butter Chicken copy (1).jpg';
import img6 from '../images/One dish_The Taj_Thalli Platte vegetarisch (1).jpg';
import { useLanguage } from '../LanguageContext'; // Importing the useLanguage hook for translation

const blogData = {
    EN: {
        everyone: [
            {
                title: "Savor the Spice: A Journey Through Indian Curries",
                subtitle: "Discover the world of spices that make curries irresistible",
                img: Img5,
                link: "/blog1"
            },
            {
                title: "Flavors of the East: Dumplings & Beyond",
                subtitle: "Exploring dumplings across cultures",
                img: img2,
                link: "/blog2"
            }
        ],
        vegan: [
            {
                title: "Vibrant Vegan: A Rainbow on Your Plate",
                subtitle: "Fresh, colorful vegan dishes that burst with flavor",
                img: img3,
                link: "/blog3"
            },
            {
                title: "Green Goodness: The Best Plant-Based Recipes",
                subtitle: "Elevate your meals with plant-based ingredients",
                img: img4,
                link: "/blog4"
            }
        ],
        vegetarian: [
            {
                title: "Deliciously Meat-Free: Best Vegetarian Comfort Food",
                subtitle: "Satisfying and hearty vegetarian dishes",
                img: img1,
                link: "/blog5"
            },
            {
                title: "Eggplant Magic: Beyond the Basics",
                subtitle: "How to make eggplant the star of your meal",
                img: img6,
                link: "/blog6"
            }
        ]
    },
    DE: {
        everyone: [
            {
                title: "Genieße die Gewürze: Eine Reise durch indische Currys",
                subtitle: "Entdecke die Welt der Gewürze, die Currys unwiderstehlich machen",
                img: Img5,
                link: "/blog1"
            },
            {
                title: "Aromen des Ostens: Dumplings & mehr",
                subtitle: "Erkunde Dumplings aus verschiedenen Kulturen",
                img: img2,
                link: "/blog2"
            }
        ],
        vegan: [
            {
                title: "Vibrant Vegan: Ein Regenbogen auf deinem Teller",
                subtitle: "Frische, bunte vegane Gerichte, die vor Geschmack platzen",
                img: img3,
                link: "/blog3"
            },
            {
                title: "Grüne Köstlichkeiten: Die besten pflanzlichen Rezepte",
                subtitle: "Verfeinere deine Mahlzeiten mit pflanzlichen Zutaten",
                img: img4,
                link: "/blog4"
            }
        ],
        vegetarian: [
            {
                title: "Köstlich fleischfrei: Beste vegetarische Komfortküche",
                subtitle: "Herzhafte und sättigende vegetarische Gerichte",
                img: img1,
                link: "/blog5"
            },
            {
                title: "Auberginenmagie: Mehr als nur das Basische",
                subtitle: "So wird die Aubergine zum Star deines Gerichts",
                img: img6,
                link: "/blog6"
            }
        ]
    }
};

const FoodBlog = () => {
    const { language } = useLanguage(); // Accessing the language context
    const sectionRefs = {
        everyone: useRef(null),
        vegan: useRef(null),
        vegetarian: useRef(null)
    };

    const inViewStates = {
        everyone: useInView(sectionRefs.everyone, { once: true }),
        vegan: useInView(sectionRefs.vegan, { once: true }),
        vegetarian: useInView(sectionRefs.vegetarian, { once: true })
    };

    const slideInLeft = {
        hidden: { x: '-100%', opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.8 } }
    };

    const slideInRight = {
        hidden: { x: '100%', opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.8 } }
    };

    // Translation data for the page headers
    const sectionText = {
        EN: {
            header: 'The Global Plate',
            subtitle: 'A culinary adventure for every kind of food lover provided by Taj',
            categories: {
                everyone: 'For Everyone',
                vegan: 'Vegan Delights',
                vegetarian: 'Vegetarian Wonders',
            },
        },
        DE: {
            header: 'Ein Geschmack der Welt',
            subtitle: 'Ein kulinarisches Abenteuer für alle Arten von Feinschmeckern, zusammengebracht von Taj',
            categories: {
                everyone: 'Für Alle',
                vegan: 'Vegane Köstlichkeiten',
                vegetarian: 'Vegetarische Wunder',
            },
        },
    };

    return (
        <div>
            <Navbar />
            <div
                style={{
                    backgroundImage: 'linear-gradient(to bottom, #B2B2B2, #4B5563)' // Gradient from light gray to dark gray
                }}
                className="pt-32 text-gray-900 font-mukta py-10 px-4 lg:px-24"
            >
                {/* Page Header */}
                <header className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-black mb-4">{sectionText[language].header}</h1> {/* Black header */}
                    <p className="text-lg text-gray-700">{sectionText[language].subtitle}</p>
                </header>

                {/* Blog Sections */}
                <section>
                    {Object.keys(blogData[language]).map((section, index) => {
                        const animationVariant = index % 2 === 0 ? slideInLeft : slideInRight;

                        return (
                            <motion.div
                                ref={sectionRefs[section]}
                                key={section}
                                className="mb-16"
                                initial="hidden"
                                animate={inViewStates[section] ? "visible" : "hidden"}
                                variants={animationVariant}
                            >
                                <h2 className="text-3xl font-bold text-gray-800 mb-6 capitalize text-shadow-lg">
                                    {sectionText[language].categories[section]}
                                </h2>

                                <div className="grid gap-8 lg:grid-cols-2">
                                    {blogData[language][section].map((post, index) => (
                                        <a
                                            key={index}
                                            href={post.link}
                                            rel="noopener noreferrer"
                                            aria-label={`Read more about ${post.title}`}
                                            className="bg-gray-500 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 block"
                                        >
                                            <img src={post.img} alt={post.title} className="w-full h-48 object-cover" />
                                            <div className="p-6">
                                                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{post.title}</h3>
                                                <p className="text-lightgold">{post.subtitle}</p> {/* Light golden subtitle */}
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default FoodBlog;
