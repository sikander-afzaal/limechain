import React from "react";
import Choose from "./Choose";
import Hero from "./Hero";
import Services from "./Services";
import line from "../../Assets/line.svg";
import Review from "./Review";
import Talk from "./Talk";
function Index() {
  return (
    <div>
      <div className="bg-hero-pattern bg-cover">
        <Hero />
        <Choose />
      </div>
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
    </div>
  );
}

export default Index;
