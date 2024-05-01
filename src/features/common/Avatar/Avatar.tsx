import React, { FC } from "react";

interface AvatarProps {
  imgSrc: string;
  name?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  online?: boolean;
  date?: string;
  forPropCon?: boolean;
  background?: boolean;
  disabled?: boolean;
}

const Avatar: FC<AvatarProps> = ({
  imgSrc,
  online = false,
  size = "lg",
  date,
  name,
  forPropCon,
  background,
  disabled,
}) => {
  return (
    <div
      className={`${
        background ? "bg-be-navy-blue-50 rounded-2xl w-fit pr-8 pl-0.5 " : ""
      } flex items-center ${
        forPropCon && " bg-be-navy-blue-50 rounded-full pl-2 py-2 pr-6"
      }`}
    >
      <div
        className={`relative ${
          size === "lg"
            ? "min-h-[48px] min-w-[48px]"
            : size === "xl"
            ? "min-h-[64px] w-[64px] h-[64px] min-w-[64px]"
            : size === "md"
            ? "min-h-[36px] w-[36px] h-[36px] min-w-[36px]"
            : size === "xs"
            ? "min-h-[16px] w-[16px] h-[16px] min-w-[16px]"
            : "min-h-[24px] w-[24px] h-[24px] min-w-[24px]"
        }`}
      >
        <img src={imgSrc} alt="" className="w-full h-full rounded-full" />
        <span
          className={`${
            online
              ? "absolute top-1 -right-1 h-4 w-4 rounded-full bg-blue-500 border-white border-[3px]"
              : ""
          }`}
        />
      </div>
      <div
        className={`${
          size === "lg" ? "flex flex-col justify-center items-start" : ""
        }`}
      >
        <span
          className={` ${disabled ? "text-gray-300" : ""} ${
            size === "lg"
              ? "text-base font-medium ml-2 lg:ml-6"
              : size === "xl"
              ? "text-xl font-bold ml-4 capitalize"
              : size === "md"
              ? "text-xs font-bold ml-4 capitalize"
              : size === "sm"
              ? "text-sm font-somibold ml-1 md:ml-2"
              : "text-xs font-medium ml-2"
          } text-be-navy-blue-700 whitespace-nowrap`}
        >
          {name}
        </span>
        {date && (
          <span
            className={`${
              size === "sm"
                ? "text-[10px] md:text-xs ml-1 md:ml-9"
                : "md:ml-2 lg:ml-6"
            } font-medium text-grey-500`}
          >
            {" "}
            Proposed on: {date}
          </span>
        )}
      </div>
    </div>
  );
};

export default Avatar;
