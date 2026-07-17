import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg"
    >
      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        className="h-60 w-full object-cover"
      />

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mt-4 text-slate-400 leading-7">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-blue-600/20 px-3 py-1 text-sm text-blue-400 border border-blue-500/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 hover:bg-slate-700 transition"
          >
            <FaGithub />
            GitHub
          </a>

          {project.live && (
        <a
    href={project.live}
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 hover:bg-blue-700 transition"
  >
    <FaExternalLinkAlt />
    Live Demo
  </a>
)}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;