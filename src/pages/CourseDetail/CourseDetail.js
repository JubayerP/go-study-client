import React from "react";
import { BiTimer } from "react-icons/bi";
import { BsCheckAll } from 'react-icons/bs';
import { useLoaderData } from "react-router-dom";

const CourseDetail = () => {
  const course = useLoaderData();
    const { name, desc, image, details, price, duration } = course;
    console.log(details);

  return (
    <div className="my-10 w-1/2 mx-auto">
      <div className="mb-20">
        <h2 className="mb-4 text-4xl font-semibold">{name}</h2>
        <p className="mb-4 text-xl font-mono">{desc}</p>
        <div className="flex  justify-between">
          <div className="flex items-center space-x-1 mb-3">
            <BiTimer size={20} />
            <h5>
              Duration:{" "}
              <span className="text-slate-600 font-semibold">{duration}</span>
            </h5>
          </div>
          <h5 className="bg-gray-300 px-6 rounded mb-2">
            Price:{" "}
            <span className="text-stone-900 font-semibold">${price}</span>
          </h5>
        </div>
        <img className="mx-auto rounded" src={image} alt="" />
      </div>

      <div className="border p-5">
              <h2 className="text-3xl font-semibold mb-5 text-gray-600">What you will learn ?</h2>
              <div className="space-y-4">
                    {
                      details.map((detail, i) => <div key={i} className="flex items-center space-x-1">
                          <BsCheckAll size={22} color="#ff1f59"/>
                        <p className="text-lg">{ detail}</p>
                      </div>)
                    }
              </div>
      </div>
    </div>
  );
};

export default CourseDetail;
