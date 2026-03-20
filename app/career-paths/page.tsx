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

const pathwayCardStyle: React.CSSProperties = {
  border: `1px solid ${BORDER}`,
  borderRadius: 16,
  padding: 20,
  backgroundColor: "white",
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
  margin: "10px 0 0 18px",
  padding: 0,
  color: MUTED,
  lineHeight: 1.8,
};

export default function CareerPathsPage() {
  return (
    <main style={{ backgroundColor: "#f8fafb", minHeight: "100vh", color: TEXT }}>
      <div style={pageWrap}>
        {/* HERO */}
        <section style={{ ...softSectionStyle, padding: 28 }}>
          <div style={smallLabelStyle}>Nursing Informatics</div>

          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              lineHeight: 1.08,
              margin: "0 0 16px 0",
              letterSpacing: "-0.02em",
            }}
          >
            Career Paths in Nursing Informatics
          </h1>

          <p style={{ ...paragraphStyle, maxWidth: 860 }}>
            Nursing informatics is more than analyst work. Nurses can grow into technical,
            clinical, education, and leadership roles depending on their strengths,
            interests, and professional goals.
          </p>

          <p style={{ ...paragraphStyle, maxWidth: 860, marginTop: 14 }}>
            This page will help you understand the major pathways and how structured
            preceptorship can help you begin with more clarity and direction.
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

        {/* WHY THIS MATTERS */}
        <section style={sectionStyle}>
          <div style={smallLabelStyle}>Why This Matters</div>
          <h2 style={{ margin: "0 0 12px 0", fontSize: 30 }}>
            Not every informatics nurse follows the same path
          </h2>

          <p style={paragraphStyle}>
            Many MSN and DNP students enter informatics without a clear understanding of
            available roles. Some assume they must become an analyst first, while others
            are unsure how their bedside, educator, or leadership experience fits into the
            field.
          </p>

          <p style={{ ...paragraphStyle, marginTop: 14 }}>
            In reality, nursing informatics includes multiple entry points, including
            workflow redesign, education, clinical liaison work, system optimization,
            quality improvement, and strategic leadership. Understanding these pathways
            early can help you choose a stronger practicum focus, align your strengths
            with the right role, and transition more confidently into informatics.
          </p>
        </section>

        <div style={{ height: 22 }} />

        {/* PATHWAYS */}
        <section style={sectionStyle}>
          <div style={smallLabelStyle}>Core Career Pathways</div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 18,
            }}
          >
            <div style={pathwayCardStyle}>
              <h3 style={{ margin: "0 0 10px 0", fontSize: 24 }}>Systems & Technical Roles</h3>

              <p style={paragraphStyle}>
                These roles focus on the technical side of the EHR and related digital
                systems. Professionals in this area build, configure, optimize, test, and
                analyze healthcare technology to support safe and efficient care delivery.
              </p>

              <div style={{ fontWeight: 800, marginTop: 14 }}>Common roles</div>
              <ul style={listStyle}>
                <li>Clinical Systems Analyst</li>
                <li>EHR Builder</li>
                <li>Data Analyst</li>
                <li>Reporting Specialist</li>
              </ul>

              <div style={{ fontWeight: 800, marginTop: 14 }}>Core skills</div>
              <ul style={listStyle}>
                <li>Analytical thinking</li>
                <li>Attention to detail</li>
                <li>Workflow mapping</li>
                <li>Systems thinking</li>
              </ul>

              <div style={{ fontWeight: 800, marginTop: 14 }}>Best fit for</div>
              <p style={{ ...paragraphStyle, marginTop: 8 }}>
                Nurses who enjoy problem-solving, structure, optimization, and improving
                how systems function behind the scenes.
              </p>

              <div style={{ fontWeight: 800, marginTop: 14 }}>Common entry pathway</div>
              <p style={{ ...paragraphStyle, marginTop: 8 }}>
                Exposure to EHR workflows, analyst shadowing, participation in
                optimization work, and project-based preceptorship experiences.
              </p>
            </div>

            <div style={pathwayCardStyle}>
              <h3 style={{ margin: "0 0 10px 0", fontSize: 24 }}>Clinical Liaison Roles</h3>

              <p style={paragraphStyle}>
                Clinical liaison roles bridge the gap between clinicians and technical
                teams. These professionals translate frontline workflow needs into system
                changes, process improvements, and safer documentation practices.
              </p>

              <div style={{ fontWeight: 800, marginTop: 14 }}>Common roles</div>
              <ul style={listStyle}>
                <li>Clinical Informatics Liaison</li>
                <li>Clinical Champion / Super User</li>
                <li>Workflow Redesign Specialist</li>
                <li>Clinical Transformation Partner</li>
              </ul>

              <div style={{ fontWeight: 800, marginTop: 14 }}>Core skills</div>
              <ul style={listStyle}>
                <li>Communication</li>
                <li>Workflow understanding</li>
                <li>Clinical credibility</li>
                <li>Change management</li>
              </ul>

              <div style={{ fontWeight: 800, marginTop: 14 }}>Best fit for</div>
              <p style={{ ...paragraphStyle, marginTop: 8 }}>
                Nurses who enjoy collaboration, workflow improvement, and helping clinical
                teams adapt to better processes.
              </p>

              <div style={{ fontWeight: 800, marginTop: 14 }}>Common entry pathway</div>
              <p style={{ ...paragraphStyle, marginTop: 8 }}>
                Serving as a super user, supporting go-live initiatives, participating in
                workflow redesign, or contributing to operational improvement efforts.
              </p>
            </div>

            <div style={pathwayCardStyle}>
              <h3 style={{ margin: "0 0 10px 0", fontSize: 24 }}>Training & Education Roles</h3>

              <p style={paragraphStyle}>
                These roles focus on helping clinicians use the EHR effectively and adapt
                to change. They often involve onboarding, education, tip sheets, user
                support, and readiness for implementation or optimization.
              </p>

              <div style={{ fontWeight: 800, marginTop: 14 }}>Common roles</div>
              <ul style={listStyle}>
                <li>Clinical Systems Trainer</li>
                <li>EHR Onboarding Specialist</li>
                <li>Informatics Educator</li>
                <li>Change Management Trainer</li>
              </ul>

              <div style={{ fontWeight: 800, marginTop: 14 }}>Core skills</div>
              <ul style={listStyle}>
                <li>Teaching and communication</li>
                <li>Content development</li>
                <li>Presentation skills</li>
                <li>User support</li>
              </ul>

              <div style={{ fontWeight: 800, marginTop: 14 }}>Best fit for</div>
              <p style={{ ...paragraphStyle, marginTop: 8 }}>
                Nurses who enjoy teaching, coaching, onboarding, and helping others build
                confidence with new systems and workflows.
              </p>

              <div style={{ fontWeight: 800, marginTop: 14 }}>Common entry pathway</div>
              <p style={{ ...paragraphStyle, marginTop: 8 }}>
                Assisting with onboarding, creating tip sheets, facilitating education, or
                supporting user readiness during training and go-live activities.
              </p>
            </div>

            <div style={pathwayCardStyle}>
              <h3 style={{ margin: "0 0 10px 0", fontSize: 24 }}>Leadership & Strategy Roles</h3>

              <p style={paragraphStyle}>
                Leadership roles focus on governance, quality improvement, digital
                transformation, project oversight, and long-term informatics strategy
                across departments or organizations.
              </p>

              <div style={{ fontWeight: 800, marginTop: 14 }}>Common roles</div>
              <ul style={listStyle}>
                <li>Informatics Manager</li>
                <li>CNIO / Associate CNIO</li>
                <li>Project Manager</li>
                <li>Quality & Safety Informatics Lead</li>
              </ul>

              <div style={{ fontWeight: 800, marginTop: 14 }}>Core skills</div>
              <ul style={listStyle}>
                <li>Leadership and decision-making</li>
                <li>Strategic thinking</li>
                <li>Quality improvement</li>
                <li>Project management</li>
              </ul>

              <div style={{ fontWeight: 800, marginTop: 14 }}>Best fit for</div>
              <p style={{ ...paragraphStyle, marginTop: 8 }}>
                Nurses interested in broader influence, systems-level improvement,
                governance, and digital-health direction.
              </p>

              <div style={{ fontWeight: 800, marginTop: 14 }}>Common entry pathway</div>
              <p style={{ ...paragraphStyle, marginTop: 8 }}>
                Prior informatics experience, committee involvement, project leadership,
                and advanced graduate preparation such as an MSN or DNP.
              </p>
            </div>
          </div>
        </section>

        <div style={{ height: 22 }} />

        {/* FIT SECTION */}
        <section style={softSectionStyle}>
          <div style={smallLabelStyle}>Which Path May Fit You?</div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 16,
            }}
          >
            <div>
              <div style={{ fontWeight: 800, marginBottom: 6 }}>Systems & Technical</div>
              <div style={paragraphStyle}>
                Best for nurses who enjoy systems, data, structure, troubleshooting, and
                technical problem-solving.
              </div>
            </div>

            <div>
              <div style={{ fontWeight: 800, marginBottom: 6 }}>Clinical Liaison</div>
              <div style={paragraphStyle}>
                Best for nurses who enjoy workflow improvement, collaboration, and
                translating clinical needs into practical system changes.
              </div>
            </div>

            <div>
              <div style={{ fontWeight: 800, marginBottom: 6 }}>Training & Education</div>
              <div style={paragraphStyle}>
                Best for nurses who enjoy teaching, mentoring, onboarding, and user
                support.
              </div>
            </div>

            <div>
              <div style={{ fontWeight: 800, marginBottom: 6 }}>Leadership & Strategy</div>
              <div style={paragraphStyle}>
                Best for nurses who enjoy oversight, quality improvement, strategic
                direction, and leading organizational change.
              </div>
            </div>
          </div>

          <p style={{ ...paragraphStyle, marginTop: 18 }}>
            Many nurses do not remain in only one pathway. Over time, informatics careers
            often evolve across technical, clinical, educational, and leadership roles.
          </p>
        </section>

        <div style={{ height: 22 }} />

        {/* CTA */}
        <section style={sectionStyle}>
          <div style={smallLabelStyle}>Next Step</div>
          <h2 style={{ margin: "0 0 12px 0", fontSize: 30 }}>
            Not sure which path aligns with your goals?
          </h2>

          <p style={paragraphStyle}>
            Through structured nursing informatics preceptorship, you can explore real-world
            roles, gain practical exposure, strengthen your project or capstone direction,
            and build confidence in your transition into informatics.
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
