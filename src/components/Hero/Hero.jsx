import React from 'react';
import './Hero.css'
import Profile from '../../assets/photo.pro.png'
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero=()=>{
    return(
             <div id="home" className="hero">
            <img src={Profile} alt="Ayman Tabissi" />
            <h1><span>I'm Ayman Tabissi</span>, a full stack developer based in Morocco.</h1>
            <p>Full Stack Developer experienced in building complete web applications, skilled in React.js, Laravel, Node.js, and MongoDB, with the ability to create intuitive interfaces and high-performance systems</p>
            <div className="hero-action">
                <div className="hero-connect"> <AnchorLink className="anchore-link" offset={50} href="#contact">Connect With me</AnchorLink> </div>
                <a className="hero-resume" href="/resume.pdf" target="_blank" rel="noopener noreferrer" download>My resume</a>
            </div>

        </div>
    )
}
export default Hero;