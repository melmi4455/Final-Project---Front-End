import React from "react";
import { MdOutlineLocationOn, MdOutlineBedroomParent } from "react-icons/md";
import { BiDollarCircle } from "react-icons/bi";

const FeatureCars = () => {
  return (
    <div className="p-2 flex ">
      <div
        className="gird grid-cols-4  bg-white text-gray-700 w-72 min-h-[10rem] 
        shadow-lg rounded-md overflow-hidden"
      >
        <div
          className=" bg-white text-gray-700 w-72 min-h-[10rem] 
        shadow-2xl rounded-md overflow-hidden"
        >
          <div>
            <img
              src={require("../img/home1.jpg")}
              alt="home"
              className="w-72 h-52 border-2 shadow-md rounded-md"
            />
          </div>
          <div className="p-5 space-y-1 text-sm font-bold text-gray-500">
            <div className="flex items-center">
              <BiDollarCircle size={20} className="text-blue-500" />
              <h2>$400</h2>
            </div>
            <div className="flex items-center">
              <MdOutlineLocationOn size={20} className="text-blue-500 " />
              <span>Jigjig yar</span>
            </div>
            <p>Single family house</p>
            <div className="flex justify-between">
              <div className="flex">
                <MdOutlineBedroomParent size={20} className="text-blue-500 " />
                <p>4 Bedrooms</p>
              </div>
            </div>
            <div className="">
              <button className="bg-blue-500 text-white font-bold text-sm justify-end  rounded-lg p-2">
                Book now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCars;
