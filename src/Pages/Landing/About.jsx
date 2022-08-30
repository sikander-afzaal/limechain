import React from "react";
import ServiceBox from "../../Components/ServiceBox";

function About() {
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
    <div className="flex justify-center  items-center w-full px-5 mt-[100px]">
      <div className="flex isolate gap-10 justify-center items-start flex-col w-full max-w-[1244px] relative">
        <h1 className="text-head text-4xl sm:text-5xl font-bold max-w-[900px]">
          Labz has a mission to provide <br className="hidden md:block" /> our
          partners with cutting-edge blockchain & Web3 products
        </h1>
        <p className="text-text text-xl sm:text-2xl font-normal max-w-[700px]">
          Labz is passionate about creating decentralised application ecosystems
          which catalyses the adoption challenge of blockchain technology. We
          provide holistic solutions for our clients in their transition from
          Web2 to Web3.
        </p>
        <div className="flex flex-col w-full items-center justify-center  mt-[50px]">
          <h1 className="text-center font-bold text-[40px] text-head">
            Labz Tech Services
          </h1>
          <div className="xl:grid flex flex-wrap justify-center items-center xl:place-items-center xl:grid-cols-4 w-full gap-4 mt-[40px]">
            {data.map((elem, idx) => {
              return <ServiceBox text={elem} key={"about" + idx} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
