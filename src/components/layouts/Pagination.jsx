import NextIcons from "../../icons/NextIcons";
import PrevIcon from "../../icons/PrevIcon";

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const maxPagesToShow = 5;
  const pages = [];

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

  if (totalPages <= maxPagesToShow) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    const startPages = isMobile ? [1] : [1, 2, 3];
    const endPages = isMobile ? [totalPages] : [totalPages - 1, totalPages];
    const middlePages = [currentPage - 1, currentPage, currentPage + 1].filter(
      (p) => p > (isMobile ? 1 : 3) && p < (isMobile ? totalPages : totalPages - 1),
    );

    const uniquePages = Array.from(
      new Set([...startPages, ...middlePages, ...endPages]),
    ).sort((a, b) => a - b);

    for (let i = 0; i < uniquePages.length; i++) {
      pages.push(uniquePages[i]);
      if (
        i < uniquePages.length - 1 &&
        uniquePages[i + 1] - uniquePages[i] > 1
      ) {
        pages.push("...");
      }
    }
  }

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
  };

  return (
    <div className="w-full max-w-[522px] mx-auto flex gap-2 sm:gap-[18px] items-center justify-center p-4 font-['Poppins'] font-semibold text-base sm:text-xl leading-[30px] text-center text-black">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="size-8 flex items-center justify-center text-black disabled:opacity-50 hover:bg-gray-100 rounded   "
      >
        <PrevIcon />
      </button>

      {pages.map((number, index) => (
        <div
          className="w-full flex justify-center items-center"
          key={typeof number === "number" ? number : `dots-${index}`}
        >
          {number === "..." ? (
            <span className="px-10p select-none">...</span>
          ) : (
            <button
              onClick={() => handlePageChange(number)}
              className={`rounded-[5px] py-1.5 px-3 sm:py-[9px] sm:px-[18px] cursor-pointer ${
                number === currentPage
                  ? "bg-orange text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {number}
            </button>
          )}
        </div>
      ))}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="size-8 flex items-center justify-center text-black disabled:opacity-50 hover:bg-gray-100 rounded   "
      >
        <NextIcons />
      </button>
    </div>
  );
};

export default Pagination;
