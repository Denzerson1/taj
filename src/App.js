import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import BlogList from './pages/BlogList';
import Drinks from './pages/Drinks';
import Events from './pages/Events';
import Food from './pages/Food';
import Info from './pages/Info';

const Main = () => {
  return (
    <div className="overflow-x-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/food" element={<Food />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/info" element={<Info />} />
          <Route path="/private-events" element={<Events />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Main;
