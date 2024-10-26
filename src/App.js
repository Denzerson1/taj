import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import Slideshow from './components/slideshow';
import Richtext from './components/richtext';
import Cuisine from './components/cuisine';

const Main = () => {
  return (
    <div>
      <Navbar />
      <Slideshow />
      <Richtext />
      <Cuisine />
    </div>
  );
};

export default Main;
