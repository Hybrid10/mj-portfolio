import React, { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import "../styles/Navigation.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
    closeMenu();
  };

  return (
    <nav>
      <svg style={{ display: "none" }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </svg>
      
      <div className={`dropdown ${isOpen ? 'open' : ''}`}>
        <input type="checkbox" id="dropdown" onChange={toggleMenu} />

        <label className="dropdown__face" htmlFor="dropdown">
          <div className="dropdown__text">Menu</div>

          <div className="dropdown__arrow"></div>
        </label>

        <ul className="dropdown__items">
          <li onClick={scrollToTop}>
            <ScrollLink to="hero" smooth={true} duration={500} className="nav-links-button">
              <img className="nav-links-img" src="images/home.webp" alt="Home" />
            </ScrollLink>
          </li>
          <li onClick={closeMenu}>
            <ScrollLink to="about" smooth={true} duration={500} className="nav-links-button">
              <img className="nav-links-img" src="images/about.webp" alt="About" />
            </ScrollLink>
          </li>
          <li onClick={closeMenu}>
            <ScrollLink to="project" smooth={true} duration={500} className="nav-links-button">
              <img className="nav-links-img" src="images/portfolio.webp" alt="Projects" />
            </ScrollLink>
          </li>
          <li onClick={closeMenu}>
            <ScrollLink to="contact" smooth={true} duration={500} className="nav-links-button">
              <img className="nav-links-img" src="images/contact.webp" alt="Contact" />
            </ScrollLink>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1SU6DnpNIyI_Pf9cJ2aUFNUMaLXwZS5xl/view" target="_blank" rel="noopener noreferrer" className="nav-links-button" onClick={closeMenu}>
              <img className="nav-links-img" src="images/cv.webp" alt="Resume" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
