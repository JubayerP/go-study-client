import React from "react";
import { Link, Outlet } from "react-router-dom";

const LeftSideNav = () => {
  return (
    <div className="">
      <div className="flex flex-col h-screen bg-gray-300 px-3 py-6 space-y-8 rounded">
        <Link className="p-2 rounded hover:bg-slate-100" to="/">Home</Link>
        <Link className="p-2 rounded hover:bg-slate-100" to="/">Home</Link>
        <Link className="p-2 rounded hover:bg-slate-100" to="/">Home</Link>
        <Link className="p-2 rounded hover:bg-slate-100" to="/">Home</Link>
        <Link className="p-2 rounded hover:bg-slate-100" to="/">Home</Link>
        <Link className="p-2 rounded hover:bg-slate-100" to="/">Home</Link>
      </div>
    </div>
  );
};

export default LeftSideNav;
