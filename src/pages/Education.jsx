import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: " Saraswati Multiple Campus (Tribhuvan University)",
    Address: "Lainchur,Thamel ,Kathmandu",
    year: "2021 – Present",
    description:
      "Studying core subjects such as Programming, Data Structures, Web Development, Computer Networks, and Distributed Systems.",
  },
  {
    degree: "+2 in Computer Science",
    institution: "Model Multiple Campus ",
    Address: "Janakpur",
    year: "2019 – 2021",
    description:
      "Learned fundamentals of computer science, basic programming, and problem-solving skills.",
  },
  {
    degree: "Secondary Education (SEE)",
    institution: "Jay Kishan Secondary School ",
    Address: "Rautahat,Nepal",
    year: "2019",
    description:
      "Completed secondary level education with a focus on mathematics and science.",
  },
];

const Education = () => {
  return (
    <section className="bg-green-100 py-25  ">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-500">
          Education
        </h2>

        <p className="text-center text-blue-400 mt-2">My academic background</p>

        <div
          className="m-auto gap-4"
        >
          {educationData.map((edu, index) => (
            <motion.div
               whileHover={{ scale: 1.05 }}
               transition={{duration:0.6}}
              key={index}
              className="relative mt-9 bg-blue-100 rounded-3xl shadow-lg p-6 hover:bg-gray-300 "
            >
              <span className="">
                <FaGraduationCap />
              </span>

              <h3 className="text-xl font-semibold text-gray-800">
                {edu.degree}
              </h3>

              <p className="text-blue-600 font-medium mt-1">
                {edu.institution}
              </p>

              <p className="text-blue-600 font-medium mt-1">{edu.Address}</p>

              <p className="text-sm text-gray-500 mt-1">{edu.year}</p>

              <p className="text-gray-600 mt-4 text-sm">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
