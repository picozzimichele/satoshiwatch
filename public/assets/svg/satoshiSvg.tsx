import React from "react";

export default function SatoshiSvg({
  width,
  height,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <svg
      width={width || "24"}
      height={height || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="black"
      />
      <rect
        x="7.44177"
        y="6"
        width="12"
        height="2"
        transform="rotate(12.7602 7.44177 6)"
        fill="white"
      />
      <rect
        x="13.4493"
        y="3"
        width="2"
        height="2.5"
        transform="rotate(12.7602 13.4493 3)"
        fill="white"
      />
      <rect
        x="9.55212"
        y="19"
        width="2"
        height="2.5"
        transform="rotate(12.7602 9.55212 19)"
        fill="white"
      />
      <rect
        x="6.44177"
        y="10"
        width="12"
        height="2"
        transform="rotate(12.7602 6.44177 10)"
        fill="white"
      />
      <rect
        x="5.44177"
        y="14"
        width="12"
        height="2"
        transform="rotate(12.7602 5.44177 14)"
        fill="white"
      />
    </svg>
  );
}
