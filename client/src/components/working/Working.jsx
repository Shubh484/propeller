import React from "react";
import filteringJob from "../../resources/filteringJob.svg";
import emailCustomization from "../../resources/emailCustomization.svg";
import sendingToHR from "../../resources/sendingToHR.svg";
import trackingStatus from "../../resources/trackingStatus.svg";

const Working = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-[250px]  ">
      <div className="pb-[100px]">
        <p className="text-6xl font-sans font-bold">How Propeller works ?</p>
      </div>
      <div className="bg-[#7646A6] flex flex-col rounded-md">
        <div className="flex space-x-8">
          <div className="flex flex-col justify-center items-start pl-[60px] pt-[40px] w-[600px]">
            <img src={filteringJob} alt="filtering_job" width={300} />
            <p className="text-white text-3xl tracking-widest font-sans font-bold pt-[40px]">
              {" "}
              Filtering Jobs
            </p>
            <p className="text-[16px] text-white font-sans font-normal items-start pt-[20px]">
              We curate job listings based on your skills, experience, and
              preferences, ensuring that you only see relevant opportunities.
              Our smart filters help you easily browse through positions that
              align with your career goals.
            </p>
          </div>
          <div className="flex flex-col justify-center items-end p-[60px]  pt-[150px] w-[600px]">
            <div className=" pr-[160px]">
              <img
                src={emailCustomization}
                alt="emailCustomization"
                width={300}
              />
            </div>
            <p className="text-white text-3xl tracking-widest font-sans font-bold pt-[100px] ">
              Customize Resume and Email
            </p>
            <p className="text-[16px] text-white font-sans font-normal items-end pt-[20px]">
              Tailor your resume and email for each application with our
              customization tools. We optimize both to highlight your strengths
              and match the specific job requirements, giving you a higher
              chance of standing out to recruiters.
            </p>
          </div>
        </div>
        <div className="flex pb-[80px] space-x-8">
          <div className="flex flex-col justify-center items-start pl-[60px] pt-[40px] w-[600px]">
            <img src={sendingToHR} alt="sendingToHR" width={300} />
            <p className="text-white text-3xl tracking-widest font-sans font-bold pt-[40px]">
              Sending automatic application to HR
            </p>
            <p className="text-[16px] text-white font-sans font-normal items-start pt-[20px]">
              Tailor your resume and email for each application with our
              customization tools. We optimize both to highlight your strengths
              and match the specific job requirements, giving you a higher
              chance of standing out to recruiters.
            </p>
          </div>
          <div className="flex flex-col justify-center items-start pl-[60px] pt-[40px] w-[550px]">
            <img src={trackingStatus} alt="trackingStatus" width={300} />
            <p className="text-white text-3xl tracking-widest font-sans font-bold pt-[40px] ">
              Tracking Application Statuses
            </p>
            <p className="text-[16px] text-white font-sans font-normal items-end pt-[20px]">
              Stay in the loop with real-time updates on your applications. Our
              dashboard allows you to track which jobs have viewed or responded
              to your submission, ensuring you’re always aware of the progress.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;
