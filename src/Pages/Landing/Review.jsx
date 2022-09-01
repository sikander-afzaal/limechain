import React from "react";
import { Fade } from "react-reveal";
import img from "../../Assets/people.png";
function Review() {
  return (
    <div
      id="clients"
      className="flex justify-center items-center w-full px-5 mt-[100px] text-center"
    >
      <div className="flex isolate gap-1 justify-center items-center flex-col w-full max-w-[1244px] relative">
        <Fade top cascade>
          <h2 className="uppercase text-main font-bold text-[20px]">
            Feedback
          </h2>
          <h1 className="text-head font-bold text-[40px] text-center">
            Labz Client Testimonial
          </h1>
          <p className="max-w-[700px] font-normal text-text text-[20px]">
            Labz assists our start up clients and corporate partners to build
            cutting-edge, secure and decentralised product ecosystems:
          </p>
        </Fade>
        <Fade>
          <div className="flex justify-between md:flex-row flex-col w-full items-center md:items-start gap-5 mt-10">
            <div className="md:w-auto w-full flex justify-center items-start flex-col gap-7">
              <div className="w-full md:w-[380px] h-[116px] flex justify-start md:justify-center items-center gap-5 bg-white shadow-service p-2">
                {/* <img src={img} alt="" />
              <div className="text-left flex flex-col items-start gap-1">
                <h2 className="text-black font-bold text-lg">Tyler Ward</h2>
                <p className="text-black font-semibold text-sm">
                  Co-Founder BarnBridge and Universe.XYZ
                </p>
              </div> */}
              </div>
              <div className="w-full md:w-[380px] h-[116px] flex justify-start md:justify-center items-center gap-5 bg-white shadow-service p-2">
                {/* <img src={img} alt="" />
              <div className="text-left flex flex-col items-start gap-1">
                <h2 className="text-black font-bold text-lg">Tyler Ward</h2>
                <p className="text-black font-semibold text-sm">
                  Co-Founder BarnBridge and Universe.XYZ
                </p>
              </div> */}
              </div>
            </div>
            <div className="flex justify-start items-start gap-3 flex-col text-center md:text-left max-w-[600px]">
              {/* <h1 className="text-head font-bold text-[25px]">Launching Soon</h1> */}
              {/* <p className="text-text font-normal text-lg">
             
            </p> */}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Review;
