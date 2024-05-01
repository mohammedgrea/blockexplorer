import React, { FC, useRef, useState, ReactNode } from "react";
import { Flowbite, Badge, CustomFlowbiteTheme, Progress } from "flowbite-react";

interface TabItem {
  steps: {
    title: string;
    content: ReactNode;
  }[];
}

const OverviewTab: FC = () => {
  const [text, setText] = useState("Hello world");
  const textRef = useRef<HTMLInputElement>(null);

  const handleCopyClick = () => {
    if (textRef.current) {
      const valueToCopy = text;
      copyToClipboard(valueToCopy);
    }
  };

  const copyToClipboard = (value: string) => {
    const tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const contentTabTheme: CustomFlowbiteTheme = {
    badge: {
      root: {
        base: "flex h-fit items-center justify-center gap-1 font-semibold",
        color: {
          success:
            "text-green-500 border-2 border-green-300 bg-green-100 px-2 rounded-full",
        },
        size: {
          sm: "px-4",
        },
      },
    },
    progress: {
      base: "w-full bg-blue-200 rounded-full",
    },
  };

  // Data for each item
  const tabItems: TabItem[] = [
    {
      steps: [
        {
          title: "Block Height:",
          content: (
            <div className="col-span-2">
              <span className="font-sans font-medium break-all">17412450</span>
            </div>
          ),
        },
        {
          title: "Status:",
          content: (
            <div className="col-span-2 flex ">
              <div className="col-auto">
                <Badge color="success" size="sm">
                  Finalized
                </Badge>
              </div>
            </div>
          ),
        },
        {
          title: "Timestamp:",
          content: (
            <div className="col-span-2">
              <span className="font-sans font-medium break-all">
                31 secs ago (Jun-07-2023 07:42:35 AM +UTC)
              </span>
            </div>
          ),
        },
        {
          title: "Proposed On:",
          content: (
            <div className="col-span-2">
              <span className="font-sans font-medium break-all">
                Block proposed on slot
                <span className="text-blue-500"> 6608311, </span>
                epoch
                <span className="text-blue-500"> 206509</span>
              </span>
            </div>
          ),
        },
        {
          title: "Transactions:",
          content: (
            <div className="col-span-2">
              <span className="font-sans font-medium text-blue-500 break-all">
                122 transactions
                <span className="text-black"> and </span>
                34 contract internal transactions
                <span className="text-black"> in this block</span>
              </span>
            </div>
          ),
        },
        {
          title: "Withdrawals:",
          content: (
            <div className="col-span-2">
              <span className="font-sans font-medium text-blue-500 break-all">
                16 withdrawals
                <span className="text-black"> in this block </span>
              </span>
            </div>
          ),
        },
      ],
    },
    // Step two
    {
      steps: [
        {
          title: "Free Recipient:",
          content: (
            <div className="col-span-2 flex gap-2 items-center">
              <div className="relative">
                <span className="font-sans font-medium text-blue-500 break-all">
                  rsync-builder
                </span>
                <input
                  ref={textRef}
                  type="text"
                  value={text}
                  readOnly
                  onChange={handleInputChange}
                  className="absolute hidden"
                />
              </div>
              <button
                onClick={handleCopyClick}
                className="text-be-navy-blue-200 hover:text-be-navy-blue-500 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                  />
                </svg>
              </button>
              <span className="break-all"> in 12 secs</span>
            </div>
          ),
        },
        {
          title: "Block Reward:",
          content: (
            <div className="col-span-2 flex gap-2 items-center">
              <span className="break-all">
                0.025650921996453759 ETH (0 + 0.239863679062154729 -
                0.21421275706570097)
              </span>
            </div>
          ),
        },
        {
          title: "Total Difficulty:",
          content: (
            <div className="col-span-2 flex gap-2 items-center">
              <span className="break-all">58,750,003,716,598,352,816,469</span>
            </div>
          ),
        },
        {
          title: "Size:",
          content: (
            <div className="col-span-2 flex gap-2 items-center">
              <span className="break-all">136,638 bytes</span>
            </div>
          ),
        },
      ],
    },
    // step number three
    {
      steps: [
        {
          title: "Gas Used:",
          content: (
            <div className="col-span-2 flex items-center space-x-2">
              <span className="basis-1/12 break-all">17412450</span>
              <div className="basis-2/12">
                <Progress color="red" progress={25} />
              </div>
              <span className="text-red-600 font-sans font-light basis-4/12 break-all">
                -25% Cas Target
              </span>
            </div>
          ),
        },
        {
          title: "Gas Limit:",
          content: (
            <div className="col-span-2">
              <span className="break-all">30.000.000</span>
            </div>
          ),
        },
        {
          title: "Base Fee Per Gas:",
          content: (
            <div className="col-span-2">
              <span className="break-all">
                0.000000019110586078 ETH (19.110586078 Gwei)
              </span>
            </div>
          ),
        },
        {
          title: "Burnt Fees:",
          content: (
            <div className="col-span-2">
              <span className="break-all">
                0.000000019110586078 ETH (19.110586078 Gwei)
              </span>
            </div>
          ),
        },
        {
          title: "Extra Data:",
          content: (
            <div className="col-span-2">
              <span className="break-all">
                rsync-builder.xyz (Hex:0x7273796e632d6275696c6465722e78797a)
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
            className={`p-4 grid grid-cols-1 gap-y-8 py-8 px-6 ${
              itemIndex === tabItems.length - 1
                ? ""
                : "border-b border-gray-300"
            }`}
          >
            {item.steps.map((step, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-2 items-start justify-between"
              >
                <div className="flex items-center space-x-2 col-span-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 stroke-be-navy-blue-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                    />
                  </svg>
                  <span className="text-be-navy-blue-300 font-sans font-medium">
                    {step.title}
                  </span>
                </div>
                {step.content}
              </div>
            ))}
          </div>
        ))}
      </div>
    </Flowbite>
  );
};

export default OverviewTab;
