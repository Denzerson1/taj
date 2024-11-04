import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import Logo from '../images/logo.png'; // Import your logo image

const Footer = () => {
    return (
        <footer className="bg-[#f8f5ec] text-black py-16 px-4 md:px-20">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center md:text-left">

                {/* Logo and Copyright */}
                <div className="flex flex-col items-center md:items-start">
                    <img src={Logo} alt="Logo" className="h-12 mb-2" /> {/* Display logo here */}
                    <div className="text-sm font-bold text-gray-600">© 2024 Taj</div>
                    <div className="text-sm text-gray-600">Site by DK</div>
                </div>

                {/* Dining Hours */}
                <div>
                    <h4 className="text-lg font-semibold mb-4 text-[#d4af37]">DINING HOURS</h4>
                    <p className="text-sm text-black">
                        <strong>Dinner</strong><br />
                        
                        Montag
                        17:00 - 23:00 <br />
                        Dienstag
                        17:00 - 23:00<br />
                        Mittwoch
                        17:00 - 23:00<br />
                        Donnerstag
                        17:00 - 23:00<br />
                        Freitag
                        17:00 - 23:00<br />
                        Samstag
                        17:00 - 23:00<br />
                        Sonntag
                        17:00 - 23:00
                    </p>
                    <p className="text-sm mt-4 text-black">
                        <strong>Takeout and Delivery</strong><br />
                        Monday to Sunday: 11:00am – 10:30pm<br /><br />
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-4 text-[#d4af37]">QUICK LINKS</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-red-500 text-black">Home</a></li>
                        <li><a href="/about" className="hover:text-red-500 text-black">About Us</a></li>
                        <li><a href="/food" className="hover:text-red-500 text-black">Food</a></li>
                        <li><a href="/drinks" className="hover:text-red-500 text-black">Drinks</a></li>
                        <li><a href="/info" className="hover:text-red-500 text-black">Contact</a></li>
                        <li><a href="https://www.quandoo.at/place/taj-indisches-restaurant-bar-52222?aid=63" className="hover:text-red-500 text-black">Reservations</a></li>
                    </ul>
                </div>

                {/* Location, Contact, and Social Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-4 text-[#d4af37]">LOCATION</h4>
                    <p className="text-sm text-black">
                        <a
                            href="https://www.google.com/maps/place/Taj+-+Indian+Restaurant+%26+Bar/@48.2128893,16.3493324,19.73z/data=!4m6!3m5!1s0x476d07d819e4938b:0xf458d4cad4b2fd32!8m2!3d48.212809!4d16.3494272!16s%2Fg%2F11h2dr2nsn?entry=tts&g_ep=EgoyMDI0MTAyMy4wIPu8ASoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-red-500"
                        >
                            Kochgasse 9<br />
                            1080 Wien
                        </a>
                    </p>

                    <h4 className="text-lg font-semibold mt-6 mb-4 text-[#d4af37]">CONTACT</h4>
                    <p className="text-sm text-black">
                        <a
                            href="tel:+4319247141"
                            className="hover:text-red-500"
                        >
                            +43 (1) 924 7141
                        </a>
                    </p>

                    <h4 className="text-lg font-semibold mt-6 mb-4 text-[#d4af37]">FOLLOW US</h4>
                    <div className="flex justify-center md:justify-start space-x-4 text-[#d4af37]">
                        <a href="https://www.facebook.com/austriantaj/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="https://www.instagram.com/austriantaj1080/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
                            <FaInstagram size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;