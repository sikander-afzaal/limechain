import React from "react";
function ServiceBox({ text }) {
  return (
    <div className="flex w-full border-t-[8px] border-main border-solid justify-between items-start md:w-[275px] h-[100px] rounded-md p-5 flex-col bg-white text-black">
      <p className="text-lg">{text}</p>
    </div>
  );
}

export default ServiceBox;
