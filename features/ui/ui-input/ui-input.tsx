import styles from "./ui-input.module.scss";
import { useState } from "react";
import { capitalize } from "lodash";
import Icon from "../icon/icon";

type UIInputProps = {
  hint?: string;
  label?: string;
  icon: boolean;
  disabled?: boolean;
  errorMssg: string;
  placeholder: string;
};

export default function UIInput({
  label,
  hint,
  errorMssg,
  placeholder,
  icon,
  disabled,
}: UIInputProps) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className={styles.inputWrapper}>
      <label htmlFor="ui-input" className={styles.label}>
        {capitalize(label)}
      </label>
      <div
        className={styles.inputContainer}
        data-has-error={errorMssg ? "true" : "false"}
      >
        {icon === true ? (
          <span>
            <Icon
              src="/icons/mail.svg"
              alt="Mail icon"
              height={16}
              width={16}
              cssClass="mailIcon"
            />
            <input
              type="text"
              id="ui-input"
              placeholder={placeholder}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={disabled}
            />
          </span>
        ) : (
          <input
            type="text"
            id="ui-input"
            placeholder={placeholder}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={disabled}
          />
        )}
        {errorMssg && (
          <Icon
            src="/icons/exclaim.svg"
            alt="Error icon"
            height={20}
            width={20}
            cssClass="errorIcon"
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
