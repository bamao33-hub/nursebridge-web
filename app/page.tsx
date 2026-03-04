import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "32px",
        maxWidth: "1100px",
        margin: "0 auto",
        color: "white",
        backgroundColor: "black",
      }}
    >
      {/* Top Nav */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
          paddingBottom: "18px",
          borderBottom: "1px solid #222",
          position: "sticky",
          top: 0,
          backgroundColor: "black",
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: "18px", fontWeight: 700 }}>NurseBridge Consulting</span>
          <span style={{ color: "#9ca3af", fontSize: "13px" }}>
            Clinical Informatics • EHR Optimization • Nursing Preceptorship
          </span>
        </div>

        <nav style={{ display: "flex", gap: "14px", alignItems: "center", flexWrap: "wrap" }}>
          <a href="#services" style={{ color: "white", textDecoration: "none", fontSize: "14px" }}>
            Services
          </a>
          <a href="#about" style={{ color: "white", textDecoration: "none", fontSize: "14px" }}>
            About
          </a>
          <a href="#contact" style={{ color: "white", textDecoration: "none", fontSize: "14px" }}>
            Contact
          </a>

          <Link
            href="/preceptorship"
            style={{
              display: "inline-block",
              padding: "10px 14px",
              borderRadius: "10px",
              backgroundColor: "white",
              color: "black",
              fontWeight: 700,
              textDecoration: "none",
              border: "1px solid #444",
            }}
          >
            Apply for Preceptorship
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section style={{ paddingTop: "34px", paddingBottom: "22px" }}>
        <h1 style={{ fontSize: "52px", margin: "0 0 10px 0", lineHeight: 1.05 }}>
          Clinical Informatics support that improves workflow—and builds careers.
        </h1>

        <p style={{ fontSize: "18px", lineHeight: 1.6, color: "#d1d5db", marginTop: 0 }}>
          Founded by <strong>Dr. Bernadette Amao, DNP</strong>, NurseBridge Consulting helps clinicians and
          healthcare organizations improve workflow efficiency, optimize Electronic Health Record systems,
          and mentor nurses transitioning into clinical informatics.
        </p>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "16px" }}>
          <Link
            href="/preceptorship"
            style={{
              display: "inline-block",
              padding: "12px 16px",
              borderRadius: "12px",
              backgroundColor: "white",
              color: "black",
              fontWeight: 800,
              textDecoration: "none",
              border: "1px solid #444",
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
              backgroundColor: "black",
              color: "white",
              fontWeight: 700,
              textDecoration: "none",
              border: "1px solid #444",
            }}
          >
            Explore Services
          </a>
        </div>

        <div style={{ marginTop: "18px", color: "#9ca3af", fontSize: "13px" }}>
          Typical requests: documentation efficiency, workflow redesign, build support, training, mentorship, and precepting.
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{ paddingTop: "26px", paddingBottom: "12px" }}>
        <h2 style={{ marginTop: 0, marginBottom: "14px" }}>Our Services</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "16px",
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
                border: "1px solid #333",
                padding: "18px",
                borderRadius: "14px",
                backgroundColor: "#050505",
              }}
            >
              <h3 style={{ marginTop: 0, marginBottom: "8px" }}>{s.title}</h3>
              <p style={{ marginTop: 0, marginBottom: s.cta ? "14px" : 0, color: "#d1d5db", lineHeight: 1.5 }}>
                {s.desc}
              </p>

              {s.cta ? (
                <Link
                  href="/preceptorship"
                  style={{
                    display: "inline-block",
                    padding: "10px 14px",
                    borderRadius: "12px",
                    backgroundColor: "white",
                    color: "black",
                    fontWeight: 800,
                    textDecoration: "none",
                    border: "1px solid #444",
                  }}
                >
                  Apply for Preceptorship
                </Link>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {/* Coming Soon: EHR Practice Lab */}
      <section style={{ paddingTop: "26px", paddingBottom: "12px" }}>
        <div
          style={{
            border: "1px solid #333",
            borderRadius: "14px",
            padding: "18px",
            backgroundColor: "#050505",
          }}
        >
          <h2 style={{ marginTop: 0, marginBottom: "8px" }}>Coming soon: EHR Practice Lab (Simulation)</h2>
          <p style={{ marginTop: 0, color: "#d1d5db", lineHeight: 1.6 }}>
            We’ll build a simulation environment where students can practice structured documentation workflows during
            preceptorship (skills, scenarios, and guided feedback).
          </p>
          <p style={{ marginTop: 0, color: "#9ca3af", fontSize: "13px" }}>
            Want early access? Email{" "}
            <a style={{ color: "white" }} href="mailto:info@nursebridgeconsulting.com?subject=EHR%20Practice%20Lab%20Interest">
              info@nursebridgeconsulting.com
            </a>{" "}
            with the subject “EHR Practice Lab Interest”.
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ paddingTop: "26px", paddingBottom: "12px" }}>
        <h2 style={{ marginTop: 0, marginBottom: "10px" }}>About the Founder</h2>

        <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#d1d5db", marginTop: 0 }}>
          Dr. Bernadette Amao is a Doctor of Nursing Practice–prepared nurse and Epic-certified Clinical Informatics
          analyst with more than 12 years of experience supporting hospital systems, clinicians, and digital health initiatives.
        </p>

        <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#d1d5db", marginTop: 0 }}>
          Her work focuses on bridging the gap between bedside clinicians and healthcare technology while mentoring the next
          generation of informatics professionals.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" style={{ paddingTop: "26px", paddingBottom: "24px" }}>
        <h2 style={{ marginTop: 0, marginBottom: "10px" }}>Contact</h2>

        <div
          style={{
            border: "1px solid #333",
            borderRadius: "14px",
            padding: "18px",
            backgroundColor: "#050505",
          }}
        >
          <p style={{ margin: 0, fontSize: "16px" }}>
            Email: <strong>info@nursebridgeconsulting.com</strong>
          </p>

          <div style={{ marginTop: "14px" }}>
            <Link
              href="/preceptorship"
              style={{
                display: "inline-block",
                padding: "10px 14px",
                borderRadius: "12px",
                backgroundColor: "white",
                color: "black",
                fontWeight: 800,
                textDecoration: "none",
                border: "1px solid #444",
              }}
            >
              Preceptorship Inquiry Form
            </Link>
          </div>
        </div>
      </section>

      <footer style={{ borderTop: "1px solid #222", paddingTop: "18px", color: "#9ca3af", fontSize: "13px" }}>
        © 2026 NurseBridge Consulting
      </footer>
    </main>
  );
}
