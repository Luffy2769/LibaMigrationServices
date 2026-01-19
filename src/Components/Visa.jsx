import "../Styles/Visa.css";

export default function Visa() {
  return (
    <div className="visa-page">

      {/* HERO */}
      <section className="visa-hero">
        <div className="container">
          <h1>Visa Services for Every Purpose</h1>
          <p>
            Whether you plan to study, work, visit, or settle abroad —
            Liba Migration offers complete visa guidance with expert support.
          </p>

          <button className="lmbtn">
            Get Free Visa Consultation
          </button>
        </div>
      </section>

      {/* VISA TYPES */}
      <section className="section">
        <div className="container">
          <h2>Our Visa Services</h2>

          <div className="grid">
            <div className="card">
              <h3>Study Visa</h3>
              <p>
                Student visa assistance for top universities across the world,
                including documentation and interview preparation.
              </p>
            </div>

            <div className="card">
              <h3>Work Visa</h3>
              <p>
                Support for employer-sponsored and skilled worker visas across
                major global destinations.
              </p>
            </div>

            <div className="card">
              <h3>Tourist / Visitor Visa</h3>
              <p>
                Short-term travel visa assistance for tourism, family visits,
                and business travel.
              </p>
            </div>

            <div className="card">
              <h3>Permanent Residency</h3>
              <p>
                Long-term settlement options including skilled migration and
                PR pathways.
              </p>
            </div>

            <div className="card">
              <h3>Business Visa</h3>
              <p>
                Entrepreneur and investor visa services for overseas business
                opportunities.
              </p>
            </div>

            <div className="card">
              <h3>Dependent Visa</h3>
              <p>
                Visa support for spouses, children, and family members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="section light-bg">
        <div className="container">
          <h2>Why Choose Liba Migration?</h2>

          <div className="grid">
            <div className="box">Certified visa consultants</div>
            <div className="box">Profile-based visa strategy</div>
            <div className="box">Updated immigration policies</div>
            <div className="box">End-to-end documentation support</div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container">
          <h2>Our Visa Process</h2>

          <div className="steps">
            <div className="step">1. Free Consultation</div>
            <div className="step">2. Profile Evaluation</div>
            <div className="step">3. Visa Category Selection</div>
            <div className="step">4. Documentation Preparation</div>
            <div className="step">5. Application Submission</div>
            <div className="step">6. Visa Tracking & Updates</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="visa-cta">
        <div className="container">
          <h2>Need Help Choosing the Right Visa?</h2>
          <button className="primary-btn">
            Talk to Our Visa Experts
          </button>
        </div>
      </section>

    </div>
  );
}