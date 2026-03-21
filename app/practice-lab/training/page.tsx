import Link from "next/link";

const COLORS = {
  text: "#0f172a",
  muted: "#475569",
  border: "#d7e6e3",
  soft: "#eef6f5",
  teal: "#0f766e",
  tealDark: "#115e59",
};

const primaryButtonStyle: React.CSSProperties = {
  display: "inline-block",
  textDecoration: "none",
  background: COLORS.teal,
  color: "#ffffff",
  fontWeight: 800,
  padding: "10px 14px",
  borderRadius: 12,
};

const secondaryButtonStyle: React.CSSProperties = {
  display: "inline-block",
  textDecoration: "none",
  background: "#ffffff",
  color: COLORS.text,
  fontWeight: 800,
  padding: "10px 14px",
  borderRadius: 12,
  border: `1px solid ${COLORS.border}`,
};

const cardStyle: React.CSSProperties = {
  border: `1px solid ${COLORS.border}`,
  borderRadius: 16,
  background: "#ffffff",
  padding: 20,
};

const sectionStyle: React.CSSProperties = {
  border: `1px solid ${COLORS.border}`,
  borderRadius: 16,
  background: "#ffffff",
  padding: "18px 20px",
  marginBottom: 16,
};

export default function TrainingLabPage() {
  return (
    <main style={{ background: "#f8fafb", minHeight: "100vh", color: COLORS.text }}>
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "28px 20px 48px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
            alignItems: "center",
            marginBottom: 18,
          }}
        >
          <div>
            <div style={{ fontWeight: 800, fontSize: 24 }}>Training Lab</div>
            <div style={{ color: COLORS.muted, fontSize: 13 }}>
              Education • Coaching • Change Support
            </div>
          </div>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/practice-lab" style={{ textDecoration: "none", color: COLORS.teal, fontWeight: 700 }}>
              Practice Lab Home
            </Link>
            <Link href="/preceptorship" style={{ textDecoration: "none", color: COLORS.teal, fontWeight: 700 }}>
              Preceptorship
            </Link>
          </div>
        </div>

        <section
          style={{
            border: `1px solid ${COLORS.border}`,
            borderRadius: 18,
            background: COLORS.soft,
            padding: "24px 22px",
            marginBottom: 18,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              padding: "6px 12px",
              borderRadius: 999,
              border: `1px solid ${COLORS.border}`,
              background: "#ffffff",
              color: COLORS.tealDark,
              fontSize: 12,
              fontWeight: 800,
              marginBottom: 12,
            }}
          >
            Training • Scenario-Based Practice
          </div>

          <h1
            style={{
              fontSize: "clamp(30px, 5vw, 54px)",
              lineHeight: 1.08,
              margin: "0 0 12px 0",
            }}
          >
            Practice informatics education, coaching, and go-live support.
          </h1>

          <p
            style={{
              margin: 0,
              color: COLORS.muted,
              fontSize: 18,
              lineHeight: 1.7,
              maxWidth: 980,
            }}
          >
            These scenarios help students think like informatics trainers and educators by
            identifying learning gaps, planning short teaching interventions, and supporting
            workflow adoption during change.
          </p>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 6 }}>
            Switch Informatics Role
          </div>
          <div style={{ color: COLORS.muted, fontSize: 14, lineHeight: 1.6, marginBottom: 14 }}>
            Explore different nursing informatics pathways within the practice lab.
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/practice-lab" style={secondaryButtonStyle}>
              Systems
            </Link>

            <Link href="/practice-lab/liaison" style={secondaryButtonStyle}>
              Clinical Liaison
            </Link>

            <div
              style={{
                padding: "10px 14px",
                borderRadius: 12,
                background: COLORS.teal,
                color: "#ffffff",
                fontWeight: 800,
                fontSize: 14,
              }}
            >
              Training
            </div>

            <div
              style={{
                padding: "10px 14px",
                borderRadius: 12,
                border: `1px solid ${COLORS.border}`,
                background: "#f8fafb",
                color: COLORS.muted,
                fontWeight: 700,
                fontSize: 14,
              }}
            >
              Leadership
            </div>
          </div>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 8 }}>
            What You Are Practicing
          </div>

          <ul style={{ margin: "10px 0 0 18px", color: COLORS.muted, lineHeight: 1.8 }}>
            <li>Identifying training and workflow-adoption gaps</li>
            <li>Delivering focused teaching and coaching</li>
            <li>Supporting staff during change and go-live events</li>
          </ul>
        </section>

        <div style={{ color: COLORS.muted, fontSize: 14, marginBottom: 12 }}>
          Recommended progression: Scenario 1 → Scenario 2
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 18,
          }}
        >
          <div style={cardStyle}>
            <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 8 }}>
              Scenario 1: Flowsheet Documentation Teaching Moment
            </div>
            <div style={{ color: COLORS.muted, lineHeight: 1.7, marginBottom: 14 }}>
              A unit is showing recurring flowsheet documentation errors. Identify the teaching
              need, explain the workflow clearly, and plan a short corrective education session.
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link href="/practice-lab/training/scenario-1" style={primaryButtonStyle}>
                Start Scenario 1
              </Link>
            </div>
          </div>

          <div style={cardStyle}>
            <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 8 }}>
              Scenario 2: New Workflow Go-Live Support
            </div>
            <div style={{ color: COLORS.muted, lineHeight: 1.7, marginBottom: 14 }}>
              A new discharge workflow is going live. Build a communication plan, outline
              tip-sheet content, and prepare a practical support strategy for staff.
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link href="/practice-lab/training/scenario-2" style={primaryButtonStyle}>
                Start Scenario 2
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
