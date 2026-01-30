import React from "react";
import { motion } from "framer-motion";
import { RiFirebaseLine } from "react-icons/ri";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaFigma,
  FaJava ,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiMysql } from "react-icons/si";

/* Animation Variants */
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {duration: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

/* Skill Categories */
const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "HTML", icon: <FaHtml5 />, color: "text-orange-600" },
      { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-600" },
      { name: "JavaScript", icon: <FaJs />, color: "text-yellow-500" },
       { name: "Java", icon: <FaJava />, color: "text-red-500" },
       { name: "Java", icon: <FaJava />, color: "text-red-500" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: <FaReact />, color: "text-cyan-500" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-sky-400" },
      { name: "Node.js", icon: <FaNodeJs />, color: "text-green-600" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, color: "text-green-700" },
      { name: "MySQL", icon: <SiMysql />, color: "text-blue-700" },
    ],
  },
  {
    title: "Tools & Design",
    skills: [
      { name: "GitHub", icon: <FaGithub />, color: "text-gray-800" },
      { name: "Figma", icon: <FaFigma />, color: "text-pink-600" },
    ],
  },
];

const Skills = () => {
  return (
    <section className="bg-green-100 py-25 ">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-800"
        >
          My Skills
        </motion.h2>

        <p className="text-center text-gray-600 mt-2">
          Technologies & tools I use to build projects
        </p>

        {/* Categories */}
        <div className="mt-16 border-2-red space-y-16">

          {skillCategories.map((category, index) => (
            <div key={index}>
              {/* Category Title */}
              <h3 className="text-2xl font-semibold text-gray-700 mb-8 text-center">
                {category.title}
              </h3>

              {/* Skills Grid */}
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                
                className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-5"
              >
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    variants={item}
                    whileHover={{ scale: 1.15, rotate: 3 }}
                    className="relative flex flex-col items-center justify-center
                               h-32 w-32 mx-auto rounded-full 
                               bg-white hover:bg-gray-300 shadow-lg cursor-pointer"
                  >
                    {/* Icon */}
                    <div className={`text-4xl ${skill.color}`}>
                      {skill.icon}
                    </div>

                    {/* Name */}
                    <p className="mt-2 text-sm font-semibold text-gray-700">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}

 <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Skills Summary
          </h3>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 text-gray-700">
            <div>
              <h4 className="font-semibold mb-2">Programming Languages</h4>
              <ul className="list-disc ">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript (ES6+)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Frameworks & Libraries</h4>
              <ul className="list-disc l">
                <li>React.js</li>
                <li>Tailwind CSS</li>
                <li>Node.js (Basic)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Databases</h4>
              <ul className="list-disc">
                <li>MongoDB</li>
                <li>MySQL</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Tools & Design</h4>
              <ul className="list-disc ">
                <li>Git & GitHub</li>
                <li>Figma</li>
                <li>VS Code</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
