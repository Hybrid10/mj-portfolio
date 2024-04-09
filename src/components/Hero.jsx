import React from "react";
import "../styles/Hero.css";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero">
      <div className="intro">
        <h3>Hi! You've found</h3>
        <h1>Marcus Josefsson</h1>
        <h2 className="intro-subtitle">WEB DEVELOPER</h2>

        <p className="greeting-text">
          Residing in Northern Sweden, I specialize in creating cutting-edge MERN solutions for enterprises,
          skillfully designing captivating digital landscapes that seamlessly
          intertwine style and utility, leaving a profound and enduring
          impression.
        </p>
        <div className="hero-buttons">
          <ScrollLink to="project" smooth={true} duration={500} offset={-100}>
            <button className="projects-button">Projects</button>
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} offset={-100}>
            <button className="projects-button">Reach Me</button>
          </ScrollLink>
        </div>
      </div>
      <div className="hero-animation">
        <img src="images/profile-image.jpg" alt="Profile Image" />
      </div>

      <div className="socials">
        <a className="github-img" href="https://github.com/Hybrid10">
          <img src="images/github.svg" alt="Github logo" />
        </a>
        <a href="https://www.linkedin.com/in/marcus-josefsson1/">
          <img src="images/linkedin.svg" alt="Linkedin logo" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
