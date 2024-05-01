import { FC, ReactNode } from "react";
import { Table } from "flowbite-react";

import iconArrowTrendingUp from "../../../../assets/icons/iconArrowTrendingUp.svg";
import iconArrowTrendingdown from "../../../../assets/icons/iconArrowTrendingDown.svg";

interface StateItem {
  data: {
    address: string | ReactNode;
    value: string | ReactNode;
    befor: ReactNode;
    after: ReactNode;
    stateDiffrence: ReactNode;
  };
}

const State: FC = () => {
  const tabItems: Array<StateItem["data"]> = [
    {
      address: (
        <div className="text-sm font-medium  text-blue-500">
          0x4675C7...f3b0a263
        </div>
      ),
      befor: (
        <div className="flex flex-col gap-1 text-sm text-be-navy-blue-700 font-medium ">
          0.570536910506331823 Eth
        </div>
      ),
      value: "(Fee Recipient: 0x467...263)",
      after: (
        <div className="flex flex-col gap-1 text-sm text-be-navy-blue-700 font-medium ">
          0.570536910506331823 Eth
        </div>
      ),
      stateDiffrence: (
        <div className="flex gap-1 text-xs text-be-navy-blue-700 font-medium ">
          <img src={iconArrowTrendingUp} alt="Arrow trending UP icon" />
          0.160187000589429334
        </div>
      ),
    },

    {
      address: (
        <div className="text-sm font-medium  text-blue-500">
          0x4675C7...f3b0a263
          <span className="text-xs font-bold ml-1 px-1 py-0.5 border border-be-navy-blue-300 text-be-navy-blue-700 rounded">
            {" "}
            Miner
          </span>
        </div>
      ),
      befor: (
        <div className="flex flex-col gap-1 text-sm text-be-navy-blue-700 font-medium ">
          0.570536910506331823 Eth
          <span className="rounded border border-be-navy-blue-100 text-xs text-be-navy-blue-700 font-bold  px-2 w-fit ">
            Nonce: 317747
          </span>
        </div>
      ),
      value: "(builder0x69)",
      after: (
        <div className="flex flex-col gap-1 text-xs text-be-navy-blue-700 font-medium ">
          0.570536910506331823 Eth
          <span className="rounded border border-be-navy-blue-100  text-xs text-be-navy-blue-700 font-bold  px-2 w-fit ">
            Nonce: 317747
          </span>
        </div>
      ),
      stateDiffrence: (
        <div className="flex gap-1 text-sm text-be-navy-blue-700 font-medium ">
          <img src={iconArrowTrendingdown} alt="Arrow trending UP icon" />
          0.160187000589429334
        </div>
      ),
    },
  ];

  return (
    <div className="bg-white border border-gray-300 rounded-xl w-full h-full px-6 md:mb-28">
      <div>
        <span className="flex gap-1  text-sm text-be-navy-blue-700  py-5">
          <span className="flex items-center justify-center bg-be-nay-blue-50 text-xs font-medium px-1.5  rounded border border-be-navy-blue-100  h-[18px]">
            Advanced
          </span>
          <p>
            A set of information that represents the current state is updated
            when a transaction takes place on the network. The below is a
            summary of those changes :
          </p>
        </span>
      </div>
      <div className="overflow-x-auto	">
        <Table className="w-full pl-2 whitespace-nowrap">
          <Table.Head className="w-full">
            <Table.HeadCell>Adress</Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
            <Table.HeadCell>Befor</Table.HeadCell>
            <Table.HeadCell>After</Table.HeadCell>
            <Table.HeadCell>State Difference</Table.HeadCell>
          </Table.Head>
          <Table.Body>
            {tabItems.map((item, index) => (
              <Table.Row key={index}>
                <Table.Cell>{item.address}</Table.Cell>
                <Table.Cell className="text-sm font-medium  text-be-navy-blue-700">
                  {item.value}
                </Table.Cell>
                <Table.Cell>{item.befor}</Table.Cell>
                <Table.Cell className="flex gap-1">{item.after}</Table.Cell>
                <Table.Cell>{item.stateDiffrence}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default State;
