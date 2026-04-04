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

export default function TrainingScenarioFivePage() {
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
              Scenario 5: New Feature Rollout Training
            </div>
            <div style={{ color: COLORS.muted, fontSize: 13 }}>
              Training Lab • Feature Rollout • Micro-Training
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
            Training • New Feature Rollout
          </div>

          <h1
            style={{
              fontSize: "clamp(30px, 5vw, 54px)",
              lineHeight: 1.08,
              margin: "0 0 12px 0",
            }}
          >
            Staff are confused after release of a new EHR feature
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
            A new feature has been released in the EHR, but staff are unsure what changed and how
            to use it. Your role is to create a focused training response that supports adoption
            without overwhelming users.
          </p>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Scenario Setup</div>

          <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
            <div><strong style={{ color: COLORS.text }}>Feature Change:</strong> A new documentation shortcut and updated workflow element were released</div>
            <div><strong style={{ color: COLORS.text }}>Issue:</strong> Staff are confused and using inconsistent approaches</div>
            <div><strong style={{ color: COLORS.text }}>Concern:</strong> Low adoption, frustration, and variation in workflow</div>
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
              Several staff members report:
              <br /><br />
              <em>
                “We heard something changed, but no one is sure what’s different or how we’re supposed to use it.”
              </em>
            </div>
          </div>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Learning Objectives</div>
          <ul style={listStyle}>
            <li>Assess training needs related to a new feature release</li>
            <li>Identify the most important messages users need first</li>
            <li>Create a practical micro-training plan</li>
            <li>Support change adoption through targeted communication</li>
            <li>Use trainer tools such as tip sheets and brief reinforcement methods</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 1 — Clarify the Change</div>
          <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
            Before designing training, clarify what changed and what users actually need to know first.
          </div>

          <ul style={listStyle}>
            <li>What feature was released?</li>
            <li>What workflow does it affect?</li>
            <li>Who uses it most often?</li>
            <li>What part of the change is confusing users?</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 2 — Identify User Pain Points</div>
          <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
            Gather practical feedback before deciding on the training format.
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
              <li>“I don’t know where the new option is located.”</li>
              <li>“I’m not sure whether I still use the old way.”</li>
              <li>“The email announcement was too long and I didn’t read all of it.”</li>
              <li>“I just need someone to show me the new steps quickly.”</li>
            </ul>
          </div>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 3 — Choose the Right Training Strategy</div>
          <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
            For most feature releases, a short, targeted response works better than a large formal class.
          </div>

          <ul style={listStyle}>
            <li>brief tip sheet</li>
            <li>micro-training during huddle or meeting</li>
            <li>quick video or screen capture</li>
            <li>at-the-elbow reinforcement during early use</li>
            <li>follow-up reminders after launch</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 4 — Build the Rollout Plan</div>
          <ul style={listStyle}>
            <li>Explain what changed in plain language</li>
            <li>Show where the feature lives in the workflow</li>
            <li>Clarify whether the old workflow is still valid</li>
            <li>Create one quick-reference tip sheet</li>
            <li>Provide a short reinforcement plan for the first week after release</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 5 — Support Adoption</div>
          <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
            Trainers should focus on reducing confusion and making early use easier.
          </div>
          <ul style={listStyle}>
            <li>keep the message short and practical</li>
            <li>show exactly where the change appears</li>
            <li>reinforce the benefit to the user</li>
            <li>offer quick follow-up support as staff begin using it</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 6 — Measure Early Success</div>
          <ul style={listStyle}>
            <li>Are staff locating the feature correctly?</li>
            <li>Are questions decreasing after training?</li>
            <li>Is the new workflow being used consistently?</li>
            <li>Do some users still need focused follow-up?</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Common Mistakes to Avoid</div>
          <ul style={listStyle}>
            <li>sending long announcements without focused training support</li>
            <li>assuming staff will adopt the change without reinforcement</li>
            <li>trying to teach too much at once</li>
            <li>failing to explain whether the old workflow still applies</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Scoring Rubric</div>
          <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
            Strong performance should demonstrate:
          </div>
          <ul style={listStyle}>
            <li>clear identification of training needs</li>
            <li>appropriate use of micro-training methods</li>
            <li>practical rollout planning</li>
            <li>strong adoption-support thinking</li>
            <li>clear reinforcement and follow-up strategy</li>
          </ul>
        </section>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
          <Link href="/practice-lab/training" style={secondaryButtonStyle}>
            Back to Training Lab
          </Link>
          <Link href="/practice-lab/training/scenario-4" style={secondaryButtonStyle}>
            Review Scenario 4
          </Link>
        </div>
      </div>
    </main>
  );
}
