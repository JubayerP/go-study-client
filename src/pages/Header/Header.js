import React, { useContext, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../contexts/AuthProvider";

const Header = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  return (
    <div className={`container mx-auto flex items-center justify-between ${open ? 'h-[250px]' : 'h-20'}`}>
      <Link to="/">
        <img className="w-36" src={logo} alt="logo" />
      </Link>
        <button onClick={() => setOpen(!open)} className="md:hidden block outline-none mobile-menu-button">
          <svg
            className="w-6 h-6 text-gray-500"
            x-show="!showMenu"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      <div className={`md:static absolute flex flex-col md:flex-row lg:flex-row items-center md:space-x-14 font-medium ${open ? 'top-8 left-[45%]' : '-top-48'}`}>
        <Link to="/courses" className="hover:text-[#dd0000] duration-200">
          Courses
        </Link>
        <Link to="/faq" className="hover:text-[#dd0000] duration-200">
          FAQ
        </Link>
        <Link to="/blog" className="hover:text-[#dd0000] duration-200">
          Blog
        </Link>
        {user?.uid ? (
          <>
            <>
              {user?.photoURL ? (
                <img
                  data-tooltip-target="tooltip-hover"
                  data-tooltip-trigger="hover"
                  className="h-10 ring rounded-full"
                  title={user?.displayName}
                  src={user.photoURL}
                  alt=""
                />
              ) : (
                <AiOutlineUser size={24} />
              )}
            </>
            <button
              onClick={logOut}
              className="duration-200 bg-[#F51E5A] hover:bg-[#dd0000] text-white px-6 py-2.5 rounded"
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-[#dd0000] duration-200">
              Login
            </Link>
            <Link to="/register" className="">
              <button className="duration-200 bg-[#F51E5A] hover:bg-[#dd0000] text-white px-6 py-2.5 rounded">
                Register
              </button>
            </Link>
          </>
        )}

        <DarkModeSwitch
          style={{
            color: "black",
          }}
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={30}
        />
      </div>
    </div>
  );
};

export default Header;
