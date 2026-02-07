import "../Styles/Work.css";
import { Link } from "react-router-dom";
import { MdWork, MdPublic, MdAttachMoney, MdTrendingUp, MdCardTravel, MdDescription, MdCheckCircle } from 'react-icons/md';

export default function Work() {
  return (
    <div className="work-page">
      <section className="work-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1 className="display-4 fw-bold mb-4">Launch Your Global Career</h1>
              <p className="lead mb-4">
                Unlock international work opportunities with expert visa guidance. From job search to visa approval, we're with you every step of the way.
              </p>
              <div className="d-flex gap-3 mb-4">
                <div className="stat-box">
                  <h3 className="fw-bold mb-0">5000+</h3>
                  <small>Work Visas Processed</small>
                </div>
                <div className="stat-box">
                  <h3 className="fw-bold mb-0">92%</h3>
                  <small>Success Rate</small>
                </div>
              </div>
              <Link to="/consultationForm" className="btn btn-primary btn-lg">Start Your Journey</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-3 col-sm-6">
              <div className="text-center">
                <MdAttachMoney className="work-feature-icon text-success mb-3" />
                <h5>Higher Earnings</h5>
                <p className="text-muted">Competitive salaries abroad</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="text-center">
                <MdPublic className="work-feature-icon text-primary mb-3" />
                <h5>Global Exposure</h5>
                <p className="text-muted">Work with top companies</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="text-center">
                <MdTrendingUp className="work-feature-icon text-warning mb-3" />
                <h5>Career Growth</h5>
                <p className="text-muted">Accelerate your career</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="text-center">
                <MdWork className="work-feature-icon text-info mb-3" />
                <h5>PR Pathways</h5>
                <p className="text-muted">Settle abroad permanently</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Top Work Destinations</h2>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <div className="work-country-flag mb-3">🇨🇦</div>
                  <h4 className="card-title">Canada</h4>
                  <p className="card-text">LMIA-based work permits with pathways to PR through Express Entry.</p>
                  <ul className="list-unstyled small">
                    <li><MdCheckCircle className="text-success me-2" />High demand sectors</li>
                    <li><MdCheckCircle className="text-success me-2" />Family sponsorship</li>
                    <li><MdCheckCircle className="text-success me-2" />PR in 1-2 years</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <div className="work-country-flag mb-3">🇦🇺</div>
                  <h4 className="card-title">Australia</h4>
                  <p className="card-text">Employer-sponsored visas (TSS 482) with PR options after 3 years.</p>
                  <ul className="list-unstyled small">
                    <li><MdCheckCircle className="text-success me-2" />Skilled occupation list</li>
                    <li><MdCheckCircle className="text-success me-2" />High salaries</li>
                    <li><MdCheckCircle className="text-success me-2" />Quality lifestyle</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <div className="work-country-flag mb-3">🇬🇧</div>
                  <h4 className="card-title">United Kingdom</h4>
                  <p className="card-text">Skilled Worker visa with 5-year settlement route available.</p>
                  <ul className="list-unstyled small">
                    <li><MdCheckCircle className="text-success me-2" />No cap on visas</li>
                    <li><MdCheckCircle className="text-success me-2" />Family inclusion</li>
                    <li><MdCheckCircle className="text-success me-2" />ILR after 5 years</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <div className="work-country-flag mb-3">🇺🇸</div>
                  <h4 className="card-title">USA</h4>
                  <p className="card-text">H-1B specialty occupation visas for skilled professionals.</p>
                  <ul className="list-unstyled small">
                    <li><MdCheckCircle className="text-success me-2" />Tech opportunities</li>
                    <li><MdCheckCircle className="text-success me-2" />Top salaries</li>
                    <li><MdCheckCircle className="text-success me-2" />Green card pathway</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Our Work Visa Services</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="service-box p-4 bg-white rounded shadow-sm h-100">
                <MdCardTravel className="work-service-icon text-primary mb-3" />
                <h5>Visa Assessment</h5>
                <p className="text-muted">Evaluate your eligibility for work visas across multiple countries based on your profile.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-box p-4 bg-white rounded shadow-sm h-100">
                <MdDescription className="work-service-icon text-primary mb-3" />
                <h5>Documentation Support</h5>
                <p className="text-muted">Complete assistance with resume, cover letters, credential evaluation, and visa documents.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-box p-4 bg-white rounded shadow-sm h-100">
                <MdWork className="work-service-icon text-primary mb-3" />
                <h5>Job Search Guidance</h5>
                <p className="text-muted">Connect with employers, job portals, and recruitment agencies in your target country.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="mb-4">Work Visa Requirements</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><MdCheckCircle className="text-success me-2" />Valid job offer or employment contract</li>
                <li className="list-group-item"><MdCheckCircle className="text-success me-2" />Updated resume and professional certificates</li>
                <li className="list-group-item"><MdCheckCircle className="text-success me-2" />Valid passport with 6+ months validity</li>
                <li className="list-group-item"><MdCheckCircle className="text-success me-2" />Proof of work experience and education</li>
                <li className="list-group-item"><MdCheckCircle className="text-success me-2" />Language proficiency test (IELTS/PTE)</li>
                <li className="list-group-item"><MdCheckCircle className="text-success me-2" />Police clearance and medical certificates</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="bg-primary text-white p-5 rounded">
                <h3 className="mb-4">Ready to Work Abroad?</h3>
                <p className="mb-4">Book a free consultation with our certified work visa experts and get personalized guidance.</p>
                <Link to="/consultationForm" className="btn btn-light btn-lg">Get Free Consultation</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
