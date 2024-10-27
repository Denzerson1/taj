import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for the hamburger menu
import Logo from '../images/logo.png'; // Adjust the path according to your file structure

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const backgroundOpacity = menuOpen ? 1 : Math.min(1, scrollPosition / 200); // Full opacity if menuOpen is true

  return (
    <nav
      className={`font-mukta fixed w-full top-0 z-50 transition-opacity duration-300`}
      style={{
        backgroundColor: `rgba(0, 0, 0, ${backgroundOpacity})`, // Set background opacity dynamically
        transition: 'background-color 0.3s ease',
      }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl transition-colors duration-300">
          <a href="/" className="flex items-center">
            <img src={Logo} alt="Logo" className="h-12" /> {/* Adjusted height for a smaller logo */}
          </a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />} {/* Smaller icon size */}
          </button>
        </div>

        {/* Navbar Links */}
        <ul
          className={`lg:flex flex-col lg:flex-row space-y-4 lg:space-y-0 space-x-0 lg:space-x-6 lg:items-center absolute lg:static top-16 left-0 w-full lg:w-auto bg-black lg:bg-transparent transition-all duration-300 ${menuOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0 lg:opacity-100'
            } overflow-hidden lg:overflow-visible`}
        >
          {['ABOUT', 'FOOD', 'DRINKS', 'INFO', 'BLOG', 'PRIVATE EVENTS'].map((link) => (
            <li key={link} className="text-center lg:text-left">
              <a
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="block transition-colors duration-300 text-base font-normal text-white hover:text-[#FFD700] px-2 py-1"
                onClick={() => setMenuOpen(false)} // Close menu on link click
              >
                {link}
              </a>
            </li>
          ))}

          {/* Reservation Button for Mobile */}
          <li className="lg:hidden mt-4 px-4 pb-4">
            <a
              href="https://www.quandoo.at/place/taj-indisches-restaurant-bar-52222"
              className="block text-center border border-red-600 bg-red-600 text-sm text-white py-1 rounded transition-colors duration-300 hover:bg-transparent hover:text-red-600"
              onClick={() => setMenuOpen(false)} // Close menu on button click
            >
              BOOK A TABLE
            </a>
          </li>
        </ul>

        {/* Reservation Button for Desktop */}
        <div className="hidden lg:block">
          <a
            href="https://www.quandoo.at/place/taj-indisches-restaurant-bar-52222"
            className="border border-red-600 bg-red-600 text-sm text-white py-1 px-3 rounded transition-colors duration-300 hover:bg-transparent hover:text-red-600"
          >
            BOOK A TABLE
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
