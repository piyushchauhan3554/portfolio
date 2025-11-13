import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const About = () => {
  const [text] = useTypewriter({
    words: [
      "Fullstack Developer",
      "Competitive Programmer",
      "Tech Enthusiast",
      "AI/ML Enthusiast",
    ],
    loop: 0, // 0 = infinite
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* left side */}

        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* greeting */}

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Hii, I am
          </h1>
          {/* name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Piyush Chauhan
          </h2>
          {/* skills heading with typing effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight">
            <span className="text-white">I am a&nbsp;</span>
            <span className="text-[#8245ec]">
              {text}
              <Cursor cursorStyle="|" />
            </span>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default About;
