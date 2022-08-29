import React from "react";
import { Link , useNavigate} from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Utils/UserContext";
import {CgLogOut} from "react-icons/cg"

function Header() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function Logout(){
    localStorage.removeItem("token");
    setUser(false);
    navigate("/login")
  }


  return (
    <div className="flex justify-between items-center py-5 px-10 border bg-gray-50  text-lg text-blue-700">
      <div className="items-center ">
        <img src="../Logo.jpg" alt="images" className="h-20" />
      </div>
      <div className="space-x-3 cursor-pointer">
        <Link to="/" className="text-sm hover:border-b-4">
          Home
        </Link>
        <Link to="/PropertyList" className="text-sm border- border-b-blue-700">
          List
        </Link>
        <Link to="/Services" className="text-sm hover:border-b-4">
          Services
        </Link>
        <Link to="/Abouts" className="text-sm hover:border-b-4">
          Abouts
        </Link>
      </div>
      <div className="flex items-center space-x-8">
        {user ? (
          <button className="text-bold text-white bg-blue-500 rounded-full p-2">
            <Link to="/owner/NewHome">Your Profile</Link>
          </button>
        ) : (
          <button className="text-bold text-white bg-blue-500 rounded-md p-2">
            <Link to="/SignUp">Register</Link>
          </button>
        )}
        

        {/* <div className="space-x-2">
        <button className="text-bold text-white bg-blue-500 rounded-md p-2">
          <Link to="/SignUp">SignUp</Link>
        </button>

        <button className="text-bold text-white bg-blue-500 rounded-md p-2">
          <Link to="/NewHome">Upload</Link>
        </button>
      </div> */}
      <div><CgLogOut size={25} onClick={Logout} className="cursor-pointer"/></div>
      </div>
    </div>
  );
}

export default Header;
