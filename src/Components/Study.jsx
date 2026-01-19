import "../Styles/Study.css";

export default function Study() {
  return (
    <div className="study-page">

      {/* HERO */}
      <section className="study-hero">
        <div className="container">
          <h1>Study Abroad with Expert Guidance</h1>
          <p>
            Start your international education journey with complete support —
            from university selection to visa approval.
          </p>

          <button className="lmbtn">
            Get Free Study Consultation
          </button>
        </div>
      </section>

      {/* WHY STUDY ABROAD */}
      <section className="section">
        <div className="container">
          <h2>Why Study Abroad?</h2>

          <div className="grid">
            <div className="box">Globally recognised universities</div>
            <div className="box">Better career opportunities</div>
            <div className="box">International exposure</div>
            <div className="box">Post-study work options</div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section light-bg">
        <div className="container">
          <h2>Our Study Abroad Services</h2>

          <div className="grid">
            <div className="card">
              <h3>Course & University Selection</h3>
              <p>
                Shortlisting universities based on your academic background,
                budget, and career goals.
              </p>
            </div>

            <div className="card">
              <h3>Application Assistance</h3>
              <p>
                End-to-end support for forms, documentation, and submissions.
              </p>
            </div>

            <div className="card">
              <h3>Scholarship Guidance</h3>
              <p>
                Assistance in identifying scholarships and financial options.
              </p>
            </div>

            <div className="card">
              <h3>Student Visa Support</h3>
              <p>
                Complete visa documentation and interview preparation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COUNTRIES */}
      <section className="section">
        <div className="container">
          <h2>Top Study Destinations</h2>

          <div className="grid">
            <div className="country">Canada</div>
            <div className="country">Australia</div>
            <div className="country">United Kingdom</div>
            <div className="country">United States</div>
            <div className="country">Germany</div>
            <div className="country">New Zealand</div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section light-bg">
        <div className="container">
          <h2>Our Study Abroad Process</h2>

          <div className="steps">
            <div className="step">1. Free Counselling</div>
            <div className="step">2. Profile Evaluation</div>
            <div className="step">3. University Shortlisting</div>
            <div className="step">4. Applications & Offers</div>
            <div className="step">5. Visa Filing</div>
            <div className="step">6. Pre-Departure Support</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="study-cta">
        <div className="container">
          <h2>Begin Your Study Abroad Journey Today</h2>
          <button className="primary-btn">
            Talk to Our Counsellors
          </button>
        </div>
      </section>

    </div>
  );
}