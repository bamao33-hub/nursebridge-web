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

export default function LiaisonScenarioFourPage() {
  return (
    <main style={{ background: "#f8fafb", minHeight: "100vh", color: COLORS.text }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "28px 20px 48px" }}>
        
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
              Scenario 4: Downtime Recovery
            </div>
            <div style={{ color: COLORS.muted, fontSize: 13 }}>
              Clinical Liaison • Downtime • Patient Safety
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
            Clinical Liaison • Downtime Recovery
          </div>

          <h1
            style={{
              fontSize: "clamp(30px, 5vw, 54px)",
              lineHeight: 1.08,
              margin: "0 0 12px 0",
            }}
          >
            EHR downtime event with documentation backlog and reconciliation risk
          </h1>

          <p style={{ margin: 0, color: COLORS.muted, fontSize: 18, lineHeight: 1.7 }}>
            The EHR system was down for 30 minutes. Staff used paper documentation during downtime.
            Your role is to ensure documentation recovery is complete, validate reconciliation,
            and communicate safely with leadership.
          </p>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Scenario Setup</div>

          <div style={{ color: COLORS.muted, lineHeight: 1.8 }}>
            <div><strong>Unit:</strong> Med-Surg</div>
            <div><strong>Event:</strong> 30-minute EHR downtime</div>
            <div><strong>Concern:</strong> Missed documentation and reconciliation gaps</div>
            <div><strong>Your Role:</strong> Clinical Liaison</div>
          </div>

          <div style={{ marginTop: 16, padding: 16, borderRadius: 12, background: "#f8fafb" }}>
            <strong>Trigger:</strong>
            <br />
            “We’re back up, but I’m not sure everything got entered correctly. Some meds and vitals may be missing.”
          </div>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20 }}>Step 0 — First Action</div>
          <ul style={listStyle}>
            <li>Assume documentation will be corrected later</li>
            <li>Validate downtime recovery and reconciliation immediately</li>
            <li>Escalate to IT without assessment</li>
            <li>Ignore until formal audit</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20 }}>Step 1 — Validate Documentation Recovery</div>
          <ul style={listStyle}>
            <li>Were downtime forms completed?</li>
            <li>Have entries been back-entered into the EHR?</li>
            <li>Are timestamps accurate?</li>
            <li>Are medication administrations accounted for?</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20 }}>Step 2 — Identify Risk</div>
          <ul style={listStyle}>
            <li>Missing med administration records</li>
            <li>Incomplete vital signs</li>
            <li>Delayed documentation</li>
            <li>Potential patient safety impact</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20 }}>Step 3 — Ownership</div>
          <ul style={listStyle}>
            <li>Nursing staff → documentation completion</li>
            <li>Leadership → accountability</li>
            <li>Liaison → coordination and validation</li>
            <li>IT → system uptime only (not documentation)</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20 }}>Step 4 — Immediate Actions</div>
          <ul style={listStyle}>
            <li>Confirm all paper documentation is entered</li>
            <li>Prioritize medication reconciliation</li>
            <li>Communicate expectations to staff</li>
            <li>Escalate if gaps persist</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <div style={{ fontWeight: 800, fontSize: 20 }}>Common Mistakes</div>
          <ul style={listStyle}>
            <li>Assuming documentation is complete</li>
            <li>Focusing only on system downtime instead of recovery</li>
            <li>Failing to prioritize patient safety</li>
          </ul>
        </section>

        <div style={{ display: "flex", gap: 12 }}>
          <Link href="/practice-lab/liaison" style={secondaryButtonStyle}>
            Back
          </Link>
          <Link href="/practice-lab/liaison/scenario-5" style={primaryButtonStyle}>
            Continue
          </Link>
        </div>

      </div>
    </main>
  );
}
