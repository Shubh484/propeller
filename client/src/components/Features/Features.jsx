import React from "react";
import jobMatching from "../../resources/jobMatching.svg";
import realTimeJobSearch from "../../resources/realTimeJobSearch.svg";
import smartEmailDelivery from "../../resources/smartEmailDelivery.svg";
import applicationTracking from "../../resources/applicationTracking.svg";
import dataDrivenAnalytics from "../../resources/dataDrivenAnalytics.svg";
import resumeCustomization from "../../resources/resumeCustomization.svg";
import threePurpleDots from "../../resources/threePurpleDots.svg";

const Features = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-[300px] mb-[100px]">
      <div className="pb-32">
        <span className="text-7xl font-sans font-bold tracking-widest ">
          Features
        </span>
      </div>
      <div className="flex justify-center items-center space-x-40 list-none">
        <li className="flex flex-col justify-center items-center pt-3">
          <img src={jobMatching} alt="jobMatching" width={200} />
          <p className="text-xl font-semibold font-sans italic pt-8">
            {" "}
            Job Matching
          </p>
        </li>
        <li className="flex flex-col justify-center items-center pt-16">
          <img src={realTimeJobSearch} alt="realTimeJobSearch" width={200} />
          <p className="text-xl font-semibold font-sans italic pt-8">
            Real Time Job Search
          </p>
        </li>
        <li className="flex flex-col justify-center items-center pt-20">
          <img src={smartEmailDelivery} alt="smartEmailDelivery" width={200} />
          <p className="text-xl font-semibold font-sans italic pt-8">
            Smart Email Delivery
          </p>
        </li>
      </div>
      {/* <div className="pt-40">
        <img src={threePurpleDots} alt="threePurpleDots" width={100} />
      </div> */}
      <div className="flex justify-center items-center space-x-40 list-none pt-40">
        <li className="flex flex-col justify-center items-center pt-14">
          <img
            src={applicationTracking}
            alt="japplicationTracking"
            width={200}
          />
          <p className="text-xl font-semibold font-sans italic pt-8">
            Application Tracking
          </p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <img
            src={dataDrivenAnalytics}
            alt="dataDrivenAnalyticsg"
            width={200}
          />
          <p className="text-xl font-semibold font-sans italic pt-8">
            Data Driven Analytics
          </p>
        </li>
        <li className="flex flex-col justify-center items-center pt-20">
          <img
            src={resumeCustomization}
            alt="resumeCustomization"
            width={200}
          />
          <p className="text-xl font-semibold font-sans italic pt-8">
            Resume Customization
          </p>
        </li>
      </div>
    </div>
  );
};

export default Features;
