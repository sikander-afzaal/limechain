import React from "react";
import ServiceBox from "../../Components/ServiceBox";
import serviceBg from "../../Assets/service-bg.svg";
function Services() {
  return (
    <div className="flex w-full justify-center items-center mt-[80px] px-5">
      <div className="relative flex justify-center items-center flex-col w-full isolate max-w-[1400px] gap-1">
        <img
          src={serviceBg}
          className="h-full right-0 top-0 absolute -z-10"
          alt=""
        />
        <h2 className="uppercase text-main font-bold text-[20px]">Services</h2>
        <h1 className="text-head font-bold text-[40px] text-center">
          Labz’s Service Overview
        </h1>
        <div className="mt-[20px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center  xl:grid-cols-4 w-full gap-7">
          <ServiceBox text={"Email to Wallet Functionality"} />
          <ServiceBox text={"Smart Contract Development"} />
          <ServiceBox text={"Entire DeFi Ecosystem Creation"} />
          <ServiceBox text={"dApp Development"} />
          <ServiceBox text={"Token Offering Creation"} />
          <ServiceBox text={"Open/Closed NFT Marketplace Creation"} />
          <ServiceBox text={"Fiat Gateway Integration"} />
          <ServiceBox text={"On Ramp Functionality"} />
        </div>
      </div>
    </div>
  );
}

export default Services;
