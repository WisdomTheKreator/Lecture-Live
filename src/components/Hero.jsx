export default function Hero() {
  return (
    <div style={{ marginTop: "200px", minHeight: "100vh" }}>
      <h2 className="justify-content-center align-middle align-items-center m-4 my-6 text-center d-flex display-4 fw-bold">
        Run Live Classes. Track Attention. <br />
        Never Lose Engagement.
      </h2>
      <p className="justify-content-center align-middle align-items-center m-4 my-6 text-center d-flex lead">
        Host interactive live sessions with real-time attendance tracking and{" "}
        <br />
        on-screen prompts that keep students engaged and accountable.
      </p>
      <div className="justify-content-center align-middle align-items-center m-4 my-6 text-center d-flex lead">
        <button className="btn btn-primary btn-lg shadow px-5 mx-2">
          Get Started
        </button>
        <button className="btn btn-outline-primary shadow btn-lg btn-clean px-5 mx-2">
          Join a Free Session
        </button>
      </div>
    </div>
  );
}
