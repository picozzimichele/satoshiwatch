import React from "react";

export default function BinanceSvg({
  width,
  height,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <svg
      width={width || "64"}
      height={height || "63"}
      viewBox="0 0 64 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.2732 26.4739L31.51 14.2422L43.7517 26.4839L50.8678 19.3628L31.51 0L12.1521 19.3578L19.2732 26.4739Z"
        fill="#F3BA2F"
      />
      <path
        d="M0 31.505L7.11611 24.3839L14.2372 31.505L7.11611 38.6211L0 31.505Z"
        fill="#F3BA2F"
      />
      <path
        d="M19.2732 36.531L31.51 48.7678L43.7517 36.5261L50.8727 43.6372L31.5149 63L12.1521 43.6521L19.2732 36.531Z"
        fill="#F3BA2F"
      />
      <path
        d="M48.7678 31.505L55.8839 24.3839L63.005 31.5L55.8839 38.6261L48.7678 31.505Z"
        fill="#F3BA2F"
      />
      <path
        d="M38.7306 31.5L31.51 24.2744L26.1704 29.614L25.5533 30.2261L24.2893 31.49L31.51 38.7057L38.7306 31.505V31.5Z"
        fill="#F3BA2F"
      />
    </svg>
  );
}
