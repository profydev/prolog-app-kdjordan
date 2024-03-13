import styles from "./ui-select.module.scss";
// import classNames from "classnames";
import { useState } from "react";
// import { capitalize } from "lodash";

type UISelectProps = {
  hint: string;
  label: string;
  icon: boolean;
  options: string[];
  disabled?: boolean;
};

export default function UISelect({
  icon,
  label,
  hint,
  options,
  disabled,
}: UISelectProps) {
  console.log(icon, label, hint, disabled);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  function setSelection(e: React.MouseEvent<HTMLLIElement>) {
    e.preventDefault();
    const selected = (e.target as HTMLLIElement).innerHTML as string;
    setSelectedOption(selected);
    setIsOpen(!isOpen);
  }

  return (
    <div className={styles.customSelect}>
      <button
        className={styles.customSelectButton}
        onClick={() => setIsOpen(!isOpen)}
        disabled={disabled}
      >
        <div className={selectedOption !== "" ? styles.selectedOption : ""}>
          {selectedOption !== "" ? selectedOption : label}
        </div>
        <div
          className={styles.carat}
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/carat.svg" alt="" />
        </div>
      </button>
      {isOpen && (
        <div>
          <ul>
            {options.map((option) => (
              <li
                key={option}
                className={styles.customOption}
                onClick={setSelection}
              >
                {option}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                {option === selectedOption && (
                  <img
                    src="/icons/team-checkmark.svg"
                    alt="checkmark"
                    className={styles.checkmark}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
