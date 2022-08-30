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

      <Review />
      <Talk />
      <About />
    </div>
  );
}

export default Index;
