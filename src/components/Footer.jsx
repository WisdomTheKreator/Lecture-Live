export default function Footer() {
  const cols = [
    {
      title: "Product",
      links: ["Features", "How It Works", "Pricing", "Updates"],
    },
    {
      title: "Resources",
      links: ["Documentation", "API Reference", "Help Center", "Blog"],
    },
    { title: "Company", links: ["About Us", "Careers", "Contact", "Partners"] },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Security", "GDPR"],
    },
  ];

  return (
    <footer
      id="contact"
      style={{
        background: "#040b1a",
        borderTop: "1px solid rgba(59,130,246,0.1)",
        padding: "60px 1.5rem 30px",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          {cols.map((col, i) => (
            <div key={i}>
              <p
                style={{
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  marginBottom: "1rem",
                }}
              >
                {col.title}
              </p>
              {col.links.map((l) => (
                <p
                  key={l}
                  style={{
                    color: "rgba(255,255,255,0.35)",
                    fontSize: "0.85rem",
                    marginBottom: "0.6rem",
                    cursor: "pointer",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#60a5fa")}
                  onMouseLeave={(e) =>
                    (e.target.style.color = "rgba(255,255,255,0.35)")
                  }
                >
                  {l}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: 8,
                background: "linear-gradient(135deg, #3b82f6, #6366f1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </div>
            <span
              style={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem" }}
            >
              Lecture<span style={{ color: "#60a5fa" }}>Live</span>
            </span>
          </div>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.8rem" }}>
            © {new Date().getFullYear()} LectureLive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
