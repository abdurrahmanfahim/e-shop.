import React from "react";

const CheckBoxChecked = ({height=16, width=16, bg='#FF624C'}) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={width} height={height} rx="2" fill={bg} />
      <g clip-path="url(#clip0_4236_60)">
        <path
          d="M11.8829 5.17963C11.7266 5.02341 11.4734 5.02341 11.3172 5.17963L6.52491 9.97192L4.68285 8.12986C4.52665 7.97364 4.2734 7.97366 4.11716 8.12986C3.96095 8.28606 3.96095 8.53931 4.11716 8.69553L6.24207 10.8204C6.39823 10.9766 6.65166 10.9765 6.80776 10.8204L11.8829 5.74531C12.0391 5.58911 12.0391 5.33584 11.8829 5.17963Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_4236_60">
          <rect width="8" height="8" fill="white" transform="translate(4 4)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CheckBoxChecked;
