import { TableRowProps } from "flowbite-react";

export interface TableTransactionsRowProps extends TableRowProps {
  data: {
    txnHash: string;
    method?: string;
    block?: number;
    age: number | string;
    from: string;
    to: string;
    value?: number | string;
    txn?: number;
    price?: number;
    gasLimit?: number;
    gasPrice?: number;
    nonce?: number;
  };
  full?: boolean;

  tableType?:
    | "pendingTransactions"
    | "AddressDetailsTransactions"
    | "AddressDetailsInternalTransactions";
}
