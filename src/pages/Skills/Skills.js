import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/skills")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);
  return (
    <div>
      <div className="container mx-auto w-4/5 md:w-full sm:w-full grid md:grid-cols-3 my-10">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="border py-4 flex items-center justify-around"
          >
            <img src={skill.image} alt="" />
            <div>
              <h4 className="text-2xl font-semibold text-center">
                {skill.name}
              </h4>
              <p className="text-center mt-3">{skill.desc}</p>
            </div>
          </div>
        ))}

      </div>
        <div className="flex items-center mb-10 p-6 w-4/5 md:w-1/2 mx-auto bg-[#fff1f4] rounded">
          <div className="flex md:flex-row flex-col justify-around w-full items-center space-y-5">
            <h4 className="text-xl font-semibold">
              Learn specializations from top Courses
            </h4>
            <Link to='/courses'><button className="bg-[#ff1f59] py-2.5 px-6 text-lg text-white font-semibold rounded">
              View All Course
            </button></Link>
          </div>
        </div>
    </div>
  );
};

export default Skills;
