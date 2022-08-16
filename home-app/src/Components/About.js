import React from "react";
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from "react-icons/ri";

const About = () => {
  return (
    <div className="px-10 py-5 ">
      <h3 className="text-center text-lg font-bold">About Us</h3>

      <div className=" flex justify-center px-3 py-6">
        <div
          className="grid grid-cols-2 gap-10 bg-white text-gray-700 w-3/4 min-h-[10rem] 
        shadow-lg rounded-md overflow-hidden"
        >
          <div className="flex  items-center space-x-2">
            <RiNumber1 size={20} className="text-blue-500 rounded-full" />

            <div>
              <h3>
                With our immense real-time rental database<br></br>
                and advanced search, we make it easy to find<br></br>
                the perfect Boston apartment.<br></br>
              </h3>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <RiNumber2 size={20} className="text-blue-500 rounded-full" />
            <div>
              <h3>
                Discover your new home or condo using our targeted<br></br>
                filters Browse images, <br></br>floor plans, video, and 3D tours
              </h3>
            </div>
          </div>
          <div className="flex items-center space-x-2 px-3 py-2">
            <RiNumber3 size={20} className="text-blue-500 rounded-full" />
            <div>
              <h3>
                home rental is a premier real estate portal for<br></br>
                property owners to maximize exposure and<br></br>
                lease properties faster.
              </h3>
            </div>
          </div>
          <div className="flex  items-center space-x-2 px-3 py-2">
            <RiNumber4 size={20} className="text-blue-500 rounded-full" />
            <div>
              <h3>
                home rental is a premier real estate portal for<br></br>
                property owners to maximize exposure and<br></br>
                lease properties faster.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
