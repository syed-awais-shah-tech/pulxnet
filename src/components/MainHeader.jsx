import React from "react";
import "../Css/MainHeader.css";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <p className="greenishText">\we are here\</p>
        <h1 className="fontChange">Empowering Your Digital Future with us!</h1>
        <p>
          PulxeNet delivers cutting-edge IT solutions — from web development to
          infrastructure services — helping businesses scale, innovate, and
          lead.
        </p>
        <div className="header-buttons">
          <button className="viewButton">
            View More{" "}
            <span role="img" aria-label="right arrow">
              <i class="fa-solid fa-arrow-right-long"></i>
            </span>
          </button>
          <button className="servicesButton">
            Explore Services{" "}
            <span className="plus">
              <i class="fa-solid fa-plus"></i>
            </span>
          </button>
        </div>
      </div>
      <div className="header-right">
        <img src="/images/image.png" alt="PulxeNet header" />
      </div>
    </header>
  );
}

export default Header;
