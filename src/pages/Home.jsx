import { Typewriter } from "react-simple-typewriter";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

import Gallery from "./Gallery";
import Education from "./Education";
import Project from "./Project";
import Skills from "./Skills";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <div
        className="relative  w-full min-h-screen flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/bgimage.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/60"></div>

        <div className="relative z-10 lg:ml-75 md:mt-20 mt-20 max-w-7xl mx-auto px-6 w-full">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12">
            {/* TEXT */}
            <div className="text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
                Hi, I’m <span className="text-blue-600">Sushant Yadav</span>
              </h1>

              <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700">
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

                <a
                  href="/SushantCv.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3
             rounded-full bg-purple-600 text-white
             hover:bg-purple-700 transition"
                >
                  <FaDownload />
                  Download Resume
                </a>
              </div>

              {/* SOCIAL ICONS */}
              <div className="mt-8 flex gap-6 justify-center md:justify-start">
                <SocialIcon link="https://facebook.com" color="blue-600">
                  <FaFacebook />
                </SocialIcon>
                <SocialIcon link="https://instagram.com" color="pink-500">
                  <FaInstagram />
                </SocialIcon>
                <SocialIcon link="https://linkedin.com" color="blue-700">
                  <FaLinkedin />
                </SocialIcon>
                <SocialIcon link="https://github.com" color="gray-900">
                  <FaGithub />
                </SocialIcon>
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative flex justify-center">
              <img
                src="/1profile.jpg"
                alt="profile"
                className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
              />

              <div
                className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500
                           animate-[spin_12s_linear_infinite]
                           hover:[animation-play-state:paused]"
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTIONS */}
      <section className="mt-16">
        <Education />
      </section>
      <section className="mt-16">
        <Gallery />
      </section>
      <section className="mt-16">
        <Skills />
      </section>
      <section className="mt-16">
        <Project />
      </section>
      <section className="mt-16">
        <AboutUs />
      </section>
      <section className="mt-16">
        <ContactUs />
      </section>
    </>
  );
};

const SocialIcon = ({ link, color, children }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`h-12 w-12 flex items-center justify-center rounded-full
                bg-${color} text-white text-xl shadow-lg
                hover:bg-white hover:text-${color}
                hover:scale-110 transition-all duration-300`}
  >
    {children}
  </a>
);

export default Home;
