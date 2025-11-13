import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import profileImage from "../../assets/profile.jpg";
import Tilt from "react-parallax-tilt";

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
      className="relative py-16 px-[7vw] md:px-[10vw] lg:px-[15vw] font-sans bg-[#050414] text-white overflow-hidden"
    >
      {/* === BACKGROUND BLUR BLOBS === */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#8245ec]/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#a855f7]/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative flex flex-col-reverse md:flex-row items-center md:gap-x-16 lg:gap-x-24 z-10">
        {/* ===== Left Side (Text) ===== */}
        <div className="md:w-1/2 text-center md:text-left mt-10 md:mt-0">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-2 leading-tight">
            Hi, I’m
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight bg-linear-to-r from-[#8245ec] to-[#a855f7] bg-clip-text text-transparent">
            Piyush Chauhan
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
            <span className="text-gray-300">I am a&nbsp;</span>
            <span className="text-[#8245ec]">
              {text}
              <Cursor cursorStyle="|" />
            </span>
          </h3>

          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 leading-relaxed">
            I’m a passionate{" "}
            <span className="text-white font-semibold">
              Fullstack Developer
            </span>{" "}
            and tech enthusiast, skilled in building responsive, user-friendly
            web applications using the{" "}
            <span className="text-[#a855f7] font-semibold">MERN Stack</span>. I
            love transforming ideas into functional digital experiences with a
            focus on clean design, high performance, and great usability. I also
            explore{" "}
            <span className="text-[#a855f7] font-semibold">
              AI and Data Science
            </span>{" "}
            through academic and hackathon projects.
          </p>

          <a
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
          </a>
        </div>

        {/* ===== Right Side (Profile Image + Glow) ===== */}
        <div className="md:w-1/2 flex justify-center md:justify-end mb-10 md:mb-0 relative">
          {/* Subtle blurred glow behind image */}
          <div className="absolute w-80 h-80 sm:w-96 sm:h-96 bg-[#8245ec]/40 rounded-full blur-[110px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

          <Tilt
            className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-88 md:h-88 border-4 border-[#8245ec]/60 rounded-full shadow-[0_0_35px_rgba(130,69,236,0.4)]"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.07}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Piyush Chauhan"
              className="w-full h-full rounded-full object-cover"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
