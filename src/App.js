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
      "An academic project that predicts Parkinson’s disease from biomedical voice measurements with a Streamlit-based UI.",
    howItWorks:
      "The dataset features are processed, scaled and passed through ML models like SVM/Logistic Regression to classify Parkinson’s presence. A Streamlit interface allows users to input values and view predictions.",
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
      "Helps in early-stage detection of Parkinson’s, reducing incorrect diagnoses, with an easy-to-use web interface.",
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
      "A system to predict multiple diseases like Diabetes, Heart disease, and Parkinson’s using ML models with a Streamlit front-end.",
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

  profileApp: {
    title: "Profile Management App",
    subtitle: "React • REST API • CRUD",
    summary:
      "A complete profile management system with CRUD operations and backend API integration.",
    howItWorks:
      "React UI sends profile data to backend API routes. Responses update UI state, allowing add/edit/delete operations.",
    features: [
      "Add, edit, delete user profiles",
      "Fully functional API integration",
      "Modern React UI",
      "Form validations",
    ],
    techStack: "React.js, REST API, Axios",
    algorithm: "No ML — frontend + API focused system.",
    usefulness: "Useful for managing employee/user profiles in any system.",
    challenges: [
      "Syncing UI state with API",
      "Error handling in API responses",
      "Form validation and UI consistency",
    ],
    github: "https://github.com/akhileshnuth/profile-management-app",
    liveDemo: "https://profile-management-app-two.vercel.app/",
  },

  ocr: {
    title: "OCR Text Recognition",
    subtitle: "OpenCV • Tesseract • Deep Learning",
    summary:
      "Extracts text from images using OpenCV preprocessing and deep-learning-backed OCR.",
    howItWorks:
      "Image is preprocessed (grayscale, thresholding, noise removal) and then passed to an OCR engine to detect and extract text from regions of interest.",
    features: [
      "Reads text from documents/images",
      "Noise removal",
      "Region-of-interest extraction",
      "High-quality preprocessing",
    ],
    techStack: "Python, OpenCV, Deep Learning / OCR",
    algorithm: "Deep-learning OCR pipeline with OpenCV preprocessing.",
    usefulness: "Useful for digitizing text, scanning documents or IDs.",
    challenges: [
      "Handling low-light images",
      "Noise and blur correction",
      "Improving OCR accuracy",
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
    key: "profileApp",
    name: "Profile Management App",
    tech: "React, REST API",
    desc: "Profile management with full API integration.",
    url: "https://profile-management-app-two.vercel.app/",
    category: "Web",
  },
  {
    key: "ocr",
    name: "OCR Text Recognition",
    tech: "Deep Learning, Python",
    desc: "Extracts text from images using deep learning & OpenCV.",
    url: "https://github.com/akhileshnuth",
    category: "DL",
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
    link.href = resumePDF; // imported file URL
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
              {["home", "projects", "about", "contact"].map((item) => (
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
                  <div className="hero-highlight">🗄️ MySQL • MongoDB</div>
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
                        Let’s connect & build something amazing!
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
                    Full-stack & ML Developer, Computer Vision Enthusiast.
                  </div>

                  <div className="profile-tags-row">
                    <span className="profile-tag">
                      Available for Internship
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

  // Separate ML, DL, CV + React filter
  const categories = ["All", "Web", "React", "ML", "DL", "CV", "Data / Analytics"];

  let filteredProjects = projects;
  if (
    filter === "Web" ||
    filter === "ML" ||
    filter === "DL" ||
    filter === "CV" ||
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
        <span className="chip">Node.js (Basics)</span>
        <span className="chip">Machine Learning</span>
        <span className="chip">Deep Learning</span>
        <span className="chip">OpenCV</span>
        <span className="chip">MySQL</span>
        <span className="chip">MongoDB</span>
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
      collaboration — I’m always happy to connect.
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