import React from "react";
import "../Css/TeamSection.css"; // Your own local CSS file

const SocialRow = () => (
  <div className="member-social" aria-label="Social links">
    <a href="#" aria-label="Twitter">
      <i className="fab fa-twitter"></i>
    </a>
    <a href="#" aria-label="Facebook">
      <i className="fab fa-facebook-f"></i>
    </a>
    <a href="#" aria-label="Instagram">
      <i className="fab fa-instagram"></i>
    </a>
    <a href="#" aria-label="Linkedin">
      <i className="fab fa-linkedin-in"></i>
    </a>
  </div>
);

const TeamSection = ({teamData}) => {
  return (
    <section className="team" aria-labelledby="team-title">
      <div className="team-container">
        <header className="team-header">
          <span className="team-kicker" aria-hidden>
            Team Members
          </span>
          <h1 id="team-title" className="team-title">
            MEET OUR TEAM MEMBER
          </h1>
          <p className="team-subtitle">
            We focus on the details of everything we do. All to help businesses
            around the world focus on what’s most important to them.
          </p>
        </header>

        <div className="team-grid" role="list">
          {teamData.map((m) => (
            <article
              key={m.name}
              role="listitem"
              className="member-card"
              style={{ backgroundImage: `url(/images/${m.image})` }}
            >
              <div className="member-body">
                <h3 className="member-name">{m.name}</h3>
                <p className="member-role">{m.role}</p>
                <p className="member-bio">{m.bio}</p>
                <SocialRow />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
