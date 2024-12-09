import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Projects from '../pages/Proyects';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1 className="text-center mt-20 text-4xl">Welcome to My Portfolio</h1>} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
