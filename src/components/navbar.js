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
    bookTable: 'BOOK A TABLE',
    language: 'Language',
  },
  DE: {
    about: 'Über Uns',
    food: 'Essen',
    drinks: 'Getränke',
    info: 'Informationen',
    blog: 'Blog',
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

        <ul
          className={`lg:flex flex-col lg:flex-row space-y-4 lg:space-y-0 space-x-0 lg:space-x-6 lg:items-center absolute lg:static top-16 left-0 w-full lg:w-auto bg-black lg:bg-transparent transition-all duration-300 ${menuOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0 lg:opacity-100'
            } overflow-hidden lg:overflow-visible`}
        >
          {['about', 'food', 'drinks', 'info', 'blog'].map((link, index) => {
            const linkText = location.pathname === `/${link.toLowerCase()}` ? 'text-[#FFD700]' : 'text-white';
            const isCurrentPage = location.pathname === `/${link.toLowerCase()}`;

            return (
              <li key={index} className="text-center lg:text-left">
                <a
                  href={`/${link.toLowerCase()}`}
                  className={`block transition-colors duration-300 text-base font-normal px-2 py-1 ${isCurrentPage ? 'text-[#FFD700]' : linkText
                    } hover:text-[#FFD700]`}
                  onClick={() => setMenuOpen(false)}
                >
                  {translations[language][link]}
                </a>
              </li>
            );
          })}

          {/* Book a Table Button for Mobile */}
          <li className="lg:hidden mt-4 px-4">
            <a
              href="https://www.google.com/maps/reserve/v/dine/c/ZlyFqvufLB0?source=pa&opi=89978449&hl=en-AT&gei=J8M0Z4r2B9-pxc8P5vTssAk&sourceurl=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dtaj%2B1080%2Bwien%26rlz%3D1CDGOYI_enAT1087AT1087%26oq%3Dtaj%26gs_lcrp%3DEgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRg8MgYIAhBFGDwyBggDEEUYPDIJCAQQRRg5GIAEMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg7MgYICBBFGDsyDQgJEAAYkQIYgAQYigXSAQc4NDZqMGo5qAITsAIB4gMEGAEgXw%26hl%3Den-GB%26sourceid%3Dchrome-mobile%26ie%3DUTF-8&ihs=27"
              className="block text-center border border-[#FFD700] bg-[#FFD700] text-sm text-black py-1 px-3 rounded transition-colors duration-300 hover:bg-transparent hover:text-[#FFD700]"
            >
              {bookTable} {/* Translated text for the reservation button */}
            </a>
          </li>

          {/* Mobile Language Dropdown */}
          <li className="lg:hidden mt-4 px-4 pb-4">
            <button onClick={toggleDropdown} className="w-full text-center bg-gray-800 text-white py-1 rounded">
              {languageLabel}: {language}
            </button>
            {dropdownOpen && (
              <div className="w-full bg-gray-900 mt-2 rounded">
                <button
                  onClick={() => changeLang('EN')}
                  className="block w-full text-center text-gray-200 py-1 hover:bg-gray-700"
                >
                  EN
                </button>
                <button
                  onClick={() => changeLang('DE')}
                  className="block w-full text-center text-gray-200 py-1 hover:bg-gray-700"
                >
                  DE
                </button>
              </div>
            )}
          </li>
        </ul>



        {/* Reservation Button and Language Dropdown for Desktop */}
        <div className="hidden lg:flex items-center space-x-6">
          <a
            href="https://www.google.com/maps/reserve/v/dine/c/ZlyFqvufLB0?source=pa&opi=89978449&hl=en-AT&gei=J8M0Z4r2B9-pxc8P5vTssAk&sourceurl=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dtaj%2B1080%2Bwien%26rlz%3D1CDGOYI_enAT1087AT1087%26oq%3Dtaj%26gs_lcrp%3DEgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRg8MgYIAhBFGDwyBggDEEUYPDIJCAQQRRg5GIAEMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg7MgYICBBFGDsyDQgJEAAYkQIYgAQYigXSAQc4NDZqMGo5qAITsAIB4gMEGAEgXw%26hl%3Den-GB%26sourceid%3Dchrome-mobile%26ie%3DUTF-8&ihs=27"
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
