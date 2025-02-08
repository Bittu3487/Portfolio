import React from 'react';
import pdf from '../pdf/DebashisResume.pdf';
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to My Profile",
        "My Name is Debashis Goswami",
        "I'm Full Stack Web Developer ",
        "I'm a Programmer",
      ], // Array of strings to display
      typeSpeed: 50, // Typing speed in milliseconds
      backSpeed: 50, // Backspacing speed in milliseconds
      loop: true, // Whether to loop the animation
    };

    // Initialize Typed.js
    const typed = new Typed(typedRef.current, options);

    // Cleanup function to destroy Typed instance
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div class="container col-xxl-8 px-4 py-5" id='home'>
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="right col-10 col-sm-8 col-lg-6"data-aos="fade-up-left" data-aos-duration="1000">
          <img src="/web_devoloper (1).png" alt="" />
        </div>
        <div class="col-lg-6" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 class="display-5 fw-bold  lh-1 mb-3" ref={typedRef}></h1>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <a href={pdf} download="Resume.pdf"><button type="button" class="btn btn-outline-warning btn-lg px-4 me-md-2" fdprocessedid="6gk03">Download cv</button></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;