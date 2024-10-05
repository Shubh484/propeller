import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="flex justify-between items-center ml-8 mr-8 mt-8 ">
      <span className="text-5xl font-bold text-[#6b3a9c]">Propeller</span>
      <ul className="flex justify-center items-center  space-x-6 custom-list mt-4">
        <li className="font-sans text-[18px] font-medium  ">
          what is propeller
        </li>
        <li className="font-sans text-[18px] font-medium">articles</li>
        <li className="font-sans text-[18px] font-medium">pricing</li>
      </ul>
      <div className="flex justify-center items-center space-x-8 pt-4">
        <button className="font-sans border border-gray-500 rounded-md px-4 py-2">
          Login
        </button>
        <button className="font-sans font-semibold text-white border border-gray-500 rounded-md px-4 py-2 bg-[#7646A6]">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Header;
