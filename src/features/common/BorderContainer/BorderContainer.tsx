import React, { FC, ReactNode, HTMLAttributes } from "react";

interface BorderContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const BorderContainer: FC<BorderContainerProps> = ({ children, ...props }) => {
  const defaultStyles = {
    display: "flex",
    justifyContent: "between",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "24px",
  };

  return (
    <div style={defaultStyles} {...props}>
      {children}
    </div>
  );
};

export default BorderContainer;
