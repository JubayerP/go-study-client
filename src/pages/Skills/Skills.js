import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from '../Spinner/Spinner'

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://assignment-10-server-wine.vercel.app/skills")
      .then((res) => res.json())
      .then((data) => {
        setSkills(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="container mx-auto w-4/5 md:w-full sm:w-full grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 my-10">
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
            <div className="flex lg:flex-row md:flex-col flex-col justify-around w-full items-center space-y-5">
              <h4 className="text-xl font-semibold">
                Learn specializations from top Courses
              </h4>
              <Link to="/courses">
                <button className="bg-[#ff1f59] py-2.5 px-6 text-xs md:text-sm lg:text-lg text-white font-semibold rounded">
                  View All Course
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Skills;
