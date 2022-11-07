import React from "react";

export default function PriceDisplay({
  svg,
  coinName,
  nodes,
}: {
  svg: any;
  coinName: string;
  nodes?: any;
}) {
  return (
    <div className="flex gap-2 items-center">
      {svg}
      <p className="flex text-3xl font-light">{coinName}</p>
      {nodes && <p className="flex font-thin">{nodes} active nodes</p>}
    </div>
  );
}
