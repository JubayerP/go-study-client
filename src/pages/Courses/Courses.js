import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "../Course/Course";
import LeftSideNav from "./LeftSideNav/LeftSideNav";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div>
      <h2 className="my-5 text-5xl text-center font-semibold">Choose From Our Top Courses</h2>
      <div className="grid md:grid-cols-[1fr_4fr] gap-8">
        <LeftSideNav />

        <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {courses.map((course) => (
            <Course key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
