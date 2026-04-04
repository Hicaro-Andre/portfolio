import crSoftex from "/src/assets/certificado/cv-softex.png";
import crFama from "/src/assets/certificado/cr-fama.jpeg";

const formation = {
  title: "Education",
  items: [
    {
      id: 1,
      side: "left",
      status: "Completed",
      course: "Front-End React",
      institution: "Bolsa Futuro Digital - SOFTEX",
      date: "2025 - In-person",
      location: "São Luís - MA",
      cr: "GPA: 9.9/10.0",
      description:
        "Intensive training in front-end development through the Bolsa Futuro Digital program (SOFTEX), focusing on creating modern interfaces and web applications with React. During the course, I developed skills in componentization, API consumption, and development best practices, with a focus on performance, organization, and user experience.",

      highlightsTitle: "Highlights",
      highlights: [
        "Participation as a scholarship holder in the SOFTEX program, focused on training technology talent",
        "Development of complete front-end applications using React",
        "Creation of responsive and reusable interfaces with a focus on UX/UI",
        "Integration with REST APIs and front-end data manipulation",
        "Application of best practices such as componentization, code organization, and versioning"
      ],

      disciplinesTitle: "Main Subjects",
      disciplines: [
        "React Fundamentals",
        "Advanced JavaScript",
        "REST API Consumption",
        "Componentization and State Management",
        "HTML, CSS and Responsiveness"
      ],
      certificateImage: crSoftex,
    },

    {
      id: 2,
      side: "right",
      status: "Completed",
      course: "Bachelor's Degree in Computer Science",
      institution: "Faculdade Pitágoras - FAMA",
      date: "2015 to 2019 - In-person",
      location: "São Luís - MA",
      cr: "GPA: 8.32/10.0",
      description:
        "Solid education in Computer Science, focusing on software development, algorithms, and data structures. Throughout my undergraduate studies, I developed competencies in system modeling, databases, and software engineering, applying logical reasoning to build efficient and scalable solutions.",

      highlightsTitle: "Highlights",
      highlights: [
        "Development of complete academic projects, from modeling to implementation",
        "Practical application of data structures and algorithms in problem-solving",
        "Experience with database modeling and programming",
        "Participation in practical courses focused on software engineering and system development",
        "Development of logical and analytical thinking applied to computing"
      ],

      disciplinesTitle: "Main Subjects",
      disciplines: [
        "Algorithms and Data Structures",
        "Object-Oriented Programming",
        "Databases and Data Modeling",
        "Software Engineering",
        "Operating Systems"
      ],
      certificateImage: crFama,
    }
  ],
};

export default formation;