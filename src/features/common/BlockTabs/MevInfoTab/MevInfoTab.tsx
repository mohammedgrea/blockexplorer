import { FC, ReactNode } from "react";
import { Flowbite, CustomFlowbiteTheme } from "flowbite-react";

interface TabItem {
  steps: {
    title: string;
    content?: ReactNode;
  }[];
}

const ConsensInfoTab: FC = () => {
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
          title: "Proposer Free Recipient:",
          content: (
            <span className="break-all text-blue-500">
              0x4c459d7188016bc58c07f006de033c6cc26f6a0f5f
              <span className="text-black ">
                {" "}
                (Lido: Execution Layer Rewards Vault)
              </span>
            </span>
          ),
        },
        {
          title: "MEV Reward:",
          content: (
            <span className="text-black  break-all">
              0.025601952200453759 ETH
            </span>
          ),
        },
        {
          title: "MEV Payout Txn Hash:",
          content: (
            <span className="text-blue-500  break-all">
              0x4c459d7188016bc58c07f006de033c6cc26f6a0f5f2733772b171cf08760c35b7
            </span>
          ),
        },
      ],
    },
  ];

  return (
    <Flowbite theme={{ theme: contentTabTheme }}>
      <div className="bg-white border border-gray-300 rounded-xl w-full">
        {tabItems.map((item, itemIndex) => (
          <div
            key={itemIndex}
            className={`p-4 grid grid-cols-1 gap-y-8 py-8 px-6 ${
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
                  <span className="text-be-navy-blue-300 font-sans font-medium whitespace-nowrap">
                    {step.title}
                  </span>
                </div>
                <div className="col-span-2 font-medium">{step.content}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Flowbite>
  );
};

export default ConsensInfoTab;
