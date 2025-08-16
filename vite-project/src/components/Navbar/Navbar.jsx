import React from "react";
import './Navbar.css'
import Logo from '../../assets/Logo.png'
const Navbar =()=>{
    return(
        <div className="navbar">
            <img src={Logo} alt="" />
            <ul className="nav-menu">
               <li>Home</li>
               <li>About Me</li>
               <li>Services</li>
               <li>Portfolio</li>
               <li>Contact</li>
            </ul>
            <div className="nav-connect">
                Connect with me 
            </div>

        </div>
    )

}
export default Navbar