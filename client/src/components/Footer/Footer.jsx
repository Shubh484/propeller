import React from "react";
import linkedin from "../../resources/linkedin.svg";
import instagram from "../../resources/instagram.svg";
import twitter from "../../resources/twitter.svg";
import facebook from "../../resources/facebook.svg";
import Subscribe from "../Subscribe";

const Footer = () => {
  return (
    <div className="mt-[250px] w-full bg-[#7646A6]">
      <Subscribe />
      <div className="flex justify-between items-center pt-[50px] pb-[30px] ">
        <div className="pl-[30px]">
          <p className="text-white text-4xl font-sans font-bold tracking-wider">
            Propeller
          </p>
        </div>
        <div className="flex space-x-4 pr-[20px]">
          <button className="hover:translate-y-1 ">
            <img src={linkedin} alt="linkedin" width={40} />
          </button>
          <button className="hover:translate-y-1 ">
            <img src={twitter} alt="twitter" width={40} />
          </button>
          <button className="hover:translate-y-1 ">
            <img src={instagram} alt="instagram" width={40} />
          </button>
          <button className="hover:translate-y-1 ">
            <img src={facebook} alt="facebook" width={40} />
          </button>
        </div>
      </div>
      <div className="pt-[10px] pb-[5px] flex justify-center items-center ">
        <span className="text-white font-sans">© 2024 Propeller</span>
      </div>
    </div>
  );
};

export default Footer;
