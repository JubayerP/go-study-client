import React from "react";
import { BiTimer } from "react-icons/bi";

const Course = ({ course }) => {
  console.log(course);
  const { id, name, image, desc, price, duration } = course;
  return (
    <div className="border">
      <img src={image} alt="courseImage" />
      <div className="p-3">
        <div className="flex items-center space-x-1">
          <BiTimer size={20}/>
          <h5>Duration: <span className="text-slate-600 font-semibold">{duration}</span></h5>
        </div>
        <h4 className="text-2xl font-semibold">{name}</h4>
      </div>
    </div>
  );
};

export default Course;
