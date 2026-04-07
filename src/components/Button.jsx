const Button = ({
  text,
  bg = '#023440',
  color = '#fff',
  py = '12px',
  px = '24px',
  pyLg = '16px',
  pxLg = '40px',
  font = 'Montserrat',
  weight = 'bold',
  rounded = '10px',
  border = 'none',
  fontSize = '16px',
  fontSizeLg = '20px',
  leading = '30px',
  onClick,
  className,
  flexGrow = false,
}) => {
  return (
    <button
      className={`text-base lg:text-xl py-3 px-6 lg:py-4 lg:px-10 capitalize cursor-pointer ${flexGrow ? 'flex flex-row items-start justify-center gap-2.5 flex-1' : ''} ${className ?? ''}`}
      style={{
        background: bg,
        color: color,
        fontFamily: font,
        fontWeight: weight,
        borderRadius: rounded,
        border: `${border}`,
        lineHeight: leading,
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
