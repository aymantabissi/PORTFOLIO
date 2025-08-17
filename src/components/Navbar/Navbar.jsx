import React, { useState } from "react";
import './Navbar.css';
import Logo from '../../assets/logo.png';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [openMenu, setOpenMenu] = useState(false); // menu state

  return (
    <div className="navbar">
      {/* Logo */}
      <img src={Logo} alt="Logo" className="nav-logo" />

      {/* Hamburger Icon for Mobile */}
      <img 
        src={menu_open} 
        alt="open menu" 
        className="nav-mob-open" 
        onClick={() => setOpenMenu(true)} 
      />

      {/* Menu */}
      <ul className={`nav-menu ${openMenu ? "open" : ""}`}>
        {/* Close Icon (Mobile only) */}
        <img 
          src={menu_close} 
          alt="close menu" 
          className="nav-mob-close" 
          onClick={() => setOpenMenu(false)} 
        />

        <li>
          <AnchorLink className="anchore-link" offset={50} href="#home" onClick={() => {setMenu("home"); setOpenMenu(false);}}>
            Home
          </AnchorLink>
          {menu === "home" && <img src={underline} alt="underline" />}
        </li>

        <li>
          <AnchorLink className="anchore-link" offset={50} href="#about" onClick={() => {setMenu("about"); setOpenMenu(false);}}>
            About Me
          </AnchorLink>
          {menu === "about" && <img src={underline} alt="underline" />}
        </li>

        <li>
          <AnchorLink className="anchore-link" offset={50} href="#services" onClick={() => {setMenu("services"); setOpenMenu(false);}}>
            Services
          </AnchorLink>
          {menu === "services" && <img src={underline} alt="underline" />}
        </li>

        <li>
          <AnchorLink className="anchore-link" offset={50} href="#work" onClick={() => {setMenu("work"); setOpenMenu(false);}}>
            Portfolio
          </AnchorLink>
          {menu === "work" && <img src={underline} alt="underline" />}
        </li>

        <li>
          <AnchorLink className="anchore-link" offset={50} href="#contact" onClick={() => {setMenu("contact"); setOpenMenu(false);}}>
            Contact
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt="underline" />}
        </li>
      </ul>

      {/* Connect button */}
      <div className="nav-connect">
        <AnchorLink className="anchore-link" offset={50} href="#contact">
          Connect with me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
