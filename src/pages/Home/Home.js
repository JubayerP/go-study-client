import React from "react";
import { Link } from "react-router-dom";
import { BsCheck2 } from "react-icons/bs";
import home from "../../assets/home.png";
import Skills from "../Skills/Skills";
import SignUpCard from "../SignUpCard/SignUpCard";

const Home = () => {
  return (
    <div>
      <div className="px-10 flex md:flex-row flex-col space-y-10 items-center md:h-screen bg-[#F7F4F4] mb-16">
        <div className="md:w-2/3 mt-20 sm:mt-0 md:mt-0">
          <h1 className="md:text-5xl text-3xl font-bold text-[#29303b] leading-[50px] md:leading-[60px] underline decoration-[#99B1F5]">
            Build Skills with Online Courses from expert instructor
          </h1>
          <p className="text-lg text-gray-500 my-8">
            Start streaming on-demand video lectures today from top level
            instructors Attention heatmaps.
          </p>
          <Link to="/courses">
            <button className="bg-[#ff1f59] py-4 px-12 text-lg text-white font-semibold rounded my-8">
              Explore Courses
            </button>
          </Link>

          <div className="flex items-center">
            <p className="text-lg font-semibold flex items-center mr-4">
              <BsCheck2 className="bg-[#CFE9E0] text-[#1EC58D] w-8 h-8 rounded-full mr-2" />{" "}
              Get Certified
            </p>
            <p className="text-lg font-semibold flex items-center ">
              <BsCheck2 className="bg-[#CFE9E0] text-[#1EC58D] w-8 h-8 rounded-full mr-2" />{" "}
              Gain Job-ready Skills
            </p>
          </div>
        </div>
        <div className="">
          <img className="mx-auto w-3/4 md:w-full" src={home} alt="home" />
        </div>
      </div>

      {/* Skills */}
      <Skills />

      {/* Sign Up Card */}
      <SignUpCard />
    </div>
  );
};

export default Home;
