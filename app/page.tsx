import Link from "next/link";

const TEAL = "#0f766e";
const TEAL_DARK = "#115e59";
const BG = "#ffffff";
const TEXT = "#0f172a";
const MUTED = "#475569";
const BORDER = "#e2e8f0";
const SOFT = "#f0fdfa";

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
      {/* Top Nav */}
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
              alt="NurseBridge Consulting LLC"
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
            <a href="#services" style={{ color: TEXT, textDecoration: "none", fontSize: 14 }}>
              Services
            </a>
            <a href="#about" style={{ color: TEXT, textDecoration: "none", fontSize: 14 }}>
              About
            </a>
            <a href="#contact" style={{ color: TEXT, textDecoration: "none", fontSize: 14 }}>
              Contact
            </a>

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
          </nav>
        </div>
      </header>

      {/* Page Container */}
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
    {/* LEFT SIDE */}
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

      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "18px" }}>
        <Link
          href="/preceptorship"
          style={{
            display: "inline-block",
            padding: "12px 16px",
            borderRadius: "12px",
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
            borderRadius: "12px",
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

      <div style={{ marginTop: "14px", color: MUTED, fontSize: "13px" }}>
        Typical requests: documentation efficiency, workflow redesign, build support, training, mentorship, and precepting.
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div
      style={{
        border: `1px solid ${BORDER}`,
        borderRadius: "14px",
        padding: "18px",
        background: "white",
      }}
    >
      <div style={{ fontWeight: 800, marginBottom: 10 }}>
        Why clinicians choose NurseBridge
      </div>

      <ul style={{ paddingLeft: 18, color: MUTED, lineHeight: 1.7, margin: 0 }}>
        <li>DNP-prepared clinical informatics specialist</li>
        <li>Epic-certified with 12+ years experience</li>
        <li>Real hospital workflow optimization</li>
        <li>Mentorship for nurses transitioning into informatics</li>
        <li>Structured MSN/DNP preceptorship guidance</li>
      </ul>
    </div>
  </div>
</section>
        {/* Services */}
        <section
          id="services"
          style={{ scrollMarginTop: 90, paddingTop: 26, paddingBottom: 12 }}
        >
          <h2 style={{ margin: "10px 0 14px 0" }}>Our Services</h2>

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
        </section>

        {/* Simulation */}
        <section style={{ paddingTop: 18, paddingBottom: 12 }}>
          <div
            style={{
              border: `1px solid ${BORDER}`,
              borderRadius: 16,
              padding: 18,
              backgroundColor: "white",
            }}
          >
            <h2 style={{ margin: "0 0 8px 0" }}>Coming soon: EHR Practice Lab (Simulation)</h2>
            <p style={{ margin: 0, color: MUTED, lineHeight: 1.7 }}>
              We’ll build a simulation environment where students can practice structured documentation workflows during
              preceptorship (skills, scenarios, and guided feedback).
            </p>
            <p style={{ margin: "10px 0 0 0", color: MUTED, fontSize: 13 }}>
              Want early access? Email{" "}
              <a
                style={{ color: TEAL, fontWeight: 700 }}
                href="mailto:info@nursebridgeconsulting.com?subject=EHR%20Practice%20Lab%20Interest"
              >
                info@nursebridgeconsulting.com
              </a>{" "}
              with the subject “EHR Practice Lab Interest”.
            </p>
          </div>
        </section>

        {/* About */}
        <section id="about" style={{ scrollMarginTop: 90, paddingTop: 26, paddingBottom: 12 }}>
          <h2 style={{ margin: "10px 0 10px 0" }}>About the Founder</h2>

          <div
            style={{
              border: `1px solid ${BORDER}`,
              borderRadius: 16,
              padding: 18,
              backgroundColor: "white",
            }}
          >
            <p style={{ fontSize: 15, lineHeight: 1.8, color: MUTED, margin: 0 }}>
              Dr. Bernadette Amao is a Doctor of Nursing Practice–prepared nurse and Epic-certified Clinical Informatics
              analyst with more than 12 years of experience supporting hospital systems, clinicians, and digital health initiatives.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: MUTED, margin: "10px 0 0 0" }}>
              Her work focuses on bridging the gap between bedside clinicians and healthcare technology while mentoring the next
              generation of informatics professionals.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" style={{ scrollMarginTop: 90, paddingTop: 26, paddingBottom: 10 }}>
          <h2 style={{ margin: "10px 0 10px 0" }}>Contact</h2>

          <div
            style={{
              border: `1px solid ${BORDER}`,
              borderRadius: 16,
              padding: 18,
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
              <div style={{ fontSize: 16, fontWeight: 800 }}>{`info@nursebridgeconsulting.com`}</div>
            </div>

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
              Preceptorship Inquiry Form
            </Link>
          </div>
        </section>

        <footer style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 16, marginTop: 20, color: MUTED, fontSize: 13 }}>
          © 2026 NurseBridge Consulting LLC
        </footer>
      </div>
    </main>
  );
}


