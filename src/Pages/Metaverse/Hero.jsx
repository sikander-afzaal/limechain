import heroPerson from "../../Assets/metaverse/hero.png";
import heroArrow from "../../Assets/metaverse/hero-arrow.png";
import img2 from "../../Assets/metaverse/hero-2.png";
import { Fade } from "react-reveal";

const Hero = () => {
  return (
    <div className="flex isolate sm:min-h-screen w-full pt-[100px] xl:pt-[200px] justify-start items-center relative flex-col">
      {/* shadows------------ */}
      <div className="bg-[#6D2DE6] opacity-60 md:opacity-100 -z-10 blur-[230px] rotate-[180px] w-full max-w-[520px]  h-[260px] absolute -top-[5%] -left-[200px]"></div>
      <div className="bg-[#00A3FF] opacity-60 md:opacity-100 -z-10 blur-[230px]  w-full max-w-[520px]  h-[260px] absolute bottom-[8%] -left-[200px] sm:-left-[120px]"></div>
      <div className="bg-[#BFFD44] opacity-60 md:opacity-100  -z-10 blur-[230px] -rotate-[90] w-full max-w-[520px]  h-[260px] absolute bottom-[20%] md:bottom-[8%] -right-[300px] sm:-right-[240px] "></div>
      {/* shadows end------------ */}
      <div className="absolute left-1/2 xl:top-[90px] top-[20px] -translate-x-1/2 -z-10 rounded-full w-full md:block hidden max-w-[700px] xl:max-w-[1325px] h-[300px] xl:h-[600px] border-[#FFFFFF61]   border-2 border-solid border-b-0"></div>
      <div className="absolute left-1/2 top-[50px] xl:top-[140px] -translate-x-1/2 -z-10 rounded-full w-full md:block hidden max-w-[636px] xl:max-w-[1193px] h-[241px] xl:h-[482px] border-[#FFFFFF61]   border-2 border-solid border-b-0"></div>
      <div className="absolute left-1/2 top-[80px] xl:top-[190px] -translate-x-1/2 -z-10 rounded-full w-full md:block hidden max-w-[578px] xl:max-w-[1066px] h-[195px] xl:h-[368px] border-[#FFFFFF61]   border-2 border-solid border-b-0"></div>
      <div className="flex justify-center items-center flex-col w-[90%] max-w-[1100px]">
        <Fade bottom delay={800}>
          <h2 className="font-monoton text-[#BFFD44] text-center font-normal text-[45px] sm:text-[60px] xl:text-[96px] uppercase">
            Metaverse <br /> Labz
          </h2>
        </Fade>
        <Fade delay={1500}>
          <div className="flex justify-center flex-col mt-8 items-center relative w-full">
            <div className="flex justify-start sm:text-left text-center items-center sm:items-start flex-col  sm:max-w-[300px] static sm:absolute left-0 top-[22%] sm:top-[57%] sm:-translate-y-1/2 gap-5 sm:gap-10">
              <h2 className="text-white leading-[2] font-normal text-lg sm:text-2xl font-monument">
                Building a better reality, <br /> One metaverse at a time
              </h2>
              <img
                src={heroArrow}
                className="object-contain w-[100px] sm:w-[150px]"
                alt=""
              />
            </div>
            <img
              src={heroPerson}
              className="object-contain w-full max-w-[540px]"
              alt=""
            />

            <img
              src={img2}
              className="object-contain top-[61%] -translate-y-1/2 right-0 md:right-[20%] w-[120px] sm:w-[197px] absolute"
              alt=""
            />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Hero;
