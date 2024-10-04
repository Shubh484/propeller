import React from "react";
import videoFile from "../../resources/videoFile.mp4";

const Hero = () => {
  return (
    <div className="flex justify-between items-center mt-[200px] ml-16 mr-16">
      <div className="flex flex-col justify-center w-[600px] ">
        <p className=" text-6xl font-bold font-sans  ">
          Fast-Track your carrer with <i className="text-5xl">"propeller"</i>
        </p>

        <p className="text-[18px] font-sans font-medium italic pt-16 w-[400px] ">
          Upload your resume and receive personalized job matches from top
          employers.
        </p>
        <div className="pt-16">
          <button className="font-sans font-bold text-white border border-gray-500 rounded-md px-4 py-3 bg-[#7646A6]">
            Upload Resume
          </button>
        </div>
      </div>

      <div className="border border-gray-200 rounded-lg p-8 bg-[#9D7ABF]">
        <iframe src={videoFile} height={300} width={500}></iframe>
      </div>
    </div>
  );
};

export default Hero;
