import React, { useState } from "react";
import {
  FaClipboardCheck,
  FaUserTie,
  FaBriefcase,
  FaGraduationCap,
  FaHome,
  FaHandshake,
} from "react-icons/fa";

import "../Styles/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/submit/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (result.status === 'success') {
        alert('Form submitted successfully!');
        setFormData({ name: '', email: '', phone: '', service: '' });
      }
    } catch (error) {
      alert('Error submitting form');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1>Your Global Journey Starts Here</h1>
              <p>
                Liba Migration provides expert guidance for immigration,
                overseas careers, and international education.
              </p>
              <div className="hero-image-container">
                <img
                  src={process.env.PUBLIC_URL + "/s1.jpg"}
                  alt="Global Migration Services"
                  className="hero-image img-fluid rounded shadow showOnPhone"
                />
              </div>
              <div className="row g-3 mb-4">
                <div className="col-12 col-lg-6">
                  <div className="card px-4 py-4 h-100">
                    <h3 className="svt">What can we do for you?</h3>
                    <div className="buttonss">
                      <button className="first">
                        <Link to="/study" className="nav-link fs-5">
                          Study
                        </Link>
                      </button>
                      <button className="second">
                        <Link to="/migrate" className="nav-link fs-5">
                          Migrate
                        </Link>
                      </button>
                      <button className="third">
                        <Link to="/work" className="nav-link fs-5">
                          Work
                        </Link>
                      </button>
                      <button className="fourth">
                        <Link to="/visit" className="nav-link fs-5">
                          Visit
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="card px-2 py-4 h-100 d-flex flex-column noFloat">
                    <h3 className="svt mb-3">Visa Services</h3>
                    <div className="visa-services-grid">
                      <div className="visa-service-item">
                        <div className="visa-icon">
                          <FaBriefcase />
                        </div>
                        <span>Study Visa</span>
                      </div>
                      <div className="visa-service-item">
                        <div className="visa-icon">
                          <FaGraduationCap />
                        </div>
                        <span>Work Visa</span>
                      </div>
                      <div className="visa-service-item">
                        <div className="visa-icon">
                          <FaHome />
                        </div>
                        <span>PR Visa</span>
                      </div>
                      <div className="visa-service-item">
                        <div className="visa-icon">
                          <FaHandshake />
                        </div>
                        <span>Business Visa</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row g-3 mb-4">
                <div className="col-12 col-lg-6">
                  <div className="card px-4 py-4 h-100">
                    <h3 className="svt">
                      <FaClipboardCheck
                        style={{
                          height: "35px",
                          width: "35px",
                          margin: "8px",
                        }}
                      />
                      Check your eligibility
                    </h3>
                    <p className="svtwo">
                      Find out which country and visa option suits your profile
                      best with a quick assessment.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="card px-4 py-4 h-100">
                    <h3 className="svt">
                      <FaUserTie
                        style={{
                          height: "35px",
                          width: "35px",
                          margin: "8px",
                        }}
                      />
                      Talk to our experts
                    </h3>
                    <p className="svtwo">
                      Get personalised guidance from experienced consultants for
                      your migration or study plans.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cards end here */}

              <button className="primary-btn lmbtn">
                <Link to="/consultationForm" className="cButton">
                Get Free Consultation
                </Link>
              </button>
            </div>
            <div className="col-lg-5">
              <div className="hero-image-container">
                <img
                  src={process.env.PUBLIC_URL + "/s1.jpg"}
                  alt="Global Migration Services"
                  className="hero-image img-fluid rounded shadow delOnPhone"
                />
              </div>
              <div className="form-box p-4 bg-white rounded shadow mt-4">
                <h3 className="mb-3">Quick Inquiry</h3>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    className="form-control mb-3 formElement"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    className="form-control mb-3 formElement"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="tel"
                    className="form-control mb-3 formElement"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <select
                    className="form-select mb-3 formElement"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Service</option>
                    <option value="Immigration">Immigration</option>
                    <option value="Work abroad">Work abroad</option>
                    <option value="Study Overseas">Study Overseas</option>
                    <option value="Visa services">Visa services</option>
                  </select>
                  <button type="submit" className="lmbtn w-100">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" style={{ marginTop: "-35px" }}>
        <div className="container">
          <h2>Our Services</h2>
          <div className="cards">
            <div className="card">
              <h3>Immigration</h3>
              <p>
                Tailored migration pathways for skilled professionals, families,
                and investors.
              </p>
            </div>
            <div className="card">
              <h3>Work Abroad</h3>
              <p>
                Job search support, resume building, and employer connections
                worldwide.
              </p>
            </div>
            <div className="card">
              <h3>Study Overseas</h3>
              <p>
                University selection, application assistance, and visa guidance
                for students.
              </p>
            </div>
            <div className="card">
              <h3>Visa Services</h3>
              <p>
                Complete documentation and application support for all visa
                categories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3 className="stat-number">5000+</h3>
              <p className="stat-label">Successful Applications</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">15+</h3>
              <p className="stat-label">Years Experience</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">25+</h3>
              <p className="stat-label">Countries Covered</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">98%</h3>
              <p className="stat-label">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* TOP DESTINATIONS */}
      <section className="section">
        <div className="container">
          <h2>Popular Destinations</h2>
          <div className="destinations-grid">
            <div className="destination-card">
              <div className="destination-flag">🇨🇦</div>
              <h3>Canada</h3>
              <p>Express Entry, PNP, Study Permits</p>
              <ul className="destination-features">
                <li>High quality of life</li>
                <li>Multicultural society</li>
                <li>Strong economy</li>
              </ul>
            </div>
            <div className="destination-card">
              <div className="destination-flag">🇦🇺</div>
              <h3>Australia</h3>
              <p>Skilled Migration, Student Visas</p>
              <ul className="destination-features">
                <li>Excellent education system</li>
                <li>Work-life balance</li>
                <li>Beautiful landscapes</li>
              </ul>
            </div>
            <div className="destination-card">
              <div className="destination-flag">🇬🇧</div>
              <h3>United Kingdom</h3>
              <p>Skilled Worker, Student Routes</p>
              <ul className="destination-features">
                <li>World-class universities</li>
                <li>Rich cultural heritage</li>
                <li>Gateway to Europe</li>
              </ul>
            </div>
            <div className="destination-card">
              <div className="destination-flag">🇺🇸</div>
              <h3>United States</h3>
              <p>H1B, EB-5, Student Visas</p>
              <ul className="destination-features">
                <li>Innovation hub</li>
                <li>Career opportunities</li>
                <li>Diverse communities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section light-bg">
        <div className="container">
          <h2>Why Choose Liba Migration?</h2>
          <div className="why-choose-grid">
            <div className="feature-card">
              <div className="feature-icon">👨‍💼</div>
              <h3>Expert Consultants</h3>
              <p>
                ICCRC certified immigration consultants with 15+ years of
                experience
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Personalized Approach</h3>
              <p>Tailored strategies based on your unique profile and goals</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📋</div>
              <h3>Transparent Process</h3>
              <p>
                Clear communication and regular updates throughout your journey
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>End-to-End Support</h3>
              <p>From initial consultation to post-landing services</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <div className="container">
          <h2>What Our Clients Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  "Liba Migration made my Canadian PR dream come true. Their
                  expert guidance and support throughout the process was
                  exceptional."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Sarah Sharma</h4>
                  <span>Software Engineer, Toronto</span>
                </div>
                <div className="rating">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  "Thanks to their study abroad services, I got admission to my
                  dream university in Australia with a scholarship!"
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Raj Patel</h4>
                  <span>Masters Student, Melbourne</span>
                </div>
                <div className="rating">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  "Professional, reliable, and results-driven. They helped me
                  secure a work visa to the UK within 6 months."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Hemant Kumar</h4>
                  <span>Marketing Manager, London</span>
                </div>
                <div className="rating">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="section">
        <div className="container">
          <h2>Our Simple 4-Step Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Free Assessment</h3>
              <p>Complete evaluation of your profile and eligibility</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Strategy Planning</h3>
              <p>Customized roadmap based on your goals and timeline</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Application Process</h3>
              <p>Document preparation and submission with expert guidance</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Success & Support</h3>
              <p>Approval celebration and post-landing assistance</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}