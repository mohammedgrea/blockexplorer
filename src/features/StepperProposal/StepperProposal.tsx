import React, { FC } from "react";
import DAOStep from "../common/DAOStep/DAOStep";
import Avatar from "../common/Avatar/Avatar";
import { copyToClipboard } from "../../helpers/copyToClipboard";
import { DAOStepProps } from "../common/DAOStep/DAOStep";

import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import iconCube from "../../assets/icons/iconCube.svg";

interface StepperProposalProps extends DAOStepProps {
  blockNumber?: number;
  title: string;
  date?: string;
  timeAgo?: string;
}
const StepperProposal: FC<StepperProposalProps> = ({
  blockNumber,
  title,
  date,
  timeAgo,
  ...props
}) => {
  return (
    <div className="ml-0 md:ml-2 my-2 space-y-3 md:space-y-6">
      <DAOStep color={props.color} icon={props.icon} last={props.last} />
      <div>
        <div>
          {date && (
            <span className="font-medium text-xs text-gray-500">{date}</span>
          )}
          <h4
            className={`${
              props.color === "transparent"
                ? "text-be-navy-blue-300"
                : props.color === "lightBlue"
                ? "text-blue-500"
                : "text-blue-600"
            } font-semibold text-sm md:text-base whitespace-nowrap  `}
          >
            {title}
          </h4>
          {timeAgo && (
            <span className="text-xs text-gray-500 font-medium -mt-2 whitespace-nowrap">
              {timeAgo}
            </span>
          )}
          {!timeAgo && props.color !== "transparent" && (
            <Avatar
              imgSrc="https://via.placeholder.com/48"
              name="gundamdweeb.eth"
              size="xs"
            />
          )}
        </div>
        {blockNumber && (
          <>
            <hr className="max-w-[88px] my-2" />
            <div className="flex gap-1 items-center text-xs text-gray-500 font-medium">
              <img src={iconCube} alt="" />
              {blockNumber}
              <div
                className="cursor-pointer"
                onClick={() => copyToClipboard(blockNumber.toString())}
              >
                <DocumentDuplicateIcon className="text-be-navy-blue-100 w-4 h-4 hover:text-be-navy-blue-700" />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default StepperProposal;
