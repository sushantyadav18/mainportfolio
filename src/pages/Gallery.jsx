import React from 'react'
import { motion } from 'framer-motion'; 

const images = [
  {
    
    src: "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/photography-projects-1001.jpg?fit=1500%2C1000&ssl=1",
    title: "Portfolio Design",
  },
  {
   
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNM1S5R22Jc71caHqsfv_MIgUSURpr_omDlQ&s",
    title: "Project UI",
  },
  {
    
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbKIslBnOCZQlIfgbth5zgnwvv_c5TOz59SQ&s",
    title: "React Components",
  },
  {
   
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbKIslBnOCZQlIfgbth5zgnwvv_c5TOz59SQ&s",
    title: "Dashboard Layout",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbKIslBnOCZQlIfgbth5zgnwvv_c5TOz59SQ&s",
    title: "Mobile Responsive",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbKIslBnOCZQlIfgbth5zgnwvv_c5TOz59SQ&s",
    title: "Web Development",
  },
];
const Gallery = () => {
  return (
    <section
    className="bg-green-100  py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-4xl mt-10 font-bold text-center text-gray-800">
          Gallery
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Some moments & project snapshots
        </p>

        {/* Image Grid */}
        <div className="grid gap-6 mt-12 sm:grid-cols-2 md:grid-cols-3">
          {images.map((img) => (
            <div
              className="group relative overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-60 object-cover
                           transform group-hover:scale-110
                           transition duration-500"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 bg-black/60
                           flex items-center justify-center
                           opacity-0 group-hover:opacity-100
                           transition duration-300"
              >
                <p className="text-white text-lg font-semibold">
                  {img.title}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default Gallery;