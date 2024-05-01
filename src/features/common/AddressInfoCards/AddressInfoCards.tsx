import { FC, ReactNode } from "react";
import Dropdown from "../Dropdown/Dropdown";

import { IconCollection } from "../../../assets/constant/svg";

interface Element {
  subtitle: string;
  content?: ReactNode;
}

interface AddressItem {
  title: string;
  elements: Element[];
}

const AddressInfoCards: FC = () => {
  const addressItems: AddressItem[] = [
    {
      title: "Overview",
      elements: [
        {
          subtitle: "ETH BALANCE",
          content: "0.044498671472927066 ETH",
        },
        {
          subtitle: "ETH VALUE",
          content: "$82.45 (@ $1,852.92/ETH)",
        },
        {
          subtitle: "TOKEN HOLDINGS",
          content: (
            <div className="grid grid-cols-12 w-full gap-1">
              <div className="w-full relative inline-block col-span-11">
                <Dropdown
                  color="grey"
                  className="w-full"
                  label="$0.03 (>107 Tokens)"
                  full
                  options={[
                    [
                      {
                        value: "View in full screen",
                        link: "#",
                      },
                      {
                        value: "Print chart",
                        link: "#",
                      },
                    ],
                  ]}
                />
              </div>
              <div className="col-span-1 bg-be-navy-blue-50 border border-be-navy-blue-100 rounded-lg flex items-center justify-center">
                <IconCollection />
              </div>
            </div>
          ),
        },
      ],
    },
    {
      title: "More Info",
      elements: [
        {
          subtitle: "PRIVATE NAME TAGS",
          content: (
            <div className="text-blue-500 font-bold text-sm">
              {"0x4c459d7188016bc58c07f006de033c6cc26f6a0f5f2733772b171cf08760c35b7".substring(
                0,
                20,
              )}
              ...
              <span className="text-be-navy-blue-500 font-sans font-medium ml-1">
                from 28 secs ago
              </span>
            </div>
          ),
        },
        {
          subtitle: "FIRST TXN SENT",
          content: (
            <div className="text-blue-500 font-bold text-sm">
              {"0x4c459d7188016bc58c07f006de033c6cc26f6a0f5f2733772b171cf08760c35b7".substring(
                0,
                20,
              )}
              ...
              <span className="text-be-navy-blue-500 font-sans font-medium ml-1">
                from 812 days 13 hrs ago
              </span>
            </div>
          ),
        },
      ],
    },
    {
      title: "Multi Chain",
      elements: [
        {
          subtitle: "PRIVATE NAME TAGS",
          content: (
            <div className="text-base">
              14 addresses found via
              <span className="ml-1 border border-gray-300 text-xs font-sans font-bold rounded-md bg-white py-1 px-2">
                Blockchain
              </span>
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {addressItems.map((item, index) => (
        <div
          key={index}
          className="bg-white border-[1px] shadow-[0_5px_8px_-3px_rgba(0,0,0,0.04)] border-be-navy-blue-100 p-6 space-y-3 rounded-xl h-full col-span-1"
        >
          <h1 className="font-semibold text-base">{item.title}</h1>
          {item.elements.map((element, index) => (
            <div key={index} className="space-y-1">
              <span className="break-all text-xs  font-regular text-be-navy-blue-300 uppercase">
                {element.subtitle}
              </span>
              <div className="font-regular break-all flex space-x-1 text-be-navy-blue-500">
                {element.content}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AddressInfoCards;
