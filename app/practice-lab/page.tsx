const COLORS = {
  teal: "#0f766e",
  tealDark: "#0b5f58",
  bg: "#f7faf9",
  card: "#ffffff",
  border: "#dbe7e5",
  text: "#0f172a",
  muted: "#475569",
  soft: "#ecf7f5",
  high: "#b91c1c",
  medium: "#b45309",
  low: "#166534",
};

const PATIENTS = [
  {
    caseKey: "pneumonia",
    room: "412B",
    patient: "Maria Gonzalez",
    diagnosis: "Pneumonia",
    nurse: "J. Thompson, RN",
    status: "Stable",
    priority: "Routine",
    lastUpdate: "Respiratory reassessment due",
  },
  {
    caseKey: "chf",
    room: "518A",
    patient: "James Carter",
    diagnosis: "CHF Exacerbation",
    nurse: "L. Harris, RN",
    status: "Needs trending",
    priority: "Monitor",
    lastUpdate: "I&O / daily weight review",
  },
  {
    caseKey: "sepsis",
    room: "620C",
    patient: "Angela Brooks",
    diagnosis: "Sepsis secondary to UTI",
    nurse: "S. Reed, RN",
    status: "Escalation risk",
    priority: "High",
    lastUpdate: "Lactate / antibiotic timing",
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
            maxWidth: 1240,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <div>
            <div style={{ fontWeight: 800, fontSize: 24 }}>NurseBridge Practice Lab</div>
            <div style={{ color: COLORS.muted, fontSize: 13 }}>
              Patient Census • Mini EHR Workflow
            </div>
          </div>

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

      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "24px 20px 40px" }}>
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
            Unit Census • Select a Chart
          </div>

          <h1
            style={{
              margin: "0 0 10px",
              fontSize: 40,
              lineHeight: 1.06,
              maxWidth: 920,
            }}
          >
            Open a patient chart directly from the census list.
          </h1>

          <p
            style={{
              margin: 0,
              color: COLORS.muted,
              fontSize: 19,
              lineHeight: 1.7,
              maxWidth: 980,
            }}
          >
            This dashboard is designed to feel more like a real inpatient workflow. Click any
            patient row to launch the corresponding case in the chart simulator.
          </p>
        </section>

        <section
          style={{
            border: `1px solid ${COLORS.border}`,
            borderRadius: 18,
            background: "#ffffff",
            overflow: "hidden",
            marginBottom: 18,
          }}
        >
          <div
            style={{
              padding: "14px 16px",
              borderBottom: `1px solid ${COLORS.border}`,
              background: "#ffffff",
              fontWeight: 800,
            }}
          >
            Medical Floor Census
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "90px 2fr 2fr 1.3fr 1fr 1.4fr 130px",
              background: COLORS.soft,
              fontWeight: 800,
              fontSize: 13,
            }}
          >
            <div style={headCell}>Room</div>
            <div style={headCell}>Patient</div>
            <div style={headCell}>Diagnosis</div>
            <div style={headCell}>Assigned Nurse</div>
            <div style={headCell}>Priority</div>
            <div style={headCell}>Latest Focus</div>
            <div style={headCell}>Chart</div>
          </div>

          {PATIENTS.map((p) => (
            <div
              key={`${p.caseKey}-${p.room}`}
              style={{
                display: "grid",
                gridTemplateColumns: "90px 2fr 2fr 1.3fr 1fr 1.4fr 130px",
                borderTop: `1px solid ${COLORS.border}`,
                alignItems: "stretch",
                background: "#ffffff",
              }}
            >
              <div style={bodyCell}>
                <div style={{ fontWeight: 800 }}>{p.room}</div>
              </div>

              <div style={bodyCell}>
                <div style={{ fontWeight: 800 }}>{p.patient}</div>
                <div style={{ color: COLORS.muted, fontSize: 13, marginTop: 4 }}>
                  {p.status}
                </div>
              </div>

              <div style={bodyCell}>{p.diagnosis}</div>

              <div style={bodyCell}>{p.nurse}</div>

              <div style={bodyCell}>
                <PriorityBadge priority={p.priority} />
              </div>

              <div style={bodyCell}>
                <div style={{ color: COLORS.muted }}>{p.lastUpdate}</div>
              </div>

              <div style={bodyCell}>
                <a
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
                    textAlign: "center",
                  }}
                >
                  Open
                </a>
              </div>
            </div>
          ))}
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
          }}
        >
          <MiniCard
            title="How to use this"
            text="Select a patient from the census, review the chart, complete documentation, and open Preceptor Review Mode when finished."
          />
          <MiniCard
            title="Why this matters"
            text="This workflow helps learners think like clinicians and informatics analysts at the same time: charting, timing, follow-up, and escalation."
          />
          <MiniCard
            title="Coming next"
            text="A diabetes-with-comorbidity case can fit naturally into this census view as a fourth patient."
          />
        </section>
      </div>
    </main>
  );
}

function PriorityBadge({ priority }: { priority: string }) {
  const styles: Record<string, React.CSSProperties> = {
    High: {
      background: "#fef2f2",
      color: "#b91c1c",
      border: "1px solid #fecaca",
    },
    Monitor: {
      background: "#fffbeb",
      color: "#b45309",
      border: "1px solid #fde68a",
    },
    Routine: {
      background: "#ecfdf5",
      color: "#166534",
      border: "1px solid #bbf7d0",
    },
  };

  return (
    <span
      style={{
        display: "inline-block",
        padding: "5px 10px",
        borderRadius: 999,
        fontSize: 12,
        fontWeight: 800,
        ...(styles[priority] || styles.Routine),
      }}
    >
      {priority}
    </span>
  );
}

function MiniCard({
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
        borderRadius: 16,
        padding: 18,
        background: "#ffffff",
      }}
    >
      <div style={{ fontWeight: 800, marginBottom: 8 }}>{title}</div>
      <div style={{ color: "#475569", lineHeight: 1.7 }}>{text}</div>
    </div>
  );
}

const headCell: React.CSSProperties = {
  padding: "12px 14px",
  borderRight: "1px solid #dbe7e5",
};

const bodyCell: React.CSSProperties = {
  padding: "14px",
  borderRight: "1px solid #e5ecea",
  display: "flex",
  alignItems: "center",
};
