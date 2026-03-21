import Link from "next/link";

const COLORS = {
  text: "#0f172a",
  muted: "#475569",
  border: "#d7e6e3",
  soft: "#eef6f5",
  teal: "#0f766e",
  tealDark: "#115e59",
};

const sectionStyle: React.CSSProperties = {
  border: `1px solid ${COLORS.border}`,
  borderRadius: 16,
  background: "#ffffff",
  padding: 20,
  marginBottom: 16,
};

const softSectionStyle: React.CSSProperties = {
  border: `1px solid ${COLORS.border}`,
  borderRadius: 18,
  background: COLORS.soft,
  padding: "24px 22px",
  marginBottom: 18,
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

const listStyle: React.CSSProperties = {
  margin: "10px 0 0 18px",
  padding: 0,
  color: COLORS.muted,
  lineHeight: 1.8,
};

export default function LiaisonScenarioFivePage() {
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
            <div style={{ fontWeight: 800, fontSize: 24 }}>
              Scenario 5: Device Integration Issue
            </div>
            <div style={{ color: COLORS.muted, fontSize: 13 }}>
              Clinical Liaison • Technical Triage • Cross-Team Escalation
            </div>
          </div>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/practice-lab/liaison" style={{ textDecoration: "none", color: COLORS.teal, fontWeight: 700 }}>
              Liaison Lab
            </Link>
            <Link href="/preceptorship" style={{ textDecoration: "none", color: COLORS.teal, fontWeight: 700 }}>
              Preceptorship
            </Link>
          </div>
        </div>

        <section style={softSectionStyle}>
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
            Clinical Liaison • Device Integration Triage
          </div>

          <h1
            style={{
              fontSize: "clamp(30px, 5vw, 54px)",
              lineHeight: 1.08,
              margin: "0 0 12px 0",
            }}
          >
            Vital signs devices stop sending data into the patient chart
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
            Staff report that bedside vital signs machines are no longer sending readings into the
            EHR. Your role is to assess the workflow impact, clarify what is and is not working,
            document findings, and route the issue to the appropriate team without overstepping
            into pure technical troubleshooting.
          </p>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Scenario Setup</div>

          <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
            <div><strong style={{ color: COLORS.text }}>Unit:</strong> Telemetry</div>
            <div><strong style={{ color: COLORS.text }}>Issue:</strong> Device readings are not crossing into the chart</div>
            <div><strong style={{ color: COLORS.text }}>Concern:</strong> Delayed charting, duplicate work, risk of missing documentation</div>
            <div><strong style={{ color: COLORS.text }}>Learner Role:</strong> Clinical Liaison / Informatics Nurse</div>
          </div>

          <div
            style={{
              marginTop: 16,
              padding: 16,
              borderRadius: 12,
              border: `1px solid ${COLORS.border}`,
              background: "#f8fafb",
            }}
          >
            <div style={{ fontWeight: 800, marginBottom: 8 }}>Trigger Event</div>
            <div style={{ color: COLORS.muted, lineHeight: 1.7 }}>
              A charge nurse calls Informatics Support:
              <br /><br />
              <em>
                “The vital signs machines are taking readings, but nothing is showing up in the chart.
                Nurses are having to enter everything manually.”
              </em>
            </div>
          </div>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Learning Objectives</div>
          <ul style={listStyle}>
            <li>Clarify the problem before escalation</li>
            <li>Distinguish device, network, and EHR interface considerations</li>
            <li>Assess workflow impact on nursing staff</li>
            <li>Document findings clearly for the correct support team</li>
            <li>Recommend safe interim workflow guidance</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 0 — First Action</div>
          <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
            Choose the best initial response as the clinical liaison.
          </div>
          <ul style={listStyle}>
            <li>Tell nurses to wait until IT fixes it</li>
            <li>Clarify whether the device is collecting data, whether the chart is receiving it, and how staff are documenting in the meantime</li>
            <li>Immediately rebuild the flowsheet rows</li>
            <li>Assume the network is down and escalate without workflow review</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 1 — Clarify What Is Working</div>
          <ul style={listStyle}>
            <li>Are the devices still taking readings?</li>
            <li>Is the problem affecting all rooms or only certain devices?</li>
            <li>Are readings visible on the machine but absent in the chart?</li>
            <li>Is manual charting currently being used?</li>
            <li>When did the problem begin?</li>
          </ul>

          <div
            style={{
              marginTop: 16,
              padding: 16,
              borderRadius: 12,
              border: `1px solid ${COLORS.border}`,
              background: "#f8fafb",
            }}
          >
            <div style={{ fontWeight: 800, marginBottom: 8 }}>Simulated Findings</div>
            <ul style={listStyle}>
              <li>The devices are still collecting blood pressure, pulse, temperature, and oxygen saturation</li>
              <li>The issue affects multiple rooms on one unit</li>
              <li>Readings are visible on the machine but not crossing into the EHR</li>
              <li>Nurses have started entering vitals manually</li>
              <li>The issue started early this morning after a device maintenance update</li>
            </ul>
          </div>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 2 — Workflow Impact Assessment</div>
          <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
            Assess how the issue affects care delivery and documentation.
          </div>
          <ul style={listStyle}>
            <li>Increased nurse workload due to manual entry</li>
            <li>Risk of delayed or omitted charting</li>
            <li>Potential duplication if readings later cross unexpectedly</li>
            <li>Reduced trust in automated documentation workflows</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 3 — Ownership Identification</div>
          <ul style={listStyle}>
            <li>Device / biomedical team: confirm machine-side function</li>
            <li>Network or interface support team: assess transmission path</li>
            <li>EHR / analyst team: verify receiving-side interface behavior if needed</li>
            <li>Clinical liaison: document findings, communicate workflow impact, and coordinate escalation</li>
            <li>Nursing leadership: reinforce interim documentation expectations</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 4 — Recommended Interim Guidance</div>
          <ul style={listStyle}>
            <li>Continue manual documentation until data transmission is restored</li>
            <li>Reinforce complete and timely entry of vital signs</li>
            <li>Notify charge nurse and leadership of the workflow burden</li>
            <li>Communicate clearly that the issue is being investigated across teams</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 5 — Escalation Summary</div>
          <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
            A strong escalation should explain:
          </div>
          <ul style={listStyle}>
            <li>what is happening</li>
            <li>what still works</li>
            <li>what is failing</li>
            <li>how staff are managing in the meantime</li>
            <li>which team should own the next technical review</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Common Mistakes to Avoid</div>
          <ul style={listStyle}>
            <li>Escalating vaguely without clarifying what is actually broken</li>
            <li>Assuming this is only an EHR issue</li>
            <li>Ignoring nursing workflow burden while the issue is open</li>
            <li>Failing to provide interim documentation guidance</li>
          </ul>
        </section>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
          <Link href="/practice-lab/liaison" style={secondaryButtonStyle}>
            Back to Liaison Lab
          </Link>
          <Link href="/practice-lab/liaison/scenario-4" style={secondaryButtonStyle}>
            Review Scenario 4
          </Link>
        </div>
      </div>
    </main>
  );
}
