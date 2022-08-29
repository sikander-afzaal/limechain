import React from "react";
import Choose from "./Choose";
import Hero from "./Hero";
import Services from "./Services";
import line from "../../Assets/line.svg";
import Review from "./Review";
import Talk from "./Talk";
import trust from "../../Assets/trust.svg";
import About from "./About";
function Index() {
  return (
    <div>
      <Hero />
      <div className="w-full max-w-[1244px] px-5 mx-auto flex flex-col justify-start items-start gap-4 mt-[20px] md:mt-[100px]">
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
      <Choose />
      <Services />
      <div className="flex justify-center items-center gap-8 lg:gap-[90px] mt-[50px] lg:mt-[80px] lg:flex-row flex-col text-center px-5">
        <div className="flex flex-col  justify-center items-center gap-0 text-center">
          <h2 className="text-main font-bold text-[40px]">150+</h2>
          <p className="text-text text-lg font-normal">Projects</p>
        </div>
        <img className="hidden lg:block" src={line} alt="" />
        <div className="flex flex-col justify-center items-center gap-0 text-center">
          <h2 className="text-main font-bold text-[40px]">160+</h2>
          <p className="text-text text-lg font-normal">
            Smart contracts on mainnet
          </p>
        </div>
        <img className="hidden lg:block" src={line} alt="" />
        <div className="flex flex-col justify-center items-center gap-0 text-center">
          <h2 className="text-main font-bold text-[40px]">69 839 420+</h2>
          <p className="text-text text-lg font-normal">gm's</p>
        </div>
      </div>
      <Review />
      <Talk />
      <About />
    </div>
  );
}

export default Index;
