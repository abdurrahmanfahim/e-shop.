import React, { useState } from "react";

const DynamicPagination = () => {
  const items = Array.from({ length: 103 }, (_, i) => `Item ${i + 1}`);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  const handlePageClick = (pageNum) => {
    setCurrentPage(pageNum);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const getPageNumbers = () => {
    const pages = [];
    const DOTS = "...";

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, DOTS, totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(
          1,
          DOTS,
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          DOTS,
          currentPage - 1,
          currentPage,
          currentPage + 1,
          DOTS,
          totalPages
        );
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="p-4">
      <h2 className="text-xl lg:text-2xl font-semibold mb-4">Dynamic Pagination</h2>

      <label className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
        <span className="text-sm lg:text-base">Items per page:</span>
        <select 
          value={itemsPerPage} 
          onChange={handleItemsPerPageChange}
          className="px-3 py-2 border border-gray-300 rounded-md text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </label>

      <div className="my-4 space-y-2">
        {currentItems.map((item, idx) => (
          <div key={idx} className="p-2 bg-gray-50 rounded text-sm lg:text-base">{item}</div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-1 lg:gap-2">
        <button
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-2 lg:px-3 py-1 lg:py-2 text-sm lg:text-base border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
        >
          {"<"}
        </button>

        {pageNumbers.map((page, idx) =>
          page === "..." ? (
            <span key={`dots-${idx}`} className="px-1 lg:px-2 text-sm lg:text-base">
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => handlePageClick(page)}
              disabled={page === currentPage}
              className={`px-2 lg:px-3 py-1 lg:py-2 text-sm lg:text-base border border-gray-300 rounded hover:bg-gray-100 ${
                page === currentPage ? 'bg-blue-500 text-white font-bold' : ''
              }`}
            >
              {page}
            </button>
          )
        )}

        <button
          onClick={() =>
            currentPage < totalPages && setCurrentPage(currentPage + 1)
          }
          disabled={currentPage === totalPages}
          className="px-2 lg:px-3 py-1 lg:py-2 text-sm lg:text-base border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default DynamicPagination;
