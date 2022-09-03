import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import wallet from "../../Assets/wallet.webp";
import bitcoin from "../../Assets/bitcoin.jpg";
function Section({ order }) {
  return (
    <div className="w-full justify-center flex items-center ">
      <div className="w-full justify-center flex-col px-5 mb-[0px] mt-[150px] lg:my-[70px] gap-4 lg:gap-10 items-center flex 3xl:max-w-[1900px] max-w-[1244px]">
        <div className="flex lg:flex-row flex-col  justify-between lg:py-24 items-center gap-7 lg:gap-[100px] w-full">
          <div className="lg:order-1 order-2 text-white gap-6 flex  flex-col items-start justify-center">
            <h1 className="text-[30px] text-white">
              Allow the creation of mass Web3 wallets with a simple Labz Widget
            </h1>
            <p className="text-base leading-loose">
              An omnibus Wallet-as-a-Service integration that allows users on
              your platform to seamless create Crypto wallets through inputting
              their email address
            </p>
            <h2 className="flex gap-4 justify-start items-center text-main text-md sm:text-xl">
              <FontAwesomeIcon icon={faArrowRight} /> More information to be
              released soon
            </h2>
          </div>
          <img
            className="lg:order-2 order-1 w-[500px] object-contain"
            src={wallet}
            alt=""
          />
        </div>
        <div className="flex lg:flex-row flex-col justify-between py-24 items-center gap-7 lg:gap-[100px] w-full">
          <img className="w-[500px] object-contain" src={bitcoin} alt="" />
          <div className="text-white gap-6 flex flex-col items-start justify-center">
            <h1 className="text-[30px] text-white">
              Labz Ventures - Providing a Web3 Investment Architecture Framework
            </h1>
            <p className="text-base leading-loose">
              Labz Ventures endeavours on building the next generation of
              distributive Web3 companies by bringing together visionary ideas
              and investment capital.
            </p>
            <h2 className="flex gap-4 justify-start items-center text-main text-md sm:text-xl">
              <FontAwesomeIcon icon={faArrowRight} /> More information to be
              released soon
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
