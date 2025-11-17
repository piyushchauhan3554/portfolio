import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section
      id="skills"
      className="clip-path-custom py-24 px-[8vw] md:px-[6vw] lg:px-[12vw] font-sans bg-skills-gradient"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Skills
        </h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-medium">
          Technologies I use across development & projects
        </p>
      </motion.div>

      {/* Categories */}
      <div className="grid md:grid-cols-2 gap-12">
        {SkillsInfo.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: index * 0.1 }}
            className="bg-[#0c0f1a]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-[0_0_35px_rgba(130,69,236,0.20)]"
          >
            {/* Category Title */}
            <h3 className="text-2xl font-semibold text-gray-200 text-center mb-8">
              {category.title}
            </h3>

            {/* Tilt Card */}
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              scale={1.03}
              transitionSpeed={900}
              gyroscope={true}
              className="rounded-2xl bg-[#111526]/60 backdrop-blur-xl p-6 shadow-[0_0_40px_rgba(130,69,236,0.25)] border border-white/10"
            >
              {/* Skill Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 place-items-center">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center bg-[#0f1324]/70 border border-white/10 rounded-xl px-3 py-3 hover:bg-[#171c33] transition duration-200 w-full"
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-7 h-7 sm:w-8 sm:h-8"
                    />

                    {/* ⭐ FIXED TEXT WRAP – NO MORE OVERFLOW */}
                    <span className="text-xs sm:text-sm text-gray-300 text-center break-words leading-tight mt-2 max-w-[90px]">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
