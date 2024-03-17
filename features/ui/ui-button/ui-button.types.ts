import { ButtonHTMLAttributes } from "react";

export enum ButtonSize {
  small = "small",
  medium = "medium",
  large = "large",
  xlarge = "xlarge",
}

export enum ButtonColor {
  primary = "primary",
  secondary = "secondary",
  gray = "gray",
  empty = "empty",
  emptyGray = "emptyGray",
  error = "error",
  emptyError = "emptyError",
}

export enum ButtonIconType {
  leading = "leading",
  trailing = "trailing",
  only = "only",
  none = "none",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: ButtonSize;
  color?: ButtonColor;
  iconSrc?: string;
  iconStyle?: ButtonIconType;
  alt?: string;
}
