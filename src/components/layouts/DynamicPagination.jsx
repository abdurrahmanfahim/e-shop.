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
    <div>
      <h2>Dynamic Pagination</h2>

      <label>
        Items per page:{" "}
        <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </label>

      <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        {currentItems.map((item, idx) => (
          <div key={idx}>{item}</div>
        ))}
      </div>

      <div>
        <button
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {"<"}
        </button>

        {pageNumbers.map((page, idx) =>
          page === "..." ? (
            <span key={`dots-${idx}`} style={{ margin: "0 4px" }}>
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => handlePageClick(page)}
              disabled={page === currentPage}
              style={{
                fontWeight: page === currentPage ? "bold" : "normal",
                margin: "0 4px",
              }}
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
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default DynamicPagination;
