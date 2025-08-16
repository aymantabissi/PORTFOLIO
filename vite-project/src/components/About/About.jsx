import React from "react";
import './About.css';
import Profile from '../../assets/profile.jpg';
import therm from '../../assets/theme_pattern.svg';

const About = () => {
  return (
    <div className="about">
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
              Passionate about technology and continuous learning. I enjoy turning 
              ideas into functional products and exploring new frameworks to build 
              innovative, user-friendly applications.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: '50%' }} />
            </div>
            <div className="about-skill">
              <p>JavaScript & React</p> <hr style={{ width: '60%' }} />
            </div>
            <div className="about-skill">
              <p>Laravel & MongoDB</p> <hr style={{ width: '40%' }} />
            </div>
            <div className="about-skill">
              <p>MySQL & Node.js</p> <hr style={{ width: '45%' }} />
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