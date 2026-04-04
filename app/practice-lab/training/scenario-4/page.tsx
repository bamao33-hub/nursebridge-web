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

export default function TrainingScenarioFourPage() {
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
              Scenario 4: Workflow Drift Correction
            </div>
            <div style={{ color: COLORS.muted, fontSize: 13 }}>
              Training Lab • Unit Retraining • Workflow Integrity
            </div>
          </div>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/practice-lab/training" style={{ textDecoration: "none", color: COLORS.teal, fontWeight: 700 }}>
              Training Lab
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
            Training • Workflow Drift Correction
          </div>

          <h1
            style={{
              fontSize: "clamp(30px, 5vw, 54px)",
              lineHeight: 1.08,
              margin: "0 0 12px 0",
            }}
          >
            Staff have drifted away from the intended workflow
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
            A unit has developed workarounds that bypass the intended EHR workflow. Your role is to
            identify the drift, understand why it happened, and create a retraining plan that restores
            safe, efficient, and consistent documentation practices.
          </p>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Scenario Setup</div>

          <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
            <div><strong style={{ color: COLORS.text }}>Unit:</strong> Medical-Surgical Unit</div>
            <div><strong style={{ color: COLORS.text }}>Issue:</strong> Staff are bypassing parts of the intended documentation workflow</div>
            <div><strong style={{ color: COLORS.text }}>Concern:</strong> Inconsistent charting, reduced data quality, and workflow shortcuts becoming normalized</div>
            <div><strong style={{ color: COLORS.text }}>Learner Role:</strong> EHR Trainer / Informatics Educator</div>
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
              A unit leader reports:
              <br /><br />
              <em>
                “Our staff have started documenting parts of the workflow in the wrong places because it feels faster.
                It’s becoming common practice on the unit.”
              </em>
            </div>
          </div>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Learning Objectives</div>
          <ul style={listStyle}>
            <li>Recognize workflow drift and why it develops</li>
            <li>Differentiate workaround behavior from true system failure</li>
            <li>Identify the root cause behind local habits</li>
            <li>Create a practical retraining strategy for a full unit</li>
            <li>Support behavior change without blaming staff</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 1 — Assess the Drift</div>
          <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
            Before retraining, determine what staff are actually doing and how it differs from the intended workflow.
          </div>

          <ul style={listStyle}>
            <li>Which steps are being skipped, moved, or documented elsewhere?</li>
            <li>How widespread is the workaround?</li>
            <li>When did this behavior start?</li>
            <li>Does staff believe the workaround is faster, easier, or safer?</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 2 — Observe and Clarify</div>
          <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
            Use structured observation and staff questions to understand why the workaround became routine.
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
            <div style={{ fontWeight: 800, marginBottom: 8 }}>Sample Staff Responses</div>
            <ul style={listStyle}>
              <li>“This way is quicker during a busy shift.”</li>
              <li>“That’s how other nurses on the unit showed me.”</li>
              <li>“The intended process feels like too many clicks.”</li>
              <li>“We didn’t realize the workaround would affect reporting.”</li>
            </ul>
          </div>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 3 — Identify the Root Cause</div>
          <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
            Workflow drift usually reflects one or more of the following:
          </div>
          <ul style={listStyle}>
            <li>training decay over time</li>
            <li>peer-to-peer shortcut teaching</li>
            <li>misunderstanding of why the original workflow matters</li>
            <li>perceived efficiency pressure on the unit</li>
            <li>insufficient reinforcement after rollout</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 4 — Build the Retraining Plan</div>
          <ul style={listStyle}>
            <li>Explain the correct workflow and why it exists</li>
            <li>Clarify the risks of the workaround</li>
            <li>Use short, focused unit-based retraining</li>
            <li>Identify champions or super users to reinforce the correct process</li>
            <li>Provide a simple tip sheet or visual reminder</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 5 — Communication Approach</div>
          <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
            Effective retraining should avoid shaming and focus on restoring consistency.
          </div>
          <ul style={listStyle}>
            <li>frame the issue as a workflow correction, not staff failure</li>
            <li>acknowledge time pressure and real unit workflow challenges</li>
            <li>connect the correct workflow to safety, quality, and reporting</li>
            <li>set clear expectations for future practice</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 6 — Follow-Up Plan</div>
          <ul style={listStyle}>
            <li>repeat observation after retraining</li>
            <li>monitor whether drift decreases</li>
            <li>reinforce correct practice during huddles or rounds</li>
            <li>partner with leadership if workaround behavior persists</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Common Mistakes to Avoid</div>
          <ul style={listStyle}>
            <li>assuming staff are careless without observing the workflow</li>
            <li>retraining without understanding why the drift occurred</li>
            <li>blaming staff instead of correcting the local culture and process</li>
            <li>failing to explain the consequences of the workaround</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Scoring Rubric</div>
          <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
            Strong performance should demonstrate:
          </div>
          <ul style={listStyle}>
            <li>accurate identification of workflow drift</li>
            <li>clear understanding of root cause and staff behavior</li>
            <li>practical retraining design</li>
            <li>supportive change-management communication</li>
            <li>appropriate follow-up planning</li>
          </ul>
        </section>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
          <Link href="/practice-lab/training" style={secondaryButtonStyle}>
            Back to Training Lab
          </Link>
          <Link href="/practice-lab/training/scenario-5" style={primaryButtonStyle}>
            Continue to Scenario 5
          </Link>
        </div>
      </div>
    </main>
  );
}
