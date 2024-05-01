import Wrapper from "../../features/common/Wrapper/Wrapper";
import DAOTable from "../../features/DAOTable/DAOTable";
import Dropdown from "../../features/common/Dropdown/Dropdown";
import DAOProjectInfo from "../../features/DAOProjectInfo/DAOProjectInfo";
import DAOcard from "../../features/common/DAOcard/DAOcard";
import DAOPaging from "../../features/DAOPaging/DAOPaging";

import {
  DocumentTextIcon,
  PuzzlePieceIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Container from "../../features/common/Container/Container";

const DAOProject = () => {
  const dummyData = {
    heads: ["Proposal", "Governor", "Voters", "Total votes"],
    rows: [
      {
        name: "Eu massa molestie",
        avatar: "https://via.placeholder.com/48",
        online: true,
        status: "Defeated",
        proposals: "Eu et euismod",
        holders: "34.5k",
        voters: "12.3k",
        date: "Aug 23rd, 2023",
        For: "32K",
        Against: "2K",
      },
    ],
  };

  const duplicatedRows: any = [];

  for (let i = 0; i < 10; i++) {
    duplicatedRows.push(dummyData.rows[0]);
  }

  return (
    <Container className="pt-16 md:pt-28">
      <div className="container space-y-3 md:space-y-6">
        <div className="   h-full drop-shadow">
          <DAOProjectInfo />
        </div>
        <div>
          <div className="flex justify-between gap-4 mb-6 flex-wrap lg:flex-nowrap">
            <DAOcard
              icon={<DocumentTextIcon className="h-6 w-6 text-blue-500" />}
              title="Proposals"
              value="11"
            />
            <DAOcard
              icon={<PuzzlePieceIcon className="h-6 w-6 text-blue-500" />}
              title="Holders"
              value="44K"
            />
            <DAOcard
              icon={<UserGroupIcon className="h-6 w-6 text-blue-500" />}
              title="Voters"
              value="64"
            />
          </div>
          <Wrapper>
            <div className="flex justify-between items-center pt-3 ">
              <h3 className="text-xl text-be-navy-blue-700 font-bold">
                Proposals
              </h3>
              <div className="relative inline-block">
                <Dropdown
                  label="Filter"
                  color="grey"
                  size="sm"
                  alignment="right"
                  checkboxVisibility
                  options={[
                    [
                      {
                        value: "Active",
                      },
                      {
                        value: "Pending Execution",
                      },
                      {
                        value: "Executed",
                      },
                      {
                        value: "Defeated",
                      },
                    ],
                  ]}
                />
              </div>
            </div>
            <div className="overflow-x-auto">
              <DAOTable
                heads={dummyData.heads}
                rows={duplicatedRows}
                progressVisibility
              />
            </div>
            <div className="flex justify-center md:justify-end">
              <DAOPaging currentPage={1} />
            </div>
          </Wrapper>
        </div>
      </div>
    </Container>
  );
};

export default DAOProject;
