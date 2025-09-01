import './App.css';
import profilePic from './assets/profile.jpg';
import flutterLogo from './assets/flutter.png';
import cvLogo from './assets/opencv.png';
import dartLogo from './assets/Dart.png';
import tenserflowLogo from './assets/TensorFlow.png';
import PythonLogo from './assets/Python.png';
import ReactLogo from './assets/React.png';
import FirebaseLogo from './assets/Firebase.png';
import GitLogo from './assets/Git.png';

import {
  FiGlobe,
  FiMail,
  FiMapPin,
  FiMenu,
  FiX,
} from 'react-icons/fi';
import { useState, useEffect } from 'react';
import ExperienceSection from './components/experience_section';
import EducationSection from './components/education_section';
import ContactForm from './contactform';

// ===== MAIN APP COMPONENT =====
function App() {
  const [showMobileBottom, setShowMobileBottom] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Sequential bounce animation using IntersectionObserver
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.animated');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  // All projects (you can add more here later)
  // All projects (you can add more here later)
const projects = [
  {
    title: "Flutter Notes App",
    image: "src/assets/project.jpg", // replace with your project image
    description: "A cross-platform notes app built with Flutter, integrated with Firebase.",
    link: "https://github.com/yourusername/flutter-notes"
  },
  {
    title: "AI Object Detector",
    image: "src/assets/project2.jpg", // replace with real image
    description: "TensorFlow-powered app for real-time object detection.",
    link: "https://github.com/yourusername/object-detector"
  },
  {
    title: "Portfolio Website",
    image: "src/assets/project.jpg",
    description: "My personal portfolio built with React + TypeScript.",
    link: "https://suvasharma.com.np"
  },

   {
    title: "Portfolio Website",
    image: "src/assets/project.jpg",
    description: "My personal portfolio built with React + TypeScript.",
    link: "https://suvasharma.com.np"
  }
];


  // Only show 2 if collapsed
  const visibleProjects = showAllProjects ? projects : projects.slice(0, 2);

  return (
    <div className={`page ${isDarkMode ? 'dark-theme' : ''}`}>
      {/* ===== MOBILE CARD ===== */}
      <div className="card-box animated" style={{ animationDelay: '0s' }}>
        <div className="top-bar">
          <img
            src={profilePic}
            alt="Profile"
            className="profile-img-mobile-large"
          />
          <div className="text-content">
            <p className="intro-text">
              Hello I'm
              <br />
              Suva Sharma
            </p>
            <p className="sub-text">Computer Engineer</p>
            <div className="availability-box">
              <span className="green-dot"></span>
              <span className="availability-text">Available to Work</span>
            </div>
            <div className="location-box">
              <FiMapPin className="location-icon" />
              <a
                href="https://www.google.com/maps/place/Kathmandu,+Nepal"
                target="_blank"
                rel="noopener noreferrer"
                className="location-text"
              >
                Kathmandu, Nepal
              </a>
            </div>
          </div>

          {showMobileBottom ? (
            <FiX
              className="menu-icon"
              onClick={() => setShowMobileBottom(false)}
            />
          ) : (
            <FiMenu
              className="menu-icon"
              onClick={() => setShowMobileBottom(true)}
            />
          )}
        </div>

        <div className={`bottom-content ${showMobileBottom ? 'show' : ''}`}>
          <div className="expanded-grid">
            <div className="left-column">
              <a
                href="https://suvasharma.com.np"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <FiGlobe className="contact-icon" />
                suvasharma.com.np
              </a>
              <a href="mailto:sharmasuva1@gmail.com" className="contact-link">
                <FiMail className="contact-icon" />
                sharmasuva1@gmail.com
              </a>
            </div>
            <div className="right-column">
              <button className="btn white-btn">Download CV</button>
              <button className="btn black-btn">Contact Me</button>
            </div>
          </div>
        </div>
      </div>

      {/* ===== DESKTOP LEFT SIDEBAR ===== */}
      <div className="left-side animated" style={{ animationDelay: '0.2s' }}>
        <div className="top-box">
          <img src={profilePic} alt="Profile" className="profile-img" />
          <p className="intro-text">
            Hello I'm
            <br />
            Suva Sharma
          </p>
          <p className="sub-text">Computer Engineer</p>
          <div className="availability-box">
            <span className="green-dot"></span>
            <span className="availability-text">Available to Work</span>
          </div>
          <div className="location-box">
            <FiMapPin className="location-icon" />
            <a
              href="https://www.google.com/maps/place/Kathmandu,+Nepal"
              target="_blank"
              rel="noopener noreferrer"
              className="location-text"
            >
              Kathmandu, Nepal
            </a>
          </div>
        </div>

        <div className="bottom-box">
          <div className="contact-box">
            <a
              href="https://suvasharma.com.np"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FiGlobe className="contact-icon" />
              suvasharma.com.np
            </a>
            <a href="mailto:sharmasuva1@gmail.com" className="contact-link">
              <FiMail className="contact-icon" />
              sharmasuva1@gmail.com
            </a>
          </div>
          <div className="button-stack">
            <button className="btn white-btn">Download CV</button>
            <button className="btn black-btn">Contact Me</button>
          </div>
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="main-content animated" style={{ animationDelay: '0.4s' }}>
        <div className="section animated" style={{ animationDelay: '0.6s' }}>
          <h2>ABOUT</h2>
        </div>

        <p className="about-text animated" style={{ animationDelay: '0.8s' }}>
          I am Suva Sharma, a passionate Developer residing in the
          dynamic city of Kathmandu, Nepal. My expertise lies at building mobile apps from scratch to deployment.
          I’ve worked with GetX, Riverpod, and BLoC for state management, and integrated REST APIs and GraphQL
           into scalable apps published on both the Play Store and App Store.
           </p>
        <p className="about-text animated" style={{ animationDelay: '1s' }}>
          Alongside mobile, I’m passionate about AI and computer vision, especially working with TensorFlow for object detection,
           image classification, and real time recognition projects. My goal is to bridge mobile development with intelligent,
           AI powered solutions.
        </p>

        <div className="section animated" style={{ animationDelay: '0.6s' }}>
          <h2>SKILLS</h2>
        </div>
        <div className="skills-container animated" style={{ animationDelay: '0.8s' }}>
          <div className="skill-box">Cross Platform (IOS & Android)</div>
          <div className="skill-box">State Management</div>
          <div className="skill-box">RESTful API</div>
          <div className="skill-box">Object Detection Pipelines</div>
          <div className="skill-box">Model Integration</div>
          <div className="skill-box">Image Processing</div>
          <div className="skill-box">Agile Development</div>
          <div className="skill-box">Github</div>
        </div>

        <div className="section animated" style={{ animationDelay: '0.6s' }}>
          <h2>EXPERIENCE</h2>
        </div>
        <ExperienceSection />

        <div className="techstack-section">
          <div className="section animated" style={{ animationDelay: '0.6s' }}>
            <h2>TECHSTACK</h2>
          </div>

          <div className="techstack-container" style={{ animationDelay: '1s' }}>
            <div className="techstack-wrapper">
              <img src={flutterLogo} alt="Flutter" />
              <img src={dartLogo} alt="dart" />
              <img src={ReactLogo} alt="React" />
              <img src={FirebaseLogo} alt="Firebase" />
              <img src={PythonLogo} alt="Python" />
              <img src={GitLogo} alt="Git" />
              <img src={tenserflowLogo} alt="Tensorflow" />
              <img src={cvLogo} alt="OpenCV" />
            </div>
          </div>
        </div>

        {/* ===== PROJECTS SECTION ===== */}
        <div className="section animated" style={{ animationDelay: '0.6s' }}>
          <h2>PROJECTS</h2>
        </div>

        <div className="projects-main-container animated" style={{ animationDelay: '0.8s' }}>
          <div className="projects-grid">
          {visibleProjects.map((project, index) => (
  <div key={index} className="project-card">
    <img src={project.image} alt={project.title} className="project-image" />
    <div className="project-content">
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <button
        className="view-btn"
        onClick={() => window.open(project.link, "_blank")}
      >
        View Project
      </button>
    </div>
  </div>
))}

          </div>

          {projects.length > 2 && (
            <div className="see-more-container animated">
              <button
                className="see-more-btn"
                onClick={() => setShowAllProjects(!showAllProjects)}
              >
                {showAllProjects ? 'See Less' : 'See More'}
              </button>
            </div>
          )}
        </div>

        <div className="section animated" style={{ animationDelay: '0.6s' }}>
          <h2>EDUCATIONS</h2>
        </div>
        <EducationSection />

        <div className="techstack-section">
          <div className="section animated" style={{ animationDelay: '0.6s' }}>
            <h2>LINKS</h2>
          </div>

          <div className="links-grid">
            <div className="row1">
              <div className="box">Book a Call <span className="arrow">↗</span></div>
              <div className="box">Instagram <span className="arrow">↗</span></div>
            </div>

            <div className="row2">
              <div className="box">Twitter <span className="arrow">↗</span></div>
              <div className="box">LinkedIn <span className="arrow">↗</span></div>
            </div>

            <div className="row3">
              <div className="box">GitHub <span className="arrow">↗</span></div>
            </div>
          </div>
        </div>
        <div className="section animated" style={{ animationDelay: "0.6s" }}>
      <h2>CONTACT ME</h2>
      </div>
  <div className="contact-form-wrapper animated" style={{ animationDelay: "0.6s" }}>
    <ContactForm />
</div>
</div>
      {/* ===== Dark Mode Toggle ===== */}
      <button className="toggle-btn" onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? '☀️' : '🌙'}
      </button>

  {/* ===== FOOTER ===== */}
  <footer className="footer">
    <div className="footer-left">© {new Date().getFullYear()} Designed By Suva</div>
    
  </footer>

    </div>

    
  );
}



export default App;
