import React, { FC } from "react";
import {
  CustomFlowbiteTheme,
  Progress,
  ProgressProps as FlowbiteProgressProps,
  Flowbite,
} from "flowbite-react";

interface ProgressProps extends FlowbiteProgressProps {
  For?: string;
  Against?: string;
}

export const progressTheme: CustomFlowbiteTheme = {
  progress: {
    base: "w-full overflow-hidden rounded-full bg-red-500 dark:bg-gray-700 ",
    label: "mb-1 flex justify-between font-medium dark:text-white",
    bar: "rounded-full text-center font-medium leading-none text-cyan-300 dark:text-cyan-100 space-x-2 bg-red-500",
    color: {
      dark: "bg-gray-600 dark:bg-gray-300",
      blue: "bg-cyan-600",
      red: "bg-red-600 dark:bg-red-500",
      green: "bg-green-500 dark:bg-green-500",
      yellow: "bg-yellow-400",
      indigo: "bg-indigo-600 dark:bg-indigo-500",
      purple: "bg-purple-600 dark:bg-purple-500",
    },
    size: {
      sm: "h-1",
      md: "h-2.5",
      lg: "h-4",
      xl: "h-6",
    },
  },
};
const DAOprogress: FC<ProgressProps> = ({ For, Against, ...props }) => {
  return (
    <Flowbite theme={{ theme: progressTheme }}>
      <div
        className="flex gap-4	justify-end items-center  min-w-[200px] "
        {...props}
      >
        <p className="text-xs text-left font-semibold">
          <span className="block">For</span>
          <span className="text-center">{For}</span>
        </p>
        <div className="flex-1">
          <Progress progress={45} color="green" size="sm" />
        </div>
        <p className="text-xs text-right font-semibold">
          <span className="block">Against</span>
          <span>{Against}</span>
        </p>
      </div>
    </Flowbite>
  );
};

export default DAOprogress;
