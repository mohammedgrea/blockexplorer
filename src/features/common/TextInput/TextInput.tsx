import { FC } from "react";
import {
  Flowbite,
  TextInput as FlowbiteTextInput,
  TextInputProps as FlowbiteTextInputProps,
  CustomFlowbiteTheme,
  Label,
  Select,
} from "flowbite-react";

interface TextInputProps extends FlowbiteTextInputProps {
  label: string;
  isSelect?: boolean;
  options?: string[];
  disabled?: boolean;
  paragraph?: string;
}

const TextInputTheme: CustomFlowbiteTheme = {
  textInput: {
    base: "",
    field: {
      rightIcon: {
        base: "bg-be-navy-blue-50 pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 rounded-r-lg border border-be-navy-blue-100",
        svg: "h-5 w-5 text-be-navy-blue-500",
      },
      input: {
        base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50 focus:ring-transparent focus:outline-none",
        colors: {
          gray: "border border-be-navy-blue-100 ",
        },
      },
    },
  },
  select: {
    base: "flex",
    field: {
      base: "relative w-full",
      icon: {
        base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
        svg: "h-5 w-5 text-gray-500 dark:text-gray-400",
      },
      select: {
        base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
        colors: {
          gray: "bg-be-navy-blue-50 border-be-navy-blue-100 text-be-navy-blue-700 focus:ring-0",
        },
      },
    },
  },
};

const TextInput: FC<TextInputProps> = ({
  label,
  isSelect,
  options,
  disabled,
  paragraph,
  ...props
}) => {
  return (
    <Flowbite theme={{ theme: TextInputTheme }}>
      <div>
        <Label
          className={`text-base text-be-navy-700 font-bold ${
            disabled ? "text-gray-300" : ""
          }`}
        >
          {label}
        </Label>
        {paragraph && (
          <p
            className={`text-base text-be-navy-blue-500 font-medium my-3 mb-4 ${
              disabled ? "text-gray-300" : ""
            }`}
          >
            {paragraph}
          </p>
        )}
        {isSelect ? (
          <Select id="" required>
            {
              //@ts-ignore
              options.map((option, index) => (
                <option
                  key={index}
                  value={index}
                  className="bg-white py-2 px-3 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring focus:border-blue-300"
                >
                  {option}
                </option>
              ))
            }
          </Select>
        ) : (
          <FlowbiteTextInput {...props} className="mt-2" />
        )}
      </div>
    </Flowbite>
  );
};

export default TextInput;
