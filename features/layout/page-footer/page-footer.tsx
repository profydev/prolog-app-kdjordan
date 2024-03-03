import Link from "next/link";
// import { Routes } from "@config/routes";
import styles from "./page-footer.module.scss";

export default function PageFooter() {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const version = require("next/package.json").version;
  return (
    <div className={styles.footerContainer}>
      <div className={styles.content}>
        <div style={{ width: "160px" }}>Version: {version}</div>
        <div>
          <ul>
            <li>
              <Link href="#">Home</Link>
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
        </div>
        <div style={{ width: "160px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={"/icons/logo-small.svg"}
            alt="logo"
            style={{ float: "right" }}
          />
        </div>
      </div>
    </div>
  );
}
