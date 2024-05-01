import React, { FC, useState, useEffect, useCallback } from "react";
import { Flowbite, CustomFlowbiteTheme, Table } from "flowbite-react";

import Progress from "../../features/common/Progress/Progress";
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
//             label: "NETWORK UTILIZATION (24H)",
//             value: "51.3%",
//           },
//         ],
//         icon: (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1}
//             stroke="currentColor"
//             className="w-6 h-6 fill-white stroke-blue-700"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
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
//             label: "LAST SAFE BLOCK",
//             value: "17412482",
//           },
//         ],
//         icon: (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1}
//             stroke="currentColor"
//             className="w-6 h-6 fill-white stroke-blue-700"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
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
//             label: "BURNT FEES",
//             value: "17412482",
//           },
//         ],
//         icon: (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1}
//             stroke="currentColor"
//             className="w-6 h-6 fill-white stroke-blue-700"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
//             />
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
//             />
//           </svg>
//         ),
//       },
//     ],
//   },
// ];

let blockData = [
  {
    block: 17412450,
    age: "7 Sec ago",
    txn: 0.254,
    validator: "0xE7E2cB8c81c10FF191A73FE266788C9Ce62EC754",
    gasUsed: (
      <>
        <div className="space-y-1 w-fit">
          <div className="flex gap-1 ">
            <span className="font-bold">11,945,634</span>
            <span className="text-be-navy-blue-300">(40.45%, -19%)</span>
          </div>
          <div className="w-full">
            <Progress value={90} height={0.5} bgColor="blue-200" />
          </div>
        </div>
      </>
    ),
    gasLimit: 30_000_000,
    baseFee: 1212123,
    reward: 0.01858,
    burntFee: { value: "0.331921", percentage: -20.12 },
  },
  {
    block: 17412450,
    age: "7 Sec ago",
    txn: 0.254,
    validator: "0xE7E2cB8c81c10FF191A73FE266788C9Ce62EC754",
    gasUsed: (
      <>
        <div className="space-y-1 w-fit">
          <div className="flex gap-1 ">
            <span className="font-bold">11,945,634</span>
            <span className="text-be-navy-blue-300">(40.45%, -19%)</span>
          </div>

          <div className="w-full">
            <Progress value={67} height={0.5} bgColor="blue-200" />
          </div>
        </div>
      </>
    ),
    gasLimit: 30_000_000,
    baseFee: 1212123,
    reward: 0.01858,
    burntFee: { value: "0.331921", percentage: -20.12 },
  },
  {
    block: 17412450,
    age: "7 Sec ago",
    txn: 0.254,
    validator: "0xE7E2cB8c81c10FF191A73FE266788C9Ce62EC754",
    gasUsed: (
      <>
        <div className="space-y-1 w-fit">
          <div className="flex gap-1 ">
            <span className="font-bold">11,945,634</span>
            <span className="text-be-navy-blue-300">(40.45%, -19%)</span>
          </div>

          <div className="w-full">
            <Progress value={50} height={0.5} bgColor="blue-200" />
          </div>
        </div>
      </>
    ),
    gasLimit: 30_000_000,
    baseFee: 1212123,
    reward: 0.01858,
    burntFee: { value: "0.331921", percentage: -20.12 },
  },
];

const Blocks: FC = () => {
  const maxPage = blockData.length;
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const getCurrentPageData = useCallback(() => {
    let startIndex = currentPage - 1;
    if (currentPage !== 1) startIndex = (currentPage - 1) * itemsPerPage - 1;
    let endIndex = startIndex + itemsPerPage * 1;
    return blockData.slice(startIndex, endIndex);
  }, [currentPage, itemsPerPage]);

  useEffect(() => {
    getCurrentPageData();
  }, [currentPage, getCurrentPageData]);

  const pageTheme: CustomFlowbiteTheme = {
    table: {
      body: {
        cell: {
          base: "py-3",
        },
      },
      head: {
        base: "",
        cell: {
          base: "bg-white  font-sans font-bold text-black py-5 px-2",
        },
      },
      row: {
        base: "group/row",
      },
    },
  };

  return (
    <Flowbite theme={{ theme: pageTheme }}>
      <section className="bg-be-navy-blue-50 min-h-screen pb-6 md:py-8 md:w-full w-screen">
        <div className="mx-6 space-y-6">
          <div className="border-b py-4">
            <p className="font-bold text-xl text-be-navy-blue-700">Block</p>
          </div>
          <p className="text-be-navy-blue-500">
            Lacus duis nec penatibus risus. Turpis suspendisse quam tellus
            facillisi in. In id.
          </p>
          {/* <div className="w-full md:w-8/12">
            <MetricsCard
              metrics={metricsData}
              gridColumn
              maxwidth="max-w-[1000px]"
            />
          </div> */}

          <div className="bg-white border rounded-xl p-6 space-y-6 md:space-y-12 w-full">
            <div className="flex md:flex-row flex-col justify-between items-center space-y-4 md:space-y-0">
              <div className="space-y-2 col-span-1">
                <p className="text-lg font-bold text-be-navy-blue-700">
                  Total of 17,413,242 blocks
                </p>
                <p className="text-sm text-be-navy-blue-300 font-medium">
                  (Showing blocks between #17412450 to #17412450)
                </p>
              </div>
              <div className="col-span-1 md:flex justify-start md:justify-end hidden">
                <Paging
                  current={currentPage}
                  maxPage={maxPage}
                  itemsPerPage={itemsPerPage}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <Table>
                <Table.Head className="w-full py-20 px-2">
                  <Table.HeadCell className="min-w-[100px] ">
                    Block
                  </Table.HeadCell>
                  <Table.HeadCell className="text-red-500 min-w-[100px]">
                    Age
                  </Table.HeadCell>
                  <Table.HeadCell className="min-w-[100px]">Txn</Table.HeadCell>
                  <Table.HeadCell className="min-w-[200px]">
                    Validator
                  </Table.HeadCell>
                  <Table.HeadCell className="whitespace-nowrap min-w-[200px]">
                    Gas Used
                  </Table.HeadCell>
                  <Table.HeadCell className="whitespace-nowrap">
                    Gas Limit
                  </Table.HeadCell>
                  <Table.HeadCell className="whitespace-nowrap">
                    Base Free
                  </Table.HeadCell>
                  <Table.HeadCell className="min-w-[100px]">
                    Reward
                  </Table.HeadCell>
                  <Table.HeadCell className="min-w-[100px]">
                    Burnt Fees
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body>
                  <DisplayRows
                    type="block"
                    // @ts-ignore *
                    data={getCurrentPageData()}
                    full={true}
                  />
                </Table.Body>
              </Table>
            </div>

            <div className="flex md:flex-row flex-col justify-between md:items-center">
              <div className="flex md:justify-start md:space-x-2 justify-between items-center md:w-fit w-full">
                <span className="font-medium text-sm whitespace-nowrap">
                  Show Rows:
                </span>
                <div className="relative">
                  <Dropdown
                    label="10"
                    color="grey"
                    className="w-full text-sm "
                    size="xs"
                    select
                    options={[
                      [
                        {
                          value: "10",
                        },
                        {
                          value: "25",
                        },
                        {
                          value: "50",
                        },
                        {
                          value: "100",
                        },
                      ],
                    ]}
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <Paging
                  current={currentPage}
                  maxPage={maxPage}
                  itemsPerPage={itemsPerPage}
                  // @ts-ignore
                  onChange={(e) => setItemsPerPage(e.target.value)}
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

export default Blocks;
