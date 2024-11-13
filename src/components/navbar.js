import React, { useState, useEffect } from 'react'; // Make sure to import useEffect
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../LanguageContext'; // Import the language context
import Logo from '../images/logo.png';

// Translations for the Navbar component
const translations = {
  EN: {
    about: 'About',
    food: 'Food',
    drinks: 'Drinks',
    info: 'Info',
    blog: 'Blog',
    privateEvents: 'Private Events',
    bookTable: 'BOOK A TABLE',
    language: 'Language',
  },
  DE: {
    about: 'Über Uns',
    food: 'Essen',
    drinks: 'Getränke',
    info: 'Informationen',
    blog: 'Blog',
    privateEvents: 'Private Veranstaltungen',
    bookTable: 'RESERVIEREN',
    language: 'Sprache',
  },
};

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for language dropdown
  const { language, changeLanguage } = useLanguage(); // Use language context
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const changeLang = (lang) => {
    changeLanguage(lang);
    setDropdownOpen(false); // Close dropdown after selecting language
  };

  // Set background opacity for special pages
  const isSpecialPage = location.pathname === '/food' || location.pathname === '/drinks' || location.pathname === '/blog';
  const backgroundOpacity = isSpecialPage ? 1 : (menuOpen ? 1 : Math.min(1, scrollPosition / 200));

  // Get the current translations based on the selected language
  const { about, food, drinks, info, blog, privateEvents, bookTable, language: languageLabel } = translations[language];

  return (
    <nav
      className="font-mukta fixed w-full top-0 z-50 transition-opacity duration-300"
      style={{
        backgroundColor: `rgba(0, 0, 0, ${backgroundOpacity})`,
        transition: 'background-color 0.3s ease',
      }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl transition-colors duration-300">
          <a href="/" className="flex items-center">
            <img src={Logo} alt="Logo" className="h-12" />
          </a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Navbar Links */}
        <ul
          className={`lg:flex flex-col lg:flex-row space-y-4 lg:space-y-0 space-x-0 lg:space-x-6 lg:items-center absolute lg:static top-16 left-0 w-full lg:w-auto bg-black lg:bg-transparent transition-all duration-300 ${menuOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0 lg:opacity-100'
            } overflow-hidden lg:overflow-visible`}
        >
          {['about', 'food', 'drinks', 'info', 'blog', 'privateEvents'].map((link, index) => {
            const linkText = location.pathname === `/${link.toLowerCase()}` ? 'text-[#FFD700]' : 'text-white'; // Highlight active page
            const isCurrentPage = location.pathname === `/${link.toLowerCase()}`;

            return (
              <li key={index} className="text-center lg:text-left">
                <a
                  href={`/${link.toLowerCase()}`} // Always use English path
                  className={`block transition-colors duration-300 text-base font-normal px-2 py-1 ${isCurrentPage ? 'text-[#FFD700]' : linkText
                    } hover:text-[#FFD700]`}
                  onClick={() => setMenuOpen(false)} // Close menu on link click
                >
                  {translations[language][link]} {/* Display translated text for each link */}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Reservation Button and Language Dropdown for Desktop */}
        <div className="hidden lg:flex items-center space-x-6">
          <a
            href="https://www.quandoo.at/place/taj-indisches-restaurant-bar-52222"
            className="border border-[#FFD700] bg-[#FFD700] text-sm text-black py-1 px-3 rounded transition-colors duration-300 hover:bg-transparent hover:text-[#FFD700]"
          >
            {bookTable} {/* Translated text for the reservation button */}
          </a>

          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="border border-gray-600 text-sm text-gray-200 py-1 px-3 rounded transition-colors duration-300 hover:bg-gray-700"
            >
              {language}
            </button>
            {dropdownOpen && (
              <div className="absolute mt-2 bg-black rounded shadow-lg">
                <button
                  onClick={() => changeLang('EN')}
                  className="block px-3 py-2 text-sm text-gray-200 hover:bg-gray-700"
                >
                  EN
                </button>
                <button
                  onClick={() => changeLang('DE')}
                  className="block px-3 py-2 text-sm text-gray-200 hover:bg-gray-700"
                >
                  DE
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
