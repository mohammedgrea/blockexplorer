import React, { FC } from "react";
import {
  Button as BEButton,
  ButtonProps as FlowButtonProps,
  CustomFlowbiteTheme,
  Flowbite,
} from "flowbite-react";

interface ButtonProps extends FlowButtonProps {
  icondirection?: "right";
  disabled?: boolean;
  border?: boolean;
  icon?: React.ReactNode | JSX.Element;
  localIcon?: string;
}

const Button: FC<ButtonProps> = (props) => {
  const buttonTheme: CustomFlowbiteTheme = {
    button: {
      base: `group flex h-min items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none transition-all duration-300 focus:ring-0 focus:ring-transparent font-semibold	whitespace-nowrap  
       ${props.border ? "border" : ""}`,
      inner: {
        base:
          "flex items-center gap-2 " +
          (props.icondirection === "right" ? "flex-row-reverse" : ""),
      },
      size: {
        md: "text-sm  md:px-3 py-1 px-2 md:py-2",
        xs: "flex items-center justify-center font-light  text-xs md:text-sm px-0.5 md:px-1 py-1",
        dao: "flex items-center justify-center text-sm py-1 md:px-2 px-1",
      },
      color: {
        red: props.disabled
          ? "bg-gray-100 text-gray-300"
          : "text-white bg-red-500 border-[1px] border-red-500 hover:border-red-300 hover:bg-red-300",
        redTransparent: props.disabled
          ? "border-gray-100 text-gray-100"
          : "text-red-500 bg-transparent border-red-500 hover:bg-red-500 hover:text-white",
        blueTransparent: props.disabled
          ? "border-gray-100 text-gray-100 "
          : "text-be-navy-blue-700 bg-transparent border-be-navy-blue-100 hover:bg-be-navy-blue-100 ",
        lightRedTransparent: props.disabled
          ? "bg-gray-100 border-gray-100 text-gray-300"
          : "text-red-500 bg-be-navy-blue-50 border border-be-navy-blue-100 hover:bg-red-100",
        white: props.disabled
          ? "bg-gray-100 border-gray-100 text-gray-300"
          : "border-[1px] border-be-navy-blue-100 text-be-navy-blue-700 bg-be-navy-blue-50 hover:bg-be-navy-blue-100",
        lightRedDAO: props.disabled
          ? "bg-gray-100 border-gray-100 text-gray-300"
          : "text-red-500 bg-be-navy-blue-50 border-[1px] border-red-500 hover:bg-red-100",
      },
      outline: {
        color: {
          red: props.disabled
            ? "border bg-gray-100 text-gray-300"
            : "border text-white bg-red-500 border-[1px] border-red-500 hover:border-red-300 hover:bg-red-300",
          redTransparent: props.disabled
            ? "border border-gray-100 text-gray-100"
            : "border text-red-500 bg-transparent border-red-500 hover:bg-red-500 hover:text-white",
          blueTransparent: props.disabled
            ? "border border-gray-100 text-gray-100 "
            : "border text-be-navy-blue-700 bg-transparent border-be-navy-blue-100 hover:bg-be-navy-blue-100 ",
          lightRedTransparent: props.disabled
            ? "border bg-gray-100 border-gray-100 text-gray-300"
            : "border text-red-500 bg-be-navy-blue-50 border border-be-navy-blue-100 hover:bg-red-100",
          white: props.disabled
            ? "border bg-gray-100 border-gray-100 text-gray-300"
            : "border border-[1px] border-be-navy-blue-100 text-be-navy-blue-700 bg-be-navy-blue-50 hover:bg-gray-300",
          lightRedDAO: props.disabled
            ? "border bg-gray-100 border-gray-100 text-gray-300"
            : "border text-red-500 bg-be-navy-blue-50 border-[1px] border-red-500 hover:bg-red-100",
        },
        on: "",
      },
      disabled: "cursor-not-allowed",
    },
  };

  return (
    <Flowbite theme={{ theme: buttonTheme }}>
      <BEButton {...props}>
        {props.localIcon && <img src={props.localIcon} alt="" />}
        {props.icon}
        {props.label && <span>{props.label}</span>}
      </BEButton>
    </Flowbite>
  );
};

export default Button;
