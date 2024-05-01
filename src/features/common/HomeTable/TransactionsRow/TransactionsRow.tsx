import { FC, Fragment } from "react";
import { Table } from "flowbite-react";

import { checkMissingTransactionData } from "../../../../helpers/checkMissingData";
import { substring } from "../../../../helpers/substring";
import { copy } from "../../../../helpers/copy";
import { TableTransactionsRowProps } from "./type";
import { scrollToTop } from "../../../../helpers/scrollToTop";

import iconSwitchHorizontal from "../../../../assets/icons/iconSwitchHorizontal.svg";
import iconArrowCircleRight from "../../../../assets/icons/iconArrowCircleRight.svg";
import iconFile from "../../../../assets/icons/iconFile.svg";
import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const TransactionsRow: FC<TableTransactionsRowProps> = ({
  full,
  tableType,
  ...props
}) => {
  const cells = Object.entries(props.data)?.map(([key, data], index) => {
    if (checkMissingTransactionData(props.data, full) && key === "to" && !full)
      return null;

    if (key === "gasPrice") return null;

    if (key === "txnHash") {
      if (checkMissingTransactionData(props.data, full)) {
        return (
          <Table.Cell key={index} className="p-2 md:p-6">
            <div className="flex flex-col gap-1 ">
              <div className="hidden md:flex items-center gap-3">
                <div className="bg-be-navy-blue-50 rounded-lg hover:text-be-navy-blue-700lg text-sm  p-3 ">
                  <img src={iconSwitchHorizontal} alt="cube icon" />
                </div>
                <div className="flex md:flex-col gap-6 md:gap-1">
                  <Link
                    to="transaction-details"
                    onClick={scrollToTop}
                    className="text-blue-500  font-bold"
                  >
                    {substring(data.toString())}
                  </Link>
                  <span className="text-be-navy-blue-700 font-medium whitespace-nowrap">
                    {" "}
                    {props.data.age} secs ago
                  </span>
                </div>
              </div>
              <div className="md:hidden">
                <Table>
                  <Table.Body>
                    <Table.Row className="border-none">
                      <Table.Cell className="py-[3px] font-bold">
                        Txn Hash
                      </Table.Cell>
                      <Table.Cell className="py-[3px] text-blue-500 font-bold">
                        <Link
                          to="transaction-details"
                          onClick={scrollToTop}
                          className="text-blue-500  font-bold"
                        >
                          {substring(data.toString())}
                        </Link>
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row className="border-none">
                      <Table.Cell className="py-[3px] font-bold">
                        from
                      </Table.Cell>
                      <Table.Cell className="py-[3px] text-blue-500 font-bold">
                        {substring(props.data.from)}
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row className="border-none">
                      <Table.Cell className="py-[3px] font-bold">To</Table.Cell>
                      <Table.Cell className="py-[3px] text-blue-500 font-bold">
                        {substring(props.data.to)}
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row className="border-none">
                      <Table.Cell className="py-[3px] font-bold">
                        Age
                      </Table.Cell>
                      <Table.Cell className="py-[3px]">
                        {props.data.age} secs ago
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row className="border-none font-bold">
                      <Table.Cell className="py-[3px]">Reward</Table.Cell>
                      <Table.Cell className="py-[3px]">
                        <div className="rounded-md md:hidden flex items-center justify-center whitespace-nowrap border border-be-navy-blue-300 text-be-navy-blue-700 font-bold text-xs max-h-[30px] max-w-[90px] text-center">
                          {props.data.txn} ETH
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </div>
            </div>
          </Table.Cell>
        );
      }
      return (
        <Table.Cell key={index} className="text-blue-500 font-bold">
          {substring(data.toString())}
        </Table.Cell>
      );
    }

    if (key === "price") {
      if (tableType === "pendingTransactions") {
        return (
          <Table.Cell key={index} className="text-be-navy-blue-700 font-medium">
            {data} | {props.data.gasPrice} Gwei
          </Table.Cell>
        );
      }
    }

    if (key === "block" && full) {
      if (checkMissingTransactionData(props.data, full)) {
        return (
          <Table.Cell key={index} className="text-blue-500 font-bold">
            {data}
          </Table.Cell>
        );
      }
      return (
        <Table.Cell key={index} className="text-blue-500 font-medium">
          {substring(data.toString())}
        </Table.Cell>
      );
    }

    if (key === "from" || key === "to") {
      if (checkMissingTransactionData(props.data, full)) {
        return (
          <Table.Cell key={index}>
            <div className="md:flex hidden flex-col">
              <div className="flex gap-1">
                From
                <span className="text-blue-500 font-bold">
                  {substring(data.toString())}
                </span>
              </div>
              <div className="flex gap-1">
                To
                <span className="text-blue-500 font-bold">
                  {substring(props.data.to)}
                </span>
              </div>
            </div>
          </Table.Cell>
        );
      }
      return (
        <Fragment key={index}>
          <Table.Cell
            className={`${
              key === "to" && tableType === "AddressDetailsInternalTransactions"
                ? "text-black"
                : "text-blue-500"
            }`}
          >
            <div className="flex items-center gap-1 font-medium">
              <div className="flex gap-2 whitespace-nowrap">
                {key === "to" && tableType === "AddressDetailsTransactions" && (
                  <span className="flex justify-center items-center bg-green-200 border border-green-400 rounded px-2 font-sans font-bold text-green-500 text-xs">
                    IN
                  </span>
                )}

                {key === "to" &&
                  tableType === "AddressDetailsInternalTransactions" && (
                    <img
                      src={iconArrowCircleRight}
                      alt=""
                      className="text-green-500 text-xs"
                    />
                  )}

                {key === "from" &&
                  tableType === "AddressDetailsInternalTransactions" && (
                    <img
                      src={iconFile}
                      alt=""
                      className="text-green-500 text-xs"
                    />
                  )}

                {substring(data.toString())}
              </div>
              <button
                className="cursor-pointer text-be-navy-blue-100 "
                onClick={() => copy(data.toString())}
              >
                <DocumentDuplicateIcon className="text-be-navy-blue-100 w-4 h-4 hover:text-be-navy-blue-700" />
              </button>
            </div>
          </Table.Cell>
        </Fragment>
      );
    }

    if (key === "method" && full) {
      return (
        <Table.Cell key={index}>
          <span className="border-2 border-be-navy-blue-300 rounded py-0.5 px-2 font-bold text-xs">
            {data}
          </span>
        </Table.Cell>
      );
    }

    if (key === "txn") {
      if (checkMissingTransactionData(props.data, full)) {
        return (
          <Table.Cell key={index}>
            <div className="rounded-lg md:block hidden border border-be-navy-blue-300 text-be-navy-blue-700 font-bold text-xs px-3 py-2 text-center">
              {data} ETH
            </div>
          </Table.Cell>
        );
      }
      return (
        <Table.Cell key={index} className="font-medium">
          {data}
        </Table.Cell>
      );
    }

    return (
      full && (
        <Table.Cell key={index} className=" whitespace-nowrap">
          {data}
        </Table.Cell>
      )
    );
  });

  return <Table.Row {...props}>{cells}</Table.Row>;
};

export default TransactionsRow;
