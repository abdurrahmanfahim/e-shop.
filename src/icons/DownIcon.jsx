import React from "react";

const DownIcon = ({width=16, height=16, color="#303030"}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M8.00003 11C7.87216 11 7.74416 10.9511 7.64653 10.8535L2.64653 5.8535C2.45116 5.65813 2.45116 5.34175 2.64653 5.1465C2.84191 4.95125 3.15828 4.95113 3.35353 5.1465L8.00003 9.793L12.6465 5.1465C12.8419 4.95113 13.1583 4.95113 13.3535 5.1465C13.5488 5.34188 13.5489 5.65825 13.3535 5.8535L8.35353 10.8535C8.25591 10.9511 8.12791 11 8.00003 11Z"
        fill={color}
      />
    </svg>
  );
};

export default DownIcon;
