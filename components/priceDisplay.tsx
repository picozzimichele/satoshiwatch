import React from "react";

export default function PriceDisplay({ svg, coinName, priceText }) {
  return (
    <div className="flex gap-2 items-center">
      {svg}
      <p className="text-3xl font-bold">{coinName}</p>
      {priceText !== undefined && (
        <p className="text-3xl font-bold">$ {priceText}</p>
      )}
    </div>
  );
}
