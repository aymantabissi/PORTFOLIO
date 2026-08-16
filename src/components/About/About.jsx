import React from "react";
import './About.css';
import Profile from '../../assets/photo.pro.png';
import therm from '../../assets/theme_pattern.svg';

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={therm} alt="decorative pattern" className="about-title-img" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={Profile} alt="Profile" className="profile-img" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Full-stack developer with experience in React.js, Laravel, Node.js,
              MongoDB, and MySQL. I create responsive, scalable web applications
              focused on clean code and efficient solutions.
            </p>
            <p>
              Currently studying Computer Engineering & Artificial Intelligence, and
              building skills in Machine Learning and data analysis to bring intelligent
              features into the applications I build.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill-group">
              <h4>Frontend</h4>
              <div className="about-skill-tags">
                <span>React.js</span>
                <span>JavaScript</span>
                <span>HTML5 & CSS3</span>
                <span>Tailwind</span>
                <span>Bootstrap</span>
              </div>
            </div>
            <div className="about-skill-group">
              <h4>Backend</h4>
              <div className="about-skill-tags">
                <span>Node.js</span>
                <span>Laravel</span>
                <span>PHP</span>
                <span>Java & Spring Boot</span>
              </div>
            </div>
            <div className="about-skill-group">
              <h4>Data & AI</h4>
              <div className="about-skill-tags">
                <span>Python</span>
                <span>Machine Learning</span>
                <span>Data Analysis</span>
                <span>Data Cleaning</span>
              </div>
            </div>
            <div className="about-skill-group">
              <h4>Databases & Tools</h4>
              <div className="about-skill-tags">
                <span>MongoDB</span>
                <span>MySQL</span>
                <span>PostgreSQL</span>
                <span>Git & Docker</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>3+</h1>
          <p>Years of Experience</p>
        </div>
        <div className="divider" />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Projects Completed</p>
        </div>
        <div className="divider" />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
};

export default About;