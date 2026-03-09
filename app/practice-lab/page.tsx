import Link from "next/link";

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

const PATIENTS = [
  {
    caseKey: "pneumonia",
    patient: "Maria Gonzalez",
    room: "412B",
    diagnosis: "Pneumonia",
    status: "Stable",
    badge: "Foundational",
    summary: "Respiratory reassessment, oxygen therapy documentation, and antibiotic follow-up.",
  },
  {
    caseKey: "chf",
    patient: "James Carter",
    room: "518A",
    diagnosis: "CHF Exacerbation",
    status: "Needs trending",
    badge: "Intermediate",
    summary: "Fluid balance, daily weights, edema review, and diuretic workflow.",
  },
  {
    caseKey: "sepsis",
    patient: "Angela Brooks",
    room: "620C",
    diagnosis: "Sepsis secondary to UTI",
    status: "High priority",
    badge: "Urgent",
    summary: "Escalation workflow, lactate review, culture timing, and antibiotic urgency.",
  },
  {
    caseKey: "diabetes",
    patient: "Future Case",
    room: "TBD",
    diagnosis: "Diabetes + Comorbidity",
    status: "Planned",
    badge: "Coming Soon",
    summary: "Glucose trends, insulin timing, meal coordination, and multi-condition documentation.",
    disabled: true,
  },
];

export default function PracticeLabPage() {
  return (
    <main
      style={{
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
        backgroundColor: COLORS.bg,
        minHeight: "100vh",
        color: COLORS.text,
      }}
    >
      <div
        style={{
          borderBottom: `1px solid ${COLORS.border}`,
          background: "#ffffff",
          padding: "10px 20px",
        }}
      >
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <div style={{ fontWeight: 800, fontSize: 22 }}>NurseBridge Practice Lab</div>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link
              href="/"
              style={{ textDecoration: "none", color: COLORS.teal, fontWeight: 700 }}
            >
              Home
            </Link>
            <Link
              href="/preceptorship"
              style={{ textDecoration: "none", color: COLORS.teal, fontWeight: 700 }}
            >
              Preceptorship
            </Link>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "28px 20px 40px" }}>
        <section
          style={{
            border: `1px solid ${COLORS.border}`,
            borderRadius: 20,
            background: COLORS.soft,
            padding: "28px 24px",
            marginBottom: 22,
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
              marginBottom: 14,
            }}
          >
            Patient List • Mini EHR Workflow
          </div>

          <h1
            style={{
              fontSize: 44,
              lineHeight: 1.05,
              margin: "0 0 12px",
              maxWidth: 900,
            }}
          >
            Select a patient chart and launch directly into the correct training case.
          </h1>

          <p
            style={{
              margin: 0,
              color: COLORS.muted,
              fontSize: 20,
              lineHeight: 1.6,
              maxWidth: 960,
            }}
          >
            This view is designed to feel more like a real patient list workflow. Choose a patient
            below to open the corresponding chart simulation.
          </p>
        </section>

        <section
          style={{
            border: `1px solid ${COLORS.border}`,
            borderRadius: 18,
            background: "#ffffff",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 2fr 1fr 1fr",
              background: COLORS.soft,
              fontWeight: 800,
              fontSize: 14,
            }}
          >
            <div style={headCell}>Patient</div>
            <div style={headCell}>Room</div>
            <div style={headCell}>Diagnosis</div>
            <div style={headCell}>Status</div>
            <div style={headCell}>Action</div>
          </div>

          {PATIENTS.map((p) => (
            <div
              key={`${p.patient}-${p.caseKey}`}
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr 2fr 1fr 1fr",
                borderTop: `1px solid ${COLORS.border}`,
                alignItems: "stretch",
                background: p.disabled ? "#fafafa" : "#ffffff",
              }}
            >
              <div style={bodyCell}>
                <div style={{ fontWeight: 800 }}>{p.patient}</div>
                <div style={{ color: COLORS.muted, fontSize: 13, marginTop: 4 }}>{p.summary}</div>
              </div>

              <div style={bodyCell}>{p.room}</div>

              <div style={bodyCell}>
                <div>{p.diagnosis}</div>
                <div
                  style={{
                    display: "inline-flex",
                    marginTop: 8,
                    padding: "4px 8px",
                    borderRadius: 999,
                    border: `1px solid ${COLORS.border}`,
                    background: COLORS.soft,
                    color: COLORS.tealDark,
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  {p.badge}
                </div>
              </div>

              <div style={bodyCell}>{p.status}</div>

              <div style={bodyCell}>
                {p.disabled ? (
                  <span
                    style={{
                      display: "inline-block",
                      padding: "10px 12px",
                      borderRadius: 10,
                      border: `1px solid ${COLORS.border}`,
                      background: "#f3f4f6",
                      color: COLORS.muted,
                      fontWeight: 700,
                    }}
                  >
                    Coming Soon
                  </span>
                ) : (
                  <Link
                    href={`/practice-lab/chart?case=${p.caseKey}`}
                    style={{
                      display: "inline-block",
                      padding: "10px 12px",
                      borderRadius: 10,
                      border: `1px solid ${COLORS.tealDark}`,
                      background: COLORS.teal,
                      color: "#ffffff",
                      textDecoration: "none",
                      fontWeight: 800,
                    }}
                  >
                    Open Chart
                  </Link>
                )}
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

const headCell: React.CSSProperties = {
  padding: "14px 16px",
  borderRight: "1px solid #dbe7e5",
};

const bodyCell: React.CSSProperties = {
  padding: "16px",
  borderRight: "1px solid #e5ecea",
};
