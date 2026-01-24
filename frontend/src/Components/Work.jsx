import "../Styles/Work.css";
import { Link } from "react-router-dom";

export default function Work() {
  return (
    <div className="work-page">
      {/* HERO */}
      <section className="work-hero">
        <div className="container">
          <h1>Work Abroad — Global Work Visa Support</h1>
          <p>
            Explore opportunities to live and work overseas. We guide you
            through job search, visa applications, and documentation support.
          </p>
        </div>
      </section>

      {/* WHAT IS WORK VISA */}
      <section className="section">
        <div className="container">
          <h2>What is a Work Visa?</h2>
          <p>
            A work visa allows you to legally work in a foreign country for a
            specified period. It’s usually tied to a job offer and employer
            sponsorship, and is essential before you start work abroad. Our team
            helps you identify the right visa type and supports your application
            from start to finish.
          </p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section light-bg">
        <div className="container">
          <h2>Why Work Overseas?</h2>
          <ul>
            <li>Access to higher salary opportunities</li>
            <li>Work with global organisations</li>
            <li>Gain international experience</li>
            <li>Improve quality of life and future prospects</li>
          </ul>
        </div>
      </section>

      {/* COUNTRY OPTIONS */}
      <section className="section">
        <div className="container">
          <h2>Top Work Visa Destinations</h2>

          {/* COUNTRY CARDS */}
          <div className="cards">
            <div className="card">
              <h3>Canada Work Visa</h3>
              <p>
                Apply for a Canadian work permit with a confirmed job offer. We
                help with LMIA, documentation, and submission support.
              </p>
            </div>

            <div className="card">
              <h3>Australia Work Visa</h3>
              <p>
                Temporary or permanent work visas with employer sponsorship. We
                guide through nomination and eligibility checks.
              </p>
            </div>

            <div className="card">
              <h3>UK Work Visa</h3>
              <p>
                Skilled Worker visas and other UK work routes based on your
                profile and job offer.
              </p>
            </div>

            <div className="card">
              <h3>USA Work Visa</h3>
              <p>
                H-1B, L-1 and other employment-based visas with application
                assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DOCUMENTS & REQUIREMENTS */}
      <section className="section light-bg">
        <div className="container">
          <h2>Work Visa Requirements</h2>
          <ul>
            <li>Valid job offer or employment contract</li>
            <li>Updated resume and professional certificates</li>
            <li>Valid passport & photos</li>
            <li>Proof of experience and education</li>
            <li>Language test results (if required)</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Work Abroad?</h2>
          <button className="btn-primary">
                        <Link to="/consultationForm" className="cButton">
            Get a Free Work Visa Consultation
            </Link>
          </button>
        </div>
      </section>
    </div>
  );
}