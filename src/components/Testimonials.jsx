import React, { useState } from "react";
import "../Css/Testimonials.css";

const Testimonials = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {/* Header */}
        <div className="testimonials-header">
          <p className="testimonials-subtitle">\\ From clients \\</p>
          <h2 className="testimonials-title">TESTIMONIAL'S</h2>
        </div>

        {/* Testimonial Card */}
        <div className="testimonial-card-wrapper">
          {/* Previous Button */}
          <button className="nav-btn prev-btn" onClick={prevSlide}>
            <i className="fas fa-chevron-left"></i>
          </button>

          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`testimonial-card ${
                index === currentIndex ? "active" : "inactive"
              }`}
            >
              <div className="testimonial-content">
                <i className="fas fa-quote-left quote-icon"></i>
                <p>{item.text}</p>
                <div className="testimonial-footer">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <p>{item.role}</p>
                  </div>
                </div>
                <i className="fas fa-quote-right quote-icon right-quote"></i>
              </div>
            </div>
          ))}

          {/* Next Button */}
          <button className="nav-btn next-btn" onClick={nextSlide}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        {/* Dots */}
        <div className="dots-container">
          {testimonials.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === currentIndex ? "active-dot" : ""}`}
              onClick={() => setCurrentIndex(idx)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
