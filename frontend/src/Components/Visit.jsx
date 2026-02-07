import React from 'react';
import { FaPlane, FaPassport, FaCalendarAlt, FaMapMarkedAlt, FaUserFriends, FaShieldAlt, FaClock, FaGlobe } from 'react-icons/fa';
import '../Styles/Visit.css';
import { Link } from 'react-router-dom';

export default function Visit() {
  return (
    <div className="visit-page">
      {/* Hero Section */}
      <section className="visit-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="hero-title">Explore the World with Confidence</h1>
              <p className="hero-subtitle">
                Whether it's business, tourism, or visiting family, we make your travel dreams a reality with expert visa assistance and travel planning.
              </p>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label visit-stat-label">Countries</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">95%</span>
                  <span className="stat-label visit-stat-label">Success Rate</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">10K+</span>
                  <span className="stat-label visit-stat-label">Happy Travelers</span>
                </div>
              </div>
              <button className="lmbtn hero-cta"> 
                <Link to="/consultationForm" className="cta-link">
                  Start Your Journey
                </Link>
              </button>
            </div>
            <div className="col-lg-4">
              <div className="hero-image">
                <img src={process.env.PUBLIC_URL + "/s2.png"} alt="Travel Destinations" className="img-fluid rounded-3 shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Types Section */}
      <section className="visit-types section">
        <div className="container">
          <h2>Visit Visa Services</h2>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="visit-card">
                <div className="visit-icon">
                  <FaUserFriends />
                </div>
                <h3>Tourist Visa</h3>
                <p>Explore breathtaking destinations, experience new cultures, and create unforgettable memories with our tourist visa services.</p>
                <ul className="visit-features">
                  <li>Multiple entry options</li>
                  <li>Extended stay periods</li>
                  <li>Fast processing</li>
                  <li>Document assistance</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="visit-card">
                <div className="visit-icon">
                  <FaPlane />
                </div>
                <h3>Business Visa</h3>
                <p>Expand your business horizons with seamless business visa processing for meetings, conferences, and partnerships.</p>
                <ul className="visit-features">
                  <li>Corporate packages</li>
                  <li>Priority processing</li>
                  <li>Multiple country access</li>
                  <li>Business documentation</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="visit-card">
                <div className="visit-icon">
                  <FaMapMarkedAlt />
                </div>
                <h3>Family Visit</h3>
                <p>Reunite with loved ones abroad with our specialized family visit visa services and comprehensive support.</p>
                <ul className="visit-features">
                  <li>Family sponsorship</li>
                  <li>Relationship documentation</li>
                  <li>Group applications</li>
                  <li>Extended validity</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="destinations section light-bg">
        <div className="container">
          <h2>Popular Visit Destinations</h2>
          <div className="destinations-grid">
            <div className="destination-item">
              <div className="destination-flag">🇺🇸</div>
              <h4>United States</h4>
              <p>B1/B2 Tourist & Business Visa</p>
              <div className="destination-info">
                <span><FaClock /> 15-30 days</span>
                <span><FaCalendarAlt /> Up to 10 years</span>
              </div>
            </div>
            <div className="destination-item">
              <div className="destination-flag">🇨🇦</div>
              <h4>Canada</h4>
              <p>Visitor Visa (TRV)</p>
              <div className="destination-info">
                <span><FaClock /> 20-40 days</span>
                <span><FaCalendarAlt /> Up to 10 years</span>
              </div>
            </div>
            <div className="destination-item">
              <div className="destination-flag">🇬🇧</div>
              <h4>United Kingdom</h4>
              <p>Standard Visitor Visa</p>
              <div className="destination-info">
                <span><FaClock /> 15-25 days</span>
                <span><FaCalendarAlt /> Up to 10 years</span>
              </div>
            </div>
            <div className="destination-item">
              <div className="destination-flag">🇦🇺</div>
              <h4>Australia</h4>
              <p>Visitor Visa (Subclass 600)</p>
              <div className="destination-info">
                <span><FaClock /> 20-30 days</span>
                <span><FaCalendarAlt /> Up to 10 years</span>
              </div>
            </div>
            <div className="destination-item">
              <div className="destination-flag">🇪🇺</div>
              <h4>Schengen Area</h4>
              <p>Short-stay Schengen Visa</p>
              <div className="destination-info">
                <span><FaClock /> 10-15 days</span>
                <span><FaCalendarAlt /> Up to 5 years</span>
              </div>
            </div>
            <div className="destination-item">
              <div className="destination-flag">🇸🇬</div>
              <h4>Singapore</h4>
              <p>Tourist/Business Visa</p>
              <div className="destination-info">
                <span><FaClock /> 3-5 days</span>
                <span><FaCalendarAlt /> Up to 10 years</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process section">
        <div className="container">
          <h2>Our Simple Process</h2>
          <div className="visit-process-timeline">
            <div className="visit-process-step">
              <div className="visit-step-number">1</div>
              <div className="visit-step-content">
                <h4>Consultation</h4>
                <p>Free assessment of your travel plans and visa requirements</p>
              </div>
            </div>
            <div className="visit-process-step">
              <div className="visit-step-number">2</div>
              <div className="visit-step-content">
                <h4>Documentation</h4>
                <p>Complete document checklist and preparation assistance</p>
              </div>
            </div>
            <div className="visit-process-step">
              <div className="visit-step-number">3</div>
              <div className="visit-step-content">
                <h4>Application</h4>
                <p>Professional application submission and tracking</p>
              </div>
            </div>
            <div className="visit-process-step">
              <div className="visit-step-number">4</div>
              <div className="visit-step-content">
                <h4>Approval</h4>
                <p>Visa collection and pre-travel guidance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose section light-bg">
        <div className="container">
          <h2>Why Choose Our Visit Visa Services?</h2>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="feature-box">
                <FaShieldAlt className="visit-feature-icon" />
                <h4>Guaranteed Security</h4>
                <p>Your documents and personal information are completely secure with us</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature-box">
                <FaClock className="visit-feature-icon" />
                <h4>Fast Processing</h4>
                <p>Quick turnaround times with priority processing options available</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature-box">
                <FaGlobe className="visit-feature-icon" />
                <h4>Global Network</h4>
                <p>Extensive network of partners and contacts worldwide</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature-box">
                <FaPassport className="visit-feature-icon" />
                <h4>Expert Guidance</h4>
                <p>Professional consultants with years of visa processing experience</p>
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
            <p>Get expert assistance for your visit visa application today. Our team is here to make your travel dreams come true.</p>
            <div className="cta-buttons">
              <button className="lmbtn">
                <Link to="/consultationForm" className="cta-link">
                  Get Free Consultation
                </Link>
              </button>
              <button className="btn-outline">
                <Link to="/" className="outline-link">
                  Learn More
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}