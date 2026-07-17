export const projects = [
  {
    id: 1,
    title: "AI-Powered Online Examination System",
    description:
      "A secure online examination platform with AI proctoring, face detection, tab-switch monitoring, timer, AI tutor, and automated evaluation.",

    image: "/images/exam-system.png",

    tech: [
      "Python",
      "Django",
      "React",
      "PostgreSQL",
      "Gemini API"
    ],

    github: "https://github.com/anuj-kush/AI-Examination-System",
  

    featured: true,
  },

  {
    id: 2,
    title: "Django Job Portal API",

    description:
      "RESTful Job Portal backend with JWT authentication, role-based access, job posting, job applications, filtering, and search.",

    image: "/images/job-portal.png",

    tech: [
      "python",
      "Django",
      "DRF",
      "JWT",
      "PostgreSQL",
      "Render",
      "Swagger"
    ],

    github: "https://github.com/anuj-kush/job-portal-Backend",
    live: "https://job-portal-backend-54ye.onrender.com/api/docs/",

    featured: true,
  },

  {
    id: 3,
    title: "Face Recognition Attendance System",

    description:
      "Attendance management system using OpenCV and face recognition for automatic attendance marking.",

    image: "/images/attendance.png",

    tech: [
      "Python",
      "OpenCV",
      "Django",
      "SQLite"
    ],

    github: "https://github.com/anuj-kush/facerecognistion",
    featured: true,
  },
];

export default projects;