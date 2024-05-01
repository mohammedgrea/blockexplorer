import { FC } from "react";
import { Checkbox, CheckboxProps, Label } from "flowbite-react";

import Searchbar from "../common/Searchbar/Searchbar";
import Wrapper from "../common/Wrapper/Wrapper";

interface DAOFilterProps extends CheckboxProps {}

const filters = ["All", "With Active Proposal", "With Right to Vote"];

const DAOFilter: FC<DAOFilterProps> = ({ ...props }) => {
  return (
    <Wrapper title="Explorer DAO">
      <div className="flex items-center gap-12 ">
        <div className="flex flex-col lg:flex-row lg:items-center gap-3 md:gap-9">
          <Searchbar
            placeholder="Search"
            sizes="larg"
            filterVisibility={false}
            variant="white"
          />
          <div className="flex md:flex-row flex-col md:items-center gap-4 md:gap-9">
            <span className="text-be-navy-blue-700 md:text-base font-bold">
              Show
            </span>
            <div className="flex items-center gap-2 md:gap-6 cursor-pointer">
              {filters.map((item, index) => (
                <div key={index} className="flex items-center gap-2 md:gap-4">
                  <Checkbox id={item} {...props} />
                  <Label
                    htmlFor={item}
                    className=" text-[11px] md:text-base font-medium whitespace-nowrap cursor-pointer"
                  >
                    {item}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default DAOFilter;
