import { FC, ReactNode, useState, useRef, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import {
  Dropdown as FlowbiteDropdown,
  DropdownProps as FlowbiteDropdownProps,
  CustomFlowbiteTheme,
  Flowbite,
  Checkbox,
} from "flowbite-react";
import { scrollToTop } from "../../../helpers/scrollToTop";
import { useDispatch } from "react-redux";
import { closeNavBar } from "../../../redux/reducers/toggleSlice";

interface DropdownProps extends FlowbiteDropdownProps {
  options: Array<
    {
      value: string;
      icon?: ReactNode;
      link?: string;
    }[]
  >;

  icon?: boolean;
  borderTop?: boolean;
  label: string | ReactNode;
  full?: boolean;
  onChange?: any;
  types?: "text" | "btn";
  alignment?: "left" | "center" | "right";
  select?: boolean;
  checkboxVisibility?: boolean;
}

const Dropdown: FC<DropdownProps> = ({
  options,
  full,
  label,
  checkboxVisibility,
  types = "btn",
  onChange,
  select,
  alignment,
  borderTop,
  icon,
  value,
  ...props
}) => {
  const [selectedValue, setSelectedValue] = useState(label);
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const DropDonwnRef = useRef<any | null>(null);
  const dispatch = useDispatch();

  const handleValueSelect = (value: string) => {
    setSelectedValue(value);
    if (onChange) {
      scrollToTop();
      onChange({
        target: {
          value,
        },
      });
    }
  };

  const theme: CustomFlowbiteTheme = {
    button: {
      base: `text-black  ${
        types === "text"
          ? "hover:text-be-navy-blue-100"
          : " border border-be-navy-blue-100 hover:bg-be-navy-blue-100 bg-be-navy-blue-50"
      } focus:ring-0 focus:ring-transparent px-0  ${
        full && "!w-full"
      } font-semibold`,
      color: {
        grey: `bg-be-navy-blue-50 hover:bg-be-navy-blue-100 ${
          isDropdownActive ? "bg-be-navy-blue-100" : "bg-be-navy-blue-50"
        }`,
        red: `text-red-500 border text-red-500 ${
          isDropdownActive ? "bg-red-100 " : "bg-be-navy-blue-50 "
        } border-be-navy-blue-100 hover:bg-red-100`,
        greyTransparent:
          "flex items-center !justify-between border bg-be-navy-blue-50 border-be-navy-blue-100",
      },
      inner: {
        base: "flex items-center text-sm w-full",
      },
      size: {
        md: "flex items-center justify-between gap-1 px-1 text-xs md:text-sm md:px-3 py-2 w-full",
        xs: "px-3 py-1.5 md:text-sm text-xs",
      },
    },
    dropdown: {
      arrowIcon: "ml-2 h-4 w-4",
      content: `py-1 focus:outline-none left-0 ${
        borderTop ? "border-t md:border-t-2 m-0 border-t-red-500" : ""
      } `,
      floating: {
        base: `${
          alignment !== "center" &&
          `
                        ${
                          borderTop
                            ? "md:!top-[49px] md:!absolute !relative md:ml-0 ml-6 "
                            : "!top-10"
                        } !translate-y-0 !translate-x-0 !left-auto`
        }
                        ${alignment === "right" ? "!right-0" : "!left-0"}
                        z-10 w-max rounded divide-y divide-gray-100 shadow focus:outline-none 
                        `,
        style: {
          auto: 'border-0 bg-white text-gray-900"',
        },
        item: {
          container:
            "bg-transparent hover:bg-red-50 w-full  py-0.5 m-0  dark:hover:bg-red-50",
          base: "flex items-center justify-start py-2 px-4 text-sm text-gray-700 py-0 m-0 px-0 cursor-pointer w-full hover:bg-red-50 hover:text-red-500 focus:bg-red-50 dark:text-gray-200 dark:hover:bg-red-50 focus:outline-none ",
        },
      },
    },

    label: {
      root: {
        base: " w-full text-sm font-medium hover:text-red-500",
      },
    },
  };

  const handleButtonClick = (e: any) => {
    if (e.target.nodeName !== "BUTTON") {
      setIsDropdownActive(!isDropdownActive);
    }
    if (e.target.nodeName === "A" || e.target.nodeName === "a") {
      dispatch(closeNavBar());
    }
  };

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        DropDonwnRef.current &&
        !DropDonwnRef.current.contains(event.target)
      ) {
        setIsDropdownActive(false);
      } else setIsDropdownActive(true);
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Flowbite theme={{ theme: theme }}>
      <div
        className="flex items-center flex-col"
        ref={DropDonwnRef}
        onClick={handleButtonClick}
      >
        <FlowbiteDropdown
          {...props}
          fullSized
          color={props.color ? props.color : ""}
          label={select ? selectedValue : label}
        >
          <fieldset className="flex flex-col gap-1 p-1">
            <div className="flex flex-col items-center gap-1 px-1  ">
              {options.length > 1
                ? options.map((option, index) => (
                    <Fragment key={index}>
                      {option.map((op, index) =>
                        op.link ? (
                          <FlowbiteDropdown.Item key={index}>
                            <Link
                              to={op.link ? op.link : "#"}
                              className="flex items-start w-full  py-1 px-1.5  hover:text-red-500 hover:bg-red-50 hover:rounded cursor-pointer font-medium"
                            >
                              {icon && op.icon}
                              {op.value}
                            </Link>
                          </FlowbiteDropdown.Item>
                        ) : (
                          <FlowbiteDropdown.Item key={index}>
                            <div
                              onClick={() => handleValueSelect(op.value)}
                              onChange={onChange}
                              className="flex  w-full  p-2 gap-1.5 hover:text-red-500 hover:bg-red-50 hover:rounded cursor-pointer font-medium"
                            >
                              {icon && op.icon}
                              {op.value}
                            </div>
                          </FlowbiteDropdown.Item>
                        ),
                      )}
                      <hr className="border-grey-100  w-full border-1 last:border-0"></hr>
                    </Fragment>
                  ))
                : options[0].map((op, index) =>
                    op.link ? (
                      <FlowbiteDropdown.Item key={index}>
                        <Link
                          to={op.link ? op.link : "#"}
                          className="flex  w-full  p-2 gap-1.5 hover:text-red-500 hover:bg-red-50 hover:rounded cursor-pointer font-medium"
                        >
                          {icon && op.icon}
                          {op.value}
                        </Link>
                      </FlowbiteDropdown.Item>
                    ) : (
                      <FlowbiteDropdown.Item key={index}>
                        <div
                          onClick={() => handleValueSelect(op.value)}
                          onChange={onChange}
                          className="flex itr w-full  p-2 gap-1.5 hover:text-red-500 hover:bg-red-50 hover:rounded cursor-pointer font-medium"
                        >
                          {icon && op.icon}
                          <div
                            className={`${
                              checkboxVisibility
                                ? "flex gap-2 items-center "
                                : ""
                            }`}
                          >
                            {checkboxVisibility && (
                              <Checkbox id="index"></Checkbox>
                            )}
                            <span id="index">{op.value}</span>
                          </div>
                        </div>
                      </FlowbiteDropdown.Item>
                    ),
                  )}
            </div>
          </fieldset>
        </FlowbiteDropdown>
      </div>
    </Flowbite>
  );
};

export default Dropdown;
