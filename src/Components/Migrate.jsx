import "../Styles/Migrate.css";

export default function Migrate() {
  return (
    <div className="migrate-page">
      {/* HERO + FORM */}
      <section className="migrate-hero">
        <div className="container">
          <h1>Immigrate & Build Your Global Future</h1>
          <p>
            Discover the best migration route for you and your family with
            tailored support every step of the way.
          </p>

          {/* form */}
          <form className="migrate-form">
            <select>
              <option>Select Country to Migrate</option>
              <option>Canada</option>
              <option>Australia</option>
              <option>UK</option>
              <option>USA</option>
              <option>Germany</option>
            </select>

            <input type="text" placeholder="Your Email" required />
            <input type="text" placeholder="Whatsapp / Phone" required />

            <button type="submit" className="lmbtn">
              Get Free Consultation
            </button>
          </form>
        </div>
      </section>

      {/* WHY MIGRATE ABROAD section */}
      <section className="section light-bg">
        <div className="container">
          <h2>Why Migrate Abroad?</h2>
          <ul className="benefits-list">
            <li>Gain access to excellent career opportunities</li>
            <li>Experience a higher standard of living</li>
            <li>Quality healthcare and education for your family</li>
            <li>Possibility of permanent residency and citizenship</li>
          </ul>
        </div>
      </section>

      {/* MIGRATION PROCESS */}
      <section className="section">
        <div className="container">
          <h2>How the Migration Process Works</h2>
          <div className="steps">
            <div className="step">1. Free Eligibility Check</div>
            <div className="step">2. Points & Criteria Evaluation</div>
            <div className="step">3. Document Preparation</div>
            <div className="step">4. Submit Visa Application</div>
            <div className="step">5. Track Application & Support</div>
            <div className="step">6. Arrival & Settlement Assistance</div>
          </div>
        </div>
      </section>

      {/* COST & TIME */}
      <section className="section light-bg">
        <div className="container">
          <h2>Estimated Costs & Processing Times</h2>
          <div className="info-table">
            <div>
              <h4>Canada PR Visa</h4>
              <p>Cost (approx.): CAD 4,500</p>
              <p>Processing Time: 6-8 months</p>
            </div>
            <div>
              <h4>Australia PR Visa</h4>
              <p>Cost (approx.): AUD 4,700</p>
              <p>Processing Time: 6-8 months</p>
            </div>
          </div>
          <p className="note">
            *These estimates vary based on country and visa type.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section">
        <div className="container">
          <h2>Why Choose Liba Migration?</h2>
          <div className="cards">
            <div className="card">Expert migration counselors</div>
            <div className="card">Personalized pathway planning</div>
            <div className="card">Up-to-date policy guidance</div>
            <div className="card">End-to-end support & follow-up</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Start Your Migration Journey?</h2>
          <button className="btn-primary">Get Free Assessment</button>
        </div>
      </section>
    </div>
  );
}