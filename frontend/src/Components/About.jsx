import React from 'react';
import { FaUsers, FaGlobe, FaAward, FaHandshake, FaEye, FaBullseye, FaHeart, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import '../Styles/About.css';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="hero-title">About VE Abroad</h1>
              <p className="hero-subtitle">
                Your trusted partner in global migration, education, and career opportunities. 
                With over 15 years of experience, we've helped thousands achieve their international dreams.
              </p>
              <div className="hero-highlights">
                <div className="highlight-item">
                  <FaUsers className="highlight-icon" />
                  <span>15+ Years Experience</span>
                </div>
                <div className="highlight-item">
                  <FaGlobe className="highlight-icon" />
                  <span>50+ Countries Served</span>
                </div>
                <div className="highlight-item">
                  <FaAward className="highlight-icon" />
                  <span>98% Success Rate</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <img src={process.env.PUBLIC_URL + "/s1.jpg"} alt="VE Abroad Team" className="img-fluid rounded-3 shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2>Our Story</h2>
              <div className="story-content">
                <p className="lead">
                  Founded in 2008, VE Abroad began as a small consultancy with a big vision: 
                  to make international opportunities accessible to everyone, regardless of their background.
                </p>
                <p>
                  What started as a passion project by our founder, who experienced the challenges 
                  of international migration firsthand, has grown into one of the most trusted 
                  immigration and education consultancies in the region.
                </p>
                <p>
                  Today, we're proud to have helped over 10,000 individuals and families 
                  achieve their dreams of studying, working, and settling abroad. Our success 
                  is measured not just in numbers, but in the lives we've transformed and 
                  the dreams we've helped realize.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision section light-bg">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="mission-card">
                <div className="card-icon">
                  <FaBullseye />
                </div>
                <h3>Our Mission</h3>
                <p>
                  To provide personalized, ethical, and result-oriented immigration and 
                  education services that empower individuals to achieve their global aspirations 
                  while maintaining the highest standards of professionalism and integrity.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="vision-card">
                <div className="card-icon">
                  <FaEye />
                </div>
                <h3>Our Vision</h3>
                <p>
                  To be the world's most trusted bridge connecting dreams with destinations, 
                  creating a global community where opportunities know no borders and 
                  success is defined by the positive impact we make in people's lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="values section">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">
                <FaHandshake />
              </div>
              <h4>Integrity</h4>
              <p>We maintain the highest ethical standards in all our dealings, ensuring transparency and honesty at every step.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <FaHeart />
              </div>
              <h4>Compassion</h4>
              <p>We understand that each journey is personal and treat every client with empathy, care, and respect.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <FaAward />
              </div>
              <h4>Excellence</h4>
              <p>We strive for perfection in everything we do, continuously improving our services and expertise.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <FaGlobe />
              </div>
              <h4>Innovation</h4>
              <p>We embrace new technologies and methodologies to provide cutting-edge solutions for our clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="achievements section">
        <div className="container">
          <h2>Our Achievements</h2>
          <div className="achievements-grid">
            <div className="achievement-item">
              <div className="achievement-number">10,000+</div>
              <div className="achievement-label">Successful Cases</div>
            </div>
            <div className="achievement-item">
              <div className="achievement-number">50+</div>
              <div className="achievement-label">Countries Covered</div>
            </div>
            <div className="achievement-item">
              <div className="achievement-number">98%</div>
              <div className="achievement-label">Success Rate</div>
            </div>
            <div className="achievement-item">
              <div className="achievement-number">15+</div>
              <div className="achievement-label">Years Experience</div>
            </div>
            <div className="achievement-item">
              <div className="achievement-number">25+</div>
              <div className="achievement-label">Expert Consultants</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="certifications section light-bg">
        <div className="container">
          <h2>Certifications & Memberships</h2>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="cert-card">
                <div className="cert-icon">
                  <FaAward />
                </div>
                <h5>ICCRC Certified</h5>
                <p>Immigration Consultants of Canada Regulatory Council</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="cert-card">
                <div className="cert-icon">
                  <FaAward />
                </div>
                <h5>MARA Registered</h5>
                <p>Migration Agents Registration Authority - Australia</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="cert-card">
                <div className="cert-icon">
                  <FaAward />
                </div>
                <h5>OISC Regulated</h5>
                <p>Office of the Immigration Services Commissioner - UK</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="cert-card">
                <div className="cert-icon">
                  <FaAward />
                </div>
                <h5>ISO Certified</h5>
                <p>ISO 9001:2015 Quality Management System</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Journey?</h2>
            <p>Join thousands of satisfied clients who have achieved their international dreams with VE Abroad. Let's make your aspirations a reality.</p>
            <div className="cta-buttons">
              <button className="lmbtn">
                <Link to="/consultationForm" className="cta-link">
                  Get Free Consultation
                </Link>
              </button>
              <button className="btn-outline">
                <Link to="/" className="outline-link">
                  Explore Services
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}