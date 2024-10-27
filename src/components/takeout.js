import React, { useState } from 'react';
import chowNowLogo from '../images/takeout/1.png'; // Adjust path as necessary
import grubhubLogo from '../images/takeout/2.png'; // Adjust path as necessary
import caviarLogo from '../images/takeout/3.png'; // Adjust path as necessary

const Takeout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="font-mukta bg-[#f8f5ec] p-4">
      {/* Takeout Section */}
      <div className="text-center mb-2">
        <h2 className="text-black text-4xl font-bold mb-4">TAKE OUT</h2>
        <button 
          onClick={toggleMenu} // Toggle menu on button click
          className="px-6 py-2 border border-[#FFC107] text-black font-semibold hover:bg-[#FFF9E3] transition-all inline-block"
        >
          ORDER ONLINE
        </button>
      </div>
      
      {/* Menu Section */}
      <div
        className={`bg-white shadow-md rounded transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-[150px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className={`p-2 text-center transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
          <h3 className="text-lg font-bold mb-2">Choose a Delivery Service</h3>
          {/* Center the logos without full width */}
          <div className="flex justify-center flex-wrap gap-4"> {/* Removed max-w-md and mx-auto */}
            <a href="https://www.chownow.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <img
                src={chowNowLogo}
                alt="ChowNow"
                className="h-16 transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
              <span className="mt-2 text-black">ChowNow</span>
            </a>
            <a href="https://www.grubhub.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <img
                src={grubhubLogo}
                alt="Grubhub"
                className="h-16 transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
              <span className="mt-2 text-black">Grubhub</span>
            </a>
            <a href="https://www.trycaviar.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <img
                src={caviarLogo}
                alt="Caviar"
                className="h-16 transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
              <span className="mt-2 text-black">Caviar</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Takeout;
