import footLeft from "../Assets/metaverse/foot-left.png";
import footRight from "../Assets/metaverse/foot-right.png";
import gif from "../Assets/gif.gif";
import { Link } from "react-router-dom";

const FooterMetaverse = () => {
  return (
    <div className="w-full flex justify-center mt-[100px] sm:mt-[200px] pt-[85px] pb-[40px] items-center bg-footerMeta relative isolate">
      <footer className="flex flex-col justify-center w-[90%] max-w-[1100px] relative isolate items-center">
        <img
          src={footLeft}
          className="object-contain sm:block hidden absolute left-0 -top-[40px] -z-10"
          alt=""
        />
        <img
          src={footRight}
          className="object-contain sm:block hidden absolute right-0 -top-[40px] -z-10"
          alt=""
        />
        <Link to={"/"}>
          <div className="flex justify-center items-center gap-2">
            <img src={gif} className="w-[80px] object-contain" alt="" />
          </div>
        </Link>
        <div className="flex justify-center text-center items-center pt-[40px] mt-[40px] sm:mt-[80px] w-full border-t-[1px] border-solid border-[#2A321E]">
          <p className="font-chivo font-normal text-sm sm:text-base text-[#a2a2a2]">
            ©The Labz, est 2021 priority. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FooterMetaverse;
