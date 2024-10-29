import React from 'react';
import Navbar from '../components/navbar'; // Adjust the path as necessary
import pdf from '../pdf/food.pdf';

const FoodPage = () => {
  return (
    <div>
      <Navbar />
      <header className="bg-red-600 text-white text-center py-16">
        <h1 className="text-4xl font-bold">Our Delicious Food</h1>
        <p className="mt-4 text-lg">Explore our menu and discover the flavors of India.</p>
      </header>

      <main className="container mx-auto px-4 py-10">
        {/* PDF Viewer */}
        <div className="flex justify-center">
          <iframe
            src={pdf} // Replace with the actual path to your PDF
            width="100%"
            height="1000px"
            className="border border-gray-300 rounded-lg"
            title="Restaurant Menu"
          />
        </div>
      </main>
    </div>
  );
};

export default FoodPage;
