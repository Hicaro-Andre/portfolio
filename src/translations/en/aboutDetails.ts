const aboutDetails = {
  sectionAbout: "About the Project",
  sectionFeatures: "Main Features",
  sectionGallery: "Gallery",
  btnGallery: "View all photos",
  sectionStatus: "Status",
  sectionTechs: "Technologies",
  sectionInfo: "Information",
  labelDuration: "Duration",
  labelTeam: "Team",
  labelClient: "Client",
  noStatus: "No status",
  defaultImageDesc: "Project image",
  items: {
    1: {
      description: "Project developed as a prototype redesign of the Rede NAVE website, within the context of the Bolsa Futuro Digital (SOFTEX) program, as an integrative project. The proposal focuses on modernizing the digital experience, usability, and performance. The application was built using modern technologies and a component-based architecture, aiming for better organization and scalability. As a differential, it integrates Storyblok as a headless CMS, allowing dynamic content management independent of the code, facilitating maintenance and platform evolution.",
      duration: "2 months",
      team: "3 developers",
      client: "Rede Nave",
      features: [
        "Modern and responsive interface, adapted for different devices",
        "Component-based architecture, promoting reuse and scalability",
        "Integration with headless CMS (Storyblok) for dynamic content management",
        "Real-time content updates without the need for deployment",
        "Ease of maintenance and continuous application evolution",
      ],
      imagesDescription: [
        "Homepage with an overview of the platform, highlighting mission, learning tracks, events, and relevant content in a clear and strategic way.",
        "Section dedicated to learning tracks, organizing content in a structured way to facilitate user learning and navigation.",
        "Area presenting the main community events, focused on engagement and active user participation.",
        "Institutional page presenting Rede NAVE’s proposal, highlighting its purpose, social impact, and role in female empowerment.",
        "Section focused on user support, providing guidance and contact channels to improve the platform experience.",
        "Authentication screen that allows secure access to the platform, ensuring a personalized user experience.",
        "Registration screen for new users, allowing account creation and access to platform resources.",
        "Password recovery screen that allows users to reset their password easily and securely via registered email. Clean and objective interface focused on usability.",
        "Personalized dashboard presenting a summary of user progress, including courses, certificates, and activities. Organized interface with visual indicators for quick and intuitive tracking.",
        "Rede NAVE admin panel, with indicators such as active users, completed tracks, issued certificates, events, performance charts, and participant rankings.",
        "Integration with Storyblok, allowing dynamic updates of texts, images, and page content without the need for programming."
      ],
    },

    2: {
      description: "This project is being developed within the Bolsa Futuro Digital (SOFTEX) residency program, aiming to create a modern automated service solution. The application is built with a focus on organization, scalability, and development best practices, aiming to optimize communication and improve user experience. The project also explores a flexible architecture, allowing continuous evolution and easy maintenance.",
      // duration: "4 months",
      team: "1 developer",
      client: "",
      features: [
        "Automated WhatsApp attendance with instant responses",
        "Integration with WAHA for message management",
        "Automation flows built with n8n",
        "Containerization with Docker for easy deploy and scalability",
        "Organized and centralized communication in one place",
      ],
      imagesDescription: [],
    },
  },
};

export default aboutDetails;