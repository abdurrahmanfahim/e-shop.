const Button = ({
  text,
  bg = '#023440',
  color = '#fff',
  font = 'Montserrat',
  weight = 'bold',
  rounded = '10px',
  border = 'none',
  onClick,
  className,
  flexGrow = false,
}) => {
  return (
    <button
      className={`text-sm sm:text-base lg:text-xl py-2.5 px-5 sm:py-3 sm:px-6 lg:py-4 lg:px-10 capitalize cursor-pointer transition-opacity hover:opacity-90 ${flexGrow ? 'flex flex-row items-center justify-center gap-2.5 flex-1 w-full' : ''} ${className ?? ''}`}
      style={{
        background: bg,
        color: color,
        fontFamily: font,
        fontWeight: weight,
        borderRadius: rounded,
        border,
        lineHeight: '1.5',
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
