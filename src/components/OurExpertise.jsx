import React from "react";
import "../Css/OurExpertise.css"; // updated CSS file

const OurExpertise = ({ expertiseList }) => {
  return (
    <section className="expertise-section">
      <div className="expertise-container">
        <div className="expertise-header">
          <p className="expertise-subtitle">\ Services \</p>
          <h2 className="expertise-title">Our Expertise</h2>
        </div>

        <div className="expertise-grid">
          {expertiseList.map((item, index) => (
            <div key={index} className="expertise-card">
              <div className="expertise-icon">
                <i className={item.iconClass}></i>
              </div>
              <h3 className="expertise-title-card">{item.title}</h3>
              <div className="expertise-underline">
                <span></span>
                <span></span>
              </div>
              <p className="expertise-text">{item.description}</p>
              <a href="#" className="expertise-btn">
                Learn More <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;
