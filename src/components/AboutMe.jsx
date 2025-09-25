import React from 'react';
import './AboutMe.css';
import profileImage from '../assets/logo.svg';

const AboutMe = () => {
  return (
    /* Student's Name: CYRILLE YANNIS SONFACK
  Student ID: 301514181
  Date: September 24, 2025 */
    <div className="about-me-container">
      <div className="about-me">
        <div className="about-header">
          <div className="profile-section">
            <div className="profile-image-container">
              <img 
                src={profileImage} 
                alt="Cyrille Yannis Sonfack" 
                className="profile-image" 
              />
              <div className="image-overlay">
                <span className="wave">👋</span>
              </div>
            </div>
            <div className="intro-text">
              <h1 className="about-title">
                Hi, I'm <span className="highlight">CYRILLE YANNIS SONFACK NGOUFACK</span>
              </h1>
              <p className="tagline">Full Stack Developer & Problem Solver</p>
            </div>
          </div>
        </div>

        <div className="about-content">
          <div className="story-section">
            <h2>My Story</h2>
            <div className="story-text">
              <p>
                My name is <strong>SONFACK</strong>. I am a passionate 
                <strong> Software developer</strong> with expertise in modern web technologies 
                and a love for creating innovative digital solutions.
              </p>
              <p>
                With experience in <strong>Javascript</strong>, I specialize in 
                building responsive, user-friendly applications that solve real-world problems. 
                My journey in tech has been driven by curiosity and a commitment to continuous learning.
              </p>
              <p>
                I am dedicated to <strong>innovative development</strong> and believe in writing 
                clean, maintainable code while staying up-to-date with the latest industry trends 
                and best practices.
              </p>
            </div>
          </div>

          <div className="skills-section">
            <h2>Skills & Expertise</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Frontend</h3>
                <div className="skill-tags">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">HTML5</span>
                  <span className="skill-tag">CSS3</span>
                  <span className="skill-tag">TypeScript</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Backend</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Java</span>
                  <span className="skill-tag">Express</span>
                  <span className="skill-tag">MongoDB</span>
                  <span className="skill-tag">PostgreSQL</span>
                  <span className="skill-tag">REST APIs</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Tools & Others</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">Docker</span>
                  <span className="skill-tag">AWS</span>
                  <span className="skill-tag">Figma</span>
                  <span className="skill-tag">Agile</span>
                </div>
              </div>
            </div>
          </div>

          <div className="achievements-section">
            <h2>Key Highlights</h2>
            <div className="achievements-grid">
              <div className="achievement-item">
                <div className="achievement-icon">🎓</div>
                <h4>Education</h4>
                <p>Computer Science Graduate with focus on Software Development</p>
              </div>
              <div className="achievement-item">
                <div className="achievement-icon">💼</div>
                <h4>Experience</h4>
                <p>3+ years in full-stack development and project management</p>
              </div>
              <div className="achievement-item">
                <div className="achievement-icon">🚀</div>
                <h4>Projects</h4>
                <p>Built 15+ web applications serving thousands of users</p>
              </div>
              <div className="achievement-item">
                <div className="achievement-icon">🏆</div>
                <h4>Recognition</h4>
                <p>Award winner for innovative solutions and code quality</p>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h2>Let's Connect</h2>
            <p>Interested in working together or want to know more about my journey?</p>
            <div className="cta-buttons">
              <a 
                href="/assets/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="resume-btn"
              >
                <span>📄</span>
                Download Resume
              </a>
              <a href="/contact" className="contact-btn">
                <span>💬</span>
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;