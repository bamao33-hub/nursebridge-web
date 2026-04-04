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

export default function TrainingScenarioThreePage() {
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
              Scenario 3: Competency Validation Failure
            </div>
            <div style={{ color: COLORS.muted, fontSize: 13 }}>
              Training Lab • Remediation • Adult Learning
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
            Training • Remediation Planning
          </div>

          <h1
            style={{
              fontSize: "clamp(30px, 5vw, 54px)",
              lineHeight: 1.08,
              margin: "0 0 12px 0",
            }}
          >
            A new hire repeatedly fails EHR competency validation
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
            A newly hired clinician has failed the EHR competency assessment more than once.
            Your role is to identify the learning gap, avoid labeling the learner unfairly,
            and create a structured remediation plan that supports safe practice and eventual competency.
          </p>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Scenario Setup</div>

          <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
            <div><strong style={{ color: COLORS.text }}>Learner:</strong> Alex, newly hired nurse</div>
            <div><strong style={{ color: COLORS.text }}>Status:</strong> Failed EHR competency validation twice</div>
            <div><strong style={{ color: COLORS.text }}>Concern:</strong> Repeated errors in documentation workflow and task completion</div>
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
              A training coordinator says:
              <br /><br />
              <em>
                “Alex failed the validation again. We need a plan. I’m not sure if this is a confidence issue,
                a workflow issue, or a deeper training gap.”
              </em>
            </div>
          </div>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Learning Objectives</div>
          <ul style={listStyle}>
            <li>Assess the underlying cause of failed validation</li>
            <li>Use adult learning principles during remediation</li>
            <li>Differentiate confidence issues from knowledge gaps</li>
            <li>Create a structured remediation plan</li>
            <li>Document follow-up and competency status clearly</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 1 — Assess Before Judging</div>
          <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
            Before deciding that the learner is “not getting it,” assess what is actually happening.
          </div>

          <ul style={listStyle}>
            <li>Which tasks are being missed or done incorrectly?</li>
            <li>Does the learner understand the workflow but freeze during testing?</li>
            <li>Is the difficulty navigation-based, task-based, or confidence-based?</li>
            <li>Has the learner had enough guided practice before validation?</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 2 — Interview the Learner</div>
          <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
            Use calm, supportive questions to understand the learner experience.
          </div>

          <ul style={listStyle}>
            <li>“Which part of the assessment feels hardest?”</li>
            <li>“Where do you start to feel lost?”</li>
            <li>“Do you understand the workflow outside the test environment?”</li>
            <li>“What would help you feel more confident?”</li>
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
            <div style={{ fontWeight: 800, marginBottom: 8 }}>Scripted Learner Responses</div>
            <ul style={listStyle}>
              <li>“I know some of it, but I panic when I’m being watched.”</li>
              <li>“I get mixed up when switching between sections.”</li>
              <li>“I think I need more guided practice before testing again.”</li>
              <li>“I understand better when someone walks me through the steps.”</li>
            </ul>
          </div>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 3 — Identify the Real Gap</div>
          <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
            In this case, the issue is not a lack of effort. The learner shows a mix of:
          </div>
          <ul style={listStyle}>
            <li>workflow confusion under pressure</li>
            <li>confidence loss during validation</li>
            <li>need for slower, guided repetition before retesting</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 4 — Build the Remediation Plan</div>
          <ul style={listStyle}>
            <li>Schedule a 1:1 remediation session</li>
            <li>Break the workflow into smaller task groups</li>
            <li>Provide repeat guided practice before re-validation</li>
            <li>Use a checklist or simplified support guide</li>
            <li>Plan a new validation attempt after practice improves</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 5 — Trainer Communication</div>
          <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
            A strong trainer response should remain supportive and specific:
          </div>
          <ul style={listStyle}>
            <li>acknowledge the learner’s frustration without shaming</li>
            <li>focus on skill-building, not blame</li>
            <li>set clear expectations for the remediation plan</li>
            <li>communicate next steps and timeline clearly</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 6 — Document the Outcome</div>
          <ul style={listStyle}>
            <li>Document failed validation areas</li>
            <li>Record the learner’s reported challenges</li>
            <li>Describe the remediation interventions</li>
            <li>Note the plan for re-evaluation</li>
            <li>Track current competency status clearly</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Common Mistakes to Avoid</div>
          <ul style={listStyle}>
            <li>Labeling the learner as careless or unprepared too early</li>
            <li>Repeating the same validation without changing the teaching approach</li>
            <li>Ignoring anxiety or confidence-related barriers</li>
            <li>Providing no structured follow-up plan</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Scoring Rubric</div>
          <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
            Strong performance should demonstrate:
          </div>
          <ul style={listStyle}>
            <li>thorough assessment before conclusions</li>
            <li>supportive and adult-learning-based coaching</li>
            <li>clear identification of the true learning gap</li>
            <li>well-structured remediation planning</li>
            <li>complete documentation and follow-up planning</li>
          </ul>
        </section>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
          <Link href="/practice-lab/training" style={secondaryButtonStyle}>
            Back to Training Lab
          </Link>
          <Link href="/practice-lab/training/scenario-4" style={primaryButtonStyle}>
            Continue to Scenario 4
          </Link>
        </div>
      </div>
    </main>
  );
}
