import { FC } from "react";
import { Table } from "flowbite-react";

import { checkMissingBlockData } from "../../../../helpers/checkMissingData";
import { substring } from "../../../../helpers/substring";
import { copyToClipboard } from "../../../../helpers/copyToClipboard";
import { scrollToTop } from "../../../../helpers/scrollToTop";

import { TableBlocksRowProps } from "./type";

import iconCube from "../../../../assets/icons/iconCube.svg";
import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const BlocksRow: FC<TableBlocksRowProps> = ({ full, ...props }) => {
  const cells = Object.entries(props.data)?.map(([key, data], index) => {
    if (key === "block") {
      if (checkMissingBlockData(props.data, full)) {
        return (
          <Table.Cell key={index} className="p-2 md:p-6">
            <div className="flex flex-col gap-2">
              <div className="hidden md:flex items-center gap-3 ">
                <div className="bg-be-navy-blue-50 rounded-lg h-[38px] w-[38px] md:p-3  p-2 ">
                  <img
                    src={iconCube}
                    alt="cube icon"
                    className="w-full h-full"
                  />
                </div>
                <div className="flex md:flex-col flex-row gap-6 md:gap-1 text-sm">
                  <Link
                    to="block-details"
                    className="text-blue-500 font-bold"
                    onClick={scrollToTop}
                  >
                    {props.data.block}
                  </Link>
                  <span className="text-be-navy-blue-700 font-medium ">
                    {" "}
                    7 secs ago
                  </span>
                </div>
              </div>
              <div className="md:hidden">
                <Table>
                  <Table.Body>
                    <Table.Row className="border-none">
                      <Table.Cell className="py-[3px] font-bold">
                        Block
                      </Table.Cell>
                      <Table.Cell className="py-[3px] text-blue-500 font-bold">
                        <Link
                          to="block-details"
                          className="text-blue-500 font-bold"
                          onClick={scrollToTop}
                        >
                          {props.data.block}
                        </Link>
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row className="border-none">
                      <Table.Cell className="py-[3px] font-bold">
                        Validated by
                      </Table.Cell>
                      <Table.Cell className="py-[3px] text-blue-500 font-bold ">
                        {substring(props.data.validator)}
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row className="border-none">
                      <Table.Cell className="py-[3px] font-bold">
                        txns
                      </Table.Cell>
                      <Table.Cell className="py-[3px]">
                        {props.data.txn}
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
                          {data} ETH
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
        <Table.Cell key={index} className="text-blue-500 font-medium ">
          {data.toString()}
        </Table.Cell>
      );
    }

    if (key === "burntFee" && full) {
      return (
        <Table.Cell key={index}>
          <div className="flex gap-1 font-medium  ">
            {data.value}
            <span>({data.percentage}%)</span>
          </div>
        </Table.Cell>
      );
    }

    if (
      checkMissingBlockData(props.data, full) &&
      (key === "age" || key === "txn")
    ) {
      return null;
    }

    if (key === "validator") {
      if (checkMissingBlockData(props.data, full)) {
        return (
          <Table.Cell key={index} className="md:block hidden">
            <div>
              <span className="font-medium ">Validated by </span>
              <span className="text-blue-500 font-bold">
                {" "}
                {substring(data)}
              </span>
            </div>
            <div className="flex gap-1 font-medium  ">
              <span className="text-blue-500 font-bold">
                {props.data.txn} txns
              </span>
              in {props.data.age} secs
            </div>
            <div className="rounded-lg md:hidden whitespace-nowrap border border-be-navy-blue-300 text-be-navy-blue-700 font-bold text-[10px] md:text-xs px-1 md:px-3 py-1  md:py-2 text-center">
              {data} ETH
            </div>
          </Table.Cell>
        );
      }
      return (
        <Table.Cell key={index} className="text-blue-500">
          <div className="flex gap-1">
            <Link to="/address-details" onClick={scrollToTop}>
              {" "}
              {substring(data)}
            </Link>
            <div
              className="cursor-pointer"
              onClick={() => copyToClipboard(data)}
            >
              <DocumentDuplicateIcon className="text-be-navy-blue-100 w-4 h-4 hover:text-be-navy-blue-700" />
            </div>
          </div>
        </Table.Cell>
      );
    }

    if (key === "baseFee") {
      if (checkMissingBlockData(props.data, full)) {
        return (
          <Table.Cell key={index}>
            <div className="md:block hidden rounded-lg whitespace-nowrap border border-be-navy-blue-300 text-be-navy-blue-700 font-bold text-[10px] md:text-xs px-1 md:px-3 py-1  md:py-2 text-center">
              {data} ETH
            </div>
          </Table.Cell>
        );
      }
      return (
        <Table.Cell key={index} className="font-medium ">
          {data}
        </Table.Cell>
      );
    }

    return (
      full && (
        <Table.Cell key={index} className="font-medium  whitespace-nowrap">
          {data}
        </Table.Cell>
      )
    );
  });

  return <Table.Row {...props}>{cells}</Table.Row>;
};

export default BlocksRow;
