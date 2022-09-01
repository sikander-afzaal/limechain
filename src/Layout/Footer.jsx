import React from "react";
import logo from "../Assets/logo.png";
function Footer() {
  return (
    <div className="flex justify-center items-center w-full px-5 mt-[100px] py-[50px]">
      <div className="flex gap-[50px] justify-center  items-start flex-col w-full   max-w-[1244px]">
        <img src={logo} className="w-[160px]" alt="" />

        <div className="  flex flex-col justify-start items-center gap-3">
          <h2 className="text-sm font-semibold text-head">
            Subscribe to receive updates
          </h2>
          <div className=" flex flex-col justify-center items-start gap-1">
            <div className=" flex justify-start items-start  ">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white border-[1px] rounded-tl-md rounded-bl-md border-solid border-[#D4DCDC] h-[45px] w-[250px] focus:outline-none pl-3"
              />
              <button className="rounded-tr-md rounded-br-md w-[90px] sm:w-[108px] h-[45px] text-white bg-main  hover:bg-[#21d98d]  transition-all text-base font-bold">
                Submit
              </button>
            </div>
            <div className="flex gap-2 justify-center items-center">
              <input type="checkbox" />
              <p className="text-white font-normal text-sm">
                I have read and I agree to LimeChain's Privacy Policy
              </p>
            </div>
          </div>
          <div className="flex self-start justify-start items-start gap-1 mt-2 flex-col">
            <h2 className="text-head font-bold text-[18px]">The labz</h2>
            <p className="text-text text-base">
              83 friar gate, <br /> Derby, <br /> DE1 1FL, <br /> Uk
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
