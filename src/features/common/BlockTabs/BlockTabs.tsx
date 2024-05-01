import { FC, ReactNode } from "react";
import { Tabs, CustomFlowbiteTheme, Flowbite } from "flowbite-react";

interface TabItem {
  title: string;
  content: ReactNode;
}

interface BlockTabsProps {
  tabItems: TabItem[];
}

const tabsTheme: CustomFlowbiteTheme = {
  tabs: {
    tablist: {
      base: "flex text-center",
      styles: {
        default: "border-b border-gray-200 w-fit",
      },
      tabitem: {
        base: "flex items-center justify-center px-6 md:px-10 py-4 rounded-t-lg text-xs md:text-sm font-medium first:ml-0 focus:ring-0 focus:ring-transparent focus:outline-none ",
        styles: {
          default: {
            base: "rounded-t-lg",
            active: {
              on: "font-bold text-blue-500 border-b-[2px] border-blue-500 bg-transparent transition-all duration-0 ease-in-out",
              off: "font-bold text-gray-500",
            },
          },
        },
      },
    },
  },
};
const BeTab: FC<BlockTabsProps> = ({ tabItems }) => {
  return (
    <Flowbite theme={{ theme: tabsTheme }}>
      <Tabs className="w-full">
        {tabItems.map((item, index) => (
          <Tabs.Item key={index} active={index === 0} title={item.title}>
            {item.content}
          </Tabs.Item>
        ))}
      </Tabs>
    </Flowbite>
  );
};

export default BeTab;
