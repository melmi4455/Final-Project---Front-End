import React from "react";
import { BsStar } from "react-icons/bs";
import { FaBed } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { HiCurrencyDollar } from "react-icons/hi";
const ListCard = ({ data }) => {
  return (
    <div>
      <div className="flex flex-col justify-center  bg-white drop-shadow-lg shadow-lg rounded-md overflow-hidden">
        {/* descriptions */}
        <div className=" ">
          <img
            className="w-64 min-h-[10rem]  rounded-sm object-cover"
            src={`http://localhost:7000/${data.image}`}
            alt="homecard "
          />
          <div>
            <div className="grid grid-cols-2 gap-4 rounded-lg bg-gray-100 p-3 w-72">
              <div className=" text-2xl  ">{data.city}</div>
              <div className="flex items-center pl-10">
                <HiCurrencyDollar />
                {data.price}
              </div>
              <div className="flex items-center space-x-2">
                <GoLocation />
                {data.address}
              </div>
            </div>
            <div className="text-md text-gray-500 p-3">
              <h4 className="font-bold text-md">Description </h4>
              {data.description}
            </div>

            <div className="flex items-center pl-20 py-4">
              <button className="bg-blue-500 rounded-lg p-1">Book now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;