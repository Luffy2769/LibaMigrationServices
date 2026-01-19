import React from "react";
import "../Styles/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
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
              <div className="row g-3 mb-4">
                <div className="col-12 col-lg-6">
                  <div className="card px-3 py-4 h-100">
                    <h5 className="svt">What can we do for you?</h5>
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
                  <div className="card px-3 py-4 h-100 d-flex flex-column">
                    <h5 className="svt mb-3">Visa Services</h5>
                    <p>
                      <ul className="seccardtarget">
                        <li className="sv p-2 rounded bg-white">Work Visa</li>
                        <li className="sv p-2 rounded bg-white">Study Visa</li>
                        <li className="sv p-2 rounded bg-white">PR Visa</li>
                        <li className="sv p-2 rounded bg-white">Business Visa</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>

              <button className="primary-btn lmbtn">
                Get Free Consultation
              </button>
            </div>
            <div className="col-lg-5">
              <div className="hero-image-container">
                {/* <img 
                  src={process.env.PUBLIC_URL + "/s1.jpg"} 
                  alt="Global Migration Services" 
                  className="hero-image img-fluid rounded shadow"
                /> */}
              </div>
              <div className="form-box p-4 bg-white rounded shadow mt-4">
                <h3 className="mb-3">Quick Inquiry</h3>
                <form
                  action={"https://formspree.io/f/myzpbaqk"}
                  method="POST"
                  target="_blank"
                >
                  <input
                    type="text"
                    className="form-control mb-3 formElement"
                    name="Name"
                    placeholder="Full Name"
                    required
                  />
                  <input
                    type="email"
                    className="form-control mb-3 formElement"
                    name="Email"
                    placeholder="Email"
                    required
                  />
                  <input
                    type="tel"
                    className="form-control mb-3 formElement"
                    name="Phone"
                    placeholder="Phone"
                    required
                  />
                  <select
                    type="text"
                    className="form-select mb-3 formElement"
                    name="Services"
                    required
                  >
                    <option value="">Select Service</option>
                    <option>Immigration</option>
                    <option>Work abroad</option>
                    <option>Study Overseas</option>
                    <option>Visa services</option>
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
      <section className="section">
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

      {/* WHY CHOOSE US */}
      <section className="section light-bg">
        <div className="container">
          <h2>Why Choose Liba Migration?</h2>
          <div className="cards">
            <div className="card">Experienced Consultants</div>
            <div className="card">Personalized Strategies</div>
            <div className="card">Transparent Process</div>
            <div className="card">End-to-End Support</div>
          </div>
        </div>
      </section>
    </>
  );
}