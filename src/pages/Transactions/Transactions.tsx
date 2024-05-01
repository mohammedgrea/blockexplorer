import { FC, useState, useEffect, useMemo, useCallback } from "react";
import { Flowbite, CustomFlowbiteTheme, Table } from "flowbite-react";

// import MetricsCard from "../../features/common/MetricsCard/MetricsCard";
import Paging from "../../features/common/Paging/Paging";
import Dropdown from "../../features/common/Dropdown/Dropdown";
import DisplayRows from "../../features/common/HomeTable/DisplayTable/DisplayRows";

// const metricsData = [
//   {
//     metric: [
//       {
//         contents: [
//           {
//             label: "TRANSACTIONS (24H)",
//             value: (
//               <div className="flex flex-wrap items-center space-x-1">
//                 <p className="font-sans font-medium text-black text-base break-all">
//                   932,345
//                 </p>
//                 <p className="text-be-navy-blue-300">Value 2</p>
//                 <p className="text-green-400">(+ 2.34%)</p>
//               </div>
//             ),
//           },
//         ],
//         icon: (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-6 h-6 stroke-blue-700"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
//             />
//           </svg>
//         ),
//       },
//     ],
//   },
//   {
//     metric: [
//       {
//         contents: [
//           {
//             label: "PENDING TRANSACTIONS (LAST 1H)",
//             value: (
//               <div className="flex flex-wrap items-center space-x-1">
//                 <p className="font-sans font-medium text-black text-base break-all">
//                   125,345
//                 </p>
//                 <p className="text-be-navy-blue-300">(Avarage)</p>
//               </div>
//             ),
//           },
//         ],
//         icon: (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-6 h-6 stroke-blue-700"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
//             />
//           </svg>
//         ),
//       },
//     ],
//   },
//   {
//     metric: [
//       {
//         contents: [
//           {
//             label: "NETWORK TRANSACTIONS FEE (24H)",
//             value: (
//               <div className="flex flex-wrap items-center space-x-1">
//                 <p className="font-sans font-medium text-black text-base break-all">
//                   932,45
//                 </p>
//                 <p className="text-red-500">(14.34%)</p>
//               </div>
//             ),
//           },
//         ],
//         icon: (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-6 h-6 stroke-blue-700"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
//             />
//           </svg>
//         ),
//       },
//     ],
//   },
//   {
//     metric: [
//       {
//         contents: [
//           {
//             label: "AVG. TRANSACTION FEE (24H)",
//             value: (
//               <div className="flex flex-wrap items-center space-x-1">
//                 <p className="font-sans font-medium text-black text-base break-all">
//                   5.50 USD
//                 </p>
//                 <p className="text-red-500">(5.94%)</p>
//               </div>
//             ),
//           },
//         ],
//         icon: (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-6 h-6 stroke-blue-700"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//             />
//           </svg>
//         ),
//       },
//     ],
//   },
// ];

let blockData = [
  {
    txnHash: "0xE7E2cB8c81c10FF191A73FE266788C9Ce62EC754",
    method: "Transfer",
    block: 17412450,
    age: 12 + " secs ago",
    from: "0xE7E2cB8c81c10FF191A73FE266788C9Ce62EC754",
    to: "1xE7E2cB8c81c10FF191A73FE266788C9Ce62EC754",
    value: 334244,
    txn: 0.01858,
  },
];
for (let i = 0; i < 10; i++) {
  blockData.push(...blockData);
}

const options = [
  [{ value: "10" }, { value: "25" }, { value: "50" }, { value: "100" }],
];

const maxPage = blockData.length;

const Transactions: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  useMemo(() => [...blockData], []);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const getCurrentPageData = useCallback(() => {
    let startIndex = currentPage - 1;
    if (currentPage !== 1) startIndex = (currentPage - 1) * itemsPerPage - 1;
    let endIndex = startIndex + itemsPerPage * 1;
    return blockData.slice(startIndex, endIndex);
  }, [currentPage, itemsPerPage]);

  const pageTheme: CustomFlowbiteTheme = {
    table: {
      body: {
        cell: {
          base: "px-2 py-4",
        },
      },
      head: {
        base: "group/head text-xs uppercase border-b text-gray-700 dark:text-gray-400 mb-6",
        cell: {
          base: "bg-white font-sans font-semibold px-2 py-5 normal-case text-sm",
        },
      },
      row: {
        base: "group/row",
      },
    },
  };

  useEffect(() => {
    getCurrentPageData();
  }, [currentPage, getCurrentPageData]);

  return (
    <Flowbite theme={{ theme: pageTheme }}>
      <section className="bg-be-navy-blue-50 min-h-screen pb-6 md:py-8 md:w-full ">
        <div className="mx-6 space-y-6">
          <div className="border-b py-4">
            <p className="font-bold text-xl text-be-navy-blue-700">
              Transactions
            </p>
          </div>
          <p className="text-be-navy-blue-500">
            Volutpat ut aliquam ut lacus pulvinar sed egestas. Pharetra felis
            euismod
          </p>
          {/* <div className="w-full">
            <MetricsCard metrics={metricsData} />
          </div> */}

          <div className="bg-white border rounded-xl p-6 space-y-6 md:space-y-12 ">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center space-y-4 md:space-y-0">
              <div className="space-y-2 col-span-1">
                <p className="text-base font-bold text-be-navy-blue-700">
                  More than 1,990,139,717 transactions found
                </p>
                <p className="text-sm text-be-navy-blue-300 font-medium">
                  (Showing the last 500k records)
                </p>
              </div>
              <div className="hidden md:flex col-span-1 justify-start md:justify-end">
                <Paging
                  current={currentPage}
                  maxPage={maxPage}
                  itemsPerPage={itemsPerPage}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>

            <div className="overflow-x-auto	">
              <Table>
                <Table.Head>
                  <Table.HeadCell>Txn Hash</Table.HeadCell>
                  <Table.HeadCell>Method</Table.HeadCell>
                  <Table.HeadCell>Block</Table.HeadCell>
                  <Table.HeadCell className="text-red-600">Age</Table.HeadCell>
                  <Table.HeadCell>From</Table.HeadCell>
                  <Table.HeadCell>To</Table.HeadCell>
                  <Table.HeadCell>Value</Table.HeadCell>
                  <Table.HeadCell className="whitespace-nowrap">
                    Txn Free
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body>
                  <DisplayRows
                    type="transaction"
                    //@ts-ignore
                    data={getCurrentPageData()}
                    full={true}
                  />
                </Table.Body>
              </Table>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between justify-start">
              <div className="space-x-4 items-center md:w-fit w-full flex ">
                <span className="w-full font-medium text-sm whitespace-nowrap">
                  Show Rows
                </span>
                <div className="relative inline-block">
                  <Dropdown
                    color="grey"
                    label="10"
                    full
                    select
                    size="xs"
                    // @ts-ignore
                    onChange={(e) => setItemsPerPage(e.target.value)}
                    options={options}
                  />
                </div>
              </div>
              <div className="flex justify-center md:justify-end">
                <Paging
                  current={currentPage}
                  maxPage={maxPage}
                  itemsPerPage={itemsPerPage}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Flowbite>
  );
};

export default Transactions;
