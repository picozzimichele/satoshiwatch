import React from "react";

export default function LeftArrowSvg({
  height,
  width,
}: {
  height?: number;
  width?: number;
}) {
  return (
    <svg
      width={width || "14"}
      height={height || "14"}
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_315_2)">
        <path
          d="M21.9112 28.7453L11.9772 15.5003L21.9112 2.25459C22.3782 1.63197 22.2519 0.748754 21.6294 0.281878C21.0069 -0.185092 20.1236 -0.0587444 19.6567 0.563694L9.08858 14.6549C8.71282 15.1559 8.71282 15.8448 9.08858 16.3458L19.6567 30.4362C19.9335 30.8054 20.3566 31 20.7851 31C21.0792 31 21.376 30.9081 21.6294 30.7181C22.252 30.2511 22.3782 29.3679 21.9112 28.7453Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_315_2">
          <rect width="31" height="31" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
