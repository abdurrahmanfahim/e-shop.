import React from "react";

const Button = ({
  text,
  bg = '#FF624C',
  color = '#fff',
  py = '16px',
  px = '40px',
  font = 'Montserrat',
  weight = 'bold',
  rounded = '10px',
}) => {
  return (
    <button
      className={`bg-[${bg}] text-[${color}] py-[${py}] px-[${px}] font-[${font}] font-${weight} rounded-[${rounded}] `}
    >
      {text}
    </button>
  );
};

export default Button;
