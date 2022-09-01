import React from "react";
import { Fade } from "react-reveal";
import img from "../../Assets/bg.jpeg";
function Talk() {
  return (
    <div className="flex justify-center items-center w-full lg:px-5 mt-[100px]  bg-white">
      <div className="flex isolate gap-1 justify-center lg:flex-row flex-col items-center  w-full  shadow-service max-w-[1244px] relative">
        <div className="p-5 lg:pl-5 lg:p-0 flex justify-center items-start flex-col w-full lg:w-1/2 gap-3">
          <Fade left>
            <h1 className="text-black font-bold text-[20px] md:text-[25px]">
              We are on the mission to build cutting-edge Web3 product
              ecosystems for our partner clients!
            </h1>
          </Fade>
          <Fade delay={500}>
            <p className="text-black font-normal text-lg">
              Let us build your Web3 activations
            </p>
          </Fade>
          <Fade delay={1500}>
            <div className="flex justify-center flex-col w-full xl:flex-row items-center gap-4">
              <a
                href="#about"
                className="grid place-items-center no-underline w-full xl:w-[260px] h-[50px] text-white bg-main rounded-md hover:bg-[#21d98d] hover:scale-105 transition-all text-base font-bold"
              >
                Contact Us
              </a>
              <button className="w-full xl:w-[300px] h-[50px] text-main border-2 border-solid border-main bg-transparent rounded-md hover:bg-main duration-300 transition-all text-base font-bold hover:text-white">
                Check our clients
              </button>{" "}
            </div>
          </Fade>
        </div>
        <img
          src={img}
          className="lg:-mr-1 max-w-[700px] lg:max-w-none lg:ml-11 ml-0 lg:w-1/2 w-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
}

export default Talk;
