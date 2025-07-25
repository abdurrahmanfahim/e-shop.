import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Dropdown = ({
  data,
  ref,
  isOpen,
  setIsOpen,
  setSelected,
  textStyle,
  isLink,
}) => {
  useEffect(() => {
    const handleClickOutSide = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutSide);

    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [ref, setIsOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="bg-white text-black border-t border-white z-50"
      ref={ref}
      style={{ position: "absolute", minWidth: 180 }}
    >
      <ul
        className={`w-full shadow-2xl z-50 border-t-4 border-[#FF624C] ${textStyle}`}
      >
        {data.map((item) => (
          <li
            key={item}
            onClick={() => {
              setIsOpen(false);
              setSelected(item);
            }}
          >
            {isLink ? (
              <Link className="flex items-center gap-2 p-2 hover:bg-gray-100 hover:text-[#FF624C] cursor-pointer border-l-2 border-r-2 border-b border-b-gray-100 border-transparent hover:shadow-xl uppercase hover:border-r-[#FF624C] hover:border-l-[#FF624C]" to={item.toLowerCase().split(" ").join("-")}>{item}</Link>
            ) : (
              <span>{item}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
