import React from "react";
import icon1 from "../../Assets/choose-icon1.svg";
import icon2 from "../../Assets/choose-icon2.svg";
import icon3 from "../../Assets/choose-icon3.svg";
import icon4 from "../../Assets/choose-icon4.svg";
import ChooseBox from "../../Components/ChooseBox";
function Choose() {
  const data = [
    {
      head: "Providing Solutions to Advance Web2.5 & Web 3 Adoption",
      desc: "Blockchain adoption is accelerating faster than the internet during the .com era. However, many Web2-native companies are struggling to understand the commercial viability of integrating Web3 technology solutions into their businesses. Labz has worked with a plethora of projects to provide cutting-edge technology which assists in the mass adoption challenge ranging from email to wallet solutions and creation of entire DeFi ecosystems.",
      icon: icon1,
      text: "white",
      bg: "bg-[#3e4858]",
    },
    {
      head: "Web3 Enthusiast",
      desc: "The team at Labz are well-informed in the blockchain and Web3 space as well as traditional corporate enterprise. With a dedicated team, Labz will support your project’s journey, from product inception to launch, to exceed expectations and achieve the common goal of adding valuable ecosystems to the Web3 space. ",
      icon: icon2,
      text: "[#181e27]",
      bg: "bg-[#55c2ca]",
    },
    {
      head: "Collaborative Approach",
      desc: "The Labz takes a collaborative approach during the product development journey of your build. The team will assist in unfolding and ascertain the end goal and product(s) ideas, test the viability, provide a step-by-step implementation plan for the success of the product(s) launch and provide post-launch support. ",
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
    <div className="flex justify-center  items-center w-full px-5 mt-[80px]">
      <div className="flex isolate gap-10 justify-center items-center flex-col w-full max-w-[1244px] relative">
        <h1 className="text-center font-bold text-[40px] text-head">
          Why Choose Labz
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:grid-rows-2 w-full max-w-[1200px]">
          {data.map((elem, id) => {
            return <ChooseBox key={"choose" + id} {...elem} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Choose;
