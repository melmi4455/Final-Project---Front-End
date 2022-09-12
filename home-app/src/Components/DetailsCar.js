import { data } from "autoprefixer";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MdOutlineBedroomParent, MdOutlineLocationOn } from "react-icons/md";
import { BiDollarCircle } from "react-icons/bi";

const DetailsCar = () => {
  const [input, setInput] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    //   const token = localStorage.getItem("token")

    axios
      .get(`http://localhost:7000/property/${id}`)
      .then((res) => setInput(res.data.message));
    //  setInput(res));
  }, []);
  console.log(setInput);

  return (
    <div className="flex justify-center p-20">
      <div className="flex-center items-center  w-3/4 min-h-[10rem] drop-shadow-lg shadow-lg">
        <div className="grid grid-cols-2">
          <div>
            <img
              className="w-full min-h-[10rem]  rounded-sm object-cover"
              src={`http://localhost:7000/${input.image}`}
              alt="homecard "
            />
          </div>
          <div className="">
            <div className="p-5 space-y-2  rounded-t-2xl drop-shadow-2xl    z-50">
              <div className="flex items-center space-x-1 text-sm font-bold text-gray-500">
                <BiDollarCircle size={20} className="text-blue-500" />
                <h2>$400</h2>
              </div>
              <div className="flex items-center space-x-1">
                <MdOutlineLocationOn size={20} className="text-blue-500 " />
                <span>Jigjig yar</span>
              </div>
              <p className="pl-5">Single family house</p>
              <div className="flex justify-between">
                <div className="flex items-center space-x-1">
                  <MdOutlineBedroomParent
                    size={20}
                    className="text-blue-500 "
                  />
                  <p>4 Bedrooms</p>
                </div>
              </div>
              <div className="py-2">
                <button className="bg-blue-500 text-white font-bold text-sm p-2 rounded-lg">
                  Book now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCar;
