import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import gif from "../Assets/gif.gif";
function Header() {
  const [header, setHeader] = useState(false);
  return (
    <div className="w-full flex justify-center items-center px-5 mt-[20px]">
      <div className="flex justify-between items-center w-full max-w-[1244px] ">
        <div className=" flex justify-center items-center gap-6 xl:gap-10">
          <img src={gif} className="w-[80px] object-contain h-full " alt="" />
          <div
            className={`flex md:flex-row flex-col md:static z-40 fixed top-0 transition-all ${
              header
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            } left-0  w-full md:pointer-events-auto md:opacity-100  md:w-auto justify-start md:justify-center items-start md:bg-transparent bg-[#171e28] h-full md:h-auto md:px-0 px-5 md:pt-0 pt-[85px] md:items-center md:gap-5`}
          >
            <a
              onClick={() => setHeader(false)}
              href="#home"
              className="md:w-auto w-full md:py-0 py-4 text-white border-b-[1px] border-solid border-[#212934]  md:text-text font-bold text-base no-underline md:border-b-[3px] md:border-transparent hover:text-main md:hover:border-main transition-colors md:hover:text-text"
            >
              Home
            </a>
            <a
              onClick={() => setHeader(false)}
              href="#about"
              className="md:w-auto w-full md:py-0 py-4 text-white border-b-[1px] border-solid border-[#212934]  md:text-text font-bold text-base no-underline md:border-b-[3px] md:border-transparent hover:text-main md:hover:border-main transition-colors md:hover:text-text"
            >
              About us
            </a>
            <a
              onClick={() => setHeader(false)}
              href="#services"
              className="md:w-auto w-full md:py-0 py-4 text-white border-b-[1px] border-solid border-[#212934]  md:text-text font-bold text-base no-underline md:border-b-[3px] md:border-transparent hover:text-main md:hover:border-main transition-colors md:hover:text-text"
            >
              Services
            </a>
            <a
              onClick={() => setHeader(false)}
              href="#clients"
              className="md:w-auto w-full md:py-0 py-4 text-white border-b-[1px] border-solid border-[#212934]  md:text-text font-bold text-base no-underline md:border-b-[3px] md:border-transparent hover:text-main md:hover:border-main transition-colors md:hover:text-text"
            >
              Clients
            </a>
            <Link
              onClick={() => setHeader(false)}
              to="/metalabz"
              className="md:w-auto w-full md:py-0 py-4 text-white border-b-[1px] border-solid border-[#212934]  md:text-text font-bold text-base no-underline md:border-b-[3px] md:border-transparent hover:text-main md:hover:border-main transition-colors md:hover:text-text"
            >
              Metalabz
            </Link>

            <a
              onClick={() => setHeader(false)}
              href="#about"
              className="no-underline md:hidden grid place-items-center bg-btn text-white h-[45px] w-full mt-[120px] text-base font-bold rounded transition-all hover:bg-[#171e28] cursor-pointer duration-500"
            >
              Get in contact!
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4 md:gap-9 relative z-50">
          <FontAwesomeIcon
            onClick={() => setHeader((prev) => !prev)}
            icon={header ? faXmark : faBars}
            className="text-[#818a91]  text-[25px] md:hidden block"
          />
          <a
            href="#about"
            className="no-underline  justify-center items-center md:flex hidden bg-btn text-white h-[45px] w-[215px] text-base font-bold rounded transition-all hover:bg-[#171e28] cursor-pointer duration-500"
          >
            Get in contact!
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
