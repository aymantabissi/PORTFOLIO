import React from "react"
import Navbar from "./components/Navbar/Navbar"

import About from "./components/About/About"
import Services from "./components/Services/Services"
import MyWork from "./components/Mywork/MyWork"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Hero from "./components/hero/Hero"
Footer
function App() {

  return (
   <div>
    <Navbar/>
    <Hero/>

    <About/>
    <Services/>
    <MyWork/>
    <Contact/>
    <Footer/>
   </div>
  )
}

export default App
