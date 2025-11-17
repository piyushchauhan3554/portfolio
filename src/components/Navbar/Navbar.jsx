import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  const handleMenuItemClick = (id) => {
    setActiveSection(id);
    setIsOpen(false);

    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
  const sections = menuItems.map((item) =>
    document.getElementById(item.id)
  );

  const handleScroll = () => {
    let current = "";

    sections.forEach((sec) => {
      if (!sec) return;
      const rect = sec.getBoundingClientRect();

      // Adjust threshold (VERY IMPORTANT)
      if (rect.top <= window.innerHeight * 0.25 && rect.bottom >= 150) {
        current = sec.id;
      }
    });

    setActiveSection(current);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);



  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw]
        ${
          isScrolled
            ? "bg-[#050414]/60 backdrop-blur-md shadow-lg shadow-[#8245ec]/20"
            : "bg-transparent"
        }`}
    >
      <div className="text-white py-5 flex justify-between items-center relative z-50">
        {/* Logo with animation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg font-semibold cursor-pointer hover:scale-105 transition"
        >
          <span className="text-[#8245ec]">&lt;</span>
          <span>Piyush</span>
          <span className="text-[#8245ec]">/</span>
          <span>Chauhan</span>
          <span className="text-[#8245ec]">&gt;</span>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`relative group text-base tracking-wide
                  ${activeSection === item.id ? "text-[#8245ec]" : ""}
                `}
              >
                {item.label}

                {/* Animated underline */}
                <span
                  className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#8245ec] group-hover:w-full transition-all duration-300"
                ></span>
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex space-x-4">
          {[ 
            { icon: <FaGithub size={24} />, link: "https://github.com/piyushchauhan3554" },
            { icon: <FaLinkedin size={24} />, link: "https://www.linkedin.com/in/piyush-chauhan-972108259/" },
            { icon: <SiLeetcode size={24} />, link: "https://leetcode.com/u/piyushchauhan8279/" }
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.18 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-gray-300 hover:text-[#8245ec] transition"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden z-50">
          {isOpen ? (
            <FiX className="text-3xl text-[#8245ec]" onClick={() => setIsOpen(false)} />
          ) : (
            <FiMenu className="text-3xl text-[#8245ec]" onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="md:hidden fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-6 
              bg-[#050414]/80 backdrop-blur-2xl transition-all z-40"
          >
            {menuItems.map((item, i) => (
              <motion.button
                key={item.id}
                onClick={() => handleMenuItemClick(item.id)}
                className="text-xl text-gray-300 hover:text-[#8245ec] transition"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {item.label}
              </motion.button>
            ))}

            {/* Social Icons Mobile */}
            <div className="flex space-x-6 mt-6">
              {[ 
                { icon: <FaGithub size={26} />, link: "https://github.com/piyushchauhan3554" },
                { icon: <FaLinkedin size={26} />, link: "https://www.linkedin.com/in/piyush-chauhan-972108259/" },
                { icon: <SiLeetcode size={26} />, link: "https://leetcode.com/u/piyushchauhan8279/" }
              ].map((item, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#8245ec]"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
