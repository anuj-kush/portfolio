import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import portfolio from "../data/portfolio";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-400 text-lg mb-3">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold">
            Anuj <span className="text-blue-500">Kushwaha</span>
          </h1>

          <div className="mt-6 text-2xl font-semibold text-slate-300">
            <TypeAnimation
              sequence={[
                "Python Developer",
                1500,
                "Django Developer",
                1500,
                "Full Stack Developer",
                1500,
                "AI Enthusiast",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="mt-6 text-slate-400 text-lg max-w-xl leading-8">
            {portfolio.heroDescription}
          </p>

          <div className="mt-4 flex flex-col gap-2 text-slate-400">
            <span>📍 Current: {portfolio.currentLocation}</span>
            <span>🏠 Hometown: {portfolio.hometown}</span>
            <span className="text-green-400">
              ● {portfolio.availability}
            </span>
          </div>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition"
            >
              View Projects
            </a>

            <a
              href={portfolio.resume}
              className="border border-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg transition"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-3xl">
            <a
              href={portfolio.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition"
            >
              <FaGithub />
            </a>

            <a
              href={portfolio.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/profile.jpg`}
            alt="Anuj Kushwaha"
            className="w-80 h-80 rounded-full object-cover border-4 border-blue-500 shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;