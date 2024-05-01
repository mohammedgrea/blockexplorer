import { FC, useState } from "react";

import Button from "../../common/Button/Button";

import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

const ProposalConditions = [
  "Wallet Connected",
  "Logged in",
  "Correct chain selected",
  "You have 1 voting power. You’ve reached the proposal threshold!",
];

interface ConnectWalletProposalProps {
  onClick?: () => void;
}
const ConnectWalletProposal: FC<ConnectWalletProposalProps> = () => {
  const [isConnected] = useState(true);

  return (
    <>
      <div className="md:px-4 md:py-16 py-5 px-0 ">
        <ul className="space-y-1 md:space-y-4">
          {ProposalConditions.map((conditions, index) => (
            <li key={index} className="flex items-center gap-4">
              {" "}
              {isConnected === false ? (
                <div className="sm:w-fit xs:w-full">
                  <XCircleIcon className="w-6 h-6 fill-red-100 stroke-red-500" />
                </div>
              ) : (
                <div className="sm:w-fit xs:w-full">
                  <CheckCircleIcon className="w-6 h-6 fill-green-100 stroke-green-500" />
                </div>
              )}
              <span className="text-be-navy-blue-500 break-words md:text-base text-xs">
                {conditions}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-6 md;mt-9">
          <Button label="Switch Wallet" color={"white"} />
        </div>
      </div>

      <div className=""></div>
    </>
  );
};

export default ConnectWalletProposal;
