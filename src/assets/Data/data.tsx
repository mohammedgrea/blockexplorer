import { TableBlocksRowProps } from "../../features/common/HomeTable/BlocksRow/type";
import { TableTransactionsRowProps } from "../../features/common/HomeTable/TransactionsRow/type";
let blockData: TableBlocksRowProps["data"] = {
  block: 17412450,
  age: 12,
  validator: "0xE7E2cB8c81c10FF191A73FE266788C9Ce62EC754",
  txn: 0.254,
  gasUsed: (
    <>
      <div className="flex gap-1 ">
        <span>11,945,634</span>
        <span className="text-be-navy-blue-300">(40.45%, -19%)</span>
      </div>
      <hr
        className={`h-1 bg-blue-200 relative after:content-[''] after:absolute  after:left-0 after-right-0 after:h-full after:w-1/2 after:bg-blue-500`}
      ></hr>
    </>
  ),
  price: 12,
  gasLimit: 30_000_000,
  baseFee: 1212123,
  reward: 0.01858,
  burntFee: { value: "0.331921", percentage: -20.12 },
};

let TransactionData: TableTransactionsRowProps["data"] = {
  txnHash: "0xE7E2cB8c81c10FF191A73FE266788C9Ce62EC754",
  method: "Execute",
  block: 17412450,
  age: 12,
  from: "0xE7E2cB8c81c10FF191A73FE266788C9Ce62EC754",
  to: "1xE7E2cB8c81c10FF191A73FE266788C9Ce62EC754",
  value: 334244,
  txn: 0.01858,
  price: 322.2,
};

const blocksData: Array<TableBlocksRowProps["data"]> = [];
for (let i = 0; i < 10; i++) {
  blocksData.push(blockData);
}
const TransactionsData: Array<TableTransactionsRowProps["data"]> = [];
for (let i = 0; i < 10; i++) {
  TransactionsData.push(TransactionData);
}

export { TransactionData, TransactionsData, blocksData, blockData };
