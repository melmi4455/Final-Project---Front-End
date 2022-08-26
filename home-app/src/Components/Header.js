import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { InfoContext } from "../Utilities/InfoContext";



function Header() {
const {info} = useContext(InfoContext)

  return (
    <div className="flex justify-between items-center py-5 px-10 border bg-gray-50  text-lg text-blue-700">
      <div className="items-center ">
        <img src="../Logo.jpg" alt="images" className="h-20" />
      </div>
      <div className="space-x-3 cursor-pointer  ">
        <Link to="/" className="text-sm hover:border-b-4">
          Home
        </Link>
        <Link to="/Property List" className="text-sm hover:border-b-4">
          List
        </Link>
        <Link to="/Services" className="text-sm hover:border-b-4">
          Services
        </Link>
        <Link to="/Abouts" className="text-sm hover:border-b-4">
          Abouts
        </Link>
      </div>
      <div>
        {info? (<button className="text-bold text-white bg-blue-500 rounded-full p-2">
          <Link to="/owner/updateprofile">Your Profile</Link>
        </button>):
        (<button className="text-bold text-white bg-blue-500 rounded-md p-2">
          <Link to="/SignUp">Upload Here!</Link>
        </button>)  }
        
        
      </div>
    </div>
  );
}

export default Header;
