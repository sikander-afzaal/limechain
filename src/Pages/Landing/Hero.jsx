import React from "react";
import trust from "../../Assets/trust.svg";
function Hero() {
  return (
    <div className="flex justify-center items-start w-full  px-5">
      <div className="flex gap-9 justify-start items-start flex-col w-full max-w-[1244px] pt-[50px] md:pt-[100px]">
        <h1 className="text-black text-4xl sm:text-6xl font-bold">
          Web3 Development <br /> and Consulting
        </h1>
        <p className="text-text text-xl sm:text-2xl font-normal">
          Blockchain | DeFi | Metaverse | Web3 Gaming | NFTs | DAOs | Tooling
        </p>
        <button className="w-[260px] h-[50px] text-white bg-main rounded-md hover:bg-[#21d98d] hover:scale-110 transition-all text-base font-bold">
          Get Started
        </button>
        <div className="w-full flex flex-col justify-start items-start gap-4 mt-[20px] md:mt-[100px]">
          <h2 className="font-bold text-[22px] text-text">Trusted By:</h2>
          <div className="sm:flex grid grid-cols-2 w-full sm:justify-between sm:items-center flex-wrap gap-2 sm:gap-6 sm:max-w-[900px]">
            <div className="bg-[#f3f4f5] flex justify-center items-center h-[114px] sm:h-auto sm:bg-transparent w-full sm:w-auto">
              <img src={trust} alt="" />
            </div>
            <div className="bg-[#f3f4f5] flex justify-center items-center h-[114px] sm:h-auto sm:bg-transparent w-full sm:w-auto">
              <img src={trust} alt="" />
            </div>
            <div className="bg-[#f3f4f5] flex justify-center items-center h-[114px] sm:h-auto sm:bg-transparent w-full sm:w-auto">
              <img src={trust} alt="" />
            </div>
            <div className="bg-[#f3f4f5] flex justify-center items-center h-[114px] sm:h-auto sm:bg-transparent w-full sm:w-auto">
              <img src={trust} alt="" />
            </div>
            <div className="bg-[#f3f4f5] flex justify-center items-center h-[114px] sm:h-auto sm:bg-transparent w-full sm:w-auto">
              <img src={trust} alt="" />
            </div>
            <div className="bg-[#f3f4f5] flex justify-center items-center h-[114px] sm:h-auto sm:bg-transparent w-full sm:w-auto">
              <img src={trust} alt="" />
            </div>
            <div className="bg-[#f3f4f5] flex justify-center items-center h-[114px] sm:h-auto sm:bg-transparent w-full sm:w-auto">
              <img src={trust} alt="" />
            </div>
            <div className="bg-[#f3f4f5] flex justify-center items-center h-[114px] sm:h-auto sm:bg-transparent w-full sm:w-auto">
              <img src={trust} alt="" />
            </div>
            <div className="bg-[#f3f4f5] flex justify-center items-center h-[114px] sm:h-auto sm:bg-transparent w-full sm:w-auto">
              <img src={trust} alt="" />
            </div>
            <div className="bg-[#f3f4f5] flex justify-center items-center h-[114px] sm:h-auto sm:bg-transparent w-full sm:w-auto">
              <img src={trust} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
