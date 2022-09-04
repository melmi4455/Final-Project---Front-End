import React from "react";
import { BiSearch } from "react-icons/bi";
const Hero = () => {
  return (
    <div className="bg-[url('./img/feature-img.jpg')] bg-bottom bg-no-repeat bg-cover h-[450px] w-full flex justify-center items-center ">
      <div className="w-full m-h-[10rem]">
        <h3 className="text-center text-white text-3xl font-bold pb-24">
          <span className="text-blue-500 text-md font-bold">
            {" "}
            Search Your Next Home{" "}
          </span>
          Find new & <br></br> featured property located{" "}
          <span className="text-blue-400">
            in your local cit <br></br>{" "}
          </span>
        </h3>
        <div className=" flex justify-center pb-10 ">
          <div className="flex justify-center  bg-gray-50  w-3/4 m-h-[10rem] rounded-lg p-2 space-x-5 ">
            <div className="input">
              <h4>City/street</h4>
              <input
                type="text"
                placeholder=" location..."
                className="border border-gray-300 outline-none"
              />
            </div>
            <div className="input">
              <h4>property type</h4>
              <input
                type="text"
                placeholder=" property type..."
                className="border border-gray-300 outline-none"
              />
            </div>
            <div className="input">
              <h4>Price range</h4>
              <input
                type="text"
                placeholder=" price... "
                className="border border-gray-300 outline-none"
              />
            </div>
            <div className="flex items-center pl-20 space-x-3 ">
              <h4 className="text-black font-bold">Advanced filter</h4>
              <button className=" bg-blue-600 p-5 rounded-lg">
                <BiSearch size={20} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
