import styles from "./ui-checkbox.module.scss";
import { useState } from "react";

import { InputHTMLAttributes } from "react";
import classNames from "classnames";
import Icon from "../icon/icon";

export enum CheckboxSize {
  small = "small",
  medium = "medium",
}

enum IconSize {
  small = 12,
  medium = 14,
}

enum IconPadding {
  small = 1.5,
  medium = 3,
}

export interface UICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  boxSize?: CheckboxSize;
  disabled?: boolean;
}

export function UICheckbox({
  children,
  boxSize = CheckboxSize.medium,
  ...props
}: UICheckboxProps) {
  const [clickCount, setClickCount] = useState(0);

  let iconSize: number;
  let iconPadding: number;

  boxSize === CheckboxSize.small
    ? (iconSize = IconSize.small)
    : (iconSize = IconSize.medium);
  iconSize === IconSize.small
    ? (iconPadding = IconPadding.small)
    : (iconPadding = IconPadding.medium);

  console.log(props.disabled);
  const handleCheckboxClick = () => {
    setClickCount((clickCount + 1) % 3);
  };

  const getIconComponent = () => {
    switch (clickCount) {
      case 1:
        return (
          <Icon
            src="/icons/checkmark.svg"
            alt="checkmark"
            height={iconSize}
            width={iconSize}
            iconPadding={iconPadding}
          />
        );
      case 2:
        return (
          <Icon
            src="/icons/minus.svg"
            alt="minus"
            height={iconSize}
            width={iconSize}
            iconPadding={iconPadding}
          />
        );
      default:
        return (
          <Icon
            src="/icons/empty.svg"
            alt="empty"
            height={iconSize}
            width={iconSize}
            iconPadding={iconPadding}
          />
        );
    }
  };
  const checkBoxClassNames = classNames(styles.customCheckbox, styles[boxSize]);

  const checkMarkClassnames = classNames(styles.checkmark, styles[boxSize], {
    [styles.checked]: clickCount !== 0 && !props.disabled,
    [styles.disabled]: props.disabled,
  });

  return (
    <div className={checkBoxClassNames}>
      <input type="checkbox" />
      <div
        className={[
          styles.checkMarkWrapper,
          props.disabled ? styles.disabled : "",
        ].join(" ")}
      >
        <div className={checkMarkClassnames} onClick={handleCheckboxClick}>
          {getIconComponent()}
          <label htmlFor="checkmark" className={styles[boxSize]}>
            {children}
          </label>
        </div>
      </div>
    </div>
  );
}
