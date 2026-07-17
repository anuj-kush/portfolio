import { motion } from "framer-motion";

function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold">
        {title}
      </h2>

      <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </motion.div>
  );
}

export default SectionTitle;