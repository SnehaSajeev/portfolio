import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = {
  "Python & Development": ["Python", "Java", "C++", "SQL", "OOP", "Data Structures & Algorithms"],
  "Automation & Testing": ["Selenium", "Playwright", "REST API Testing", "REST Assured", "ADB/uiautomator2", "Automation Framework Design"],
  "AI & Data": ["Generative AI", "LLM APIs", "Prompt Engineering", "RAG", "LangChain", "LlamaIndex", "PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy"],
  "Systems & Delivery": ["Linux", "CI/CD", "Git", "Docker", "FastAPI", "MLflow", "AWS", "PostgreSQL"],
};

const experience = [
  {
    period: "Jan 2026 — Present",
    role: "Python Automation Developer",
    company: "Innspark Solutions Pvt Ltd",
    points: [
      "Built and maintained Python-based automation frameworks and pipelines, integrating AI-assisted capabilities for test generation, debugging, defect analysis, and reporting.",
      "Developed automated web and API test workflows using Selenium, Playwright, and REST-based integrations.",
      "Implemented RESTful services and automation integrations connecting testing workflows with business applications and downstream processes.",
      "Used Java, REST Assured, and SQL for API automation, validation, and data-integrity checks.",
      "Integrated automation workflows into CI/CD-oriented execution and performed anomaly investigation, log analysis, and root-cause debugging."
    ]
  },
  {
    period: "Jul 2024 — Dec 2025",
    role: "Python / C++ Developer — Cybersecurity Domain",
    company: "CISAI",
    points: [
      "Developed and maintained security-focused Python and C++ applications with emphasis on reliability and performance.",
      "Applied secure coding best practices and performed code reviews to identify and remediate vulnerabilities.",
      "Wrote Python scripts for application behavior analysis, log parsing, and pattern detection.",
      "Debugged and optimized code across development and testing cycles, improving application stability."
    ]
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSkill, setActiveSkill] = useState("Python & Development");

  useEffect(() => {
    const onScroll = () => {
      document.body.classList.toggle("scrolled", window.scrollY > 24);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="site">
      <header className="nav">
        <button className="brand" onClick={() => go("home")}>SS<span>.</span></button>
        <nav className={menuOpen ? "navlinks open" : "navlinks"}>
          {["about", "experience", "skills", "contact"].map((item) => (
            <button key={item} onClick={() => go(item)}>{item}</button>
          ))}
        </nav>
        <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? "Close" : "Menu"}
        </button>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-copy">
            <p className="eyebrow">AUTOMATION ENGINEER · PYTHON · CYBERSECURITY</p>
            <h1>Engineering reliable<br /><em>automation.</em></h1>
            <p className="lede">
              Python-focused engineer working across test automation, APIs, log analysis,
              AI-assisted testing, and security-focused software development.
            </p>
            <div className="actions">
              <button className="primary" onClick={() => go("experience")}>Explore experience <span>↘</span></button>
              <a className="secondary" href="mailto:snehasajeev34@gmail.com">Get in touch</a>
            </div>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-ring"></div>
            <img src="/sne.jpg" alt="Portrait of Sneha Sajeev" className="portrait" />
            <div className="portrait-label">SNEHA<br />SAJEEV</div>
          </div>
          <div className="hero-meta">
            <span>Based in Kerala, India</span>
            <span>Available · 1 Month</span>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="section-kicker">01 / ABOUT</div>
          <div className="about-grid">
            <h2>Python at the center.<br /><span>Quality, security & AI around it.</span></h2>
            <div>
              <p className="big-copy">
                Automation Engineer with <strong>2 years 2 months</strong> of professional experience
                in Python-based automation, test automation, API integration, log analysis, and
                AI-assisted testing workflows.
              </p>
              <p>
                Hands-on with Selenium, Playwright, REST API testing, Java, REST Assured, SQL,
                CI/CD pipelines, and AI-powered tools for test generation, debugging, defect
                analysis, and reporting.
              </p>
              <p>
                Experienced in building and maintaining automation frameworks, investigating
                anomalies and root causes, optimizing automation code, and collaborating on
                reliable, scalable quality-engineering solutions.
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="section experience">
          <div className="section-kicker">02 / EXPERIENCE</div>
          <div className="experience-list">
            {experience.map((item, i) => (
              <article className="experience-item" key={item.company}>
                <div className="experience-index">0{i + 1}</div>
                <div className="experience-main">
                  <div className="experience-top">
                    <span>{item.period}</span>
                    <span>{item.company}</span>
                  </div>
                  <h3>{item.role}</h3>
                  <ul>
                    {item.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section skills">
          <div className="section-kicker">03 / SKILLS</div>
          <div className="skills-head">
            <h2>A practical<br /><em>toolkit.</em></h2>
            <p>Technologies and capabilities reflected in my professional experience and resume.</p>
          </div>
          <div className="skill-tabs">
            {Object.keys(skills).map((name) => (
              <button
                key={name}
                className={activeSkill === name ? "active" : ""}
                onClick={() => setActiveSkill(name)}
              >
                {name}
              </button>
            ))}
          </div>
          <div className="skill-cloud">
            {skills[activeSkill].map((skill, i) => (
              <span key={skill} style={{ "--i": i }}>{skill}</span>
            ))}
          </div>
        </section>

        <section className="section education">
          <div className="section-kicker">04 / EDUCATION</div>
          <div className="education-grid">
            <div>
              <p className="muted">2020 — 2024</p>
              <h3>B.Tech — Computer Science Engineering</h3>
              <p>College of Engineering Thalassery</p>
              <strong>CGPA 7.03 / 10</strong>
            </div>
            <div>
              <p className="muted">2018 — 2020</p>
              <h3>Higher Secondary — Science Stream</h3>
              <p>KKVMHSS Panoor</p>
              <strong>93.25%</strong>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="section-kicker">05 / CONTACT</div>
          <h2>Let's build<br /><em>reliable software.</em></h2>
          <p>Open to opportunities where Python, automation, software development, and cybersecurity experience can create practical impact.</p>
          <a className="contact-email" href="mailto:snehasajeev34@gmail.com">snehasajeev34@gmail.com <span>↗</span></a>
          <div className="contact-details">
            <span>+91 9744412534</span>
            <span>Kannur, Kerala</span>
            <span>Availability: 1 Month</span>
          </div>
        </section>
      </main>

      <footer>
        <span>SNEHA SAJEEV</span>
        <span>Automation Engineer · Python · Test Automation · Cybersecurity</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
