import { ButtonProps, IconType } from "./ui-button.types";
import styles from "./ui-button.module.scss";
import classNames from "classnames";

export function UIButton(props: ButtonProps) {
  const { title, size, color, disabled, icon, ...otherProps } = props;

  {
    /* eslint-disable-next-line @next/next/no-img-element */
  }
  console.log(color);
  // Define the class names based on the props
  const buttonClassNames = classNames(
    styles.button,
    size && styles[size], // Assuming you have defined size classes in your SCSS
    color && styles[color], // Assuming you have defined color classes in your SCSS
    // state && styles[state], // Assuming you have defined state classes in your SCSS
    icon && styles.icon, // Assuming you have defined icon class in your SCSS
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
