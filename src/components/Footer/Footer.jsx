import React from "react";
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative text-white py-14 px-[10vw] overflow-hidden bg-[#0a0719] border-t border-white/10">

      {/* Floating Gradient Blurs */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-10 left-20 w-32 h-32 bg-purple-600 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-pink-600 blur-3xl rounded-full"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 container mx-auto text-center"
      >

        {/* Name */}
        <motion.h2
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="text-3xl font-extrabold bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
        >
          Piyush Chauhan
        </motion.h2>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 mt-6">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <motion.button
              key={index}
              onClick={() => handleScroll(item.id)}
              whileHover={{ scale: 1.12, color: "#a855f7" }}
              className="text-sm sm:text-base text-gray-300 hover:text-purple-500 transition font-medium"
            >
              {item.name}
            </motion.button>
          ))}
        </nav>

        {/* Social Section */}
        <div className="flex justify-center gap-6 mt-8">
          {[
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/piyush-chauhan-972108259/",
            },
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/piyushchauhan1828/",
            },
            {
              icon: <FaYoutube />,
              link: "https://www.youtube.com/@piyushchauhan2898",
            },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.25,
                rotate: 8,
                color: "#a855f7",
                textShadow: "0px 0px 8px #a855f7",
              }}
              className="text-2xl text-gray-300 transition-all"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-sm text-gray-400 mt-8"
        >
          © 2025 Piyush Chauhan. All rights reserved.
        </motion.p>
      </motion.div>
    </footer>
  );
};

export default Footer;
