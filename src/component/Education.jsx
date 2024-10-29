import React from 'react';


const Education = () => {
  return (
    <div className='container col-xxl-8 px-4 py-5' data-aos="fade-right" data-duration="1000">
      <div className='row align-items-center g-5 py-5'>
        <h1 className="text-center">My Education</h1>
        <div className="education-container row justify-content-center">
          
          {/* Card 1 */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="education-card p-3">
              <div className="education-name">
                X <span className="duration">(2017-2018)</span>
              </div>
              <div className="place">
                Kenduadihi Boys High School <span className="location">(Bankura)</span>
              </div>
              <div className="marks">79.2%</div>
              <a href="" className="certificate link-container" target="_blank" rel="noopener noreferrer">
                <div>View Certificate</div>
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path id="Vector" d="M4.00004 1.66675H17.3334V15.0001M17.3334 1.66675L1.33337 17.6667L17.3334 1.66675Z"
                        strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="education-card p-3" style={{ animationDelay: '0.2s' }}>
              <div className="education-name">
                XII <span className="duration">(2019-2020)</span>
              </div>
              <div className="place">
                Kenduadihi Boys High School <span className="location">(Bankura)</span>
              </div>
              <div className="marks">77.4%</div>
              <a href="" className="certificate link-container" target="_blank" rel="noopener noreferrer">
                <div>View Certificate</div>
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path id="Vector" d="M4.00004 1.66675H17.3334V15.0001M17.3334 1.66675L1.33337 17.6667L17.3334 1.66675Z"
                        strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="education-card p-3" style={{ animationDelay: '0.4s' }}>
              <div className="education-name">
                B.Tech in CSE <span className="duration">(2021-2025)</span>
              </div>
              <div className="place">
                Bengal College of Engineering & Technology <span className="location">(Bidhannagar, Durgapur)</span>
              </div>
              <div className="marks">82%</div>
              <a href="" className="certificate link-container" target="_blank" rel="noopener noreferrer">
                <div>View Certificate</div>
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path id="Vector" d="M4.00004 1.66675H17.3334V15.0001M17.3334 1.66675L1.33337 17.6667L17.3334 1.66675Z"
                        strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Education;
