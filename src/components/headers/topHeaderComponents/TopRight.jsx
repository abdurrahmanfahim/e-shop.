import React, { useContext, useEffect, useRef, useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { GoChevronDown } from "react-icons/go";
import { Link } from "react-router-dom";
import langContext from "../../../contexts/LangContext";

const TopRight = () => {
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
      name: "Arabic",
      code: "arabic",
      flag: "https://flagcdn.com/w40/sa.png",
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

  // eslint-disable-next-line no-unused-vars
  const { lang, setLang } = useContext(langContext);

  const [selectedLang, setSelectedLang] = useState(null);
  const [selectedCurr, setSelectedCurr] = useState(null);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isCurrOpen, setIsCurrOpen] = useState(false);

  const currRef = useRef(null);
  const langRef = useRef(null);

  useEffect(() => {
    const handleClickOutSide = (event) => {
      if (!langRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
      if (!currRef.current.contains(event.target)) {
        setIsCurrOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutSide);

    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, []);

  return (
    <div className="flex items-center gap-6 ">
      <div
        ref={currRef}
        className="flex items-center gap-2 cursor-pointer relative"
        onClick={() => {
          setIsCurrOpen(!isCurrOpen);
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
            <span
              className="hover:text-[#FF624C] transition-all duration-150 ease-in-out"
              onClick={() => setIsCurrOpen(true)}
            >
              {selectedCurr?.name}
            </span>
          </>
        ) : (
          setSelectedCurr(currency?.find((c) => c.code === "usd"))
        )}

        {/* is Curr Open? dropDown */}

        {isCurrOpen && (
          <ul
            className="absolute w-full bg-white shadow-2xl z-10 top-full leading-5 border-t-4 border-[#FF624C] "
            onClick={() => setIsCurrOpen(false)}
          >
            {currency?.map((curr) => (
              <li
                key={curr?.code}
                className="flex items-center gap-2 p-2 hover:bg-gray-100 hover:text-[#FF624C] cursor-pointer border-l-2 border-r-2 border-b border-b-gray-100 border-transparent hover:shadow-xl hover:border-r-[#FF624C] hover:border-l-[#FF624C] "
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

        <GoChevronDown className="text-base hover:text-[#FF624C] transition-all duration-150 ease-in-out" />
      </div>
      <span className="w-[1px] h-8 bg-[#CBCBCB] "></span>
      <div
        ref={langRef}
        className="w-32 flex items-center justify-between gap-2 cursor-pointer relative  "
        onClick={() => {
          setIsLangOpen(!isLangOpen);
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
              onClick={() => setIsLangOpen(true)}
            />
            <span
              className="hover:text-[#FF624C] transition-all duration-150 ease-in-out"
              onClick={() => setIsLangOpen(true)}
            >
              {selectedLang?.name}
            </span>
          </>
        ) : (
          setSelectedLang(languages.find((c) => c.code === "english"))
        )}

        {/* is Open? dropDown */}

        {isLangOpen && (
          <ul
            className="absolute w-full bg-white shadow-2xl z-10 top-full leading-5 border-t-4 border-[#FF624C] "
            onClick={() => setIsLangOpen(false)}
          >
            {languages.map((lang) => (
              <li
                key={lang?.code}
                className="flex items-center gap-2 p-2 hover:bg-gray-100 hover:text-[#FF624C] cursor-pointer border-l-2 border-r-2 border-b border-b-gray-100 border-transparent hover:shadow-xl hover:border-r-[#FF624C] hover:border-l-[#FF624C] "
                onClick={() => {
                  setSelectedLang(lang);
                  setIsLangOpen(false);
                  setLang(lang.code);
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

        <GoChevronDown className="text-base hover:text-[#FF624C] transition-all duration-150 ease-in-out" />
      </div>
      <span className="w-[1px] h-8 bg-[#CBCBCB] "></span>
      <div className="flex items-center gap-1.5 text-base">
        <Link
          className="size-8 rounded-full flex items-center justify-center bg-transparent hover:bg-gray-100 hover:text-[#FF624C] transition-all duration-150 ease-in-out  "
          to={"#"}
          target="_blank"
        >
          <FaFacebookF />
        </Link>
        <Link
          className="size-8 rounded-full flex items-center justify-center bg-transparent hover:bg-gray-100 hover:text-[#FF624C] transition-all duration-150 ease-in-out]   "
          to={"#"}
          target="_blank"
        >
          <FaTwitter />
        </Link>
        <Link
          className="size-8 rounded-full flex items-center justify-center bg-transparent hover:bg-gray-100 hover:text-[#FF624C] transition-all duration-150 ease-in-out  "
          to={"#"}
          target="_blank"
        >
          <FaInstagram />
        </Link>
      </div>
    </div>
  );
};

export default TopRight;
