// src/components/Footer.js

import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import Logo from '../images/logo.png'; // Import your logo image
import { useLanguage } from '../LanguageContext';

const translations = {
  en: {
    diningHours: 'DINING HOURS',
    dinner: 'Dinner',
    takeoutDelivery: 'Takeout and Delivery',
    quickLinks: 'QUICK LINKS',
    location: 'LOCATION',
    contact: 'CONTACT',
    followUs: 'FOLLOW US',
    home: 'Home',
    aboutUs: 'About Us',
    food: 'Food',
    drinks: 'Drinks',
    contactUs: 'Contact',
    reservations: 'Reservations',
    address: 'Kochgasse 9\n1080 Wien',
    phoneNumber: '+43 (1) 924 7141',
    dinnerHours: [
      'Monday 17:00 - 23:00',
      'Tuesday 17:00 - 23:00',
      'Wednesday 17:00 - 23:00',
      'Thursday 17:00 - 23:00',
      'Friday 17:00 - 23:00',
      'Saturday 17:00 - 23:00',
      'Sunday 17:00 - 23:00',
    ],
    takeoutHours: 'Monday to Sunday: 11:00am – 10:30pm',
  },
  de: {
    diningHours: 'ÖFFNUNGSZEITEN',
    dinner: 'Abendessen',
    takeoutDelivery: 'Abholung und Lieferung',
    quickLinks: 'SCHNELLE LINKS',
    location: 'STANDORT',
    contact: 'KONTAKT',
    followUs: 'FOLGEN SIE UNS',
    home: 'Startseite',
    aboutUs: 'Über Uns',
    food: 'Essen',
    drinks: 'Getränke',
    contactUs: 'Kontakt',
    reservations: 'Reservierungen',
    address: 'Kochgasse 9\n1080 Wien',
    phoneNumber: '+43 (1) 924 7141',
    dinnerHours: [
      'Montag 17:00 - 23:00',
      'Dienstag 17:00 - 23:00',
      'Mittwoch 17:00 - 23:00',
      'Donnerstag 17:00 - 23:00',
      'Freitag 17:00 - 23:00',
      'Samstag 17:00 - 23:00',
      'Sonntag 17:00 - 23:00',
    ],
    takeoutHours: 'Montag bis Sonntag: 11:00 - 22:30',
  },
};

const Footer = () => {
  const { language } = useLanguage();
  const currentTranslations = translations[language.toLowerCase()] || translations['en'];

  return (
    <footer className="bg-gray-600 bg-[#B2B2B2] text-white py-16 px-4 md:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center md:text-left">
        
        {/* Logo and Copyright */}
        <div className="flex flex-col items-center md:items-start">
          <img src={Logo} alt="Logo" className="h-12 mb-2" />
          <div className="text-sm font-bold text-gray-300">© 2024 Taj</div>
          <div className="text-sm text-gray-300">Site by DK</div>
        </div>
        
        {/* Dining Hours */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#FFD700]">
            {currentTranslations.diningHours}
          </h4>
          <p className="text-sm">
            <strong>{currentTranslations.dinner}</strong><br />
            {currentTranslations.dinnerHours.map((day, index) => (
              <span key={index}>{day}<br /></span>
            ))}
          </p>
          <p className="text-sm mt-4">
            <strong>{currentTranslations.takeoutDelivery}</strong><br />
            {currentTranslations.takeoutHours}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#FFD700]">
            {currentTranslations.quickLinks}
          </h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-400">{currentTranslations.home}</a></li>
            <li><a href="/about" className="hover:text-gray-400">{currentTranslations.aboutUs}</a></li>
            <li><a href="/food" className="hover:text-gray-400">{currentTranslations.food}</a></li>
            <li><a href="/drinks" className="hover:text-gray-400">{currentTranslations.drinks}</a></li>
            <li><a href="/info" className="hover:text-gray-400">{currentTranslations.contactUs}</a></li>
            <li><a href="https://www.quandoo.at/place/taj-indisches-restaurant-bar-52222?aid=63" className="hover:text-gray-400">{currentTranslations.reservations}</a></li>
          </ul>
        </div>

        {/* Location, Contact, and Social Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#FFD700]">
            {currentTranslations.location}
          </h4>
          <p className="text-sm">
            <a
              href="https://www.google.com/maps/place/Taj+-+Indian+Restaurant+%26+Bar/@48.2128893,16.3493324,19.73z/data=!4m6!3m5!1s0x476d07d819e4938b:0xf458d4cad4b2fd32!8m2!3d48.212809!4d16.3494272!16s%2Fg%2F11h2dr2nsn?entry=tts&g_ep=EgoyMDI0MTAyMy4wIPu8ASoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              {currentTranslations.address}
            </a>
          </p>

          <h4 className="text-lg font-semibold mt-6 mb-4 text-[#FFD700]">
            {currentTranslations.contact}
          </h4>
          <p className="text-sm">
            <a
              href="tel:+4319247141"
              className="hover:text-gray-400"
            >
              {currentTranslations.phoneNumber}
            </a>
          </p>

          <h4 className="text-lg font-semibold mt-6 mb-4 text-[#FFD700]">
            {currentTranslations.followUs}
          </h4>
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
