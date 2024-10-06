import React from "react";
import googleIcon from "../../resources/googleIcon.svg";

const Signup = () => {
  return (
    <>
      <div className="flex justify-between items-center ml-[20px] mr-[20px]">
        <p className="text-[#7646A6] text-4xl font-sans font-bold">Propeller</p>
        <button className="mt-[20px] mb-[20px] font-sans text-white font-medium border border-gray-500 bg-[#7646A6] rounded-md p-3 hover:text-black hover:bg-white">
          Sign in
        </button>
      </div>
      <div className="flex flex-col justify-center items-center w-[100vw] h-[100vh] bg-[#9D7ABF]">
        <div className="bg-white p-12 pr-16 pl-16 border rounded-md border-gray-500 ">
          <div className="pb-[30px]">
            <span className=" text-[44px] font-sans font-[380]">
              Sign up for free
            </span>
          </div>
          <div>
            <p className="text-base font-sams font-medium pb-1">Email</p>
            <input
              className="p-2 pr-24 border-[1.2px] rounded-md border-gray-400 hover:border-[#7646A6]"
              type="email"
              placeholder="Your Email Here"
            />
          </div>
          <div className="pt-4">
            <p className=" text-base font-sams font-medium pb-1">Password</p>
            <input
              className="p-2 pr-24 border-[1.2px] rounded-md border-gray-400 hover:border-[#7646A6] "
              type="password"
              placeholder="password"
            />
          </div>
          <div className="flex justify-center items-center pt-6 ml-[-10px]  ">
            <button className="text-white text-[18px] font-sans font-semibold  border rounded-md p-3 pl-[115px] pr-[120px]  bg-[#7646A6] hover:text-[#7646A6] hover:bg-white hover:border-gray-600 ">
              Sign Up
            </button>
          </div>
          <div className="border-b-2 border-gray-600 pt-4"></div>
          <div className="flex justify-center items-center space-x-1 mt-4 p-2 text-[18px] border border-gray-400 rounded-md hover:text-white hover:font-medium hover:bg-black">
            <img className="pt-1" src={googleIcon} alt="icon" width={30} />
            <button>Sign up with google </button>
          </div>
          <p className="w-[280px] pt-2 text-[10px] text-gray-600 font-semibold">
            By signing up, you agree with propeller's{" "}
            <a className="text-blue-600 cursor-pointer ">Terms & Conditions</a>{" "}
            and <a className="text-blue-600 cursor-pointer">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
