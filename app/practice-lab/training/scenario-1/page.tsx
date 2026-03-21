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

export default function TrainingScenarioOnePage() {
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
              Scenario 1: New Hire EHR Training & Competency Support
            </div>
            <div style={{ color: COLORS.muted, fontSize: 13 }}>
              Training Lab • Coaching • Competency Support
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
            Training • New Hire Support
          </div>

          <h1
            style={{
              fontSize: "clamp(30px, 5vw, 54px)",
              lineHeight: 1.08,
              margin: "0 0 12px 0",
            }}
          >
            “I’m lost” — supporting an overwhelmed new hire nurse
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
            A newly hired nurse is struggling during EHR onboarding, falling behind in class,
            and losing confidence during hands-on exercises. Your role is to assess the learning
            gap, adjust your teaching approach, and support the learner toward competency.
          </p>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Scenario Setup</div>

          <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
            <div><strong style={{ color: COLORS.text }}>New Hire:</strong> Nurse Jordan</div>
            <div><strong style={{ color: COLORS.text }}>Experience:</strong> 2 years of nursing experience, new to the hospital</div>
            <div><strong style={{ color: COLORS.text }}>EHR Background:</strong> Has never used this EHR before</div>
            <div><strong style={{ color: COLORS.text }}>Learning Pattern:</strong> Quiet, hesitant to ask questions, falling behind during hands-on exercises</div>
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
              During a medication documentation exercise, Nurse Jordan sends a private message:
              <br /><br />
              <em>
                “I’m sorry… I’m really lost. Everyone else is ahead of me. I don’t think I’m getting this.”
              </em>
            </div>
          </div>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Learning Objectives</div>
          <ul style={listStyle}>
            <li>Apply adult learning principles</li>
            <li>Identify specific learning gaps</li>
            <li>Adjust teaching style to the learner</li>
            <li>Provide individualized coaching</li>
            <li>Build learner confidence</li>
            <li>Document training interventions appropriately</li>
            <li>Create a remediation plan if needed</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 1 — Assess the Situation</div>
          <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
            Ask targeted questions to understand whether the issue is technical, workflow-related,
            or linked to the learner’s confidence and learning style.
          </div>

          <ul style={listStyle}>
            <li>Which part is confusing?</li>
            <li>Where did you get stuck?</li>
            <li>Have you used an EHR before?</li>
            <li>Do you learn better step-by-step or through hands-on practice?</li>
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
            <div style={{ fontWeight: 800, marginBottom: 8 }}>Scripted Responses</div>
            <ul style={listStyle}>
              <li>“I get lost when switching between tabs.”</li>
              <li>“I don’t understand the MAR layout.”</li>
              <li>“I learn better when someone walks me through it.”</li>
              <li>“I’m embarrassed to slow the class down.”</li>
            </ul>
          </div>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 2 — Provide Targeted Support</div>
          <ul style={listStyle}>
            <li>Normalize the struggle and reduce embarrassment</li>
            <li>Offer 1:1 support after class</li>
            <li>Slow down the pace</li>
            <li>Demonstrate the workflow step-by-step</li>
            <li>Use visual cues such as highlighting and simplified guidance</li>
            <li>Provide a short cheat sheet for key workflow steps</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 3 — Observe Performance</div>
          <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
            Evaluate whether the learner improves with guided support.
          </div>
          <ul style={listStyle}>
            <li>Can Jordan navigate the MAR more confidently?</li>
            <li>Can Jordan document a medication correctly?</li>
            <li>Does Jordan understand the difference between tabs?</li>
            <li>Are actions becoming intentional rather than random?</li>
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
            <div style={{ fontWeight: 800, marginBottom: 8 }}>Observed Result</div>
            <div style={{ color: COLORS.muted, lineHeight: 1.7 }}>
              Jordan improves noticeably when the workflow is broken into smaller steps and supported
              with slower pacing and guided practice.
            </div>
          </div>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 4 — Build a Remediation Plan</div>
          <ul style={listStyle}>
            <li>Schedule a 30-minute 1:1 support session</li>
            <li>Focus additional practice on MAR navigation</li>
            <li>Provide a tip sheet for common medication workflows</li>
            <li>Check progress during the next class session</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 5 — Document the Intervention</div>
          <ul style={listStyle}>
            <li>Document the learning gaps identified</li>
            <li>Record the teaching adjustments provided</li>
            <li>Describe the remediation plan</li>
            <li>Note the learner’s current competency status</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Common Mistakes to Avoid</div>
          <ul style={listStyle}>
            <li>Assuming the learner’s problem is a lack of effort</li>
            <li>Continuing to teach at the same pace despite visible confusion</li>
            <li>Ignoring the learner’s confidence and embarrassment</li>
            <li>Providing no structured follow-up or remediation plan</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Scoring Rubric</div>
          <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
            Strong performance should demonstrate:
          </div>
          <ul style={listStyle}>
            <li>Targeted assessment rather than assumptions</li>
            <li>Teaching adjustments matched to learner needs</li>
            <li>Supportive, confidence-building communication</li>
            <li>Clear documentation and remediation planning</li>
            <li>Use of adult learning principles</li>
          </ul>
        </section>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
          <Link href="/practice-lab/training" style={secondaryButtonStyle}>
            Back to Training Lab
          </Link>
          <Link href="/practice-lab/training/scenario-2" style={primaryButtonStyle}>
            Continue to Scenario 2
          </Link>
        </div>
      </div>
    </main>
  );
}
