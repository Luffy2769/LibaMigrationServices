import React from 'react';
import '../Styles/Study.css';

const StudyProcess = () => {
  const processSteps = [
    {
      number: 1,
      title: "Free Counselling & Assessment",
      description: "Comprehensive evaluation of your academic background, career goals, and preferences to create a personalized study plan."
    },
    {
      number: 2,
      title: "University & Course Selection",
      description: "Shortlist universities and programs that match your profile, budget, and career aspirations with detailed comparison."
    },
    {
      number: 3,
      title: "Application Preparation",
      description: "Complete assistance with application forms, essays, recommendation letters, and all required documentation."
    },
    {
      number: 4,
      title: "Admission & Scholarship",
      description: "Track applications, negotiate with universities, and secure admission offers along with scholarship opportunities."
    },
    {
      number: 5,
      title: "Visa Processing",
      description: "Complete visa documentation, interview preparation, and submission to ensure successful visa approval."
    }
  ];

  return (
    <section className="study-process-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Study Abroad Process</h2>
          <p>A streamlined 5-step journey to your dream destination</p>
        </div>
        
        <div className="process-timeline">
          {processSteps.map((step, index) => (
            <div key={step.number} className="timeline-item">
              <div className="timeline-number">
                {step.number}
              </div>
              <div className="timeline-content" data-number={step.number}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudyProcess;