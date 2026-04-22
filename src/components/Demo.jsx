import { useState, useEffect, useRef } from "react";

const STUDENTS = [
  { id: "c0", name: "Sarah Johnson", online: true },
  { id: "c1", name: "Michael Chen", online: true },
  { id: "c2", name: "Emily Rodriguez", online: true },
  { id: "c3", name: "David Kim", online: false },
  { id: "c4", name: "Aisha Patel", online: true },
  { id: "c5", name: "Lucas Mendes", online: true },
];

const CHECK_ORDER = ["c0", "c1", "c4", "c5", "c2"];
const TOTAL = 24;
const TARGET_RESP = 22;

export default function DemoSection() {
  const [timeLeft, setTimeLeft] = useState(12);
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState(null);
  const [respCount, setRespCount] = useState(10);
  const [checks, setChecks] = useState({});
  const checkIdxRef = useRef(0);
  const timerDone = timeLeft <= 0;

  useEffect(() => {
    if (respCount >= TARGET_RESP) return;
    const id = setInterval(() => {
      setRespCount((n) => {
        const order = CHECK_ORDER;
        const idx = checkIdxRef.current;
        if (idx < order.length) {
          setChecks((prev) => ({ ...prev, [order[idx]]: true }));
          checkIdxRef.current = idx + 1;
        }
        return n + 1;
      });
    }, 700);
    return () => clearInterval(id);
  }, [respCount]);

  useEffect(() => {
    if (answered || timeLeft <= 0) return;
    const id = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [answered, timeLeft]);

  useEffect(() => {
    if (timeLeft === 0 && !answered) {
      setAnswered(true);
      setSelected(0);
    }
  }, [timeLeft, answered]);

  const handleAnswer = (idx) => {
    if (answered) return;
    setAnswered(true);
    setSelected(idx);
  };

  const timerColor =
    timerDone || answered
      ? "#16a34a"
      : timeLeft <= 5
        ? "#dc2626"
        : timeLeft <= 8
          ? "#d97706"
          : "#2563eb";

  const respPct = Math.round((respCount / TOTAL) * 100);
  const showBadge = respCount >= TARGET_RESP;

  return (
    <section style={styles.section}>
      {/* Section header */}
      <div style={styles.header}>
        <span style={styles.eyebrow}>Live Demo</span>
        <h2 style={styles.heading}>See it in action</h2>
        <p style={styles.subtext}>
          This is exactly what instructors and students see during a live
          session — real-time responses, attention checks, and engagement
          tracking, all in one view.
        </p>
      </div>

      {/* Browser mockup */}
      <div style={styles.browser}>
        {/* Title bar */}
        <div style={styles.titleBar}>
          <div style={styles.dots}>
            <div style={{ ...styles.dot, background: "#ff5f57" }} />
            <div style={{ ...styles.dot, background: "#febc2e" }} />
            <div style={{ ...styles.dot, background: "#28c840" }} />
          </div>
          <div style={styles.urlBar}>
            app.lecturelive.io/session/intro-to-web-dev
          </div>
          <div style={styles.brandLogo}>
            Lecture<span style={{ color: "#2563eb" }}>Live</span>
          </div>
        </div>

        {/* App body */}
        <div style={styles.appBody}>
          {/* Main column */}
          <div style={styles.mainCol}>
            {/* Video */}
            <div style={styles.vidBox}>
              <div style={styles.vidAvatar}>MR</div>
              <div style={styles.liveBadge}>
                <span style={styles.liveDot} />
                Live
              </div>
              <div style={styles.vidLabel}>Ms. Rivera — Instructor</div>
            </div>

            {/* Toolbar */}
            <div style={styles.toolbar}>
              {[
                { label: "Session", active: true },
                { label: "Notes", active: false },
                { label: "Replay", active: false },
                { label: "Chat", active: false },
              ].map(({ label, active }) => (
                <div
                  key={label}
                  style={{
                    ...styles.toolBtn,
                    ...(active ? styles.toolBtnActive : {}),
                  }}
                >
                  {label}
                </div>
              ))}
            </div>

            {/* Attention check card */}
            <div style={styles.attnCard}>
              <div style={styles.attnHeader}>
                <div style={styles.attnIcon}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="1.5"
                  >
                    <path d="M8 2a5 5 0 0 1 5 5c0 2.5-1 4-2 5H5c-1-1-2-2.5-2-5a5 5 0 0 1 5-5z" />
                    <path d="M6 12v1a2 2 0 0 0 4 0v-1" />
                  </svg>
                </div>
                <span style={styles.attnTitle}>Attention check</span>
                <span style={{ ...styles.attnTimer, color: timerColor }}>
                  {answered || timerDone ? "done" : `${timeLeft}s`}
                </span>
              </div>

              <p style={styles.attnQ}>What is the primary purpose of CSS?</p>

              <div style={styles.optionsRow}>
                {["A) Styling", "B) Logic", "C) Database"].map((opt, i) => {
                  let extra = {};
                  if (answered) {
                    if (i === 0) extra = styles.optCorrect;
                    else if (i === selected) extra = styles.optWrong;
                  }
                  return (
                    <button
                      key={i}
                      onClick={() => handleAnswer(i)}
                      disabled={answered}
                      style={{ ...styles.optBtn, ...extra }}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {/* Response bar */}
              <div style={styles.respRow}>
                <div style={styles.respTrack}>
                  <div style={{ ...styles.respFill, width: `${respPct}%` }} />
                </div>
                {showBadge ? (
                  <span style={styles.respBadge}>
                    {TARGET_RESP}/{TOTAL} responded
                  </span>
                ) : (
                  <span style={styles.respLabel}>
                    {respCount}/{TOTAL}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div style={styles.sidebar}>
            <div style={styles.sidebarHd}>
              <svg
                width="13"
                height="13"
                viewBox="0 0 16 16"
                fill="none"
                stroke="#64748b"
                strokeWidth="1.5"
              >
                <path d="M10 7a4 4 0 1 0-4 0 6 6 0 0 0-6 6h2a4 4 0 0 1 8 0h2a6 6 0 0 0-6-6z" />
                <path d="M14 10a3 3 0 0 0-3-3" />
              </svg>
              Students
              <span style={styles.countBadge}>{TOTAL}</span>
            </div>

            <div style={styles.studentList}>
              {STUDENTS.map((s) => (
                <div key={s.id} style={styles.sRow}>
                  <div
                    style={{
                      ...styles.sDot,
                      background: s.online ? "#22c55e" : "#cbd5e1",
                    }}
                  />
                  <span style={styles.sName}>{s.name}</span>
                  {checks[s.id] && <span style={styles.sCheck}>✓</span>}
                </div>
              ))}
            </div>

            <div style={styles.sidebarFooter}>
              <div style={styles.raiseLabel}>Hand raised</div>
              <div style={styles.raiseRow}>
                <div style={styles.raiseAvatar}>GR</div>
                <div>
                  <div style={styles.raiseName}>Grace R.</div>
                  <div style={styles.raiseSub}>has a question</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Caption */}
      <p style={styles.caption}>
        See every student respond in real time — no tab-switching, no guessing
      </p>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.25; }
        }
      `}</style>
    </section>
  );
}

const styles = {
  section: {
    width: "100%",
    maxWidth: "900px",
    margin: "0 auto",
    padding: "40px 24px 80px", // reduced top padding from 80px → 40px
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "36px",
    fontFamily: "system-ui, sans-serif",
    background: "#ffffff",
  },
  header: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "12px",
    maxWidth: "580px",
  },
  eyebrow: {
    fontSize: "13px",
    fontWeight: "600",
    color: "#2563eb",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
  },
  heading: {
    fontSize: "clamp(26px, 3.5vw, 38px)",
    fontWeight: "700",
    color: "#0f172a",
    margin: 0,
    lineHeight: 1.2,
  },
  subtext: {
    fontSize: "16px",
    color: "#64748b",
    lineHeight: 1.6,
    margin: 0,
  },

  // Browser chrome
  browser: {
    width: "100%",
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
    background: "#ffffff",
    overflow: "hidden",
    boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
  },
  titleBar: {
    background: "#f8fafc",
    padding: "10px 16px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    borderBottom: "1px solid #e2e8f0",
  },
  dots: { display: "flex", gap: "6px" },
  dot: { width: "11px", height: "11px", borderRadius: "50%" },
  urlBar: {
    flex: 1,
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "6px",
    padding: "4px 12px",
    fontSize: "12px",
    color: "#64748b",
    textAlign: "center",
  },
  brandLogo: {
    fontSize: "13px",
    fontWeight: "700",
    color: "#0f172a",
    whiteSpace: "nowrap",
  },

  appBody: {
    display: "grid",
    gridTemplateColumns: "1fr 220px",
  },
  mainCol: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    borderRight: "1px solid #e2e8f0",
  },

  // Video
  vidBox: {
    background: "#eff6ff",
    borderRadius: "8px",
    aspectRatio: "16/9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    border: "1px solid #bfdbfe",
    overflow: "hidden",
  },
  vidAvatar: {
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    background: "#2563eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    fontWeight: "600",
    color: "#ffffff",
  },
  liveBadge: {
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "11px",
    fontWeight: "600",
    color: "#ffffff",
    background: "#2563eb",
    borderRadius: "20px",
    padding: "3px 10px",
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  liveDot: {
    display: "inline-block",
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "#ffffff",
    animation: "blink 1.2s ease-in-out infinite",
  },
  vidLabel: {
    position: "absolute",
    bottom: "10px",
    left: "10px",
    fontSize: "12px",
    fontWeight: "500",
    color: "#1e40af",
    background: "#ffffff",
    border: "1px solid #bfdbfe",
    borderRadius: "4px",
    padding: "3px 10px",
  },

  // Toolbar
  toolbar: { display: "flex", gap: "8px" },
  toolBtn: {
    flex: 1,
    padding: "9px 6px",
    border: "1px solid #e2e8f0",
    borderRadius: "8px",
    background: "#ffffff",
    fontSize: "13px",
    color: "#64748b",
    textAlign: "center",
    cursor: "default",
    fontFamily: "inherit",
  },
  toolBtnActive: {
    background: "#eff6ff",
    color: "#2563eb",
    borderColor: "#bfdbfe",
    fontWeight: "600",
  },

  // Attention card
  attnCard: {
    borderRadius: "10px",
    padding: "16px",
    border: "1px solid #bfdbfe",
    background: "#eff6ff",
  },
  attnHeader: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "10px",
  },
  attnIcon: {
    width: "26px",
    height: "26px",
    borderRadius: "6px",
    background: "#dbeafe",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  attnTitle: { fontSize: "14px", fontWeight: "600", color: "#1e3a8a" },
  attnTimer: {
    marginLeft: "auto",
    fontSize: "14px",
    fontWeight: "600",
    transition: "color 0.3s",
  },
  attnQ: {
    fontSize: "14px",
    color: "#1e40af",
    lineHeight: 1.5,
    margin: "0 0 12px 0",
  },
  optionsRow: { display: "flex", gap: "8px" },
  optBtn: {
    flex: 1,
    padding: "9px 6px",
    border: "1px solid #bfdbfe",
    borderRadius: "8px",
    background: "#ffffff",
    fontSize: "13px",
    color: "#2563eb",
    textAlign: "center",
    cursor: "pointer",
    fontFamily: "inherit",
    fontWeight: "500",
    transition: "background 0.15s",
  },
  optCorrect: {
    background: "#f0fdf4",
    borderColor: "#86efac",
    color: "#166534",
  },
  optWrong: {
    background: "#fef2f2",
    borderColor: "#fca5a5",
    color: "#991b1b",
  },

  // Response bar
  respRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginTop: "12px",
  },
  respTrack: {
    flex: 1,
    height: "4px",
    background: "#bfdbfe",
    borderRadius: "2px",
    overflow: "hidden",
  },
  respFill: {
    height: "100%",
    background: "#2563eb",
    borderRadius: "2px",
    transition: "width 0.8s ease",
  },
  respLabel: { fontSize: "12px", color: "#2563eb", whiteSpace: "nowrap" },
  respBadge: {
    fontSize: "12px",
    fontWeight: "600",
    color: "#166534",
    background: "#f0fdf4",
    border: "1px solid #86efac",
    borderRadius: "20px",
    padding: "3px 10px",
    whiteSpace: "nowrap",
  },

  // Sidebar
  sidebar: {
    padding: "16px 14px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    background: "#f8fafc",
  },
  sidebarHd: {
    fontSize: "13px",
    fontWeight: "600",
    color: "#475569",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    borderBottom: "1px solid #e2e8f0",
    paddingBottom: "10px",
  },
  countBadge: {
    marginLeft: "auto",
    fontSize: "11px",
    color: "#1e40af",
    background: "#dbeafe",
    borderRadius: "20px",
    padding: "2px 8px",
    fontWeight: "600",
  },
  studentList: { display: "flex", flexDirection: "column", gap: "5px" },
  sRow: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "7px 9px",
    borderRadius: "6px",
    background: "#ffffff",
    border: "1px solid #e2e8f0",
  },
  sDot: { width: "7px", height: "7px", borderRadius: "50%", flexShrink: 0 },
  sName: {
    fontSize: "13px",
    color: "#0f172a",
    flex: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  sCheck: { fontSize: "12px", color: "#16a34a", fontWeight: "600" },

  // Raised hand
  sidebarFooter: { marginTop: "auto" },
  raiseLabel: {
    fontSize: "11px",
    color: "#64748b",
    marginBottom: "6px",
    fontWeight: "500",
  },
  raiseRow: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px 10px",
    borderRadius: "8px",
    border: "1px solid #bfdbfe",
    background: "#ffffff",
  },
  raiseAvatar: {
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    background: "#dbeafe",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "11px",
    fontWeight: "700",
    color: "#1e40af",
    flexShrink: 0,
  },
  raiseName: { fontSize: "13px", color: "#0f172a", fontWeight: "600" },
  raiseSub: { fontSize: "11px", color: "#2563eb" },

  caption: {
    fontSize: "14px",
    color: "#94a3b8",
    textAlign: "center",
    margin: 0,
  },
};
