import React from "react";

export default function PriceDisplay({ svg, coinName }) {
  return (
    <div className="flex gap-2 items-center">
      {svg}
      <p className="text-3xl font-light">{coinName}</p>
    </div>
  );
}
