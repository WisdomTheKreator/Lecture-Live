import { useState, useEffect } from "react";

const RESPONSES = [
  { id: "r1", label: "A) To structure content", votes: 18, correct: false },
  { id: "r2", label: "B) To style & design pages", votes: 0, correct: true },
  { id: "r3", label: "C) To handle server logic", votes: 4, correct: false },
];
const TOTAL_STUDENTS = 24;

function EngagementPrompt() {
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [animVotes, setAnimVotes] = useState({ r1: 18, r2: 0, r3: 4 });
  const [timeLeft, setTimeLeft] = useState(15);
  const [responded, setResponded] = useState(20);

  // Countdown
  useEffect(() => {
    if (timeLeft <= 0 || revealed) return;
    const t = setInterval(() => setTimeLeft((s) => s - 1), 1000);
    return () => clearInterval(t);
  }, [timeLeft, revealed]);

  // Auto-reveal at 0
  useEffect(() => {
    if (timeLeft === 0 && !revealed) {
      setRevealed(true);
      if (!selected) setSelected("r2");
    }
  }, [timeLeft, revealed, selected]);

  // Tick responded count up to 23
  useEffect(() => {
    if (responded >= 23) return;
    const t = setInterval(() => setResponded((n) => Math.min(n + 1, 23)), 1800);
    return () => clearInterval(t);
  }, [responded]);

  const handleSelect = (id) => {
    if (revealed) return;
    setSelected(id);
    setRevealed(true);
    setAnimVotes((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const timerColor = revealed
    ? "#16a34a"
    : timeLeft <= 5
      ? "#dc2626"
      : timeLeft <= 9
        ? "#d97706"
        : "#ffffff";

  const totalVotes = Object.values(animVotes).reduce((a, b) => a + b, 0);

  return (
    <div style={p.card}>
      {/* Header */}
      <div style={p.header}>
        <div style={p.headerLeft}>
          <div style={p.bellWrap}>
            <svg
              width="13"
              height="13"
              viewBox="0 0 16 16"
              fill="none"
              stroke="#fff"
              strokeWidth="1.8"
            >
              <path d="M8 2a5 5 0 0 1 5 5c0 2.5-1 4-2 5H5c-1-1-2-2.5-2-5a5 5 0 0 1 5-5z" />
              <path d="M6 12v1a2 2 0 0 0 4 0v-1" />
            </svg>
          </div>
          <span style={p.headerTitle}>Engagement Check</span>
        </div>
        <span style={{ ...p.timerBadge, color: timerColor }}>
          {revealed ? "done ✓" : `${timeLeft}s`}
        </span>
      </div>

      {/* Body */}
      <div style={p.body}>
        <p style={p.question}>What does CSS primarily control on a webpage?</p>

        <div style={p.options}>
          {RESPONSES.map((r) => {
            const pct =
              totalVotes > 0
                ? Math.round((animVotes[r.id] / totalVotes) * 100)
                : 0;
            const isSelected = selected === r.id;
            const isCorrect = r.correct;
            const showResult = revealed;

            let barBg = "#f1f5f9";
            if (showResult && isCorrect) barBg = "#dcfce7";
            else if (showResult && isSelected && !isCorrect) barBg = "#fee2e2";

            let labelColor = "#1e40af";
            if (showResult && isCorrect) labelColor = "#166534";
            else if (showResult && isSelected && !isCorrect)
              labelColor = "#991b1b";

            let borderColor = "#bfdbfe";
            if (isSelected && !showResult) borderColor = "#2563eb";
            if (showResult && isCorrect) borderColor = "#86efac";
            if (showResult && isSelected && !isCorrect) borderColor = "#fca5a5";

            return (
              <div
                key={r.id}
                onClick={() => handleSelect(r.id)}
                style={{
                  ...p.option,
                  borderColor,
                  cursor: revealed ? "default" : "pointer",
                  background: isSelected && !showResult ? "#eff6ff" : "#ffffff",
                }}
              >
                {showResult && (
                  <div
                    style={{
                      ...p.barFill,
                      width: `${pct}%`,
                      background: barBg,
                    }}
                  />
                )}
                <span style={{ ...p.optLabel, color: labelColor }}>
                  {r.label}
                </span>
                {showResult && (
                  <span style={{ ...p.pctLabel, color: labelColor }}>
                    {pct}%
                  </span>
                )}
                {showResult && isCorrect && (
                  <span style={p.correctBadge}>✓</span>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div style={p.footer}>
          <div style={p.respondedRow}>
            <div style={p.respDot} />
            <span style={p.respondedText}>
              {responded}/{TOTAL_STUDENTS} responded
            </span>
          </div>
          {revealed && (
            <span style={p.resultNote}>
              {selected === "r2" ? "Correct! 🎉" : "Answer was B"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <div style={h.wrap}>
      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .hero-inner {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 56px;
          width: 100%;
          max-width: 1080px;
          padding: 60px 40px;
          position: relative;
          z-index: 2;
        }
        .hero-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 20px;
          flex: 1 1 420px;
          max-width: 520px;
        }
        .hero-heading {
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.13;
          margin: 0;
        }
        .hero-subtext {
          font-size: clamp(15px, 1.6vw, 17px);
          color: #475569;
          line-height: 1.7;
          margin: 0;
          max-width: 460px;
        }
        .hero-btns {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .prompt-col {
          flex: 0 0 auto;
          width: 260px;
          filter: drop-shadow(0 10px 28px rgba(37,99,235,0.14));
          animation: floatY 4s ease-in-out infinite;
        }
        @media (max-width: 768px) {
          .hero-inner {
            flex-direction: column !important;
            gap: 36px !important;
            padding: 40px 20px 52px !important;
          }
          .hero-text {
            align-items: center !important;
            text-align: center !important;
            max-width: 100% !important;
          }
          .hero-heading {
            font-size: 30px !important;
          }
          .hero-subtext {
            font-size: 15px !important;
          }
          .hero-btns {
            justify-content: center !important;
          }
          .prompt-col {
            width: 100% !important;
            max-width: 340px !important;
            animation: none !important;
          }
        }
      `}</style>

      {/* Dot grid */}
      <div style={h.dotGrid} />
      {/* Glow blobs */}
      <div
        style={{
          ...h.blob,
          top: "8%",
          left: "2%",
          width: "380px",
          height: "380px",
        }}
      />
      <div
        style={{
          ...h.blob,
          bottom: "4%",
          right: "2%",
          width: "300px",
          height: "300px",
          opacity: 0.35,
        }}
      />

      <div className="hero-inner">
        {/* Left — text */}
        <div className="hero-text">
          <h2 className="hero-heading">
            Run Live Classes.
            <br />
            Track Attention.
            <br />
            Never Lose Engagement.
          </h2>
          <p className="hero-subtext">
            Host interactive live sessions with real-time attendance tracking
            and on-screen prompts that keep students engaged and accountable.
          </p>
          <div className="hero-btns">
            <button className="btn btn-primary btn-lg shadow px-5">
              Get Started
            </button>
            <button className="btn btn-outline-primary btn-lg shadow px-5">
              Join a Free Session
            </button>
          </div>
        </div>

        {/* Right — engagement prompt */}
        <div className="prompt-col">
          <EngagementPrompt />
        </div>
      </div>
    </div>
  );
}

const h = {
  wrap: {
    position: "relative",
    minHeight: "88vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    background: "#ffffff",
    paddingTop: "72px",
  },
  dotGrid: {
    position: "absolute",
    inset: 0,
    backgroundImage: "radial-gradient(circle, #c7d9f8 1px, transparent 1px)",
    backgroundSize: "28px 28px",
    opacity: 0.5,
    pointerEvents: "none",
  },
  blob: {
    position: "absolute",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)",
    pointerEvents: "none",
  },
};

const p = {
  card: {
    width: "100%",
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "16px",
    overflow: "hidden",
    fontFamily: "system-ui, sans-serif",
  },
  header: {
    background: "#2563eb",
    padding: "11px 14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerLeft: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  bellWrap: {
    width: "24px",
    height: "24px",
    borderRadius: "6px",
    background: "rgba(255,255,255,0.18)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: "13px",
    fontWeight: "600",
    color: "#ffffff",
  },
  timerBadge: {
    fontSize: "12px",
    fontWeight: "700",
    background: "rgba(255,255,255,0.15)",
    borderRadius: "20px",
    padding: "2px 10px",
    transition: "color 0.3s",
  },
  body: {
    padding: "14px",
    background: "#f8fafc",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  question: {
    fontSize: "13px",
    fontWeight: "600",
    color: "#0f172a",
    margin: 0,
    lineHeight: 1.45,
  },
  options: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  option: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    padding: "9px 12px",
    border: "1px solid #bfdbfe",
    borderRadius: "8px",
    background: "#ffffff",
    overflow: "hidden",
    transition: "border-color 0.2s",
    userSelect: "none",
    gap: "6px",
  },
  barFill: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    transition: "width 0.6s ease",
    zIndex: 0,
    borderRadius: "8px",
  },
  optLabel: {
    fontSize: "12px",
    fontWeight: "500",
    flex: 1,
    position: "relative",
    zIndex: 1,
  },
  pctLabel: {
    fontSize: "11px",
    fontWeight: "700",
    position: "relative",
    zIndex: 1,
  },
  correctBadge: {
    fontSize: "11px",
    color: "#16a34a",
    fontWeight: "700",
    position: "relative",
    zIndex: 1,
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "2px",
  },
  respondedRow: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  respDot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "#22c55e",
  },
  respondedText: {
    fontSize: "11px",
    color: "#64748b",
  },
  resultNote: {
    fontSize: "11px",
    fontWeight: "600",
    color: "#2563eb",
  },
};
