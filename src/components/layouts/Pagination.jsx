import React from "react";
import PrevIcon from "../../icons/PrevIcon";
import NextIcons from "../../icons/NextIcons";

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const maxPagesToShow = 5;
  const pages = [];

  if (totalPages <= maxPagesToShow) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    const startPages = [1, 2, 3];
    const endPages = [totalPages - 1, totalPages];
    const middlePages = [currentPage - 1, currentPage, currentPage + 1].filter(
      (p) => p > 3 && p < totalPages - 1
    );

    const uniquePages = Array.from(new Set([...startPages, ...middlePages, ...endPages])).sort((a, b) => a - b);

    for (let i = 0; i < uniquePages.length; i++) {
      pages.push(uniquePages[i]);
      if (i < uniquePages.length - 1 && uniquePages[i + 1] - uniquePages[i] > 1) {
        pages.push("...");
      }
    }
  }

  return (
    <div className="w-[522px] mx-auto flex gap-[18px] items-center justify-center p-4 font-['Poppins'] font-semibold text-xl leading-[30px] text-center text-[#303030] ">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="size-8 flex items-center justify-center text-black disabled:opacity-50 hover:bg-gray-100 rounded   "
      >
        <PrevIcon />
      </button>

      {pages.map((number, index) => (
        <div
          className="w-full flex justify-center items-center  "
          key={index * index * 7}
        >
          {number === "..." ? (
            <span className="px-[10px] select-none">...</span>
          ) : (
            <button
              onClick={() => onPageChange(number)}
              className={`rounded-[5px] py-[9px] px-[18px] cursor-pointer ${
                number === currentPage
                  ? "bg-[#FF624C] text-white hover:bg-[#FF624C]"
                  : "hover:bg-gray-100"
              }  `}
              disabled={number === currentPage}
            >
              {number}
            </button>
          )}
        </div>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="size-8 flex items-center justify-center text-black disabled:opacity-50 hover:bg-gray-100 rounded   "
      >
        <NextIcons />
      </button>
    </div>
  );
};

export default Pagination;
