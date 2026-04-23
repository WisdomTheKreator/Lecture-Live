import {
  Calendar,
  Clock,
  Bell,
  Link,
  ChartBarIncreasing,
  User,
} from "lucide-react";
export default function Features() {
  return (
    <div class="m-3">
      <h3 class="text-center mb-5">
        Everything You Need to Run Engaging Live Classes
      </h3>
      <div class="container">
        <div class="row">
          <div class="col-sm-4 mb-3 mb-sm-0">
            <div class="card w-100 h-100 p-3 shadow-sm rounded-4 border-primary-subtle">
              <Clock class="m-3 mb-2" size={40} color="#0d6efd" />

              <div class="card-body">
                <h5 class="card-title">Real Time Attendance Tracking</h5>
                <p class="card-text">
                  Automatically track who joins, when they arrive, and how long
                  they stay. Export detailed attendance reports with timestamps.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-4 mb-3 mb-sm-0">
            <div class="card w-100 h-100 p-3 shadow-sm rounded-4 border-primary-subtle">
              <Bell class="m-3 mb-2" size={40} color="#0d6efd" />

              <div class="card-body">
                <h5 class="card-title">Attention Prompts</h5>
                <p class="card-text">
                  Engage your audience with real-time prompts and interactive
                  elements during your live sessions.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-4 mb-3 mb-sm-0">
            <div class="card w-100 h-100 p-3 shadow-sm rounded-4 border-primary-subtle">
              <Link class="m-3 mb-2" size={40} color="#0d6efd" />
              <div class="card-body">
                <h5 class="card-title">One-Click Join Links</h5>
                <p class="card-text">
                  Share simple links with passcodes. No downloads, no accounts
                  required for students. Works on any device, instantly.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-4 mb-3 mb-sm-0 mt-4">
            <div class="card w-100 h-100 p-3 shadow-sm rounded-4 border-primary-subtle">
              <Calendar class="m-3 mb-2" size={40} color="#0d6efd" />
              <div class="card-body">
                <h5 class="card-title">Session Scheduling</h5>
                <p class="card-text">
                  Schedule sessions in advance with automatic email and SMS
                  reminders. Integrate with Google Calendar and Outlook.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-4 mb-3 mb-sm-0 mt-4">
            <div class="card w-100 h-100 p-3 shadow-sm rounded-4 border-primary-subtle">
              <ChartBarIncreasing class="m-3 mb-2" size={40} color="#0d6efd" />
              <div class="card-body">
                <h5 class="card-title">Engagement Analytics</h5>
                <p class="card-text">
                  View detailed reports on student participation, response
                  times, and attendance patterns. Identify students who need
                  extra support.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-4 mb-3 mb-sm-0 mt-4">
            <div class="card w-100 h-100 p-3 shadow-sm rounded-4 border-primary-subtle">
              <User class="m-3 mb-2" size={40} color="#0d6efd" />
              <div class="card-body">
                <h5 class="card-title">Moderator Controls</h5>
                <p class="card-text">
                  Assign co-hosts, mute participants, and manage breakout
                  discussions. Full control over your virtual classroom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
