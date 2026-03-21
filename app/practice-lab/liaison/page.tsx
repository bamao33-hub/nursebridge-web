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

export default function LiaisonLabPage() {
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
            <div style={{ fontWeight: 800, fontSize: 24 }}>Clinical Liaison Lab</div>
            <div style={{ color: COLORS.muted, fontSize: 13 }}>
              Workflow Analysis • Communication • Ticket Triage
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
            Clinical Liaison • Scenario-Based Practice
          </div>

          <h1
            style={{
              fontSize: "clamp(30px, 5vw, 56px)",
              lineHeight: 1.08,
              margin: "0 0 12px 0",
            }}
          >
            Practice real-world clinical informatics decision-making.
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
            These scenarios help students think like clinical liaisons by analyzing workflow problems,
            identifying ownership, recommending safe next steps, and communicating clearly across teams.
          </p>
        </section>

        <section
          style={{
            border: `1px solid ${COLORS.border}`,
            borderRadius: 16,
            background: "#ffffff",
            padding: "18px 20px",
            marginBottom: 16,
          }}
        >
          <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 6 }}>
            Switch Informatics Role
          </div>
          <div style={{ color: COLORS.muted, fontSize: 14, lineHeight: 1.6, marginBottom: 14 }}>
            Explore different nursing informatics pathways within the practice lab.
          </div>

          <div style={{ color: COLORS.muted, fontSize: 14, marginBottom: 12 }}>
  Recommended progression: Scenario 1 → Scenario 5
</div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/practice-lab" style={secondaryButtonStyle}>
              Systems
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
              Clinical Liaison
            </div>

          <Link
  href="/practice-lab/training"
  style={{
    textDecoration: "none",
    padding: "10px 14px",
    borderRadius: 12,
    border: `1px solid ${COLORS.border}`,
    background: "#ffffff",
    color: COLORS.text,
    fontWeight: 800,
    fontSize: 14,
    cursor: "pointer",
  }}
>
  Training
</Link>
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

        <section
  style={{
    border: `1px solid ${COLORS.border}`,
    borderRadius: 16,
    background: "#ffffff",
    padding: "18px 20px",
    marginBottom: 16,
  }}
>
  <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 8 }}>
    What You Are Practicing
  </div>

  <ul style={{ margin: "10px 0 0 18px", color: COLORS.muted, lineHeight: 1.8 }}>
    <li>Workflow analysis and root cause identification</li>
    <li>Clinical communication and stakeholder coordination</li>
    <li>Ticket triage, escalation, and ownership clarity</li>
  </ul>
</section>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 18,
          }}
        >
          <div style={cardStyle}>
            <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 8 }}>
              Scenario 1: Medication Workflow Failure
            </div>
            <div style={{ color: COLORS.muted, lineHeight: 1.7, marginBottom: 14 }}>
              A new MAR workflow rollout is linked to missed or late medication doses. Investigate the
              issue, identify the root cause, recommend a safe workaround, and submit a properly categorized ticket.
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link href="/practice-lab/liaison/scenario-1" style={primaryButtonStyle}>
                Start Scenario 1
              </Link>
            </div>
          </div>

          <div style={cardStyle}>
            <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 8 }}>
              Scenario 2: Clinical Staff Training Gap
            </div>
            <div style={{ color: COLORS.muted, lineHeight: 1.7, marginBottom: 14 }}>
              A telemetry unit is showing high error rates in flowsheet documentation. Determine whether
              the issue is training, workflow confusion, or build-related, and recommend an education plan.
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link href="/practice-lab/liaison/scenario-2" style={primaryButtonStyle}>
                Start Scenario 2
              </Link>
            </div>
          </div>
                    <div style={cardStyle}>
            <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 8 }}>
              Scenario 3: Order Set Optimization Request
            </div>
            <div style={{ color: COLORS.muted, lineHeight: 1.7, marginBottom: 14 }}>
              A provider reports that an order set includes outdated lab orders. Review the request,
              identify stakeholders, and determine whether this reflects workflow optimization,
              governance, or provider preference.
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link href="/practice-lab/liaison/scenario-3" style={primaryButtonStyle}>
                Start Scenario 3
              </Link>
            </div>
          </div>
          <div style={cardStyle}>
  <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 8 }}>
    Scenario 4: Downtime Recovery
  </div>
  <div style={{ color: COLORS.muted, lineHeight: 1.7, marginBottom: 14 }}>
    The EHR system experienced a downtime event. Validate documentation recovery,
    ensure reconciliation is complete, and communicate safely with leadership.
  </div>

  <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
    <Link href="/practice-lab/liaison/scenario-4" style={primaryButtonStyle}>
      Start Scenario 4
    </Link>
  </div>
</div>
          <div style={cardStyle}>
  <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 8 }}>
    Scenario 5: Device Integration Issue
  </div>
  <div style={{ color: COLORS.muted, lineHeight: 1.7, marginBottom: 14 }}>
    Vitals monitoring devices stop sending data into the EHR. Identify whether the issue
    is device, network, or system-related, and escalate appropriately.
  </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
    <Link href="/practice-lab/liaison/scenario-5" style={primaryButtonStyle}>
      Start Scenario 5
    </Link>
  </div>
</div>
          <section
  style={{
    border: `1px solid ${COLORS.border}`,
    borderRadius: 16,
    background: "#ffffff",
    padding: "18px 20px",
    marginBottom: 16,
  }}
>
  <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 6 }}>
    You’ve Completed the Clinical Liaison Lab
  </div>
  <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
    You have practiced key informatics liaison skills including workflow analysis,
    stakeholder communication, escalation, and system evaluation across multiple real-world scenarios.
  </div>
</section>
</div>
</div>
</main>
  );
}
