import React from "react";

function ChooseBox({ bg, text, icon, head, desc }) {
  return (
    <div
      className={`rounded-md p-5 w-full ${bg} flex justify-center items-start gap-5`}
    >
      <div className="flex flex-col gap-4 items-start justify-start">
        <h2 className={`text-${text} text-[22px] font-bold`}>{head}</h2>
        <p className={`text-[15px] text-${text}`}>{desc}</p>
      </div>
      <img src={icon} alt="" />
    </div>
  );
}

export default ChooseBox;
