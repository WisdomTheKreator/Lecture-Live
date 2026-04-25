import { Calendar, Clock, Bell, Link, ChartAreaIcon, User } from "lucide-react";
import styles from "./features.module.css";
export default function Features() {
  return (
    <div className="m-3">
      <h3 className="text-center mb-4 fs-1 font-weight-bold">
        Everything You Need to Run Engaging Live Classes
      </h3>
      <p className="text-center mb-5 font-weight-bold fs-5 text-secondary">
        Powerful Features Designed for Modern Educators
      </p>
      <div className="container">
        <div className="row">
          <div className="col-sm-4 mb-3 mb-sm-0">
            <div
              className={`card w-100 h-100 p-3 shadow-sm rounded-4 border-primary-subtle ${styles.cardHover}`}
            >
              <Clock className="m-3 mb-2" size={40} color="#0d6efd" />

              <div className="card-body">
                <h5 className="card-title">Real Time Attendance Tracking</h5>
                <p className="card-text">
                  Automatically track who joins, when they arrive, and how long
                  they stay. Export detailed attendance reports with timestamps.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 mb-3 mb-sm-0">
            <div
              className={`card w-100 h-100 p-3 shadow-sm rounded-4 border-primary-subtle ${styles.cardHover}`}
            >
              <Bell className="m-3 mb-2" size={40} color="#0d6efd" />

              <div className="card-body">
                <h5 className="card-title">Attention Prompts</h5>
                <p className="card-text">
                  Engage your audience with real-time prompts and interactive
                  elements during your live sessions.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 mb-3 mb-sm-0">
            <div
              className={`card w-100 h-100 p-3 shadow-sm rounded-4 border-primary-subtle ${styles.cardHover}`}
            >
              <Link className="m-3 mb-2" size={40} color="#0d6efd" />
              <div className="card-body">
                <h5 className="card-title">One-Click Join Links</h5>
                <p className="card-text">
                  Share simple links with passcodes. No downloads, no accounts
                  required for students. Works on any device, instantly.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 mb-3 mb-sm-0 mt-4">
            <div
              className={`card w-100 h-100 p-3 shadow-sm rounded-4 border-primary-subtle ${styles.cardHover}`}
            >
              <Calendar className="m-3 mb-2" size={40} color="#0d6efd" />
              <div className="card-body">
                <h5 className="card-title">Session Scheduling</h5>
                <p className="card-text">
                  Schedule sessions in advance with automatic email and SMS
                  reminders. Integrate with Google Calendar and Outlook.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 mb-3 mb-sm-0 mt-4">
            <div
              className={`card w-100 h-100 p-3 shadow-sm rounded-4 border-primary-subtle ${styles.cardHover}`}
            >
              <ChartAreaIcon className="m-3 mb-2" size={40} color="#0d6efd" />
              <div className="card-body">
                <h5 className="card-title">Engagement Analytics</h5>
                <p className="card-text">
                  View detailed reports on student participation, response
                  times, and attendance patterns. Identify students who need
                  extra support.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 mb-3 mb-sm-0 mt-4">
            <div
              className={`card w-100 h-100 p-3 shadow-sm rounded-4 border-primary-subtle ${styles.cardHover}`}
            >
              <User className="m-3 mb-2" size={40} color="#0d6efd" />
              <div className="card-body">
                <h5 className="card-title">Moderator Controls</h5>
                <p className="card-text">
                  Assign co-hosts, mute participants, and manage breakout
                  discussions. Full control over your virtual classNameroom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
