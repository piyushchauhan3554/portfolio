import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile.jpg";

const About = () => {
  const [text] = useTypewriter({
    words: [
      "Fullstack Developer",
      "Competitive Programmer",
      "Tech Enthusiast",
      "AI/ML Enthusiast",
    ],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <section
      id="about"
      className="relative py-20 px-[7vw] md:px-[10vw] lg:px-[15vw] font-sans bg-[#050414] text-white overflow-hidden"
    >
      {/* Background Animated Blobs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute -top-20 -left-20 w-72 h-72 bg-[#8245ec]/40 rounded-full blur-3xl animate-pulse"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1.8 }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-[#a855f7]/30 rounded-full blur-3xl animate-pulse"
      ></motion.div>

      <div className="relative flex flex-col-reverse md:flex-row items-center md:gap-x-16 lg:gap-x-24 z-10">

        {/* LEFT TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 text-center md:text-left mt-10 md:mt-0"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold mb-2 leading-tight"
          >
            Hi, I’m
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight bg-linear-to-r from-[#8245ec] to-[#a855f7] bg-clip-text text-transparent"
          >
            Piyush Chauhan
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6"
          >
            <span className="text-gray-300">I am a&nbsp;</span>
            <span className="text-[#8245ec]">
              {text}
              <Cursor cursorStyle="|" />
            </span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 leading-relaxed"
          >
            I’m a passionate{" "}
            <span className="text-white font-semibold">Fullstack Developer</span>{" "}
            skilled in building responsive, fast and intuitive web applications
            using the{" "}
            <span className="text-[#a855f7] font-semibold">MERN Stack</span>.
            I love creating smooth digital experiences and exploring{" "}
            <span className="text-[#a855f7] font-semibold">
              AI & Data Science
            </span>{" "}
            through academic and hackathon projects.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            href="https://drive.google.com/file/d/1CQUkmI9rF36H6nxQNbz-SzDHWxfjAKPI/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_#8245ec]"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 8px #8245ec, 0 0 20px #8245ec",
            }}
          >
            Download CV
          </motion.a>
        </motion.div>

        {/* RIGHT IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex justify-center md:justify-end mb-10 md:mb-0 relative"
        >
          {/* Animated Glow Behind Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute w-80 h-80 sm:w-96 sm:h-96 bg-[#8245ec]/40 rounded-full blur-[110px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          ></motion.div>

          {/* Tilted Profile Image */}
          <Tilt
            className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-88 md:h-88 border-4 border-[#8245ec]/60 rounded-full shadow-[0_0_35px_rgba(130,69,236,0.4)]"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.07}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <motion.img
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              src={profileImage}
              alt="Piyush Chauhan"
              className="w-full h-full rounded-full object-cover"
            />
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
