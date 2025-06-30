import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ data, ref, isOpen, setIsOpen, setSelected, textStyle }) => {

    useEffect(() => {
    const handleClickOutSide = (event) => {
      if (
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutSide);

    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  },  [ref, setIsOpen]);

  return (
    <>
      {isOpen && (
        <div className={`bg-white text-black border-t border-white z-50 `} ref={ref && ref}>
          <ul
            className={`w-full shadow-2xl z-10 border-t-4 border-[#FF624C] ${textStyle} `}
            onClick={() => setIsOpen(false)}
          >
            {data.map((item) => (
              <li
                className="flex items-center gap-2 p-2 hover:bg-gray-100 hover:text-[#FF624C] cursor-pointer border-l-2 border-r-2 border-b border-b-gray-100 border-transparent hover:shadow-xl uppercase  hover:border-r-[#FF624C] hover:border-l-[#FF624C] "
                key={item}
                onClick={() => {
                  setIsOpen(false);
                  setSelected(item);
                }}
              >
                <Link to={"#"}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Dropdown;
