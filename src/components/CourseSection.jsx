import React from "react";
import "../Css/CourseSection.css"; // New CSS for course cards

const CourseSection = ({courses}) => {
  

  return (
    <section className="course-section">
      <div className="course-container">
        <div className="course-header">
          <p className="course-subtitle">\ Our Courses \</p>
          <h2 className="course-title">Empowering Future Tech Talent</h2>
          <p style={{ textAlign: "center", marginTop: "16px" }}>
            Expand your skills with our industry-focused training programs{" "}
            <br />
            designed by experts in development, design, networking, and digital
            marketing.
          </p>
        </div>

        <div className="course-grid">
          {courses.map((course, index) => (
            <div key={index} style={{ padding: "8px" }} className="course-card">
              <div className="course-image">
                <img src={course.image} alt={course.title} />
                <div className="instructor">
                  <span className="instructor-image-span">
                    <svg
                      width="14"
                      height="16"
                      viewBox="0 0 14 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 13.25C3 12.5233 3.18333 11.85 3.55 11.23C3.90333 10.63 4.38 10.1533 4.98 9.8C5.6 9.43333 6.27333 9.25 7 9.25C7.72667 9.25 8.4 9.43333 9.02 9.8C9.62 10.1533 10.0967 10.63 10.45 11.23C10.8167 11.85 11 12.5233 11 13.25H10C10 12.71 9.86333 12.2067 9.59 11.74C9.32333 11.2867 8.96333 10.9267 8.51 10.66C8.04333 10.3867 7.54 10.25 7 10.25C6.46 10.25 5.95667 10.3867 5.49 10.66C5.03667 10.9267 4.67667 11.2867 4.41 11.74C4.13667 12.2067 4 12.71 4 13.25H3ZM7 8.75C6.45333 8.75 5.95 8.61333 5.49 8.34C5.03667 8.07333 4.67667 7.71333 4.41 7.26C4.13667 6.8 4 6.29667 4 5.75C4 5.20333 4.13667 4.7 4.41 4.24C4.67667 3.78667 5.03667 3.42667 5.49 3.16C5.95 2.88667 6.45333 2.75 7 2.75C7.54667 2.75 8.05 2.88667 8.51 3.16C8.96333 3.42667 9.32333 3.78667 9.59 4.24C9.86333 4.7 10 5.20333 10 5.75C10 6.29667 9.86333 6.8 9.59 7.26C9.32333 7.71333 8.96333 8.07333 8.51 8.34C8.05 8.61333 7.54667 8.75 7 8.75ZM7 7.75C7.36 7.75 7.69333 7.66 8 7.48C8.30667 7.3 8.55 7.05667 8.73 6.75C8.91 6.44333 9 6.11 9 5.75C9 5.39 8.91 5.05667 8.73 4.75C8.55 4.44333 8.30667 4.2 8 4.02C7.69333 3.84 7.36 3.75 7 3.75C6.64 3.75 6.30667 3.84 6 4.02C5.69333 4.2 5.45 4.44333 5.27 4.75C5.09 5.05667 5 5.39 5 5.75C5 6.11 5.09 6.44333 5.27 6.75C5.45 7.05667 5.69333 7.3 6 7.48C6.30667 7.66 6.64 7.75 7 7.75Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <span className="instructor-span">{course.instructor}</span>
                </div>
              </div>
              <h3 className="course-title-text">{course.title}</h3>
              <p className="course-description">{course.description}</p>
              <div className="course-meta">
                <span>⏱ {course.duration}</span>
              </div>
              <div className="price-rating">
                <div className="price">
                  <span className="current-price">{course.price}</span>
                  <span className="old-price">{course.oldPrice}</span>
                </div>
                <div className="rating">
                  {course.rating} <span>{course.reviews}</span>
                </div>
              </div>
              <button className="start-btn">Start Course →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
