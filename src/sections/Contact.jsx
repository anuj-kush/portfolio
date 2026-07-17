import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import SectionTitle from "../components/SectionTitle";
import portfolio from "../data/portfolio";

function Contact() {
  const contacts = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: portfolio.email,
      link: `mailto:${portfolio.email}`,
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: portfolio.phone,
      link: `tel:${portfolio.phone}`,
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "View Profile",
      link: portfolio.github,
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "Connect",
      link: portfolio.linkedin,
    },
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <SectionTitle
          title="Let's Connect"
          subtitle="I'm currently open to internships and full-time opportunities."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {contacts.map((item) => (
            <a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition"
            >
              <div className="text-4xl text-blue-500 mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-3 text-slate-400 break-words">
                {item.value}
              </p>
            </a>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Contact;