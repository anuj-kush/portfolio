import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import portfolio from "../data/portfolio";

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          <div>
            <h2 className="text-2xl font-bold text-blue-500">
              {portfolio.fullName}
            </h2>

            <p className="text-slate-400 mt-2">
              {portfolio.role}
            </p>
          </div>

          <div className="flex gap-6 text-2xl">

            <a
              href={portfolio.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href={portfolio.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href={`mailto:${portfolio.email}`}
              className="hover:text-blue-400 transition"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-slate-400">
            © {new Date().getFullYear()} {portfolio.fullName}. All Rights Reserved.
          </p>

          <p className="flex items-center gap-2 text-slate-400 mt-4 md:mt-0">
            Built with React & Tailwind
            <FaHeart className="text-red-500" />
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;