import { CustomFlowbiteTheme } from "flowbite-react";

const globalTheme: CustomFlowbiteTheme = {
  footer: {
    root: {
      base: "bg-be-navy-blue-700",
    },
    copyright: {
      base: "text-left text-be-navy-blue-300",
    },
    divider: {
      base: "bg-be-navy-blue-500 border border-be-navy-blue-500",
    },
    brand: {
      img: "h-10",
    },
  },
  tabs: {
    tablist: {
      base: "flex text-center",
      styles: {
        default: "flex-wrap border-b border-gray-200 w-fit",
      },
      tabitem: {
        base: "flex items-center justify-center px-6 md:px-10 py-4 rounded-t-lg text-xs md:text-sm font-medium first:ml-0 focus:ring-0 focus:ring-transparent focus:outline-none",
        styles: {
          default: {
            base: "rounded-t-lg",
            active: {
              on: "font-bold text-blue-500 border-b-[2px] border-blue-500 bg-transparent transition-all duration-500 ease-in-out",
              off: "font-bold text-gray-500",
            },
          },
        },
      },
    },
  },
  table: {
    root: {
      base: "w-full text-left text-sm text-gray-500 dark:text-gray-400 overflow-x-auto overflow-x-scroll",
      wrapper: "relative ",
    },
    body: {
      cell: {
        base: "group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg px-2 py-6",
      },
    },
    head: {
      base: "group/head text-xs uppercase text-gray-700 dark:text-gray-400 mb-6 border-b border-be-navy-blue-100 overflow-x-auto overflow-x-scroll ",
      cell: {
        base: "bg-white font-sans font-regular px-2 normal-case text-sm pb-6",
      },
    },
    row: {
      base: "group/row border-b border-be-navy-blue-100 overflow-x-auto overflow-x-scroll ",
    },
  },
};

export default globalTheme;
