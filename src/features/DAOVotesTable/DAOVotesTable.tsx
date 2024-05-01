import DAOPaging from "../../features/DAOPaging/DAOPaging";
import DAOTable from "../DAOTable/DAOTable";

// TODO: this should be deleted after api integration
const dummyData = {
  heads: ["Address", "Votes"],
  rows: [
    {
      address: "Eu massa molestie",
      avatar: "https://via.placeholder.com/48",
      votes: "12.3k",
      status: "For",
    },
  ],
};

const duplicatedRows: any = [];

for (let i = 0; i < 10; i++) {
  duplicatedRows.push(dummyData.rows[0]);
}

const DAOVotesTable = () => {
  return (
    <div className="flex md:flex-row flex-col">
      <div className="w-full space-y-6">
        <h3 className="font-bold text-be-navy-blue-700">Voters</h3>
        <DAOTable
          heads={dummyData.heads}
          rows={duplicatedRows}
          forDAOVotes={true}
        />
        <div className="flex justify-center">
          <DAOPaging currentPage={1} />
        </div>
      </div>
    </div>
  );
};

export default DAOVotesTable;
