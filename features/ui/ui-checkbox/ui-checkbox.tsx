import styles from "./ui-checkbox.module.scss";
// import classNames from "classnames";
import { useState } from "react";
import { capitalize } from "lodash";

type UICheckboxProps = {
  label: string;
  size: "small" | "medium";
  disabled?: boolean;
};

export default function UICheckbox({ label, size, disabled }: UICheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [numberToLetter, setNumberToLetter] = useState("A");

  const handleCheckboxClick = () => {
    setClickCount((clickCount + 1) % 3);
    setIsChecked(!isChecked);
    switch (clickCount) {
      case 1:
        setNumberToLetter("B");
        break;
      case 2:
        setNumberToLetter("C");
        break;
      default:
        setNumberToLetter("A");
        break;
    }
  };

  return (
    <label
      className={`${styles.customCheckbox} ${styles[size]} ${
        disabled ? styles.disabled : ""
      }`}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxClick}
        disabled={disabled}
      />
      <span
        className={`${styles.checkmark} ${styles[size]} ${
          styles[`checked${numberToLetter}`]
        } ${styles[size]}`}
      ></span>
      {capitalize(label)}
    </label>
  );
}
