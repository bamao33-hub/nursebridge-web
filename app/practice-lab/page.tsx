import Link from "next/link";

export default function PracticeLabPage() {
  const COLORS = {
    teal: "#0f766e",
    tealDark: "#0b5f58",
    bg: "#f7faf9",
    card: "#ffffff",
    border: "#dbe7e5",
    text: "#0f172a",
    muted: "#475569",
    soft: "#ecf7f5",
  };

  return (
    <main
      style={{
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
        backgroundColor: COLORS.bg,
        color: COLORS.text,
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          backgroundColor: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(8px)",
          borderBottom: `1px solid ${COLORS.border}`,
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "14px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              textDecoration: "none",
              color: COLORS.text,
            }}
          >
            <img
              src="/logo-icon.jpeg"
              alt="NurseBridge Consulting"
              style={{ height: 44, width: "auto", display: "block" }}
            />
            <div style={{ lineHeight: 1.1 }}>
              <div style={{ fontSize: 18, fontWeight: 800 }}>NurseBridge Consulting LLC</div>
              <div style={{ fontSize: 13, color: COLORS.muted }}>
                Clinical Informatics • EHR Optimization • Nursing Preceptorship
              </div>
            </div>
          </Link>

          <nav style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
            <Link href="/" style={{ color: COLORS.text, textDecoration: "none", fontSize: 14 }}>
              Home
            </Link>
            <Link
              href="/preceptorship"
              style={{ color: COLORS.text, textDecoration: "none", fontSize: 14 }}
            >
              Preceptorship
            </Link>
          </nav>
        </div>
      </header>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "26px 20px 46px" }}>
        <section
          style={{
            border: `1px solid ${COLORS.border}`,
            borderRadius: 18,
            padding: "26px 24px",
            backgroundColor: COLORS.soft,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              gap: 8,
              padding: "6px 10px",
              borderRadius: 999,
              backgroundColor: "#ffffff",
              color: COLORS.teal,
              fontSize: 12,
              fontWeight: 700,
              border: `1px solid ${COLORS.border}`,
              marginBottom: 14,
            }}
          >
            EHR Practice Lab • Coming Soon
          </div>

          <h1 style={{ fontSize: 40, margin: "0 0 10px 0", lineHeight: 1.08 }}>
            A simulation space for informatics learning and EHR workflow practice
          </h1>

          <p style={{ margin: 0, color: COLORS.muted, lineHeight: 1.7, maxWidth: 860 }}>
            The NurseBridge Practice Lab is being developed as a guided training environment where
            students and clinicians can practice structured documentation workflows, review mock
            patient charts, and strengthen real-world informatics thinking.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }}>
            <a
              href="mailto:info@nursebridgeconsulting.com?subject=Practice%20Lab%20Interest"
              style={{
                display: "inline-block",
                padding: "12px 16px",
                borderRadius: 12,
                backgroundColor: COLORS.teal,
                color: "white",
                fontWeight: 800,
                textDecoration: "none",
                border: `1px solid ${COLORS.tealDark}`,
              }}
            >
              Request Early Access
            </a>

            <Link
              href="/preceptorship"
              style={{
                display: "inline-block",
                padding: "12px 16px",
                borderRadius: 12,
                backgroundColor: "white",
                color: COLORS.text,
                fontWeight: 700,
                textDecoration: "none",
                border: `1px solid ${COLORS.border}`,
              }}
            >
              Explore Preceptorship
            </Link>
          </div>
        </section>

        <section style={{ paddingTop: 26, paddingBottom: 10 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 16,
            }}
          >
            {[
              {
                title: "Mock patient charts",
                desc: "Practice navigating realistic training cases with sample patient data, notes, and workflows.",
              },
              {
                title: "Documentation exercises",
                desc: "Work through structured charting tasks designed to build EHR confidence and efficiency.",
              },
              {
                title: "Informatics thinking",
                desc: "Learn to identify workflow issues, documentation challenges, and opportunities for optimization.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: 16,
                  padding: 18,
                  backgroundColor: COLORS.card,
                }}
              >
                <h3 style={{ margin: "0 0 8px 0" }}>{item.title}</h3>
                <p style={{ margin: 0, color: COLORS.muted, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ paddingTop: 8, paddingBottom: 10 }}>
          <div
            style={{
              border: `1px solid ${COLORS.border}`,
              borderRadius: 16,
              padding: 20,
              backgroundColor: COLORS.card,
            }}
          >
            <div style={{ color: COLORS.teal, fontWeight: 800, fontSize: 13, marginBottom: 6 }}>
              Planned Features
            </div>

            <h2 style={{ margin: "0 0 12px 0" }}>What the first version may include</h2>

            <ul style={{ margin: 0, paddingLeft: 18, color: COLORS.muted, lineHeight: 1.8 }}>
              <li>Training patient header and chart overview</li>
              <li>Mock documentation note screen</li>
              <li>Flowsheet-style practice area</li>
              <li>Case-based workflow review prompts</li>
              <li>Student-friendly guided feedback</li>
            </ul>
          </div>
        </section>

        <footer
          style={{
            borderTop: `1px solid ${COLORS.border}`,
            paddingTop: 16,
            marginTop: 20,
            color: COLORS.muted,
            fontSize: 13,
          }}
        >
          © 2026 NurseBridge Consulting LLC
        </footer>
      </div>
    </main>
  );
}
