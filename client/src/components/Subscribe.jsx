import React from "react";

const Subscribe = () => {
  return (
    <div className="flex justify-center items-center pt-[100px] pb-[20px]">
      <p className="text-2xl text-white font-bold mr-4">Get Daily Updates</p>
      <div className="flex border border-gray-400 rounded-md overflow-hidden">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 focus:outline-none"
        />
        <button className="px-4 py-2 text-white font-semibold border-l border-gray-400 hover:bg-white hover:text-black">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
