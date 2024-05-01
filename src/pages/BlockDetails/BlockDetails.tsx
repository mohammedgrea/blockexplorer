import { FC } from "react";

import ConsensInfoTab from "../../features/common/BlockTabs/ConsensInfoTab/ConsensInfoTab";
import MevInfoTab from "../../features/common/BlockTabs/MevInfoTab/MevInfoTab";
import OverviewTab from "../../features/common/BlockTabs/OverviewTab/OverviewTab";
import Button from "../../features/common/Button/Button";
import BeTab from "../../features/common/BlockTabs/BlockTabs";

import iconLeftArrow from "../../assets/icons/iconLeftArrow.svg";
import iconRightArrow from "../../assets/icons/iconRightArrow.svg";

const tabItems = [
  {
    title: "Overview",
    content: <OverviewTab />,
  },
  {
    title: "Consens Info",
    content: <ConsensInfoTab />,
  },
  {
    title: "MEV Info",
    content: <MevInfoTab />,
  },
];

const TransactionInfoPage: FC = () => {
  return (
    <section className="bg-be-navy-blue-50 min-h-screen">
      <div className="container space-y-3 py-8 h-full">
        <div className="border-b py-4 flex items-center space-x-4">
          <p className="font-bold text-xl text-be-navy-blue-700">Block</p>
          <span className="font-medium text-base text-be-navy-blue-300">
            #17412450
          </span>
          <div className=" flex space-x-1">
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
        <BeTab tabItems={tabItems} />
      </div>
    </section>
  );
};

export default TransactionInfoPage;
