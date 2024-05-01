import { FC } from "react";

interface PaginationProps {
  current: number;
  maxPage: number;
  itemsPerPage: number;
  onPageChange: (newPage: number) => void;
}

const Paging: FC<PaginationProps> = ({
  current,
  maxPage,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(maxPage / itemsPerPage);

  const handlePrevPage = () => {
    if (current > 1) {
      onPageChange(current - 1);
    }
  };

  const handleNextPage = () => {
    if (current < totalPages) {
      onPageChange(current + 1);
    }
  };

  return (
    <div className="flex py-2">
      <nav aria-label="Pagination">
        <ul className="inline-flex items-center space-x-1 rounded-lg text-sm">
          <li className="inline-flex items-center space-x-1">
            <button
              onClick={handlePrevPage}
              className={`inline-flex items-center space-x-2 rounded-lg px-2 md:px-4 border ${
                current === 1
                  ? "border-gray-300 text-gray-300 cursor-not-allowed"
                  : "border-gray-300 text-red-600"
              } bg-gray-50 px-2 py-1 md:py-2 font-medium hover:bg-gray-100`}
              disabled={current === 1}
            >
              First
            </button>
            <button
              onClick={handlePrevPage}
              className={`inline-flex items-center space-x-2 rounded-lg border ${
                current === 1
                  ? "border-gray-300 text-gray-300 cursor-not-allowed"
                  : "border-gray-300 text-red-600"
              } bg-gray-50 px-2 md:px-2 py-1 md:py-2 font-medium hover:bg-gray-100`}
              disabled={current === 1}
            >
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </li>
          <li>
            <span className="inline-flex items-center space-x-1 rounded-md bg-gray-50 hover:bg-gray-100 border border-gray-300 px-3 md:px-4 py-1 md:py-2 text-gray-500 text-xs font-medium">
              Page
              <b className="mx-1">{current}</b>
              of
              <b className="ml-1">{totalPages}</b>
            </span>
          </li>
          <li className="inline-flex items-center space-x-1">
            <button
              onClick={handleNextPage}
              className={`inline-flex items-center space-x-2 rounded-lg border ${
                current === totalPages
                  ? "border-gray-300 text-gray-300 cursor-not-allowed"
                  : "border-gray-300 text-red-600"
              } bg-gray-50 px-2  py-1 md:py-2 font-medium hover:bg-gray-100`}
              disabled={current === totalPages}
            >
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button
              onClick={handleNextPage}
              className={`inline-flex items-center space-x-2 rounded-lg md:px-4 px-2 border ${
                current === totalPages
                  ? "border-gray-300 text-gray-300 cursor-not-allowed"
                  : "border-gray-300 text-red-600"
              } bg-gray-50 px-2 py-1 md:py-2 font-medium hover:bg-gray-100`}
              disabled={current === totalPages}
            >
              Last
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Paging;
