import { Typewriter } from "react-simple-typewriter";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

import Gallery from "./Gallery";
import Education from "./Education";
import Project from "./Project";
import Skills from "./Skills";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

const Home = () => {
  return (
    <>
     
      <div
        className="relative w-full lg:h-screen flex items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bgimage.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/50"></div>

        <div className="relative z-10 max-w-7xl ml-100 mx-auto px-6 w-full">
          <div className="flex flex-col md:flex-row items-center gap-10">

          
            <div className="text-center md:text-left">
              <h1 className="text-4xl mt-25 lg:mt-5 md:text-5xl font-bold text-gray-800">
                Hi, I’m <span className="text-blue-600">Sushant Yadav</span>
              </h1>

              <p className="mt-4 text-lg md:text-xl text-gray-700">
                <Typewriter
                  words={[
                    "MERN Stack Developer | Frontend-Focused | Tech Explorer",
                  ]}
                  cursor
                  cursorType="|"
                  loop={0}
                  typeSpeed={90}
                  deleteSpeed={80}
                  delaySpeed={5000}
                />
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  to="/projects"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  View Projects
                </Link>
                <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition">
                  Contact Me
                </button>
              </div>
            </div>

          
            <div className="relative">
              <img
                src="/1profile.jpg"
                alt="profile"
                className="w-70 h-70 m-auto lg:mt-20 md:w-80 md:h-80 object-cover rounded-full shadow-lg"
              />

              
              <div
                className="absolute inset-0 m-auto md:w-80 md:h-80 lg:mt-20
                           rounded-full border-2 border-dashed
                           border-blue-500 animate-[spin_12s_linear_infinite]
                           hover:[animation-play-state:paused]"
              ></div>
            </div>
          </div>

        
          <div className="mt-6 mb-10 flex gap-8 justify-center md:justify-start">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 w-12 flex items-center justify-center rounded-full
                         bg-blue-600 text-white text-xl shadow-lg
                         hover:bg-white hover:text-blue-600
                         hover:scale-110 transition-all duration-300"
            >
              <FaFacebook />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 w-12 flex items-center justify-center rounded-full
                         bg-pink-500 text-white text-xl shadow-lg
                         hover:bg-white hover:text-pink-500
                         hover:scale-110 transition-all duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 w-12 flex items-center justify-center rounded-full
                         bg-blue-700 text-white text-xl shadow-lg
                         hover:bg-white hover:text-blue-700
                         hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 w-12 flex items-center justify-center rounded-full
                         bg-gray-900 text-white text-xl shadow-lg
                         hover:bg-white hover:text-gray-900
                         hover:scale-110 transition-all duration-300"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      
      <div className="-mt-20">
        <Education />
      </div>

      <div className="-mt-40">
        <Gallery />
      </div>

      <div className="-mt-30">
        <Skills />
      </div>

      <div className="-mt-40">
        <Project />
      </div>

      <div className="-mt-40">
        <AboutUs />
      </div>

      <ContactUs />
    </>
  );
};

export default Home;
