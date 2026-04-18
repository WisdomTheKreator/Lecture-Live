import styles from "./demo.module.css";
export default function Demo() {
  return (
    <div style={{ marginTop: "1px" }} className="container my-4">
      <div className="container my-4">
        <div className="row g-3">
          {/* <!-- Video Section --> */}
          <div className="col-md-8">
            <div
              className={
                styles["video-box"] +
                " d-flex justify-content-center align-items-center"
              }
            >
              <i className="bi bi-camera-video fs-1 text-primary"></i>
            </div>
          </div>

          {/* <!-- Students Section --> */}
          <div className="col-md-4">
            <div className={styles["students-box"] + " p-3"}>
              <p className="fw-bold mb-2">👥 24 students present</p>
              <ul className="list-unstyled mb-0">
                <li>🟢 Sarah Johnson</li>
                <li>🟢 Michael Chen</li>
                <li>🟢 Emily Rodriguez</li>
                <li>🟢 David Kim</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          styles["attention-card"] + " p-4 text-white position-relative"
        }
      >
        {/* <!-- Title --> */}
        <div className="d-flex align-items-center mb-2">
          <i className="bi bi-bell me-2"></i>
          <h6 className="mb-0 fw-bold">Attention Check!</h6>
        </div>

        {/* <!-- Question --> */}
        <p className="mb-3">
          What is the primary purpose of CSS? Respond within 15 seconds.
        </p>

        {/* <!-- Options --> */}
        <div className="d-flex gap-2">
          <button className={styles["option-btn"]}>A) Styling</button>
          <button className={styles["option-btn"]}>B) Logic</button>
          <button className={styles["option-btn"]}>C) Database</button>
        </div>

        {/* <!-- Response badge --> */}
        <div className={styles["response-badge"]}>✔ 22/24 responded</div>
      </div>
    </div>
  );
}
