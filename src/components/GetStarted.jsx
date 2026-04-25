import styles from "./getstarted.module.css";
import { ListStart } from "lucide-react";
export default function GetStarted() {
  return (
    <div className={styles.background}>
      <ListStart size={48} className="text-white text-center mb-3 mx-auto" />
      <h3 className="fs-1 text-center text-white fw-bold">
        Start Your First Live Session Today!
      </h3>
      <p className="fs-5 text-center text-white">
        Join thousands of educators creating more engaging, accountable online
        learning experiences.
      </p>
    </div>
  );
}
