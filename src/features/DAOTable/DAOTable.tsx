import { FC } from "react";
import {
  Table,
  TableProps,
  CustomFlowbiteTheme,
  Flowbite,
} from "flowbite-react";

import DAOStyles from "./DAOStyles/DAOStyles";
import Avatar from "../common/Avatar/Avatar";
import Badge from "../common/Badge/Badge";
import DAOprogress from "../common/DAOprogress/DAOprogress";

interface RowData {
  name: string;
  avatar: string;
  online: boolean;
  status: "Defeated" | "Active" | "Executed" | "For" | "Against";
  proposals: number;
  holders: string;
  voters: string;
  date?: string;
  For?: string;
  Against?: string;
  address?: string;
  votes?: string;
}

interface DAOTableProps extends TableProps {
  heads: Array<string | JSX.Element>;
  rows: Array<RowData>;
  progressVisibility?: boolean;
  forDAOVotes?: boolean;
}

const DAOTable: FC<DAOTableProps> = ({
  style,
  progressVisibility,
  forDAOVotes,
  ...props
}) => {
  const tableTheme: CustomFlowbiteTheme = {
    table: {
      body: {
        cell: {
          base: "group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg px-0 py-2",
        },
      },
      head: {
        base: `group/head md:text-base  text-gray-700 dark:text-gray-400 mb-6 ${
          forDAOVotes
            ? "text-be-navy-blue-500 font-bold border-b-0"
            : "border-b border-be-navy-blue-100"
        }`,
        cell: {
          base: `bg-white font-sans font-regular items-center normal-case text-navy-blue-500 text-base first:text-left ${
            forDAOVotes
              ? "text-left"
              : progressVisibility
              ? "text-left last:text-right"
              : "text-right"
          } py-4 w-[200px] ${
            forDAOVotes ? "first:min-w-[200px]" : "first:min-w-[250px]"
          } `,
        },
      },
      row: {
        base: `group/row border-b border-be-navy-blue-100  ${
          forDAOVotes && "last:border-0"
        } ${progressVisibility ? "text-left" : "text-center md:text-right"}`,
      },
    },
    badge: {
      root: {
        base: "flex h-fit items-center gap-1 font-semibold w-fit text-xs font-bold",
        color: {
          info: "text-blue-500 border border-blue-300 bg-blue-200",
          success: "text-green-500 border border-green-300 bg-green-100",
          failure: "text-red-500 border border-red-300 bg-red-100",
        },
      },
    },
  };

  return (
    <Flowbite theme={{ theme: tableTheme }}>
      <Table {...props}>
        <Table.Head>
          {props.heads.map((head, index) => (
            <Table.HeadCell
              key={index}
              className={`${
                head === "Governor" && progressVisibility
                  ? "pl-20"
                  : "pr-2 last:p-0"
              } whitespace-nowrap`}
            >
              {head}
            </Table.HeadCell>
          ))}
        </Table.Head>
        <Table.Body>
          {props.rows.map((row, index) => (
            <Table.Row key={index} className="text-base font-semibold">
              <Table.Cell
                className={`flex gap-3 ${
                  progressVisibility ? "items-end " : "items-center "
                } md:items-center whitespace-nowrap`}
              >
                <Avatar
                  name={row.name}
                  imgSrc={row.avatar}
                  date={row.date}
                  online
                />
                {forDAOVotes && <span>{row.address}</span>}
                {!forDAOVotes && (
                  <Badge
                    color={`${
                      row.status === "Active"
                        ? "info"
                        : row.status === "Defeated"
                        ? "failure"
                        : "success"
                    }`}
                    size="md"
                    status={row.status}
                    className="ml-auto whitespace-nowrap"
                  />
                )}
              </Table.Cell>
              {!forDAOVotes && (
                <Table.Cell
                  className={`${DAOStyles.TextRowStyle} ${
                    progressVisibility
                      ? " pr-10 pl-10  md:pr-5 lg:pr-0 md:pl-20 whitespace-nowrap text-sm md:text-base "
                      : ""
                  } `}
                >
                  {row.proposals}{" "}
                </Table.Cell>
              )}
              {!forDAOVotes && (
                <Table.Cell
                  className={`text-base font-semibold ${DAOStyles.TextRowStyle}  whitespace-nowrap`}
                >
                  {progressVisibility ? (
                    <DAOprogress
                      progress={0}
                      For={row.For}
                      Against={row.Against}
                    />
                  ) : (
                    row.holders
                  )}
                </Table.Cell>
              )}
              {forDAOVotes && (
                <Table.Cell>
                  <div className="flex md:justify-start justify-between md:gap-12 gap-2">
                    <span className=" whitespace-nowrap text-base font-semibold">
                      {row.votes}
                    </span>
                    <Badge
                      color={`${
                        row.status === "For"
                          ? "success"
                          : row.status === "Against"
                          ? "failure"
                          : "success"
                      }`}
                      size="md"
                      status={row.status}
                    />
                  </div>
                </Table.Cell>
              )}
              {!forDAOVotes && (
                <Table.Cell
                  className={`${DAOStyles.TextRowStyle} text-right text-sm md:text-base font-semibold whitespace-nowrap`}
                >
                  {row.voters}
                </Table.Cell>
              )}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Flowbite>
  );
};

export default DAOTable;
