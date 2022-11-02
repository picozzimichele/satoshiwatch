import React, { useState } from "react";
import useClickOutside from "../hooks/useClickOutside";

export default function InputPrice({ svg }) {
  const [active, setActive] = useState(false);
  let domNode = useClickOutside(() => {
    setActive(false);
  });
  return (
    <div
      ref={domNode}
      onClick={(event: any) => {
        document.getElementById("myInput").focus();
        setActive(true);
      }}
      className={`flex flex-col w-[420px] bg-[#FAFAFA] border rounded-2xl px-6 py-4 h-[105px] hover:border-black hover:cursor-text justify-between ${
        active ? "border-[#27A17B] hover:border-[#27A17B]" : ""
      }`}
    >
      <div className="flex w-full justify-between text-sm text-gray-400 font-light">
        <p>Currency</p>
        <p>Amount</p>
      </div>
      <div className="flex w-full justify-between text-sm text-gray-400 font-light">
        <div className="flex items-center gap-2">
          {svg}
          <div className="flex flex-col">
            <p className="text-black text-base">Thether</p>
            <p className="">USDT</p>
          </div>
        </div>
        <input
          placeholder="0"
          dir="rtl"
          className="text-4xl font-extralight outline-none bg-inherit overflow-hidden"
          id="myInput"
        ></input>
      </div>
    </div>
  );
}
