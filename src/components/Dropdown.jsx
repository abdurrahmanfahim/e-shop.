import { useEffect } from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ data, ref, isOpen, setIsOpen, setSelected, textStyle }) => {
  useEffect(() => {
    const handleClickOutSide = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutSide);
    return () => document.removeEventListener("mousedown", handleClickOutSide);
  }, [ref, setIsOpen]);

  if (!isOpen) return null;

  return (
    <div className="bg-white text-black z-50 absolute" style={{ minWidth: 180 }} ref={ref}>
      <ul className={`w-full shadow-2xl border-t-4 border-orange ${textStyle ?? ""}`}>
        {data.map((item) => (
          <li key={item}>
            <Link
              to="/all-products"
              className="flex items-center gap-2 p-2 hover:bg-gray-100 hover:text-orange cursor-pointer border-l-2 border-r-2 border-b border-b-gray-100 border-transparent hover:shadow-xl uppercase hover:border-r-orange hover:border-l-orange"
              onClick={() => {
                setIsOpen(false);
                setSelected(item);
              }}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
