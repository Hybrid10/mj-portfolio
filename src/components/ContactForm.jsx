import React from "react";
import "../styles/ContactForm.css";

const ContactForm = ({ className }) => {
  return (
    <div className={`contact-container ${className}`} id="contact">
      <h1>Contact Me</h1>
      <div className="contact-details-text">
        <ContactDetail title="Address" info="Luleå, Sweden" />
        <ContactDetail title="Mobile" info="+46 730 338 482" />
        <ContactDetail title="Email" info="marcusjosefsson30@gmail.com" />
        <ContactDetail
          title="Website"
          info="marcusjosefsson.netlify.app"
          link="https://marcusjosefsson.netlify.app/"
        />
      </div>
      
      <div className="socials-contact">
        <SocialLink
          url="https://github.com/Hybrid10"
          imgSrc="images/github.svg"
          altText="Github logo"
        />
        <SocialLink
          url="https://www.linkedin.com/in/marcus-josefsson1/"
          imgSrc="images/linkedin.svg"
          altText="Linkedin logo"
        />
      </div>
    </div>
  );
};

const ContactDetail = ({ title, info, link }) => {
  return (
    <div className="contact-element">
      <h3>{title}</h3>
      {link ? (
        <a href={link}>{info}</a>
      ) : (
        <p>{info}</p>
      )}
    </div>
  );
};

const SocialLink = ({ url, imgSrc, altText }) => {
  return (
    <a href={url}>
      <img src={imgSrc} alt={altText} />
    </a>
  );
};

export default ContactForm;
