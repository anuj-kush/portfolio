import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="About Me"
          subtitle="A quick introduction about who I am and what I enjoy building."
        />

        <motion.div
          className="bg-slate-900 border border-slate-800 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-slate-300 leading-8 text-lg">
            I'm Anuj Kushwaha, a Python and Django Full Stack Developer with a passion for building scalable web applications and AI-powered solutions. I enjoy creating clean user experiences, designing REST APIs, and continuously learning modern technologies to solve real-world problems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;