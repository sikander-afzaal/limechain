import Hero from "./Hero";
import gif from "../../Assets/gif.gif";
import { Link } from "react-router-dom";
import Overview from "./Overview";
import Consultation from "./Consultation";

const Metaverse = () => {
  return (
    <div className="w-full  relative isolate flex justify-start items-center flex-col bg-metaverse ">
      <Link
        to={"/"}
        className="absolute top-5 left-10 flex justify-start items-center gap-3 z-20"
      >
        <img src={gif} className="object-contain w-[37px]" alt="" />
        <p className="uppercase font-chivo font-black text-white text-2xl">
          meta Labz AI
        </p>
      </Link>
      <h1 className="font-chivo absolute left-0 top-0 font-black text-[#FFFFFF0D] vertical-text whitespace-nowrap -z-10 text-[90px] sm:text-[150px] lg:text-[200px] leading-[0.7]">
        META LABZ AI
      </h1>
      <h1 className="font-chivo absolute right-0 top-[80px] sm:top-[150px] font-black text-[#FFFFFF0D] vertical-text2 whitespace-nowrap -z-10 text-[90px] sm:text-[150px] lg:text-[200px] leading-[0.7] rotate-180">
        META LABZ AI
      </h1>
      <Hero />
      <Overview />
      <Consultation />
    </div>
  );
};

export default Metaverse;
