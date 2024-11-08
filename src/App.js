import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import BlogList from './pages/BlogList';
import Drinks from './pages/Drinks';
import Events from './pages/Events';
import Food from './pages/Food';
import Info from './pages/Info';

import Blog1 from './pages/blogs/blog1';
import { LanguageProvider } from './LanguageContext';

const Main = () => {
  return (
    <LanguageProvider>
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
            <Route path="/blog1" element={<Blog1 />} />
          </Routes>
        </Router>
      </div>
    </LanguageProvider>
  );
};

export default Main;
