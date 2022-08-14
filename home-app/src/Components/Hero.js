import React from "react";
import { FaSearch } from "react-icons/fa";
const Hero = () => {
  return (
    <div>
      <div className=" bg-blue-400 h-80 flex justify-center items-center">
        <div className="flex flex-col items-center">
          <h3 className="font-bold p-2 text-2xl text-white">
            Find a Rent when you want at the right price
          </h3>
          <div className="flex">
            <div className="flex item-center bg-white p-2">
              <FaSearch size={20} className="mr-3 text-blue-400" />
              <input
                type="text"
                placeholder="search.."
                className="outline-none rounded-md"
              />
              <button className="bg-blue-300 text-white font-bold text-xs px-5">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
