import styles from "./ui-button.module.scss";
import { ButtonType } from "./ui-button.types";

export default function UIButton({
  title,
  size,
  color,
  state,
  icon,
}: ButtonType) {
  console.log(title, size, color, state, icon);

  return (
    <button className={`${styles[color]} ${styles[size]}`}>
      <span className="text">{title}</span>
    </button>
  );
}