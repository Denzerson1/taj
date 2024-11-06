import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import aboutImage from '../images/about.jpg';
import aboutImage2 from '../images/2.jpg';

const AboutPage = () => {
    return (
        <div className="relative min-h-screen font-mukta text-gray-900">
            <Navbar />

            {/* Header Section with Gradient Background */}
            <div className="relative pt-24 pb-16 px-4 sm:pt-32 sm:pb-20 lg:px-24 text-center bg-gradient-to-b from-gray-700 to-[#B2B2B2] text-gray-100">
                <h1 className="text-lightgold text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
                    Discover the Essence of India in the Heart of Vienna
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-3xl mx-auto">
                    Step into a world where tradition meets elegance. At <span className="text-lightgold">Taj</span>, we invite you to embark on a culinary journey through the vibrant landscapes of India, reimagined for the refined tastes of our discerning guests.
                </p>
            </div>


            {/* Main Content Section */}
            <div className="bg-[#B2B2B2] text-gray-800 py-12 sm:py-16 px-4 lg:px-24">
                <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-2">

                    {/* Left Column: Rich Text */}
                    <div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-900 mb-6 sm:mb-8">
                            A Symphony of Flavors, Curated with Passion
                        </h2>
                        <p className="leading-relaxed text-gray-700 mb-6 sm:mb-8">
                            At Taj, each dish is a masterpiece crafted with meticulous care, capturing the boldness and beauty of India’s culinary heritage. From the royal Mughlai feasts of Rajasthan to the coastal delicacies of Kerala, every plate tells a story of timeless tradition blended with contemporary sophistication.
                        </p>
                        <p className="leading-relaxed text-gray-700">
                            Our chefs bring a wealth of experience, elevating traditional recipes with the finest ingredients and innovative techniques. Each flavor is carefully balanced, each spice handpicked, offering a dining experience that lingers long after the last bite.
                        </p>
                    </div>

                    {/* Right Column: Image with Overlay */}
                    <div className="relative">
                        <img
                            src={aboutImage}
                            alt="Indian cuisine"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                        <div className="absolute bottom-0 left-0 w-full h-20 sm:h-32 bg-gradient-to-t from-gray-600 to-transparent"></div>
                    </div>
                </div>
            </div>

            {/* Mission & Vision Section */}
            <div className="bg-gray-700 py-16 sm:py-20 px-4 lg:px-24 text-gray-100">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">
                        Our Mission and Vision
                    </h2>
                    <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                        Our mission is to create a haven where the spirit of Indian hospitality and flavors unite, offering an immersive experience that transports you from Vienna to the heart of India. We are dedicated to excellence, not only in taste but in every moment of your visit.
                    </p>
                    <p className="text-base sm:text-lg leading-relaxed">
                        We envision Taj Vienna as a sanctuary for those who appreciate the finer things in life—a place where each meal is not just a dish but a cherished memory, created by the fusion of tradition and innovation.
                    </p>
                </div>
            </div>

            {/* Experience Section */}
            <div className="bg-[#B2B2B2] py-16 sm:py-20 px-4 lg:px-24">
                <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-2 items-center">

                    {/* Left Column: Image */}
                    <div className="relative">
                        <img
                            src={aboutImage2}
                            alt="Elegant Indian restaurant interior"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                        <div className="absolute top-0 left-0 w-full h-20 sm:h-32 bg-gradient-to-b from-gray-600 to-transparent"></div>
                    </div>

                    {/* Right Column: Description */}
                    <div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-900 mb-6 sm:mb-8">
                            An Experience Beyond Dining
                        </h2>
                        <p className="leading-relaxed text-gray-700 mb-6 sm:mb-8">
                            Taj Vienna is more than a restaurant—it is an experience. Amidst an ambiance that combines opulence and warmth, our guests are treated to exceptional service and attention to detail. Every moment is designed to evoke the charm and grandeur of Indian hospitality.
                        </p>
                        <p className="leading-relaxed text-gray-700">
                            Join us and immerse yourself in a world of timeless elegance and contemporary grace, where each visit is crafted to delight and inspire.
                        </p>
                    </div>
                </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-b from-[#B2B2B2] to-gray-600 py-16 sm:py-20 px-4 lg:px-24 text-center text-gray-100">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
                    Ready to Begin Your Culinary Journey?
                </h2>
                <p className="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8">
                    Whether it’s an intimate dinner or a celebration with loved ones, Taj Vienna offers the perfect setting for unforgettable moments. Reserve your table and allow us to share the flavors and traditions of India with you.
                </p>
                <a
                    href="https://www.quandoo.at/place/taj-indisches-restaurant-bar-52222"
                    className="inline-block bg-[#FFD700] text-gray-900 font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-lg shadow-lg transition duration-300 hover:bg-[#e6c200]"
                >
                    Book a Table
                </a>
            </div>

            <Footer />
        </div>
    );
};

export default AboutPage;
