import React from "react";
import "../styles/Project.css";

const projects = [
  {
    title: "Spotify Clone",
    description:
      "I've created a Spotify replica using the Spotify API, allowing users to log in to their accounts, access playlists, and control playback. Developed with JavaScript, React, Basic Auth for authentication, Material UI for styling, CSS for customization, and Git for version control.",
    tools: "React | Material UI | SpotifyApi",
    imageUrl: "/images/project1-image.png",
    appUrl: "https://mj-spotify-clone.netlify.app/",
    codeUrl: "https://github.com/Hybrid10/MJ_Spotify/tree/main/MJ_Spotify",
  },
  {
    title: "Klarna Checkout",
    description:
      "I have seamlessly integrated the Klarna Checkout feature into this Node.js Express fake-store, prioritizing both security and customer satisfaction. With this integration, we ensure that transactions are conducted smoothly and securely, while also enhancing the overall shopping experience for our valued customers.",
    tools: "Node.js | Klarna | Fake Store",
    imageUrl: "/images/project2-image.png",
    appUrl: "https://mj-klarna-checkout.vercel.app/",
    codeUrl: "https://github.com/Hybrid10/mj-klarna-checkout",
  },
  {
    title: "The Flag App",
    description:
      "Effortlessly explore comprehensive country data with this engaging React.js app. Powered by React, CSS, and the RestcountriesAPI, our streamlined platform offers a captivating way to delve into global information.",
    tools: "React | CSS | RestcountriesAPI",
    imageUrl: "/images/project3-image.png",
    appUrl: "https://flag-mj-snorkifys-projects.vercel.app/",
    codeUrl: "https://github.com/Hybrid10/FLAG_MJ/tree/master",
  },
  {
    title: "Password Generator",
    description:
      "Elevate your online security effortlessly with this sleek password generator. Powered by HTML, CSS, and JS, this app creates strong, unique passwords for you, ensuring your accounts stay protected with ease.",
    tools: "React | CSS",
    imageUrl: "/images/project4-image.png",
    appUrl: "https://mj-pw-generator.netlify.app/",
    codeUrl: "https://github.com/Hybrid10/mj-password-generator/tree/main",
  },
];

const Project = () => {
  return (
    <div className="projects-container" id="project">
      <div className="my-projects">
        <h1>Projects</h1>
      </div>
      <div className="project-card">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <div className="img-container">
              <img
                className="project-img"
                src={project.imageUrl}
                alt={project.title}
              />
            </div>
            <div className="project-text-container">
              <div className="title-button-container">
                <h3 className="project-text-title">{project.title}</h3>
                <div className="button-container">
                  <a
                    href={project.appUrl}
                    className="app-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/images/app-button.svg" alt="app" />
                  </a>
                  <a
                    href={project.codeUrl}
                    className="app-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="images/github2.svg" alt="github" />
                  </a>
                </div>
              </div>
              <p className="project-text-subtitle">{project.description}</p>
              <p className="project-text-subtitle tools-text">{project.tools}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
