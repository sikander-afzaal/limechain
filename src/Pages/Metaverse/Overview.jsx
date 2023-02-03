import MetaTitle from "../../Components/MetaTitle";
import overview1 from "../../Assets/metaverse/overview.png";
import overview2 from "../../Assets/metaverse/overview2.png";
import overview3 from "../../Assets/metaverse/overview3.png";

const Overview = () => {
  return (
    <div className="w-full mt-[160px]  flex justify-center items-center flex-col relative isolate">
      <div className="bg-[#6D2DE6] -z-10 blur-[230px] rotate-[180px] w-full max-w-[520px]  h-[260px] absolute top-[30%] lg:top-[42%] -left-[200px]"></div>
      <div className="bg-[#BFFD44]  -z-10 blur-[230px] -rotate-[90] w-full max-w-[520px]  h-[260px] absolute top-[70%] lg:top-[50%] -right-[200px] "></div>
      <div className="flex justify-start gap-[90px] sm:gap-[120px] lg:gap-[160px] items-start flex-col  w-[90%] max-w-[1100px]">
        <div className="w-full justify-between lg:flex-row flex-col items-center lg:items-start flex gap-10">
          <div className="flex justify-start lg:text-left text-center max-w-[583px] gap-5 items-center lg:items-start flex-col">
            <MetaTitle title="Overview" />
            <p className="text-metaPara mt-8 font-chivo font-normal text-lg sm:text-2xl leading-[2]">
              At The Labz, we are pioneers in the field of metaverse, virtual
              reality, and artificial intelligence. 
            </p>
            <p className="text-metaPara font-chivo font-normal text-lg sm:text-2xl leading-[2]">
              Our team of experts have years of experience creating some of the
              most immersive and captivating virtual environments in the world.
            </p>
          </div>
          <img
            src={overview1}
            className="object-contain animate-bounce sm:max-w-[370px] w-full max-w-[330px]"
            alt=""
          />
        </div>
        <div className="w-full justify-between  lg:flex-row-reverse flex-col items-center flex gap-10">
          <div className="flex justify-start lg:text-left text-center max-w-[583px] gap-5 items-center lg:items-start flex-col">
            <p className="text-metaPara font-chivo font-normal text-lg sm:text-2xl leading-[2]">
              We specialize in the design, development, and production of
              large-scale virtual reality shows and experiences. From concept to
              launc., We work closely with our clients to create customized,
              cutting-edge virtual worlds that push the boundaries of what is
              possible.
            </p>
          </div>
          <img
            src={overview2}
            className="object-contain animate-bounce sm:max-w-[370px] w-full max-w-[330px]"
            alt=""
          />
        </div>
        <div className="w-full justify-between lg:flex-row flex-col items-center flex gap-10">
          <div className="flex lg:text-left text-center items-center justify-start max-w-[583px] gap-5 lg:items-start flex-col">
            <p className="text-metaPara  font-chivo font-normal text-lg sm:text-2xl leading-[2]">
              At The Labz, we are pioneers in the field of metaverse, virtual
              reality, and artificial intelligence. 
            </p>
            <p className="text-metaPara  font-chivo font-normal text-lg sm:text-2xl leading-[2]">
              Our team of experts have years of experience creating some of the
              most immersive and captivating virtual environments in the world.
            </p>
          </div>
          <img
            src={overview3}
            className="object-contain animate-bounce sm:max-w-[370px] w-full max-w-[330px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
