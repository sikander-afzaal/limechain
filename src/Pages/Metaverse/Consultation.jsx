import MetaTitle from "../../Components/MetaTitle";
import img1 from "../../Assets/metaverse/service1.png";
import img2 from "../../Assets/metaverse/service2.png";
import img3 from "../../Assets/metaverse/service3.png";
import img4 from "../../Assets/metaverse/service4.png";

const Consultation = () => {
  return (
    <div className="w-full flex mt-[100px] sm:mt-[150px] justify-center items-center flex-col relative isolate">
      <div className="bg-[#B94BE0D6] -z-10 blur-[230px] rotate-[180px] w-full max-w-[520px]  h-[260px] absolute -top-[2%] right-[0]"></div>
      <div className="bg-[#B94BE0] -z-10 blur-[230px] rotate-[180px] w-full max-w-[520px]  h-[260px] absolute top-[88%] -left-[200px]"></div>
      <div className="w-[90%] flex justify-start items-center sm:items-start flex-col gap-[70px] max-w-[1100px]">
        <MetaTitle title="Consultation Services" />
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 w-full gap-[50px]">
          <ServiceBox
            img={img1}
            title="Software Engineering"
            desc="Research and develop new technologies and techniques for creating
            immersive virtual worlds. This could include things like 3D
            graphics, physics simulations, networking, and user input."
          />
          <ServiceBox
            img={img2}
            title="R&D Development"
            desc="Research and develop new technologies and techniques for creating immersive virtual worlds, as well as exploring new use cases and applications for virtual worlds."
          />
          <ServiceBox
            img={img3}
            title="Startup businesses"
            desc="Provide development services to startups looking to build their own virtual worlds or experiences. This could include everything from concept development to full-scale implementation."
          />
          <ServiceBox
            img={img4}
            title="Metaverse & vr Events"
            desc="We create fully-realized virtual worlds, including concert and entertainment environments. This would require a high level of technical expertise and coordination to bring to life, and would likely include....."
          />
        </div>
      </div>
    </div>
  );
};

export default Consultation;

const ServiceBox = ({ img, title, desc }) => {
  return (
    <div className="relative isolate w-full rounded-[20px] overflow-hidden">
      <img src={img} className="w-full object-contain" alt="" />
      <div className="absolute sm:w-auto w-full z-10 left-0 p-4 rounded-tr-[20px] backdrop-blur-[25px] sm:max-w-[285px] bg-[#0000002E] bottom-0 flex justify-start items-start flex-col gap-2">
        <h3 className="text-white font-monument font-normal text-sm underline">
          {title}
        </h3>
        <h3 className="text-white leading-[1.85] font-normal font-chivo text-xs">
          {desc}
        </h3>
      </div>
    </div>
  );
};
