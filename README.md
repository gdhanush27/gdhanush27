# 👋 Hi, I'm Dhanush G

**Backend & ML Engineer · Python · FastAPI · LLMOps · GenAI Systems**

Software Engineer with 1+ year of experience building backend systems and ML-integrated services using **Python, FastAPI, and Docker**. Hands-on with **RAG pipelines, LLM inference, NLP model development, and developer tooling**. I prefer practical, production-adopted solutions over demos that don't ship.

📍 Based in Bengaluru, India

---

## 💼 Experience

### Associate Software Engineer — MapleLabs (A Xoriant Company)
*Nov 2025 – Present · Bengaluru, India*

- Designed and maintained scalable REST APIs using **FastAPI** and **Flask**, supporting NLP and LLM-backed microservices consumed by downstream engineering teams.
- Integrated LLM inference endpoints and NLP preprocessing pipelines into backend services, reducing manual data processing overhead.
- Managed containerized service deployments using **Docker** across development and test environments.
- Modeled and queried structured and unstructured data using **MySQL** and **MongoDB**.
- Self-initiated and shipped an **internal multi-service developer tools platform** (FastAPI + Flask, 30+ REST endpoints) adopted organically by the team — spanning Jenkins CI tracking, async test report conversion, Apache log analytics, and Markdown documentation hosting.

### Software Engineering Intern — MapleLabs (A Xoriant Company)
*Jun 2025 – Oct 2025 · Bengaluru, India*

- Built REST APIs using FastAPI and Flask for ML inference and data processing features.
- Developed Python-based ETL and data processing scripts for NLP experimentation and model evaluation.
- Reduced model inference latency through **batching strategies and INT8 quantization**.
- Deployed and validated services on Docker containers and AWS EC2 instances.

---

## 🛠️ Tech Stack

**Languages & Core**
- Python 3.x, TypeScript, Bash
- REST APIs, Microservices, OOP, System Design

**Backend Frameworks**
- FastAPI, Flask, Django (basics)
- ASGI / WSGI, Jinja2, Gunicorn, flask-limiter
- Webex Bot Framework

**ML & NLP**
- PyTorch, TensorFlow, Hugging Face
- Fine-tuning, Embeddings, Seq2Seq & Attention
- CNN / GNN, Multi-Modal Fusion, Anomaly Detection

**LLMOps & GenAI**
- RAG, LangChain, LlamaIndex, Ollama
- Prompt Engineering, MCP, Agentic AI
- VS Code LM API

**Databases**
- MySQL, MongoDB, PostgreSQL (basics)
- Vector DBs: FAISS, Chroma

**DevOps & Infrastructure**
- Docker, Linux, Bash scripting, Nginx
- Git, Jenkins, CI/CD
- AWS EC2, Azure

---

## 📌 Featured Projects

### 🧰 Internal Developer Tools Platform
Self-initiated, team-adopted multi-service productivity platform — covering CI monitoring, test reporting, log analytics, and documentation.
- Unified **FastAPI + Flask** platform with 4 ASGI-mounted sub-apps and 2 Flask frontends serving **30+ REST endpoints**.
- Real-time **Jenkins CI Progress Tracker** with multi-stage regex log parsing and a Webex Teams bot (Adaptive Cards).
- Async **HTML-to-Excel test report converter** with background task queuing and styled multi-sheet workbook generation.
- Data-driven docs system rendering Markdown with TOC, Mermaid diagrams, and syntax highlighting.
- Apache log analytics dashboard with Chart.js visualizations and tail-based analysis.
- Unified Bash CLI (start/stop/backup/restore) with TUI, hash-based dependency tracking, and cron-based daily backups.

**Tech:** Python, FastAPI, Flask, ASGI, Webex Bot, Jenkins API, pandas, openpyxl, Bash

---

### 🧠 CoClaw — AI Coding Assistant with Persistent Memory
VS Code extension adding a persistent, workspace-aware memory layer to GitHub Copilot.
- Two-layer memory system (session logs + long-term store) for automatic context retention across sessions.
- Workspace-aware agentic coding via the **VS Code Language Model API**.
- **Telegram Bridge** for remote agent control with full tool access.
- Interactive Memory Browser webview, model switching, and JSON-based memory import/export.
- [Docs](https://co-claw.readthedocs.io/en/latest/) · [Marketplace](https://marketplace.visualstudio.com/items?itemName=gdhanush270.CoClaw) · [GitHub](https://github.com/gdhanush27/co-claw)

**Tech:** TypeScript, VS Code Extension API, GitHub Copilot API, LLMOps, Agentic AI, MCP

---

### 📝 Form Pulse — AI Quiz Generator
GenAI-powered quiz generation platform using LLMs and retrieval-augmented generation.
- **RAG pipeline** combining embedding-based semantic retrieval with LLM-based question generation.
- Low-latency inference APIs using FastAPI for real-time quiz generation.
- Vector-based semantic search via **FAISS / Chroma**.
- Deployed via **Docker + Nginx + Gunicorn**.
- [GitHub](https://github.com/gdhanush27/Form-Pulse)

**Tech:** Python, FastAPI, RAG, Embeddings, FAISS, LLMOps, Docker, Nginx

---

### 🔐 FileShare Pro — Secure File Sharing Platform
Full-stack Flask file sharing platform with user accounts, file bundles, expiration controls, admin dashboard, and PWA support.
- Drag-and-drop uploads, multi-file bundles, shareable quick-links, download tracking, and file expiration.
- Secure authentication with password hashing, email verification, password recovery, and **CSRF-protected** sessions.
- Admin dashboard with per-user storage quotas, server-wide limits, and SMTP configuration.
- Installable **Progressive Web App** with service worker.
- [Demo](https://filesharepro.pythonanywhere.com/) · [GitHub](https://github.com/gdhanush27/FileShare)

**Tech:** Python, Flask, Flask-Session, Flask-Mail, Authentication, PWA, Pillow

---

### 📄 HTMLDrop — Instant HTML & Slide Deck Hosting
Single-file Flask web app for sharing self-contained HTML pages and slideshow decks.
- HTML page sharing, source remixing, and multi-slide deck hosting with short-link routing.
- Full auth with email verification, password reset, and email-confirmed account deletion.
- Admin dashboard with tri-state freeze controls, pinned hero content, hit counters, and per-user activity logs.
- **Rate limiting** via flask-limiter, HTML sanitization, and async email delivery.
- [Demo](https://htmldrop.pythonanywhere.com/) · [GitHub](https://github.com/gdhanush27/html-drop)

**Tech:** Python, Flask, REST API, Authentication, SMTP, Rate Limiting, Jinja2

---

### 🧩 3D Mesh Defect Detection — Multi-Modal Deep Learning
Multi-modal DL system for automated defect detection in 3D mesh files.
- Fusion of pretrained **ResNet CNN** (76%) + **13-layer GNN** (78%) → **85% fusion accuracy**.
- Trained on ModelNet40 images and a custom proprietary OFF-file dataset.
- Graph construction from 3D mesh files using node features and adjacency matrices.
- [GitHub](https://github.com/gdhanush27/3D-Model-Defect-Detection)

**Tech:** TensorFlow, CNN, GNN, Multi-Modal Fusion, ResNet, Trimesh

---

### 🔤 Thanglish-to-English Translator
NLP translation system for code-mixed Tamil-English text using sequence-to-sequence deep learning.
- Seq2Seq models with **attention mechanisms** for code-mixed translation in PyTorch.
- Embedding-based sentence representations for cross-lingual transfer on low-resource pairs.
- Inference APIs exposed via Flask.
- [GitHub](https://github.com/gdhanush27/Tanglish-to-English)

**Tech:** NLP, Seq2Seq, Attention, PyTorch, Hugging Face, Flask

---

### 📊 Log Analyzer — LLM-Based Semantic Log Analysis
Semantic log analysis using LLMs and embedding-based similarity search.
- **FAISS** vector similarity search for log anomaly detection and pattern clustering.
- LLM fine-tuning and prompt optimization for log summarization and root-cause inference.
- Real-time inference REST endpoints streaming insights into developer dashboards.

**Tech:** LLMOps, Embeddings, FAISS, Ollama, Python, Anomaly Detection

---

## 🎓 Education

**B.Tech, Artificial Intelligence and Machine Learning**
Kongu Engineering College, Perundurai · 2021 – 2025 · **CGPA: 8.15 / 10**

*Relevant coursework:* Natural Language Processing, Deep Learning, Machine Learning, Data Structures & Algorithms, Operating Systems.

---

## 🏆 Leadership & Community

**Secretary — AI Coding Club** · AI Department, Kongu Engineering College · *2022 – 2025*
- Led **10+ hands-on workshops** on NLP, ML systems, and Python-based AI development for a **100+ member** student community.
- Mentored students through end-to-end ML and NLP project development, from ideation to deployment.

---

## 📊 What I Work On

- Backend system design (FastAPI, Flask, async Python)
- RAG, LLM orchestration, and vector search
- Applied ML for detection and NLP problems
- Developer tooling, DX, and automation
- Docker, Linux, CI/CD

---

## 📫 Connect

- 🌐 LinkedIn: [linkedin.com/in/gdhanush270](https://linkedin.com/in/gdhanush270)
- 💻 GitHub: [github.com/gdhanush27](https://github.com/gdhanush27)
- ✉️ Email: [gdhanush270@gmail.com](mailto:gdhanush270@gmail.com)

---

⭐ If you find any project useful, feel free to star it.

<!--
**gdhanush27/gdhanush27** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.
-->
