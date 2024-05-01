import { FC } from "react";

interface ProgressProps {
  value: number;
  color?: string;
  height: string | number;
  bgColor: string;
}

const Progress: FC<ProgressProps> = ({ value, height, bgColor }) => {
  return (
    <div
      className={`relative flex h-${height} w-full overflow-hidden rounded-full bg-${bgColor}`}
    >
      <div
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{ width: `${value}%` }}
        className={`flex h-full bg-blue-500`}
      ></div>
    </div>
  );
};

export default Progress;
