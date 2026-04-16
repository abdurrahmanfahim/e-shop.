import { useState } from "react";
import { faqs } from "../productDetailsArrays";
import Button from "./Button";
import AccordionItem from "./layouts/AccordionItem";
import Container from "./layouts/Container";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(false);

  return (
    <div className="bg-lightGray ">
      <Container>
        <div className="pt-12 lg:pt-16 pb-12 lg:pb-17 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-0 relative ">
          <div className="w-full lg:w-[926px] flex flex-col gap-4 lg:gap-6 order-2 lg:order-1">
            {faqs.map((item, index) => (
              <AccordionItem
                key={index * index + index}
                question={item.question}
                answer={item.answer}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                isOpen={openIndex === index}
              />
            ))}
          </div>
          <div className="w-full lg:w-[482px] text-black text-center lg:text-left order-1 lg:order-2">
            <h2 className="font-['Poppins'] text-2xl lg:text-4xl font-semibold leading-[30px] lg:leading-[46px] ">
              Frequently Asked Questions
            </h2>
            <p className="font-montserrat font-normal text-lg lg:text-xl leading-[26px] lg:leading-[30px] mt-4 lg:mt-6 mb-8 lg:mb-16 max-w-full lg:max-w-[392px] mx-auto lg:mx-0">
              Questions that get asked the most by our clients. Get any burning
              questions?
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link to="/contact">
                <Button text={"Ask A Question"} />
              </Link>
            </div>
          </div>
          <div className="absolute top-12 lg:top-16 right-0 hidden lg:block">
            <img src="./images/shapes/dots.svg" alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FAQ;
