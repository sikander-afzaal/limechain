import React from "react";
import img from "../../Assets/talk.png";
function Talk() {
  return (
    <div className="flex justify-center items-center w-full px-5 mt-[100px] bg-white ">
      <div className="flex isolate gap-1 justify-center lg:flex-row flex-col items-center w-full  shadow-service max-w-[1244px] relative">
        <div className="p-5 lg:pl-5 lg:p-0 flex justify-center items-start flex-col w-full lg:w-1/2 gap-3">
          <h1 className="text-black font-bold text-[20px] md:text-[25px]">
            We've helped 150+ startups, frens and fomos build secure and trusted
            Web3 products.
          </h1>
          <p className="text-black font-normal text-lg">
            Let's build something together!
          </p>
          <div className="flex justify-center flex-col w-full xl:flex-row items-center gap-4">
            <button className="w-full xl:w-[260px] h-[50px] text-white bg-main rounded-md hover:bg-[#21d98d] hover:scale-105 transition-all text-base font-bold">
              Talk to us
            </button>
            <button className="w-full xl:w-[300px] h-[50px] text-main border-2 border-solid border-main bg-transparent rounded-md hover:bg-main duration-300 transition-all text-base font-bold hover:text-white">
              Check our clients
            </button>
          </div>
        </div>
        <img src={img} className="lg:w-1/2 w-full object-cover" alt="" />
      </div>
    </div>
  );
}

export default Talk;
