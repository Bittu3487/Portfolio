import React, { useState } from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaPhoneSquare } from "react-icons/fa";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_ujjaiyn', // Replace with your EmailJS service ID
      'template_28kej7t', // Replace with your EmailJS template ID

      formData,
      'E1jH-f_8qscqvytvM' // Replace with your EmailJS user ID
    ).then((result) => {
      console.log(result.text);
      alert('Message sent successfully!');
    }, (error) => {
      console.log(error.text);
      alert('Message failed to send.');
    });
  };
  return (
    <>
    
      <div className="container col-xxl-8 px-4 py-5" id='contact' data-aos="zoom-in-up"
        data-aos-duration="1000">
      <div className="row align-items-center g-5 py-5">
        <div className="container flex flex-col items-center justify-center min-h-screen">
          <h1>Contact me</h1>
          <form className="bg-slate-200 w-96 px-8 py-6 rounded-xl" onSubmit={sendEmail}>
            {/* <h1 className="h3 mb-3 fw-normal">Send Your Message</h1> */}

            <div className="form-group mb-4">
              <label htmlFor="fullname" className="block text-transparent">
                Full Name
              </label>
              <input
                type="text"
                name="fullname"
                className="form-control w-full p-2 border border-gray-300 rounded-md"
                id="fullname"
                placeholder="Full Name"
                value={formData.fullname}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mb-4">
              <label htmlFor="email" className="block text-transparent">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                className="form-control w-full p-2 border border-gray-300 rounded-md"
                id="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mb-4">
              <label htmlFor="message" className="block text-transparent">
                Message
              </label>
              <textarea
                name="message"
                className="form-control w-full p-2 border border-gray-300 rounded-md"
                id="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-outline-warning w-full py-2"
            >
              Send
            </button>
          </form>
          <div className="container">
            <div className="social">
              <a href="#" target="_blank" className="items">
                <FaInstagram className="icons" />
              </a>
              <a href="#" target="_blank" className="items">
                <FaFacebook className="icons" />
              </a>
              <a href="https://www.linkedin.com/in/debashis-goswami-13b042318/" target="_blank" className="items">
                <FaLinkedin className="icons" />{" "}
              </a>
              <a href="#" target="_blank" className="items">
                <FaSquareXTwitter className="icons" />
              </a>
              <a href="https://github.com/Bittu3487" target="_blank" className="items">
                <FaGithub className="icons" />
              </a>
              <a
                href="mailto:debashisgoswami000@gmail.com"
                target="_blank"
                className="items"
              >
                <CgMail className="icons" />
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
      
    </>
  );
};

export default Contact;
