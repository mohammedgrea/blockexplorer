import { FC, useState } from "react";
import { Pagination, CustomFlowbiteTheme, Flowbite } from "flowbite-react";

interface DAOPagingProps {
  currentPage: number;
}
const PaginationTheme: CustomFlowbiteTheme = {
  pagination: {
    base: "",
    layout: {
      table: {
        base: "text-sm text-gray-700 dark:text-gray-400",
        span: "font-semibold text-gray-900 dark:text-white",
      },
    },
    pages: {
      base: "xs:mt-0 my-2 inline-flex items-center -space-x-px ",
      showIcon: "inline-flex",
      previous: {
        base: "w-[32px] mx-[2px] rounded-lg ml-0 border border-be-navy-blue-100 bg-white py-1.5 items-center justify-center  leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white bg-be-navy-blue-50",
        icon: "h-5 w-5",
      },
      next: {
        base: "w-[32px] mx-[2px] border border-be-navy-blue-100 bg-white py-1.5 leading-tight  items-center justify-center rounded-lg enabled:hover:bg-gray-100 bg-be-navy-blue-50",
        icon: "h-5 w-5",
      },
      selector: {
        base: "w-[32px] h-[32px]  rounded-lg font-semibold mx-[2px] border border-be-navy-blue-100 bg-white  leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white bg-be-navy-blue-50",
        active:
          "bg-cyan-50 text-cyan-600 hover:bg-cyan-100 hover:text-cyan-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white ",
        disabled: "opacity-50 cursor-normal",
      },
    },
  },
};

const DAOPaging: FC<DAOPagingProps> = ({ currentPage }) => {
  const [thecurrentPage, setCurrentPage] = useState(1);

  return (
    <Flowbite theme={{ theme: PaginationTheme }}>
      <Pagination
        currentPage={thecurrentPage}
        onPageChange={(page) => {
          setCurrentPage(page);
        }}
        showIcons
        nextLabel=""
        previousLabel=""
        totalPages={100}
      />
    </Flowbite>
  );
};
export default DAOPaging;
