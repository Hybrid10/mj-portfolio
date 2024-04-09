import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Project from "../components/Project";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import "../styles/Home.css";

const Home = () => {
  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.2,
    });

    const sections = document.querySelectorAll(".animate-on-scroll");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main>
      <Navigation />
      <Hero />
      <About className="animate-on-scroll" /> 
      <Project className="animate-on-scroll" /> 
      <ContactForm className="animate-on-scroll" />
      <Footer />
    </main>
  );
};

export default Home;
