import React from "react";
import "../Css/ProcessSection.css"; // keep your custom CSS

const ProcessSection = () => {
  const processSteps = [
    {
      number: "01",
      title: "Research",
      iconClass: "fas fa-search",
      description:
        "We start by understanding your business, goals, and target users. This helps us define a strategy that ensures your project solves the right problems.",
    },
    {
      number: "02",
      title: "Design",
      iconClass: "fas fa-paint-brush",
      description:
        "Next, we create clean, user-focused designs that blend usability with modern aesthetics—ensuring a smooth and engaging user experience.",
    },
    {
      number: "03",
      title: "Develop",
      iconClass: "fas fa-code",
      description:
        "Our development team brings the designs to life with efficient coding and rigorous testing to ensure your product works flawlessly across all devices.",
    },
    {
      number: "04",
      title: "Test",
      iconClass: "fas fa-vial",
      description:
        "We conduct extensive testing for performance, bug resolution, and user experience to guarantee a flawless product.",
    }
  ];

  return (
    <section className="process-section">
      <div className="process-container">
        <div className="process-header">
          <p className="process-subtitle">\\ Planning //</p>
          <h2 className="process-title">OUR PROCESS</h2>
        </div>

        <div className="process-grid">
          {processSteps.map((step, index) => (
            <div key={step.number} className="process-card-wrapper">
              {index < processSteps.length - 1 && (
                <div className="process-connector-line" />
              )}

              <div className="process-card">
                <div className="process-number-badge">
                  <span>{step.number}</span>
                </div>

                <div className="process-icon">
                  <div className="process-icon-circle">
                    <i className={step.iconClass}></i>
                  </div>
                </div>

                <h3 className="process-step-title">{step.title}</h3>
                <div className="process-divider"></div>
                <p className="process-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
