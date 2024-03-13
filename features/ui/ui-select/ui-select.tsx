import styles from "./ui-select.module.scss";
// import classNames from "classnames";
import { useState } from "react";
// import { capitalize } from "lodash";

type UISelectProps = {
  title: string;
  hint: string;
  label: string;
  icon: boolean;
  options: string[];
  disabled?: boolean;
};

export default function UISelect({
  title,
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {icon && (
            <img
              src="/icons/person.svg"
              alt="checkmark"
              className={styles.personIcon}
            />
          )}
          {selectedOption !== "" ? selectedOption : title}
        </div>
        <div
          className={styles.carat}
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/carat.svg" alt="Select carat" />
        </div>
      </button>
      {isOpen && (
        <div className={styles.customOptionWrapper}>
          <ul>
            {options.map((option) => (
              <li
                key={option}
                className={styles.customOption}
                onClick={setSelection}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                {/* {icon == true && <img src="/icons/person.svg" alt="person" className={styles.personIcon} />} */}
                {option}
                {option === selectedOption && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src="/icons/team-checkmark.svg"
                    alt="checkmark"
                    className={styles.checkMark}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* {selectedOption} */}
    </div>
  );
}
