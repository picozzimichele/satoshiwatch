import React from "react";

export default function bitfinexSvg({
  width,
  height,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <svg
      width={width || "52"}
      height={height || "51"}
      viewBox="0 0 52 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.95199 43.7767C4.32379 46.2921 17.3662 58.3443 37.836 44.3561C52.6412 32.8288 52.2698 7.83825 50.8487 0.287112C50.3536 1.38636 33.1766 39.0381 1.95199 43.7767V43.7767ZM50.8487 0.28216C50.6655 0.207887 31.6218 -2.38674 12.7959 9.73966C1.10527 17.266 -0.444575 28.2882 0.090195 35.6512C27.4575 32.5713 50.2248 1.14869 50.8487 0.28216V0.28216Z"
        fill="#97C554"
      />
      <path
        d="M50.8487 0.28216C50.6655 0.207887 31.6218 -2.38674 12.7959 9.73966C1.10527 17.266 -0.444575 28.2882 0.090195 35.6512C27.4575 32.5713 50.2248 1.14869 50.8487 0.28216V0.28216Z"
        fill="#709B30"
      />
    </svg>
  );
}