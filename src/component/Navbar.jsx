import React, { useState } from 'react';
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  return (
    
      
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid" data-aos="fade-down"
            data-aos-duration="1000">
            <a className="navbar-brand" href="/">DG.</a>

            {/* Navbar Toggler Button */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Collapsible Links */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav  ms-auto ps-3">
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#skills">Skill</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#projects">Project</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    
    

  );
};

export default Navbar;