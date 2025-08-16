import React from "react";
import therme from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import './Contact.css'

const Contact = () => {
const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b45b49e0-ef88-4dc5-9c99-9c4e125d8060");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
    }
  };


    return (
        <div id="contact" className="contact">
            <div className="contact-title">
                <h1>Get in Touch</h1>
                <img src={therme} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently avaliable to take on new projects,
                         so feel free to send me a message about anything
                     that you want me to work on. You can contact anytime.</p>
                     <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /><p>aymanraisse7@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /><p>+212684699345</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon}alt="" /><p>safi,Morrocco</p>
                        </div>

                     </div>
                </div>
                <form onSubmit={onSubmit} className="contact-rightsection">
                    <label htmlFor="">Your Name</label>
                    <input type="text " placeholder="Enter Your Name"  name="name"/>
                    <label htmlFor="">Your Email</label>
                    <input type="email"  placeholder="Enter Your Email" name="email"/>
                    <label htmlFor=""> Write Your Message Here</label>
                    <textarea name="message" rows='8' placeholder="Enter Your Message "></textarea>
                    <button type="submit" className="contact-submit">
                           Submit Noow
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
