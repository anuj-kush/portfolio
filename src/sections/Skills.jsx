import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import skills from "../data/Skills";

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Technical Skills"
          subtitle="My technical expertise across programming, full-stack development, databases, AI/ML, and development tools."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skills.map((category) => (
            <motion.div
              key={category.title}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg"
            >
              <h3 className="mb-6 text-2xl font-bold text-blue-400">
                {category.title}
              </h3>

              <div className="space-y-3">
                {category.items.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-4 rounded-xl bg-slate-800 p-3 hover:bg-slate-700 transition"
                    >
                      <Icon className="text-2xl text-blue-400" />
                      <span className="font-medium">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;