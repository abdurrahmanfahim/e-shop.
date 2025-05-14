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
      style={{
        background: bg,
        color: color,
        padding: `${py} ${px}`,
        fontFamily: font,
        fontWeight: weight,
        borderRadius: rounded,
        border: 'none',
        cursor: 'pointer',
      }}
    >
      {text}
    </button>
  );
};

export default Button;
