export enum ButtonSizes {
  small = "small",
  medium = "medium",
  large = "large",
  xlarge = "xlarge",
}
export enum ButtonColor {
  primary = "primary",
  secondary = "secondary",
  gray = "gray",
  emptyGray = "emptyGray",
  error = "error",
  emptyError = "emptyError",
}

export type ButtonType = {
  title: string;
  size: ButtonSizes;
  color: ButtonColor;
  state: string;
  icon: string;
};
