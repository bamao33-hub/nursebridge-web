import Link from "next/link";

const TEAL = "#0f766e";
const TEAL_DARK = "#115e59";
const BG = "#ffffff";
const TEXT = "#0f172a";
const MUTED = "#475569";
const BORDER = "#e2e8f0";
const SOFT = "#f0fdfa";

const primaryButtonStyle = {
  display: "inline-block",
  padding: "10px 14px",
  borderRadius: 12,
  backgroundColor: TEAL,
  color: "white",
  fontWeight: 800,
  textDecoration: "none",
  border: `1px solid ${TEAL_DARK}`,
};
const secondaryButtonStyle = {
  display: "inline-block",
  padding: "10px 14px",
  borderRadius: 12,
  backgroundColor: "white",
  color: TEXT,
  fontWeight: 800,
  textDecoration: "none",
  border: `1px solid ${BORDER}`,
};
const SectionDivider = () => (
  <div
    style={{
      height: 1,
      background: BORDER,
      margin: "32px 0",
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

          <nav style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
  <a href="#services" style={primaryButtonStyle}>
    Our Services
  </a>
  <a href="#about" style={primaryButtonStyle}>
    About the Founder
  </a>
  <a href="#simulation" style={primaryButtonStyle}>
    EHR Practice Lab (Simulation)
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
              gridTemplateColumns: "1.4fr 1fr",
              gap: "28px",
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

              <h1 style={{ fontSize: 42, margin: "0 0 12px 0", lineHeight: 1.1 }}>
                Clinical Informatics support that improves workflow—and builds careers.
              </h1>

              <p style={{ fontSize: 17, lineHeight: 1.7, color: MUTED, margin: 0 }}>
                Founded by <strong>Dr. Bernadette Amao, DNP</strong>, NurseBridge Consulting helps clinicians and
                healthcare organizations improve workflow efficiency, optimize Electronic Health Record systems,
                and mentor nurses transitioning into clinical informatics.
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

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "18px" }}>
                <Link
                  href="/preceptorship"
                  style={{
                    display: "inline-block",
                    padding: "12px 16px",
                    borderRadius: 12,
                    backgroundColor: TEAL,
                    color: "white",
                    fontWeight: 800,
                    textDecoration: "none",
                    border: `1px solid ${TEAL_DARK}`,
                  }}
                >
                  Start Preceptorship Inquiry
                </Link>

                <a
                  href="#services"
                  style={{
                    display: "inline-block",
                    padding: "12px 16px",
                    borderRadius: 12,
                    backgroundColor: "white",
                    color: TEXT,
                    fontWeight: 700,
                    textDecoration: "none",
                    border: `1px solid ${BORDER}`,
                  }}
                >
                  Explore Services
                </a>
              </div>

              <div style={{ marginTop: "14px", color: MUTED, fontSize: 13 }}>
                Typical requests: documentation efficiency, workflow redesign, build support, training, mentorship, and precepting.
              </div>
            </div>

            <div
              style={{
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: 18,
                background: "white",
              }}
            >
              <div style={{ fontWeight: 800, marginBottom: 10 }}>
                Why clinicians choose NurseBridge
              </div>

              <ul style={{ paddingLeft: 18, color: MUTED, lineHeight: 1.7, margin: 0 }}>
                <li>DNP-prepared clinical informatics specialist</li>
                <li>Epic-certified with 13+ years experience</li>
                <li>Real hospital workflow optimization</li>
                <li>Mentorship for nurses transitioning into informatics</li>
                <li>Structured MSN/DNP preceptorship guidance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Proof Band */}
        <section style={{ paddingTop: 18, paddingBottom: 8 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 16,
            }}
          >
            <div
              style={{
                border: `1px solid ${BORDER}`,
                borderRadius: 16,
                padding: 18,
                backgroundColor: "white",
              }}
            >
              <div style={{ fontSize: 28, fontWeight: 800, color: TEAL, marginBottom: 6 }}>13+ Years</div>
              <div style={{ fontWeight: 700, marginBottom: 6 }}>Clinical Informatics Experience</div>
              <div style={{ color: MUTED, lineHeight: 1.6 }}>
                Real-world hospital systems support, workflow optimization, and documentation improvement.
              </div>
            </div>

            <div
              style={{
                border: `1px solid ${BORDER}`,
                borderRadius: 16,
                padding: 18,
                backgroundColor: "white",
              }}
            >
              <div style={{ fontSize: 28, fontWeight: 800, color: TEAL, marginBottom: 6 }}>Epic-Certified</div>
              <div style={{ fontWeight: 700, marginBottom: 6 }}>Practical EHR Expertise</div>
              <div style={{ color: MUTED, lineHeight: 1.6 }}>
                Support grounded in actual clinical workflow, documentation standards, and informatics practice.
              </div>
            </div>

            <div
              style={{
                border: `1px solid ${BORDER}`,
                borderRadius: 16,
                padding: 18,
                backgroundColor: "white",
              }}
            >
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
        <section style={{ paddingTop: 18, paddingBottom: 8 }}>
          <div
            style={{
              border: `1px solid ${BORDER}`,
              borderRadius: 16,
              padding: 20,
              backgroundColor: "white",
            }}
          >
            <div style={{ marginBottom: 14 }}>
              <div style={{ color: TEAL, fontWeight: 800, fontSize: 13, marginBottom: 6 }}>
                Who We Serve
              </div>
              <h2 style={{ margin: 0, fontSize: 28 }}>Built for clinicians, students, and healthcare teams</h2>
              <p style={{ marginTop: 8, color: MUTED, lineHeight: 1.7, maxWidth: 850 }}>
                NurseBridge Consulting supports healthcare professionals and organizations that want smarter workflows, stronger documentation, and a clearer path into clinical informatics.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 16,
              }}
            >
              <div
                style={{
                  border: `1px solid ${BORDER}`,
                  borderRadius: 14,
                  padding: 18,
                  backgroundColor: SOFT,
                }}
              >
                <h3 style={{ marginTop: 0, marginBottom: 8 }}>Bedside clinicians</h3>
                <p style={{ margin: 0, color: MUTED, lineHeight: 1.6 }}>
                  For nurses and clinicians seeking better documentation workflows, stronger efficiency, and guidance on informatics-aligned practice.
                </p>
              </div>

              <div
                style={{
                  border: `1px solid ${BORDER}`,
                  borderRadius: 14,
                  padding: 18,
                  backgroundColor: SOFT,
                }}
              >
                <h3 style={{ marginTop: 0, marginBottom: 8 }}>MSN/DNP informatics students</h3>
                <p style={{ margin: 0, color: MUTED, lineHeight: 1.6 }}>
                  For graduate students seeking structured nursing informatics preceptorship, real-world mentorship, and meaningful project-based learning.
                </p>
              </div>

              <div
                style={{
                  border: `1px solid ${BORDER}`,
                  borderRadius: 14,
                  padding: 18,
                  backgroundColor: SOFT,
                }}
              >
                <h3 style={{ marginTop: 0, marginBottom: 8 }}>Healthcare organizations</h3>
                <p style={{ margin: 0, color: MUTED, lineHeight: 1.6 }}>
                  For teams looking to improve EHR adoption, optimize workflows, and support documentation practices that align with real clinical work.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />
<SectionDivider />

{/* Paths in Nursing Informatics */}
<section style={{ paddingTop: 18, paddingBottom: 10 }}>
  <div
    style={{
      border: `1px solid ${BORDER}`,
      borderRadius: 16,
      padding: 20,
      backgroundColor: "white",
    }}
  >
    <div style={{ color: TEAL, fontWeight: 800, fontSize: 13, marginBottom: 6 }}>
      Paths in Nursing Informatics
    </div>

    <h2 style={{ margin: "0 0 10px 0" }}>
      Nursing informatics includes more than analyst roles
    </h2>

    <p style={{ color: MUTED, lineHeight: 1.7, marginTop: 0, maxWidth: 900 }}>
      NurseBridge recognizes that nursing informatics spans multiple career pathways, including
      systems analysis, clinical liaison work, training and education, workflow leadership, and
      digital transformation support. Students should understand the breadth of the field as they
      explore where they best fit.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
        gap: 16,
        marginTop: 12,
      }}
    >
      <div
        style={{
          border: `1px solid ${BORDER}`,
          borderRadius: 14,
          padding: 18,
          backgroundColor: SOFT,
        }}
      >
        <h3 style={{ margin: "0 0 8px 0" }}>Systems Analyst</h3>
        <p style={{ margin: 0, color: MUTED, lineHeight: 1.6 }}>
          Support EHR build, testing, optimization, and workflow configuration within clinical systems.
        </p>
      </div>

      <div
        style={{
          border: `1px solid ${BORDER}`,
          borderRadius: 14,
          padding: 18,
          backgroundColor: SOFT,
        }}
      >
        <h3 style={{ margin: "0 0 8px 0" }}>Clinical Liaison</h3>
        <p style={{ margin: 0, color: MUTED, lineHeight: 1.6 }}>
          Bridge clinicians and IT teams by translating workflow needs into practical system solutions.
        </p>
      </div>

      <div
        style={{
          border: `1px solid ${BORDER}`,
          borderRadius: 14,
          padding: 18,
          backgroundColor: SOFT,
        }}
      >
        <h3 style={{ margin: "0 0 8px 0" }}>EHR Trainer / Educator</h3>
        <p style={{ margin: 0, color: MUTED, lineHeight: 1.6 }}>
          Teach users how to document efficiently, adopt workflows, and use digital tools correctly.
        </p>
      </div>

      <div
        style={{
          border: `1px solid ${BORDER}`,
          borderRadius: 14,
          padding: 18,
          backgroundColor: SOFT,
        }}
      >
        <h3 style={{ margin: "0 0 8px 0" }}>Informatics Leadership</h3>
        <p style={{ margin: 0, color: MUTED, lineHeight: 1.6 }}>
          Guide workflow improvement, governance, implementation planning, and broader digital health strategy.
        </p>
      </div>
    </div>
  </div>
</section>
        
        {/* Services */}
      <section id="services" style={{ scrollMarginTop: 90, paddingTop: 26, paddingBottom: 12 }}>
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

    <h2 style={{ margin: "0 0 14px 0" }}>
      How NurseBridge Supports Your Informatics Journey
    </h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: 16,
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
              <div
                key={s.title}
                style={{
                  border: `1px solid ${BORDER}`,
                  padding: 18,
                  borderRadius: 16,
                  backgroundColor: "white",
                }}
              >
                <h3 style={{ margin: "0 0 8px 0" }}>{s.title}</h3>
                <p style={{ margin: "0 0 12px 0", color: MUTED, lineHeight: 1.6 }}>{s.desc}</p>

                {s.cta ? (
                  <Link
                    href="/preceptorship"
                    style={{
                      display: "inline-block",
                      padding: "10px 14px",
                      borderRadius: 12,
                      backgroundColor: TEAL,
                      color: "white",
                      fontWeight: 800,
                      textDecoration: "none",
                      border: `1px solid ${TEAL_DARK}`,
                    }}
                  >
                    Apply for Preceptorship
                  </Link>
                ) : null}
              </div>
            ))}
          </div>
          </div>
            </section>

        <SectionDivider />

        {/* How the Preceptorship Works */}
        <section style={{ paddingTop: 18, paddingBottom: 8 }}>
          <div
            style={{
              border: `1px solid ${BORDER}`,
              borderRadius: 16,
              padding: 20,
              backgroundColor: "white",
            }}
          >
            <div style={{ color: TEAL, fontWeight: 700, fontSize: 13 }}>
              Preceptorship Process
            </div>

            <h2 style={{ margin: "6px 0 10px 0" }}>
              How the Informatics Preceptorship Works
            </h2>

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
                <div
                  key={s.step}
                  style={{
                    border: `1px solid ${BORDER}`,
                    borderRadius: 12,
                    padding: 14,
                  }}
                >
                  <h3 style={{ margin: "0 0 6px 0" }}>{s.step}</h3>
                  <p style={{ margin: 0, color: MUTED, lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 18 }}>
              <Link
                href="/preceptorship"
                style={{
                  display: "inline-block",
                  padding: "12px 16px",
                  borderRadius: 12,
                  backgroundColor: TEAL,
                  color: "white",
                  fontWeight: 700,
                  textDecoration: "none",
                  border: `1px solid ${TEAL_DARK}`,
                }}
              >
                Apply for Preceptorship
              </Link>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Simulation */}
       <section id="simulation" style={{ scrollMarginTop: 90, paddingTop: 18, paddingBottom: 12 }}>
  <div
    style={{
      border: `1px solid ${BORDER}`,
      borderRadius: 16,
      padding: 18,
      backgroundColor: "white",
    }}
  >
    <h2 style={{ margin: "0 0 8px 0" }}>EHR Practice Lab (Simulation)</h2>
    <p style={{ margin: 0, color: MUTED, lineHeight: 1.7 }}>
      A guided simulation environment where students can practice structured documentation workflows,
      case-based chart review, and informatics thinking during preceptorship.
    </p>
    <p style={{ margin: "10px 0 0 0", color: MUTED, fontSize: 13 }}>
      Access is provided to approved students and participants.
    </p>

    <div style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}>
      <Link href="/practice-lab-access" style={primaryButtonStyle}>
  Enter Practice Lab
</Link>

     <Link href="/practice-lab-request" style={secondaryButtonStyle}>
Request Access
</Link>
  </div>
  </div>
</section>

        <SectionDivider />

        {/* About */}
       <section id="about" style={{ scrollMarginTop: 90, paddingTop: 26, paddingBottom: 12 }}>
  <div
    style={{
      border: `1px solid ${BORDER}`,
      borderRadius: 16,
      padding: 18,
      backgroundColor: "white",
    }}
  >
    <h2 style={{ margin: "0 0 10px 0" }}>About the Founder</h2>

    <p style={{ fontSize: 15, lineHeight: 1.8, color: MUTED, margin: 0 }}>
      Dr. Bernadette Amao is a Doctor of Nursing Practice–prepared nurse and Epic-certified Clinical Informatics analyst with more than 13 years of experience supporting hospital systems, clinicians, and digital health initiatives.
    </p>
    <p style={{ fontSize: 15, lineHeight: 1.8, color: MUTED, margin: "10px 0 0 0" }}>
      Her work focuses on bridging the gap between bedside clinicians and healthcare technology while mentoring the next generation of informatics professionals.
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
        <section id="contact" style={{ scrollMarginTop: 90, paddingTop: 26, paddingBottom: 10 }}>
  <div
    style={{
      border: `1px solid ${BORDER}`,
      borderRadius: 16,
      padding: 18,
      backgroundColor: "white",
    }}
  >
    <h2 style={{ margin: "0 0 12px 0" }}>Contact</h2>

    <div
      style={{
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
  </div>
</section>
        <SectionDivider />

{/* Resources & Learning */}
<section style={{ paddingTop: 18, paddingBottom: 10 }}>
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
      <div
        style={{
          border: `1px solid ${BORDER}`,
          borderRadius: 14,
          padding: 18,
          backgroundColor: SOFT,
        }}
      >
        <h3 style={{ margin: "0 0 8px 0" }}>Books</h3>
        <p style={{ margin: 0, color: MUTED, lineHeight: 1.6 }}>
          Practical books on EHR efficiency, informatics, and career growth for clinicians.
        </p>
<a
  href="https://www.amazon.com/author/bernadetteamao"
  target="_blank"
  style={{
    display: "inline-block",
    marginTop: 10,
    fontWeight: 700,
    color: TEAL,
    textDecoration: "none"
  }}
>
  View Books on Amazon →
</a>
      </div>

      <div
        style={{
          border: `1px solid ${BORDER}`,
          borderRadius: 14,
          padding: 18,
          backgroundColor: SOFT,
        }}
      >
        <h3 style={{ margin: "0 0 8px 0" }}>Courses</h3>
        <p style={{ margin: 0, color: MUTED, lineHeight: 1.6 }}>
          Self-paced learning resources designed to help healthcare professionals pivot and grow.
        </p>
<a
  href="https://www.udemy.com/course/become-a-successful-ehr-consultant/?referralCode=FB961F9293A8FCC6FA7E"
  target="_blank"
  style={{
    display: "inline-block",
    marginTop: 10,
    fontWeight: 700,
    color: TEAL,
    textDecoration: "none"
  }}
>
  View Udemy Course →
</a>
      </div>

      <div
        style={{
          border: `1px solid ${BORDER}`,
          borderRadius: 14,
          padding: 18,
          backgroundColor: SOFT,
        }}
      >
        <h3 style={{ margin: "0 0 8px 0" }}>YouTube & Teaching Content</h3>
        <p style={{ margin: 0, color: MUTED, lineHeight: 1.6 }}>
          Educational and reflective content that supports professional development and personal growth.
        </p>
      </div>
    </div>

    <div style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}>
      <a
        href="#contact"
        style={{
          display: "inline-block",
          padding: "10px 14px",
          borderRadius: 12,
          backgroundColor: TEAL,
          color: "white",
          fontWeight: 800,
          textDecoration: "none",
          border: `1px solid ${TEAL_DARK}`,
        }}
      >
        Ask About Resources
      </a>
    </div>
  </div>
</section>
        <footer style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 16, marginTop: 20, color: MUTED, fontSize: 13 }}>
          © 2026 NurseBridge Consulting LLC
        </footer>
      </div>
    </main>
  );
}
