import { Routes } from "@config/routes";
import styles from "./index.module.scss";
import TopNavigation from "../features/projects/components/top-navigation/top-navigation";
const IssuesPage = () => {
  return (
    <div>
      <header className={styles.header}>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/logo-large.svg" alt="Prolog logo" />
        </div>
        <div>
          <TopNavigation />
        </div>
        <div>
          <a href={Routes.projects}>Open Dashboard</a>
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
