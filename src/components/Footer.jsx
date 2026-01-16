import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left: Name */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white">
              Sushant Yadav
            </h2>
            <p className="text-sm mt-2 text-gray-400">
              MERN Stack Developer | Frontend-Focused
            </p>
          </div>

          {/* Center: Social Icons */}
          <div className="flex gap-4">

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 flex items-center justify-center 
                         rounded-full bg-blue-600 text-white
                         hover:bg-white hover:text-blue-600
                         hover:scale-110 transition-all duration-300"
            >
              <FaFacebook />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 flex items-center justify-center 
                         rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500
                         text-white hover:bg-white hover:text-pink-600
                         hover:scale-110 transition-all duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 flex items-center justify-center 
                         rounded-full bg-blue-700 text-white
                         hover:bg-white hover:text-blue-700
                         hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 flex items-center justify-center 
                         rounded-full bg-gray-800 text-white
                         hover:bg-white hover:text-gray-900
                         hover:scale-110 transition-all duration-300"
            >
              <FaGithub />
            </a>

          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Sushant Yadav. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
