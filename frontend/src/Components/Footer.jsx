import React from "react";
import { Link } from "react-router-dom";
import { 
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import "../Styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <img
                src={process.env.PUBLIC_URL + "/Logo.png"} 
                alt="VEA"
                className="logo-img"
                height="70px"
              />
              <h3>Vidya Education Abroad</h3>
            </div>
            <p className="footer-description">
              Your trusted partner for immigration, study abroad, and work visa
              services. We help make your global dreams a reality with expert
              guidance and personalized support.
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/libamigration?mibextid=wwXIfr&mibextid=wwXIfr" className="social-link">
                <FaFacebook />
              </a>
              <a href="#" className="social-link">
                <FaTwitter />
              </a>
              <a href="#" className="social-link">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/liba_migration?igsh=eDRkdXR3NWozZTdr" className="social-link">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4>Our Services</h4>
            <ul className="footer-links">
              <li>
                <Link to="/study">Study Abroad</Link>
              </li>
              <li>
                <Link to="/migrate">Immigration Services</Link>
              </li>
              <li>
                <Link to="/work">Work Visas</Link>
              </li>
              <li>
                <Link to="/visa">Visa Consultation</Link>
              </li>
              <li>
                <Link to="/coaching">IELTS Coaching</Link>
              </li>
            </ul>
          </div>

          {/* Countries */}
          <div className="footer-section">
            <h4>Popular Destinations</h4>
            <ul className="footer-links">
              <li>
                <a href="#">Canada</a>
              </li>
              <li>
                <a href="#">Australia</a>
              </li>
              <li>
                <a href="#">United Kingdom</a>
              </li>
              <li>
                <a href="#">United States</a>
              </li>
              <li>
                <a href="#">Germany</a>
              </li>
              <li>
                <a href="#">New Zealand</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Contact Us</h4>
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>Amar Jyoti CHS, Andheri west, Mumbai </span>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span>+91 8850285886</span>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>jafar@libamigrationservices.com</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="newsletter">
              <h5>Subscribe to Our Newsletter</h5>
              <form className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-btn">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2026 Vidya Education Abroad. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}