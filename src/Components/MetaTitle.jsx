import ring from "../Assets/metaverse/ring.png";

const MetaTitle = ({ title }) => {
  return (
    <div className="relative isolate max-w-[370px]">
      <img
        src={ring}
        className="object-contain absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        alt=""
      />
      <h2 className="font-monument text-white text-center sm:text-left text-[35px] sm:text-[40px]">
        {title}
      </h2>
    </div>
  );
};

export default MetaTitle;
