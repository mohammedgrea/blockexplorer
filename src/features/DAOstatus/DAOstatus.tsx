import React from "react";
import StepperProposal from "../../features/StepperProposal/StepperProposal";

import {
  BoltIcon,
  ClockIcon,
  MegaphoneIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import iconPlay from "../../assets/icons/iconPlay.svg";

const DAOstatus = () => {
  return (
    <div className="flex flex-wrap gap-4 w-full">
      <StepperProposal
        color="darkBlue"
        icon={<PlusIcon className="h-4 w-4 text-blue-200" />}
        title="Draft created"
        date="Wed Aug 23 11:31 am"
      />
      <StepperProposal
        color="darkBlue"
        icon={<MegaphoneIcon className="h-4 w-4 text-blue-200" />}
        blockNumber={17412450}
        title="Draft created"
        date="Wed Aug 23 11:31 am"
      />
      <StepperProposal
        color="lightBlue"
        icon={<img src={iconPlay} alt="" />}
        blockNumber={17412450}
        title="Draft created"
        date="Wed Aug 23 11:31 am"
        timeAgo="2 day ago"
      />
      <StepperProposal
        color="transparent"
        icon={<XMarkIcon className="h-4 w-4 text-be-navy-blue-300" />}
        title="End voting period"
        date="Wed Aug 23 11:31 am"
        timeAgo="2 day ago"
      />
      <StepperProposal
        color="transparent"
        icon={<ClockIcon className="h-4 w-4 text-be-navy-blue-300" />}
        title="Queue proposal"
      />
      <StepperProposal
        color="transparent"
        icon={<BoltIcon className="h-4 w-4 text-be-navy-blue-300" />}
        title="Execute proposal"
        last
      />
    </div>
  );
};

export default DAOstatus;
