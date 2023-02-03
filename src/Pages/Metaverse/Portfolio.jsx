import img from "../../Assets/metaverse/portfolio.png";

const Portfolio = () => {
  return (
    <div className="flex justify-center items-center mt-[100px] xl:mt-[200px]  flex-col w-full relative isolate">
      <div className="bg-[#CB43FB]  -z-10 blur-[230px] -rotate-[90deg] w-full max-w-[520px]  h-[260px] absolute top-[25%] -right-[240px] "></div>
      <div className="flex justify-center items-center flex-col w-[90%] gap-8 xl:gap-[100px] max-w-[1100px]">
        <h2 className="font-monument text-white text-center sm:text-left text-[35px] sm:text-[40px] uppercase">
          Portfolio
        </h2>
        <img src={img} className="w-full object-contain" alt="" />
      </div>
    </div>
  );
};

export default Portfolio;
