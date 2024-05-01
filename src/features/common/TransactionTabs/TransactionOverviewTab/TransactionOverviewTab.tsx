import { FC, ReactNode } from "react";
import { Flowbite, Badge, CustomFlowbiteTheme } from "flowbite-react";

import { copyToClipboard } from "../../../../helpers/copyToClipboard";
import { TransactionData } from "../../../../assets/Data/data";

import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";

import iconAdjustments from "../../../../assets/icons/iconAdjustments.svg";
import iconQuestionMark from "../../../../assets/icons/iconQuestionMark.svg";

interface TabItem {
  steps: {
    title: string;
    content: ReactNode;
  }[];
}

const TransactionOverviewTab: FC = () => {
  const contentTabTheme: CustomFlowbiteTheme = {
    badge: {
      root: {
        base: "flex h-fit items-center justify-center gap-1 font-semibold",
        color: {
          success:
            "text-xs font-bold text-green-500 border-2 border-green-300 bg-green-100 px-2 ",
        },
        size: {
          sm: "px-2",
        },
      },
    },
    progress: {
      base: "w-full bg-blue-200 rounded-full",
    },
  };

  const tabItems: TabItem[] = [
    {
      steps: [
        {
          title: "Transaction Hash:",
          content: (
            <div className="w-full">
              <span className="font-sans font-medium text-be-navy-blue-700 break-words">
                {TransactionData.txnHash}
              </span>
            </div>
          ),
        },
        {
          title: "Status:",
          content: (
            <div className="col-span-2 flex ">
              <div className="col-auto">
                <Badge color="success" size="sm">
                  Success
                </Badge>
              </div>
            </div>
          ),
        },
        {
          title: "Block:",
          content: (
            <div className="col-span-2">
              <span className=" flex gap-1 items-center font-sans font-medium break-all text-be-navy-blue-700">
                <img src={iconAdjustments} alt="adjustments icon" />
                {TransactionData.block}
                <span className="border border-be-navy-blue-700 px-1 font-bold rounded text-xs">
                  10 Block Confirmation
                </span>
              </span>
            </div>
          ),
        },
        {
          title: "Timestamp:",
          content: (
            <div className="col-span-2">
              <span className="font-sans font-medium text-be-navy-blue-700 ">
                {TransactionData.age} mins ago (Jun-07-2023 01:29:23 PM +UTC)
              </span>
            </div>
          ),
        },
      ],
    },

    {
      steps: [
        {
          title: "From:",
          content: (
            <div className="flex gap-2 items-center">
              <div className="break-all flex gap-1 font-medium  text-blue-500">
                {TransactionData.from}
                <div
                  className="cursor-pointer text-be-navy-blue-100 hover:text-be-navy-blue-700"
                  onClick={() => copyToClipboard(TransactionData.from)}
                >
                  <DocumentDuplicateIcon className="text-be-navy-blue-100 w-4 h-4" />
                </div>
              </div>
            </div>
          ),
        },
        {
          title: "To:",
          content: (
            <div className="flex gap-2 items-center">
              <div className="break-all flex gap-1 font-medium  text-blue-500">
                {TransactionData.to}
                <div
                  className="cursor-pointer text-be-navy-blue-100 hover:text-be-navy-blue-700"
                  onClick={() => copyToClipboard(TransactionData.to)}
                >
                  <DocumentDuplicateIcon className="text-be-navy-blue-100 w-4 h-4" />
                </div>
              </div>
            </div>
          ),
        },
      ],
    },
    {
      steps: [
        {
          title: "Value:",
          content: (
            <div className="col-span-2 flex items-center ">
              <span className="mr-1">{TransactionData.value} ETH</span>
              <span className="text-be-navy-blue-300">
                (${TransactionData.price})
              </span>
            </div>
          ),
        },
        {
          title: "Transaction Fee:",
          content: (
            <div className="col-span-2 flex items-center ">
              <span className="mr-1">0.331921 ETH</span>
              <span className="text-be-navy-blue-300">($0.89)</span>
            </div>
          ),
        },
        {
          title: "Gas Price:",
          content: (
            <div className="flex md:flex-row flex-col md:items-center items-start">
              <span className="mr-1">22.690523045 Gwei</span>
              <span className="text-be-navy-blue-300">
                (0.000000022690523045 ETH)
              </span>
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <Flowbite theme={{ theme: contentTabTheme }}>
      <div className="bg-white border border-gray-300 rounded-xl w-full h-full">
        {tabItems.map((item, itemIndex) => (
          <div
            key={itemIndex}
            className={`p-4 grid grid-cols-1 gap-y-8 md:py-8 md:px-6 py-4 px-3 ${
              itemIndex === tabItems.length - 1
                ? ""
                : "border-b border-gray-300"
            }`}
          >
            {item.steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col md:grid md:grid-cols-3 gap-2 items-start justify-between"
              >
                <div className="flex items-center space-x-2 col-span-1">
                  <img src={iconQuestionMark} alt="Question Mark icon" />
                  <span className="text-be-navy-blue-300 font-sans font-medium whitespace-nowrap">
                    {step.title}
                  </span>
                </div>
                <span className="text-be-navy-blue-700 w-full ml-2">
                  {step.content}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Flowbite>
  );
};

export default TransactionOverviewTab;
