import Link from "next/link";

const COLORS = {
  text: "#0f172a",
  muted: "#475569",
  border: "#d7e6e3",
  soft: "#eef6f5",
  teal: "#0f766e",
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
  background: COLORS.teal,
  color: "#ffffff",
  fontWeight: 800,
  padding: "10px 14px",
  borderRadius: 12,
  textDecoration: "none",
};

const secondaryButtonStyle: React.CSSProperties = {
  display: "inline-block",
  background: "#ffffff",
  color: COLORS.text,
  fontWeight: 800,
  padding: "10px 14px",
  borderRadius: 12,
  border: `1px solid ${COLORS.border}`,
  textDecoration: "none",
};

const listStyle: React.CSSProperties = {
  marginLeft: 18,
  color: COLORS.muted,
  lineHeight: 1.8,
};

export default function OptimizationScenarioOnePage() {
  return (
    <main style={{ background: "#f8fafb", minHeight: "100vh", color: COLORS.text }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "28px 20px 48px" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 18 }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: 24 }}>
              Scenario 1: Reducing Click Burden
            </div>
            <div style={{ color: COLORS.muted, fontSize: 13 }}>
              Optimization Lab • Workflow Efficiency • Documentation Burden
            </div>
          </div>

          <div style={{ display: "flex", gap: 12 }}>
            <Link href="/practice-lab/optimization" style={{ color: COLORS.teal, fontWeight: 700 }}>
              Optimization Lab
            </Link>
          </div>
        </div>

        {/* Hero */}
        <section style={softSectionStyle}>
          <h1 style={{ fontSize: "clamp(30px, 5vw, 54px)", marginBottom: 12 }}>
            “Why does this take so many clicks?”
          </h1>

          <p style={{ color: COLORS.muted, fontSize: 18, lineHeight: 1.7 }}>
            Nurses report that documenting a routine task requires too many clicks, multiple screens,
            and repeated navigation. Your role is to analyze the workflow, identify inefficiencies,
            and recommend practical optimization strategies.
          </p>
        </section>

        {/* Scenario Setup */}
        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, marginBottom: 10 }}>Scenario Setup</div>

          <ul style={listStyle}>
            <li>Unit: Medical-Surgical</li>
            <li>Issue: Excessive clicking for routine documentation</li>
            <li>Impact: Delays, frustration, increased charting time</li>
            <li>Role: Optimization Analyst</li>
          </ul>

          <div style={{ marginTop: 12 }}>
            <em style={{ color: COLORS.muted }}>
              “It takes me 10 clicks just to document something simple.”
            </em>
          </div>
        </section>

        {/* Learning Objectives */}
        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, marginBottom: 10 }}>Learning Objectives</div>

          <ul style={listStyle}>
            <li>Identify inefficiencies in workflow navigation</li>
            <li>Recognize redundant or unnecessary steps</li>
            <li>Propose realistic optimization strategies</li>
            <li>Balance efficiency with safety and compliance</li>
          </ul>
        </section>

        {/* Step 1 */}
        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, marginBottom: 10 }}>Step 1 — Observe the Workflow</div>

          <p style={{ color: COLORS.muted }}>
            Before fixing anything, understand what the user is actually doing.
          </p>

          <ul style={listStyle}>
            <li>How many screens are involved?</li>
            <li>How many clicks per task?</li>
            <li>Are users navigating back and forth?</li>
            <li>Are steps repeated unnecessarily?</li>
          </ul>
        </section>

        {/* Step 2 */}
        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, marginBottom: 10 }}>Step 2 — Identify Inefficiencies</div>

          <ul style={listStyle}>
            <li>Duplicate data entry</li>
            <li>Unnecessary navigation steps</li>
            <li>Poor screen layout</li>
            <li>Lack of shortcuts or defaults</li>
          </ul>
        </section>

        {/* Step 3 */}
        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, marginBottom: 10 }}>Step 3 — Root Cause Thinking</div>

          <ul style={listStyle}>
            <li>Was the workflow designed this way?</li>
            <li>Was it built incorrectly?</li>
            <li>Is it a training issue or system issue?</li>
          </ul>
        </section>

        {/* Step 4 */}
        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, marginBottom: 10 }}>Step 4 — Recommend Improvements</div>

          <ul style={listStyle}>
            <li>Reduce number of clicks</li>
            <li>Combine steps where possible</li>
            <li>Introduce shortcuts or defaults</li>
            <li>Improve layout and visibility</li>
          </ul>
        </section>

        {/* Step 5 */}
        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, marginBottom: 10 }}>Step 5 — Validate Impact</div>

          <ul style={listStyle}>
            <li>Does it save time?</li>
            <li>Does it maintain safety?</li>
            <li>Does it reduce cognitive load?</li>
          </ul>
        </section>

        {/* Common Mistakes */}
        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, marginBottom: 10 }}>Common Mistakes</div>

          <ul style={listStyle}>
            <li>Focusing only on clicks, not workflow</li>
            <li>Ignoring user behavior</li>
            <li>Over-optimizing and removing necessary steps</li>
          </ul>
        </section>

        {/* Navigation */}
        <div style={{ display: "flex", gap: 12 }}>
          <Link href="/practice-lab/optimization" style={secondaryButtonStyle}>
            Back to Optimization Lab
          </Link>
          <Link href="/practice-lab/optimization/scenario-2" style={primaryButtonStyle}>
            Continue to Scenario 2
          </Link>
        </div>

      </div>
    </main>
  );
}
