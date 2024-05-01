import { FC, ReactNode } from "react";
import { Card, CustomFlowbiteTheme, Flowbite } from "flowbite-react";

interface BeCardProps {
  title?: ReactNode;
  content: ReactNode;
  toggleStyle: boolean;
  maxwidth?: string;
}

const beCardTheme: CustomFlowbiteTheme = {
  card: {
    root: {
      children:
        "flex h-full flex-col justify-center md:gap-4 gap-2 md:p-6 p-0 md:pl-0",
      base: "flex rounded-xl border border-gray-200 bg-white shadow-light",
    },
  },
};

const BeCard: FC<BeCardProps> = ({ title, content, toggleStyle = true }) => {
  return (
    <Flowbite theme={{ theme: beCardTheme }}>
      <Card className="w-full rounded-xl px-2 py-4 ">
        {title && (
          <h5
            className={`${
              toggleStyle
                ? "text-xl font-semibold text-black"
                : "text-base font-normal text-be-navy-blue-300"
            }`}
          >
            {title}
          </h5>
        )}
        <div className="font-normal text-be-navy-blue-300">{content}</div>
      </Card>
    </Flowbite>
  );
};

export default BeCard;
