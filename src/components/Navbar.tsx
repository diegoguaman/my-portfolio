import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white font-bold text-xl">My Portfolio</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" className="text-white hover:text-gray-300">
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
