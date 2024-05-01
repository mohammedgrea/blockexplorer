import { FC, useEffect, useState } from "react";
import { CustomFlowbiteTheme, Tabs } from "flowbite-react";
import DAOVotesTable from "../DAOVotesTable/DAOVotesTable";
//import BubbleChart from "../BubbleChart/BubbleChart";

import {
  ChartPieIcon,
  CheckCircleIcon,
  MinusCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

interface DAOTabsProps {}

const DAOTheme: CustomFlowbiteTheme["tabs"] = {
  base: "flex flex-col gap-2",
  tablist: {
    base: "flex text-center",
    styles: {
      default: "flex-wrap border-b border-gray-200 dark:border-gray-700",
    },
    tabitem: {
      base: "flex items-center justify-center p-4 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 focus:ring-0 focus:outline-none",
      styles: {
        default: {
          base: "rounded-t-lg",
          active: {
            on: "bg-blue-50 text-blue-500 border-b border-blue-500",
            off: "text-be-navy-blue-700 hover:bg-gray-50 hover:text-be-navy-blue-700",
          },
        },
      },
      icon: "mr-2 h-5 w-5",
    },
  },
  tabpanel: "py-3",
};

const DAOTabs: FC<DAOTabsProps> = () => {
  const [voteType, setVoteType] = useState("All");
  const [forceRerender, setForceRerender] = useState("");

  const TabsInfo = [
    {
      title: "All",
      icon: <ChartPieIcon className="w-5 h-5 fill-blue-200 stroke-blue-600" />,
      adresses: 33,
      votes: "4.80M",
      content: <DAOVotesTable />,
    },
    {
      title: "For",
      icon: (
        <CheckCircleIcon className="w-5 h-5 fill-green-100 stroke-green-500" />
      ),
      adresses: 28,
      votes: "4.74M",
      content: <DAOVotesTable />,
    },
    {
      title: "Against",
      icon: <XCircleIcon className="w-5 h-5 fill-red-100 stroke-red-500" />,
      adresses: 4,
      votes: "23",
      content: <DAOVotesTable />,
    },
    {
      title: "Abstain",
      icon: (
        <MinusCircleIcon className="w-5 h-5 fill-be-navy-blue-100 stroke-be-navy-blue-500" />
      ),
      adresses: 0,
      votes: "0",
      content: <DAOVotesTable />,
    },
  ];

  useEffect(() => {
    setForceRerender(voteType);
  }, [voteType, forceRerender]);
  return (
    <Tabs theme={DAOTheme}>
      {TabsInfo.map((info, index) => (
        <Tabs.Item
          key={index}
          title={
            <div
              className="flex flex-col gap-6 pr-4"
              onClick={() => setVoteType(info.title)}
            >
              <div className="flex gap-2">
                {info.icon}
                <h3 className="font-bold">{info.title}</h3>
              </div>
              <div className="flex flex-col items-start w-full text-gray-500 text-sm aria-selected:text-be-navy-blue-700">
                <span>{info.adresses} addresses</span>
                <span>{info.votes} votes</span>
              </div>
            </div>
          }
        >
          <div className="flex flex-col lg:flex-row flex-nowrap ">
            <div
              key={forceRerender}
              className="flex flex-col  lg:w-1/2 border-b border-r-0 lg:border-b-0 lg:py-0 py-6 lg:border-r border-gray-200"
            >
              <h4 className="font-bold text-be-navy-blue-700 pt-5">Overview</h4>
              <div className="w-full flex mt-10 justify-center ">
                {/**<BubbleChart voteType={voteType} />**/}
              </div>
            </div>
            <div className="lg:w-1/2 pl-4 justify-self-center pt-5 ">
              {info.content}
            </div>
          </div>
        </Tabs.Item>
      ))}
    </Tabs>
  );
};

export default DAOTabs;
