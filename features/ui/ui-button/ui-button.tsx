import { ButtonProps, IconType } from "./ui-button.types";
import styles from "./ui-button.module.scss";
import classNames from "classnames";

export function UIButton(props: ButtonProps) {
  const { title, size, color, disabled, icon, ...otherProps } = props;

  // Define the class names based on the props
  const buttonClassNames = classNames(
    styles.button,
    size && styles[size],
    color && styles[color],
    icon && styles.icon,
  );

  const renderIconAndTitle = () => {
    if (icon === IconType.leading) {
      return (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/button-icon.svg" alt="CTA" />
          {title}
        </>
      );
    } else if (icon === IconType.trailing) {
      return (
        <>
          {title}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/button-icon.svg" alt="CTA" />
        </>
      );
    } else if (icon === IconType.only) {
      return (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/button-icon.svg" alt="CTA" />
        </>
      );
    } else {
      return title; // Default behavior if icon type is not recognized
    }
  };

  return (
    <button {...otherProps} className={buttonClassNames} disabled={disabled}>
      {renderIconAndTitle()}
    </button>
  );
}
