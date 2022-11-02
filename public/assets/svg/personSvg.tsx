import React from "react";

export default function PersonSvg({
  height,
  width,
  strokeWidth,
}: {
  height?: number;
  width?: number;
  strokeWidth?: number;
}) {
  return (
    <svg
      width={width || "18"}
      height={height || "19"}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 9.5C11.0711 9.5 12.75 7.82107 12.75 5.75C12.75 3.67893 11.0711 2 9 2C6.92893 2 5.25 3.67893 5.25 5.75C5.25 7.82107 6.92893 9.5 9 9.5Z"
        stroke="currentColor"
        strokeWidth={strokeWidth || "2"}
      />
      <path
        d="M12.75 11H13.014C13.5624 11.0002 14.0917 11.2005 14.5027 11.5635C14.9137 11.9264 15.1781 12.4269 15.246 12.971L15.5393 15.314C15.5657 15.5251 15.5469 15.7393 15.4841 15.9426C15.4213 16.1458 15.3161 16.3334 15.1753 16.4928C15.0345 16.6523 14.8614 16.78 14.6675 16.8674C14.4736 16.9549 14.2633 17 14.0505 17H3.94955C3.73683 17 3.52654 16.9549 3.33263 16.8674C3.13872 16.78 2.96562 16.6523 2.82483 16.4928C2.68403 16.3334 2.57876 16.1458 2.516 15.9426C2.45324 15.7393 2.43442 15.5251 2.4608 15.314L2.7533 12.971C2.82132 12.4267 3.08586 11.9259 3.49717 11.563C3.90848 11.2 4.43823 10.9998 4.9868 11H5.25005"
        stroke="currentColor"
        strokeWidth={strokeWidth || "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
