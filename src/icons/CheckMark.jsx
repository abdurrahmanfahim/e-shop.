import React from "react";

const CheckMark = ({width=8, height=8, color='white'}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 8 8"
      fill="none"
    >
      <g clip-path="url(#clip0_28_1076)">
        <path
          d="M7.88285 1.17963C7.72665 1.02341 7.4734 1.02341 7.31716 1.17963L2.52491 5.97192L0.682852 4.12986C0.526648 3.97364 0.273398 3.97366 0.117164 4.12986C-0.0390547 4.28606 -0.0390547 4.53931 0.117164 4.69553L2.24207 6.82041C2.39823 6.97661 2.65166 6.9765 2.80776 6.82041L7.88285 1.74531C8.03907 1.58911 8.03905 1.33584 7.88285 1.17963Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_28_1076">
          <rect width={width} height={height} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CheckMark;
