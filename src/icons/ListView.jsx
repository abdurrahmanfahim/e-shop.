import React from "react";

const ListView = ({ width = 24, height = 24, color = "#303030" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g opacity={color === '#303030' ? "0.25" : "1" } clip-path="url(#clip0_28_2197)">
        <path
          d="M22.5 21H1.50001C0.671548 21 0 20.3284 0 19.5C0 18.6716 0.671548 18 1.50001 18H22.5C23.3285 18 24.0001 18.6716 24.0001 19.5C24 20.3284 23.3285 21 22.5 21Z"
          fill={color}
        />
        <path
          d="M22.5 13.5H1.50001C0.671548 13.5 0 12.8284 0 12C0 11.1716 0.671548 10.5 1.50001 10.5H22.5C23.3285 10.5 24.0001 11.1716 24.0001 12C24.0001 12.8285 23.3285 13.5 22.5 13.5Z"
          fill={color}
        />
        <path
          d="M22.5 5.99999H1.50001C0.671548 5.99999 0 5.32844 0 4.49998C0 3.67152 0.671548 2.99997 1.50001 2.99997H22.5C23.3285 2.99997 24.0001 3.67152 24.0001 4.49998C24.0001 5.32844 23.3285 5.99999 22.5 5.99999Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_28_2197">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ListView;
