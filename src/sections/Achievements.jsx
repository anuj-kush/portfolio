import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";
import { achievements } from "../data/achievements";

function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Achievements"
          subtitle="Highlights of my learning and development journey."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -6 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
            >
              <FaAward className="text-4xl text-yellow-400 mb-4" />

              <h3 className="text-xl font-bold">
                {item.title}
              </h3>

              <p className="text-slate-400 mt-3">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;