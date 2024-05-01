import { FC } from "react";
import TransactionOverviewTab from "../../features/common/TransactionTabs/TransactionOverviewTab/TransactionOverviewTab";
import State from "../../features/common/TransactionTabs/StateTab/State";
import Button from "../../features/common/Button/Button";
import BeTab from "../../features/common/BlockTabs/BlockTabs";

import iconLeftArrow from "../../assets/icons/iconLeftArrow.svg";
import iconRightArrow from "../../assets/icons/iconRightArrow.svg";

const TransactionDetails: FC = () => {
  const tabItems = [
    {
      title: "Overview",
      content: <TransactionOverviewTab />,
    },
    {
      title: "State",
      content: <State />,
    },
  ];

  return (
    <section className="overflow-x-auto">
      <div className="container space-y-3 py-8 h-full">
        <div className="border-b py-4 flex items-center md:justify-normal justify-between space-x-4">
          <p className="font-bold text-xl text-be-navy-blue-700 ">
            Transaction Details
          </p>
          <div className="flex space-x-1">
            <Button
              size="xs"
              color="lightRedTransparent"
              icon={<img src={iconLeftArrow} alt="card info icon" />}
            />
            <Button
              size="xs"
              color="lightRedTransparent"
              icon={<img src={iconRightArrow} alt="right arrow icon" />}
            />
          </div>
        </div>
        <div>
          <BeTab tabItems={tabItems} />
        </div>
      </div>
    </section>
  );
};

export default TransactionDetails;
