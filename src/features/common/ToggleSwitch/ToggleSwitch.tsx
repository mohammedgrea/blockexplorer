import { FC } from "react";
import {
  CustomFlowbiteTheme,
  Flowbite,
  ToggleSwitch as FlowbiteToggleSwitch,
  ToggleSwitchProps as FlowbiteToggleSwitchProps,
} from "flowbite-react";

interface ToggleSwitchProps extends FlowbiteToggleSwitchProps {
  label?: string;
  labelWeight?: "bold";
}

const ToggleSwitchTheme: CustomFlowbiteTheme = {
  toggleSwitch: {
    root: {
      base: "group  relative flex items-center rounded-lg focus:outline-none ",
      active: {
        on: "cursor-pointer",
        off: "cursor-not-allowed opacity-50",
      },
      label: "ml-3 text-sm font-medium text-gray-900 dark:text-gray-300",
    },
    toggle: {
      base: "toggle-bg rounded-full border group-focus:ring-4 group-focus:ring-transparent",
      checked: {
        on: "after:translate-x-full after:border-white",
        off: "border-gray-200 bg-gray-200 dark:border-gray-600 dark:bg-gray-700",
        color: {
          blue: " bg-blue-600 border-blue-600",
        },
      },
    },
  },
};

const ToggleSwitch: FC<ToggleSwitchProps> = ({
  label,
  labelWeight,
  ...props
}) => {
  const disabledStyle = {
    color: props.disabled ? "#C8CCD2" : "",
  };
  return (
    <Flowbite theme={{ theme: ToggleSwitchTheme }}>
      <div className="flex items-center flex-wrap gap-1 md:gap-4 text-base ">
        <label
          htmlFor={label}
          className={
            labelWeight === "bold"
              ? "font-bold text-be-navy-blue-700"
              : "font-medium text-be-navy-blue-500"
          }
          style={disabledStyle}
        >
          {label}
        </label>
        <FlowbiteToggleSwitch {...props} color="blue" label="" id={label} />
      </div>
    </Flowbite>
  );
};

export default ToggleSwitch;
