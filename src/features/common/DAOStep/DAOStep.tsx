import React, { FC } from "react";

export interface DAOStepProps {
  icon: JSX.Element;
  color: "darkBlue" | "lightBlue" | "transparent";
  last?: boolean;
}

const DAOStep: FC<DAOStepProps> = ({ icon, last = false, color }) => {
  return (
    <div className="flex items-center gap-2 md:gap-6 ">
      <div
        className={`flex justify-center items-center min-w-[32px] min-h-[32px] lg:min-w-[42px] lg:w-[42px] lg:min-h-[42px] h-[32px] lg:h-[42px] ${
          color === "darkBlue"
            ? "bg-blue-600"
            : color === "lightBlue"
            ? "bg-blue-200 border border-blue-300"
            : "bg-transparent border border-be-navy-blue-300"
        } rounded-lg`}
      >
        {icon}
      </div>
      {last ? null : (
        <hr className="bg-blue-600 h-[2px] w-full min-w-[90px] lg:min-w-[140px] max-w-[300px]" />
      )}
    </div>
  );
};

export default DAOStep;
