import React from "react";
import { useEffect, useState } from "react";

import { BiSearch } from "react-icons/bi";
import axios from "axios";

import ListCard from "../Components/ListCard";
import Hero from "../Components/Hero";
import HomeDetails from "./HomeDetails";

const PropertyList = () => {
  // fetch properties data

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
  // console.log(property);

  // search property
  async function Filter() {
    const [query, setQuery] = useState();
    const [search, setSearch] = useState([]);

    // search property

    const res = await axios.get("http://localhost:7000/property/");
    setSearch(res.data);
  }
  // fetch properties data

  return (
    <div>
      <div className="bg-[url('./img/feature.jpg')] bg-bottom bg-no-repeat bg-cover h-[450px] w-full flex justify-center items-center ">
        <div className="w-full m-h-[10rem]">
          <h3 className="text-center text-white text-3xl font-bold pb-24 ">
            Search Your Next Home{" "}
            <span>
              Find new <span className="text-blue-500">& </span>
              featured <br></br>property located in your{" "}
              <span className="text-blue-500"> local city</span>
            </span>
          </h3>
          <div className=" flex justify-center  ">
            <div className="flex justify-center  bg-gray-50  w-3/4 m-h-[10rem] rounded-lg p-2 space-x-5 ">
              <div className="input  flex justify-center items-center ">
                <div className="flex flex-col">
                  <h4>City/street</h4>

                  <input
                    type="text"
                    placeholder=" xafada..."
                    className="border border-gray-300 outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-end items-center pl-20 space-x-3 ">
                <h4 className="text-black font-bold">Advanced filter</h4>
                <button className=" bg-blue-600 p-5 rounded-lg">
                  <BiSearch size={20} className="text-white" onClick={Filter} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-10">
        <div className="grid grid-cols-4 w-fit gap-10 ">
          {property.map((found) => (
            <ListCard data={found} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
