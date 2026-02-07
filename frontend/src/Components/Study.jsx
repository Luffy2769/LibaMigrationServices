import "../Styles/Study.css";
import { FaGraduationCap, FaGlobe, FaBriefcase, FaUsers, FaBookOpen, FaFileAlt, FaHandshake, FaPlane } from 'react-icons/fa';
import { Link } from "react-router-dom";
export default function Study() {
  return (
    <div className="study-page">

      {/* HERO */}
      <section className="study-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Study Abroad with Expert Guidance</h1>
              <p>
                Transform your future with world-class education. We provide complete support 
                from university selection to visa approval and beyond.
              </p>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">2000+</span>
                  <span className="stat-label">Students Placed</span>
                </div>
                <div className="stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Partner Universities</span>
                </div>
                <div className="stat">
                  <span className="stat-number">95%</span>
                  <span className="stat-label">Visa Success Rate</span>
                </div>
              </div>
              <button className="lmbtn">
                            <Link to="/consultationForm" className="cButton">
                Get Free Study Consultation
                </Link>
              </button>
            </div>
            <div className="hero-image">
              <div className="study-floating-elements">
                <div className="study-floating-card">
                  <FaGraduationCap className="study-card-icon" />
                  <span>Top Universities</span>
                </div>
                <div className="study-floating-card">
                  <FaGlobe className="study-card-icon" />
                  <span>25+ Countries</span>
                </div>
                <div className="study-floating-card">
                  <FaBriefcase className="study-card-icon" />
                  <span>Career Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY STUDY ABROAD */}
      <section className="section">
        <div className="container">
          <h2>Why Study Abroad?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <FaGraduationCap />
              </div>
              <h3>World-Class Education</h3>
              <p>Access to globally recognized universities with cutting-edge research facilities and innovative teaching methods.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <FaBriefcase />
              </div>
              <h3>Better Career Prospects</h3>
              <p>International degree opens doors to global career opportunities with higher earning potential.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <FaUsers />
              </div>
              <h3>Cultural Exposure</h3>
              <p>Experience diverse cultures, build international networks, and develop a global perspective.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <FaPlane />
              </div>
              <h3>Post-Study Work Options</h3>
              <p>Many countries offer work permits after graduation, providing pathways to permanent residency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section light-bg">
        <div className="container">
          <h2>Our Comprehensive Study Abroad Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <FaBookOpen />
              </div>
              <h3>Course & University Selection</h3>
              <p>Personalized counseling to shortlist universities based on your academic background, budget, and career aspirations.</p>
              <ul className="service-features">
                <li>Academic profile assessment</li>
                <li>University ranking analysis</li>
                <li>Course curriculum review</li>
                <li>Budget planning</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <FaFileAlt />
              </div>
              <h3>Application Assistance</h3>
              <p>Complete support for university applications, documentation, and submission processes.</p>
              <ul className="service-features">
                <li>Application form completion</li>
                <li>Document preparation</li>
                <li>SOP & LOR writing</li>
                <li>Application tracking</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <FaHandshake />
              </div>
              <h3>Scholarship Guidance</h3>
              <p>Expert assistance in identifying and applying for scholarships and financial aid opportunities.</p>
              <ul className="service-features">
                <li>Scholarship research</li>
                <li>Eligibility assessment</li>
                <li>Application support</li>
                <li>Financial planning</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <FaPlane />
              </div>
              <h3>Student Visa Support</h3>
              <p>Complete visa documentation, interview preparation, and submission assistance.</p>
              <ul className="service-features">
                <li>Visa documentation</li>
                <li>Interview preparation</li>
                <li>Embassy liaison</li>
                <li>Travel arrangements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COUNTRIES */}
      <section className="section">
        <div className="container">
          <h2>Top Study Destinations</h2>
          <div className="countries-grid">
            <div className="country-card">
              <div className="country-flag">🇨🇦</div>
              <h3>Canada</h3>
              <div className="country-info">
                <p><strong>Popular Programs:</strong> Engineering, Business, Computer Science</p>
                <p><strong>Work Permit:</strong> 3 years post-graduation</p>
                <p><strong>Tuition Range:</strong> $15,000 - $35,000 CAD</p>
              </div>
              <div className="country-features">
                <span className="feature-tag">High Quality Education</span>
                <span className="feature-tag">Multicultural</span>
                <span className="feature-tag">PR Pathway</span>
              </div>
            </div>

            <div className="country-card">
              <div className="country-flag">🇦🇺</div>
              <h3>Australia</h3>
              <div className="country-info">
                <p><strong>Popular Programs:</strong> Medicine, Engineering, MBA</p>
                <p><strong>Work Permit:</strong> 2-4 years post-graduation</p>
                <p><strong>Tuition Range:</strong> $20,000 - $45,000 AUD</p>
              </div>
              <div className="country-features">
                <span className="feature-tag">Research Excellence</span>
                <span className="feature-tag">Great Climate</span>
                <span className="feature-tag">Work Opportunities</span>
              </div>
            </div>

            <div className="country-card">
              <div className="country-flag">🇬🇧</div>
              <h3>United Kingdom</h3>
              <div className="country-info">
                <p><strong>Popular Programs:</strong> Finance, Law, Medicine</p>
                <p><strong>Work Permit:</strong> 2 years post-graduation</p>
                <p><strong>Tuition Range:</strong> £15,000 - £40,000</p>
              </div>
              <div className="country-features">
                <span className="feature-tag">Historic Universities</span>
                <span className="feature-tag">1-Year Masters</span>
                <span className="feature-tag">Global Recognition</span>
              </div>
            </div>

            <div className="country-card">
              <div className="country-flag">🇺🇸</div>
              <h3>United States</h3>
              <div className="country-info">
                <p><strong>Popular Programs:</strong> STEM, Business, Liberal Arts</p>
                <p><strong>Work Permit:</strong> 1-3 years (OPT/STEM)</p>
                <p><strong>Tuition Range:</strong> $25,000 - $60,000 USD</p>
              </div>
              <div className="country-features">
                <span className="feature-tag">Top Rankings</span>
                <span className="feature-tag">Innovation Hub</span>
                <span className="feature-tag">Diverse Programs</span>
              </div>
            </div>

            <div className="country-card">
              <div className="country-flag">🇩🇪</div>
              <h3>Germany</h3>
              <div className="country-info">
                <p><strong>Popular Programs:</strong> Engineering, Technology, Research</p>
                <p><strong>Work Permit:</strong> 18 months job search</p>
                <p><strong>Tuition Range:</strong> €0 - €20,000 (Public Unis)</p>
              </div>
              <div className="country-features">
                <span className="feature-tag">Low/No Tuition</span>
                <span className="feature-tag">Strong Economy</span>
                <span className="feature-tag">Research Focus</span>
              </div>
            </div>

            <div className="country-card">
              <div className="country-flag">🇳🇿</div>
              <h3>New Zealand</h3>
              <div className="country-info">
                <p><strong>Popular Programs:</strong> Agriculture, Tourism, IT</p>
                <p><strong>Work Permit:</strong> 3 years post-graduation</p>
                <p><strong>Tuition Range:</strong> $22,000 - $35,000 NZD</p>
              </div>
              <div className="country-features">
                <span className="feature-tag">Safe Environment</span>
                <span className="feature-tag">Natural Beauty</span>
                <span className="feature-tag">Work-Life Balance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section light-bg">
        <div className="container">
          <h2>Our Study Abroad Process</h2>
          <div className="process-timeline">
            <div className="timeline-item">
              <div className="timeline-number">1</div>
              <div className="timeline-content">
                <h3>Free Counselling & Assessment</h3>
                <p>Comprehensive evaluation of your academic background, career goals, and preferences to create a personalized study plan.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">2</div>
              <div className="timeline-content">
                <h3>University & Course Selection</h3>
                <p>Shortlist universities and programs that match your profile, budget, and career aspirations with detailed comparison.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">3</div>
              <div className="timeline-content">
                <h3>Application Preparation</h3>
                <p>Complete assistance with application forms, essays, recommendation letters, and all required documentation.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">4</div>
              <div className="timeline-content">
                <h3>Admission & Scholarship</h3>
                <p>Track applications, negotiate with universities, and secure admission offers along with scholarship opportunities.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">5</div>
              <div className="timeline-content">
                <h3>Visa Processing</h3>
                <p>Complete visa documentation, interview preparation, and submission to ensure successful visa approval.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">6</div>
              <div className="timeline-content">
                <h3>Pre-Departure Support</h3>
                <p>Accommodation assistance, travel arrangements, and orientation to help you settle in your new country.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="section">
        <div className="container">
          <h2>Success Stories</h2>
          <div className="success-stories">
            <div className="story-card">
              <div className="story-image">
                <div className="story-avatar">👨🏼‍🎓</div>
              </div>
              <div className="story-content">
                <h4>Rahul Sharma</h4>
                <p className="story-destination">University of Toronto, Canada</p>
                <p>"Thanks to VE Abroad, I secured admission to my dream university with a 50% scholarship. Their guidance throughout the process was invaluable."</p>
                <div className="story-program">Masters in Computer Science</div>
              </div>
            </div>
            <div className="story-card">
              <div className="story-image">
                <div className="story-avatar">👩🏽‍🎓</div>
              </div>
              <div className="story-content">
                <h4>Priya Patel</h4>
                <p className="story-destination">University of Melbourne, Australia</p>
                <p>"The team helped me navigate the complex application process and I'm now pursuing my PhD in Biotechnology with full funding."</p>
                <div className="story-program">PhD in Biotechnology</div>
              </div>
            </div>
            <div className="story-card">
              <div className="story-image">
                <div className="story-avatar">👨🏿‍🎓</div>
              </div>
              <div className="story-content">
                <h4>Ahmed Khan</h4>
                <p className="story-destination">London School of Economics, UK</p>
                <p>"From application to visa approval, everything was handled professionally. Now I'm studying at one of the world's top business schools."</p>
                <div className="story-program">MBA in Finance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="study-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Begin Your Study Abroad Journey?</h2>
            <p>Join thousands of successful students who have achieved their dreams with our expert guidance.</p>
            <div className="cta-buttons">
              <button className="lmbtn">
                            <Link to="/consultationForm" className="cButton">
                Book Free Consultation
                </Link>
              </button>
              <button className="lmbtn-outline cta-secondary">
                Download Study Guide
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}