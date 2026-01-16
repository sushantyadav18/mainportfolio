import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 w-screen h-1/8  p-6">
      <div className="max-w-7xl shadow-md mx-auto px-6">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/Logo.jpg"
              alt="Logo"
              className="h-12 w-12 rounded-full"
            />
            <span className="text-white text-xl font-semibold">
              MyPortfolio
            </span>
          </div>
             
          {/* Desktop Menu */}
           
          <ul className="hidden lg:flex space-x-6 text-white font-medium">
            <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link to="/projects" className="hover:text-yellow-400">Projects</Link></li>
            <li><Link to="/gallery" className="hover:text-yellow-400">Gallery</Link></li>
            <li><Link to="/skills" className="hover:text-yellow-400">Skills</Link></li>
            <li><Link to="/education" className="hover:text-yellow-400">Education</Link></li>
          </ul>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-3xl text-white z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <IoClose /> : <IoMdMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-gray-800 shadow-lg">
          <ul className="flex flex-col items-center gap-4 py-6 text-lg">
            <li className="w-full text-center">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="block w-full py-2 text-white hover:bg-gray-700"
              >
                Home
              </Link>
            </li>

            <li className="w-full text-center">
              <Link
                to="/projects"
                onClick={() => setIsOpen(false)}
                className="block w-full py-2 text-white hover:bg-gray-700"
              >
                Projects
              </Link>
            </li>

            <li className="w-full text-center">
              <Link
                to="/gallery"
                onClick={() => setIsOpen(false)}
                className="block w-full py-2 text-white hover:bg-gray-700"
              >
                Gallery
              </Link>
            </li>

            <li className="w-full text-center">
              <Link
                to="/skills"
                onClick={() => setIsOpen(false)}
                className="block w-full py-2 text-white hover:bg-gray-700"
              >
                Skills
              </Link>
            </li>

            <li className="w-full text-center">
              <Link
                to="/education"
                onClick={() => setIsOpen(false)}
                className="block w-full py-2 text-white hover:bg-gray-700"
              >
                Education
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
