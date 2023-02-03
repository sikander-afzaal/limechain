import MetaTitle from "../../Components/MetaTitle";
import dev1 from "../../Assets/metaverse/dev1.png";
import dev2 from "../../Assets/metaverse/dev2.png";
import dev3 from "../../Assets/metaverse/dev3.png";

const Development = () => {
  return (
    <div className="flex justify-center items-center mt-[100px] sm:mt-[150px]  flex-col w-full relative isolate">
      <div className="bg-[#BFFD44]  -z-10 blur-[230px] -rotate-[90deg] w-full max-w-[520px]  h-[260px] absolute top-[25%] -right-[300px] sm:-right-[240px] "></div>
      <div className="bg-[#B94BE0]  -z-10 blur-[230px] rotate-[180deg] w-full max-w-[520px]  h-[260px] absolute top-[35%] -left-[180px] "></div>
      <div className="bg-[#FD44C9]  -z-10 blur-[230px] rotate-[90deg] w-full max-w-[520px]  h-[260px] absolute top-[58%] -right-[220px] "></div>
      <div className="bg-[#48FD44]  -z-10 blur-[230px] rotate-[180deg] w-full max-w-[520px]  h-[260px] absolute top-[78%] -left-[220px] "></div>
      <div className="flex justify-start gap-[70px] items-center sm:items-start flex-col w-[90%] max-w-[1100px] ">
        <MetaTitle title="Development Services" />
        <div className="flex justify-start items-start flex-col w-full gap-[80px] xl:gap-[200px]">
          <DevBox
            title="Research"
            img={dev1}
            desc="With a strong presence in the metaverse industry. We specialize in
            working with Web3 solutions and continuously strive to improve our
            expertise. As a client, we can provide comprehensive business and
            market research to assist you in entering the next iteration of the
            internet with a well-defined strategic plan."
          />
          <DevBox
            title="Strategy"
            img={dev2}
            order
            desc="We help clients define their role in the metaverse reality and launch a successful business focused on Web3 projects. Our team of experts in metaverse consulting will guide you through every step of the process, from roadmapping to developing a research and development-based strategy. We will help you establish a clear understanding of the metaverse industry, and how your business can thrive in it."
          />
          <DevBox
            title="Tech stack"
            img={dev3}
            desc="At The Labz, our team of technical specialists and developers have extensive experience in metaverse development from the ground up. We are equipped to select the most appropriate, custom-tailored technology stack that aligns with your business needs. Additionally, we offer financial modeling services within the metaverse context to help you plan and optimize your financial strategy."
          />
        </div>
      </div>
    </div>
  );
};

export default Development;

const DevBox = ({ img, title, desc, order }) => {
  return (
    <div
      className={`flex justify-between gap-[40px] items-center w-full ${
        order ? "flex-col xl:flex-row-reverse" : "flex-col xl:flex-row"
      }`}
    >
      <img src={img} alt="" />
      <div className="flex justify-start items-center xl:items-start xl:text-left text-center flex-col max-w-[481px] gap-2 xl:gap-8">
        <h3 className="text-white font-monument text-lg sm:text-2xl font-normal">
          {title}
        </h3>
        <p className="text-lg sm:text-2xl font-normal font-chivo text-[#adadad] leading-[2]">
          {desc}
        </p>
      </div>
    </div>
  );
};
