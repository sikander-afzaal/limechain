import { faBars, faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import logo from "../Assets/logo.svg";
function Header() {
  const [header, setHeader] = useState(false);
  return (
    <div className="w-full flex justify-center items-center px-5">
      <div className="flex justify-between items-center w-full max-w-[1500px] h-[84px]">
        <div className=" flex justify-center items-center gap-6 xl:gap-20">
          <img src={logo} alt="" />
          <div
            className={`flex lg:flex-row flex-col lg:static fixed top-0 transition-all ${
              header
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            } left-0  w-full lg:pointer-events-auto lg:opacity-100  lg:w-auto justify-start lg:justify-center items-start lg:bg-transparent bg-[#171e28] h-screen lg:h-auto lg:px-0 px-5 lg:pt-0 pt-[85px] lg:items-center lg:gap-5`}
          >
            <a
              href="#"
              className="lg:w-auto w-full lg:py-0 py-4 text-white border-b-[1px] border-solid border-[#212934]  lg:text-text font-bold text-base no-underline lg:border-b-[3px] lg:border-transparent hover:text-main lg:hover:border-main transition-colors lg:hover:text-text"
            >
              Home
            </a>
            <a
              href="#"
              className="lg:w-auto w-full lg:py-0 py-4 text-white border-b-[1px] border-solid border-[#212934]  lg:text-text font-bold text-base no-underline lg:border-b-[3px] lg:border-transparent hover:text-main lg:hover:border-main transition-colors lg:hover:text-text"
            >
              About us
            </a>
            <a
              href="#"
              className="lg:w-auto w-full lg:py-0 py-4 text-white border-b-[1px] border-solid border-[#212934]  lg:text-text font-bold text-base no-underline lg:border-b-[3px] lg:border-transparent hover:text-main lg:hover:border-main transition-colors lg:hover:text-text"
            >
              Services
            </a>
            <a
              href="#"
              className="lg:w-auto w-full lg:py-0 py-4 text-white border-b-[1px] border-solid border-[#212934]  lg:text-text font-bold text-base no-underline lg:border-b-[3px] lg:border-transparent hover:text-main lg:hover:border-main transition-colors lg:hover:text-text"
            >
              Clients
            </a>
            <a
              href="#"
              className="lg:w-auto w-full lg:py-0 py-4 text-white border-b-[1px] border-solid border-[#212934]  lg:text-text font-bold text-base no-underline lg:border-b-[3px] lg:border-transparent hover:text-main lg:hover:border-main transition-colors lg:hover:text-text"
            >
              Use cases
            </a>
            <a
              href="#"
              className="lg:w-auto w-full lg:py-0 py-4 text-white border-b-[1px] border-solid border-[#212934]  lg:text-text font-bold text-base no-underline lg:border-b-[3px] lg:border-transparent hover:text-main lg:hover:border-main transition-colors lg:hover:text-text"
            >
              Blog
            </a>
            <button className=" lg:hidden block bg-btn text-white h-[45px] w-full mt-[120px] text-base font-bold rounded transition-all hover:bg-[#171e28] cursor-pointer duration-500">
              Ready to talk?
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4 lg:gap-9 relative z-30">
          <FontAwesomeIcon
            onClick={() => setHeader((prev) => !prev)}
            icon={header ? faXmark : faBars}
            className="text-[#818a91] text-[25px] lg:hidden block"
          />
          <button className="lg:block hidden bg-btn text-white h-[45px] w-[215px] text-base font-bold rounded transition-all hover:bg-[#171e28] cursor-pointer duration-500">
            Ready to talk?
          </button>
          <FontAwesomeIcon
            className="text-[#818a91] text-[25px]"
            icon={faSearch}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
