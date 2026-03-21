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

export default function LiaisonScenarioThreePage() {
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
              Scenario 3: Order Set Optimization Request
            </div>
            <div style={{ color: COLORS.muted, fontSize: 13 }}>
              Clinical Liaison • Change Request • Stakeholder Review
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
            Clinical Liaison • Order Set Review
          </div>

          <h1
            style={{
              fontSize: "clamp(30px, 5vw, 54px)",
              lineHeight: 1.08,
              margin: "0 0 12px 0",
            }}
          >
            A provider reports that an order set contains outdated laboratory orders
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
            Your role is to evaluate the request, clarify the workflow impact, determine the
            right stakeholders, and prepare a structured optimization request instead of jumping
            straight to a build change.
          </p>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Scenario Setup</div>

          <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
            <div><strong style={{ color: COLORS.text }}>Setting:</strong> Adult inpatient service</div>
            <div><strong style={{ color: COLORS.text }}>Issue:</strong> Provider says one admission order set includes outdated lab orders</div>
            <div><strong style={{ color: COLORS.text }}>Concern:</strong> Clinicians may be ordering tests that are no longer standard</div>
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
              A hospitalist sends a message:
              <br /><br />
              <em>
                “This admission order set still includes lab orders we don’t routinely use anymore.
                Can someone clean this up? It’s slowing us down and creating confusion.”
              </em>
            </div>
          </div>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Learning Objectives</div>
          <ul style={listStyle}>
            <li>Clarify the clinical request before recommending change</li>
            <li>Compare current workflow with the requested future state</li>
            <li>Identify appropriate stakeholders for review and approval</li>
            <li>Distinguish between provider preference and broader workflow need</li>
            <li>Draft a structured order set optimization request</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 0 — First Action</div>
          <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
            Before requesting a build change, choose the most appropriate first step.
          </div>
          <ul style={listStyle}>
            <li>Tell the analyst team to remove the orders immediately</li>
            <li>Clarify which orders are affected, who uses them, and whether the issue reflects workflow or preference</li>
            <li>Forward the request directly to leadership without review</li>
            <li>Ignore the request unless pharmacy also complains</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 1 — Clarify the Request</div>
          <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
            Ask focused questions before assuming the order set is truly outdated.
          </div>

          <ul style={listStyle}>
            <li>Which specific labs are considered outdated?</li>
            <li>Are these labs never used, or just used less often now?</li>
            <li>Does the current order set still match service-line standards?</li>
            <li>Is the issue affecting one provider or multiple providers?</li>
            <li>Has a clinical governance group approved a workflow change?</li>
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
              <li>Two lab orders are rarely used on the unit now</li>
              <li>Some providers still use them in select cases</li>
              <li>No recent formal governance decision has removed them from standard practice</li>
              <li>Providers want fewer clicks and less clutter in the order set</li>
            </ul>
          </div>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 2 — Analyze the Workflow Impact</div>
          <div style={{ color: COLORS.muted, lineHeight: 1.8, marginBottom: 10 }}>
            Determine whether the request is best handled as:
          </div>
          <ul style={listStyle}>
            <li>A true clinical standard change</li>
            <li>An optimization opportunity</li>
            <li>A provider preference issue</li>
            <li>A governance decision requiring review before build changes</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 3 — Identify Stakeholders</div>
          <ul style={listStyle}>
            <li>Ordering providers or service-line representatives</li>
            <li>Clinical informatics / liaison</li>
            <li>Analyst / build team</li>
            <li>Clinical governance or order set review committee</li>
            <li>Pharmacy or lab leadership, if relevant to workflow and standards</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 4 — Draft the Change Request</div>
          <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
            A strong request should clearly state:
          </div>
          <ul style={listStyle}>
            <li>What part of the order set is being questioned</li>
            <li>What the current workflow looks like</li>
            <li>What the requested future state would be</li>
            <li>Who is affected and whether multiple users share the concern</li>
            <li>Whether governance review is required before build action</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 5 — Recommended Liaison Response</div>
          <ul style={listStyle}>
            <li>Do not remove the orders immediately without review</li>
            <li>Document the request as an optimization opportunity</li>
            <li>Route it to the correct governance or clinical review group</li>
            <li>Partner with analysts only after the clinical decision is confirmed</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Common Mistakes to Avoid</div>
          <ul style={listStyle}>
            <li>Treating one provider preference as a system-wide standard</li>
            <li>Skipping stakeholder review</li>
            <li>Requesting build change before confirming clinical appropriateness</li>
            <li>Failing to describe the current and future workflow clearly</li>
          </ul>
        </section>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
          <Link href="/practice-lab/liaison" style={secondaryButtonStyle}>
            Back to Liaison Lab
          </Link>
          <Link href="/practice-lab/liaison/scenario-4" style={primaryButtonStyle}>
            Continue to Scenario 4
          </Link>
        </div>
      </div>
    </main>
  );
}
