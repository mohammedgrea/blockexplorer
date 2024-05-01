import React, { FC, useState, useEffect, useMemo, useCallback } from "react";
import { Flowbite, CustomFlowbiteTheme, Table } from "flowbite-react";

import TransactionsRow from "../../features/common/HomeTable/TransactionsRow/TransactionsRow";
import Paging from "../../features/common/Paging/Paging";
import Dropdown from "../../features/common/Dropdown/Dropdown";
import Button from "../../features/common/Button/Button";

import { ChartBarSquareIcon } from "@heroicons/react/24/outline";

import iconRightArrow from "../../assets/icons/iconRightArrow.svg";

let blockData = [
  {
    txnHash: "0xE7E2cB8c81c10FF191A73FE266788C9Ce62EC754",
    method: "Transfer",
    nonce: 34,
    age: 12 + " secs ago",
    gasLimit: 49245,
    price: 19.9621,
    gasPrice: 0.094,
    from: "0xE7E2cB8c81c10FF191A73FE266788C9Ce62EC754",
    to: "1xE7E2cB8c81c10FF191A73FE266788C9Ce62EC754",
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

const PendingTransactions: FC = () => {
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
      <section className="bg-be-navy-blue-50 min-h-screen pb-6 md:py-6 md:w-full w-screen">
        <div className="mx-6 space-y-6">
          <div className="border-b py-4">
            <p className="font-bold text-xl">Pending Transactions</p>
          </div>
          <p className="text-be-navy-blue-500">
            Volutpat ut aliquam ut lacus pulvinar sed egestas. Pharetra felis
            euismod
          </p>
          <div className="bg-white border rounded-xl p-6 space-y-6 md:space-y-12">
            <div className="flex justify-between items-center">
              <div className="text-sm py-1 px-2 text-be-navy-blue-700 flex items-center gap-2 bg-be-navy-blue-50 rounded-lg border border-be-navy-blue-100">
                <ChartBarSquareIcon className="text-be-navy-blue-700 w-4" />
                Pending Transaction Pool
              </div>
              <Button
                size="xs"
                color="lightRedTransparent"
                icon={<img src={iconRightArrow} alt="right arrow icon" />}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center space-y-4 md:space-y-0">
              <div className="space-y-2 col-span-1">
                <p className="text-lg font-bold">
                  More than 1,990,139,717 transactions found
                </p>
                <p className="text-sm text-be-navy-blue-300">
                  (Showing the last 500k records)
                </p>
              </div>
              <div className="hidden md:flex justify-start md:justify-end">
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
                <Table.Head>
                  <Table.HeadCell>Txn Hash</Table.HeadCell>
                  <Table.HeadCell>Method</Table.HeadCell>
                  <Table.HeadCell className="text-red-500">
                    Nonce
                  </Table.HeadCell>
                  <Table.HeadCell>Last Seen</Table.HeadCell>
                  <Table.HeadCell className="text-red-500 whitespace-nowrap">
                    Gas Limit
                  </Table.HeadCell>
                  <Table.HeadCell className="text-red-500">
                    Gas Price
                  </Table.HeadCell>
                  <Table.HeadCell>From</Table.HeadCell>
                  <Table.HeadCell>To</Table.HeadCell>
                  <Table.HeadCell>Amount</Table.HeadCell>
                </Table.Head>
                <Table.Body className="whitespace-nowrap">
                  {getCurrentPageData().map((block, index) => (
                    <TransactionsRow
                      key={index}
                      data={block}
                      tableType="pendingTransactions"
                      full={true}
                      className={`${
                        index === blockData.length - 1
                          ? ""
                          : "bg-white border-b dark:bg-gray-800 w-full space-x-3"
                      }`}
                    />
                  ))}
                </Table.Body>
              </Table>
            </div>

            <div className="flex md:flex-row flex-col justify-between md:items-center">
              <div className="flex md:justify-start  justify-between items-center md:w-fit w-full space-x-2">
                <span className="w-full whitespace-nowrap text-sm">
                  Show Rows :{" "}
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
              <div className="flex md:justify-end justify-center">
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

export default PendingTransactions;
