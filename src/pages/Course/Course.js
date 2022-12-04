import React from "react";
import { BiTimer } from "react-icons/bi";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  console.log(course);
  const { id, name, image, price, duration } = course;
  return (
    <div className="border w-[80%] sm:w-[80%] md:w-full mx-auto">
      <img className="rounded" src={image} alt="courseImage" />
      <div className="p-3">
        <div className="flex items-center space-x-1">
          <BiTimer size={20} />
          <h5>
            Duration:{" "}
            <span className="text-slate-600 font-semibold">{duration}</span>
          </h5>
        </div>
        <h4 className="text-2xl font-semibold">{name}</h4>

        <hr className="my-4" />
        <div className="flex items-center justify-between">
          <p className="text-xl inline-block">
            Price: <span className="text-gray-600 font-semibold">${price}</span>
          </p>
          <Link to={`${id}`}><button className="bg-[#ff1f59] py-2 px-10 font-semibold text-white rounded">Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Course;
