import React from "react";

// Components
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx"; // H in Hero must match folder
import About from "./components/About/About.jsx";
import Services from "./components/Services/Services.jsx";
import MyWork from "./components/Mywork/MyWork.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
