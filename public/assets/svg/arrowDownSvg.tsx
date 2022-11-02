import React from "react";

export default function ArrowDownSvg({
  height,
  width,
}: {
  height?: number;
  width?: number;
}) {
  return (
    <svg
      width={width || "10"}
      height={height || "10"}
      viewBox="0 0 6 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.80786 4.5L0.209785 0.75L5.40594 0.75L2.80786 4.5Z"
        fill="#C4C4C4"
      />
    </svg>
  );
}
