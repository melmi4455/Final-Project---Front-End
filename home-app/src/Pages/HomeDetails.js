import { data } from "autoprefixer";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

console.log(data);
const HomeDetails = () => {
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
  console.log(input);

  return (
    <div className="flex justify-center items-center p-20 ">
      <div className=" flex justify-between w-2/5 min-h-full  shadow-lg rounded-md overflow-hidden">
        <div>
          <img
            src={`http://localhost:7000/${input.image}`}
            alt="home"
            className="w-96 h-full rounded-md "
          />
        </div>
        <div className=" px-10">
          <div className="flex  ">
            <h2 className="px-2">Magalada</h2>
            <br></br>
            {input.city}
          </div>
          <div className="flex">
            <span className="px-2">Dagmada</span>
            <br></br>
            {input.district}
          </div>
          <div className="flex">
            <span className="px-2">Phone:</span>
            <br></br>
            {input.phone}
          </div>
          <div className="flex flex-col px-2">
            <span className="px-2 py-2 text-xl font-bold">Description</span>

            {input.description}
          </div>
          <div className="py-10 px-5">
            <button className=" flex justify-center items-center bg-blue-500 rounded-md w-36 text-white font-bold text-md">
              Book now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDetails;
