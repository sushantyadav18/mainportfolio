import React from 'react'
import { motion } from 'framer-motion'; 

const images = [
  {
    
    src: "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/photography-projects-1001.jpg?fit=1500%2C1000&ssl=1",
    title: "Portfolio Design",
  },
  {
   
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fHww",
    title: "Project UI",
  },
  {
    
    src: "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
    title: "React Components",
  },
  {
   
    src: "https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Coding",
  },
  {
    src: "https://images.unsplash.com/photo-1566004100631-35d015d6a491?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFieXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Cute Baby",
  },
  {
    src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEhhcHB5JTIwbGlmZXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Baby Smile",
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