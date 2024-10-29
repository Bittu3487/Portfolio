import React ,  { useEffect } from 'react';
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About"
import Skill from "./Skill";
import Tool from "./Tool";
import Projects from './Project';
import Contact from './Contact';
import AOS from "aos";
import "aos/dist/aos.css";
import Education from './Education';
import Footer from './Footer';
const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <>
    <Navbar/>
    <div className="container">
    <Home/>
    <About/>
    <Education/>
    <Skill/>
    <Tool/>
    <Projects/>
    <Contact/>
    </div>
    <Footer/>
    </>

  );
}

export default App;