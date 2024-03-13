import Link from "next/link";
import { Routes } from "../config/routes";
import { useState } from "react";
import Modal from "../features/projects/components/modal/modal";
import styles from "./index.module.scss";
import TopNavigation from "../features/projects/components/top-navigation/top-navigation";
import UICustomSelect from "../features/ui/ui-select/ui-select";
const IssuesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const options = [
    "Alice Johnson",
    "Charlie Brown",
    "David Smith",
    "Emily Davis",
    "Frankie Green",
  ];

  return (
    <div>
      {isModalOpen ? (
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      ) : (
        ""
      )}
      <header className={styles.header}>
        <div className={styles.container}>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/logo-large.svg" alt="Prolog logo" />
          </div>
          <div>
            <TopNavigation />
          </div>
          <div>
            <Link href={Routes.projects}>
              <button className={styles.openDashboardButton}>
                Open Dashboard
              </button>
            </Link>
          </div>
        </div>
      </header>
      <button
        className={styles.contactButton}
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/message.svg" alt="Contact" />
      </button>
      <div style={{ marginLeft: "10rem" }}>
        <UICustomSelect
          label={"Select Team Member"}
          hint={"hint"}
          icon={false}
          options={options}
          disabled={false}
        />
      </div>
    </div>
  );
};

export default IssuesPage;
