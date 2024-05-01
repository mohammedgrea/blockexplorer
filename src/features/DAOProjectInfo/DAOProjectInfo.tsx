import Button from "../common/Button/Button";
import Badge from "../common/Badge/Badge";
// import BEConnectWallet from "../common/BEConnectWallet/BEConnectWallet";
import BeTab from "../common/BlockTabs/BlockTabs";
import Avatar from "../common/Avatar/Avatar";
import Wrapper from "../common/Wrapper/Wrapper";
import DAOcontactCard from "../DAOcontactCard/DAOcontactCard";

import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { IconTwitter } from "../../assets/constant/svg";

const Params = {
  "Proposal threshold": {
    label: "Proposal threshold",
    value: "1M",
  },
  "Quorum needed": {
    label: "Quorum needed",
    value: "120.3M",
  },
  "Proposal delay": {
    label: "Proposal delay",
    value: "3 days",
  },
  "Voting period": {
    label: "Voting period",
    value: "14 days",
  },
};

const Info = {
  Governor: {
    label: "Governor",
    value: "0xE7E2cB8c81c10FF191A73FE266788C9Ce62EC754",
  },
  Token: {
    label: "Token",
    value: "0xE7E2cB8c81c10FF191A73FE266788C9Ce62EC754",
  },
  Timelock: {
    label: "Timelock",
    value: "0xE7E2cB8c81c10FF191A73FE266788C9Ce62EC754",
  },
};

const DAOProjectInfo = () => {
  const tabItems = [
    {
      title: "About",
      content: (
        <div className="text-be-navy-blue-700 space-y-9 mt-9">
          <h5>
            Sit elementum orci pharetra tristique at netus sapien. Pellentesque
            platea non venenatis.
          </h5>
          <div className="flex md:gap-10 gap-4">
            <a
              href="https://projectname.com"
              target="_blank"
              className="flex items-center gap-2"
            >
              <GlobeAltIcon className="w-6 h-6" />
              <span>projectname.com</span>
            </a>
            <a href="/" target="_blank" className="flex items-center gap-2">
              <IconTwitter />
              <span>@projectname</span>
            </a>
          </div>
          <div className="flex items-end mb-auto gap-2">
            <Badge status="ERC20" color="light" size="sm" />
            <Badge status="1,000,874 Supply" color="light" size="sm" />
          </div>
        </div>
      ),
    },
    {
      title: "Description",
      content: (
        <p className="text-be-navy-blue-700 text-sm">
          Eu massa molestie at congue blandit cursus dignissim. Donec in lorem
          egestas venenatis nulla non sed. Ac sit vestibulum fringilla imperdiet
          sagittis aenean nunc feugiat non. At adipiscing congue nibh erat
          aenean posuere. Pretium pulvinar non morbi fermentum sagittis interdum
          aliquam pretium vitae. Suscipit non tortor faucibus mi turpis lacus.
          Suspendisse felis vulputate scelerisque vel cras urna ornare amet
          luctus. At quis molestie est integer aliquet. Nullam id turpis sed
          ornare purus. Nec tortor id massa ut cursus arcu erat diam. Enim donec
          eget venenatis nam amet orci leo mattis. Neque vitae faucibus urna leo
          volutpat viverra eros. Ornare gravida fames Sem lorem enim proin velit
          diam proin etiam vulputate. Diam aliquam venenatis viverra vestibulum
          proin eget. Et nec ornare imperdiet donec consectetur lorem aliquam
          risus commodo. Ac enim donec adipiscing tristique ac pharetra velit
          leo. Pretium nullam ut fringilla vitae. Diam mi pellentesque
          adipiscing eget amet ut ultrices id. Lobortis nulla est ultricies in
          purus mattis. Amet magna erat odio risus nec sollicitudin eget felis
          in. Habitasse libero phasellus massa metus. Quis consectetur varius
          sed fames volutpat egestas.
        </p>
      ),
    },
    {
      title: "Contract Parameters",
      content: (
        <div className="flex md:flex-row flex-col gap-4">
          <DAOcontactCard title="Parameters" params={Params} />
          <DAOcontactCard title="Title here" params={Info} icon={true} />
        </div>
      ),
    },
  ];
  return (
    <Wrapper>
      <div className="p-2 py-4 space-y-5">
        <div className="flex md:flex-row flex-col justify-between items-center">
          <div className="flex justify-start items-center gap-2 w-full md:mb-0 mb-5">
            <Avatar imgSrc="https://via.placeholder.com/64" size="xl" />
            <h3 className="text-xl font-bold text-be-navy-blue-700">
              Project Name
            </h3>
          </div>
          <div className="flex md:flex-row flex-col md:justify-end justify-center md:items-center items-start gap-2 w-full">
            {/* <BEConnectWallet /> */}
            <Button
              color="red"
              label="Create New Proposal"
              className="md:w-fit w-full"
            />
          </div>
        </div>
        <div className="md:h-[253px] w-full">
          <BeTab tabItems={tabItems} />
        </div>
      </div>
    </Wrapper>
  );
};
export default DAOProjectInfo;
