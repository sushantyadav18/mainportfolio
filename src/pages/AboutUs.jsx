import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="bg-gray-200 min-h-screen py-30">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-800"
        >
          About Me
        </motion.h1>

        <p className="text-center text-gray-600 mt-3">
          Get to know me better
        </p>

        {/* Content */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <motion.img
            src="1profile.jpg"
            alt="profile"
            className="w-80 h-80 mx-auto rounded-full object-cover shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold text-gray-800">
              Hi, I'm <span className="text-blue-600">Sushant Yadav</span>
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              I am a passionate <strong>BCA student</strong> and a 
              <strong> MERN Stack Developer</strong> with a strong focus on
              frontend development. I enjoy building clean, responsive, and
              user-friendly web applications.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              I am continuously learning modern technologies like React,
              Tailwind CSS, Framer Motion, and backend tools to improve my
              skills and deliver better digital experiences.
            </p>

            {/* Info */}
            <div className="mt-6 space-y-2 text-gray-700">
              <p><strong>Education:</strong> Bachelor of Computer Applications (BCA)</p>
              <p><strong>Focus:</strong> Frontend & MERN Stack</p>
              <p><strong>Goal:</strong> Become a professional full-stack developer</p>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex gap-4">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Contact Me
              </a>
              <Link to="/projects"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
              >
                View Projects
              </Link>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
