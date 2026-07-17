import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { education } from "../data/education";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          title="Education"
          subtitle="My academic journey and learning foundation."
        />

        <div className="space-y-8">
          {education.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -5 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
            >
              <div className="flex items-start gap-5">
                <div className="text-blue-500 text-3xl">
                  <FaGraduationCap />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between">
                    <div>
                      <h3 className="text-2xl font-bold">
                        {item.degree}
                      </h3>

                      <p className="text-blue-400 mt-1">
                        {item.institution}
                      </p>
                    </div>

                    <div className="mt-2 md:mt-0 text-right">
                      <p className="text-slate-400">
                        {item.duration}
                      </p>

                      <span className="inline-block mt-2 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">
                        {item.status}
                      </span>
                    </div>
                  </div>

                  <p className="mt-5 text-slate-400 leading-7">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;