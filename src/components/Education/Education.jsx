import React, { useRef, useEffect } from "react";
import { education } from "../../constants";
import { motion, useAnimation, useInView } from "framer-motion";

const Education = () => {
  const lineRef = useRef(null);
  const isInView = useInView(lineRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ height: "100%" });
    }
  }, [isInView, controls]);

  return (
    <section
      id="education"
      className="py-24 px-6 md:px-12 lg:px-24 font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white">Education</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg md:text-xl font-semibold">
          My education has been a journey of learning and development.
        </p>
      </div>

      <div className="relative">
        {/* Vertical Timeline Line with scroll-grow */}
        <motion.div
          ref={lineRef}
          className="absolute left-1/2 -translate-x-1/2 bg-white/20 w-1 sm:w-[3px] origin-top z-0"
          initial={{ height: 0 }}
          animate={controls}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />

        {education.map((edu, idx) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="relative mb-20 flex flex-col sm:flex-row items-start"
          >
            {/* Timeline Node */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="absolute left-1/2 -translate-x-1/2 top-0 sm:top-1/2 sm:-translate-y-1/2
                         w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border-4
                         border-purple-500 shadow-lg z-20 overflow-hidden"
            >
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Responsive Card */}
            <motion.div
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 30px rgba(130,69,236,0.4)",
              }}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`w-full sm:max-w-lg p-6 sm:p-8 mt-20 sm:mt-0
                rounded-2xl border border-white/10 bg-[#0d0f1c]/70 backdrop-blur-xl
                shadow-[0_0_25px_rgba(130,69,236,0.25)]
                transition-all duration-300
                ${idx % 2 === 0 ? "sm:mr-[55%]" : "sm:ml-[55%]"}
                mx-auto`}
            >
              {/* Card Header */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg overflow-hidden border border-white/20">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-sm md:text-md text-gray-300">{edu.school}</p>
                  <p className="text-xs md:text-sm text-gray-500 mt-1">{edu.date}</p>
                </div>
              </div>

              {/* Grade */}
              <p className="mt-4 text-gray-300 font-semibold">
                Grade: <span className="text-purple-400">{edu.grade}</span>
              </p>

              {/* Description */}
              <p className="mt-3 text-gray-400 leading-relaxed wrap-break-word">
                {edu.desc}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
