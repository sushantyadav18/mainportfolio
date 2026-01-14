//import React from 'react'
import { Typewriter } from "react-simple-typewriter"
const Home = () => {
  return (
    <>
   <div className="bg-gray-300 w-full h-screen flex items-center">
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
          className="w-80 h-80 ml-4 md:w-64 md:h-64 object-cover rounded-full shadow-lg"

          
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
  </div>
</div>

        
    </>
  )
}

export default Home
