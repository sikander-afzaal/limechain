import React from "react";
import { Fade } from "react-reveal";
import logo from "../../Assets/logo.png";
function Hero() {
  return (
    <div id="home" className="flex justify-center items-start w-full  px-5">
      <div className="flex gap-9 relative justify-start items-start min-h-[600px] md:min-h-screen flex-col w-full 3xl:max-w-[2000px] max-w-[1244px] pt-[50px] md:pt-[150px]">
        <Fade left duration={1000}>
          <h1 className="text-head text-4xl sm:text-6xl font-bold">
            Web3 Technology <br /> Development & Solutions
          </h1>
        </Fade>
        <Fade delay={700} left>
          <p className="text-text text-xl sm:text-2xl font-normal">
            Providing Adoption at Scale Through Cutting-Edge Decentralized
            Ecosystem and Product Builds
          </p>
          <p className="text-text text-xl sm:text-2xl font-normal">
            Blockchain | Email to Wallet Solution | DeFi | NFTs | Tooling |
          </p>
        </Fade>

        <Fade delay={1700}>
          <a
            href="#about"
            className="no-underline grid place-items-center w-[260px] h-[50px] text-white bg-main rounded-md hover:opacity-60  hover:scale-105 transition-all text-base font-bold"
          >
            Talk to us
          </a>
        </Fade>
        <div className=" absolute right-0 2xl:-right-[10%] h-[1000px] w-full max-w-[800px] -z-[1]  -top-[10%]">
          <img
            src={logo}
            className="opacity-30  object-contain  w-full h-full"
            alt=""
          />
          <div className="absolute left-0 bottom-0 bg-gradient-black h-[90px] w-full"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
