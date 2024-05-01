import { FC, useState, useRef, useEffect } from "react";
import {
  TextInput,
  TextInputProps as FlowbiteTextInputProps,
  CustomFlowbiteTheme,
  Flowbite,
  Dropdown,
} from "flowbite-react";

import Button from "../Button/Button";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface TextInputProps extends FlowbiteTextInputProps {
  sizes: "small" | "medium" | "larg";
  filter?: boolean;
  variant?: "red" | "white";
  placeholder: string;
  filterVisibility?: boolean;
}

const Searchbar: FC<TextInputProps> = ({
  filter,
  sizes,
  variant = "red",
  placeholder,
  filterVisibility = true,
  ...props
}) => {
  const [selectedValue, setSelectedValue] = useState("All Filter");
  const [isFilterbtnActive, setIsFilterbtnActive] = useState(false);
  const DropDonwnRef = useRef<any | null>(null);

  const textInputTheme: CustomFlowbiteTheme = {
    textInput: {
      field: {
        input: {
          base: `text-sm placeholder:text-be-navy-blue-300 border !border-be-navy-blue-100 focus:outline-none ${
            variant === "white" ? "!rounded-l-lg " : ""
          }`,
          sizes: {
            md: `px-4 py-[11px] ${
              sizes === "small"
                ? "w-full md:w-[229px] max-h-[32px]"
                : "w-full md:w-[367px] max-h-[32px] md:max-h-[40px]"
            }`,
          },
          withAddon: {
            off: "rounded-none  focus-outline-none ",
          },
        },
      },
    },
    button: {
      base: "group flex items-center whitespace-nowrap  justify-center p-0.5 text-center font-semibold relative  focus:z-10 focus:outline-none border box-border border-be-navy-blue-100 border-r-0",
      inner: {
        base: "flex items-stretch items-center transition-all duration-200 !px-2 focus:ring-0 ",
      },
      color: {
        info: `rounded-r-none ${
          isFilterbtnActive ? "bg-be-navy-blue-100" : "bg-be-navy-blue-50"
        } hover:bg-be-navy-blue-100 ${
          sizes === "small"
            ? "min-w-[100px] max-h-[32px]"
            : " min-w-[105px] max-h-[32px] md:max-h-[40px]"
        }`,
      },
      pill: {
        off: "rounded-lg rounded-r-none ",
      },
    },
    dropdown: {
      arrowIcon: "ml-2 h-4 w-4 ",
      floating: {
        base: "!-top-1 z-20 ",
      },
    },
  };

  const options = [
    "All Filters",
    "Addresses",
    "Tokens",
    "Name Tags",
    "Labels",
    "Websites",
  ];
  const handleValueSelect = (value: string) => {
    setSelectedValue(value);
  };

  const handleButtonClick = (e: any) => {
    if (e.target.nodeName !== "BUTTON") {
      setIsFilterbtnActive(!isFilterbtnActive);
    }
  };

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        DropDonwnRef.current &&
        !DropDonwnRef.current.contains(event.target)
      ) {
        setIsFilterbtnActive(false);
      } else setIsFilterbtnActive(true);
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Flowbite theme={{ theme: textInputTheme }}>
      <div
        className="flex items-center w-full"
        ref={DropDonwnRef}
        onClick={handleButtonClick}
      >
        {filterVisibility ? (
          <Dropdown label={selectedValue} disabled={filter}>
            <Dropdown.Item className="flex flex-col items-start !bg-white p-2 gap-1.5 w-full">
              {options.map((option) => (
                <button
                  key={option}
                  className="block w-full text-left hover:text-red-500 hover:bg-red-100 py-1 px-1.5 rounded "
                  onClick={() => handleValueSelect(option)}
                >
                  {option}
                </button>
              ))}
            </Dropdown.Item>
          </Dropdown>
        ) : null}

        <TextInput
          placeholder={placeholder}
          className="py-1 w-full md:w-fit"
          {...props}
        />
        <Button
          color={variant}
          className="rounded-l-none"
          size={sizes === "small" ? "xs" : "md"}
          icon={
            variant === "white" ? (
              <MagnifyingGlassIcon className="h-[18px] w-[18px]" />
            ) : (
              <MagnifyingGlassIcon className="h-[18px] w-[18px]" />
            )
          }
        ></Button>
      </div>
    </Flowbite>
  );
};

export default Searchbar;
