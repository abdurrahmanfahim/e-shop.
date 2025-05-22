import React, { useState } from "react";
import Container from "./layouts/Container";
import { VscChevronRight } from "react-icons/vsc";
import Button from "../components/Button";

const FrequentlyQuestions = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit and debit cards, as well as PayPal, Apple Pay, and Google Pay for a seamless checkout experience.",
    },
    {
      question: "How long does the product shipping take?",
      answer:
        "Shipping usually takes 3–7 business days depending on your location. Orders are processed within 24 hours on business days.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to most countries. Shipping times and costs may vary based on your location.",
    },
    {
      question: "Can I track my order?",
      answer:
        "Absolutely! Once your order has been shipped, we'll send you a tracking number and a link to our carrier's website where you can track your package in real-time. You can also check the status of your order by logging into your account and viewing your order history.",
    },
  ];

  return (
    <div className="bg-[#F4F4F4] ">
      <Container>
        <div className="pt-16 pb-17 flex justify-between items-end relative ">
          <div className="w-[926px] flex flex-col gap-6   ">
            {faqs.map((item) => (
              <button
                className="w-full leading-[30px] py-8 px-12 rounded-3xl bg-white group  "
                onClick={() => setIsAccordionOpen(!isAccordionOpen)}
              >
                <div className=" flex gap-8 items-center ">
                  <span
                    className="size-8 bg-[#FF624C] flex justify-center items-center text-white border border-[#FF624C] rounded-full group-focus:bg-white transition-all duration-300 "
                    style={{
                      background: isAccordionOpen ? "transparent" : "#FF624C",
                      color: isAccordionOpen ? "#FF624C" : "white",
                    }}
                  >
                    <VscChevronRight
                      className="text-sm self-center  transition-all duration-300 "
                      style={{
                        rotate: isAccordionOpen ? "90deg" : "0deg",
                      }}
                    />
                  </span>
                  <h3 className="font-['Poppins'] text-2xl font-semibold">
                    {item.question}
                  </h3>
                </div>
                <div
                  className="transition-all duration-500  "
                  style={{
                    opacity: isAccordionOpen ? 1 : 0,
                    height: isAccordionOpen ? "100%" : "0%",
                    marginTop: isAccordionOpen ? "16px" : "0px",
                    // display: isAccordionOpen ? 'block' : 'none',
                  }}
                >
                  <p
                    className="font-['Montserrat'] font-normal text-xl pl-16 text-start  transition-all duration-500 leading-[30px] "
                    style={{
                      // opacity: isAccordionOpen ? 1 : 0,
                      height: isAccordionOpen ? "100%" : "0%",
                      // paddingLeft: isAccordionOpen ? '64px' : '0px',
                      // marginTop: isAccordionOpen ? '16px' : '0px',
                      display: isAccordionOpen ? "block" : "none",
                    }}
                  >
                    {item.answer}
                  </p>
                </div>
              </button>
            ))}
          </div>
          <div className="w-[482px] text-[#303030] ">
            <h2 className="font-['Poppins'] text-4xl font-semibold leading-[46px] ">
              Frequently Asked Questions
            </h2>
            <p className="font-['Montserrat'] font-normal text-xl leading-[30px] mt-6 mb-16 max-w-[392px] ">
              Questions that get asked the most by our clients. Get any burning
              questions?
            </p>
            <Button text={"Ask A Question"} />
          </div>
          <div className=" absolute top-16 right-0 ">
            <img src="./images/shapes/dots.svg" alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FrequentlyQuestions;
