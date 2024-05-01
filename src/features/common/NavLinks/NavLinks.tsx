import { useDispatch } from "react-redux";
import Dropdown from "../Dropdown/Dropdown";
import Link from "../Link/Link";
import { closeNavBar } from "../../../redux/reducers/toggleSlice";

const NavLinks = () => {
  const location = window.location;
  const dispatch = useDispatch();
  const pages = [
    {
      label: (
        <span
          onClick={() => dispatch(closeNavBar())}
          className={`text-sm  block  ml-1 md:ml-0  ${
            location.pathname === "/" ? " text-red-500 font-bold" : ""
          } `}
        >
          Home
        </span>
      ),
      to: "/",
    },
    {
      label: (
        <div className="relative md:w-full md:!pr-0 !pr-4">
          <Dropdown
            className="md:w-[230px] w-full "
            alignment="left"
            full
            types="text"
            label={
              <span
                className={`text-sm md:pl-0 md:py-0 pl-3 py-2 ${
                  location.pathname === "/transactions" ||
                  location.pathname === "/blocks" ||
                  location.pathname === "/pending-transactions"
                    ? " text-red-500 font-bold"
                    : " font-medium "
                } `}
              >
                Blockchain
              </span>
            }
            borderTop
            options={[
              [
                {
                  value: "Transactions",
                  link: "/transactions",
                },
                {
                  value: "Pending Transactions",
                  link: "pending-transactions",
                },
              ],
              [
                {
                  value: "View Blocks",
                  link: "/blocks",
                },
              ],
            ]}
          />
        </div>
      ),
      to: "/dropdown",
    },
    {
      label: (
        <span
          onClick={() => dispatch(closeNavBar())}
          className={`text-sm w-full ml-1 md:ml-0 ${
            location.pathname === "/dao" ? "text-red-500 font-bold" : ""
          } `}
        >
          DAO
        </span>
      ),
      to: "/dao",
    },
    {
      label: (
        <span
          onClick={() => dispatch(closeNavBar())}
          className={`text-sm w-full ml-1 md:ml-0 ${
            location.pathname === "//Create-new-proposal" ? "text-red-500 font-bold" : ""
          } `}
        >
          Create new proposal
        </span>
      ),
      to: "/Create-new-proposal",
    },

  ];
  return (
    <ul className="flex md:flex-row flex-col lg:gap-6 md:gap-2  md:items-center md:w-fit w-full">
      {pages.map((page, index) => {
        return <Link key={index} to={page.to} label={page.label} />;
      })}
    </ul>
  );
};

export default NavLinks;
