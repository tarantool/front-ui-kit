import React, { ReactNode } from "react";
import { cx } from "@emotion/css";

import { Text } from "../Text";

import { styles } from "./Alert.styles";

export interface AlertProps {
  className?: string;
  children: ReactNode;
  type: "error" | "success";
}

export const Alert = ({ className, children, type }: AlertProps) => {
  return (
    <Text className={cx(styles.alert, styles[type], className)} tag="div">
      {children}
    </Text>
  );
};
