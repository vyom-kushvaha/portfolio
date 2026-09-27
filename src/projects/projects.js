// Replace temporary URLs and illustrative previews with your live project assets.
// Set featured: false to keep a project in the archive only.
export const projects = [
  {
    id: "rakshak",
    title: "R.A.K.S.H.A.K.",
    context: "Smart India Hackathon 2026",
    description:
      "A unified safety platform to enhance campus security through real-time alerts, monitoring and community support.",
    role: "Team Lead / Systems Architect",
    stack: ["React", "Node.js", "MongoDB", "TensorFlow"],
    theme: "safety",
    featured: true,
    link: "https://example.com/projects/rakshak",
    demo: "https://example.com/demos/rakshak",
  },
  {
    id: "urban-furniture",
    title: "Urban Furniture",
    context: "Odoo Hackathon 2026",
    description:
      "Urban Furniture — a project created for Odoo Hackathon 2026. A closer look at the project is coming soon.",
    role: null,
    stack: [],
    theme: "furniture",
    featured: true,
    link: "https://example.com/projects/urban-furniture",
    demo: "https://example.com/demos/urban-furniture",
  },
  {
    id: "greenforce",
    title: "GreenForce",
    context: "SmartKrishi Decision Support",
    description:
      "GreenForce explores decision support for agriculture through SmartKrishi. Full project details are coming soon.",
    role: null,
    stack: [],
    theme: "agriculture",
    featured: true,
    link: "https://example.com/projects/greenforce",
    demo: "https://example.com/demos/greenforce",
  },
  {
    id: "student-management",
    title: "Student Management System",
    context: "C++",
    description:
      "A student management project built with C++. A detailed walkthrough of its features and implementation is coming soon.",
    role: null,
    stack: ["C++"],
    theme: "terminal",
    featured: true,
    link: "https://example.com/projects/student-management",
    github: "https://github.com/",
  },
];
export const featuredProjects = projects.filter((project) => project.featured);
