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

export default function LiaisonScenarioOnePage() {
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
              Scenario 1: Medication Workflow Failure
            </div>
            <div style={{ color: COLORS.muted, fontSize: 13 }}>
              Clinical Liaison • MAR Workflow • Ticket Triage
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
            Clinical Liaison • Medication Administration Workflow
          </div>

          <h1
            style={{
              fontSize: "clamp(30px, 5vw, 54px)",
              lineHeight: 1.08,
              margin: "0 0 12px 0",
            }}
          >
            Missed medication doses after a new MAR workflow rollout
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
            A new MAR workflow was rolled out last week. Nurses on the Med-Surg unit are now
            reporting an increase in missed or late medication doses. Your role is to investigate
            the issue, identify likely causes, recommend a safe interim workaround, and route the
            issue appropriately.
          </p>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Scenario Setup</div>

          <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
            <div><strong style={{ color: COLORS.text }}>Unit:</strong> Med-Surg, 32-bed unit</div>
            <div><strong style={{ color: COLORS.text }}>Nurse A:</strong> Day shift nurse reporting the issue</div>
            <div><strong style={{ color: COLORS.text }}>Charge Nurse:</strong> Confirms multiple staff are affected</div>
            <div><strong style={{ color: COLORS.text }}>Pharmacy Tech:</strong> Notes delays in medication verification</div>
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
              Nurse A sends a message through Informatics Support chat:
              <br /><br />
              <em>
                “Ever since the new MAR update, I keep finding meds marked as ‘Due Now’ that I never saw earlier.
                I think the system isn’t showing scheduled meds correctly.”
              </em>
            </div>
          </div>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Learning Objectives</div>
          <ul style={listStyle}>
            <li>Perform workflow analysis</li>
            <li>Conduct a structured clinical interview</li>
            <li>Identify likely root cause</li>
            <li>Distinguish between user confusion and system design issues</li>
            <li>Document findings clearly</li>
            <li>Recommend a safe and realistic interim workaround</li>
            <li>Submit a properly categorized ticket</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 0 — First Action</div>
          <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
            Before doing anything else, decide your first action as the clinical liaison.
          </div>
          <ul style={listStyle}>
            <li>Submit a ticket immediately</li>
            <li>Interview the nurse to understand the workflow problem</li>
            <li>Escalate directly to pharmacy</li>
            <li>Assume it is only user error and provide quick retraining</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 1 — Interview the Nurse</div>
          <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
            Ask clarifying questions such as:
          </div>
          <ul style={listStyle}>
            <li>When did the issue start?</li>
            <li>Which medications are affected?</li>
            <li>Was the Scheduled tab used?</li>
            <li>Were any filters applied?</li>
            <li>Was the new MAR layout clearly understood?</li>
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
            <div style={{ fontWeight: 800, marginBottom: 8 }}>Nurse A Responses</div>
            <ul style={listStyle}>
              <li>“It started after the update last week.”</li>
              <li>“It’s mostly scheduled meds like Lisinopril and Metoprolol.”</li>
              <li>“I usually stay on the Due Now tab.”</li>
              <li>“I didn’t know the new MAR has filters.”</li>
              <li>“I thought everything would show automatically.”</li>
            </ul>
          </div>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 2 — Validate the Issue</div>
          <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
            Review the MAR layout, filter settings, other staff reports, and simulated system findings.
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
            <div style={{ color: COLORS.muted, lineHeight: 1.7 }}>
              The new MAR update introduced a default filter: <strong style={{ color: COLORS.text }}>Show only meds due within the next 2 hours.</strong>
              Scheduled meds outside that window do not appear unless the nurse switches tabs or removes the filter.
            </div>
          </div>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 3 — Root Cause Analysis</div>
          <div style={{ color: COLORS.muted, lineHeight: 1.8, marginBottom: 10 }}>
            Identify the most likely root cause and contributing factors.
          </div>
          <ul style={listStyle}>
            <li>Default filtered view hides some scheduled medications</li>
            <li>Inadequate communication during rollout</li>
            <li>No tip sheet or clear instruction provided</li>
            <li>Nurses are unaware of new filter behavior</li>
            <li>No obvious visual indicator that a filter is active</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 4 — Ownership Identification</div>
          <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
            Decide who owns the resolution and who should support follow-up.
          </div>
          <ul style={listStyle}>
            <li>Analyst team: review default MAR filter behavior and display logic</li>
            <li>Training team: reinforce how to use tabs, filters, and safer review patterns</li>
            <li>Nursing leadership: reinforce interim workflow expectations and staff awareness</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 5 — Safe Interim Workaround</div>
          <ul style={listStyle}>
            <li>Switch to the Scheduled tab</li>
            <li>Clear the default filter when reviewing medications</li>
            <li>Review the All Meds view at the start of shift</li>
            <li>Ask the charge nurse to reinforce this during huddle</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Step 6 — Ticket Submission</div>
          <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
            Submit a ticket with appropriate categorization and a clear issue summary.
          </div>
          <ul style={listStyle}>
            <li><strong style={{ color: COLORS.text }}>Category:</strong> Medication Administration</li>
            <li><strong style={{ color: COLORS.text }}>Subcategory:</strong> MAR Workflow</li>
            <li><strong style={{ color: COLORS.text }}>Priority:</strong> Medium</li>
            <li><strong style={{ color: COLORS.text }}>Requested fix:</strong> Remove default filter or add clear visual indicator</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Common Mistakes to Avoid</div>
          <ul style={listStyle}>
            <li>Blaming the user too early without workflow review</li>
            <li>Submitting a vague ticket without structured findings</li>
            <li>Ignoring training and communication gaps</li>
            <li>Failing to recommend a safe interim workaround</li>
          </ul>
        </section>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
          <Link href="/practice-lab/liaison" style={secondaryButtonStyle}>
            Back to Liaison Lab
          </Link>
          <Link href="/practice-lab/liaison/scenario-2" style={primaryButtonStyle}>
            Continue to Scenario 2
          </Link>
        </div>
      </div>
    </main>
  );
}
