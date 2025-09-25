import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <div className="services">
        <div className="services-header">
          <h1 className="services-title">
            What I <span className="highlight">Offer</span>
          </h1>
          <p className="services-subtitle">
            Comprehensive digital solutions tailored to bring your ideas to life
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <span className="icon">💻</span>
            </div>
            <div className="service-content">
              <h2>Web Development</h2>
              <p>Building responsive and user-friendly websites using modern technologies like React, Node.js, and cloud platforms.</p>
              <div className="service-features">
                <span className="feature-tag">React</span>
                <span className="feature-tag">Node.js</span>
                <span className="feature-tag">MongoDB</span>
                <span className="feature-tag">AWS</span>
              </div>
              <div className="service-pricing">
                <span className="price">Starting at $1,500</span>
              </div>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <span className="icon">📱</span>
            </div>
            <div className="service-content">
              <h2>Mobile App Development</h2>
              <p>Creating engaging mobile applications for both iOS and Android platforms with seamless user experiences.</p>
              <div className="service-features">
                <span className="feature-tag">React Native</span>
                <span className="feature-tag">Flutter</span>
                <span className="feature-tag">iOS</span>
                <span className="feature-tag">Android</span>
              </div>
              <div className="service-pricing">
                <span className="price">Starting at $2,500</span>
              </div>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <span className="icon">🔍</span>
            </div>
            <div className="service-content">
              <h2>SEO Optimization</h2>
              <p>Improving website visibility and search engine rankings through effective SEO strategies and performance optimization.</p>
              <div className="service-features">
                <span className="feature-tag">Technical SEO</span>
                <span className="feature-tag">Content Strategy</span>
                <span className="feature-tag">Analytics</span>
                <span className="feature-tag">Performance</span>
              </div>
              <div className="service-pricing">
                <span className="price">Starting at $800</span>
              </div>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <span className="icon">🚀</span>
            </div>
            <div className="service-content">
              <h2>Tech Consulting</h2>
              <p>Providing expert advice on technology solutions, digital transformation, and strategic planning for your business growth.</p>
              <div className="service-features">
                <span className="feature-tag">Strategy</span>
                <span className="feature-tag">Architecture</span>
                <span className="feature-tag">Solutions</span>
                <span className="feature-tag">Growth</span>
              </div>
              <div className="service-pricing">
                <span className="price">$150/hour</span>
              </div>
            </div>
          </div>
        </div>

        <div className="services-cta">
          <h2>Ready to Start Your Project?</h2>
          <p>Let's discuss how I can help bring your vision to reality</p>
          <div className="cta-buttons">
            <a href="/contact" className="primary-btn">
              Get Free Quote
            </a>
            <a href="/projects" className="secondary-btn">
              View My Work
            </a>
          </div>
        </div>

        <div className="process-section">
          <h2 className="process-title">My Work Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>Discovery</h3>
              <p>Understanding your needs, goals, and target audience</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>Planning</h3>
              <p>Creating detailed project roadmap and technical specifications</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>Development</h3>
              <p>Building your solution with regular updates and feedback</p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h3>Launch</h3>
              <p>Deploying your project and providing ongoing support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;