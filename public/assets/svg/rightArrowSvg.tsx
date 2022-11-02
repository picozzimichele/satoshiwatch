import React from "react";

export default function RightArrowSvg({
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
      <g clipPath="url(#clip0_315_19)">
        <path
          d="M21.9114 14.6542L11.3433 0.563709C10.8762 -0.0589172 9.99321 -0.184983 9.37059 0.281893C8.74796 0.748863 8.6218 1.63208 9.08877 2.25461L19.0228 15.4997L9.08877 28.7454C8.6218 29.3679 8.74806 30.2512 9.37059 30.7181C9.62404 30.9082 9.92069 31 10.2149 31C10.6434 31 11.0665 30.8053 11.3433 30.4363L21.9114 16.3451C22.2872 15.8441 22.2872 15.1551 21.9114 14.6542Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_315_19">
          <rect width="31" height="31" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
}
