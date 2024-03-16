import {
  ButtonProps,
  ButtonIconType,
  ButtonSize,
  ButtonColor,
} from "./ui-button.types";
import styles from "./ui-button.module.scss";
import classNames from "classnames";
// import Icon from "../icon/icon";

export function UIButton({
  children,
  size = ButtonSize.large,
  color = ButtonColor.primary,
  iconSrc,
  iconStyle = ButtonIconType.none,
  ...props
}: ButtonProps) {
  // Define the class names based on the props
  const buttonClassNames = classNames(
    styles.button,
    styles[size],
    styles[color],
    styles[iconStyle],
    props.className,
  );

  return (
    <button {...props} className={buttonClassNames}>
      <span>{children}</span>
      {iconSrc && iconStyle !== ButtonIconType.none && (
        //eslint-disable-next-line @next/next/no-img-element
        <img src={iconSrc} className={styles[iconStyle]} alt="button icon" />
      )}
    </button>
  );
}
