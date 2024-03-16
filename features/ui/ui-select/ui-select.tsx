import styles from "./ui-select.module.scss";
import { useState } from "react";
import { capitalize } from "lodash";
import Icon from "../icon/icon";

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
            <Icon src="/icons/person.svg" alt="person" height={16} width={18} />
          )}
          {selectedOption !== "" ? selectedOption : title}
        </div>
        <div
          className={styles.carat}
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <Icon src="/icons/carat.svg" height={12} width={8} alt="person" />
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
                    <Icon
                      src="/icons/person.svg"
                      alt="person"
                      height={20}
                      width={20}
                    />
                    {option}
                  </span>
                ) : (
                  <>{option}</>
                )}
                {option === selectedOption && (
                  <Icon
                    src="/icons/team-checkmark.svg"
                    alt="checkmark"
                    height={20}
                    width={20}
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
