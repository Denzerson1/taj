import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/blogs" element={<Home />} />
        <Route path="/food" element={<Home />} />
        <Route path="/drinks" element={<Home />} />
        <Route path="/info" element={<Home />} />
        <Route path="/private-events" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default Main;
