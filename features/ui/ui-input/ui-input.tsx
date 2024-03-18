import { useState, useEffect } from "react";
import styles from "./ui-input.module.scss";
import { capitalize } from "lodash";
import Icon from "../icon/icon";

export type UIInputProps = {
  hint?: string;
  label?: string;
  iconSrc?: string;
  disabled?: boolean;
  errorMssg?: string;
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
};

export function UIInput({
  label,
  hint,
  errorMssg,
  placeholder,
  disabled,
  iconSrc,
  onChange,
  ...props
}: UIInputProps) {
  const [searchInputValue, setSearchInputValue] = useState("");

  useEffect(() => {
    // Update the selected value in the parent component
    if (onChange) {
      onChange(searchInputValue);
    }
  }, [onChange, searchInputValue]);

  return (
    <div className={styles.inputWrapper}>
      <label htmlFor="ui-input" className={styles.label}>
        {capitalize(label)}
      </label>
      <div
        className={styles.inputContainer}
        data-has-error={errorMssg ? "true" : "false"}
      >
        {iconSrc ? (
          <span>
            <Icon
              alt="Input icon"
              height={16}
              width={16}
              src={iconSrc || "/icons/mail.svg"}
            />
            <input
              type="text"
              id="ui-input"
              placeholder={placeholder}
              value={searchInputValue}
              onChange={(e) => setSearchInputValue(e.target.value)}
              disabled={disabled}
            />
          </span>
        ) : (
          <input
            type="text"
            id="ui-input"
            placeholder={placeholder}
            value={searchInputValue}
            onChange={(e) => setSearchInputValue(e.target.value)}
            {...props}
          />
        )}
        {errorMssg && (
          <Icon
            src="/icons/error.svg"
            alt="Error icon"
            height={20}
            width={20}
          />
        )}
      </div>
      {errorMssg && <div className={styles.error}>{capitalize(errorMssg)}</div>}
      {!errorMssg && hint && (
        <div className={styles.hint}>{capitalize(hint)}</div>
      )}
    </div>
  );
}
