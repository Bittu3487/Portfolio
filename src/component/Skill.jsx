import React from 'react';
import skills from './data/skills.json';
const Skill = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5"id="skills">
      <div className="container skills row align-items-center g-5 py-5" >
        <h1>My Skills</h1>
        <div className="items">
          {skills.map((data) => (
            <>
              <div
                className="item"
                key={data.id}
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <img src={`/asset/${data.imageSrc}`} alt="" />
                <h3>{data.title}</h3>
              </div>
            </>
          ))}
        </div>
      </div>
      </div>
  );
}

export default Skill;