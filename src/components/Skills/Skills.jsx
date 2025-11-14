import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <section
      id="skills"
      className="clip-path-custom py-24 px-[8vw] md:px-[6vw] lg:px-[12vw] font-sans bg-skills-gradient"
    >
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Skills</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-medium">
          Technologies I use across development & projects
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-[#0c0f1a]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-[0_0_35px_rgba(130,69,236,0.20)]"
          >
            <h3 className="text-2xl font-semibold text-gray-200 text-center mb-8">
              {category.title}
            </h3>

            {/* Restore Tilt + Keep Modern Look */}
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              scale={1.03}
              transitionSpeed={900}
              gyroscope={true}
              className="rounded-2xl bg-[#111526]/60 backdrop-blur-xl p-6 shadow-[0_0_40px_rgba(130,69,236,0.25)] border border-white/10"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 bg-[#0f1324]/70 border border-white/10 rounded-xl px-3 py-2 hover:bg-[#171c33] transition duration-200 min-w-0"
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-6 h-6 sm:w-7 sm:h-7"
                    />
                    <span className="text-sm text-gray-300 wrap-break-word whitespace-normal min-w-0">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
