import React, { useState } from "react";
import { projects } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="work"
      className="py-24 px-[8vw] md:px-[6vw] lg:px-[14vw] font-sans relative bg-[#0a0b14]"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-white tracking-wide">
          Projects
        </h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          className="w-32 h-1 bg-purple-500 mx-auto mt-3"
        ></motion.div>

        <p className="text-gray-400 mt-5 text-lg font-medium">
          A showcase of my latest work, built with modern technologies and clean design.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="border border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl shadow-xl 
            overflow-hidden cursor-pointer hover:shadow-purple-500/40 hover:-translate-y-2 
            transition-all duration-300"
          >
            <div className="p-3">
              <motion.img
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4 }}
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>

              <p className="text-gray-400 mt-3 line-clamp-3">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-[#1a1528] text-purple-400 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#0f101a] rounded-xl shadow-xl w-[90%] max-w-3xl overflow-hidden relative"
            >
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-white text-3xl hover:text-purple-500"
                >
                  &times;
                </button>
              </div>

              <div className="px-6 pb-10">
                <div className="flex justify-center">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="rounded-xl w-[90%] shadow-lg"
                  />
                </div>

                <h3 className="text-3xl text-white font-bold mt-6">
                  {selectedProject.title}
                </h3>

                <p className="text-gray-400 mt-4 text-sm md:text-base">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {selectedProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-[#1d172c] text-purple-400 px-3 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-8">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    className="w-1/2 text-center bg-gray-800 hover:bg-purple-700 text-white py-2 rounded-lg"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    className="w-1/2 text-center bg-purple-600 hover:bg-purple-800 text-white py-2 rounded-lg"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;
