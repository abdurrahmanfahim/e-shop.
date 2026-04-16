import { VscChevronRight } from "react-icons/vsc";

const AccordionItem = ({ question, answer, index, onToggle, isOpen }) => {
  return (
    <button
      key={index}
      className="w-full leading-[30px] py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-12 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-white group"
      onClick={onToggle}
    >
      <div className="flex gap-3 sm:gap-4 lg:gap-8 items-center">
        <span
          className={`size-5 sm:size-6 lg:size-8 shrink-0 flex justify-center items-center border border-green rounded-full transition-transform duration-200 ${
            isOpen ? "bg-transparent text-green" : "bg-green text-white"
          }`}
        >
          <VscChevronRight
            className={`text-xs lg:text-sm self-center transition-all duration-300 ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
          />
        </span>
        <h3 className="font-['Poppins'] text-base sm:text-lg lg:text-2xl font-semibold text-left">
          {question}
        </h3>
      </div>
      <div className={`${isOpen ? "mt-2 sm:mt-3 lg:mt-4" : "mt-0"}`}>
        <p
          className={`font-montserrat font-normal text-sm sm:text-base lg:text-xl pl-8 sm:pl-10 lg:pl-16 text-start leading-6 lg:leading-[30px] ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {answer}
        </p>
      </div>
    </button>
  );
};

export default AccordionItem;
