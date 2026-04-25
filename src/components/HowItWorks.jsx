import styles from "./HowItWorks.module.css";

const steps = [
  {
    id: 1,
    title: "Create or Schedule a Session",
    text: "Set up your live class in seconds. Add a title, choose a date and time, or start an instant session right away.",
  },
  {
    id: 2,
    title: "Share Link and Passcode",
    text: "Send the unique session link to your students via email, LMS, or messaging app. They click and join—no software installation needed.",
  },
  {
    id: 3,
    title: "Track Engagement Live",
    text: "Monitor attendance in real-time, send attention prompts during key moments, and export detailed analytics after the session.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-5">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Get Started in Minutes</h2>
          <p className="text-muted">
            Three simple steps to launch your first live session
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="d-flex flex-column gap-4">
              {/* Steps */}
              <div className="d-flex flex-column gap-4">
                {steps.map((step) => (
                  <div
                    key={step.id}
                    className={`d-flex align-items-start gap-3 mb-3 ${styles.stepItem}`}
                  >
                    {/* Circle */}
                    <div className={styles.circle}>{step.id}</div>

                    {/* Text */}
                    <div>
                      <h5 className="fw-semibold mb-1">{step.title}</h5>
                      <p className="text-muted mb-0">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              ;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
