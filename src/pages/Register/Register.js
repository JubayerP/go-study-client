import React from "react";
import { AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <h3 className="text-3xl font-semibold text-center">Register</h3>

      <form className="flex justify-center flex-col items-center">
        <div className="space-y-3 mb-6">
          <label className="block" htmlFor="name">
            Full Name
          </label>
          <input
            className="w-[80vh] px-2 py-2.5 border outline-gray-700"
            type="text"
            placeholder="Full Name"
            required
          />
        </div>
        <div className="space-y-3 mb-6">
          <label className="block" htmlFor="photo">
            Photo URL
          </label>
          <input
            className="w-[80vh] px-2 py-2.5 border outline-gray-700"
            type="text"
            placeholder="Photo URL"
            required
          />
        </div>
        <div className="space-y-3 mb-6">
          <label className="block" htmlFor="email">
            Email
          </label>
          <input
            className="w-[80vh] px-2 py-2.5 border outline-gray-700"
            type="email"
            placeholder="email"
            required
          />
        </div>
        <div className="space-y-3">
          <label className="block" htmlFor="password">
            Password
          </label>
          <input
            className="w-[80vh] px-2 py-2.5 border outline-gray-700"
            type="password"
            placeholder="password"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-[#FF1F59] w-[80vh] mt-3 py-2.5 text-white font-semibold"
        >
          Register
        </button>
      </form>
      <p className="text-center mt-2">
        Already have an account?{" "}
        <Link className="text-[#ff1f59]" to="/login">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
