import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Table, Tabs } from "flowbite-react";

import AddressInfoCards from "../../features/common/AddressInfoCards/AddressInfoCards";
import HomeTable from "../../features/common/HomeTable/HomeTable";
import Dropdown from "../../features/common/Dropdown/Dropdown";
import DisplayRows from "../../features/common/HomeTable/DisplayTable/DisplayRows";

import icon_glob from "../../assets/icons/icon_glob.svg";
import icon_sort_ascending from "../../assets/icons/icon_sort_ascending.svg";
import {
  ChatBubbleLeftEllipsisIcon,
  DocumentDuplicateIcon,
  QrCodeIcon,
} from "@heroicons/react/24/outline";

let TransactionData = [
  {
    txnHash: "0xE7E2cB8c81c10FF191A73FE266788C9Ce62EC754",
    method: "Execute",
    block: 17412450,
    age: "12 sec ago",
    from: "0xE7E2cB8c81c10FF191A73FE266788C9Ce62EC754",
    to: "1xE7E2cB8c81c10FF191A73FE266788C9Ce62EC754",
    value: 334244,
    txn: 0.01858,
  },
  {
    txnHash: "0xE7E2cB8c81c10FF191A73FE266788C9Ce62EC754",
    method: "Execute",
    block: 17412450,
    age: "12 sec ago",
    from: "0xE7E2cB8c81c10FF191A73FE266788C9Ce62EC754",
    to: "1xE7E2cB8c81c10FF191A73FE266788C9Ce62EC754",
    value: 334244,
    txn: 0.01858,
  },
  {
    txnHash: "0xE7E2cB8c81c10FF191A73FE266788C9Ce62EC754",
    method: "Execute",
    block: 17412450,
    age: "12 sec ago",
    from: "0xE7E2cB8c81c10FF191A73FE266788C9Ce62EC754",
    to: "1xE7E2cB8c81c10FF191A73FE266788C9Ce62EC754",
    value: 334244,
    txn: 0.01858,
  },
];

let InternalTransactionData = [
  {
    txnHash:
      "0x674750287abd6a2c78b7c45f74e5946f425e77283cd627a377233bc1401a9d88",
    block: 17412450,
    age: "1 hr 50 mins ago",
    from: "Uniswap V2: Router 2",
    to: "0xa8af16...47786B6e",
    value: "0.24221944 ETH",
  },
];

for (let i = 0; i < 3; i++) {
  TransactionData.push(...TransactionData);
  InternalTransactionData.push(...InternalTransactionData);
}

const AddressDetails: FC = () => {
  return (
    <section className="bg-be-navy-blue-50 py-6 min-h-screen md:w-full w-screen">
      <div className="container space-y-6 md:space-y-12">
        <div className="flex flex-row flex-wrap items-center space-x-2">
          <div className="flex items-center space-x-1">
            <img src={icon_glob} alt="icon glob" loading="lazy" />
            <p className="font-sans font-semibold text-lg text-be-navy-blue-700">
              Address
            </p>
          </div>
          <p className="font-sans font-normal text-xs md:text-base text-be-navy-blue-700">
            0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326
          </p>
          <div className="flex items-center gap-2 md:gap-6 text-be-navy-blue-100">
            <DocumentDuplicateIcon className="w-4 h-4" />
            <QrCodeIcon className="w-4 h-4" />
            <ChatBubbleLeftEllipsisIcon className="w-4 h-4" />
          </div>
        </div>
        <AddressInfoCards />
        <Tabs>
          <Tabs.Item active title="Transactions">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 px-4 space-y-6 md:space-y-12">
              <div className="flex flex-col  flex-col-reverse md:flex-row gap-4 md:justify-between items-start md:items-center">
                <div className="flex  items-center space-x-0.5 md:space-x-1">
                  <img
                    src={icon_sort_ascending}
                    alt="icon sort-ascending"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-sans font-medium text-be-navy-blue-700 flex items-center whitespace-nowrap">
                      Latest 25 from a total of
                      <p className=" md:text-sm text-xs text-blue-500 px-1">
                        {" "}
                        48{" "}
                      </p>
                      transaction
                    </div>
                  </div>
                </div>
                <div className="relative block-inline ml-auto">
                  <Dropdown
                    label="More"
                    full
                    size="sm"
                    color="grey"
                    alignment="right"
                    options={[
                      [
                        {
                          value: "View in full screen",
                        },
                        {
                          value: "Print chart",
                        },
                      ],
                      [
                        {
                          value: "Download PNG image",
                        },
                        {
                          value: "Download JPG image",
                        },
                        {
                          value: "Download PDF document",
                        },
                        {
                          value: "Download SVG vector image",
                        },
                      ],
                    ]}
                  />
                </div>
              </div>
              <div className="overflow-x-auto">
                <HomeTable>
                  <Table.Head>
                    <Table.HeadCell>Txn Hash</Table.HeadCell>
                    <Table.HeadCell>Method</Table.HeadCell>
                    <Table.HeadCell>Block</Table.HeadCell>
                    <Table.HeadCell className={"text-red-600"}>
                      Age
                    </Table.HeadCell>
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
                      tableType="AddressDetailsTransactions"
                      //@ts-ignore
                      data={TransactionData}
                      full
                    />
                  </Table.Body>
                </HomeTable>
              </div>
              <div className="flex justify-end">
                <Link to="/transactions">
                  <button
                    type="button"
                    className="flex items-center py-1 md:py-2 px-2 md:px-4 font-regular rounded-lg border-2 border-gray-200 bg-gray-100 disabled:cursor-not-allowed disabled:bg-gray-5"
                  >
                    View All Transactions
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 ml-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </Tabs.Item>
          <Tabs.Item active title="Internal Transactions">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 space-y-12">
              <div className="flex items-center">
                <div className="flex items-center space-x-1">
                  <img
                    src={icon_sort_ascending}
                    alt="icon sort-ascending"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-sans font-medium text-be-navy-blue-700">
                      Latest 22 Internal transactions
                    </p>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <HomeTable>
                  <Table.Head>
                    <Table.HeadCell>Parent Txn Hash</Table.HeadCell>
                    <Table.HeadCell>Block</Table.HeadCell>
                    <Table.HeadCell className={"text-red-600"}>
                      Age
                    </Table.HeadCell>
                    <Table.HeadCell>From</Table.HeadCell>
                    <Table.HeadCell>To</Table.HeadCell>
                    <Table.HeadCell>Value</Table.HeadCell>
                  </Table.Head>
                  <Table.Body>
                    <DisplayRows
                      type="transaction"
                      tableType="AddressDetailsInternalTransactions"
                      //@ts-ignore
                      data={InternalTransactionData}
                      full
                    />
                  </Table.Body>
                </HomeTable>
              </div>
            </div>
          </Tabs.Item>
        </Tabs>
      </div>
    </section>
  );
};

export default AddressDetails;
