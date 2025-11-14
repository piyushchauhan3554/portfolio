import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FiMenu, FiX } from "react-icons/fi";

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
    { id: "work", label: "Work" },
    { id: "education", label: "Education" },
  ];

  const handleMenuItemClick = (id) => {
    setActiveSection(id);
    setIsOpen(false);

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // fallback: set hash so browser can try to jump
      window.location.hash = `#${id}`;
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw]
        ${
          isScrolled
            ? "bg-[#050414]/60 backdrop-blur-md shadow-md"
            : isOpen
            ? "bg-transparent backdrop-blur-lg"
            : "bg-transparent"
        }`}
    >
      <div className="text-white py-5 flex justify-between items-center relative z-50">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Piyush</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Chauhan</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`cursor-pointer transition-colors duration-300 hover:text-[#8245ec] ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/piyushchauhan3554"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec] transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/piyush-chauhan-972108259/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec] transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://leetcode.com/u/piyushchauhan8279/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec] transition-colors"
          >
            <SiLeetcode size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden z-50">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-6 
        bg-[rgba(5,4,20,0.75)] backdrop-blur-2xl 
        bg-linear-to-b from-[#050414]/70 via-[#14102b]/70 to-[#1e1240]/70
        transition-all duration-500 ease-in-out 
        ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleMenuItemClick(item.id)}
            className={`text-lg text-gray-300 hover:text-[#8245ec] transition-colors duration-300 ${
              activeSection === item.id ? "text-[#8245ec]" : ""
            }`}
          >
            {item.label}
          </button>
        ))}

        {/* Social Icons (Mobile) */}
        <div className="flex space-x-5 mt-4">
          <a
            href="https://github.com/piyushchauhan3554"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaGithub size={26} />
          </a>
          <a
            href="https://www.linkedin.com/in/piyush-chauhan-972108259/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaLinkedin size={26} />
          </a>
          <a
            href="https://leetcode.com/u/piyushchauhan8279/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <SiLeetcode size={26} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
