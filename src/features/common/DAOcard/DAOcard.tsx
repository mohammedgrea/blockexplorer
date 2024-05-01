import React, { FC } from "react";
import Wrapper from "../Wrapper/Wrapper";
type DAOcardProps = {
  icon: JSX.Element;
  title: string;
  value: string;
};

const DAOcard: FC<DAOcardProps> = ({ icon, title, value }) => {
  return (
    <div className="w-full min-w-[300px]">
      <Wrapper>
        <div className="flex flex-col gap-2 p-1 pt-4">
          {icon}
          <div className="flex justify-between items-end">
            <span className="uppercase text-xs">{title}</span>
            <span className="text-4xl font-medium ">{value}</span>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default DAOcard;
