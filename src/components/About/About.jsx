import React from 'react';
import "./about.css";

// Card
import { Heading } from "components/Heading/Heading";

// SVG
import github from "../../images/github.svg";
import linkedin from "../../images/linkedin.svg";
import location from "../../images/location.svg";
import phone from "../../images/phone.svg";
import college from "../../images/college.svg";
import mail from "../../images/mail.svg";

const About = () => {
  return (
    <div>
      <section
      data-aos="fade-left"
      className="about-container"
      name="about"
      id="about"
    >
      <Heading text="About Me" />
      <div className="about-cards">
        <div className="tags">
          <div className="info">
              <img src={location} alt="home-icon" />
              <p>Toronto, Canada</p>
          </div>
          <div className="info">
              <img src={phone} alt="home-icon" />
              <p>905 971 0928</p>
          </div>
          <div className="info">
              <img src={college} alt="home-icon" />
              <p>Mohawk College</p>
          </div>
          <div className="info">
              <img src={linkedin} alt="home-icon" />
              <p><a href="https://www.linkedin.com/in/jeong-eun-kim-4992ab21b/">Linkedin Link &gt;</a></p>
          </div>
          <div className="info">
              <img src={github} alt="home-icon" />
              <p><a href="https://github.com/Amber-Kim">Github Link &gt;</a></p>
          </div>
          <div className="info">
              <img src={mail} alt="home-icon" />
              <p><a href="mailto:amber.kje@gmail.com">Email Link &gt;</a></p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default About;