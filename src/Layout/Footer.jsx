import React from "react";
import logo from "../Assets/logo.png";
function Footer() {
  return (
    <div className="flex justify-center items-center w-full px-5 mt-[100px] py-[50px]">
      <div className="flex gap-[50px] justify-center items-center sm:items-start flex-col w-full   max-w-[1244px]">
        <img src={logo} className="w-[130px]" alt="" />
        <div className="flex justify-center lg:justify-between  lg:flex-row flex-col items-start gap-3 w-full">
          <div className="flex justify-between sm:flex-row flex-col lg:mb-0 mb-10 lg:w-auto w-full lg:justify-start items-center sm:items-start gap-[70px]">
            <div className="flex flex-col items-start justify-start gap-4">
              <h2 className="text-text font-sm font-semibold">Company</h2>
              <div className="flex flex-col items-center lg:items-start justify-start gap-2">
                <a
                  href="#"
                  className="text-text font-sm font-semibold hover:text-main"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="text-text font-sm font-semibold hover:text-main"
                >
                  Clients
                </a>
                <a
                  href="#"
                  className="text-text font-sm font-semibold hover:text-main"
                >
                  Careers
                </a>
                <a
                  href="#"
                  className="text-text font-sm font-semibold hover:text-main"
                >
                  Contacts
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-4">
              <h2 className="text-text font-sm font-semibold">Company</h2>
              <div className="flex flex-col items-center lg:items-start justify-start gap-2">
                <a
                  href="#"
                  className="text-text font-sm font-semibold hover:text-main"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="text-text font-sm font-semibold hover:text-main"
                >
                  Clients
                </a>
                <a
                  href="#"
                  className="text-text font-sm font-semibold hover:text-main"
                >
                  Careers
                </a>
                <a
                  href="#"
                  className="text-text font-sm font-semibold hover:text-main"
                >
                  Contacts
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-4">
              <h2 className="text-text font-sm font-semibold">Company</h2>
              <div className="flex flex-col items-center lg:items-start justify-start gap-2">
                <a
                  href="#"
                  className="text-text font-sm font-semibold hover:text-main"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="text-text font-sm font-semibold hover:text-main"
                >
                  Clients
                </a>
                <a
                  href="#"
                  className="text-text font-sm font-semibold hover:text-main"
                >
                  Careers
                </a>
                <a
                  href="#"
                  className="text-text font-sm font-semibold hover:text-main"
                >
                  Contacts
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-4">
              <h2 className="text-text font-sm font-semibold">Company</h2>
              <div className="flex flex-col items-center lg:items-start justify-start gap-2">
                <a
                  href="#"
                  className="text-text font-sm font-semibold hover:text-main"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="text-text font-sm font-semibold hover:text-main"
                >
                  Clients
                </a>
                <a
                  href="#"
                  className="text-text font-sm font-semibold hover:text-main"
                >
                  Careers
                </a>
                <a
                  href="#"
                  className="text-text font-sm font-semibold hover:text-main"
                >
                  Contacts
                </a>
              </div>
            </div>
          </div>
          <div className="lg:block hidden h-[280px] bg-head opacity-30 w-[1px] self-center"></div>
          <div className="w-full lg:w-auto flex flex-col justify-start items-start gap-3">
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
            <div className="flex lg:flex-col flex-col sm:flex-row lg:justify-start justify-between  w-full lg:w-auto items-start">
              <div className="flex justify-start items-start gap-1 mt-2 flex-col">
                <h2 className="text-head font-bold text-[18px]">
                  London, United Kingdom
                </h2>
                <p className="text-text text-sm">
                  Rosemount House, Rosemount <br /> Avenue, West Byfleet,
                  Surrey, <br />
                  England, KT14 6LB
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
