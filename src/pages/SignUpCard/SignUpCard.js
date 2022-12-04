import React from "react";
import { Link } from "react-router-dom";
import sign from "../../assets/sign.jpeg";

const SignUpCard = () => {
  return (
    <div className="my-20 flex flex-col md:flex-row items-center justify-around w-11/12 mx-auto rounded p-4 bg-[#F8FAFF] space-y-10">
      <img src={sign} alt="" />
      <div className="md:w-1/2">
        <h2 className="text-4xl font-medium leading-tight">
          Start today and get certified in Fundamentals of digital marketing
        </h2>
        <Link to="/register">
          <button className="bg-[#ff1f59] py-2.5 px-6 text-lg text-white font-semibold rounded mt-5">
            Sign Up Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignUpCard;
