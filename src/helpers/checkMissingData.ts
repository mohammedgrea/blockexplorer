import { TableBlocksRowProps } from "../features/common/HomeTable/BlocksRow/type";
import { TableTransactionsRowProps } from "../features/common/HomeTable/TransactionsRow/type";
export const checkMissingBlockData = (
  data: TableBlocksRowProps["data"],
  full: any,
) => {
  if (!full) return true;

  if (data.hasOwnProperty("gasUsed")) {
    return false;
  }

  if (data.hasOwnProperty("gasLimit")) {
    return false;
  }

  if (data.hasOwnProperty("reward")) {
    return false;
  }

  if (data.hasOwnProperty("burntFee")) {
    return false;
  }
  return true;
};

export const checkMissingTransactionData = (
  data: TableTransactionsRowProps["data"],
  full: any,
) => {
  if (!full) return true;

  if (data.hasOwnProperty("method")) {
    return false;
  }
  if (data.hasOwnProperty("block")) {
    return false;
  }
  if (data.hasOwnProperty("value")) {
    return false;
  }

  if (data.hasOwnProperty("price")) {
    return false;
  }
  return true;
};
