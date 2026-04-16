import React from "react";

const MinusIcon = ({width=24, height=24, color='#303030'}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M23.13 12.87H0.87C0.39 12.87 0 12.48 0 12C0 11.52 0.39 11.13 0.87 11.13H23.13C23.61 11.13 24 11.52 24 12C24 12.48 23.61 12.87 23.13 12.87Z"
        fill={color}
      />
    </svg>
  );
};

export default MinusIcon;
