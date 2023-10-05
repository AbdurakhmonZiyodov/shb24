import { ContainerProps } from "@/types";
import React, { FC } from "react";

const Container: FC<ContainerProps> = ({ children, className }) => {
  return <div className={`container px-4 mx-auto ${className}`}>{children}</div>;
};

export default Container;
