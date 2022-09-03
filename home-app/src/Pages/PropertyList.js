import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import ListCard from "../Components/ListCard";

const PropertyList = () => {
  const [property, setProperty] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:7000/property/", {
        headers: {
          authorization: token,
        },
      })
      .then((res) => setProperty(res.data.data));
  }, []);
  console.log(property);
  return (
    <div>
      <div className="flex flex-col justify-center items-center py-20 ">
        <div className="flex space-x-2 w-20 bg-blue-300 p-1 rounded-md">
          <h3>Rent</h3>
          <h3>Sale</h3>
        </div>
        <div className="w-3/4 h-[10rem] bg-blue-700 p-10 ">
          <div className="flex justify-center items-center ">
            <div className="grid grid-cols-4 gap-2">
              <div className="">
                <select>
                  <option>All Type</option>
                  <option>Rent</option>
                  <option>Sale</option>
                </select>
              </div>
              <div className="">
                <input type="text" placeholder="location" />
              </div>
              <div className=" ">
                <input
                  type="text"
                  placeholder="24 sqr "
                  className="line bg-black text-yellow "
                />
              </div>
              <div className=" ">
                <input type="text" placeholder="$350" />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center p-10 ">
            <div className="grid grid-cols-4 gap-2">
              <div className="">
                <select>
                  <option>All Type</option>
                  <option>Rent</option>
                  <option>Sale</option>
                </select>
              </div>
              <div className="">
                <input type="text" placeholder="location" />
              </div>
              <div className=" ">
                <input
                  type="text"
                  placeholder="24 sqr "
                  className="line bg-black text-yellow "
                />
              </div>
              <div className=" ">
                <input type="text" placeholder="$349" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-bold pt-10">We have found {property.length} houses you uploaded</h1>
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="grid grid-cols-4 gap-2 ">
          {property.map((found) => (
            <ListCard data={found} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
