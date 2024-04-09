import React from "react";
import "../styles/About.css";

const About = ({ className }) => {
  return (
    <section className={`about ${className}`}>
      <div className="about-me">
        <h2 className="section-title">About me</h2>
        <div className="about-content">
          <p className="about-text">
            As a seasoned Web Developer fluent in the MERN stack, I excel in
            leveraging React for dynamic front-end interfaces, MongoDB for
            robust databases, and Express/Node.js for seamless server-side
            functionality. My forte lies in meticulously sculpting visually
            captivating and responsive designs with HTML and CSS, ensuring a
            pixel-perfect user experience across devices. Fueled by a fervent
            dedication to innovation, I continuously expand my skill set to stay
            ahead of the curve in web development trends. Let's join forces to
            transform your digital aspirations into reality!
          </p>
        </div>
      </div>

      <div className={`skills ${className}`}>
        <h2 className="section-title">Skills</h2>
        <div className="skills-wrapper">
          <Skill icon="html.svg" name="HTML" />
          <Skill icon="css.svg" name="CSS" />
          <Skill icon="express-js.png" name="Express Js" />
          <Skill icon="react.png" name="React Js" />
          <Skill icon="mongodb.svg" name="MongoDB" />
          <Skill icon="node-js.svg" name="Node Js" />
          <Skill icon="js.svg" name="JavaScript" />
          <Skill icon="git.svg" name="Git" />
        </div>
      </div>

      <div className={`education ${className}`}>
        <h2 className="section-title">Education</h2>
        <div className="education-cards">
          <EducationCard
            date="2023 - Present"
            title="MERN - Stack Development"
            institution="Techover Academy"
            description="Professionally trained by industry consultants to become a React developer."
          />
          <EducationCard
            date="2017 - 2019"
            title="Game Development"
            institution="Changemaker Educations"
            description="Trained in game development, specializing in Unity and Unreal Engine. I mastered essential skills for creating engaging gaming experiences."
          />
          <EducationCard
            date="2012 - 2014"
            title="Electronics and computer science" 
            institution="KTH Royal Institute of Technology"
            description="Developed expertise in hardware and software integration, underpinned by rigorous academic training and hands-on experience."
          />
        </div>
      </div>
    </section>
  );
};

const Skill = ({ icon, name }) => {
  return (
    <div className="skill">
      <img src={`images/${icon}`} alt={name} />
      <p>{name}</p>
    </div>
  );
};

const EducationCard = ({ date, title, institution, description }) => {
  return (
    <div className="education-card">
      <h3>{date}</h3>
      <h4>{title}</h4>
      <h5>{institution}</h5>
      <p>{description}</p>
    </div>
  );
};

export default About;
