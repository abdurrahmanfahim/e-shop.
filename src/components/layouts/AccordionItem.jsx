import React from "react";
import { VscChevronRight } from "react-icons/vsc";

const AccordionItem = ({ question, answer, index, onToggle, isOpen }) => {
  return (
    <button
      key={index}
      className="w-full leading-[30px] py-8 px-12 rounded-3xl bg-white group  "
      onClick={onToggle}
    >
      <div className=" flex gap-8 items-center ">
        <span
          className={`size-8 flex justify-center items-center border border-[#FF624C] rounded-full transition-transform duration-200  ${
            isOpen
              ? "bg-transparent text-[#FF624C] "
              : "bg-[#FF624C] text-white "
          } `}
        >
          <VscChevronRight
            className={`text-sm self-center  transition-all duration-300 ${
              isOpen ? "rotate-90" : "rotate-0"
            } `}
          />
        </span>
        <h3 className="font-['Poppins'] text-2xl font-semibold">{question}</h3>
      </div>
      <div
        className={`transition-all duration-500 ${
          isOpen ? "opacity-100 h-full mt-4" : "opacity-0 h-0 mt-0"
        }  `}
      >
        <p
          className={`font-['Montserrat'] font-normal text-xl pl-16 text-start  transition-all duration-500 leading-[30px] ${
            isOpen ? "h-full block" : "h-0 hidden"
          } `}
        >
          {answer}
        </p>
      </div>
    </button>
  );
};

export default AccordionItem;
