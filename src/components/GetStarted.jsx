import styles from "./getstarted.module.css";
import { ListStart } from "lucide-react";
import energy from "../assets/energy.svg";
export default function GetStarted() {
  return (
    <div className={styles.background}>
      <div className="d-flex justify-content-center mb-2 mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 16 16"
          fill="currentColor"
          className={styles.energy}
        >
          <path d="M11.3 1L1 9h4l-1 6 10.3-8h-4l1-6z" />
        </svg>
      </div>

      <div className="container mt-3">
        <p className="fs-1 fw-bold text-center text-white mb-2">
          Start Your First Live Session Today!
        </p>
        <p className="fs-5 text-center text-white mb-4">
          Join thousands of educators creating more engaging, accountable online
          learning experiences.
        </p>
      </div>

      <div className="d-flex justify-content-center gap-3 mt-4">
        <button className="btn btn-light btn-lg text-primary p-3 px-5">
          Get Started
        </button>
        <button className="btn btn-outline-light btn-lg p-3 px-5">
          Watch Demo
        </button>
      </div>
      <p className="fs-6 fw-semibold text-center text-white mt-3 mb-4">
        Free during early access • No credit card required • Cancel anytime
      </p>
    </div>
  );
}
