import { ButtonHTMLAttributes } from "react";

enum ButtonSizes {
  small = "small",
  medium = "medium",
  large = "large",
  xlarge = "xlarge",
}

enum ButtonColor {
  primary = "primary",
  secondary = "secondary",
  gray = "gray",
  empty = "empty",
  emptyGray = "emptyGray",
  error = "error",
  emptyError = "emptyError",
}

export enum IconType {
  leading = "leading",
  trailing = "trailing",
  only = "only",
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  size: ButtonSizes;
  color: ButtonColor;
  disabled?: boolean;
  icon: IconType;
};
