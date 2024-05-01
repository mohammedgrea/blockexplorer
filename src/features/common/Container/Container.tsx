import React, { FC, HTMLAttributes } from "react";
import containerBg from "../../../assets/images/container-background.jpg";
import bgHome from "../../../assets/images/bg-home.jpg";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: JSX.Element;
  variant?: "primary" | "secondary";
}

const Container: FC<ContainerProps> = ({
  children,
  variant = "primary",
  ...props
}) => {
  const backgroundImage = variant === "secondary" ? bgHome : containerBg;

  return (
    <div
      {...props}
      className={`min-h-[200px] bg-repeat-x w-full mb-6 md:mb-12 ${props.className}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {children}
    </div>
  );
};

export default Container;
