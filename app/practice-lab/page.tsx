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

const CASES = [
  {
    title: "Case 1 • Pneumonia",
    subtitle: "Respiratory reassessment and structured documentation",
    patient: "Maria Gonzalez",
    room: "412B",
    focus: [
      "Oxygen therapy documentation",
      "Flowsheet completion",
      "Antibiotic follow-up",
      "Patient education",
    ],
    summary:
      "Practice respiratory documentation, structured flowsheet charting, and follow-up workflow for a patient admitted with community-acquired pneumonia.",
    badge: "Foundational",
  },
  {
    title: "Case 2 • CHF Exacerbation",
    subtitle: "Fluid balance, daily weights, and medication follow-up",
    patient: "James Carter",
    room: "518A",
    focus: [
      "I&O tracking",
      "Daily weights",
      "Edema assessment",
      "Diuretic follow-up",
    ],
    summary:
      "Practice fluid overload documentation, net balance review, daily weights, and medication workflow in a heart failure case.",
    badge: "Intermediate",
  },
  {
    title: "Case 3 • Sepsis / Infection Escalation",
    subtitle: "Urgent reassessment and escalation workflow",
    patient: "Angela Brooks",
    room: "620C",
    focus: [
      "Abnormal vital sign recognition",
      "Lactate/culture review",
      "Antibiotic timing",
      "Escalation documentation",
    ],
    summary:
      "Practice urgent documentation, sepsis-related workflow thinking, and time-sensitive intervention review for a deteriorating patient.",
    badge: "High Priority",
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
            Mini EHR Simulation • Clinical Informatics Learning
          </div>

          <h1
            style={{
              fontSize: 48,
              lineHeight: 1.05,
              margin: "0 0 12px",
              maxWidth: 900,
            }}
          >
            Practice documentation, workflow thinking, and chart review in a mini EHR environment.
          </h1>

          <p
            style={{
              margin: 0,
              color: COLORS.muted,
              fontSize: 22,
              lineHeight: 1.6,
              maxWidth: 980,
            }}
          >
            Choose a training case below to work through structured documentation, flowsheets,
            MAR review, scoring, feedback, and preceptor-ready summaries.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }}>
            <Link href="/practice-lab/chart" style={primaryButtonStyle}>
              Open Chart Simulator
            </Link>
            <Link href="/preceptorship" style={secondaryButtonStyle}>
              Explore Preceptorship
            </Link>
          </div>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 18,
            marginBottom: 22,
          }}
        >
          {CASES.map((item) => (
            <div
              key={item.title}
              style={{
                border: `1px solid ${COLORS.border}`,
                borderRadius: 18,
                background: COLORS.card,
                padding: 20,
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  padding: "6px 10px",
                  borderRadius: 999,
                  border: `1px solid ${COLORS.border}`,
                  background: COLORS.soft,
                  color: COLORS.tealDark,
                  fontSize: 12,
                  fontWeight: 800,
                  marginBottom: 12,
                }}
              >
                {item.badge}
              </div>

              <h2 style={{ margin: "0 0 6px", fontSize: 26 }}>{item.title}</h2>
              <div style={{ color: COLORS.tealDark, fontWeight: 700, marginBottom: 10 }}>
                {item.subtitle}
              </div>
              <div style={{ color: COLORS.muted, marginBottom: 14 }}>
                Patient: <b style={{ color: COLORS.text }}>{item.patient}</b> • Room {item.room}
              </div>

              <p style={{ color: COLORS.muted, lineHeight: 1.7, marginTop: 0 }}>
                {item.summary}
              </p>

              <div
                style={{
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: 12,
                  padding: 14,
                  background: COLORS.soft,
                  marginTop: 12,
                }}
              >
                <div style={{ fontWeight: 800, marginBottom: 8 }}>Key learning focus</div>
                <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.8, color: COLORS.muted }}>
                  {item.focus.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>

              <div style={{ marginTop: 16 }}>
                <Link href="/practice-lab/chart" style={primaryButtonStyle}>
                  Launch Case
                </Link>
              </div>
            </div>
          ))}
        </section>

        <section
          style={{
            border: `1px solid ${COLORS.border}`,
            borderRadius: 18,
            background: "#ffffff",
            padding: 22,
          }}
        >
          <div style={{ color: COLORS.tealDark, fontWeight: 800, fontSize: 13, marginBottom: 8 }}>
            Planned Expansion
          </div>

          <h2 style={{ margin: "0 0 10px", fontSize: 30 }}>
            Next cases can expand toward common real-world comorbidity patterns.
          </h2>

          <p style={{ color: COLORS.muted, lineHeight: 1.8, marginTop: 0 }}>
            A future diabetes case would fit very naturally here, especially a patient with
            multiple interacting conditions such as heart failure, chronic kidney disease, or
            infection. That would let students practice glucose trends, insulin timing, meal
            coordination, and comorbidity-aware documentation.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 14,
              marginTop: 14,
            }}
          >
            <MiniPlanCard
              title="Future Case 4"
              text="Diabetes + CHF or CKD with glucose trends, insulin timing, and meal coordination."
            />
            <MiniPlanCard
              title="Future Feature"
              text="Preceptor comments and evaluation notes attached to printable review summaries."
            />
            <MiniPlanCard
              title="Future Workflow"
              text="Case-specific checkpoints such as sepsis escalation timing or insulin safety prompts."
            />
          </div>
        </section>
      </div>
    </main>
  );
}

function MiniPlanCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div
      style={{
        border: "1px solid #dbe7e5",
        borderRadius: 14,
        padding: 16,
        background: "#f8fbfa",
      }}
    >
      <div style={{ fontWeight: 800, marginBottom: 6 }}>{title}</div>
      <div style={{ color: "#475569", lineHeight: 1.7 }}>{text}</div>
    </div>
  );
}

const primaryButtonStyle: React.CSSProperties = {
  display: "inline-block",
  padding: "12px 16px",
  borderRadius: 12,
  border: "1px solid #0b5f58",
  background: "#0f766e",
  color: "#ffffff",
  fontWeight: 800,
  textDecoration: "none",
};

const secondaryButtonStyle: React.CSSProperties = {
  display: "inline-block",
  padding: "12px 16px",
  borderRadius: 12,
  border: "1px solid #dbe7e5",
  background: "#ffffff",
  color: "#0f172a",
  fontWeight: 700,
  textDecoration: "none",
};
