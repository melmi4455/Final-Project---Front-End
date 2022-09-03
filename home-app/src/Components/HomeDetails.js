import React from "react";

const HomeDetails = () => {
  return (
    <div className="flex justify-center py-20">
      <div className="flex justify-center items-center shadow-lg rounded-2xl border w-1/3">
        <div className="flex flex-col justify-center items-center ">
          <img
            src={require("../img/home1.jpg")}
            alt="home"
            className="w-96 h-52 border-2 shadow-md rounded-md"
          />
          <div className="shadow-md rounded-3xl p-2 ">
            <h3>Title</h3>
            <p>Location</p>
            <div className="grid grid-cols-3 gap-3">
              <button className=" border border-blue-800 text-gray-700 text-sm font-bold rounded-md p-1 ">
                4 beds
              </button>
              <button className="border border-blue-800 text-gray-700 text-sm font-bold rounded-md p-1">
                4 Bathrooms
              </button>
              <button className="border border-blue-900 text-gray-700 text-sm font-bold rounded-md p-1">
                4 950 M
              </button>
            </div>
            <div className="flex flex-col justify-center items-center">
              {/* Description */}
              <h3>some Description</h3>
              <h2 className="text-md text-gray-900">$245.00/month</h2>
              <button className="bg-blue-700 text-white text-sm px-1 py-2 mb-2 rounded-md">
                Contact Owner
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDetails;
