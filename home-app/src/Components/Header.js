import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Utils/UserContext";
import { CgLogOut } from "react-icons/cg";
import axios from "axios";

function Header() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function Logout() {
    localStorage.removeItem("token");
    setUser(false);
    navigate("/login");
  }

  return (
    <div className="flex justify-between items-center py-5 px-10   text-lg text-black border border-b-blue-700">
      <div className="items-center ">
        <Link to="/owner/updateprofile">
          <img src="../Logo.jpg" alt="images" className="h-20" />
        </Link>
      </div>

      <div className="space-x-5 cursor-pointer font-extrabold text-blue-500">
        <Link to="/" className="text-xl hover:border-b-4">
          Home
        </Link>
        <Link to="/PropertyList" className="text-xl hover:border-b-4">
          List
        </Link>
        <Link to="/Abouts" className="text-xl hover:border-b-4">
          Abouts
        </Link>
      </div>
      <div className="flex items-center space-x-8 font-extrabold">
        {user ? (
          <button className="text-xl text-white bg-blue-400 rounded-md p-1">
            <Link to="/Owner/AllHomes">My list</Link>
          </button>
        ) : (
          <button className="text-xl text-white bg-blue-400 rounded-md p-1">
            <Link to="/SignUp">Register</Link>
          </button>
        )}
        <Link
          to="/owner/newhome"
          className="text-xl hover:border-b-4 text-white bg-blue-400 p-1 rounded-md"
        >
          Upload!
        </Link>

        {/* <div className="space-x-2">
        <button className="text-bold text-white bg-blue-500 rounded-md p-2">
          <Link to="/SignUp">SignUp</Link>
        </button>

        <button className="text-bold text-white bg-blue-500 rounded-md p-2">
          <Link to="/NewHome">Upload</Link>
        </button>
      </div> */}
        <div>
          <CgLogOut
            size={25}
            onClick={Logout}
            className="cursor-pointer text-blue-500"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
