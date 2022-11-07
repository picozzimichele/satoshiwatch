import React from "react";
import BitfinexSvg from "../public/assets/svg/bitfinexSvg";

export default function LivePriceDisplay({
  priceText,
  svg,
  bgColor,
  exchangeName,
  pair,
}) {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="flex flex-col justify-between w-full border border-gray-200 rounded-lg p-2 aspect-video max-h-[450px] max-w-[197px] bg-[#FBFCFE]">
      <div className="flex items-center w-full gap-2">
        <div
          className={`w-8 h-8 ${bgColor} rounded-full flex items-center justify-center`}
        >
          {svg}
        </div>
        <div>{exchangeName}</div>
      </div>
      <div className="flex items-center w-full gap-2">
        <p className="text-sm">{pair}</p>
        {priceText !== undefined && (
          <p className="format-number font-semibold">
            $ {numberWithCommas(priceText)}
          </p>
        )}
      </div>
    </div>
  );
}
