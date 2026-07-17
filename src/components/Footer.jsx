import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import portfolio from "../data/portfolio";

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        <div>
          <h2 className="text-xl font-bold text-blue-500">
            {portfolio.fullName || portfolio.name}
          </h2>

          <p className="text-slate-400">
            {portfolio.role}
          </p>
        </div>

        <div className="flex gap-5 text-2xl mt-5 md:mt-0">

          <a href={portfolio.github} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a href={portfolio.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>

          <a href={`mailto:${portfolio.email}`}>
            <FaEnvelope />
          </a>

        </div>

      </div>

      <p className="text-center text-slate-500 mt-8">
        © {new Date().getFullYear()} {portfolio.fullName || portfolio.name}. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;