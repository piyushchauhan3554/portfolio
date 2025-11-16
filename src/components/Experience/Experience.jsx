import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[10vw] md:px-[8vw] lg:px-[14vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Experience</h2>
        <div className="w-28 h-1 bg-purple-500 mx-auto mt-3"></div>
        <p className="text-gray-400 mt-4 text-lg font-medium">
          A timeline of my roles, contributions, and professional journey.
        </p>
      </div>

      <div className="relative">
        {/* Center vertical timeline line */}
        <div className="absolute left-1/2 -translate-x-1/2 w-[3px] bg-white/20 h-full z-0"></div>

        {experiences.map((exp, idx) => (
          <div
            key={exp.id}
            className={`relative mb-20 flex flex-col sm:flex-row items-start`}
          >
            {/* Timeline Node */}
            <div
              className="absolute left-1/2 -translate-x-1/2 top-0 sm:top-1/2 sm:-translate-y-1/2
                         w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border-4
                         border-purple-500 shadow-lg z-20 overflow-hidden"
            >
              <img
                src={exp.img}
                alt={exp.company}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Responsive Card */}
            <div
              className={`
                w-full sm:max-w-lg p-6 sm:p-8 mt-20 sm:mt-0
                rounded-2xl border border-white/10 bg-[#0d0f1c]/70 backdrop-blur-xl
                shadow-[0_0_25px_rgba(130,69,236,0.25)]
                transition-all duration-300 hover:scale-[1.03]
                ${idx % 2 === 0 ? "sm:ml-[55%]" : "sm:mr-[55%]"}
                mx-auto
              `}
            >
              {/* Card Header */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg overflow-hidden border border-white/20">
                  <img
                    src={exp.img}
                    alt={exp.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                  <p className="text-sm text-gray-300">{exp.company}</p>
                  <p className="text-xs text-gray-500 mt-1">{exp.date}</p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-gray-300">{exp.desc}</p>

              {/* Skills */}
              <div className="mt-4">
                <h5 className="text-white font-medium">Skills Used:</h5>
                <ul className="flex flex-wrap gap-2 mt-2">
                  {exp.skills.map((s, i) => (
                    <li
                      key={i}
                      className="bg-purple-600/80 text-white text-xs px-3 py-1 rounded-lg"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
