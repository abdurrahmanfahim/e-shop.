import React from "react";

const PhoneFooter = ({height=20, width=20, color='#303030'}) => {
  return (
    <svg className='icon'
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
    >
      <g opacity="0.75" clipPath="url(#clip0_21_721)">
        <path
          d="M17.2325 13.9201C16.0243 12.8867 14.7982 12.2608 13.6048 13.2926L12.8922 13.9162C12.3709 14.3689 11.4015 16.484 7.65359 12.1726C3.90646 7.86665 6.13632 7.19621 6.65846 6.74743L7.37495 6.12304C8.56207 5.08889 8.11407 3.78704 7.25788 2.44694L6.7412 1.63524C5.8811 0.29826 4.94451 -0.579789 3.75427 0.452797L3.11115 1.01475C2.5851 1.39797 1.11466 2.64363 0.757975 5.01007C0.328707 7.84948 1.68285 11.101 4.78529 14.6686C7.88383 18.2378 10.9176 20.0306 13.7913 19.9993C16.1796 19.9736 17.622 18.692 18.0731 18.2261L18.7186 17.6633C19.9057 16.6315 19.1681 15.581 17.9591 14.5453L17.2325 13.9201Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_21_721">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PhoneFooter;
