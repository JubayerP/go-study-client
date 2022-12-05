import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://assignment-10-server-wine.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="md:flex md:flex-col md:h-screen px-3 py-6 md:space-y-8 rounded mx-auto sm:w-full grid md:grid-cols-3 grid-cols-2">
      {categories.map((categorie) => (
        <Link
          key={categorie.category_id}
          className="p-2 rounded bg-slate-50 hover:bg-slate-100 m-2"
          to={`${categorie.category_id}`}
        >
          {categorie.category_name}
        </Link>
      ))}
    </div>
  );
};

export default LeftSideNav;
