import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import PrevIcon from "../../icons/PrevIcon";
import NextIcon from "../../icons/nextIcon";

const Pagination = ({ totalItems, itemPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemPerPage);
  const maxPagesToShow = 10;
  const pagesToShowAfterBefore = 3;

  let startPage = Math.max(1, currentPage - pagesToShowAfterBefore);
  let endPage = Math.max(totalPages, currentPage + pagesToShowAfterBefore);

  if (endPage - startPage + 1 < maxPagesToShow) {
    if (startPage > 1) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }
    endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
  }

  const pageNumber = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumber.push(i);
  }

  return (
    <div className="w-[522px] mx-auto flex gap-16 items-center justify-center p-4 font-['Poppins'] font-semibold text-xl leading-[30px] text-center text-[#303030] ">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="size-8 flex items-center justify-center text-black disabled:opacity-50 hover:bg-gray-100 rounded   "
      >
        <PrevIcon />
      </button>

      {pageNumber.map((number, index) => (
        <div className="w-full flex justify-center items-center  ">
          <button
            onClick={() => onPageChange(number)}
            key={index}
            className={`rounded-[5px] ${
              number === currentPage && "py-[9px] px-[18px] bg-[#FF624C] text-white "
            } `}
          >
            {number}
          </button>
        </div>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="size-8 flex items-center justify-center text-black disabled:opacity-50 hover:bg-gray-100 rounded   "
      >
        <NextIcon />
      </button>
    </div>
  );
};

export default Pagination;
