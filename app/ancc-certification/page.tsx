import Link from "next/link";

const BRAND = "#0f766e";
const BORDER = "#d7e6e3";
const SOFT = "#eef6f5";
const MUTED = "#4b5563";
const TEXT = "#0f172a";

const pageWrap: React.CSSProperties = {
  maxWidth: 1120,
  margin: "0 auto",
  padding: "32px 20px 56px",
};

const sectionStyle: React.CSSProperties = {
  border: `1px solid ${BORDER}`,
  borderRadius: 18,
  padding: 24,
  backgroundColor: "white",
};

const softSectionStyle: React.CSSProperties = {
  border: `1px solid ${BORDER}`,
  borderRadius: 18,
  padding: 24,
  backgroundColor: SOFT,
};

const primaryButtonStyle: React.CSSProperties = {
  display: "inline-block",
  backgroundColor: BRAND,
  color: "white",
  textDecoration: "none",
  padding: "14px 22px",
  borderRadius: 12,
  fontWeight: 800,
};

const secondaryButtonStyle: React.CSSProperties = {
  display: "inline-block",
  backgroundColor: "white",
  color: TEXT,
  textDecoration: "none",
  padding: "14px 22px",
  borderRadius: 12,
  fontWeight: 800,
  border: `1px solid ${BORDER}`,
};

const smallLabelStyle: React.CSSProperties = {
  color: BRAND,
  fontWeight: 800,
  marginBottom: 10,
};

const paragraphStyle: React.CSSProperties = {
  fontSize: 17,
  lineHeight: 1.8,
  color: MUTED,
  margin: 0,
};

const listStyle: React.CSSProperties = {
  margin: "12px 0 0 18px",
  padding: 0,
  color: MUTED,
  lineHeight: 1.8,
};

export default function ANCCCertificationPage() {
  return (
    <main style={{ backgroundColor: "#f8fafb", minHeight: "100vh", color: TEXT }}>
      <div style={pageWrap}>
        {/* HERO */}
        <section style={{ ...softSectionStyle, padding: 28 }}>
          <div style={smallLabelStyle}>Nursing Informatics Certification</div>

          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              lineHeight: 1.08,
              margin: "0 0 16px 0",
              letterSpacing: "-0.02em",
            }}
          >
            Thinking About ANCC Informatics Certification?
          </h1>

          <p style={{ ...paragraphStyle, maxWidth: 860 }}>
            Before you focus on the exam, it helps to understand what actually prepares
            nurses for success in informatics.
          </p>

          <p style={{ ...paragraphStyle, maxWidth: 860, marginTop: 14 }}>
            Most students do not struggle with studying. They struggle with direction,
            experience, and clarity.
          </p>

          <div
            style={{
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
              marginTop: 24,
            }}
          >
            <Link href="/preceptorship" style={primaryButtonStyle}>
              Apply for Preceptorship
            </Link>

            <Link href="/" style={secondaryButtonStyle}>
              Back to Home
            </Link>
          </div>
        </section>

        <div style={{ height: 22 }} />

        {/* REAL PROBLEM */}
        <section style={sectionStyle}>
          <div style={smallLabelStyle}>What Most Students Get Wrong</div>

          <h2 style={{ margin: "0 0 12px 0", fontSize: 30 }}>
            The challenge is usually bigger than the exam
          </h2>

          <p style={paragraphStyle}>
            Many MSN and DNP students assume the next step is to start studying
            immediately, buy review materials, and focus only on passing the exam.
          </p>

          <p style={{ ...paragraphStyle, marginTop: 14 }}>
            But the deeper questions usually come first: What counts as informatics
            experience? What kind of project should I choose? Which role am I even
            preparing for? Without clear answers, certification can feel confusing and
            overwhelming.
          </p>
        </section>

        <div style={{ height: 22 }} />

        {/* WHAT ACTUALLY HELPS */}
        <section style={sectionStyle}>
          <div style={smallLabelStyle}>What Truly Helps</div>

          <h2 style={{ margin: "0 0 12px 0", fontSize: 30 }}>
            Build the foundation before you focus on the credential
          </h2>

          <p style={paragraphStyle}>
            Certification becomes more meaningful when you first build real-world
            understanding of informatics roles, exposure to workflows and systems,
            clearer career direction, and a stronger practicum or capstone foundation.
          </p>

          <ul style={listStyle}>
            <li>Understand how informatics roles differ in practice</li>
            <li>See how workflow and systems affect clinical care</li>
            <li>Connect graduate learning to real operational problems</li>
            <li>Strengthen your long-term direction before pursuing certification</li>
          </ul>
        </section>

        <div style={{ height: 22 }} />

        {/* PRECEPTORSHIP FIT */}
        <section style={softSectionStyle}>
          <div style={smallLabelStyle}>How Preceptorship Supports Your Journey</div>

          <p style={paragraphStyle}>
            Through structured nursing informatics preceptorship, students can explore
            real-world informatics roles, strengthen project direction, understand
            workflow and system design, and gain practical exposure beyond textbooks.
          </p>

          <ul style={listStyle}>
            <li>Explore analyst, liaison, education, and leadership pathways</li>
            <li>Strengthen your practicum or capstone direction</li>
            <li>Build confidence in your transition into informatics</li>
            <li>Approach certification planning with more clarity</li>
          </ul>
        </section>

        <div style={{ height: 22 }} />

        {/* NOTE */}
        <section style={sectionStyle}>
          <div style={smallLabelStyle}>Important Note</div>

          <p style={paragraphStyle}>
            NurseBridge Consulting LLC does not provide exam preparation or guarantee
            certification outcomes. Certification requirements, eligibility, and
            examination policies are determined by the American Nurses Credentialing
            Center (ANCC).
          </p>
        </section>

        <div style={{ height: 22 }} />

        {/* CTA */}
        <section style={sectionStyle}>
          <div style={smallLabelStyle}>Next Step</div>

          <h2 style={{ margin: "0 0 12px 0", fontSize: 30 }}>
            Not sure where to start?
          </h2>

          <p style={paragraphStyle}>
            If you are considering ANCC Informatics Certification but feel unsure about
            your direction, experience, or next steps, preceptorship can help you build a
            stronger foundation.
          </p>

          <div style={{ marginTop: 22 }}>
            <Link href="/preceptorship" style={primaryButtonStyle}>
              Apply for Preceptorship
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
