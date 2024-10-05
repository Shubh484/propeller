import React from "react";
import testImage from "../../resources/testImage1.png";

const Testimonial = () => {
  return (
    <div className="mt-[250px] w-full bg-[#7646A6]">
      <div className="pt-[150px] pb-[180px] flex flex-col justify-center items-center">
        <p className="text-white text-[18px] font-sans w-[550px] ">
          "Propeller has completely transformed my job search! As a recent
          graduate, I was overwhelmed by the number of applications I had to
          send out. With Propeller’s automated application feature, I saved
          hours each week."
        </p>
        <div className="pt-[50px] flex space-x-6">
          <img src={testImage} alt="test" width={80} />
          <p className="pt-[30px] text-2xl text-white font-sans font-extrabold">
            Bill Gates
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
