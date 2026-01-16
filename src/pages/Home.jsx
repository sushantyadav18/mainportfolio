//import React from 'react'
import { Typewriter } from "react-simple-typewriter"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const Home = () => {
  return (
    <>
   <div className="bg-pink-200 w-full h-screen flex items-center">
  <div className="max-w-7xl mx-auto px-6">
    
    <div className="flex flex-col md:flex-row items-center gap-10">

      {/* Text Section */}
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Hi, I’m <span className="text-blue-600">Sushant Yadav</span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-600">
          <Typewriter
            words={["MERN Stack Developer | Frontend-Focused | Tech Explorer"]}
            cursor
            cursorType="|"
            loop={0}
            typeSpeed={90}
            deleteSpeed={80}
            delaySpeed={5000}
          />
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            View Projects
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition">
            Contact Me
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative">
        <img
          src="1profile.jpg"
          alt="profile"
          className="w-70 h-70 m-auto md:w-70 md:h-70 object-cover rounded-full shadow-lg"

          
        />

        {/* Decorative Ring */}
        <div className="absolute inset-0 m-auto w-[280px] h-[280px] 
                        rounded-full border-2 border-dashed 
                        border-blue-500 opacity-100
                        animate-[spin_12s_linear_infinite]
                        hover:[animation-play-state:paused]">

                            
        </div>
      </div>
           

           
    </div>
    <div className="mt-4 flex gap-8 justify-center md:justify-start">
  
  {/* Facebook */}
  <a
    href="https://facebook.com"
    target="_blank"
    className="h-12 w-12 flex items-center justify-center 
               rounded-full bg-blue-600 text-white text-xl
               shadow-lg hover:bg-white
               hover:scale-110 transition-all duration-300"
  >
    <FaFacebook />
  </a>

  {/* Instagram */}
  <a
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="h-12 w-12 flex items-center justify-center 
               rounded-full bg-pink-400
               text-white text-xl shadow-lg
               hover:bg-white
               hover:scale-110 transition-all duration-300"
  >
    <FaInstagram />
  </a>

  {/* LinkedIn */}
  <a
    href="https://linkedin.com"
    target="_blank"
    className="h-12 w-12 flex items-center justify-center 
               rounded-full bg-blue-700 text-white text-xl
               shadow-lg hover:bg-white
               hover:scale-110 transition-all duration-300"
  >
    <FaLinkedin />
  </a>

  {/* GitHub */}
  <a
    href="https://github.com"
    target="_blank"
    className="h-12 w-12 flex items-center justify-center 
               rounded-full bg-gray-900 text-white text-xl
               shadow-lg hover:bg-white
               hover:scale-110 transition-all duration-300"
  >
    <FaGithub />
  </a>
</div>
  </div>
</div>




        
    </>
  )
}

export default Home
