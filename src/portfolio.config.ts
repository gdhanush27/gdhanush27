/**
 * Portfolio template — single source of truth.
 * --------------------------------------------
 * Edit ONLY this file to make the portfolio your own.
 *
 * Asset paths (photo / resume / favicon) accept either:
 *   • a local path under /public  (e.g. "/photo.jpeg")
 *   • a remote URL                (e.g. "https://example.com/me.jpg")
 *
 * The About intro paragraphs support tiny inline accent tokens:
 *   [n:text] → name accent (white, medium)
 *   [c:text] → cyan accent
 *   [p:text] → pink accent
 * And {name} is replaced with `basics.name`.
 */

import type { PortfolioConfig } from "./types";

export const portfolioConfig: PortfolioConfig = {
  /* ---------------- Site / SEO ---------------- */
  site: {
    title: "Dhanush G · Backend & ML Engineer",
    description:
      "Dhanush G — Backend & ML Engineer building Python, FastAPI, RAG and LLM systems.",
    themeColor: "#070711",
    favicon: "/photo.jpeg",
    fontsHref:
      "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@400;500;600;700&display=swap",
  },

  /* ---------------- Personal assets ---------------- */
  assets: {
    photo: "/photo.jpeg",
    resume: {
      src: "/Dhanush-G-Resume.pdf",
      filename: "Dhanush-G-Resume.pdf",
    },
  },

  /* ---------------- Navbar ---------------- */
  navbar: {
    brand: "Dhanush",
    cta: { label: "Let's talk", href: "#contact" },
    links: [
      { href: "#about", label: "About" },
      { href: "#experience", label: "Experience" },
      { href: "#skills", label: "Skills" },
      { href: "#projects", label: "Projects" },
      { href: "#education", label: "Education" },
      { href: "#contact", label: "Contact" },
    ],
  },

  /* ---------------- Loader ---------------- */
  loader: {
    subtitle: "loading portfolio",
    durationMs: 1600,
  },

  /* ---------------- Hero ---------------- */
  hero: {
    greeting: "Hi, I'm",
    taglineLines: ["I build intelligent", "backend systems."],
    ringText:
      "BACKEND · ML · GENAI · FASTAPI · LLMOPS · PYTHON · RAG · DOCKER · BACKEND · ML ·",
    badges: [
      {
        topLabel: "</> 1+ yr",
        topColor: "emerald-400",
        bottomLabel: "building backends",
      },
      {
        topLabel: "⚡ FastAPI",
        topColor: "cyan-400",
        bottomLabel: "+ LLMOps",
      },
    ],
    ctas: {
      primary: { label: "View my work", href: "#projects" },
      secondaryEmailLabel: "Get in touch",
      resumeLabel: "View Resume",
    },
  },

  /* ---------------- About ---------------- */
  about: {
    eyebrow: "01 · About",
    title: "Backend engineer with an ML brain.",
    description:
      "Currently shipping production backend & ML services at MapleLabs (Xoriant). I love turning fuzzy ML ideas into clean, reliable APIs.",
    intro: [
      "I'm [n:{name}] — a Software Engineer specializing in [c:FastAPI], [c:Python] backends and [c:LLM-integrated] services. I've shipped internal platforms adopted by my team, built RAG pipelines from scratch, and quantized models to squeeze out latency.",
      "Outside the day job, I build full-stack tools (Flask, PWA), VS Code extensions, and tinker with multi-modal deep learning. I care a lot about [p:developer experience], clean APIs, and shipping things people actually use.",
    ],
    stats: [
      { label: "Years building backends", value: "1+" },
      { label: "REST endpoints shipped", value: "30+" },
      { label: "Production projects", value: "8" },
      { label: "Workshops led", value: "10+" },
    ],
    currentlyCard: {
      eyebrow: "currently",
      title: "Associate Software Engineer @ MapleLabs (Xoriant)",
      subtitle: "Building NLP & LLM-backed microservices in Python.",
    },
    focusCard: {
      eyebrow: "focus areas",
      items: [
        "FastAPI · Flask · async Python",
        "RAG · LangChain · vector search",
        "Docker · Linux · CI/CD",
        "Developer tooling & DX",
      ],
    },
  },

  /* ---------------- Section meta ---------------- */
  sections: {
    experience: {
      eyebrow: "02 · Career",
      heading: "Experience",
      description:
        "A path from intern to associate engineer — shipping production-grade backend and ML systems.",
    },
    skills: {
      eyebrow: "03 · Toolbox",
      heading: "Skills",
      description:
        "The stack I reach for — from low-level Python tooling to LLM orchestration.",
    },
    projects: {
      eyebrow: "04 · Selected Work",
      heading: "Projects",
      description:
        "A mix of production-adopted internal tools, GenAI experiments, and end-to-end full-stack apps.",
    },
    education: {
      eyebrow: "05 · Academics",
      heading: "Education",
    },
    awards: {
      eyebrow: "06 · Beyond Code",
      heading: "Leadership & Extracurriculars",
      description:
        "Communities, mentorship, and the things I do outside of shipping pull requests.",
    },
    contact: {
      eyebrow: "07 · Let's Connect",
      titleLine1: "Got a backend or",
      titleLine2: "ML problem worth solving?",
      description:
        "I'm open to backend, ML/AI engineering, and interesting collaborations. Drop a note — I respond fast.",
      primaryCta: "Send an email",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      rows: {
        emailLabel: "Email",
        phoneLabel: "Phone",
        locationLabel: "Based in",
      },
    },
  },

  /* ---------------- Footer ---------------- */
  footer: {
    suffix: "Crafted with ❤️",
  },

  /* ---------------- Resume data ---------------- */
  basics: {
    name: "Dhanush G",
    label:
      "Backend & ML Engineer · Python · FastAPI · LLMOps · GenAI Systems",
    summary:
      "Software Engineer with 1+ year of experience building backend systems and ML-integrated services using Python, FastAPI, and Docker. Hands-on with RAG pipelines, LLM inference, NLP model development, and developer tooling. Proven ability to self-initiate and ship production-adopted internal platforms. Seeking backend or ML/AI engineering roles at product-focused teams.",
    email: "gdhanush270@gmail.com",
    phone: "+91 94864 21222",
    website: "https://linkedin.com/gdhanush270",
    location: { address: "Bengaluru, India" },
    profiles: [
      {
        network: "GitHub",
        username: "gdhanush27",
        url: "https://github.com/gdhanush27",
      },
    ],
  },

  work: [
    {
      company: "MapleLabs (A Xoriant Company)",
      position: "Associate Software Engineer",
      location: "Bengaluru, India",
      startDate: "Nov 2025",
      endDate: "Present",
      highlights: [
        "Designed and maintained scalable REST APIs using FastAPI and Flask, supporting NLP and LLM-backed microservices consumed by downstream engineering teams",
        "Integrated LLM inference endpoints and NLP preprocessing pipelines into backend services, reducing manual data processing overhead",
        "Managed containerized service deployments using Docker across development and test environments, ensuring environment reproducibility and deployment consistency",
        "Modeled and queried structured and unstructured data using MySQL and MongoDB for application metadata and ML pipeline artifacts",
        "Self-initiated and shipped an internal multi-service developer tools platform (FastAPI + Flask, 30+ REST endpoints) adopted organically by the team — spanning Jenkins CI tracking, async test report conversion, Apache log analytics, and Markdown documentation hosting",
        "Participated in Agile sprints, pull request reviews, and iterative feature delivery cycles within a cross-functional engineering team",
      ],
    },
    {
      company: "MapleLabs (A Xoriant Company)",
      position: "Software Engineering Intern",
      location: "Bengaluru, India",
      startDate: "Jun 2025",
      endDate: "Oct 2025",
      highlights: [
        "Built REST APIs using FastAPI and Flask for ML inference and data processing features, delivering endpoints integrated into production backend services",
        "Developed Python-based ETL and data processing scripts for NLP experimentation, dataset preparation, and model evaluation workflows",
        "Reduced model inference latency by applying batching strategies and INT8 quantization techniques during experimentation, improving throughput",
        "Maintained version control hygiene using Git and collaborated within an Agile team across sprint-based delivery cycles",
        "Deployed and validated services on Docker containers and AWS EC2 instances, gaining practical cloud deployment and infrastructure experience",
      ],
    },
  ],

  education: [
    {
      institution: "Kongu Engineering College",
      location: "Perundurai, India",
      area: "Artificial Intelligence and Machine Learning",
      studyType: "B.Tech",
      startDate: "2021",
      endDate: "2025",
      gpa: "8.15 / 10",
      courses: [
        "Natural Language Processing",
        "Deep Learning",
        "Machine Learning",
        "Data Structures & Algorithms",
        "Operating Systems",
      ],
    },
  ],

  skills: [
    {
      name: "Languages & Core",
      keywords: [
        "Python 3.x",
        "TypeScript",
        "Bash",
        "REST API",
        "Microservices",
        "OOPs",
        "System Design",
      ],
    },
    {
      name: "ML & NLP",
      keywords: [
        "PyTorch & Tensorflow",
        "Hugging Face",
        "Fine-tuning",
        "Embeddings",
        "Seq2Seq & Attention",
        "CNN / GNN",
        "Multi-Modal Fusion",
        "Anomaly Detection",
      ],
    },
    {
      name: "LLMOps & GenAI",
      keywords: [
        "RAG",
        "LangChain",
        "LlamaIndex",
        "Ollama",
        "Prompt Engineering",
        "MCP",
        "Agentic AI",
        "VS Code LM API",
      ],
    },
    {
      name: "Backend Frameworks",
      keywords: [
        "FastAPI",
        "Flask",
        "Django (Basics)",
        "Webex Bot Framework",
        "ASGI / WSGI",
        "Jinja2",
        "Gunicorn",
        "flask-limiter",
      ],
    },
    {
      name: "Data & Libraries",
      keywords: [
        "pandas",
        "openpyxl",
        "NetworkX",
        "Trimesh",
        "Pillow",
        "Chart.js",
      ],
    },
    {
      name: "Databases",
      keywords: [
        "MySQL",
        "MongoDB",
        "PostgreSQL (Basics)",
        "Vector Databases (FAISS, Chroma)",
      ],
    },
    {
      name: "Backend Engineering",
      keywords: [
        "Authentication & Sessions",
        "SMTP / Email Workflows",
        "Rate Limiting",
        "Background Tasks",
        "Webhooks",
        "PWA",
      ],
    },
    {
      name: "DevOps & Infrastructure",
      keywords: [
        "Docker",
        "Linux",
        "Bash Scripting",
        "Nginx",
        "Git",
        "Jenkins",
        "AWS EC2",
        "Azure",
        "CI/CD",
      ],
    },
  ],

  projects: [
    {
      name: "Internal Developer Tools Platform",
      description:
        "Self-initiated, team-adopted multi-service productivity platform built outside of official deliverables — covering CI monitoring, test reporting, log analytics, and documentation.",
      highlights: [
        "Architected a unified FastAPI + Flask platform with 4 ASGI-mounted backend sub-apps and 2 Flask frontends serving 30+ REST endpoints, adopted organically by the engineering team",
        "Built a real-time Jenkins CI Progress Tracker integrating the Jenkins REST API with multi-stage regex log parsing and a Webex Teams bot (Adaptive Card workflows) for remote CI operations",
        "Engineered an async HTML-to-Excel test report converter with background task queuing, auto-cleanup, and styled multi-sheet workbook generation using pandas and openpyxl",
        "Designed a data-driven documentation system rendering Markdown with TOC, Mermaid diagrams, and syntax highlighting, configured via a JSON-driven hierarchical folder structure",
        "Implemented an Apache log analytics dashboard with Chart.js visualizations, full-text search, and configurable tail-based analysis across access and error logs",
        "Shipped a unified Bash CLI (start/stop/backup/restore) with interactive TUI, hash-based dependency tracking, cron-based daily backups with pruning, and interactive restore with diff preview",
      ],
      keywords: [
        "Python",
        "FastAPI",
        "Flask",
        "ASGI",
        "Webex Bot",
        "Jenkins API",
        "pandas",
        "openpyxl",
        "Bash Scripting",
      ],
    },
    {
      name: "CoClaw - AI Coding Assistant with Persistent Memory",
      description:
        "VS Code extension adding a persistent, workspace-aware memory layer to GitHub Copilot — enabling automatic context retention and remote agent control across coding sessions.",
      url: "https://co-claw.readthedocs.io/en/latest/",
      github: "https://github.com/gdhanush27/co-claw",
      highlights: [
        "Engineered a two-layer memory system (session logs + long-term store) enabling automatic context retention across VS Code sessions, eliminating repetitive re-prompting",
        "Leveraged the VS Code Language Model API to build workspace-aware agentic coding capabilities with scoped file context access",
        "Integrated a Telegram Bridge for remote agent control with full tool access, enabling async workflow management outside the IDE",
        "Built an interactive Memory Browser webview panel for inspecting, editing, and managing memory entries via a structured UI",
        "Shipped model switching, identity customization, and JSON-based memory import/export for cross-machine portability and backup",
      ],
      keywords: [
        "TypeScript",
        "VS Code Extension API",
        "GitHub Copilot API",
        "LLMOps",
        "Agentic AI",
        "MCP",
      ],
    },
    {
      name: "Form Pulse - AI Quiz Generator",
      description:
        "GenAI-powered quiz generation platform using LLMs and retrieval-augmented generation for contextual, document-grounded question creation.",
      github: "https://github.com/gdhanush27/Form-Pulse",
      highlights: [
        "Designed and implemented a RAG pipeline combining embedding-based semantic retrieval with LLM-based question generation for context-grounded quizzes",
        "Built low-latency inference APIs using FastAPI, supporting real-time quiz generation at scale",
        "Integrated vector-based semantic search (FAISS/Chroma) for precise, context-aware question retrieval",
        "Deployed production-ready services using Docker and Nginx with Gunicorn as the WSGI process manager",
      ],
      keywords: [
        "Python",
        "FastAPI",
        "RAG",
        "Embeddings",
        "FAISS",
        "LLMOps",
        "Docker",
        "Nginx",
      ],
    },
    {
      name: "Thanglish-to-English Translator",
      description:
        "NLP translation system for code-mixed Tamil-English (Thanglish) text using sequence-to-sequence deep learning.",
      github: "https://github.com/gdhanush27/Tanglish-to-English",
      highlights: [
        "Designed and trained Seq2Seq models with attention mechanisms for code-mixed language translation using PyTorch",
        "Applied embedding-based sentence representations to improve cross-lingual transfer for low-resource language pairs",
        "Exposed trained models as inference APIs via Flask for integration into downstream applications",
      ],
      keywords: [
        "NLP",
        "Seq2Seq",
        "Attention Mechanism",
        "PyTorch",
        "Hugging Face",
        "Flask",
      ],
    },
    {
      name: "FileShare Pro - Secure File Sharing Platform",
      description:
        "Full-stack Flask file sharing platform with user accounts, file bundles, expiration controls, admin dashboard, and PWA support.",
      url: "https://filesharepro.pythonanywhere.com/",
      github: "https://github.com/gdhanush27/FileShare",
      highlights: [
        "Built a Flask backend supporting drag-and-drop uploads, multi-file bundles, shareable quick-links, download tracking, and configurable file expiration",
        "Implemented secure authentication with password hashing, email verification, password recovery, and CSRF-protected server-side sessions via Flask-Session",
        "Engineered an admin dashboard for user management, per-user storage quotas, server-wide storage limits, and SMTP/email configuration through a settings panel",
        "Shipped a Progressive Web App with installable manifest, service worker, and responsive UI; deployed on PythonAnywhere with JSON-driven runtime configuration",
      ],
      keywords: [
        "Python",
        "Flask",
        "Flask-Session",
        "Flask-Mail",
        "Authentication",
        "PWA",
        "Pillow",
      ],
    },
    {
      name: "HTMLDrop - Instant HTML & Slide Deck Hosting",
      description:
        "Single-file Flask web application for sharing self-contained HTML pages and slideshow decks with shareable links, user accounts, and admin controls.",
      url: "https://htmldrop.pythonanywhere.com/",
      github: "https://github.com/gdhanush27/html-drop",
      highlights: [
        "Built a multi-feature Flask backend supporting HTML page sharing, source remixing, and multi-slide deck hosting with short-link routing and ownership tracking",
        "Implemented full authentication with email verification, password reset, and email-confirmed account deletion using token-based flows and SMTP transactional emails",
        "Designed an admin dashboard with tri-state freeze controls (open/anon-only/all), pinned hero content, hit counters, and per-user activity logging",
        "Hardened endpoints with IP-based rate limiting via flask-limiter, HTML sanitization, and synchronous vs fire-and-forget email delivery for critical and non-critical flows",
        "Deployed to production on PythonAnywhere with environment-based configuration and JSON-backed metadata storage for pages, decks, and users",
      ],
      keywords: [
        "Python",
        "Flask",
        "REST API",
        "Authentication",
        "SMTP",
        "Rate Limiting",
        "Jinja2",
      ],
    },
    {
      name: "3D Mesh Defect Detection - Multi-Modal Deep Learning",
      description:
        "Multi-modal deep learning system for automated defect detection in 3D mesh files, combining CNN-based image classification with GNN-based mesh analysis.",
      github: "https://github.com/gdhanush27/3D-Model-Defect-Detection",
      highlights: [
        "Designed a multi-modal fusion architecture combining a pretrained ResNet CNN for object classification and a 13-layer Graph Neural Network for mesh-level defect detection on OFF files",
        "Achieved 85% fusion-model accuracy by integrating CNN (76%) and GNN (78%) outputs through fully connected fusion layers, outperforming individual modalities",
        "Built end-to-end training and evaluation pipelines using TensorFlow, NetworkX, and Trimesh, processing both ModelNet40 images and a custom proprietary OFF-file dataset",
        "Engineered graph construction from 3D mesh files using node features and adjacency matrices to capture structural defects invisible in 2D image representations",
      ],
      keywords: [
        "TensorFlow",
        "CNN",
        "GNN",
        "Multi-Modal Fusion",
        "ResNet",
        "Trimesh",
        "Deep Learning",
      ],
    },
    {
      name: "Log Analyzer - LLM-Based Semantic Log Analysis",
      description:
        "Semantic log analysis tool using LLMs and embedding-based similarity search for intelligent anomaly detection in system logs.",
      highlights: [
        "Implemented embedding-based vector similarity search (FAISS) for log anomaly detection and pattern clustering",
        "Experimented with LLM fine-tuning and prompt optimization to improve log summarization and root-cause inference accuracy",
        "Built real-time inference REST endpoints for streaming log insights into developer dashboards",
      ],
      keywords: [
        "LLMOps",
        "Embeddings",
        "FAISS",
        "Ollama",
        "Python",
        "Anomaly Detection",
      ],
    },
  ],

  awards: [
    {
      date: "2022 - 2025",
      awarder: "AI Department, Kongu Engineering College",
      title: "Secretary - AI Coding Club",
      highlights: [
        "Led 10+ hands-on workshops on NLP, ML systems, and Python-based AI development for a 100+ member student community",
        "Mentored students through end-to-end ML and NLP project development, from ideation to deployment",
      ],
    },
  ],
};

export default portfolioConfig;
