import { useEffect, useState } from "react";
import { GrDown } from "react-icons/gr";
import CustomCheckBox from "./CustomCheckBox";

const ProductFilterAcc = ({ data, heading, children, selected = [], onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div className="pb-4 xl:pb-10 cursor-pointer">
      <div
        className="flex justify-between items-start mb-5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h5 className="text-xl font-bold leading-[30px] capitalize">{heading}</h5>
        <GrDown
          className={`text-xs self-center transition-all duration-300 ${isOpen ? "rotate-0" : "rotate-180"}`}
        />
      </div>

      <div className={`overflow-hidden ${isOpen ? "max-h-full" : "h-0"}`}>
        {children ? (
          children
        ) : (
          <ul className="flex flex-col gap-3">
            {data.map((item, index) => (
              <li key={index}>
                <CustomCheckBox
                  text={item.name}
                  itemCount={item.value}
                  checked={selected.includes(item.name)}
                  onChange={() => onSelect && onSelect(item.name)}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProductFilterAcc;
