import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/Projects";

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Featured Projects"
          subtitle="A selection of projects showcasing my skills in Full Stack Development, REST APIs, and AI-powered applications."
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 mt-12"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;