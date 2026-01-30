import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="min-h-screen  bg-green-100 py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-800"
        >
          Contact Me
        </motion.h1>

        <p className="text-center text-gray-600 mt-3">
          Let’s connect and build something amazing
        </p>

        {/* Content */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 bg-white p-6 rounded-lg shadow">
              <FaEnvelope className="text-2xl text-blue-600" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">Shusant.kumar2gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-6 rounded-lg shadow">
              <FaPhoneAlt className="text-2xl text-blue-600" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">+977 9811813386</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-6 rounded-lg shadow">
              <FaMapMarkerAlt className="text-2xl text-blue-600" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-600">Nepal</p>
              </div>
            </div>
          </motion.div>

          {/* Right Form (UI Only) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                type="button"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
