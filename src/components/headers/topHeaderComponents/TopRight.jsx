import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { GoChevronDown } from "react-icons/go";
import { Link } from "react-router-dom";

const TopRight = () => {
  const [selectedLang, setSelectedLang] = useState(null);
  const [selectedCurr, setSelectedCurr] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isCurrOpen, setIsCurrOpen] = useState(false);
  const languages = [
    {
      name: "English",
      code: "english",
      flag: "https://flagcdn.com/w40/gb.png",
    },
    {
      name: "Bengali",
      code: "bengali",
      flag: "https://flagcdn.com/w40/bd.png",
    },
    {
      name: "Spanish",
      code: "spanish",
      flag: "https://flagcdn.com/w40/es.png",
    },
    { name: "French", code: "french", flag: "https://flagcdn.com/w40/fr.png" },
    { name: "German", code: "german", flag: "https://flagcdn.com/w40/de.png" },
    {
      name: "Chinese",
      code: "chinese",
      flag: "https://flagcdn.com/w40/cn.png",
    },
    {
      name: "Japanese",
      code: "japanese",
      flag: "https://flagcdn.com/w40/jp.png",
    },
  ];

  const currency = [
    { name: "USD", code: "usd", symbol: "$" },
    { name: "BDT", code: "bdt", symbol: "৳" },
    { name: "EUR", code: "eur", symbol: "€" },
    { name: "GBP", code: "gbp", symbol: "£" },
    { name: "JPY", code: "jpy", symbol: "¥" },
    { name: "INR", code: "inr", symbol: "₹" },
    { name: "AUD", code: "aud", symbol: "A$" },
    { name: "CAD", code: "cad", symbol: "C$" },
  ];

  console.log(selectedCurr);
  return (
    <div className="flex items-center gap-6 ">
      <div
        className="flex items-center gap-2 cursor-pointer relative"
        onClick={() => {
          setIsCurrOpen(!isCurrOpen);
          setIsOpen(false);
        }}
      >
        <select
          className="hidden"
          name={"currency"}
          value={selectedCurr?.name}
          onChange={(e) => {
            const curr = currency.find((c) => c.code === e.target.value);
            setSelectedCurr(curr);
          }}
        >
          {currency.map((curr) => (
            <option key={curr?.code} value={curr?.code}>
              {curr?.name}
            </option>
          ))}
        </select>

        {/* custom dropdown for Currency */}

        {selectedCurr ? (
          <>
            <span className="hover:text-[#FF624C] transition-all duration-150 ease-in-out">
              {selectedCurr?.name}
            </span>
          </>
        ) : (
          setSelectedCurr(currency?.find((c) => c.code === "usd"))
        )}

        {/* is Curr Open? dropDown */}

        {isCurrOpen && (
          <ul className="absolute w-full bg-white shadow-lg z-10 top-[170%]">
            {currency?.map((curr) => (
              <li
                key={curr?.code}
                className="flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer "
                onClick={() => {
                  setSelectedCurr(curr);
                  setIsCurrOpen(false);
                }}
              >
                <span>{curr?.name}</span>
              </li>
            ))}
          </ul>
        )}

        <GoChevronDown className="text-base" />

      </div>
      <span className="w-[1px] h-8 bg-[#CBCBCB] "></span>
      <div
        className="flex items-center gap-2 cursor-pointer relative "
        onClick={() => {
          setIsOpen(!isOpen);
          setIsCurrOpen(false);
        }}
      >
        <select
          className="hidden"
          name={"language"}
          value={selectedLang?.name}
          onChange={(e) => {
            const lang = languages.find((c) => c.code === e.target.value);
            setSelectedLang(lang);
          }}
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>

        {/* custom dropdown for lang */}

        {selectedLang ? (
          <>
            <img
              className="w-[27px] h-[16px] "
              src={selectedLang?.flag}
              alt={selectedLang?.name}
            />
            <span className="hover:text-[#FF624C] transition-all duration-150 ease-in-out">
              {selectedLang?.name}
            </span>
          </>
        ) : (
          setSelectedLang(languages.find((c) => c.code === "english"))
        )}

        {/* is Open? dropDown */}

        {isOpen && (
          <ul className="absolute w-full bg-white shadow-lg z-10 top-[170%]">
            {languages.map((lang) => (
              <li
                key={lang?.code}
                className="flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer "
                onClick={() => {
                  setSelectedLang(lang);
                  setIsOpen(false);
                }}
              >
                <img
                  className="w-[27px] h-[16px] "
                  src={lang?.flag}
                  alt={lang?.name}
                />
                <span>{lang?.name}</span>
              </li>
            ))}
          </ul>
        )}

        <GoChevronDown className="text-base" />

      </div>
      <span className="w-[1px] h-8 bg-[#CBCBCB] "></span>
      <div className="flex items-center gap-6 text-base">
        <Link to={"#"} target="_blank">
          <FaFacebookF className="hover:text-[#FF624C] transition-all duration-150 ease-in-out" />
        </Link>
        <Link to={"#"} target="_blank">
          <FaTwitter className="hover:text-[#FF624C] transition-all duration-150 ease-in-out" />
        </Link>
        <Link to={"#"} target="_blank">
          <FaInstagram className="hover:text-[#FF624C] transition-all duration-150 ease-in-out" />
        </Link>
      </div>
    </div>
  );
};

export default TopRight;
