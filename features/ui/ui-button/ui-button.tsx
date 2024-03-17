import {
  ButtonProps,
  ButtonIconType,
  ButtonSize,
  ButtonColor,
} from "./ui-button.types";
import styles from "./ui-button.module.scss";
import classNames from "classnames";
import Icon from "../icon/icon";

export function UIButton({
  children,
  size = ButtonSize.large,
  color = ButtonColor.primary,
  iconSrc,
  iconStyle = ButtonIconType.none,
  alt = "button",
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
        <Icon src={iconSrc} alt={alt} height={14} width={14} />
      )}
    </button>
  );
}
