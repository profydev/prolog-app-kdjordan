import { Routes } from "@config/routes";
// import classNames from "classnames";
import Link from "next/link";
import styles from "./index.module.scss";

const IssuesPage = () => {
  return (
    <div>
      <header className={styles.header}>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/logo-large.svg" alt="Prolog logo" />
        </div>
        <div>
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
        <div>
          <a href={Routes.projects}>Dashboard</a>
        </div>
      </header>
      <button
        className={styles.contactButton}
        onClick={() =>
          alert(
            "Implement this in Challenge 2 - Modal:\n\nhttps://profy.dev/rjs-challenge-modal",
          )
        }
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/message.svg" alt="Contact" />
      </button>
    </div>
  );
};

export default IssuesPage;
