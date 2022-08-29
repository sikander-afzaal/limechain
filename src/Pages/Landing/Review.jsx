import React from "react";
import img from "../../Assets/people.png";
function Review() {
  return (
    <div className="flex justify-center items-center w-full px-5 mt-[100px] text-center">
      <div className="flex isolate gap-1 justify-center items-center flex-col w-full max-w-[1244px] relative">
        <h2 className="uppercase text-main font-bold text-[20px]">Feedback</h2>
        <h1 className="text-head font-bold text-[40px]">What people say</h1>
        <p className="max-w-[700px] font-normal text-text text-[20px]">
          We help startups and corporate clients build secure, trusted, and
          decentralized products using Blockchain.
        </p>
        <div className="flex justify-between md:flex-row flex-col w-full items-center md:items-start gap-5 mt-10">
          <div className="md:w-auto w-full flex justify-center items-start flex-col gap-7">
            <div className="w-full md:w-[380px] h-[116px] flex justify-start md:justify-center items-center gap-5 bg-white shadow-service p-2">
              <img src={img} alt="" />
              <div className="text-left flex flex-col items-start gap-1">
                <h2 className="text-black font-bold text-lg">Tyler Ward</h2>
                <p className="text-black font-semibold text-sm">
                  Co-Founder BarnBridge and Universe.XYZ
                </p>
              </div>
            </div>
            <div className="w-full md:w-[380px] h-[116px] flex justify-start md:justify-center items-center gap-5 bg-white shadow-service p-2">
              <img src={img} alt="" />
              <div className="text-left flex flex-col items-start gap-1">
                <h2 className="text-black font-bold text-lg">Tyler Ward</h2>
                <p className="text-black font-semibold text-sm">
                  Co-Founder BarnBridge and Universe.XYZ
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start gap-3 flex-col text-center md:text-left max-w-[600px]">
            <h1 className="text-head font-bold text-[25px]">
              “We’re glad to have LimeChain as core contributors”
            </h1>
            <p className="text-text font-normal text-lg">
              At Universe, we’re glad to have LimeChain as core contributors and
              tech leads in the DAO. They’ve led the development of the Universe
              marketplace, as well as Polymorphs and Lobby Lobster NFT drops,
              and we’re looking forward to working alongside them for the
              foreseeable future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
