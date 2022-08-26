import React from "react";
import { BsStar } from "react-icons/bs";
const ListCard = () => {
  return (
    // LISTS CARDS
    <div className="flex justify-center items-center">
      <div
        className="flex justify-center items-center   w-72 min-h-[10rem] 
    shadow-lg rounded-md overflow-hidden   "
      >
        <div className="rounded-t-2xl ">
          <div>
            <img
              src={require("../img/home4.jpg")}
              alt="homecard "
              className="w-72"
            />
          </div>

          {/* descriptions */}
          <div className="p-5 rounded-t-3xl ">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h1 className="text-2xl font-bold">title</h1>
                <p className="text-sm">some info </p>
              </div>

              <div className="flex flex-1 space-x-1 pl-12">
                <p>4.5</p>
                <BsStar size={20} className="text-yellow-400" />
              </div>
            </div>

            <div className="flex justify-between space-x-2 py-2 text-sm font-bold">
              <h3 className="border border-blue-700 rounded-md p-1">4 Beds</h3>
              <h3 className="border border-blue-700 rounded-md p-1">
                4 Bathrooms
              </h3>
              <h3 className="border border-blue-700 rounded-md p-1">24 sqr</h3>
            </div>

            <div className="space-y-3">
              <h2>Some info some info some info some infot some info</h2>
              <p className="text-sm font-bold ">
                $345<span className="text-sm font-light">/Month</span>
              </p>

              <div className="flex justify-center items-center">
                <button className="rounded-lg bg-blue-600 text-white px-5">
                  Contact owner
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
