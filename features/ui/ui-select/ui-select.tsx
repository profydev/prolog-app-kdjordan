import styles from "./ui-select.module.scss";
// import classNames from "classnames";
import { useState } from "react";
import { capitalize } from "lodash";

type UISelectProps = {
  title: string;
  hint?: string;
  label?: string;
  icon: boolean;
  options: string[];
  disabled?: boolean;
  errorMssg: string;
};

export default function UISelect({
  title,
  icon,
  label,
  hint,
  options,
  disabled,
  errorMssg,
}: UISelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  function setSelection(e: React.MouseEvent<HTMLLIElement>) {
    e.preventDefault();
    let selected = (e.target as HTMLLIElement).textContent as string;

    if (icon) {
      selected = selected.replace(
        /<img[^>]*>|<span\b[^>]*>(.*?)<\/span>/g,
        "$1",
      );
      setSelectedOption(selected);
    } else {
      setSelectedOption(selected);
    }
    setIsOpen(!isOpen);
  }

  console.log(errorMssg);

  return (
    <div className={styles.customSelect}>
      {label && <div className={styles.label}>{capitalize(label)}</div>}
      <button
        className={styles.customSelectButton}
        onClick={() => setIsOpen(!isOpen)}
        disabled={disabled}
      >
        <div className={selectedOption !== "" ? styles.selectedOption : ""}>
          {icon && (
            // eslint-disable-next-line @next/next/no-img-element
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
      {hint && errorMssg == undefined && (
        <div className={styles.hint}>{capitalize(hint)}</div>
      )}
      {errorMssg && <div className={styles.error}>{capitalize(errorMssg)}</div>}
      {isOpen && (
        <div className={styles.customOptionWrapper}>
          <ul>
            {options.map((option) => (
              <li
                key={option}
                className={styles.customOption}
                onClick={setSelection}
              >
                {icon == true ? (
                  <span className={styles.customOptionIconWrapper}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/icons/person.svg"
                      alt="person"
                      className={styles.personIcon}
                    />
                    {option}
                  </span>
                ) : (
                  <>{option}</>
                )}
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
    </div>
  );
}
