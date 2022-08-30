import React from "react";

function About() {
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
      </div>
    </div>
  );
}

export default About;
