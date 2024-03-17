import styles from "./ui-select.module.scss";
import { useEffect } from "react";
import { useState } from "react";
import { capitalize } from "lodash";
import Icon from "../icon/icon";

export type UISelectProps = {
  title: string;
  hint?: string;
  label?: string;
  options?: string[];
  icon: boolean;
  iconSrc?: string;
  disabled?: boolean;
  errorMssg?: string;
  value?: string;
  onChange?: (value: string) => void;
};

export function UISelect({
  title,
  label,
  hint,
  options,
  icon,
  disabled,
  errorMssg,
  iconSrc,
  onChange,
  ...props
}: UISelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    // Update the selected value in the parent component
    if (onChange) {
      onChange(selectedOption);
    }
  }, [onChange, selectedOption]);

  function setSelection(e: React.MouseEvent<HTMLLIElement>) {
    e.preventDefault();
    let selected = (e.target as HTMLLIElement).textContent as string;

    if (selected === selectedOption) {
      setIsOpen(!isOpen);
      setSelectedOption("");
      return;
    }

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
        {...props}
      >
        <div className={selectedOption !== "" ? styles.selectedOption : ""}>
          {icon && (
            <Icon
              src={iconSrc || "/icons/person.svg"}
              alt="person"
              height={16}
              width={18}
              iconPadding={8}
              direction="right"
            />
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
      {hint && !errorMssg && (
        <div className={styles.hint}>{capitalize(hint)}</div>
      )}
      {errorMssg && <div className={styles.error}>{capitalize(errorMssg)}</div>}
      {isOpen && (
        <div className={styles.customOptionWrapper}>
          <ul>
            {options?.map((option) => (
              <li
                key={option}
                className={styles.customOption}
                onClick={setSelection}
                style={{
                  backgroundColor: selectedOption === option ? "#FCFAFF" : "",
                }}
              >
                {icon ? (
                  <span className={styles.customOptionIconWrapper}>
                    <Icon
                      src={iconSrc || "/icons/person.svg"}
                      alt="person"
                      height={20}
                      width={20}
                      iconPadding={8}
                      direction="right"
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
