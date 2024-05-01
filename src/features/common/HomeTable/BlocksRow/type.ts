import { TableRowProps } from "flowbite-react";

export interface TableBlocksRowProps extends TableRowProps {
  data: {
    block: number;
    price?: number;
    age: number | string;
    txn: number;
    validator: string;
    gasUsed?: any;
    gasLimit?: number;
    baseFee: number;
    reward?: number;
    burntFee?: { value: string; percentage: number };
  };
  full: boolean;
}
