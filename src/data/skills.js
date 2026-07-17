import {
  FaPython,
  FaJava,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";

import {
  SiDjango,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiFastapi,
  SiPostman,
  SiVercel,
  SiRender,
  SiOpencv,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiGoogle,
} from "react-icons/si";

const skills = [
  {
    title: "Programming Languages",
    items: [
      { name: "Python", icon: FaPython },
      { name: "Java", icon: FaJava },
      { name: "JavaScript", icon: FaJsSquare },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "SQL", icon: SiMysql },
    ],
  },

  {
    title: "Frameworks & Libraries",
    items: [
      { name: "Django", icon: SiDjango },
      { name: "FASTAPI", icon: SiFastapi },
     
    ],
  },

  {
    title: "Databases",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "SQLite", icon: SiSqlite },
    ],
  },

  {
    title: "AI & Machine Learning",
    items: [
      { name: "OpenCV", icon: SiOpencv },
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "Gemini API", icon: SiGoogle },
    ],
  },

  {
    title: "Tools & Platforms",
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Vercel", icon: SiVercel },
      { name: "Render", icon: SiRender },
    ],
  },
];

export default skills;