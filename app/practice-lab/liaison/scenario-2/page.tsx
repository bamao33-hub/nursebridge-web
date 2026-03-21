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

export default function LiaisonScenarioTwoPage() {
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
              Scenario 2: Clinical Staff Training Gap
            </div>
            <div style={{ color: COLORS.muted, fontSize: 13 }}>
              Clinical Liaison • Flowsheet Documentation • Training Analysis
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
            Clinical Liaison • Training and Workflow Evaluation
          </div>

          <h1
            style={{
              fontSize: "clamp(30px, 5vw, 54px)",
              lineHeight: 1.08,
              margin: "0 0 12px 0",
            }}
          >
            High error rates in flowsheet documentation on a telemetry unit
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
            A telemetry unit is showing high rates of incomplete or incorrect flowsheet documentation.
            Your role is to review the pattern, determine whether the problem reflects training, workflow
            confusion, or build concerns, and recommend an appropriate response.
          </p>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Scenario Setup</div>

          <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
            <div><strong style={{ color: COLORS.text }}>Unit:</strong> Telemetry</div>
            <div><strong style={{ color: COLORS.text }}>Trigger:</strong> Nurse manager reports inconsistent flowsheet completion</div>
            <div><strong style={{ color: COLORS.text }}>Concern:</strong> Missing or incorrect charting in vital signs and intake/output fields</div>
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
              The nurse manager emails Informatics Support:
              <br /><br />
              <em>
                “We are seeing repeated documentation errors in vital signs and intake/output. Some fields are
                missing, and some data are being entered in the wrong places. Can you help us understand what’s going on?”
              </em>
            </div>
          </div>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Learning Objectives</div>
          <ul style={listStyle}>
            <li>Review documentation patterns and identify likely causes</li>
            <li>Differentiate training problems from build problems</li>
            <li>Interview staff to understand actual workflow behavior</li>
            <li>Recommend a focused education plan</li>
            <li>Communicate findings clearly to leadership</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 0 — First Action</div>
          <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
            Before recommending any fix, decide the most appropriate first step.
          </div>
          <ul style={listStyle}>
            <li>Request that analysts rebuild the flowsheet immediately</li>
            <li>Review data patterns and speak with staff before deciding the cause</li>
            <li>Escalate directly to executive leadership</li>
            <li>Assume the unit simply needs stronger accountability</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 1 — Review the Pattern</div>
          <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
            Review the reported error trends and identify where the documentation process is failing.
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
            <div style={{ fontWeight: 800, marginBottom: 8 }}>Simulated Findings</div>
            <ul style={listStyle}>
              <li>Missing entries in certain vital sign rows</li>
              <li>Inconsistent charting of intake/output values</li>
              <li>Some nurses documenting in the wrong flowsheet sections</li>
              <li>Error patterns clustered around newer staff and recent updates</li>
            </ul>
          </div>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 2 — Interview the Staff</div>
          <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
            Speak with nurses to understand whether the problem reflects workflow confusion, training gaps,
            or a true system issue.
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
            <div style={{ fontWeight: 800, marginBottom: 8 }}>Staff Responses</div>
            <ul style={listStyle}>
              <li>“There are too many rows and I’m not always sure which one to use.”</li>
              <li>“I was never clearly shown what changed in the updated flowsheet.”</li>
              <li>“Some of us chart where we think it belongs, but it may not be the right section.”</li>
              <li>“I don’t think this is broken—I think people are just unsure how to document it.”</li>
            </ul>
          </div>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 3 — Root Cause Analysis</div>
          <div style={{ color: COLORS.muted, lineHeight: 1.8, marginBottom: 10 }}>
            Identify the most likely root cause and any contributing factors.
          </div>
          <ul style={listStyle}>
            <li>Primary issue: training gap and workflow confusion</li>
            <li>Contributing factor: staff uncertainty after an update</li>
            <li>Contributing factor: inconsistent understanding of flowsheet row purpose</li>
            <li>Possible secondary review: confirm there is no hidden build issue, but do not assume one first</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 4 — Ownership Identification</div>
          <ul style={listStyle}>
            <li>Training / education team: primary owner for re-education and tip sheets</li>
            <li>Clinical liaison: workflow review, communication, and coordination</li>
            <li>Nursing leadership: reinforce expectations and unit follow-through</li>
            <li>Analyst team: secondary review only if evidence suggests a build problem</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 5 — Recommended Intervention Plan</div>
          <ul style={listStyle}>
            <li>Create a short tip sheet with correct row usage</li>
            <li>Provide a 10-minute huddle education session</li>
            <li>Identify super users or champions for peer support</li>
            <li>Standardize expectations for documenting vital signs and intake/output</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 6 — Communication to Leadership</div>
          <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
            Your update to leadership should explain that the pattern currently appears more consistent with
            training and workflow confusion than with a confirmed technical defect. The response should focus
            on targeted education, reinforced expectations, and follow-up monitoring.
          </div>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Common Mistakes to Avoid</div>
          <ul style={listStyle}>
            <li>Escalating to analysts too early without evidence of a technical issue</li>
            <li>Assuming poor compliance without understanding user workflow</li>
            <li>Skipping staff interviews and relying only on data reports</li>
            <li>Providing no structured education plan after identifying the training gap</li>
          </ul>
        </section>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
          <Link href="/practice-lab/liaison" style={secondaryButtonStyle}>
            Back to Liaison Lab
          </Link>
          <Link href="/practice-lab/liaison/scenario-1" style={secondaryButtonStyle}>
            Review Scenario 1
          </Link>
        </div>
      </div>
    </main>
  );
}
