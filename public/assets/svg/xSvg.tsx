import React from "react";

export default function XSvg({
  height,
  width,
}: {
  height?: number;
  width?: number;
}) {
  return (
    <svg
      width={width || "11"}
      height={height || "11"}
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_203_2)">
        <path
          d="M7.7296 1.57596L5.30564 4.00016L7.7296 6.42424C8.09015 6.78493 8.09015 7.3692 7.7296 7.72989C7.54945 7.91004 7.31326 8.00018 7.07719 8.00018C6.84072 8.00018 6.60451 7.91017 6.4245 7.72989L4.00002 5.30553L1.57572 7.72987C1.39559 7.91001 1.15938 8.00016 0.9231 8.00016C0.686889 8.00016 0.450839 7.91015 0.270551 7.72987C-0.0900001 7.36934 -0.0900001 6.78505 0.270551 6.42422L2.69444 4.00013L0.270414 1.57596C-0.0901379 1.21541 -0.0901379 0.631001 0.270414 0.27045C0.630896 -0.0898246 1.21496 -0.0898246 1.57558 0.27045L3.99999 2.69465L6.42423 0.27045C6.78492 -0.0898246 7.36905 -0.0898246 7.72946 0.27045C8.09015 0.631001 8.09015 1.21541 7.7296 1.57596Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_203_2">
          <rect width="8" height="8" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
}
