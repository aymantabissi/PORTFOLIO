import React from "react";
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
const Footer=()=>{
    return(
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="Ayman Tabissi logo" />
                    <p>I'm Ayman Tabissi, a full stack developer based in Morocco.</p>

                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder="Enter Your Email" name="email" />

                    </div>
                    <div className="footer-subscribe">
                        Subscribe

                    </div>
                </div>

            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">
                    © {new Date().getFullYear()} Ayman Tabissi. All rights reserved.
                </p>
                <div className="footer-bottom-right">
                    <a href="https://github.com/aymantabissi" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/aymane-tabissi-339696238/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="mailto:aymanraisse7@gmail.com">Email me</a>
                </div>
            </div>

        </div>
    )


}
export default Footer