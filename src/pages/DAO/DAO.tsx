import { FC } from "react";
import DAOTable from "../../features/DAOTable/DAOTable";
import Wrapper from "../../features/common/Wrapper/Wrapper";
import DAOPaging from "../../features/DAOPaging/DAOPaging";
import DAOFilter from "../../features/DAOFilter/DAOFilter";

import { ArrowDownIcon } from "@heroicons/react/24/outline";
import Container from "../../features/common/Container/Container";

// TODO: this should be deleted after api integration
const firstHead = (
  <div className="flex items-center gap-4">
    Name <ArrowDownIcon className="w-4 h-4" />
  </div>
);
const dummyData = {
  heads: [firstHead, "Proposals", "Holders", "Voters"],
  rows: [
    {
      name: "Eu massa molestie",
      avatar: "https://via.placeholder.com/48",
      online: true,
      status: "Active",
      proposals: 10,
      holders: "34.5k",
      voters: "12.3k",
    },
  ],
};

const duplicatedRows: any = [];

for (let i = 0; i < 10; i++) {
  duplicatedRows.push(dummyData.rows[0]);
}

const DAO: FC = (props) => {
  return (
    <Container className="pt-16 md:pt-28">
      <div className="container space-y-3  md:space-y-6">
        <div className="rounded-lg drop-shadow  w-full">
          <DAOFilter />
        </div>
        <Wrapper>
          <div className="overflow-x-auto">
            <DAOTable heads={dummyData.heads} rows={duplicatedRows} />
          </div>
          <div className="flex justify-center md:justify-end">
            <DAOPaging currentPage={1} />
          </div>
        </Wrapper>
      </div>
    </Container>
  );
};

export default DAO;
