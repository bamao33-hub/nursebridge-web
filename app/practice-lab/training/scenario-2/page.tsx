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

export default function TrainingScenarioTwoPage() {
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
              Scenario 2: Provider Training for a New Workflow
            </div>
            <div style={{ color: COLORS.muted, fontSize: 13 }}>
              Training Lab • Provider Coaching • Change Support
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
            Training • Workflow Adoption Support
          </div>

          <h1
            style={{
              fontSize: "clamp(30px, 5vw, 54px)",
              lineHeight: 1.08,
              margin: "0 0 12px 0",
            }}
          >
            “This new discharge workflow makes no sense” — coaching a frustrated provider
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
            A new discharge workflow was rolled out hospital-wide last week. Most providers adapted,
            but one hospitalist is openly frustrated and refusing to use the new workflow. Your role
            is to de-escalate, identify the true workflow pain point, demonstrate the process clearly,
            and build practical buy-in.
          </p>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Scenario Setup</div>

          <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
            <div><strong style={{ color: COLORS.text }}>Provider:</strong> Dr. Ramirez, Hospitalist</div>
            <div><strong style={{ color: COLORS.text }}>Work Style:</strong> Experienced, fast-paced, dislikes workflow changes</div>
            <div><strong style={{ color: COLORS.text }}>Behavior Pattern:</strong> Direct, impatient, has skipped optional training sessions before</div>
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
              Dr. Ramirez pages the EHR Trainer:
              <br /><br />
              <em>
                “This new discharge workflow is slowing me down. I’m not using it. The old one worked fine.”
              </em>
            </div>
          </div>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Learning Objectives</div>
          <ul style={listStyle}>
            <li>Apply adult learning principles to provider training</li>
            <li>De-escalate frustration without becoming defensive</li>
            <li>Identify the provider’s true workflow pain point</li>
            <li>Demonstrate the new workflow in a provider-centered way</li>
            <li>Build buy-in through efficiency, safety, and compliance</li>
            <li>Document the training encounter clearly</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 1 — Initial Approach</div>
          <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
            Choose a calm, professional opening that lowers resistance and invites workflow review.
          </div>

          <ul style={listStyle}>
            <li>“Tell me what part is slowing you down.”</li>
            <li>“Walk me through your current workflow.”</li>
            <li>“Let’s look at it together and see where the friction is.”</li>
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
            <div style={{ fontWeight: 800, marginBottom: 8 }}>Scripted Provider Responses</div>
            <ul style={listStyle}>
              <li>“It takes too many clicks.”</li>
              <li>“I can’t find the discharge instructions.”</li>
              <li>“I don’t have time for this.”</li>
              <li>“Why did they change it anyway?”</li>
            </ul>
          </div>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 2 — Identify the Real Pain Point</div>
          <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
            Ask focused questions to move from frustration to specifics.
          </div>

          <ul style={listStyle}>
            <li>Which step feels the slowest?</li>
            <li>Where do you expect the instructions to be?</li>
            <li>What part of the old workflow do you miss most?</li>
            <li>Is the problem navigation, clicks, or documentation content?</li>
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
            <div style={{ fontWeight: 800, marginBottom: 8 }}>Findings</div>
            <ul style={listStyle}>
              <li>Dr. Ramirez is clicking through the wrong tab</li>
              <li>He missed the original training email</li>
              <li>He did not realize the new workflow auto-populates discharge instructions</li>
              <li>He is unaware of the new Quick Discharge shortcut</li>
            </ul>
          </div>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 3 — Demonstrate the Workflow</div>
          <ul style={listStyle}>
            <li>Walk through the correct tab and discharge workflow</li>
            <li>Highlight the Quick Discharge button</li>
            <li>Show how instructions auto-populate</li>
            <li>Emphasize fewer clicks and time saved</li>
            <li>Use language that aligns with provider priorities: speed, clarity, efficiency</li>
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
            <div style={{ fontWeight: 800, marginBottom: 8 }}>Scripted Provider Reaction</div>
            <ul style={listStyle}>
              <li>“Oh… I didn’t know it did that.”</li>
              <li>“That’s actually faster.”</li>
              <li>“Okay, that makes more sense.”</li>
            </ul>
          </div>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 4 — Build Buy-In</div>
          <ul style={listStyle}>
            <li>Reinforce efficiency gains</li>
            <li>Explain safety improvements</li>
            <li>Highlight compliance benefits</li>
            <li>Show how the workflow reduces documentation errors</li>
            <li>Connect the workflow to broader hospital initiatives</li>
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
            <div style={{ fontWeight: 800, marginBottom: 8 }}>Provider Response</div>
            <div style={{ color: COLORS.muted, lineHeight: 1.7 }}>
              “Alright, I’ll use it. Thanks for showing me.”
            </div>
          </div>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 5 — Document the Encounter</div>
          <ul style={listStyle}>
            <li>Document the provider’s concerns</li>
            <li>Record the workflow demonstrated</li>
            <li>Note the training provided</li>
            <li>Document whether competency was achieved during the interaction</li>
            <li>Add any follow-up plan if needed</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Common Mistakes to Avoid</div>
          <ul style={listStyle}>
            <li>Using confrontational or corrective language too early</li>
            <li>Assuming the provider is simply resistant without clarifying the workflow issue</li>
            <li>Demonstrating too many features at once</li>
            <li>Failing to connect the new workflow to efficiency and provider priorities</li>
            <li>Skipping documentation after the coaching encounter</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Scoring Rubric</div>
          <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
            Strong performance should demonstrate:
          </div>
          <ul style={listStyle}>
            <li>Calm, supportive, professional communication</li>
            <li>Accurate identification of the true pain point</li>
            <li>Focused workflow teaching without overload</li>
            <li>Clear change-management thinking and buy-in building</li>
            <li>Complete training documentation</li>
          </ul>
        </section>
        <section style={sectionStyle}>
  <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>
    Download Tip Sheet
  </div>

  <div style={{ color: COLORS.muted, lineHeight: 1.7, marginBottom: 14 }}>
    Use this quick reference guide to support providers during discharge workflow training.
  </div>

  <a
    href="/tipsheets/quick-discharge-tip-sheet.pdf"
    download
    style={{
      display: "inline-block",
      textDecoration: "none",
      background: COLORS.teal,
      color: "#ffffff",
      fontWeight: 800,
      padding: "10px 14px",
      borderRadius: 12,
    }}
  >
    Download Discharge Workflow Tip Sheet
  </a>
</section>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
          <Link href="/practice-lab/training" style={secondaryButtonStyle}>
            Back to Training Lab
          </Link>
          <Link href="/practice-lab/training/scenario-1" style={secondaryButtonStyle}>
            Review Scenario 1
          </Link>
        </div>
      </div>
    </main>
  );
}
