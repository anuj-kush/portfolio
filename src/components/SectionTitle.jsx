import { motion } from "framer-motion";

function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
      className="mb-16 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white">
        {title}
      </h2>

      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-blue-500"></div>

      {subtitle && (
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

export default SectionTitle;