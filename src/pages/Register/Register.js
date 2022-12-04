import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from 'react-hot-toast';

const Register = () => {
  const { createUser, updateUsersProfile } = useContext(AuthContext);

  const [userInfo, setUserInfo] = useState({
    fullName: "",
    photoURL: "",
    email: "",
    password: "",
  });

  const [erros, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleFullNameChange = (e) => {
    setUserInfo({ ...userInfo, fullName: e.target.value });
  };

  const handlePhotoURLChange = (e) => {
    setUserInfo({ ...userInfo, photoURL: e.target.value });
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setErrors({ ...erros, email: "Provide a valid email" });
      setUserInfo({ ...userInfo, email: e.target.value });
    } else {
      setErrors({ ...erros, email: "" });
      setUserInfo({ ...userInfo, email: e.target.value });
    }
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    if (password.length < 8) {
      setErrors({ ...erros, password: "Must be at least 8 characters" });
      setUserInfo({ ...userInfo, password: e.target.value });
    } else {
      setErrors({ ...erros, password: "" });
      setUserInfo({ ...userInfo, password: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(userInfo.email, userInfo.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("You are registerd!", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        updateUsersProfile(userInfo.fullName, userInfo.photoURL)
          .then(() => { })
        .catch(error => {console.log(error.message)})
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
    <div className="mb-4">
      <h3 className="text-3xl font-semibold text-center">Register</h3>

      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="space-y-3 mb-6">
          <label className="block" htmlFor="name">
            Full Name
          </label>
          <input
            className=" px-2 py-2.5 border outline-gray-700 w-[400px]"
            type="text"
            value={userInfo.fullName}
            onChange={handleFullNameChange}
            placeholder="Full Name"
            required
          />
        </div>
        <div className="space-y-3 mb-6">
          <label className="block" htmlFor="photo">
            Photo URL
          </label>
          <input
            onChange={handlePhotoURLChange}
            value={userInfo.photoURL}
            className=" px-2 py-2.5 border outline-gray-700 w-[400px]"
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
            onChange={handleEmailChange}
            value={userInfo.email}
            className=" px-2 py-2.5 border outline-gray-700 w-[400px]"
            type="email"
            placeholder="email"
            required
          />
          <p className="text-red-500">{erros.email}</p>
        </div>
        <div className="space-y-3">
          <label className="block" htmlFor="password">
            Password
          </label>
          <input
            onChange={handlePasswordChange}
            value={userInfo.password}
            className=" px-2 py-2.5 border outline-gray-700 w-[400px]"
            type="password"
            placeholder="password"
            required
          />
          <p className="text-red-500">{erros.password}</p>
        </div>
        <button
          type="submit"
          className="bg-[#FF1F59] mt-3 py-2.5 text-white font-semibold w-[400px]"
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
