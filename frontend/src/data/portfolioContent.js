export const fallbackPortfolio = {
  profile: {
    full_name: "BETTAYEB MOHAMED AIMEN",
    greeting_text: "Hello, I'm",
    role_title: "Backend Engineer · Applied AI · DevOps",
    hero_image_url: "",
    hero_video_url: "",
    about_me_text:
      "USTHB graduate, co-founder of ILMI, and a builder of scalable software products with a strong focus on backend architecture, developer experience, and AI-enabled workflows.",
    about_me_image_url: "",
    what_i_do_text:
      "I design and ship resilient backend systems, product-grade APIs, automation pipelines, and applied AI experiences with a clean delivery mindset.",
    what_i_do_image_url: "",
    cv_file_url: "",
    contact_email: "bettayeb.a@gmail.com",
    github_link: "https://github.com/bettayeb",
    linkedin_link: "https://www.linkedin.com/in/bettayeb",
  },
  assets: {
    heroVideoUrl: "",
    heroImageUrl: "",
    aboutImageUrl: "",
    servicesImageUrl: "",
    timelineImageUrl: "",
    projectsImageUrl: "",
    footerImageUrl: "",
  },
  experiences: [
    {
      id: 1,
      slug: "usthb-research-lab",
      company_name: "USTHB Research Lab",
      role: "Software Engineer",
      location: "Algiers, Algeria",
      start_date: "2022-09-01",
      end_date: "2024-06-30",
      is_current: false,
      description:
        "Built backend services for academic workflows, optimized data pipelines, and delivered internal tools with Django and FastAPI.",
      highlights: [
        "Designed REST APIs for academic operations",
        "Automated data-heavy research workflows",
        "Improved reliability and maintenance across internal tools",
      ],
      order: 1,
    },
    {
      id: 2,
      slug: "atlas-tech-studio",
      company_name: "Atlas Tech Studio",
      role: "DevOps & Platform Engineer",
      location: "Remote",
      start_date: "2024-07-01",
      end_date: null,
      is_current: true,
      description:
        "Implemented CI/CD pipelines, cloud automation, and observability systems for AI-driven products and internal services.",
      highlights: [
        "Built CI/CD workflows and release automation",
        "Strengthened deployment and monitoring practices",
        "Collaborated closely with product and research teams",
      ],
      order: 2,
    },
    {
      id: 3,
      slug: "freelance-consulting",
      company_name: "Freelance Consulting",
      role: "Full Stack Developer",
      location: "Hybrid",
      start_date: "2025-01-01",
      end_date: null,
      is_current: true,
      description:
        "Shipped polished web products with modern UI systems, performant backend APIs, and production-ready deployment workflows.",
      highlights: [
        "Translated ideas into production-grade interfaces",
        "Balanced speed, quality, and scalability",
        "Created polished UX patterns for portfolio and product work",
      ],
      order: 3,
    },
  ],
  projects: [
    {
      id: 1,
      slug: "neural-workflow-assistant",
      title: "Neural Workflow Assistant",
      description:
        "Applied AI assistant that orchestrates tasks across datasets, notebooks, and APIs with intelligent routing.",
      summary:
        "A high-signal internal assistant for research and productivity workflows, blending structured backend logic with adaptive AI responses.",
      image_url: "",
      live_demo_url: "",
      github_repo_url: "",
      order: 1,
      gallery: ["", "", ""],
      highlights: [
        "Prompted and routed multi-step actions across systems",
        "Designed a modular API architecture",
        "Focused on speed, context retention, and reliability",
      ],
      metrics: [
        { label: "API modules", value: "12+" },
        { label: "Workflows", value: "8" },
        { label: "Latency reduction", value: "34%" },
      ],
      technologies_used: [
        { id: 1, name: "Python", category: "Backend", icon_class_or_url: "", proficiency_percentage: 92 },
        { id: 2, name: "FastAPI", category: "Backend", icon_class_or_url: "", proficiency_percentage: 88 },
        { id: 3, name: "LLMs", category: "AI", icon_class_or_url: "", proficiency_percentage: 85 },
      ],
    },
    {
      id: 2,
      slug: "portfolio-orchestrator",
      title: "Portfolio Orchestrator",
      description:
        "Full-stack portfolio platform with dynamic sections, motion, and backend-driven content updates.",
      summary:
        "A cinematic portfolio system that combines content management, motion design, and clean component architecture.",
      image_url: "",
      live_demo_url: "",
      github_repo_url: "",
      order: 2,
      gallery: ["", "", ""],
      highlights: [
        "Created a reusable content model",
        "Built motion-rich UI sections",
        "Designed for future backend content expansion",
      ],
      metrics: [
        { label: "Sections", value: "7" },
        { label: "Routes", value: "4" },
        { label: "Motion layers", value: "20+" },
      ],
      technologies_used: [
        { id: 4, name: "React", category: "Frontend", icon_class_or_url: "", proficiency_percentage: 88 },
        { id: 5, name: "Django", category: "Backend", icon_class_or_url: "", proficiency_percentage: 86 },
        { id: 6, name: "Framer Motion", category: "Frontend", icon_class_or_url: "", proficiency_percentage: 84 },
      ],
    },
    {
      id: 3,
      slug: "ops-control-panel",
      title: "Ops Control Panel",
      description:
        "DevOps dashboard for deployment visibility, service health, and release coordination.",
      summary:
        "A control surface for deployments and operations with clear status layers and actionable telemetry.",
      image_url: "",
      live_demo_url: "",
      github_repo_url: "",
      order: 3,
      gallery: ["", "", ""],
      highlights: [
        "Built around observability first UX",
        "Reduced friction in release workflows",
        "Mapped operational state into readable cards",
      ],
      metrics: [
        { label: "Services", value: "18" },
        { label: "Deployments", value: "45+" },
        { label: "Incidents", value: "-27%" },
      ],
      technologies_used: [
        { id: 7, name: "Docker", category: "DevOps", icon_class_or_url: "", proficiency_percentage: 86 },
        { id: 8, name: "Nginx", category: "DevOps", icon_class_or_url: "", proficiency_percentage: 82 },
        { id: 9, name: "PostgreSQL", category: "Backend", icon_class_or_url: "", proficiency_percentage: 84 },
      ],
    },
  ],
  skills: [
    { id: 1, name: "Python", category: "Backend", icon_class_or_url: "", proficiency_percentage: 95 },
    { id: 2, name: "Django", category: "Backend", icon_class_or_url: "", proficiency_percentage: 90 },
    { id: 3, name: "FastAPI", category: "Backend", icon_class_or_url: "", proficiency_percentage: 88 },
    { id: 4, name: "React", category: "Frontend", icon_class_or_url: "", proficiency_percentage: 85 },
    { id: 5, name: "Docker", category: "DevOps", icon_class_or_url: "", proficiency_percentage: 87 },
    { id: 6, name: "Nginx", category: "DevOps", icon_class_or_url: "", proficiency_percentage: 82 },
    { id: 7, name: "Applied AI", category: "AI", icon_class_or_url: "", proficiency_percentage: 84 },
    { id: 8, name: "DevOps", category: "DevOps", icon_class_or_url: "", proficiency_percentage: 86 },
  ],
  academicYears: [
    {
      id: 1,
      slug: "usthb-bachelor-foundations",
      year: "2021",
      title: "USTHB Foundations",
      institution: "University of Science and Technology Houari Boumediene",
      description:
        "Built a strong foundation in engineering thinking, algorithms, software design, and applied problem solving.",
      highlights: [
        "Competitive programming mindset",
        "Software engineering fundamentals",
        "Team-based academic delivery",
      ],
      order: 1,
    },
    {
      id: 2,
      slug: "usthb-advanced-systems",
      year: "2022",
      title: "Advanced Systems",
      institution: "USTHB",
      description:
        "Focused on scalable systems, data handling, backend architecture, and research-oriented software practices.",
      highlights: [
        "Backend architecture and APIs",
        "Database design and optimization",
        "Real-world project delivery",
      ],
      order: 2,
    },
    {
      id: 3,
      slug: "ilmi-product-building",
      year: "2024",
      title: "ILMI Product Building",
      institution: "ILMI",
      description:
        "Co-founded and worked on product direction, user experience, and delivery systems for scalable software products.",
      highlights: [
        "Product thinking",
        "Designing for scale",
        "Startup execution rhythm",
      ],
      order: 3,
    },
  ],
};

export const createPortfolioSlug = (value = "") =>
  value
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const findBySlugOrId = (items = [], identifier) => {
  if (!identifier) {
    return null;
  }

  return (
    items.find((item) => String(item.id) === String(identifier)) ||
    items.find((item) => item.slug === identifier) ||
    null
  );
};
