import { useMemo } from "react";

// Build screenshot URLs served from /public. Capital "S" matches the folder on disk.
const shots = (folder, files) => files.map((file) => `/Screenshots/${folder}/${file}`);
const numbered = (folder, count, ext = "png") =>
  Array.from({ length: count }, (_, i) => `/Screenshots/${folder}/${i + 1}.${ext}`);

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
          slug: "sanad",
          title: "SANAD",
          category: "AI Platform",
          status: "In Production",
          year: "2025",
          tagline: "Collaborative intelligence hub for the Arabic NLP research community.",
          description:
            "A centralized, intelligent platform that unifies Arabic NLP resources and augments them with autonomous AI modules — live in production.",
          overview:
            "SANAD is a collaborative platform built for the Arabic NLP research community. It centralizes datasets, models, papers, and tools that were previously scattered across the web into a single, searchable hub, then layers a suite of intelligent modules on top. Developed during a research collaboration with the Algerian Academy of the Arabic Language (AALA), it is deployed in production on a microservices architecture and backed by a complete administration panel.",
          stack:
            "Django, FastAPI, PostgreSQL, Elasticsearch, Redis, Celery, Docker, Nginx, LLMs, RAG, React",
          highlights: [
            "Agentic RAG assistant with knowledge spanning the entire platform and the Arabic NLP domain — it answers researchers' questions like an embedded expert and platform guide.",
            "Autonomous web-scraping agent that continuously discovers and harvests resources from the web, with an automated quality-assurance layer that filters out low-quality data.",
            "AI-powered CV parsing that streamlines researcher onboarding by auto-extracting profile information at registration.",
            "Semantic search across the full corpus, powered by Elasticsearch and vector embeddings.",
            "Comprehensive admin panel to manage users, resources, modules, and content moderation.",
            "Scalable microservices architecture deployed with Docker, Nginx, and Celery background workers.",
          ],
          screenshots: numbered("SANAD", 19),
        },
        {
          id: 2,
          slug: "chronodz",
          title: "ChronoDZ",
          category: "Multi-Tenant SaaS",
          status: "SaaS",
          year: "2025",
          tagline: "Smart booking & operations platform for modern laundries.",
          cover: "/Screenshots/ChronoDZ/ClientSchedule.png",
          description:
            "A multi-tenant SaaS that digitizes laundry businesses end-to-end — bookings, scheduling, QR ticketing, e-payment, and an in-app assistant.",
          overview:
            "ChronoDZ is a multi-tenant SaaS platform that brings laundry and dry-cleaning businesses online. Each establishment runs as an isolated tenant under a central super-admin, with dedicated interfaces for owners, staff, and customers. The platform handles the full operational loop: customers book and pay online, staff manage the workflow with QR-coded tickets, and owners oversee everything from a real-time dashboard.",
          stack:
            "Django, FastAPI, PostgreSQL, React, Redis, Celery, Docker, E-Payment, Chatbot",
          highlights: [
            "Multi-tenant architecture with isolated Super-Admin, Establishment-Admin, and Client roles.",
            "Real-time booking and scheduling engine with QR-code ticket scanning for drop-off and pickup.",
            "Integrated e-payment for seamless, secure online checkout.",
            "Built-in customer chatbot for instant support and guided booking.",
            "Super-admin console to provision establishments and assistants and to audit cross-tenant history.",
            "Multilingual client experience with localized booking flows.",
          ],
          screenshots: shots("ChronoDZ", [
            "SuperAdminDashboard.png",
            "SuperAdminEstablishments.png",
            "SuperAdminAddEstablishment.png",
            "SuperAdminAssistant.png",
            "SuperAdminAddAssistant.png",
            "SuperAdminHistory.png",
            "SuperAdminSettings.png",
            "AdminLogin.png",
            "AdminSchedule.png",
            "AdminScanner.png",
            "AdminClients.png",
            "AdminClientDetail.png",
            "AdminClientDetails.png",
            "AdminClientTicket.png",
            "AdminPosts.png",
            "ClientMode.png",
            "ClientLanguageSelect.png",
            "ClientLogin.png",
            "ClientSchedule.png",
            "ClientTime.png",
            "ClientBookings.png",
            "ClientBookingConfirmation.png",
            "ClientBookingConfirmation1.png",
          ]),
        },
        {
          id: 3,
          slug: "ilmi",
          title: "ILMI",
          category: "Multi-Tenant SaaS · 3 Mobile Apps",
          status: "Startup",
          year: "2024",
          tagline: "Complete management ecosystem for private schools.",
          description:
            "An end-to-end school-management SaaS with a super-admin, school admin panels, and three dedicated mobile apps for teachers, parents, and students.",
          overview:
            "ILMI is a multi-tenant SaaS that fully digitizes the operation of private schools in Algeria. Each school runs as an isolated tenant under a central super-admin and gains a complete administrative panel covering every side of school life — pedagogy, finance, transport, canteen, and library. Around this core, ILMI ships three native mobile applications, one each for teachers, parents, and students, all connected in real time with instant notifications. I co-founded ILMI and led its technical development.",
          stack:
            "Django, FastAPI, React, React Native, PostgreSQL, Redis, Docker, RAG, LLMs",
          highlights: [
            "Full administrative control for each school: pedagogy (classes, students, teachers, staff), finance (salaries, equipment), transport, canteen & menus, and the school library.",
            "Teacher app: take attendance from a phone, assign homework, raise behavior or lateness flags, and message parents directly.",
            "Parent app: complete visibility into a child's grades, homework, behavior, canteen menu, and real-time bus location — all with instant push notifications.",
            "Student app: access grades and homework plus a paid e-learning platform with extra subjects and teacher-led video courses.",
            "AI tutoring chatbot (parent & student side) with full knowledge of the curriculum, subjects, and each student's performance — it helps students understand lessons and improve their grades, and guides parents in supporting their child.",
            "Multi-tenant by design: every school is an isolated tenant managed from a central super-admin.",
          ],
          screenshots: shots("ILMI", [
            "Login.png",
            "AdminDashboard.png",
            "AdminDashboard2.png",
            "AdminDashboard3.png",
            "AdminDashboard4.png",
            "AdminDashboard5.png",
            "AdminDashboard6.png",
          ]),
        },
        {
          id: 4,
          slug: "veloce",
          title: "Veloce",
          category: "Luxury Marketplace",
          status: "Client Work",
          year: "2025",
          tagline: "A premium marketplace for luxury cars in Algeria.",
          description:
            "A high-end web platform for showcasing and selling luxury and exotic vehicles in Algeria, with a refined, conversion-focused experience.",
          overview:
            "Veloce is a premium automotive marketplace tailored to the Algerian luxury-car market. The experience is deliberately image-forward and refined, presenting each vehicle as a showcase piece and guiding high-intent buyers from first impression to direct inquiry. Every design decision serves a sense of exclusivity and trust befitting the luxury segment.",
          stack: "React, Tailwind CSS, Django, PostgreSQL",
          highlights: [
            "Curated luxury inventory with rich, image-forward vehicle showcases.",
            "Detailed specification pages designed to convert high-intent buyers.",
            "Refined, performance-oriented UI tailored to a premium automotive audience.",
            "Direct inquiry flow connecting buyers to sellers.",
          ],
          screenshots: numbered("Veloce", 2),
        },
        {
          id: 5,
          slug: "lumieredental",
          title: "Lumière Dental",
          category: "Clinic Website · Multilingual",
          status: "Client Work",
          year: "2025",
          tagline: "Multilingual presence & online booking for a modern dental clinic.",
          description:
            "A multilingual website for a dental clinic with in-site appointment booking, direct WhatsApp messaging, an AI assistant, and full service presentation.",
          overview:
            "Lumière Dental is a polished, multilingual website built for a dental clinic that needed both a professional online presence and a real patient-acquisition channel. Beyond clearly presenting the clinic's services and differentiators, the site lets patients book an appointment directly online, reach the clinic instantly over WhatsApp, and get answers from an intelligent assistant — removing every point of friction between a visitor and a booked appointment.",
          stack: "React, Tailwind CSS, i18n, WhatsApp API, Google Maps, AI Assistant",
          highlights: [
            "Multilingual interface that reaches a broader patient base.",
            "In-website appointment booking — patients reserve a slot without a phone call.",
            "One-tap direct WhatsApp messaging for instant patient contact.",
            "Intelligent virtual assistant that answers common questions and guides bookings.",
            "Clear presentation of all clinic services and the reasons to choose the clinic, building trust.",
            "Embedded Google Maps location for effortless navigation to the clinic.",
          ],
          screenshots: numbered("LumiereDental", 5),
        },
        {
          id: 6,
          slug: "kingcar",
          title: "KingCar",
          category: "Service Website",
          status: "Client Work",
          year: "2025",
          tagline: "Professional presence for an auto-electrical diagnostics service.",
          description:
            "A professional website for a car electrical-diagnostics service that presents its expertise, builds trust, and drives direct customer contact.",
          overview:
            "KingCar is a conversion-focused website for an automotive electrical-diagnostics specialist. It communicates the full range of diagnostic services, explains clearly why the service stands out, and makes it effortless for customers to get in touch — with direct call/chat actions and an embedded map to the workshop.",
          stack: "React, Tailwind CSS, Google Maps",
          highlights: [
            "Complete presentation of diagnostic services and capabilities.",
            "Trust-building sections explaining why the service stands out.",
            "Direct click-to-call / chat button for instant customer contact.",
            "Embedded Google Maps location for quick navigation to the workshop.",
          ],
          screenshots: numbered("KingCar", 6),
        },
        {
          id: 7,
          slug: "reb7a",
          title: "Reb7a",
          category: "Desktop Application",
          status: "Completed",
          year: "2023",
          tagline: "Stock & inventory control for small businesses.",
          description:
            "A desktop inventory and stock-management solution for small businesses, with full CRUD, product tracking, and reporting.",
          overview:
            "Reb7a is a desktop application built to give small local businesses real control over their stock and inventory. It provides complete CRUD operations, continuous product tracking, and report generation, all backed by a reliable MySQL database and wrapped in a clean, practical interface designed for everyday operational use.",
          stack: "Java, Swing, MySQL",
          highlights: [
            "Complete CRUD operations for products, stock, and records.",
            "Real-time product tracking with low-stock awareness.",
            "Report generation for sales and inventory insights.",
            "Clean desktop UI tailored to everyday small-business operations.",
            "Reliable MySQL-backed data persistence.",
          ],
          screenshots: numbered("Reb7a", 7),
        },
        {
          id: 8,
          slug: "isps",
          title: "ISPS 2027",
          category: "Conference Website",
          status: "Client Work",
          year: "2026",
          tagline:
            "Official site for the 14th International Conference on Intelligent and Scalable Processing Systems.",
          description:
            "The official website for ISPS 2027 (USTHB, Algiers) — a complete academic-conference platform covering the attendee, author, and organizer journey.",
          overview:
            "Official website for the 14th International Conference on Intelligent and Scalable Processing Systems (ISPS), held 18–20 April 2027 at USTHB, Algiers, Algeria. The site is a complete conference platform that serves every audience — prospective authors, attendees, sponsors, and the organizing committee — through a clear, well-structured information architecture.",
          stack: "React, Tailwind CSS, Framer Motion",
          highlights: [
            "Home, Important Dates, and a full Call for Papers covering the main track and six specialized tracks.",
            "Program section with the conference schedule, keynote speakers, and conference events.",
            "Author resources: submission guidelines, conference proceedings, and camera-ready submission.",
            "Organization pages: conference chairs, program & organizing committees, and previous editions.",
            "Registration with fees and online payment.",
            "Attending guide: venue & hotels, about the region, and visa information.",
            "Dedicated sponsors section for institutional and industrial partners.",
          ],
          screenshots: shots("ISPS", [
            "1.png",
            "2.png",
            "3.png",
            "4.png",
            "5.png",
            "6.png",
            "7.png",
            "8.png",
            "10.png",
            "11.png",
          ]),
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
