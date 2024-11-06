import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

const blogData = {
    everyone: [
        {
            title: "Savor the Spice: A Journey Through Indian Curries",
            subtitle: "Discover the world of spices that make curries irresistible",
            img: "https://source.unsplash.com/featured/?curry",
            link: "#"
        },
        {
            title: "Flavors of the East: Dumplings & Beyond",
            subtitle: "Exploring dumplings across cultures",
            img: "https://source.unsplash.com/featured/?dumplings",
            link: "#"
        }
    ],
    vegan: [
        {
            title: "Vibrant Vegan: A Rainbow on Your Plate",
            subtitle: "Fresh, colorful vegan dishes that burst with flavor",
            img: "https://source.unsplash.com/featured/?vegan",
            link: "#"
        },
        {
            title: "Green Goodness: The Best Plant-Based Recipes",
            subtitle: "Elevate your meals with plant-based ingredients",
            img: "https://source.unsplash.com/featured/?vegetables",
            link: "#"
        }
    ],
    vegetarian: [
        {
            title: "Deliciously Meat-Free: Best Vegetarian Comfort Food",
            subtitle: "Satisfying and hearty vegetarian dishes",
            img: "https://source.unsplash.com/featured/?vegetarian",
            link: "#"
        },
        {
            title: "Eggplant Magic: Beyond the Basics",
            subtitle: "How to make eggplant the star of your meal",
            img: "https://source.unsplash.com/featured/?eggplant",
            link: "#"
        }
    ]
};

const FoodBlog = () => {
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
                    <h1 className="text-5xl font-bold text-black mb-4">The Global Plate</h1> {/* Black header */}
                    <p className="text-lg text-gray-700">A culinary adventure for every kind of food lover</p>
                </header>

                {/* Blog Sections */}
                <section>
                    {Object.keys(blogData).map((section, index) => {
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
                                <h2 className="text-3xl font-bold text-gray-800 mb-6 capitalize">
                                    {section === "everyone" ? "For Everyone" : section.charAt(0).toUpperCase() + section.slice(1)}
                                </h2>

                                <div className="grid gap-8 lg:grid-cols-2">
                                    {blogData[section].map((post, index) => (
                                        <a
                                            key={index}
                                            href={post.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`Read more about ${post.title}`}
                                            className="bg-gray-500 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 block"
                                        >
                                            <img src={post.img} alt={post.title} className="w-full h-48 object-cover" />
                                            <div className="p-6">
                                                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{post.title}</h3>
                                                <p className="text-[#FFD700]">{post.subtitle}</p> {/* Light golden subtitle */}
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
