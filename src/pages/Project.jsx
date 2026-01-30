import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";

const projects = [
  {
    img: "https://media.istockphoto.com/id/1516239450/photo/love-portrait-and-family-with-dog-at-animal-shelter-for-adoption-at-kennel.jpg?s=612x612&w=0&k=20&c=ZvxsrI5wTlCCRd1nwhDPiSxTIAZOmQdU-UPFZdGSAO8=",
    title: "Pet Adoption System",
    description:
      "An online platform that helps users find and adopt pets easily while allowing shelters to manage listings and adoption requests.",
    tech: ["HTML", "CSS", "PHP"],
    github: "https://github.com/SushantYadav18/pet-adoption",
  },
  {
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/bd97ee194644879.66d7689a38c30.jpg",
    title: "Quiz Mobile Application",
    description:
      "A mobile quiz app with MCQs, scoring system, and smooth UI built using Java and XML.",
    tech: ["Java", "XML", "Android"],
    github: "https://github.com/SushantYadav18/pet-adoption",
  },
  {
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/bd97ee194644879.66d7689a38c30.jpg",
    title: "Quiz Mobile Application",
    description:
      "A feature-rich quiz application with interactive UI and clean architecture.",
    tech: ["Java", "XML", "Android"],
    github: "https://github.com/SushantYadav18/pet-adoption",
  },
];

const Project = () => {
  return (
    <section className="bg-green-100 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-gray-800"
        >
          My Projects
        </motion.h1>

        <p className="text-center text-gray-600 mt-3">
          Some of the projects I’ve built while learning and experimenting
        </p>

        {/* Project Cards */}
        <div className="grid gap-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl overflow-hidden 
                         bg-white/70 backdrop-blur-lg 
                         shadow-lg hover:shadow-2xl 
                         transition-all duration-300"
            >
              {/* Image */} 
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover 
                             group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 
                                group-hover:opacity-100 transition"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full 
                                 bg-blue-100 text-blue-700 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Button */}
                <div className="mt-6 flex justify-end">
                  <Link
                    to={project.github}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 
                               rounded-lg bg-gray-900 text-white text-sm
                               hover:bg-gray-700 transition"
                  >
                    <FaGithub />
                    Code
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
