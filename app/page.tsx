"use client";

import Link from "next/link";
import type { CSSProperties } from "react";

const TEAL = "#0f766e";
const TEAL_DARK = "#115e59";
const BG = "#ffffff";
const TEXT = "#0f172a";
const MUTED = "#475569";
const BORDER = "#e2e8f0";
const SOFT = "#f0fdfa";

const primaryButtonStyle: CSSProperties = {
  display: "inline-block",
  padding: "10px 14px",
  borderRadius: 12,
  backgroundColor: TEAL,
  color: "white",
  fontWeight: 800,
  textDecoration: "none",
  border: `1px solid ${TEAL_DARK}`,
};

const secondaryButtonStyle: CSSProperties = {
  display: "inline-block",
  padding: "10px 14px",
  borderRadius: 12,
  backgroundColor: "white",
  color: TEXT,
  fontWeight: 800,
  textDecoration: "none",
  border: `1px solid ${BORDER}`,
};

const cardStyle: CSSProperties = {
  border: `1px solid ${BORDER}`,
  borderRadius: 16,
  padding: 18,
  backgroundColor: "white",
};

const softCardStyle: CSSProperties = {
  border: `1px solid ${BORDER}`,
  borderRadius: 16,
  padding: 18,
  backgroundColor: SOFT,
};

const miniListStyle: CSSProperties = {
  paddingLeft: 18,
  lineHeight: 1.7,
  color: MUTED,
  margin: 0,
};

const SectionDivider = () => (
  <div
    style={{
      height: 1,
      background: BORDER,
      margin: "38px 0",
      opacity: 0.6,
    }}
  />
);

export default function Home() {
  return (
    <main
      style={{
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
        backgroundColor: BG,
        color: TEXT,
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          backgroundColor: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(8px)",
          borderBottom: `1px solid ${BORDER}`,
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "14px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              textDecoration: "none",
              color: TEXT,
            }}
          >
            <img
              src="/logo-icon.jpeg"
              alt="NurseBridge Consulting"
              style={{ height: 44, width: "auto", display: "block" }}
            />
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
              <span style={{ fontSize: 18, fontWeight: 800 }}>NurseBridge Consulting LLC</span>
              <span style={{ fontSize: 13, color: MUTED }}>
                Clinical Informatics • EHR Optimization • Nursing Preceptorship
              </span>
            </div>
          </Link>

          <nav style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            <a href="#services" style={primaryButtonStyle}>
              Our Services
            </a>
            <a href="#about" style={primaryButtonStyle}>
              About the Founder
            </a>
            <a href="#practice-lab" style={primaryButtonStyle}>
              EHR Practice Lab
            </a>
            <a href="#contact" style={primaryButtonStyle}>
              Contact
            </a>
            <Link href="/preceptorship" style={primaryButtonStyle}>
              Apply for Preceptorship
            </Link>
          </nav>
        </div>
      </header>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "26px 20px 46px" }}>
        {/* Hero */}
        <section
          style={{
            border: `1px solid ${BORDER}`,
            borderRadius: 18,
            padding: "28px 26px",
            background: SOFT,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 28,
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 10px",
                  borderRadius: 999,
                  backgroundColor: "rgba(15,118,110,0.10)",
                  color: TEAL_DARK,
                  fontSize: 12,
                  fontWeight: 700,
                  border: `1px solid rgba(15,118,110,0.18)`,
                  marginBottom: 14,
                }}
              >
                NurseBridge Consulting • Texas-based • Remote-friendly
              </div>

              <h1
                style={{
                  fontSize: "clamp(34px, 6vw, 58px)",
                  margin: "0 0 12px 0",
                  lineHeight: 1.08,
                }}
              >
                Clinical Informatics support that improves workflow—and builds careers.
              </h1>

              <p style={{ fontSize: 18, lineHeight: 1.7, color: MUTED, margin: 0 }}>
                Founded by <strong>Dr. Bernadette Amao, DNP</strong>, NurseBridge Consulting helps
                clinicians, graduate students, and healthcare teams strengthen documentation
                workflows, explore informatics career pathways, and gain hands-on learning through
                structured mentorship and simulation.
              </p>

              <div
                style={{
                  marginTop: 14,
                  display: "inline-flex",
                  gap: 10,
                  flexWrap: "wrap",
                  fontSize: 13,
                  color: MUTED,
                  fontWeight: 700,
                }}
              >
                <span>Books</span>
                <span>•</span>
                <span>Courses</span>
                <span>•</span>
                <span>Consulting</span>
              </div>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }}>
                <Link href="/preceptorship" style={{ ...primaryButtonStyle, padding: "12px 16px" }}>
                  Start Preceptorship Inquiry
                </Link>
                <a href="#services" style={{ ...secondaryButtonStyle, padding: "12px 16px" }}>
                  Explore Services
                </a>
              </div>

              <div style={{ marginTop: 14, color: MUTED, fontSize: 13 }}>
                Helping nurses transition into health informatics through mentorship, practicum
                support, workflow guidance, and hands-on EHR simulation.
              </div>
            </div>

            <div style={cardStyle}>
              <div style={{ fontWeight: 800, marginBottom: 10 }}>Why clinicians choose NurseBridge</div>
              <ul style={miniListStyle}>
                <li>DNP-prepared clinical informatics specialist</li>
                <li>Epic-certified with 13+ years experience</li>
                <li>Real hospital workflow optimization</li>
                <li>Mentorship for nurses transitioning into informatics</li>
                <li>Structured MSN/DNP preceptorship guidance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Proof band */}
        <section style={{ paddingTop: 18, paddingBottom: 8 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 16,
            }}
          >
            <div style={cardStyle}>
              <div style={{ fontSize: 28, fontWeight: 800, color: TEAL, marginBottom: 6 }}>13+ Years</div>
              <div style={{ fontWeight: 700, marginBottom: 6 }}>Clinical Informatics Experience</div>
              <div style={{ color: MUTED, lineHeight: 1.6 }}>
                Real-world hospital systems support, workflow optimization, and documentation improvement.
              </div>
            </div>

            <div style={cardStyle}>
              <div style={{ fontSize: 28, fontWeight: 800, color: TEAL, marginBottom: 6 }}>Epic-Certified</div>
              <div style={{ fontWeight: 700, marginBottom: 6 }}>Practical EHR Expertise</div>
              <div style={{ color: MUTED, lineHeight: 1.6 }}>
                Support grounded in actual clinical workflow, documentation standards, and informatics practice.
              </div>
            </div>

            <div style={cardStyle}>
              <div style={{ fontSize: 28, fontWeight: 800, color: TEAL, marginBottom: 6 }}>MSN / DNP</div>
              <div style={{ fontWeight: 700, marginBottom: 6 }}>Preceptorship Support</div>
              <div style={{ color: MUTED, lineHeight: 1.6 }}>
                Structured guidance for graduate students seeking meaningful nursing informatics learning experiences.
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Who We Serve */}
        <section>
          <div
            style={{
              border: `1px solid ${BORDER}`,
              borderRadius: 16,
              padding: 20,
              backgroundColor: "white",
            }}
          >
            <div style={{ color: TEAL, fontWeight: 800, fontSize: 13, marginBottom: 6 }}>
              Who We Serve
            </div>
            <h2 style={{ margin: 0, fontSize: 32 }}>Built for clinicians, students, and healthcare teams</h2>
            <p style={{ marginTop: 8, color: MUTED, lineHeight: 1.7, maxWidth: 850 }}>
              NurseBridge Consulting supports healthcare professionals and organizations that want
              smarter workflows, stronger documentation, and a clearer path into clinical informatics.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 16,
              }}
            >
              <div style={softCardStyle}>
                <h3 style={{ marginTop: 0, marginBottom: 8 }}>Bedside clinicians</h3>
                <p style={{ margin: 0, color: MUTED, lineHeight: 1.6 }}>
                  For nurses and clinicians seeking better documentation workflows, stronger efficiency,
                  and guidance on informatics-aligned practice.
                </p>
              </div>

              <div style={softCardStyle}>
                <h3 style={{ marginTop: 0, marginBottom: 8 }}>MSN/DNP informatics students</h3>
                <p style={{ margin: 0, color: MUTED, lineHeight: 1.6 }}>
                  For graduate students seeking structured nursing informatics preceptorship,
                  real-world mentorship, and meaningful project-based learning.
                </p>
              </div>

              <div style={softCardStyle}>
                <h3 style={{ marginTop: 0, marginBottom: 8 }}>Healthcare organizations</h3>
                <p style={{ margin: 0, color: MUTED, lineHeight: 1.6 }}>
                  For teams looking to improve EHR adoption, optimize workflows, and support
                  documentation practices that align with real clinical work.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Services */}
        <section id="services" style={{ scrollMarginTop: 90 }}>
          <div
            style={{
              border: `1px solid ${BORDER}`,
              borderRadius: 16,
              padding: 20,
              backgroundColor: "white",
            }}
          >
            <div style={{ color: TEAL, fontWeight: 800, fontSize: 13, marginBottom: 6 }}>
              Our Services
            </div>
            <h2 style={{ margin: "0 0 10px 0" }}>How NurseBridge supports your informatics journey</h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 16,
                marginTop: 16,
              }}
            >
              {[
                {
                  title: "EHR Workflow Optimization",
                  desc: "Reduce clicks, streamline navigation, and align documentation with real clinical work.",
                },
                {
                  title: "Clinical Documentation Improvement",
                  desc: "Improve accuracy, compliance, and usability through practical build and workflow changes.",
                },
                {
                  title: "Nursing Informatics Mentorship",
                  desc: "A structured pathway for bedside clinicians transitioning into informatics roles.",
                },
                {
                  title: "Graduate Informatics Preceptorship",
                  desc: "Structured MSN/DNP preceptorship with clear goals, deliverables, and coaching.",
                  cta: true,
                },
              ].map((s) => (
                <div key={s.title} style={cardStyle}>
                  <h3 style={{ margin: "0 0 8px 0" }}>{s.title}</h3>
                  <p style={{ margin: "0 0 12px 0", color: MUTED, lineHeight: 1.6 }}>{s.desc}</p>
                  {s.cta ? (
                    <Link href="/preceptorship" style={primaryButtonStyle}>
                      Apply for Preceptorship
                    </Link>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Informatics pathways */}
        <section>
          <div
            style={{
              border: `1px solid ${BORDER}`,
              borderRadius: 16,
              padding: 20,
              backgroundColor: "white",
            }}
          >
            <div style={{ color: TEAL, fontWeight: 800, fontSize: 13, marginBottom: 6 }}>
              Nursing Informatics
            </div>
            <h2 style={{ margin: "0 0 10px 0" }}>Explore nursing informatics career pathways</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginTop: 0, maxWidth: 850 }}>
              Nursing informatics includes more than analyst roles. Students may grow into
              technical, liaison, education, leadership, and digital-health pathways depending on
              their strengths and interests.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 16,
                marginTop: 16,
              }}
            >
              <div style={softCardStyle}>
                <h3 style={{ margin: "0 0 8px 0" }}>Systems & Technical</h3>
                <ul style={miniListStyle}>
                  <li>Clinical Systems Analyst</li>
                  <li>EHR Builder</li>
                  <li>Data Analyst</li>
                  <li>Reporting Specialist</li>
                </ul>
              </div>

              <div style={softCardStyle}>
                <h3 style={{ margin: "0 0 8px 0" }}>Clinical Liaison</h3>
                <ul style={miniListStyle}>
                  <li>Clinical Informatics Liaison</li>
                  <li>Clinical Champion / Super User</li>
                  <li>Workflow Redesign Specialist</li>
                  <li>Clinical Transformation Partner</li>
                </ul>
              </div>

              <div style={softCardStyle}>
                <h3 style={{ margin: "0 0 8px 0" }}>Education & Training</h3>
                <ul style={miniListStyle}>
                  <li>Clinical Systems Trainer</li>
                  <li>EHR Onboarding Specialist</li>
                  <li>Informatics Educator</li>
                  <li>Change Management Trainer</li>
                </ul>
              </div>

              <div style={softCardStyle}>
                <h3 style={{ margin: "0 0 8px 0" }}>Leadership & Strategy</h3>
                <ul style={miniListStyle}>
                  <li>Informatics Manager</li>
                  <li>CNIO / Associate CNIO</li>
                  <li>Project Manager</li>
                  <li>Quality & Safety Informatics Lead</li>
                </ul>
              </div>
            </div>

            <div
              style={{
                marginTop: 20,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: 18,
                backgroundColor: SOFT,
              }}
            >
              <div style={{ fontWeight: 800, marginBottom: 8 }}>Understanding Informatics Pathways</div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                  gap: 14,
                }}
              >
                <div>
                  <div style={{ fontWeight: 700, marginBottom: 4 }}>Systems</div>
                  <div style={{ color: MUTED, lineHeight: 1.6 }}>
                    EHR configuration, workflow design, reporting, and decision support.
                  </div>
                </div>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: 4 }}>Clinical Liaison</div>
                  <div style={{ color: MUTED, lineHeight: 1.6 }}>
                    Translating clinical needs to technical teams and improving workflows.
                  </div>
                </div>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: 4 }}>Training</div>
                  <div style={{ color: MUTED, lineHeight: 1.6 }}>
                    Onboarding, tip sheets, education support, and go-live readiness.
                  </div>
                </div>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: 4 }}>Leadership</div>
                  <div style={{ color: MUTED, lineHeight: 1.6 }}>
                    Governance, quality, transformation strategy, and digital health direction.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Preceptorship process */}
        <section>
          <div
            style={{
              border: `1px solid ${BORDER}`,
              borderRadius: 16,
              padding: 20,
              backgroundColor: "white",
            }}
          >
            <div style={{ color: TEAL, fontWeight: 700, fontSize: 13 }}>Preceptorship Process</div>
            <h2 style={{ margin: "6px 0 10px 0" }}>How the informatics preceptorship works</h2>
            <p style={{ color: MUTED, marginBottom: 18, lineHeight: 1.7 }}>
              A structured mentorship designed for MSN/DNP students completing clinical informatics practicum hours.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 16,
              }}
            >
              {[
                {
                  step: "1. Inquiry",
                  desc: "Submit the preceptorship inquiry form with program details and required practicum hours.",
                },
                {
                  step: "2. Alignment Call",
                  desc: "We review your program requirements, goals, and available project opportunities.",
                },
                {
                  step: "3. Structured Practicum",
                  desc: "Participate in guided informatics projects, workflow analysis, and mentorship sessions.",
                },
                {
                  step: "4. Evaluation & Completion",
                  desc: "Receive feedback, documentation support, and final practicum verification.",
                },
              ].map((s) => (
                <div key={s.step} style={cardStyle}>
                  <h3 style={{ margin: "0 0 6px 0" }}>{s.step}</h3>
                  <p style={{ margin: 0, color: MUTED, lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 18 }}>
              <Link href="/preceptorship" style={{ ...primaryButtonStyle, padding: "12px 16px" }}>
                Apply for Preceptorship
              </Link>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Practice lab */}
        <section id="practice-lab" style={{ scrollMarginTop: 90 }}>
          <div
            style={{
              border: `1px solid ${BORDER}`,
              borderRadius: 16,
              padding: 20,
              backgroundColor: "white",
            }}
          >
            <div style={{ color: TEAL, fontWeight: 800, fontSize: 13, marginBottom: 6 }}>
              EHR Practice Lab
            </div>
            <h2 style={{ margin: "0 0 10px 0" }}>Hands-on simulation for structured documentation</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginTop: 0, maxWidth: 850 }}>
              A guided simulation environment where students can practice chart review,
              structured documentation workflows, and informatics thinking during preceptorship.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
              <Link href="/practice-lab" style={primaryButtonStyle}>
                Enter Practice Lab
              </Link>
              <Link href="/practice-lab-access" style={secondaryButtonStyle}>
                Request Access
              </Link>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Resources */}
        <section>
          <div
            style={{
              border: `1px solid ${BORDER}`,
              borderRadius: 16,
              padding: 20,
              backgroundColor: "white",
            }}
          >
            <div style={{ color: TEAL, fontWeight: 800, fontSize: 13, marginBottom: 6 }}>
              Resources & Learning
            </div>

            <h2 style={{ margin: "0 0 10px 0" }}>
              Explore books, training, and content by Dr. Bernadette
            </h2>

            <p style={{ color: MUTED, lineHeight: 1.7, marginTop: 0, maxWidth: 850 }}>
              In addition to consulting and preceptorship, NurseBridge offers practical resources
              for clinicians exploring informatics, EHR efficiency, and professional growth.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
                gap: 16,
                marginTop: 12,
              }}
            >
              <div style={softCardStyle}>
                <h3 style={{ margin: "0 0 8px 0" }}>Books</h3>
                <p style={{ margin: 0, color: MUTED, lineHeight: 1.6 }}>
                  Practical books on EHR efficiency, informatics, and career growth for clinicians.
                </p>
                <a
                  href="https://www.amazon.com/author/bernadetteamao"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: 10,
                    fontWeight: 700,
                    color: TEAL,
                    textDecoration: "none",
                  }}
                >
                  View Books on Amazon →
                </a>
              </div>

              <div style={softCardStyle}>
                <h3 style={{ margin: "0 0 8px 0" }}>Courses</h3>
                <p style={{ margin: 0, color: MUTED, lineHeight: 1.6 }}>
                  Self-paced learning resources designed to help healthcare professionals pivot and grow.
                </p>
                <a
                  href="https://www.udemy.com/course/become-a-successful-ehr-consultant/?referralCode=FB961F9293A8FCC6FA7E"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: 10,
                    fontWeight: 700,
                    color: TEAL,
                    textDecoration: "none",
                  }}
                >
                  View Udemy Course →
                </a>
              </div>

              <div style={softCardStyle}>
                <h3 style={{ margin: "0 0 8px 0" }}>YouTube & Teaching Content</h3>
                <p style={{ margin: 0, color: MUTED, lineHeight: 1.6 }}>
                  Educational and reflective content that supports professional development and personal growth.
                </p>
              </div>
            </div>

            <div style={{ marginTop: 16 }}>
              <a href="#contact" style={primaryButtonStyle}>
                Ask About Resources
              </a>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* About */}
        <section id="about" style={{ scrollMarginTop: 90 }}>
          <div
            style={{
              border: `1px solid ${BORDER}`,
              borderRadius: 16,
              padding: 20,
              backgroundColor: "white",
            }}
          >
            <div style={{ color: TEAL, fontWeight: 800, fontSize: 13, marginBottom: 6 }}>
              About the Founder
            </div>
            <h2 style={{ margin: "0 0 10px 0" }}>Meet Dr. Bernadette Amao</h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: MUTED, margin: 0 }}>
              Dr. Bernadette Amao is a Doctor of Nursing Practice–prepared nurse and Epic-certified
              clinical informatics analyst with more than 13 years of experience supporting hospital systems,
              clinicians, and digital health initiatives.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: MUTED, margin: "10px 0 0 0" }}>
              Her work focuses on bridging the gap between bedside clinicians and healthcare technology
              while mentoring the next generation of informatics professionals.
            </p>
            <div style={{ marginTop: 16 }}>
              <a href="#contact" style={primaryButtonStyle}>
                Connect with NurseBridge
              </a>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Contact */}
        <section id="contact" style={{ scrollMarginTop: 90 }}>
          <div
            style={{
              border: `1px solid ${BORDER}`,
              borderRadius: 16,
              padding: 20,
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <div>
              <div style={{ fontSize: 14, color: MUTED, marginBottom: 4 }}>Email</div>
              <div style={{ fontSize: 16, fontWeight: 800 }}>info@nursebridgeconsulting.com</div>
            </div>

            <Link href="/preceptorship" style={primaryButtonStyle}>
              Preceptorship Inquiry Form
            </Link>
          </div>
        </section>

        <footer
          style={{
            borderTop: `1px solid ${BORDER}`,
            paddingTop: 16,
            marginTop: 20,
            color: MUTED,
            fontSize: 13,
          }}
        >
          © 2026 NurseBridge Consulting LLC
        </footer>
      </div>
    </main>
  );
}
