import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import bannerImage from '../images/ambiente/ambiente.jpg';

const InfoPage = () => {
    return (
        <div className="bg-gradient-to-b from-[#B2B2B2] to-gray-600 min-h-screen text-gray-800">
            <Navbar />
            
            {/* Banner Section with Background Image */}
            <div
                className="relative bg-cover bg-center py-32 lg:py-48 text-center"
                style={{
                    backgroundImage: `url(${bannerImage})`,
                    backgroundSize: 'cover',
                    backgroundAttachment: 'scroll', // Ensure consistency across mobile devices
                }}
            >
                {/* Dark overlay to enhance text visibility */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <h1 className="text-5xl lg:text-7xl font-bold text-white text-shadow-lg">
                        Discover a Journey of Flavors and Traditions
                    </h1>
                    <p className="mt-4 text-lg lg:text-xl text-white">
                        Where every meal tells a story, connecting people through flavors and memories.
                    </p>
                </div>
            </div>
            
            {/* Hours Section */}
            <div className="bg-[#B2B2B2] py-16 px-6 text-center">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">Hours</h2>
                <div className="text-gray-700 space-y-4 text-lg">
                    <p>Monday - Thursday: 11:00 AM - 10:00 PM</p>
                    <p>Friday - Saturday: 11:00 AM - 11:00 PM</p>
                    <p>Sunday: 11:00 AM - 9:00 PM</p>
                </div>
            </div>

            {/* Gradient Divider */}
            <div className="bg-gradient-to-b from-[#B2B2B2] to-gray-600 h-16 md:h-20"></div>

            {/* Location Section with Google Maps Iframe */}
            <div className="bg-gray-600 py-16 px-6 text-center text-white">
                <h2 className="text-3xl font-semibold mb-6">Location</h2>
                <p className="text-lg max-w-xl mx-auto mb-8">
                    123 Flavor Street, Spice Town, IN 45678
                </p>
                <button
                    className="mt-4 px-6 py-2 bg-[#FFD700] text-black font-semibold rounded hover:bg-yellow-600 transition duration-200"
                    onClick={() => window.open('https://maps.google.com?q=123+Flavor+Street,+Spice+Town,+IN+45678', '_blank')}
                >
                    Get Directions
                </button>
                <div className="mt-8 max-w-4xl mx-auto">
                    <iframe
                        title="Google Maps Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093745!2d144.95373531531557!3d-37.81627917975167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43bf67fd21%3A0x5045675218ce6e0!2sSpice%20Town%20Indian%20Restaurant!5e0!3m2!1sen!2sus!4v1612230418189!5m2!1sen!2sus"
                        width="100%"
                        height="400"
                        allowFullScreen=""
                        loading="lazy"
                        className="border-0"
                    ></iframe>
                </div>
            </div>

            {/* Gradient Divider */}
            <div className="bg-gradient-to-b from-gray-600 to-[#B2B2B2] h-16 md:h-20"></div>

            {/* Contact Section */}
            <div className="bg-[#B2B2B2] py-16 px-6 text-center">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">Contact Us</h2>
                <p className="text-lg text-gray-700 mb-4">Phone: (123) 456-7890</p>
                <p className="text-lg text-gray-700 mb-4">Email: contact@tajrestaurant.com</p>
                <p className="text-lg text-gray-700">Feel free to reach out for any questions or special requests.</p>
            </div>

            {/* Gradient Divider */}
            <div className="bg-gradient-to-b from-[#B2B2B2] to-gray-600 h-16 md:h-20"></div>

            {/* Reservation Section */}
            <div className="bg-gray-600 py-16 px-6 text-center text-white">
                <h2 className="text-3xl font-semibold mb-6">Make a Reservation</h2>
                <p className="text-lg max-w-xl mx-auto mb-8">
                    Reserve a table for a memorable dining experience with friends and family.
                </p>
                <button
                    className="px-6 py-2 bg-[#FFD700] text-black font-semibold rounded hover:bg-yellow-600 transition duration-200"
                    onClick={() => window.open('/reservation', '_blank')}
                >
                    Book Now
                </button>
            </div>

            <Footer />
        </div>
    );
};

export default InfoPage;
