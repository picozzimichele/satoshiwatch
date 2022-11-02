import React from "react";

export default function DottedLineSvg({
  width,
  height,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <svg
      width={width || 3}
      height={height || 122}
      viewBox="0 0 3 122"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L2 121"
        stroke="#E5E5E5"
        strokeWidth="2"
        strokeDasharray="3 5"
      />
    </svg>
  );
}
