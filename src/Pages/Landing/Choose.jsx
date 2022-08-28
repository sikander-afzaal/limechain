import React from "react";
import bg from "../../Assets/choose.png";
import icon1 from "../../Assets/choose-icon1.svg";
import icon2 from "../../Assets/choose-icon2.svg";
import icon3 from "../../Assets/choose-icon3.svg";
import icon4 from "../../Assets/choose-icon4.svg";
import ChooseBox from "../../Components/ChooseBox";
function Choose() {
  const data = [
    {
      head: "Pioneers",
      desc: "Since 2017, we've been helping both start-ups and established enterprises implement Web3 solutions and build on blockchain. We've worked on over 150 projects and partnered with notable Web3 players like Hedera Hashgraph and Polkadot.",
      icon: icon1,
      text: "white",
      bg: "bg-[#3e4858]",
    },
    {
      head: "Deep expertise",
      desc: "We’re extremely well-versed in blockchain and Web3. With a team of over 100 brilliant people, we can tackle a wide range of projects from developing smart contracts, through building NFT marketplaces, to developing purpose-built blockchains.",
      icon: icon2,
      text: "[#181e27]",
      bg: "bg-main",
    },
    {
      head: "Holistic approach",
      desc: "Thanks to our diverse skill set, we can support you during every stage of product development. We can help you flesh out your product idea, test its viability, devise and execute implementation strategies and provide post-launch support.",
      icon: icon3,
      text: "[#181e27]",
      bg: "bg-[#f2f1f7]",
    },
    {
      head: "Blockchain-agnostic",
      desc: "Being experts in everything blockchain, we're not bound to any one chain or framework. This gives us the flexibility to always use the best tool for a particular job. We also specialize in cross-chain technologies like blockchain bridges.",
      icon: icon4,
      text: "white",
      bg: "bg-[#5a6cde]",
    },
  ];
  return (
    <div className="flex justify-center items-center w-full px-5 mt-[80px]">
      <div className="flex isolate gap-10 justify-center items-center flex-col w-full max-w-[1244px] relative">
        <img src={bg} className="-z-[10] h-full absolute left-0 top-0" alt="" />
        <h1 className="text-center font-bold text-[40px] text-head">
          Why Choose LimeChain
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:grid-rows-2 w-full max-w-[1000px]">
          {data.map((elem, id) => {
            return <ChooseBox key={"choose" + id} {...elem} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Choose;
