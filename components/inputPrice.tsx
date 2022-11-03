import React, { useState } from "react";
import useClickOutside from "../hooks/useClickOutside";

export default function InputPrice({
  svg,
  inputName,
  currencyName,
  currencySymbol,
  onChange,
  value,
}) {
  const [active, setActive] = useState(false);
  let domNode = useClickOutside(() => {
    setActive(false);
  });
  return (
    <div
      ref={domNode}
      onClick={(event: any) => {
        document.getElementById(inputName).focus();
        setActive(true);
      }}
      className={`flex flex-col w-full sm:w-[420px] bg-[#FAFAFA] border rounded-2xl px-6 py-4 h-[105px] hover:border-black hover:cursor-text justify-between ${
        active
          ? "border-[#27A17B] hover:border-[#27A17B] outline outline-1 outline-[#27A17B]"
          : ""
      }`}
    >
      <div className="flex w-full justify-between text-sm text-gray-400 font-light">
        <p>Currency</p>
        <p>Amount</p>
      </div>
      <div className="flex w-full justify-between text-sm text-gray-400 font-light gap-2">
        <div className="flex items-center gap-2">
          {svg}
          <div className="flex flex-col">
            <p className="text-black text-base">{currencyName}</p>
            <p className="">{currencySymbol}</p>
          </div>
        </div>
        <input
          placeholder="0"
          type="number"
          className="flex w-full text-end text-4xl font-extralight outline-none bg-inherit overflow-hidden text-blue-900"
          id={inputName}
          onChange={onChange}
          value={value}
        ></input>
      </div>
    </div>
  );
}
