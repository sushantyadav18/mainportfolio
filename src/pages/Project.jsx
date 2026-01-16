//import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";

const projects = [
  {
    img: "https://media.istockphoto.com/id/1516239450/photo/love-portrait-and-family-with-dog-at-animal-shelter-for-adoption-at-kennel.jpg?s=612x612&w=0&k=20&c=ZvxsrI5wTlCCRd1nwhDPiSxTIAZOmQdU-UPFZdGSAO8=",
    title: "Pet adoption",
    description:
      "The Pet Adoption System is an online platform that helps users find and adopt pets easily. It allows shelters to list pets with details and images, while users can browse, search, and submit adoption requests. The system simplifies the adoption process and promotes responsible pet adoption.",
    tech: ["HTML,CSS And PHP"],
    github: "https://github.com/SushantYadav18/pet-adoption",
  },
  {
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/bd97ee194644879.66d7689a38c30.jpg",
    title: "Quiz Mobile Application",
    description:
      "The Pet Adoption System is an online platform that helps users find and adopt pets easily. It allows shelters to list pets with details and images, while users can browse, search, and submit adoption requests. The system simplifies the adoption process and promotes responsible pet adoption.",
    tech: ["XML,JAVA AND "],
    github: "https://github.com/SushantYadav18/pet-adoption",
  },

  {
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/bd97ee194644879.66d7689a38c30.jpg",
    title: "Quiz Mobile Application",
    description:
      "The Pet Adoption System is an online platform that helps users find and adopt pets easily. It allows shelters to list pets with details and images, while users can browse, search, and submit adoption requests. The system simplifies the adoption process and promotes responsible pet adoption.",
    tech: ["XML,JAVA AND "],
    github: "https://github.com/SushantYadav18/pet-adoption",
  }
];

const Project = () => {
  return (
    <section className="bg-gray-300  py-20">
      <div className="mx-auto  px-6 ">
        <h1 className=" text-4xl font-bold text-center pt-10  text-gray-800">
          My Projects
        </h1>

        <p className="text-center text-gray-600 mt-2">
          Some of the work I have built while learning
        </p>

        <div 
          className="grid gap-8 mt-5  sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.div 
            whileHover={{scale:1.01}}
             transition={{ type: "spring", stiffness: 300 }}
             className="bg-blue-300 m-5 rounded-xl p-3 hover:bg-gray-400">
              <h3 className="text-center text-2xl font-bold">
                {project.title}
              </h3>
              <img src={project.img}></img>
              <p>{project.description}</p>
              <span>
                Technology:<b> {project.tech}</b>
              </span>
              <br></br>
              {/* <Link to={project.github}>Github</Link> */}
              <Link
                to="https://github.com"
                className="h-12 w-12 flex items-center justify-center 
               rounded-full bg-gray-900 text-white text-xl
               shadow-lg hover:bg-gray-400
               hover:scale-110 transition-all duration-300"
              >
                <FaGithub />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
