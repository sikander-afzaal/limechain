import React from "react";
import { Fade } from "react-reveal";
import ServiceBox from "../../Components/ServiceBox";
function Services() {
  const data = [
    "Email to Wallet Integration",
    "Decentralised Exchanges (DEXs)",
    "Crypto Payment Gateways",
    "Open / Closed NFT Marketplaces",
    "NFT Minting Contracts",
    "Entire NFT Collection Creations",
    "Cryptocurrency Token Contracts",
    "Custom Smart Contract development ",
    "NFT Design and Deployment ",
    "And much more - Get in contact with us!",
  ];
  return (
    <div
      id="services"
      className="flex w-full justify-center items-center mt-[80px] px-5"
    >
      <div className="relative flex justify-center items-center flex-col w-full isolate max-w-[1400px] gap-1">
        <Fade>
          <h1 className="text-center font-bold text-[40px] text-head">
            Labz Tech Services
          </h1>
        </Fade>
        <Fade bottom>
          <div className="xl:grid flex flex-wrap justify-center items-center xl:place-items-center xl:grid-cols-4 w-full gap-4 mt-[40px]">
            {data.map((elem, idx) => {
              return <ServiceBox text={elem} key={"about" + idx} />;
            })}
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Services;
