import Link from "next/link";
import { Routes } from "@config/routes";
import styles from "./top-navigation.module.scss";

export default function TopNavigation() {
  return (
    <div className={styles.topNavigation}>
      <ul>
        <li>
          <Link className={styles.anchor} href={Routes.home}>
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.anchor} href={Routes.products}>
            Products
          </Link>
        </li>
        <li>
          <Link className={styles.anchor} href={Routes.documentation}>
            Documentation
          </Link>
        </li>
        <li>
          <Link className={styles.anchor} href={Routes.pricing}>
            Pricing
          </Link>
        </li>
      </ul>
    </div>
  );
}
