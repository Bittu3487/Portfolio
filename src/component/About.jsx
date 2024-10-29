import React from 'react';

const About = () => {
  return (
    <div className="container col-12 col-md-10 col-lg-8 px-3 py-5" id="about" data-aos="zoom-in-down" data-aos-duration="1000">
      <div className="row align-items-center g-4 py-4">
        <div className="col-12 col-md-8 col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3 text-center text-md-start">About Me</h1>
          <p className="lead text-center text-md-start">
            I am a final year Computer Science Engineering Student at Bengal College of Engineering and Technology. I am fluent in Programming Languages like Python, JavaScript, and C Language.
          </p>
          <p className="lead text-center text-md-start">
            My fields of interest are building new Web Technologies and Products, as well as areas related to Blockchain. I also apply my passion for developing products with Node.js and modern JavaScript libraries and frameworks like React.js and Next.js.
          </p>
          <p className="lead text-center text-md-start">Apart from coding, some other activities that I love to do:</p>
          <ul className="text-center text-md-start">
            <li>👉 Playing Games</li>
            <li>👉 Listening to Music</li>
            <li>👉 Traveling</li>
          </ul>
          <div className="d-flex justify-content-center justify-content-md-start gap-3 icon-container mt-4">
            <div className="icon-label">
              <a href="#projects" className="btn btn-outline-warning">
                <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <g fill="#494c4e">
                    <path d="m8 6h-3c-.553 0-1-.448-1-1s.447-1 1-1h3c.553 0 1 .448 1 1s-.447 1-1 1zm5 4h-8c-.553 0-1-.448-1-1s.447-1 1-1h8c.553 0 1 .448 1 1s-.447 1-1 1zm0 4h-8c-.553 0-1-.448-1-1s.447-1 1-1h8c.553 0 1 .448 1 1s-.447 1-1 1z" />
                    <path d="m18 2v8c0 .55-.45 1-1 1s-1-.45-1-1v-7.5c0-.28-.22-.5-.5-.5h-13c-.28 0-.5.22-.5.5v19c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-.5c0-.55.45-1 1-1s1 .45 1 1v1c0 1.1-.9 2-2 2h-14c-1.1 0-2-.9-2-2v-20c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2z" />
                    <path d="m23.87 11.882c.31.54.045 1.273-.595 1.643l-9.65 5.57c-.084.05-.176.086-.265.11l-2.656.66c-.37.092-.72-.035-.88-.314-.162-.278-.09-.65.17-.913l1.907-1.958c.063-.072.137-.123.214-.167.004-.01.012-.015.012-.015l9.65-5.57c.64-.37 1.408-.234 1.72.305l.374.65z" />
                  </g>
                </svg>
                {/* SVG for Project */}
              </a>
              <p className="text-center">Project</p>
            </div>
            <div className="icon-label">
              <a href="#certificates" className="btn btn-outline-warning">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-certificate" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="15" cy="15" r="3" />
                  <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" />
                  <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73" />
                  <line x1="6" y1="9" x2="18" y2="9" />
                  <line x1="6" y1="12" x2="9" y2="12" />
                  <line x1="6" y1="15" x2="8" y2="15" />
                </svg>
                {/* SVG for Certificate */}
              </a>
              <p className="text-center">Certificate</p>
            </div>
            <div className="icon-label">
              <a href="#skills" className="btn btn-outline-warning">
                <svg height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
                  <path d="m30 30h-8v-26h8z" />
                  <path d="m20 30h-8v-18h8z" />
                  <path d="m10 30h-8v-12h8z" />
                  <path d="m0 0h32v32h-32z" fill="none" />
                </svg>
                {/* SVG for Skill */}
              </a>
              <p className="text-center">Skill</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
