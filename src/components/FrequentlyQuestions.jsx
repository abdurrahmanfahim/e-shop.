import React, { useState } from "react";
import Container from "./layouts/Container";
import { VscChevronRight } from "react-icons/vsc";

const FrequentlyQuestions = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  return (
    <div className="bg-[#F4F4F4] ">
      <Container>
        <div className="pt-16 pb-17 flex justify-center items-end ">
          <div className="w-[926px]  ">
            <button
              className="w-full leading-[30px] py-8 px-12 rounded-3xl bg-white group "
              onClick={() => setIsAccordionOpen(!isAccordionOpen)}
            >
              <div className=" flex gap-8 items-center ">
                <span className="size-8 bg-[#FF624C] flex justify-center items-center text-white border border-[#FF624C] rounded-full group-focus:bg-white group-focus:text-[#FF624C] transition-all duration-300 ">
                  <VscChevronRight className="text-sm self-center group-focus:rotate-90 transition-all duration-300 " />
                </span>
                <h3 className="font-['Poppins'] text-2xl font-semibold">
                  What payment methods do you accept?
                </h3>
              </div>
              <div className="transition-all duration-800 ease-in-out" style={{ scale: `${isAccordionOpen ? 1 : 0}` , display:`${isAccordionOpen ? 'block' : 'none'}` }}>
                <p className="font-['Montserrat'] font-normal text-xl pl-16 text-start mt-4  ">
                  Absolutely! Once your order has been shipped, we'll send you a
                  tracking number and a link to our carrier's website where you
                  can track your package in real-time. You can also check the
                  status of your order by logging into your account and viewing
                  your order history.
                </p>
              </div>
            </button>
          </div>
          <div className="w-[482px]  ">2</div>
        </div>
      </Container>
    </div>
  );
};

export default FrequentlyQuestions;
