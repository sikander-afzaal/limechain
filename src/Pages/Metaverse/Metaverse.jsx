import Hero from "./Hero";
import gif from "../../Assets/gif.gif";
import { Link } from "react-router-dom";
import Overview from "./Overview";
import Consultation from "./Consultation";
import Development from "./Development";
import Portfolio from "./Portfolio";
import FooterMetaverse from "../../Layout/FooterMetaverse";
import { Fade } from "react-reveal";

const Metaverse = () => {
  return (
    <div className="w-full overflow-x-hidden  relative isolate flex justify-start items-center flex-col bg-metaverse ">
      <div className="bg-[#8A44FD]  -z-10 blur-[230px] rotate-[180deg] w-full max-w-[520px]  h-[260px] absolute bottom-0 left-0 sm:opacity-100 opacity-60 sm:right-[0] "></div>
      <Link
        to={"/"}
        className="absolute top-5 left-10 flex justify-start items-center gap-3 z-20"
      >
        <img src={gif} className="object-contain w-[37px]" alt="" />
        <p className="uppercase font-chivo font-black text-white text-2xl">
          meta Labz AI
        </p>
      </Link>
      <div className=" w-full overflow-x-hidden flex justify-between items-start absolute left-0 top-0 -z-10">
        <Fade left>
          <h1 className=" font-chivo font-black text-[#FFFFFF0D] vertical-text whitespace-nowrap text-[90px] sm:text-[150px] lg:text-[200px] leading-[1] -ml-6">
            META LABZ AI
          </h1>
        </Fade>
        <Fade right>
          <h1 className="font-chivo  font-black text-[#FFFFFF0D]  vertical-text2 whitespace-nowrap  text-[90px] sm:text-[150px] lg:text-[200px] leading-[1] rotate-180  -mr-6 mt-[80px] sm:mt-[150px] origin-center">
            META LABZ AI
          </h1>
        </Fade>
      </div>
      <Hero />
      <Overview />
      <Consultation />
      <Development />
      <Portfolio />
      <FooterMetaverse />
    </div>
  );
};

export default Metaverse;
