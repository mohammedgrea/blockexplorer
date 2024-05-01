import { FC } from "react";
import { Table, TableProps as FlowbiteTableProps } from "flowbite-react";

interface TableProps extends FlowbiteTableProps {}

const HomeTable: FC<TableProps> = (props) => {
  return <Table hoverable className=" w-full " {...props}></Table>;
};

export default HomeTable;
