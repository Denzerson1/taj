import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import Slideshow from './components/slideshow';
import Richtext from './components/richtext';

const Main = () => {
  return (
    <div>
      <Navbar />
      <Slideshow />
      <Richtext />
    </div>
  );
};

export default Main;
