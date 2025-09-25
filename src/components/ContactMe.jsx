import React, { useState } from 'react';
import './ContactMe.css';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you! Your message has been sent.');
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      contactNumber: '',
      email: '',
      message: '',
    });
  };

  return (
    /* Student's Name: CYRILLE YANNIS SONFACK
  Student ID: 301514181
  Date: September 24, 2025 */
    <div className="contact-me-container">
      <div className="contact-me">
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <p className="contact-subtitle">
            I'd love to hear from you. Send me a message and I'll respond as soon as possible.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="info-item">
              <div>
                <strong>Email</strong>
                <p>cyrilleyannis@dev.com</p>
              </div>
            </div>
            <div className="info-item">
              <div>
                <strong>Phone</strong>
                <p>(705) 456-7890</p>
              </div>
            </div>
            <div className="info-item">
              <div>
                <strong>Location</strong>
                <p>Toronto, Ontario, Canada</p>
              </div>
            </div>
            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-icons">
                <a href="./" className="social-link">LinkedIn</a>
                <a href="./" className="social-link">GitHub</a>
                <a href="./" className="social-link">Twitter</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contactNumber">Phone Number *</label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  placeholder="Enter your phone number"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project or just say hello..."
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              <span>Send Message</span>
              <span className="btn-arrow">→</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;