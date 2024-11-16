import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import BlogList from './pages/BlogList';
import Drinks from './pages/Drinks';
import Events from './pages/Events';
import Food from './pages/Food';
import Info from './pages/Info';
import Imprint from './pages/Impressum';
import Blog1 from './pages/blogs/blog1';
import Blog2 from './pages/blogs/blog2';
import Blog3 from './pages/blogs/blog3';
import Blog4 from './pages/blogs/blog4';
import Blog5 from './pages/blogs/blog5';
import Blog6 from './pages/blogs/blog6';

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
            <Route path="/journey-trough-indian-curries" element={<Blog1 />} />
            <Route path="/flavors-of-the-east" element={<Blog2 />} />
            <Route path="/vibrant-vegan" element={<Blog3 />} />
            <Route path="/green-goodness" element={<Blog4 />} />
            <Route path="/vegetarian-comfort-food" element={<Blog5 />} />
            <Route path="/eggplant-magic" element={<Blog6 />} />

            <Route path="/imprint" element={<Imprint />} />
          </Routes>
        </Router>
      </div>
    </LanguageProvider>
  );
};

export default Main;
