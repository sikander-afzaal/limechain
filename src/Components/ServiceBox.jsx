import React from "react";
function ServiceBox({ text }) {
  return (
    <div className="flex justify-between items-start w-[275px] h-[130px] rounded p-5 flex-col bg-main text-white">
      <div className="w-[30%] h-[2px] bg-white"></div>
      <p className="text-lg">{text}</p>
    </div>
  );
}

export default ServiceBox;
