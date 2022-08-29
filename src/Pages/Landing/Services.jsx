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
        <h1 className="text-head font-bold text-[40px]">What we do</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-7">
          <ServiceBox text={"Smart Contracts Development"} />
          <ServiceBox text={"Defi Development"} />
          <ServiceBox text={"dApp Development"} />
          <ServiceBox text={"Launching DAOs"} />
          <ServiceBox text={"Blockchain Technical Consulting"} />
          <ServiceBox text={"Token Offering"} />
        </div>
      </div>
    </div>
  );
}

export default Services;
