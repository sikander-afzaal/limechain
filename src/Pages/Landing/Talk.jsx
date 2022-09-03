import React from "react";
import { Fade } from "react-reveal";
import img from "../../Assets/bg.jpeg";
function Talk() {
  return (
    <div className="flex justify-center items-center w-full lg:px-5 my-[150px] ">
      <div className="flex isolate  justify-center h-[200px] gap-2 lg:gap-10  flex-col lg:flex-row items-center  w-full  shadow-service 3xl:max-w-[2000px] max-w-[1244px] relative">
        <div className="p-5 lg:pl-5 lg:p-0 flex justify-center items-start flex-col  gap-3">
          <Fade left>
            <h1 className="text-white font-bold text-[20px] md:text-[25px]">
              We are on a mission to build cutting-edge Web3 product ecosystems
              for our partner clients!
            </h1>
          </Fade>
          <Fade delay={500}>
            <p className="text-white font-normal text-lg">
              Let us build your Web3 activations
            </p>
          </Fade>
        </div>
        <Fade delay={1500}>
          <div className="flex justify-center xl:justify-start flex-col w-full xl:flex-row items-center gap-4 px-5 lg:pl-0 lg:pr-5">
            <a
              href="#about"
              className="grid place-items-center no-underline w-full xl:w-[260px] h-[50px] text-white bg-main rounded-md hover:bg-[#21d98d] hover:scale-105 transition-all text-base font-bold"
            >
              Contact Us
            </a>
            <button className="w-full xl:w-[300px] h-[50px] text-white border-2 border-solid border-main bg-transparent rounded-md hover:bg-main duration-300 transition-all text-base font-bold ">
              Check our clients
            </button>{" "}
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Talk;
