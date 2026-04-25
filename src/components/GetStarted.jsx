import styles from "./getstarted.module.css";

export default function GetStarted() {
  return (
    <div className={styles.background}>
      {/* Icon */}
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

      {/* Text */}
      <div className="container mt-3">
        <p
          className="fw-bold text-center text-white mb-2"
          style={{ fontSize: "clamp(1.6rem, 5vw, 2.4rem)", lineHeight: 1.2 }}
        >
          Start Your First Live Session Today!
        </p>
        <p
          className="text-center text-white mb-4"
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            maxWidth: "560px",
            margin: "0 auto 1.5rem",
          }}
        >
          Join thousands of educators creating more engaging, accountable online
          learning experiences.
        </p>
      </div>

      {/* Buttons — stack on mobile, side by side on larger screens */}
      <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3 mt-2 px-3">
        <button
          className="btn btn-light btn-lg text-primary px-5 w-100"
          style={{ maxWidth: "260px" }}
        >
          Get Started
        </button>
        <button
          className="btn btn-outline-light btn-lg px-5 w-100"
          style={{ maxWidth: "260px" }}
        >
          Watch Demo
        </button>
      </div>

      {/* Fine print */}
      <p
        className="text-center text-white mt-3 mb-4"
        style={{ fontSize: "clamp(0.8rem, 2vw, 0.95rem)", fontWeight: 500 }}
      >
        Free during early access • No credit card required • Cancel anytime
      </p>
    </div>
  );
}
