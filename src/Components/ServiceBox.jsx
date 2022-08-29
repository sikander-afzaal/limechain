import React from "react";
import { faLongArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ServiceBox({ text }) {
  return (
    <div className="cursor-pointer sm:justify-center  hover:scale-105 transition-all w-full h-[120px] p-4 md:p-7 bg-white shadow-service flex justify-start items-center rounded gap-6">
      <h2 className="text-black font-bold text-[25px]">{text}</h2>
      <FontAwesomeIcon icon={faLongArrowRight} className="text-main text-xl" />
    </div>
  );
}

export default ServiceBox;
