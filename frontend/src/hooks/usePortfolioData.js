import { useMemo } from "react";

const usePortfolioData = () => {
  return useMemo(() => {
    const CLOUD = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || "";
    const cloudUrl = (publicId, type = "image") => {
      if (!CLOUD) return "";
      if (type === "video") {
        return `https://res.cloudinary.com/${CLOUD}/video/upload/q_auto/${publicId}.mp4`;
      }
      return `https://res.cloudinary.com/${CLOUD}/image/upload/f_auto,q_auto/${publicId}`;
    };

    return {
      profile: {
        fullName: "BETTAYEB MOHAMED AIMEN",
        greeting: "Hello I'm",
        roleTitle: "Full Stack Developer & AI Engineer",
        aboutMe:
          "A Computer Science graduate from USTHB specializing in software engineering and AI, with hands-on experience building full-stack web applications, intelligent systems, and mobile solutions using Django, FastAPI, and React. Passionate about applied AI, NLP, and building scalable products that solve real-world problems.",
        contactEmail: "maimen.bettayeb@gmail.com",
        github: "https://github.com/itsbtb18",
        linkedin: "https://www.linkedin.com/in/aymen-btb/",
        whatsapp: "https://wa.me/qr/DAV3H42DC6Y6M1",
        instagram: "https://www.instagram.com/btb.aymen/",
        reddit: "https://www.reddit.com/user/aymenbtb/",
        stackoverflow: "https://stackoverflow.com/users/32268713/bettayeb-mohamed-aimen",
        // Use the about image as the hero poster/fallback until a dedicated hero cutout exists.
        heroImageUrl: cloudUrl("hero-cutout_meijxo", "image"),
        heroVideoUrl: cloudUrl("hero-bg-video_tyxaqc", "video"),
        aboutPhotoUrl: cloudUrl("about-photo_p2hkwa", "image"),
      },
      experiences: [
        {
          id: 1,
          role: "Web Developer (Freelance)",
          company: "Freelance",
          duration: "03/2024 - Present",
          highlights: [
            "Designed and developed automated websites for clients, managing projects end-to-end.",
            "Delivered custom web solutions independently, handling client communication and technical deployment.",
          ],
        },
        {
          id: 2,
          role: "Intern",
          company: "Algerian Academy of the Arabic Language (AALA)",
          duration: "09/2025 - 01/2026",
          highlights: [
            "Led collaboration with a research team to design and deploy SANAD, a collaborative platform for Arabic NLP.",
            "Contributed to backend development, intelligent module integration, and server installation.",
            "Applied LLMs, RAG architectures, and deep learning techniques to improve interactivity.",
          ],
        },
        {
          id: 3,
          role: "Intern",
          company: "Box Market",
          duration: "06/2025 - 07/2025",
          highlights: [
            "Developed and deployed an automation and performance optimization project for processing Metro France card creation requests.",
          ],
        },
      ],
      projects: [
        {
          id: 1,
          title: "SANAD",
          imageUrl: "",
          stack: "Django, FastAPI, PostgreSQL, Elasticsearch, Redis, Celery, Docker, LLMs",
          description: "Intelligent Collaborative Platform for Arabic NLP Researchers.",
          details: [
            "Centralized Arabic NLP resources for developers.",
            "Integrated 6 intelligent modules including an Agentic RAG Chatbot, autonomous web scraping agent, machine translation, and semantic search.",
            "Deployed on a production server using Docker, Nginx, and microservices architecture.",
          ],
        },
        {
          id: 2,
          title: "ILMI",
          imageUrl: "",
          stack: "Django, FastAPI, React Native, PostgreSQL, Docker",
          description: "School Management Multi-Tenant SaaS Platform.",
          details: [
            "Co-founded and led development supporting mobile roles for Students, Professors, and Parents.",
            "Covers 8 core modules including pedagogical management, e-learning, finance, and a RAG-powered AI chatbot.",
            "Designed as a future commercial startup targeting schools at scale.",
          ],
        },
        {
          id: 3,
          title: "Reb7a",
          imageUrl: "",
          stack: "Java, Swing, MySQL",
          description: "Inventory & Stock Management Desktop App.",
          details: [
            "Targeted at small local businesses with full CRUD operations, product tracking, and low-stock alerts.",
          ],
        },
      ],
      skills: [
        {
          id: 1,
          category: "Backend",
          items: ["Python", "Django", "FastAPI", "Node.js", "Celery", "Redis"],
        },
        {
          id: 2,
          category: "Frontend",
          items: ["React", "HTML/CSS"],
        },
        {
          id: 3,
          category: "DevOps & Infrastructure",
          items: ["Docker", "Nginx", "Git/GitHub", "Microservices Architecture"],
        },
      ],
      academicYears: [
        {
          id: 1,
          year: "2021 - 2024",
          title: "Bachelor's in Computer Science",
          institution: "USTHB (University of Science and Technology Houari Boumediene)",
          description:
            "Built a strong foundation in algorithms, software design, databases, and research-oriented software practices.",
          highlights: [
            "Specialized in Software Engineering",
            "Hands-on projects in systems design",
            "Advanced coursework in AI and NLP",
          ],
        },
        {
          id: 2,
          year: "2024 - Present",
          title: "Co-Founder & Tech Lead",
          institution: "ILMI",
          description:
            "Co-founded and led development of a multi-tenant school management SaaS platform, driving technology choices and product features.",
          highlights: [
            "Designed scalable backend and database systems",
            "Integrated RAG-powered AI chatbot features",
            "Managed frontend-backend integrations",
          ],
        },
      ],
    };
  }, []);
};

export default usePortfolioData;
