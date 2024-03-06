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
          {/* Content of the modal */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={"/icons/mail.svg"}
            alt="Mail icon"
            className={styles.mailIcon}
          />
          <h3>Contact Us Via Email</h3>
          <p className={styles.modalText}>
            Any questions? Send is an email at prolog@profy.dev. We usually
            answer within 24 hours.
          </p>
          <div className={styles.modalButtonContainer}>
            <button onClick={() => setIsModalOpen(!isModalOpen)}>Cancel</button>
            <button
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
