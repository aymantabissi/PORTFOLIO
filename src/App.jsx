import React from "react"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/hero/hero"
import About from "./components/About/About"
import Services from "./components/Services/Services"
import MyWork from "./components/Mywork/MyWork"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
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
