import { FC } from "react";
import { Label } from "flowbite-react";

interface HeaderInfoBlockProps {
  label: string;
  value: any;
  path: string;
}

const HeaderInfoBlock: FC<HeaderInfoBlockProps> = ({ label, value, path }) => {
  return (
    <div
      className={`flex gap-2 ${
        path === "/" ? "flex-col items-start" : "items-center"
      }`}
    >
      <Label className="text-be-navy-blue-300 text-xs">{label}</Label>
      <div>{value}</div>
    </div>
  );
};

export default HeaderInfoBlock;
