import React from "react";
import classNames from "classnames";
import styles from "./badge.module.scss";

export enum BadgeSize {
  sm = "sm",
  md = "md",
  lg = "lg",
}

export enum BadgeColor {
  primary = "primary",
  gray = "gray",
  error = "error",
  warning = "warning",
  success = "success",
}

type BadgeProps = {
  children: React.ReactNode;
  size?: BadgeSize;
  color?: BadgeColor;
};

export function Badge({
  children,
  size = BadgeSize.md,
  color = BadgeColor.primary,
}: BadgeProps) {
  // map children to BadgeColor
  switch (children) {
    case "Info":
      color = BadgeColor.success;
      children = "Stable";
      break;
    case "Warning":
      color = BadgeColor.warning;
      break;
    case "Error":
      color = BadgeColor.error;
      children = "Critical";
      break;
    default:
      break;
  }

  return (
    <div className={classNames(styles.container, styles[size], styles[color])}>
      {children}
    </div>
  );
}
