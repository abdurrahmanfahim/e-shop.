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
  border = 'none',
  fontSize = '20px',
  leading = '30px',
  onClick,
  className,
  flexGrow = false,

}) => {
  return (
    <button
      className={className}
      style={{
        background: bg,
        color: color,
        padding: `${py} ${px}`,
        fontFamily: font,
        fontWeight: weight,
        borderRadius: rounded,
        border: `${border}`,
        cursor: 'pointer', 
        textTransform: 'capitalize',
        fontSize: `${fontSize}`,
        lineHeight: `${leading}`,
        ...(flexGrow && {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: '10px',
          flexGrow: 1
        })
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
