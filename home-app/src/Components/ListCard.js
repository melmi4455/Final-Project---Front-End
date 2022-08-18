import React from "react";

const ListCard = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-4  gap-3">
        <div>
          <img
            src={require("../img/home2.jpg")}
            alt="home img"
            className="w-72 "
          />
          <div>
            <h2>bangalo Fooq</h2>
          </div>
        </div>
        <div>
          <img
            src={require("../img/home2.jpg")}
            alt="home img"
            className="w-72 "
          />
        </div>
        <div>
          <img
            src={require("../img/home2.jpg")}
            alt="home img"
            className="w-72 "
          />
        </div>
        <div>
          <img
            src={require("../img/home2.jpg")}
            alt="home img"
            className="w-72"
          />
        </div>
      </div>
    </div>
  );
};

export default ListCard;
