"use client";

import Link from "next/link";
import { useState, type CSSProperties } from "react";

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

const shadowImage: CSSProperties = {
  width: "100%",
  borderRadius: 14,
  boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
  marginBottom: 12,
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
  const [activeSection, setActiveSection] = useState("start");
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
      {/* HEADER */}
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
            <button onClick={() => setActiveSection("start")} style={secondaryButtonStyle}>Start Here</button>

            <button onClick={() => setActiveSection("services")} style={secondaryButtonStyle}>Services</button>

            <button onClick={() => setActiveSection("pathways")} style={secondaryButtonStyle}>Career Paths</button>

            <button onClick={() => setActiveSection("books")} style={secondaryButtonStyle}>Books & Courses</button>

            <button onClick={() => setActiveSection("practice")} style={secondaryButtonStyle}>EHR Practice Lab</button>

            <button onClick={() => setActiveSection("preceptorship")} style={primaryButtonStyle}>
            Apply for Preceptorship
        </button>          
        </nav>
        </div>
      </header>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "26px 20px 46px" }}>
        {/* HERO */}
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
          border: "1px solid rgba(15,118,110,0.18)",
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
        Secure Your Nursing Informatics Preceptorship Placement
      </h1>

      <p style={{ fontSize: 18, lineHeight: 1.7, color: MUTED, margin: 0 }}>
        Led by <strong>Dr. Bernadette Amao, DNP</strong>, this preceptorship provides
        real-world experience, project guidance, and career clarity in nursing informatics.
        Designed for MSN and DNP students seeking hands-on exposure in systems, clinical
        liaison, training, or leadership roles.
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
        <span>Preceptorship</span>
        <span>•</span>
        <span>EHR Practice Lab</span>
      </div>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }}>
        <Link href="/preceptorship" style={{ ...primaryButtonStyle, padding: "12px 16px" }}>
          Start Preceptorship Inquiry
        </Link>

        <Link href="/career-paths" style={{ ...secondaryButtonStyle, padding: "12px 16px" }}>
          Explore Career Paths
        </Link>
      </div>

      <div style={{ marginTop: 14, color: MUTED, fontSize: 13 }}>
        Helping nurses transition into health informatics through mentorship, practicum support,
        workflow guidance, and hands-on EHR simulation.
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
        {/* PROOF BAND */}
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

        {/* START HERE */}
        {activeSection === "start" && (
      <section id="start-here" style={{ scrollMarginTop: 90, paddingTop: 8, paddingBottom: 8 }}>
                  <div
            style={{
              border: `1px solid ${BORDER}`,
              borderRadius: 16,
              padding: 20,
              backgroundColor: "white",
            }}
          >
            <div style={{ color: TEAL, fontWeight: 800, fontSize: 13, marginBottom: 6 }}>Start Here</div>
            <h2 style={{ margin: "0 0 10px 0" }}>Start your informatics journey</h2>
            <p style={{ marginTop: 0, color: MUTED, lineHeight: 1.7, maxWidth: 820 }}>
              New to nursing informatics? Use the pathways below to decide where to begin based on your goals.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 16,
                marginTop: 12,
              }}
            >
              <div style={softCardStyle}>
                <h3 style={{ margin: "0 0 8px 0" }}>Explore Career Paths</h3>
                <p style={{ margin: "0 0 12px 0", color: MUTED, lineHeight: 1.6 }}>
                  Learn about systems, liaison, training, and leadership pathways in nursing informatics.
                </p>
                <a href="#pathways" style={primaryButtonStyle}>Explore Pathways</a>
              </div>

              <div style={softCardStyle}>
                <h3 style={{ margin: "0 0 8px 0" }}>Learn About Preceptorship</h3>
                <p style={{ margin: "0 0 12px 0", color: MUTED, lineHeight: 1.6 }}>
                  See how NurseBridge supports MSN/DNP students through structured informatics mentorship.
                </p>
                <a href="#preceptorship-process" style={primaryButtonStyle}>View Preceptorship</a>
              </div>

              <div style={softCardStyle}>
                <h3 style={{ margin: "0 0 8px 0" }}>Try the Practice Lab</h3>
                <p style={{ margin: "0 0 12px 0", color: MUTED, lineHeight: 1.6 }}>
                  Practice chart review, structured documentation, and informatics thinking in a guided simulation.
                </p>
                <Link href="/practice-lab-access" style={primaryButtonStyle}>Enter Practice Lab</Link>
              </div>

              <div style={softCardStyle}>
                <h3 style={{ margin: "0 0 8px 0" }}>Connect with NurseBridge</h3>
                <p style={{ margin: "0 0 12px 0", color: MUTED, lineHeight: 1.6 }}>
                  Reach out for preceptorship questions, workflow guidance, or resource support.
                </p>
                <a href="#contact" style={primaryButtonStyle}>Contact NurseBridge</a>
              </div>
            </div>
          </div>
        </section>
        <SectionDivider />

        {/* WHO WE SERVE */}
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
              NurseBridge Consulting supports healthcare professionals and organizations that want smarter workflows,
              stronger documentation, and a clearer path into clinical informatics.
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
                  For nurses and clinicians seeking better documentation workflows, stronger efficiency, and guidance on
                  informatics-aligned practice.
                </p>
              </div>

              <div style={softCardStyle}>
                <h3 style={{ marginTop: 0, marginBottom: 8 }}>MSN/DNP informatics students</h3>
                <p style={{ margin: 0, color: MUTED, lineHeight: 1.6 }}>
                  For graduate students seeking structured nursing informatics preceptorship, real-world mentorship, and
                  meaningful project-based learning.
                </p>
              </div>

              <div style={softCardStyle}>
                <h3 style={{ marginTop: 0, marginBottom: 8 }}>Healthcare organizations</h3>
                <p style={{ margin: 0, color: MUTED, lineHeight: 1.6 }}>
                  For teams looking to improve EHR adoption, optimize workflows, and support documentation practices that
                  align with real clinical work.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* SERVICES */}
        <section id="services" style={{ scrollMarginTop: 90 }}>
          <div
            style={{
              border: `1px solid ${BORDER}`,
              borderRadius: 16,
              padding: 20,
              backgroundColor: "white",
            }}
          >
            <div style={{ color: TEAL, fontWeight: 800, fontSize: 13, marginBottom: 6 }}>Our Services</div>
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
                  title: "ANCC Certification Guidance",
                  desc: "Not sure if you're ready for ANCC certification? Learn how experience, project direction, and real-world exposure support your readiness.",
                  link: "/ancc-certification",
                  linkText: "Learn More",
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
                  ) : s.link ? (
                    <Link href={s.link} style={secondaryButtonStyle}>
                      {s.linkText}
                    </Link>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* STUDENT OUTCOMES */}
        <section style={{ paddingTop: 8, paddingBottom: 8 }}>
          <div
            style={{
              border: `1px solid ${BORDER}`,
              borderRadius: 16,
              padding: 20,
              backgroundColor: "white",
            }}
          >
            <div style={{ color: TEAL, fontWeight: 800, fontSize: 13, marginBottom: 6 }}>Student Outcomes</div>
            <h2 style={{ margin: "0 0 10px 0" }}>What you’ll learn through NurseBridge</h2>
            <p style={{ marginTop: 0, color: MUTED, lineHeight: 1.7, maxWidth: 820 }}>
              Whether you are exploring informatics for the first time or completing a graduate practicum, NurseBridge
              is designed to help you build practical, transferable skills.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 16,
                marginTop: 12,
              }}
            >
              <div style={cardStyle}>
                <div style={{ fontWeight: 800, marginBottom: 8 }}>Workflow Analysis</div>
                <div style={{ color: MUTED, lineHeight: 1.6 }}>
                  Learn how to identify workflow gaps, reduce friction, and connect documentation to clinical
                  operations.
                </div>
              </div>

              <div style={cardStyle}>
                <div style={{ fontWeight: 800, marginBottom: 8 }}>Structured Documentation Thinking</div>
                <div style={{ color: MUTED, lineHeight: 1.6 }}>
                  Practice how structured charting supports patient safety, compliance, trending, and communication.
                </div>
              </div>

              <div style={cardStyle}>
                <div style={{ fontWeight: 800, marginBottom: 8 }}>EHR Confidence</div>
                <div style={{ color: MUTED, lineHeight: 1.6 }}>
                  Build comfort with chart review, flowsheet logic, orders, MAR follow-up, and documentation workflows.
                </div>
              </div>

              <div style={cardStyle}>
                <div style={{ fontWeight: 800, marginBottom: 8 }}>Career Exposure</div>
                <div style={{ color: MUTED, lineHeight: 1.6 }}>
                  Explore multiple informatics pathways including technical, liaison, training, and leadership roles.
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* INFORMATICS PATHWAYS */}
        <section id="pathways" style={{ scrollMarginTop: 90 }}>
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
              Nursing informatics includes more than analyst roles. Students may grow into technical, liaison,
              education, leadership, and digital-health pathways depending on their strengths and interests.
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
          
          <div
  style={{
    marginTop: 18,
    paddingTop: 16,
    borderTop: "1px solid #d7e6e3",
    color: MUTED,
    lineHeight: 1.7,
    fontSize: 16,
  }}
>
   Not sure which pathway aligns with your strengths or practicum goals? <br /><br />
  NurseBridge preceptorship helps MSN and DNP students connect career interests with real-world informatics exposure, project direction, and structured mentorship.
</div>
            </div>
        </section>

        <SectionDivider />

        {/* PRECEPTORSHIP PROCESS */}
        <section id="preceptorship-process" style={{ scrollMarginTop: 90 }}>
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

        {/* PRACTICE LAB */}
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
              A guided simulation environment where students can practice chart review, structured documentation
              workflows, and informatics thinking during preceptorship.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
              <Link href="/practice-lab-access" style={primaryButtonStyle}>
                Enter Practice Lab
              </Link>
              <Link href="/practice-lab-access" style={secondaryButtonStyle}>
                Request Access
              </Link>
            </div>
          </div>
        </section>
        <SectionDivider />

        {/* BOOKS & COURSES */}
        <section id="books-courses">
          <div
            style={{
              border: `1px solid ${BORDER}`,
              borderRadius: 16,
              padding: 20,
              backgroundColor: "white",
            }}
          >
            <div style={{ color: TEAL, fontWeight: 800, fontSize: 13, marginBottom: 6 }}>
              Books & Courses
            </div>

            <h2 style={{ margin: "0 0 10px 0" }}>Books and training by Dr. Bernadette</h2>

            <p style={{ color: MUTED, lineHeight: 1.7, marginTop: 0, maxWidth: 850 }}>
              Dr. Bernadette is the author of multiple books and training programs that help clinicians improve
              documentation, explore informatics careers, and build sustainable professional pathways beyond the bedside.
            </p>

           {/* BOOKS WITH LARGE COVERS */}
<div
  style={{
    marginTop: 18,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 22,
  }}
>
  {/* Mastering EHR Efficiency */}
<div style={softCardStyle}>
  <img
    src="/mastering-ehr-efficiency.jpeg"
    alt="Mastering EHR Efficiency book cover"
    style={shadowImage}
  />

  <h3 style={{ margin: "0 0 6px 0" }}>
    Mastering EHR Efficiency
  </h3>

  <p style={{ margin: 0, color: MUTED, lineHeight: 1.6 }}>
    Reclaim your time, reduce after-hours charting, and streamline documentation with practical strategies.
  </p>

  <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
    
    <a
      href="https://books2read.com/u/mlVxlq"
      target="_blank"
      rel="noopener noreferrer"
      style={primaryButtonStyle}
    >
      View All Retailers
    </a>

    <a
      href="https://www.amazon.com/dp/B0GT6BZFSJ"
      target="_blank"
      rel="noopener noreferrer"
      style={secondaryButtonStyle}
    >
      Buy on Amazon
    </a>

  </div>
</div>
  {/* From Bedside to Informatics */}
<div style={softCardStyle}>
  <img
    src="/bedside-to-informatics.jpeg"
    alt="From Bedside to Informatics book cover"
    style={shadowImage}
  />

  <h3 style={{ margin: "0 0 6px 0" }}>
    From Bedside to Informatics
  </h3>

  <p style={{ margin: 0, color: MUTED, lineHeight: 1.6 }}>
    A practical guide for nurses considering the transition into health IT and clinical informatics.
  </p>

  <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
    
    <a
      href="https://books2read.com/u/31p0lv"
      target="_blank"
      rel="noopener noreferrer"
      style={primaryButtonStyle}
    >
      View All Retailers
    </a>

    <a
      href="https://www.amazon.com/dp/B0GJM8QNSZ"
      target="_blank"
      rel="noopener noreferrer"
      style={secondaryButtonStyle}
    >
      Buy on Amazon
    </a>

  </div>
</div>
  {/* Beyond Burnout */}
<div style={softCardStyle}>
  <img
    src="/beyond-burnout.jpeg"
    alt="Beyond Burnout book cover"
    style={shadowImage}
  />

  <h3 style={{ margin: "0 0 6px 0" }}>
    Beyond Burnout
  </h3>

  <p style={{ margin: 0, color: MUTED, lineHeight: 1.6 }}>
    A career pivot guide helping healthcare professionals explore meaningful alternatives beyond bedside roles.
  </p>

  <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
    
    <a
      href="https://books2read.com/u/m2w6g1"
      target="_blank"
      rel="noopener noreferrer"
      style={primaryButtonStyle}
    >
      View All Retailers
    </a>

    <a
  href="https://www.amazon.com/dp/B0GMC3H74W"
  target="_blank"
  rel="noopener noreferrer"
  style={secondaryButtonStyle}
>
  Buy on Amazon
</a>

  </div>
</div>
  {/* Offline Parent — Amazon Only */}
<div style={softCardStyle}>
  <img
    src="/offline-parent-revised.png"
    alt="Offline Parent: Less Screen Time. More Childhood. book cover"
    style={shadowImage}
  />

  <h3 style={{ margin: "0 0 6px 0" }}>
    Offline Parent
  </h3>

  <p style={{ margin: 0, color: MUTED, lineHeight: 1.6 }}>
    A guide to raising calm, creative kids in a screen-obsessed world—supporting balance for families.
  </p>

  <div style={{ marginTop: 12 }}>
    <a
       href="https://www.amazon.com/dp/B0GYPQ4D95"
      target="_blank"
      rel="noopener noreferrer"
      style={primaryButtonStyle}
    >
      Buy on Amazon
    </a>
  </div>
</div>
</div>

            {/* UDEMY COURSES */}
            <div
              style={{
                marginTop: 32,
                borderTop: `1px solid ${BORDER}`,
                paddingTop: 18,
              }}
            >
              <div style={{ color: TEAL, fontWeight: 800, fontSize: 13, marginBottom: 6 }}>
                Self-Paced Learning
              </div>
              <h3 style={{ margin: "0 0 8px 0" }}>Udemy courses for clinicians exploring new paths</h3>
              <p style={{ marginTop: 0, color: MUTED, lineHeight: 1.7, maxWidth: 820 }}>
                Learn at your own pace with on-demand video lessons designed for busy clinicians. These courses help you
                explore alternatives beyond the bedside and understand how informatics and workflow thinking can shape
                your next chapter.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: 16,
                  marginTop: 12,
                }}
              >
                {/* Course 1 */}
                <div style={cardStyle}>
                  <h4 style={{ margin: "0 0 6px 0" }}>
                    Beyond Burnout: 20 Career Alternatives for Healthcare Professionals
                  </h4>
                  <p style={{ margin: 0, color: MUTED, lineHeight: 1.6 }}>
                    Explore realistic, practical career pathways for healthcare professionals seeking options beyond
                    traditional bedside roles.
                  </p>
                  <ul style={miniListStyle}>
                    <li>Identify non-bedside roles that fit your strengths</li>
                    <li>Understand what skills transfer from bedside practice</li>
                    <li>Gain clarity on your next professional step</li>
                  </ul>
                  <a
                    href="https://www.udemy.com/course/beyond-burnout-20-career-alternatives-for-healthcare-pros/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ ...primaryButtonStyle, marginTop: 10 }}
                  >
                    View Course on Udemy
                  </a>
                </div>

                {/* Course 2 */}
                <div style={cardStyle}>
                  <h4 style={{ margin: "0 0 6px 0" }}>
                    Become a Successful EHR Consultant
                  </h4>
                  <p style={{ margin: 0, color: MUTED, lineHeight: 1.6 }}>
                    Learn how to build a consulting career in EHR optimization, workflow redesign, and clinical systems support.
                  </p>
                  <ul style={miniListStyle}>
                    <li>Understand the role of an EHR consultant</li>
                    <li>Learn how to support clinical teams effectively</li>
                    <li>Gain insight into workflow analysis and redesign</li>
                  </ul>
                  <a
                    href="https://www.udemy.com/course/become-a-successful-ehr-consultant/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ ...primaryButtonStyle, marginTop: 10 }}
                  >
                    View Course on Udemy
                  </a>
                </div>
              </div>
            </div>

            {/* OPTIONAL PERSONAL CONTENT */}
            <div
              style={{
                marginTop: 24,
                borderTop: `1px solid ${BORDER}`,
                paddingTop: 18,
              }}
            >
              <div style={{ fontWeight: 700, marginBottom: 6 }}>More from Dr. Bernadette</div>
              <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>
                Dr. Bernadette also creates faith-based digital content focused on reflection, scripture, and spiritual
                growth.
              </p>
              <a
                href="https://youtube.com/channel/UCwDsZTXsFLFtHQwG4dAwvDQ"
                target="_blank"
                rel="noreferrer"
                style={{ ...secondaryButtonStyle, marginTop: 10 }}
              >
                Visit Cornerstone Scriptures
              </a>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* ABOUT */}
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
              Dr. Bernadette Amao is a DNP-prepared nurse and clinical informatics analyst with over 13 years of experience supporting hospital workflows, clinicians, and digital health initiatives. 
              She is Epic-certified and actively works in a hospital setting.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: MUTED, margin: "10px 0 0 0" }}>
              She also mentors MSN and DNP students through structured nursing informatics preceptorship—helping them gain real-world exposure, strengthen project direction, and build confidence in their informatics career path.
            </p>
            <div style={{ marginTop: 16 }}>
              <a href="#contact" style={primaryButtonStyle}>
                Connect with NurseBridge
              </a>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* CONTACT */}
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
              <div style={{ fontSize: 16, fontWeight: 800 }}>nursebridgeconsulting@gmail.com</div>
            </div>

            <Link href="/preceptorship" style={primaryButtonStyle}>
              Apply Now
            </Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer
  style={{
    borderTop: `1px solid ${BORDER}`,
    paddingTop: 16,
    marginTop: 20,
    color: MUTED,
    fontSize: 13,
  }}
>
  <div>© 2026 NurseBridge Consulting LLC</div>

  <div style={{ marginTop: 6, fontSize: 12 }}>
    Epic is a registered trademark of Epic Systems Corporation. NurseBridge Consulting LLC is not affiliated with or endorsed by Epic Systems.
  </div>
</footer>
        </div>
      </main>
  );
}
