import React, { useState, useEffect } from "react";
import ProjectModal from "./ProjectModal";
import resumePDF from "./assets/Akhilesh_Nuthalapati_FullStack_Resume.pdf";

const projectDetails = {
  portfolio: {
    title: "Personal Portfolio Website",
    subtitle: "React • Custom UI • Responsive",
    summary:
      "A fully custom-built portfolio to showcase my work, skills and achievements with a modern dark UI.",
    howItWorks:
      "Built using React components, smooth navigation, modular sections, dynamic project filtering and glass card visuals.",
    features: [
      "Responsive modern UI",
      "Custom project filter system",
      "Dynamic project modal",
      "Professional dark theme",
      "Clean reusable components",
    ],
    techStack: "React.js, JavaScript, CSS3, HTML5",
    algorithm: "No ML algorithm — focused on UI/UX + React architecture.",
    usefulness:
      "Provides a clean, professional identity for recruiters and clients.",
    challenges: [
      "Building consistent UI across all devices",
      "Clean alignment of complex sections",
      "Creating dynamic modal without routing",
    ],
    github: "https://github.com/akhileshnuth",
  },

  faceAttendance: {
    title: "Face Recognition Attendance System",
    subtitle: "Python • OpenCV • LBPH • MySQL",
    summary:
      "A real-time attendance system using webcam-based face recognition with data stored in MySQL.",
    howItWorks:
      "Faces are detected using Haar Cascades, trained using LBPH, and matched in real-time. Attendance is logged into MySQL along with timestamps.",
    features: [
      "Live face detection & recognition",
      "LBPH training module",
      "Auto dataset creation",
      "Real-time attendance logging",
      "MySQL database integration",
      "Tkinter GUI",
    ],
    techStack: "Python, OpenCV, Tkinter, MySQL",
    algorithm: "LBPH (Local Binary Pattern Histogram) for face recognition.",
    usefulness:
      "Eliminates manual attendance marking, reduces proxy issues, and speeds up student marking process.",
    challenges: [
      "Handling different lighting conditions",
      "Accurate face detection in real-time",
      "Avoiding false positives for unknown faces",
    ],
    github: "https://github.com/akhileshnuth",
  },

  parkinsons: {
    title: "Parkinson's Disease Detection",
    subtitle: "Machine Learning • Streamlit • Health AI",
    summary:
      "An academic project that predicts Parkinson's disease from biomedical voice measurements with a Streamlit-based UI.",
    howItWorks:
      "The dataset features are processed, scaled and passed through ML models like SVM/Logistic Regression to classify Parkinson's presence. A Streamlit interface allows users to input values and view predictions.",
    features: [
      "Clinical dataset preprocessing",
      "Feature extraction",
      "Multiple ML classifier models",
      "Accuracy comparison",
      "Interactive Streamlit UI",
    ],
    techStack: "Python, Streamlit, ML Algorithms, Pandas, NumPy",
    algorithm: "SVM, Logistic Regression (from your project PDF).",
    usefulness:
      "Helps in early-stage detection of Parkinson's, reducing incorrect diagnoses, with an easy-to-use web interface.",
    challenges: [
      "Handling imbalanced dataset",
      "Selecting meaningful biomedical features",
      "Avoiding overfitting",
    ],
    github: "https://github.com/akhileshnuth/parkinsons-disease-prediction",
    liveDemo: "https://parkinsons-disease-prediction-cro438tn2ubd2okdqyr7hz.streamlit.app/",
  },

  multiDisease: {
    title: "Multiple Disease Prediction System",
    subtitle: "Machine Learning • Streamlit • Health Analytics",
    summary:
      "A system to predict multiple diseases like Diabetes, Heart disease, and Parkinson's using ML models with a Streamlit front-end.",
    howItWorks:
      "Each disease has its own dataset and ML model. Inputs are given through Streamlit forms, processed through trained classifiers, and real-time predictions are shown on the dashboard.",
    features: [
      "Predicts 3–4 diseases",
      "Streamlit UI workflow",
      "Clean input form system",
      "Individual ML pipelines",
    ],
    techStack: "Python, Streamlit, Pandas, ML Models",
    algorithm: "Random Forest, SVM, Logistic Regression (based on your PPT).",
    usefulness:
      "Quick health prediction interface without requiring medical expertise, accessible through a web-style UI.",
    challenges: [
      "Balancing different datasets",
      "Creating unified UI for multiple models",
      "Maintaining prediction accuracy",
    ],
    github: "https://github.com/akhileshnuth",
  },

  dataAnalysis: {
    title: "Data Analysis & Preprocessing",
    subtitle: "Pandas • NumPy • Visualization",
    summary:
      "Exploratory analysis and preprocessing on datasets such as Titanic, IPL, sales data, etc.",
    howItWorks:
      "Data is cleaned, missing values treated, outliers removed, visualizations generated and insights extracted.",
    features: [
      "Data cleaning",
      "Feature engineering",
      "Visualization",
      "Insights extraction",
    ],
    techStack: "NumPy, Pandas, Matplotlib",
    algorithm: "No ML — EDA + preprocessing workflows.",
    usefulness: "Shows real-world Python data analysis capability.",
    challenges: [
      "Handling dirty datasets",
      "Outlier treatment",
      "Choosing correct visualizations",
    ],
    github: "https://github.com/akhileshnuth/data-analysis-practice",
  },

  objectDetection: {
    title: "Real-Time Object Detection System",
    subtitle: "Python • YOLOv5 • OpenCV • Tkinter",
    summary:
      "A real-time object detection application that uses YOLO to detect objects in live video streams.",
    howItWorks:
      "YOLOv5 runs on each video frame from the webcam, detecting objects with bounding boxes and labels. A Tkinter UI lets the user start/stop detection and view results.",
    features: [
      "Live webcam-based object detection",
      "YOLOv5 inference pipeline",
      "Tkinter-based control panel",
      "Support for multiple object classes",
    ],
    techStack: "Python, YOLOv5, OpenCV, Tkinter",
    algorithm: "YOLOv5 for real-time object detection.",
    usefulness:
      "Can be used for surveillance, analytics, and automation tasks that require fast object detection.",
    challenges: [
      "Real-time performance optimization",
      "Managing different resolutions and FPS",
      "Ensuring accurate detections across scenes",
    ],
    github: "https://github.com/akhileshnuth",
  },

  // ── NEW PROJECTS ──────────────────────────────────────────────────

  navodayanFoods: {
    title: "Navodayan Foods Website",
    subtitle: "HTML • CSS • JavaScript • Business",
    summary:
      "Developed a fully functional business website for Navodayan Foods, focusing on clean UI, product presentation, and responsive design.",
    howItWorks:
      "A static business website that highlights product offerings, company details, and provides a seamless user experience across all devices.",
    features: [
      "Responsive and modern UI",
      "Business-focused layout",
      "Optimized for performance and accessibility",
      "Product showcase section",
      "Clean navigation and structure",
    ],
    techStack: "HTML, CSS, JavaScript",
    algorithm: "No ML — focused on UI/UX and business presentation.",
    usefulness:
      "Provides Navodayan Foods a professional online presence to reach customers and present their products effectively.",
    challenges: [
      "Ensuring cross-device responsiveness",
      "Clean product layout design",
      "Performance and accessibility optimization",
    ],
    github: "https://gitlab.com/rahulteja1/navodayan-foods",
    liveDemo: "https://navodayanfoods.com/",
  },

  deepseekMistral: {
    title: "DeepSeek + Mistral API Integration",
    subtitle: "Python • LLM APIs • AI Integration",
    summary:
      "Built an AI integration system combining DeepSeek and Mistral APIs to enable advanced LLM-based responses and processing.",
    howItWorks:
      "The system orchestrates multiple LLM APIs, routing requests and combining outputs to enable richer AI-powered responses and multi-model interaction.",
    features: [
      "Multi-LLM integration",
      "API-based architecture",
      "Scalable design for AI workflows",
      "DeepSeek + Mistral model support",
    ],
    techStack: "Python, DeepSeek API, Mistral API",
    algorithm: "Multi-model LLM orchestration and API chaining.",
    usefulness:
      "Demonstrates how to combine multiple AI models for more capable and flexible AI-powered applications.",
    challenges: [
      "Handling different API response formats",
      "Orchestrating multi-model workflows",
      "Managing latency across API calls",
    ],
    github: "https://github.com/akhileshnuth/DEEPSEEK-MISTRAL-API-Integration",
  },

  crewai: {
    title: "Current Affairs Multi-Agent System",
    subtitle: "Python • CrewAI • Firecrawl • GPT-4o-mini",
    summary:
      "A two-agent AI pipeline that searches the web for today's top news and delivers a clean, structured Markdown briefing — powered by CrewAI with Firecrawl for research and GPT-4o-mini for summarization.",
    howItWorks:
      "A Researcher agent uses Firecrawl to search multiple credible sources (Reuters, BBC, Bloomberg, etc.) for the top 5 current affairs stories from today. It hands structured data — headline, source, key facts, and category — to a Summarizer agent, which formats everything into a polished Markdown briefing with summaries, significance, and a Quick Digest section. The two agents run sequentially via CrewAI.",
    features: [
      "Two specialized agents: Researcher + Summarizer",
      "Firecrawl-powered live web search",
      "Top 5 stories with headlines, sources & key facts",
      "Structured Markdown output with category tags",
      "Quick Digest section with daily themes & geographies",
      "Custom query support (topic-specific or date-specific)",
      "Prioritizes credible sources: Reuters, AP, BBC, Bloomberg",
    ],
    techStack: "Python, CrewAI, Firecrawl API, OpenAI GPT-4o-mini, python-dotenv",
    algorithm:
      "Sequential multi-agent pipeline — Researcher collects structured news data, Summarizer formats it into a Markdown briefing using context passed between tasks.",
    usefulness:
      "Generates a fully sourced, neutral, structured daily news briefing in 1–3 minutes — useful for staying informed without manually scanning multiple news sites.",
    challenges: [
      "Ensuring only today's stories are returned, not outdated news",
      "Diverse topic coverage by running varied search queries",
      "Preventing fabrication — summarizer is strictly constrained to researcher output",
    ],
    github: "https://github.com/akhileshnuth/Current-affairs-crewai",
  },

  cricketBooking: {
    title: "Cricket Net Booking System",
    subtitle: "Django • Python • SQLite • Tailwind CSS",
    summary:
      "A production-ready Django-based cricket net booking platform built for a real client, with user authentication, scheduling, and an admin dashboard.",
    howItWorks:
      "Users log in and book available cricket nets for weekends only. The system auto-assigns Net A or Net B, prevents duplicate bookings, and provides real-time AJAX availability checks.",
    features: [
      "Weekend-only booking calendar",
      "Auto net assignment (Net A → Net B)",
      "Duplicate booking prevention",
      "Real-time AJAX availability check",
      "Booking cancellation from dashboard",
      "Full Django admin panel",
      "Mobile responsive UI",
    ],
    techStack: "Django, Python, SQLite, Tailwind CSS, Flatpickr, JavaScript",
    algorithm: "Sequential net assignment with unique constraint validation.",
    usefulness:
      "Eliminates manual booking coordination for cricket ground management, deployed live for real client usage.",
    challenges: [
      "Preventing race conditions in net assignment",
      "Calendar UI restricted to weekends only",
      "Building real-time availability without page reload",
    ],
    github: "https://github.com/akhileshnuth",
    liveDemo: "https://cricketbooking.k3sol.com/login/?next=/dashboard/",
  },

  lexGlobal: {
    title: "Lex Global Business Website",
    subtitle: "HTML • CSS • JavaScript • Corporate",
    summary:
      "Created a professional static website for Lex Global, focusing on branding, clarity, and structured content delivery.",
    howItWorks:
      "A clean corporate website built with static web technologies, optimized for fast loading, SEO, and professional brand presentation.",
    features: [
      "Clean corporate design",
      "Fast-loading static pages",
      "SEO-friendly structure",
      "Responsive layout",
    ],
    techStack: "HTML, CSS, JavaScript",
    algorithm: "No ML — static site focused on design and performance.",
    usefulness:
      "Provides Lex Global a professional digital presence with clear content structure for business clients.",
    challenges: [
      "Matching corporate branding requirements",
      "Ensuring cross-browser compatibility",
      "SEO and performance optimization",
    ],
    github: "https://github.com/akhileshnuth",
    liveDemo: "https://lexglobal.solutions/",
  },
};

/* ================== PROJECT LIST WITH CATEGORIES ================== */
const projects = [
  {
    key: "portfolio",
    name: "Portfolio Website",
    tech: "React, Tailwind CSS",
    desc: "Personal responsive portfolio to showcase my work.",
    url: "https://github.com/akhileshnuth",
    category: "Web",
  },
  {
    key: "faceAttendance",
    name: "Face Recognition Attendance System",
    tech: "Python, OpenCV, Tkinter, MySQL",
    desc: "Real-time face recognition attendance system.",
    url: "https://github.com/akhileshnuth",
    category: "CV",
  },
  {
    key: "parkinsons",
    name: "Parkinson's Disease Detection",
    tech: "Python, Streamlit, Machine Learning",
    desc: "Detects early Parkinson's symptoms from data.",
    url: "https://github.com/akhileshnuth",
    category: "ML",
  },
  {
    key: "multiDisease",
    name: "Multiple Disease Prediction",
    tech: "Python, Streamlit, Machine Learning",
    desc: "Predicts multiple diseases with ML models.",
    url: "https://github.com/akhileshnuth",
    category: "ML",
  },
  {
    key: "objectDetection",
    name: "Real-Time Object Detection",
    tech: "Python, YOLOv5, OpenCV",
    desc: "Detects objects in real-time using YOLO.",
    url: "https://github.com/akhileshnuth",
    category: "DL",
  },
  {
    key: "dataAnalysis",
    name: "Data Analysis & Preprocessing",
    tech: "Python, Pandas, Visualizations",
    desc: "Data cleaning, preprocessing and visual insights.",
    url: "https://github.com/akhileshnuth",
    category: "Data / Analytics",
  },
  // ── NEW PROJECTS ──────────────────────────────────────────────────
  {
    key: "navodayanFoods",
    name: "Navodayan Foods Website",
    tech: "HTML, CSS, JavaScript",
    desc: "Business website with product showcase and responsive design.",
    url: "https://navodayanfoods.com/",
    category: "Web",
  },
  {
    key: "deepseekMistral",
    name: "DeepSeek + Mistral API Integration",
    tech: "Python, LLM APIs",
    desc: "Multi-model AI integration combining DeepSeek and Mistral.",
    url: "https://github.com/akhileshnuth/DEEPSEEK-MISTRAL-API-Integration",
    category: "AI",
  },
  {
    key: "crewai",
    name: "Current Affairs Multi-Agent System",
    tech: "Python, CrewAI, LLM APIs",
    desc: "Multi-agent system to fetch and summarize real-time current affairs.",
    url: "https://github.com/akhileshnuth/Current-affairs-crewai",
    category: "AI",
  },
  {
    key: "cricketBooking",
    name: "Cricket Net Booking System",
    tech: "Django, Python, SQLite, Tailwind CSS",
    desc: "Production cricket net booking platform with auth and admin panel.",
    url: "https://cricketbooking.k3sol.com/login/?next=/dashboard/",
    category: "Web",
  },
  {
    key: "lexGlobal",
    name: "Lex Global Business Website",
    tech: "HTML, CSS, JavaScript",
    desc: "Professional corporate website with SEO-friendly structure.",
    url: "https://lexglobal.solutions/",
    category: "Web",
  },
];

const roleBadges = [
  "Full-Stack Developer opportunities",
  "Python / React Developer roles",
  "Machine Learning & Computer Vision roles",
  "Internships & Freelance work",
];

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [badgeIndex, setBadgeIndex] = useState(0);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.body.className = "dark-theme";
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBadgeIndex((prev) => (prev + 1) % roleBadges.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleNavClick = (section) => {
    setActiveSection(section);
    scrollToTop();
  };

  const openLink = (url) =>
    window.open(url, "_blank", "noopener noreferrer");

  const openProjectModal = (detailKey) => {
    const details = projectDetails[detailKey];
    if (!details) return;
    setSelectedProject(details);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Akhilesh_Nuthalapati_FullStack_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="app">
      {/* HEADER */}
      <header className="header">
        <div className="header-inner">
          <div className="brand">
            <div className="brand-avatar">A</div>
            <div>
              <div className="brand-text-main">Akhilesh Nuthalapati</div>
              <div className="brand-text-sub">
                Developer • Python • React • ML • CV
              </div>
            </div>
          </div>

          <div className="header-right">
            <nav className="nav">
              {["home", "projects", "experience", "about", "contact"].map((item) => (
                <button
                  key={item}
                  className={`nav-item ${
                    activeSection === item ? "nav-item-active" : ""
                  }`}
                  onClick={() => handleNavClick(item)}
                >
                  {item.toUpperCase()}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* MAIN PAGE */}
      <div className="page">
        <main className="main">
          {/* LEFT MAIN COLUMN */}
          <section className="hero">
            <div className="hero-inner">
              <div className="hero-pill">
                <span className="hero-dot" />
                <span className="hero-pill-prefix">Open to</span>
                <span key={badgeIndex} className="hero-pill-text">
                  {roleBadges[badgeIndex]}
                </span>
              </div>

              <h1 className="hero-title">
                HEY! I'M <span>AKHILESH</span>
              </h1>
              <p className="hero-subtitle">
                Developer passionate about building real applications.
              </p>

              <p className="hero-tagline">
                I specialize in Python, React.js, Machine Learning, Computer
                Vision, and full-stack development with modern tools and clean
                UI designs.
              </p>

              {/* Quick skills row – hidden on Projects page */}
              {activeSection !== "projects" && (
                <div className="hero-highlight-row">
                  <div className="hero-highlight">💻 Python • React</div>
                  <div className="hero-highlight">🧠 ML • DL • YOLO</div>
                  <div className="hero-highlight">Python Django Full-Stack</div>
                </div>
              )}

              {/* Main actions */}
              {activeSection === "home" && (
                <>
                  <div className="home-actions">
                    <button className="primary-btn" onClick={downloadResume}>
                      📄 Download Resume
                    </button>
                    <button
                      className="secondary-ghost"
                      onClick={() =>
                        openLink("https://github.com/akhileshnuth")
                      }
                    >
                      ⭐ My GitHub
                    </button>
                    <button
                      className="secondary-ghost"
                      onClick={() => setActiveSection("projects")}
                    >
                      🚀 View Projects
                    </button>
                  </div>

                  {/* Social links + message (HOME only) */}
                  <div className="hero-social">
                    <p className="hero-social-text flash-text">
                      ✨ Want to collaborate, work on exciting projects, or
                      connect for opportunities?{" "}
                      <span className="flash-highlight">
                        Let's connect & build something amazing!
                      </span>
                    </p>

                    <div className="hero-social-links">
                      <button
                        className="hero-social-link"
                        onClick={() =>
                          openLink("https://github.com/akhileshnuth")
                        }
                      >
                        🐙 GitHub
                      </button>
                      <button
                        className="hero-social-link"
                        onClick={() =>
                          openLink(
                            "https://linkedin.com/in/akhilesh-nuthalapati-9130b9227"
                          )
                        }
                      >
                        🔗 LinkedIn
                      </button>
                      <button
                        className="hero-social-link"
                        onClick={() =>
                          openLink("https://www.instagram.com/ak.hilesh4032")
                        }
                      >
                        📸 Instagram
                      </button>
                      <button
                        className="hero-social-link"
                        onClick={() =>
                          openLink(
                            "https://www.youtube.com/@akhilcreations401"
                          )
                        }
                      >
                        ▶️ YouTube
                      </button>
                    </div>
                  </div>
                </>
              )}

              {activeSection === "projects" && (
                <ProjectsSection
                  openLink={openLink}
                  openProjectModal={openProjectModal}
                />
              )}

              {activeSection === "experience" && <ExperienceSection />}

              {activeSection === "about" && <AboutSection />}

              {activeSection === "contact" && (
                <ContactSection openLink={openLink} />
              )}
            </div>
          </section>

          {/* RIGHT PROFILE CARD – hidden on Projects page */}
          {activeSection !== "projects" && (
            <section className="profile-section">
              <div className="profile-card">
                <div className="profile-image-wrapper">
                  <img
                    src="/profile.jpg"
                    alt="Akhilesh"
                    className="profile-image"
                  />
                </div>
                <div className="profile-meta">
                  <div className="profile-name">Akhilesh Nuthalapati</div>
                  <div className="profile-role">
                    Full-stack & ML Developer, AI Enthusiast.
                  </div>

                  <div className="profile-tags-row">
                    <span className="profile-tag">
                      Available for Freelance & Collaborations
                    </span>
                    <span className="profile-tag">Open to Full-time</span>
                  </div>
                </div>
              </div>
            </section>
          )}
        </main>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-inner">
            <div className="footer-columns">
              {/* Column 1 */}
              <div className="footer-col">
                <h4 className="footer-heading">Akhilesh Portfolio</h4>
                <p className="footer-text">
                  Developer portfolio showcasing work in React, ML, Python,
                  OpenCV, and full-stack development.
                </p>

                <div className="footer-social-row">
                  <span
                    className="footer-social-link"
                    onClick={() => openLink("https://github.com/akhileshnuth")}
                  >
                    <span className="footer-social-icon">🐙</span> GitHub
                  </span>
                  <span
                    className="footer-social-link"
                    onClick={() =>
                      openLink(
                        "https://linkedin.com/in/akhilesh-nuthalapati-9130b9227"
                      )
                    }
                  >
                    <span className="footer-social-icon">🔗</span> LinkedIn
                  </span>
                  <span
                    className="footer-social-link"
                    onClick={() =>
                      openLink("https://www.instagram.com/ak.hilesh4032")
                    }
                  >
                    <span className="footer-social-icon">📸</span> Instagram
                  </span>
                  <span
                    className="footer-social-link"
                    onClick={() =>
                      openLink("https://www.youtube.com/@akhilcreations401")
                    }
                  >
                    <span className="footer-social-icon">▶️</span> YouTube
                  </span>
                </div>
              </div>

              {/* Column 2 */}
              <div className="footer-col">
                <h4 className="footer-heading">Quick Links</h4>
                <button
                  className="footer-link"
                  onClick={() => handleNavClick("home")}
                >
                  Home
                </button>
                <button
                  className="footer-link"
                  onClick={() => handleNavClick("projects")}
                >
                  Projects
                </button>
                <button
                  className="footer-link"
                  onClick={() => handleNavClick("experience")}
                >
                  Experience
                </button>
                <button
                  className="footer-link"
                  onClick={() => handleNavClick("about")}
                >
                  About
                </button>
                <button
                  className="footer-link"
                  onClick={() => handleNavClick("contact")}
                >
                  Contact
                </button>
              </div>

              {/* Column 3 */}
              <div className="footer-col">
                <h4 className="footer-heading">Contact</h4>
                <button
                  className="footer-link"
                  onClick={() =>
                    openLink("mailto:akhileshnuthalapati7@gmail.com")
                  }
                >
                  📧 akhileshnuthalapati7@gmail.com
                </button>
                <button
                  className="footer-link"
                  onClick={() => openLink("tel:+919392330638")}
                >
                  📞 +91-9392330638
                </button>
                <p className="footer-text">
                  Chilakaluripet, Andhra Pradesh, India
                </p>
              </div>
            </div>

            <div className="footer-bottom-line" />

            <div className="footer-bottom">
              <span className="footer-copy">
                © {new Date().getFullYear()} Akhilesh Nuthalapati. All rights
                reserved.
              </span>
            </div>
          </div>
        </footer>
      </div>

      {/* PROJECT MODAL */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeProjectModal}
        project={selectedProject}
      />
    </div>
  );
};

const ProjectsSection = ({ openLink, openProjectModal }) => {
  const [filter, setFilter] = useState("All");

  // Added "AI" to categories for new projects
  const categories = ["All", "Web", "React", "ML", "DL", "CV", "AI", "Data / Analytics"];

  let filteredProjects = projects;
  if (
    filter === "Web" ||
    filter === "ML" ||
    filter === "DL" ||
    filter === "CV" ||
    filter === "AI" ||
    filter === "Data / Analytics"
  ) {
    filteredProjects = projects.filter((p) => p.category === filter);
  } else if (filter === "React") {
    filteredProjects = projects.filter((p) =>
      p.tech.toLowerCase().includes("react")
    );
  }

  return (
    <div className="content">
      <div className="section-header-row">
        <h3 className="section-title">Featured Projects</h3>
        <span className="section-subtitle">
          Showing {filteredProjects.length} of {projects.length}
        </span>
      </div>

      <div className="projects-filter-row">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-chip ${
              filter === cat ? "filter-chip-active" : ""
            }`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((p) => (
          <div key={p.name} className="project-card">
            <div className="project-header-row">
              <h4 className="project-name">{p.name}</h4>
              <span className="project-tag">{p.category}</span>
            </div>
            <p className="project-tech">{p.tech}</p>
            <p className="project-desc">{p.desc}</p>
            <button
              className="secondary-btn"
              onClick={() => openProjectModal(p.key)}
            >
              🔍 View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const ExperienceSection = () => (
  <div className="content">
    <h3 className="section-title">Experience</h3>

    <div className="two-col-grid">
      <div className="info-card">
        <div className="info-label">💼 Full Stack Developer</div>
        <p className="info-text" style={{ color: "var(--accent)", marginBottom: "4px", fontSize: "12px" }}>
          K3sol S.R.L ROMANIA &nbsp;•&nbsp; Jan 2025 – Present
        </p>
        <p className="info-text">
          Working on real-world web applications and AI-based systems, contributing to both frontend and backend development.
        </p>
        <p className="info-text" style={{ marginTop: "6px" }}>
          • Developed and deployed web applications using Django and modern frontend tools<br />
          • Built AI-powered systems using APIs and multi-agent architectures<br />
          • Worked on client-based projects and production deployments<br />
          • Collaborated on debugging, optimization, and feature enhancements
        </p>
      </div>

      <div className="info-card">
        <div className="info-label">🧑‍💻 Freelance AI Developer</div>
        <p className="info-text" style={{ color: "var(--accent)", marginBottom: "4px", fontSize: "12px" }}>
          Self-Employed &nbsp;•&nbsp; 2026 JAN – Present
        </p>
        <p className="info-text">
          Delivered multiple client projects including business websites and web applications, focusing on performance, usability, and real-world requirements.
        </p>
        <p className="info-text" style={{ marginTop: "6px" }}>
          • Designed and developed responsive websites<br />
          • Delivered client-based solutions (booking systems, business sites)<br />
          • Managed deployment and hosting<br />
          • Handled end-to-end project lifecycle
        </p>
      </div>
    </div>
  </div>
);

const AboutSection = () => (
  <div className="content">
    <h3 className="section-title">About Me</h3>
    <p className="section-text">
      I'm Akhilesh, a developer focused on building real-world solutions using
      Python, React, Machine Learning, Deep Learning, OpenCV, and full-stack
      tools.
    </p>
    <p className="section-text">
      I enjoy taking ideas from zero to production-ready applications —
      designing the UI, writing clean backend code, integrating databases, and
      deploying complete systems.
    </p>

    <div className="skills-block">
      <h4 className="subheading">Tech Stack</h4>
      <div className="chips-row">
        <span className="chip">Python</span>
        <span className="chip">React.js</span>
        <span className="chip">Python Django</span>
        <span className="chip">Machine Learning</span>
        <span className="chip">Deep Learning</span>
        <span className="chip">API's</span>
        <span className="chip">MySQL</span>
        <span className="chip">Playwright Automation Testing</span>
        <span className="chip">Git & GitHub</span>
      </div>
    </div>

    <div className="two-col-grid">
      <div className="info-card">
        <div className="info-label">What I Like to Build</div>
        <p className="info-text">
          • End-to-end ML pipelines and dashboards<br />
          • Computer Vision applications (face recognition, OCR, detection)<br />
          • Clean, responsive UIs for web and desktop
        </p>
      </div>
      <div className="info-card">
        <div className="info-label">Currently Exploring</div>
        <p className="info-text">
          • Better model deployment strategies<br />
          • Scalable APIs and microservices<br />
          • Advanced frontend patterns in React
        </p>
      </div>
    </div>
  </div>
);

const ContactSection = ({ openLink }) => (
  <div className="content">
    <h3 className="section-title">Contact Me</h3>
    <p className="section-text">
      Whether it's a job opportunity, internship, freelance project, or
      collaboration — I'm always happy to connect.
    </p>

    <div className="contact-grid">
      <div className="contact-card">
        <div className="contact-card-title">Primary Email</div>
        <p
          className="contact-link"
          onClick={() => openLink("mailto:akhileshnuthalapati7@gmail.com")}
        >
          📧 akhileshnuthalapati7@gmail.com
        </p>
      </div>

      <div className="contact-card">
        <div className="contact-card-title">Phone / WhatsApp</div>
        <p
          className="contact-link"
          onClick={() => openLink("tel:+919392330638")}
        >
          📞 +91-9392330638
        </p>
      </div>

      <div className="contact-card">
        <div className="contact-card-title">YouTube Channel</div>
        <p
          className="contact-link"
          onClick={() =>
            openLink("https://www.youtube.com/@akhilcreations401")
          }
        >
          ▶️ @akhilcreations401
        </p>
      </div>
    </div>

    <p className="contact-availability">
      ✅ Prefer email or LinkedIn for job / internship opportunities.
    </p>
  </div>
);

export default App;