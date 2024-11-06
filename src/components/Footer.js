import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import Logo from '../images/logo.png'; // Import your logo image

const Footer = () => {
    return (
        <footer className="bg-gray-600 bg-[#B2B2B2] text-white py-16 px-4 md:px-20">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center md:text-left">

                {/* Logo and Copyright */}
                <div className="flex flex-col items-center md:items-start">
                    <img src={Logo} alt="Logo" className="h-12 mb-2" /> {/* Display logo here */}
                    <div className="text-sm font-bold text-gray-300">© 2024 Taj</div>
                    <div className="text-sm text-gray-300">Site by DK</div>
                </div>

                {/* Dining Hours */}
                <div>
                    <h4 className="text-lg font-semibold mb-4 text-[#FFD700]">DINING HOURS</h4> {/* Brighter gold color */}
                    <p className="text-sm">
                        <strong>Dinner</strong><br />
                        Montag 17:00 - 23:00 <br />
                        Dienstag 17:00 - 23:00<br />
                        Mittwoch 17:00 - 23:00<br />
                        Donnerstag 17:00 - 23:00<br />
                        Freitag 17:00 - 23:00<br />
                        Samstag 17:00 - 23:00<br />
                        Sonntag 17:00 - 23:00
                    </p>
                    <p className="text-sm mt-4">
                        <strong>Takeout and Delivery</strong><br />
                        Monday to Sunday: 11:00am – 10:30pm<br /><br />
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-4 text-[#FFD700]">QUICK LINKS</h4> {/* Brighter gold color */}
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-gray-400">Home</a></li>
                        <li><a href="/about" className="hover:text-gray-400">About Us</a></li>
                        <li><a href="/food" className="hover:text-gray-400">Food</a></li>
                        <li><a href="/drinks" className="hover:text-gray-400">Drinks</a></li>
                        <li><a href="/info" className="hover:text-gray-400">Contact</a></li>
                        <li><a href="https://www.quandoo.at/place/taj-indisches-restaurant-bar-52222?aid=63" className="hover:text-gray-400">Reservations</a></li>
                    </ul>
                </div>

                {/* Location, Contact, and Social Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-4 text-[#FFD700]">LOCATION</h4> {/* Brighter gold color */}
                    <p className="text-sm">
                        <a
                            href="https://www.google.com/maps/place/Taj+-+Indian+Restaurant+%26+Bar/@48.2128893,16.3493324,19.73z/data=!4m6!3m5!1s0x476d07d819e4938b:0xf458d4cad4b2fd32!8m2!3d48.212809!4d16.3494272!16s%2Fg%2F11h2dr2nsn?entry=tts&g_ep=EgoyMDI0MTAyMy4wIPu8ASoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-400"
                        >
                            Kochgasse 9<br />
                            1080 Wien
                        </a>
                    </p>

                    <h4 className="text-lg font-semibold mt-6 mb-4 text-[#FFD700]">CONTACT</h4> {/* Brighter gold color */}
                    <p className="text-sm">
                        <a
                            href="tel:+4319247141"
                            className="hover:text-gray-400"
                        >
                            +43 (1) 924 7141
                        </a>
                    </p>

                    <h4 className="text-lg font-semibold mt-6 mb-4 text-[#FFD700]">FOLLOW US</h4> {/* Brighter gold color */}
                    <div className="flex justify-center md:justify-start space-x-4 text-[#FFD700]">
                        <a href="https://www.facebook.com/austriantaj/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="https://www.instagram.com/austriantaj1080/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <FaInstagram size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
