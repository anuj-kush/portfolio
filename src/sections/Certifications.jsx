import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";
import certificates from "../data/certificates";

function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Certifications"
          subtitle="Courses and certifications that have strengthened my technical skills."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              whileHover={{ y: -8 }}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <div className="flex items-center gap-4">
                <FaCertificate className="text-4xl text-yellow-400" />

                <div>
                  <h3 className="text-xl font-semibold">
                    {certificate.title}
                  </h3>

                  <p className="text-blue-400">
                    {certificate.issuer}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex justify-between items-center">
  <span className="text-slate-400">
    {certificate.year}
  </span>

  <div className="flex gap-3">
    <a
      href={certificate.pdf}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
    >
      View Certificate
    </a>

    {certificate.credential && (
      <a
        href={certificate.credential}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg border border-blue-500 px-4 py-2 text-blue-400 hover:bg-blue-500 hover:text-white transition"
      >
        Credential
      </a>
    )}
  </div>
</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;