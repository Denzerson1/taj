import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Drinks from './pages/Drinks';
import Events from './pages/Events';
import Food from './pages/Food';
import Info from './pages/Info';


const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/food" element={<Food />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/info" element={<Info />} />
        <Route path="/private-events" element={<Events />} />
      </Routes>
    </Router>
  );
};

export default Main;
