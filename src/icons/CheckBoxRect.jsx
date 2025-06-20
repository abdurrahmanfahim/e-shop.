import React from "react";

const CheckBoxRect = ({height=15, width=15, color='#303030'}) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width={width}
        height={height}
        rx="1.5"
        fill="transparent"
        stroke={color}
      />
    </svg>
  );
};

export default CheckBoxRect;
