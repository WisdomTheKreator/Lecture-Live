import { useEffect } from "react";

export default function Nav() {
  // Bootstrap JS for mobile toggle
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        {/* Logo — far left */}
        {/* <img
          src="lecturelive\lecture-live\src\assets\Lecture Live Logo.png"
          alt="Lecture Live Logo"
          className="navbar-brand"
        /> */}
        <a className="navbar-brand fw-bold" href="#">
          Lecture<span style={{ color: "#60a5fa" }}>Live</span>
        </a>

        {/* Hamburger toggle — mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Center links — mx-auto centers them */}
          <ul className="navbar-nav mx-auto gap-3">
            <li className="nav-item">
              <a className="nav-link" href="#features">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#how-it-works">
                How It Works
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pricing">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonials">
                Testimonials
              </a>
            </li>
          </ul>

          {/* Right side — Sign In + Sign Up buttons */}
          <div className="d-flex gap-2">
            <button className="btn btn-outline-light btn-sm px-4">
              Sign In
            </button>
            <button className="btn btn-primary btn-sm px-4">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
