import React, { FC } from "react";
import BlocksRow from "../BlocksRow/BlocksRow";
import { TableBlocksRowProps } from "../BlocksRow/type";
import { TableTransactionsRowProps } from "../TransactionsRow/type";
import TransactionsRow from "../TransactionsRow/TransactionsRow";

interface DisplayRowsProps {
  type?: "block" | "transaction";
  full?: boolean;
  data: TableBlocksRowProps[] | TableTransactionsRowProps[];
  tableType?:
    | "pendingTransactions"
    | "AddressDetailsTransactions"
    | "AddressDetailsInternalTransactions";
}
const DisplayRows: FC<DisplayRowsProps> = ({ type, full, data, tableType }) => {
  return (
    <>
      {type === "block" ? (
        <>
          {data.map((block, index) => (
            <BlocksRow
              key={index}
              //@ts-ignore
              data={block}
              //@ts-ignore
              full={full}
              className={`bg-white border-b dark:bg-gray-800 w-full space-x-3`}
            />
          ))}
        </>
      ) : (
        <>
          {data.map((transaction, index) => (
            <TransactionsRow
              key={index}
              //@ts-ignore
              data={transaction}
              full={full}
              tableType={tableType}
              className={`bg-white border-b dark:bg-gray-800 w-full space-x-3`}
            />
          ))}
        </>
      )}
    </>
  );
};

export default DisplayRows;
