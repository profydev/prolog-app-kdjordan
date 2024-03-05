import Link from "next/link";
// import { Routes } from "@config/routes";
import styles from "./page-footer.module.scss";

export default function PageFooter() {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const version = require("next/package.json").version;
  return (

    <footer className={styles.footerContainer}>
      <div className={styles.footerContainer}>
        <div className={styles.content}>
          <div className={styles.info}>Version: {version}</div>

          <ul className={styles.links}>
            <li>
              <Link href="#">Docs</Link>
            </li>
            <li>
              <Link href="#">API</Link>
            </li>
            <li>
              <Link href="#">Help</Link>
            </li>
            <li>
              <Link href="#">Community</Link>
            </li>
          </ul>
        <div className={styles.logo}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={"/icons/logo-small.svg"} alt="logo" />
        </div>
      </div>

    </footer>
  );
}
