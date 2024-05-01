import { FC } from "react";
import {
  Badge as FlowbiteBadge,
  BadgeProps as FlowbiteBadgeProps,
  CustomFlowbiteTheme,
  Flowbite,
} from "flowbite-react";

interface BadgeProps extends FlowbiteBadgeProps {
  status: string;
  icons?: string;
}

const badgeTheme: CustomFlowbiteTheme = {
  badge: {
    root: {
      base: "flex h-fit items-center gap-1 font-semibold w-fit text-xs font-bold",
      color: {
        info: "text-blue-500 border border-blue-300 bg-blue-200",
        success: "text-green-500 border border-green-300 bg-green-100",
        failure: "text-red-500 border border-red-300 bg-red-100",
        light: "text-blue-500 bg-blue-50 rounded-lg py-4 px-8",
      },
      size: {
        xs: "p-1 text-xs",
        sm: "py-2 px-4 text-sm",
      },
    },
  },
};

const Badge: FC<BadgeProps> = ({ status, icons, ...props }) => {
  const statusColors: { [key: string]: string } = {
    Active: "info",
    Defeated: "failure",
    "Pending Execution": "success",
    Execution: "success",
  };

  return (
    <Flowbite theme={{ theme: badgeTheme }}>
      <FlowbiteBadge color={statusColors["status"]} size="md" {...props}>
        <div className="flex gap-1">
          {icons && <img src={icons} alt="" />}
          {status}
        </div>
      </FlowbiteBadge>
    </Flowbite>
  );
};

export default Badge;
