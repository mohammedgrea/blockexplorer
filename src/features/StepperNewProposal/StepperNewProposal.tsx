import React, { FC } from "react";
import { CheckIcon } from "@heroicons/react/24/outline";

interface StepperNewProposalProps extends React.HTMLAttributes<HTMLDivElement> {
  step: number;
}

const StepperNewProposal: FC<StepperNewProposalProps> = ({ step }) => {
  const StepperItem = [
    { title: "Connexion" },
    { title: "Proposal" },
    { title: "Actions" },
    { title: "Preview" },
  ];

  return (
    <div className="flex">
      {StepperItem.map((item, index) => (
        <div className="flex" key={index}>
          {index !== 0 && (
            <div className="relative w-[30px] md:w-[70px] h-[2px] rounded-full bg-gray-200 mt-[10%] mx-1 md:mx-4 ">
              <hr
                className={`absolute left-0 top-1/2 -translate-y-1/2 h-[2px] rounded-full transition-all duration-300 ${
                  step >= index + 1 ? "w-full" : "w-0"
                }  bg-blue-700`}
              />
            </div>
          )}
          <div className="flex flex-col gap-2 items-center">
            <div
              className={`flex justify-center items-center w-[24px] md:w-[28px] h-[24px] md:h-[28px] ${
                step < index + 1
                  ? "bg-transparent border border-be-navy-blue-300"
                  : step > index + 1
                  ? "bg-blue-600"
                  : "text-blue-500 bg-blue-200 border border-blue-300"
              } transition-all duration-300 rounded`}
            >
              {step > index + 1 ? (
                <CheckIcon className="h-4 w-4 text-white" />
              ) : (
                <span className="text-[10px]">{index + 1}</span>
              )}
            </div>
            <h4
              className={`font-medium text-xs md:text-sm ${
                step < index + 1 ? "text-be-navy-blue-300" : "text-blue-500"
              }`}
            >
              {item.title}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StepperNewProposal;
