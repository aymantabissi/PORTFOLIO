import React from "react";
import './Hero.css'
import Profile from '../../assets/profile.jpg'

const Hero =()=>{
    return(
        <div className="hero">
            <img src={Profile} alt="" />
            <h1><span>I'am Ayman Tabissi</span>, full stack developper based in morrocco.  </h1>
            <p>Full Stack Developer experienced in building complete web applications, skilled in React.js, Laravel, Node.js, and MongoDB, with the ability to create intuitive interfaces and high-performance systems</p>
            <div className="hero-action">
                <div className="hero-connect">Connect With me </div>
                <div className="hero-resume">My resume </div>
            </div>

        </div>
    )
}
export default Hero;