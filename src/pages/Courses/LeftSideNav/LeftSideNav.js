import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
        .then(data => setCategories(data))
    },[])
  return (
    <div className="flex flex-col h-screen bg-gray-300 px-3 py-6 space-y-8 rounded">
          {
              categories.map(categorie =>
                
                    <Link key={categorie.category_id} className="p-2 rounded hover:bg-slate-100" to="/">{categorie.category_name}</Link>
              )
      }
    </div>
  );
};

export default LeftSideNav;
