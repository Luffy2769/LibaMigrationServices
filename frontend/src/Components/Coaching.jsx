import React from 'react';
import { FaGraduationCap, FaBookOpen, FaUsers, FaClock, FaTrophy, FaChartLine } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../Styles/Coaching.css';

export default function Coaching() {
  return (
    <div className="coaching-page">
      {/* HERO */}
      <section className="coaching-hero">
        <div className="container">
          <div className="hero-content">
            <h1>IELTS & English Language Coaching</h1>
            <p>
              Achieve your target IELTS score with our expert coaching programs. 
              Personalized training to help you succeed in your study abroad journey.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">95%</span>
                <span className="stat-label">Success Rate</span>
              </div>
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Students Trained</span>
              </div>
              <div className="stat">
                <span className="stat-number">8.5</span>
                <span className="stat-label">Average Band Score</span>
              </div>
            </div>
            <button className="lmbtn hero-btn">
              Enroll Now - Coming Soon
            </button>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="section">
        <div className="container">
          <h2>Our Coaching Programs</h2>
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-icon">
                <FaGraduationCap />
              </div>
              <h3>IELTS Preparation</h3>
              <p>Comprehensive IELTS training covering all four modules: Listening, Reading, Writing, and Speaking.</p>
              <ul className="program-features">
                <li>Mock tests and practice sessions</li>
                <li>Individual feedback and improvement plans</li>
                <li>Exam strategies and time management</li>
                <li>Band score guarantee programs</li>
              </ul>
              <div className="program-duration">Duration: 6-8 weeks</div>
            </div>

            <div className="program-card">
              <div className="program-icon">
                <FaBookOpen />
              </div>
              <h3>General English</h3>
              <p>Build strong English foundation with our general English courses for everyday communication.</p>
              <ul className="program-features">
                <li>Grammar and vocabulary building</li>
                <li>Conversation practice sessions</li>
                <li>Business English modules</li>
                <li>Pronunciation improvement</li>
              </ul>
              <div className="program-duration">Duration: 4-12 weeks</div>
            </div>
 
            <div className="program-card">
              <div className="program-icon">
                <FaUsers />
              </div>
              <h3>Group Classes</h3>
              <p>Interactive group sessions with peer learning and collaborative practice opportunities.</p>
              <ul className="program-features">
                <li>Small batch sizes (8-12 students)</li>
                <li>Interactive learning environment</li>
                <li>Group discussions and debates</li>
                <li>Affordable pricing options</li>
              </ul>
              <div className="program-duration">Duration: Flexible</div>
            </div>

            <div className="program-card">
              <div className="program-icon">
                <FaClock />
              </div>
              <h3>One-on-One Coaching</h3>
              <p>Personalized coaching sessions tailored to your specific needs and learning pace.</p>
              <ul className="program-features">
                <li>Customized study plans</li>
                <li>Flexible scheduling</li>
                <li>Intensive focus on weak areas</li>
                <li>Rapid improvement guarantee</li>
              </ul>
              <div className="program-duration">Duration: As needed</div>
            </div>
          </div>
        </div>
      </section>

      {/* COACHING SCHEDULE */}
      <section className="coaching-schedule">
        <div className="container">
          <div className="schedule-header">
            <h2>Coaching Schedule</h2>
            <p>Join our expert-led coaching sessions to excel in your exams. Choose from multiple dates throughout the month.</p>
          </div>
          
          <div className="schedule-grid">
            <div className="exam-card">
              <div className="exam-header">
                <div className="exam-icon">IE</div>
                <div className="exam-title">
                  <h3>IELTS</h3>
                  <div className="exam-subtitle">International English Language Testing</div>
                </div>
              </div>
              <div className="dates-container">
                <div className="date-badge">
                  <div className="date">2nd</div>
                  <div className="time">6:00 PM - 7:30 PM</div>
                </div>
                <div className="date-badge">
                  <div className="date">5th</div>
                  <div className="time">10:00 PM - 11:30 PM</div>
                </div>
                <div className="date-badge">
                  <div className="date">10th</div>
                  <div className="time">8:00 AM - 9:30 AM</div>
                </div>
                <div className="date-badge">
                  <div className="date">13th</div>
                  <div className="time">8:00 PM - 9:30 PM</div>
                </div>
                <div className="date-badge">
                  <div className="date">17th</div>
                  <div className="time">6:00 PM - 7:30 PM</div>
                </div>
                <div className="date-badge">
                  <div className="date">20th</div>
                  <div className="time">8:00 PM - 9:30 PM</div>
                </div>
                <div className="date-badge">
                  <div className="date">21st</div>
                  <div className="time">8:00 AM - 9:30 AM</div>
                </div>
              </div>
            </div>

            <div className="exam-card">
              <div className="exam-header">
                <div className="exam-icon">TO</div>
                <div className="exam-title">
                  <h3>TOEFL</h3>
                  <div className="exam-subtitle">Test of English as Foreign Language</div>
                </div>
              </div>
              <div className="dates-container">
                <div className="date-badge">
                  <div className="date">4th</div>
                  <div className="time">7:30 PM - 8:30 PM</div>
                </div>
              </div>
            </div>

            <div className="exam-card">
              <div className="exam-header">
                <div className="exam-icon">PE</div>
                <div className="exam-title">
                  <h3>Pearson PTE</h3>
                  <div className="exam-subtitle">Pearson Test of English</div>
                </div>
              </div>
              <div className="dates-container">
                <div className="date-badge">
                  <div className="date">9th</div>
                  <div className="time">10:00 PM - 11:30 PM</div>
                </div>
                <div className="date-badge">
                  <div className="date">19th</div>
                  <div className="time">6:00 PM - 7:30 PM</div>
                </div>
                <div className="date-badge">
                  <div className="date">24th</div>
                  <div className="time">8:00 AM - 9:30 AM</div>
                </div>
              </div>
            </div>

            <div className="exam-card">
              <div className="exam-header">
                <div className="exam-icon">DU</div>
                <div className="exam-title">
                  <h3>Duolingo</h3>
                  <div className="exam-subtitle">Duolingo English Test</div>
                </div>
              </div>
              <div className="dates-container">
                <div className="date-badge">
                  <div className="date">6th</div>
                  <div className="time">8:00 AM - 9:30 AM</div>
                </div>
                <div className="date-badge">
                  <div className="date">18th</div>
                  <div className="time">10:00 PM - 11:30 PM</div>
                </div>
              </div>
            </div>

            <div className="exam-card">
              <div className="exam-header">
                <div className="exam-icon">SA</div>
                <div className="exam-title">
                  <h3>SAT</h3>
                  <div className="exam-subtitle">Scholastic Assessment Test</div>
                </div>
              </div>
              <div className="dates-container">
                <div className="date-badge">
                  <div className="date">6th</div>
                  <div className="time">6:00 PM - 7:30 PM</div>
                </div>
                <div className="date-badge">
                  <div className="date">17th</div>
                  <div className="time">8:00 PM - 9:30 PM</div>
                </div>
              </div>
            </div>

            <div className="exam-card">
              <div className="exam-header">
                <div className="exam-icon">DE</div>
                <div className="exam-title">
                  <h3>German</h3>
                  <div className="exam-subtitle">German Language Proficiency</div>
                </div>
              </div>
              <div className="dates-container">
                <div className="date-badge">
                  <div className="date">2nd</div>
                  <div className="time">6:30 PM - 8:00 PM</div>
                  <div className="level">B1 Level</div>
                </div>
                <div className="date-badge">
                  <div className="date">7th</div>
                  <div className="time">7:00 AM - 8:30 AM</div>
                  <div className="level">A1 Level</div>
                </div>
                <div className="date-badge">
                  <div className="date">17th</div>
                  <div className="time">10:00 PM - 11:30 PM</div>
                  <div className="level">A1 Level</div>
                </div>
              </div>
            </div>

            <div className="exam-card">
              <div className="exam-header">
                <div className="exam-icon">FR</div>
                <div className="exam-title">
                  <h3>French</h3>
                  <div className="exam-subtitle">French Language Proficiency</div>
                </div>
              </div>
              <div className="dates-container">
                <div className="date-badge">
                  <div className="date">10th</div>
                  <div className="time">4:30 PM - 6:00 PM</div>
                  <div className="level">A2 Level</div>
                </div>
                <div className="date-badge">
                  <div className="date">12th</div>
                  <div className="time">7:30 AM - 9:00 AM</div>
                  <div className="level">A1 Level</div>
                </div>
                <div className="date-badge">
                  <div className="date">21st</div>
                  <div className="time">6:30 PM - 8:00 PM</div>
                  <div className="level">A1 Level</div>
                </div>
              </div>
            </div>

            <div className="exam-card">
              <div className="exam-header">
                <div className="exam-icon">GR</div>
                <div className="exam-title">
                  <h3>GRE | GMAT</h3>
                  <div className="exam-subtitle">Graduate Record Exam | Management Test</div>
                </div>
              </div>
              <div className="dates-container">
                <div className="date-badge">
                  <div className="date">10th</div>
                  <div className="time">7:30 AM - 9:00 AM</div>
                </div>
                <div className="date-badge">
                  <div className="date">23rd</div>
                  <div className="time">8:00 PM - 9:30 PM</div>
                </div>
              </div>
            </div>
          </div>

          <div className="schedule-cta">
            <h3>Ready to Start Your Preparation?</h3>
            <p>Book your coaching session today and get personalized guidance from our expert instructors.</p>
            <button className="lmbtn">
              <Link to="/consultationForm" className="cButton">
                Book Coaching Session
              </Link>
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section light-bg">
        <div className="container">
          <h2>Why Choose Our Coaching?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FaTrophy />
              </div>
              <h3>Expert Instructors</h3>
              <p>Learn from certified IELTS trainers with years of teaching experience and proven track records.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaChartLine />
              </div>
              <h3>Proven Results</h3>
              <p>95% of our students achieve their target band scores within the first attempt.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaBookOpen />
              </div>
              <h3>Comprehensive Materials</h3>
              <p>Access to latest IELTS preparation books, online resources, and practice tests.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaUsers />
              </div>
              <h3>Small Batch Sizes</h3>
              <p>Limited students per batch ensuring personalized attention and better learning outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <div className="container">
          <h2>Student Success Stories</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The coaching helped me improve from 6.0 to 8.5 in just 6 weeks. The instructors were amazing!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Priya Sharma</h4>
                  <span>IELTS Score: 8.5</span>
                </div>
                <div className="rating">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Excellent teaching methods and personalized feedback. Achieved my target score for Canada PR."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Rahul Patel</h4>
                  <span>IELTS Score: 8.0</span>
                </div>
                <div className="rating">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The mock tests and speaking practice sessions were incredibly helpful for my preparation."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Anjali Singh</h4>
                  <span>IELTS Score: 7.5</span>
                </div>
                <div className="rating">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMING SOON */}
      <section className="coming-soon-section">
        <div className="container">
          <div className="coming-soon-content">
            <h2>🚀 Launching Soon!</h2>
            <p>Our comprehensive IELTS coaching program is currently under development. We're working hard to bring you the best learning experience.</p>
            <div className="coming-soon-features">
              <div className="feature-item">📚 Updated curriculum based on latest IELTS format</div>
              <div className="feature-item">👨‍🏫 Certified and experienced instructors</div>
              <div className="feature-item">📊 Regular progress tracking and feedback</div>
            </div>
            <div className="notify-section">
              <h3>Get Notified When We Launch</h3>
              <p>Be the first to know when our coaching programs are available!</p>
              <button className="lmbtn notify-btn">
                Notify Me - Coming Soon
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}