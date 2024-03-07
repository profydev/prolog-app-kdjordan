import styles from "./modal.module.scss";

interface ModalProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpen: boolean;
}
export default function Modal({ isModalOpen, setIsModalOpen }: ModalProps) {
  return (
    <div>
      <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
          <div className={styles.upper}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={"/icons/mail.svg"}
              alt="Mail icon"
              className={styles.mailIcon}
            />
            <div className={styles.modalHeader}>Contact Us Via Email</div>
            <div className={styles.modalText}>
              Any questions? Send us an email at
              <br />
              prolog@profy.dev. We usually answer within 24
              <br />
              hours.
            </div>
          </div>
          <div className={styles.lower}>
            <button
              onClick={() => setIsModalOpen(!isModalOpen)}
              className={styles.cancelButton}
            >
              Cancel
            </button>
            <button
              className={styles.emailButton}
              onClick={() =>
                (window.location.href =
                  "mailto:support@prolog-app.com?subject=Support Request")
              }
            >
              Open Email App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
