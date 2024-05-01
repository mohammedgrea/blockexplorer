import { FC, ReactNode } from "react";
import {
  Card,
  CardProps as FlowbiteCardProps,
  CustomFlowbiteTheme,
  Flowbite,
} from "flowbite-react";

//@ts-ignore
interface CardProps extends FlowbiteCardProps {
  children: ReactNode;
  title?: string;
  proposalCon?: boolean;
}

const CardTheme: CustomFlowbiteTheme = {
  card: {
    root: {
      base: "flex rounded-2xl border border-gray-200 bg-white  py-1 shadow-lg shadow-gray-200/40 ",
      children: "flex h-full flex-col justify-center gap-4 px-4",
      horizontal: {
        off: "flex-col",
        on: "flex-col md:max-w-xl md:flex-row",
      },
      href: "hover:bg-gray-100 dark:hover:bg-gray-700",
    },
  },
};
const Wrapper: FC<CardProps> = ({ children, title, proposalCon, ...props }) => {
  return (
    <Flowbite theme={{ theme: CardTheme }}>
      <Card {...props} className={`pb-4 ${proposalCon && "px-[196px]"}`}>
        {title && (
          <h3 className="text-xl text-be-navy-blue-700 font-bold mt-3">
            {title}
          </h3>
        )}
        {children}
      </Card>
    </Flowbite>
  );
};

export default Wrapper;
