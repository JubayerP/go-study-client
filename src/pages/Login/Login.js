import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiFillGoogleCircle, AiFillGithub } from "react-icons/ai";
import { AuthContext } from '../../contexts/AuthProvider'
import toast from 'react-hot-toast';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signIn } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const from = location.state?.from?.pathname || '/';

  const handleEmailChange = (e) => {
    setUserInfo({ ...userInfo, email: e.target.value });
  };
  const handlePasswordChange = (e) => {
    setUserInfo({ ...userInfo, password: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(userInfo.email, userInfo.password)
    .then((result) => {
      const user = result.user;
      navigate(from, {replace: true})
      toast.success("You are Logged In!", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    })
    .catch((e) => {
      console.log(e.message);
      toast.error(e.message, {
        style: {
          borderRadius: '10px',
          background: '#ED4337',
          color: '#FFF'
        }
      })
    });
  };

  return (
    <div>
      <h3 className="text-3xl font-semibold text-center">Login</h3>

      <form
        onSubmit={handleSubmit}
        className="flex justify-center flex-col items-center"
      >
        <div className="space-y-3 mb-6">
          <label className="block" htmlFor="email">
            Email
          </label>
          <input
            onChange={handleEmailChange}
            value={userInfo.email}
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
            onChange={handlePasswordChange}
            value={userInfo.password}
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
          Login
        </button>
      </form>
      <p className="text-center mt-2">
        New to Go Study?{" "}
        <Link className="text-[#ff1f59]" to="/register">
          Register
        </Link>
      </p>

      <div className="flex items-center justify-center my-4">
        <div className="h-[1px] bg-gray-700 w-40"></div>
        <p className="mx-2">OR</p>
        <div className="h-[1px] bg-gray-700 w-40"></div>
      </div>

      <div className="flex justify-center">
        <button className="flex justify-center items-center w-[80vh] mt-3 py-2.5 font-semibold border border-[#ff1f59] hover:bg-[#ff1f59] hover:text-white duration-100">
          <AiFillGoogleCircle size={20} className="mr-2" /> Continue With Google
        </button>
      </div>
      <div className="flex justify-center">
        <button className="flex justify-center items-center w-[80vh] mt-3 py-2.5 font-semibold border border-[#ff1f59] hover:bg-[#ff1f59] hover:text-white duration-100">
          <AiFillGithub size={20} className="mr-2" /> Continue With Github
        </button>
      </div>
    </div>
  );
};

export default Login;
