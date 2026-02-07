import "../Styles/Visa.css";
import { Link } from "react-router-dom";
import { FaPlane, FaGraduationCap, FaBriefcase, FaHome, FaUserTie, FaShieldAlt, FaClock, FaCheckCircle } from 'react-icons/fa';

export default function Visa() {
  return (
    <div className="visa-page">
      <section className="visa-hero">
        <div className="container">
          <div className="row align-items-center text-center">
            <div className="col-lg-8 mx-auto">
              <h1 className="display-3 fw-bold mb-4">Visa Services for Every Purpose</h1>
              <p className="lead mb-4">
                Whether you plan to study, work, visit, or settle abroad — we offer complete visa guidance with expert support at every step.
              </p>
              <Link to="/consultationForm" className="btn btn-light btn-lg">Get Free Visa Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Our Visa Services</h2>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 shadow-sm border-0 text-center">
                <div className="card-body p-4">
                  <FaGraduationCap className="visa-page-icon text-primary mb-3" />
                  <h4 className="card-title">Study Visa</h4>
                  <p className="card-text">Student visa assistance for top universities worldwide, including documentation and interview preparation.</p>
                  <ul className="list-unstyled text-center small mt-3">
                    <li><FaCheckCircle className="text-success me-2" />University selection</li>
                    <li><FaCheckCircle className="text-success me-2" />SOP & LOR guidance</li>
                    <li><FaCheckCircle className="text-success me-2" />Visa interview prep</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 shadow-sm border-0 text-center">
                <div className="card-body p-4">
                  <FaBriefcase className="visa-page-icon text-success mb-3" />
                  <h4 className="card-title">Work Visa</h4>
                  <p className="card-text">Support for employer-sponsored and skilled worker visas across major global destinations.</p>
                  <ul className="list-unstyled text-center small mt-3">
                    <li><FaCheckCircle className="text-success me-2" />Job offer verification</li>
                    <li><FaCheckCircle className="text-success me-2" />LMIA/sponsorship support</li>
                    <li><FaCheckCircle className="text-success me-2" />Work permit processing</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 shadow-sm border-0 text-center">
                <div className="card-body p-4">
                  <FaPlane className="visa-page-icon text-info mb-3" />
                  <h4 className="card-title">Tourist / Visitor Visa</h4>
                  <p className="card-text">Short-term travel visa assistance for tourism, family visits, and business travel.</p>
                  <ul className="list-unstyled text-center small mt-3">
                    <li><FaCheckCircle className="text-success me-2" />Travel itinerary planning</li>
                    <li><FaCheckCircle className="text-success me-2" />Financial documentation</li>
                    <li><FaCheckCircle className="text-success me-2" />Quick processing</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 shadow-sm border-0 text-center">
                <div className="card-body p-4">
                  <FaHome className="visa-page-icon text-warning mb-3" />
                  <h4 className="card-title">Permanent Residency</h4>
                  <p className="card-text">Long-term settlement options including skilled migration and PR pathways.</p>
                  <ul className="list-unstyled text-center small mt-3">
                    <li><FaCheckCircle className="text-success me-2" />Points assessment</li>
                    <li><FaCheckCircle className="text-success me-2" />Express Entry support</li>
                    <li><FaCheckCircle className="text-success me-2" />PR application filing</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 shadow-sm border-0 text-center">
                <div className="card-body p-4">
                  <FaUserTie className="visa-page-icon text-danger mb-3" />
                  <h4 className="card-title">Business Visa</h4>
                  <p className="card-text">Entrepreneur and investor visa services for overseas business opportunities.</p>
                  <ul className="list-unstyled text-center small mt-3">
                    <li><FaCheckCircle className="text-success me-2" />Business plan review</li>
                    <li><FaCheckCircle className="text-success me-2" />Investment guidance</li>
                    <li><FaCheckCircle className="text-success me-2" />Startup visa support</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 shadow-sm border-0 text-center">
                <div className="card-body p-4">
                  <FaShieldAlt className="visa-page-icon text-secondary mb-3" />
                  <h4 className="card-title">Dependent Visa</h4>
                  <p className="card-text">Family reunification and dependent visa services for spouses and children.</p>
                  <ul className="list-unstyled text-center small mt-3">
                    <li><FaCheckCircle className="text-success me-2" />Relationship proof</li>
                    <li><FaCheckCircle className="text-success me-2" />Sponsorship documents</li>
                    <li><FaCheckCircle className="text-success me-2" />Family visa processing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Why Choose Us?</h2>
          <div className="row g-4">
            <div className="col-md-3 col-sm-6">
              <div className="text-center p-3">
                <div className="feature-badge bg-primary text-white rounded-circle mx-auto mb-3">
                  <FaShieldAlt />
                </div>
                <h5>Certified Consultants</h5>
                <p className="text-muted small">Licensed immigration experts</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="text-center p-3">
                <div className="feature-badge bg-success text-white rounded-circle mx-auto mb-3">
                  <FaCheckCircle />
                </div>
                <h5>High Success Rate</h5>
                <p className="text-muted small">95%+ visa approval rate</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="text-center p-3">
                <div className="feature-badge bg-info text-white rounded-circle mx-auto mb-3">
                  <FaClock />
                </div>
                <h5>Fast Processing</h5>
                <p className="text-muted small">Quick turnaround times</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="text-center p-3">
                <div className="feature-badge bg-warning text-white rounded-circle mx-auto mb-3">
                  <FaUserTie />
                </div>
                <h5>Personalized Service</h5>
                <p className="text-muted small">Tailored visa strategies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Our Visa Process</h2>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="visa-timeline">
                <div className="visa-timeline-item">
                  <div className="visa-timeline-badge">1</div>
                  <div className="visa-timeline-content">
                    <h5>Free Consultation</h5>
                    <p>Discuss your goals and assess visa options</p>
                  </div>
                </div>
                <div className="visa-timeline-item">
                  <div className="visa-timeline-badge">2</div>
                  <div className="visa-timeline-content">
                    <h5>Profile Evaluation</h5>
                    <p>Analyze eligibility and success probability</p>
                  </div>
                </div>
                <div className="visa-timeline-item">
                  <div className="visa-timeline-badge">3</div>
                  <div className="visa-timeline-content">
                    <h5>Visa Category Selection</h5>
                    <p>Choose the best visa type for your situation</p>
                  </div>
                </div>
                <div className="visa-timeline-item">
                  <div className="visa-timeline-badge">4</div>
                  <div className="visa-timeline-content">
                    <h5>Documentation Preparation</h5>
                    <p>Gather and verify all required documents</p>
                  </div>
                </div>
                <div className="visa-timeline-item">
                  <div className="visa-timeline-badge">5</div>
                  <div className="visa-timeline-content">
                    <h5>Application Submission</h5>
                    <p>File your visa application with authorities</p>
                  </div>
                </div>
                <div className="visa-timeline-item">
                  <div className="visa-timeline-badge">6</div>
                  <div className="visa-timeline-content">
                    <h5>Visa Tracking & Updates</h5>
                    <p>Monitor progress and provide regular updates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="visa-cta py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="mb-4">Need Help Choosing the Right Visa?</h2>
              <p className="lead mb-4">Our visa experts are ready to guide you through the entire process</p>
              <Link to="/consultationForm" className="btn btn-light btn-lg">Talk to Our Visa Experts</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
