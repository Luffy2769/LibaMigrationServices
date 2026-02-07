import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaClipboardList, FaComments, FaCheckCircle, FaRocket } from 'react-icons/fa';
import "../Styles/Consultation.css";

export default function Consultation() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    description: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const consultationForm = async (e) => {
    e.preventDefault();
    // Handle form submission
    try {
      const response = await fetch("http://localhost:8000/api/consultationForm/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.status === "success") {
        setIsSubmitted(true);
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            inquiryType: "",
            description: "",
          });
          setIsSubmitted(false);
        }, 3000);
      }
    } catch (error) {
      alert("Error submitting form");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="consultation-page">
      <div className="consultation-container">
        <div className="consultation-content">
          <div className="consultation-info">
            <div className="info-header">
              <FaRocket className="header-icon" />
              <h1>Start Your Journey Today</h1>
            </div>
            <p className="info-description">
              Connect with our expert consultants and take the first step towards your dream destination. We're here to guide you every step of the way.
            </p>
            <div className="info-features">
              <div className="feature-item">
                <FaCheckCircle className="feature-icon" />
                <div>
                  <h3>Expert Guidance</h3>
                  <p>Personalized consultation from certified advisors</p>
                </div>
              </div>
              <div className="feature-item">
                <FaCheckCircle className="feature-icon" />
                <div>
                  <h3>Quick Response</h3>
                  <p>Get a response within 24 hours</p>
                </div>
              </div>
              <div className="feature-item">
                <FaCheckCircle className="feature-icon" />
                <div>
                  <h3>Free Consultation</h3>
                  <p>No hidden charges, completely transparent</p>
                </div>
              </div>
            </div>
          </div>

          <div className="consultation-form-wrapper">
            {isSubmitted ? (
              <div className="success-message">
                <FaCheckCircle className="success-icon" />
                <h2>Thank You!</h2>
                <p>Your consultation request has been submitted successfully. Our team will contact you shortly.</p>
              </div>
            ) : (
              <form className="consultation-form" onSubmit={consultationForm}>
                <h2>Book Your Free Consultation</h2>
                <div className="form-group">
                  <label><FaUser /> Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label><FaEnvelope /> Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label><FaPhone /> Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label><FaClipboardList /> Service Type</label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="Immigration">Immigration</option>
                    <option value="Work abroad">Work Abroad</option>
                    <option value="Study Overseas">Study Overseas</option>
                    <option value="Visa services">Visa Services</option>
                    <option value="Permanent Residency">Permanent Residency</option>
                    <option value="IELTS Coachings">IELTS Coaching</option>
                  </select>
                </div>
                <div className="form-group">
                  <label><FaComments /> Tell Us More</label>
                  <textarea
                    name="description"
                    placeholder="Share your goals, concerns, or any specific questions..."
                    value={formData.description}
                    onChange={handleChange}
                    rows="4"
                    required
                  />
                </div>
                <button type="submit" className="submit-btn">
                  Submit Consultation Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}