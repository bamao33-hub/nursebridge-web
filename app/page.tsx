import Link from "next/link";

export default function Home() {
  const teal = "#0f766e"; // teal-700-ish
  const tealSoft = "#ccfbf1"; // teal-100-ish
  const ink = "#0f172a"; // slate-900
  const muted = "#475569"; // slate-600
  const border = "#e5e7eb"; // gray-200
  const bg = "#ffffff";
  const bgSoft = "#f8fafc"; // slate-50

  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "28px",
        maxWidth: "1120px",
        margin: "0 auto",
        color: ink,
        backgroundColor: bg,
      }}
    >
      {/* Top Nav (sticky) */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          backgroundColor: bg,
          borderBottom: `1px solid ${border}`,
          padding: "14px 0",
          marginBottom: "18px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "16px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {/* Brand */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {/* Logo (place file in /public/logo.jpg) */}
            <img
              src="/logo.jpg"
              alt="NurseBridge Consulting LLC"
              style={{
                height: "42px",
                width: "auto",
                display: "block",
              }}
            />

            <div style={{ lineHeight: 1.2 }}>
              <div style={{ fontSize: "16px", fontWeight: 800 }}>NurseBridge Consulting LLC</div>
              <div style={{ fontSize: "13px", color: muted }}>
                Clinical Informatics • EHR Optimization • Nursing Preceptorship
              </div>
            </div>
          </div>

          {/* Nav */}
          <nav style={{ display: "flex", gap: "14px", alignItems: "center", flexWrap: "wrap" }}>
            <a href="#services" style={{ color: ink, textDecoration: "none", fontSize: "14px", fontWeight: 600 }}>
              Services
            </a>
            <a href="#about" style={{ color: ink, textDecoration: "none", fontSize: "14px", fontWeight: 600 }}>
              About
            </a>
            <a href="#contact" style={{ color: ink, textDecoration: "none", fontSize: "14px", fontWeight: 600 }}>
              Contact
            </a>

            <Link
              href="/preceptorship"
              style={{
                display: "inline-block",
                padding: "10px 14px",
                borderRadius: "12px",
                backgroundColor: teal,
                color: "white",
                fontWeight: 800,
                textDecoration: "none",
                border: `1px solid ${teal}`,
              }}
            >
              Apply for Preceptorship
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        style={{
          border: `1px solid ${border}`,
          borderRadius: "18px",
          padding: "26px",
          background: `linear-gradient(135deg, ${bgSoft} 0%, ${bg} 55%, ${tealSoft} 140%)`,
        }}
      >
        <div style={{ maxWidth: "820px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 10px",
              borderRadius: "999px",
              backgroundColor: tealSoft,
              color: teal,
              border: `1px solid ${border}`,
              fontSize: "13px",
              fontWeight: 700,
              marginBottom: "12px",
            }}
          >
            NurseBridge Consulting • Texas-based • Remote-friendly
          </div>

          <h1 style={{ fontSize: "46px", margin: "0 0 10px 0", lineHeight: 1.08 }}>
            Clinical Informatics support that improves workflow—and builds careers.
          </h1>

          <p style={{ fontSize: "17px", lineHeight: 1.65, color: muted, margin: 0 }}>
            Founded by <strong>Dr. Bernadette Amao, DNP</strong>, NurseBridge Consulting helps clinicians and healthcare
            organizations improve workflow efficiency, optimize Electronic Health Record systems, and mentor nurses
            transitioning into clinical informatics.
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "16px" }}>
            <Link
              href="/preceptorship"
              style={{
                display: "inline-block",
                padding: "12px 16px",
                borderRadius: "14px",
                backgroundColor: teal,
                color: "white",
                fontWeight: 900,
                textDecoration: "none",
                border: `1px solid ${teal}`,
              }}
            >
              Start Preceptorship Inquiry
            </Link>

            <a
              href="#services"
              style={{
                display: "inline-block",
                padding: "12px 16px",
                borderRadius: "14px",
                backgroundColor: "white",
                color: ink,
                fontWeight: 800,
                textDecoration: "none",
                border: `1px solid ${border}`,
              }}
            >
              Explore Services
            </a>
          </div>

          <div style={{ marginTop: "12px", color: muted, fontSize: "13px" }}>
            Typical requests: documentation efficiency, workflow redesign, build support, training, mentorship, and
            precepting.
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{ scrollMarginTop: "90px", paddingTop: "26px", paddingBottom: "10px" }}>
        <h2 style={{ marginTop: 0, marginBottom: "14px", fontSize: "24px" }}>Our Services</h2>

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
                border: `1px solid ${border}`,
                padding: "18px",
                borderRadius: "16px",
                backgroundColor: "white",
                boxShadow: "0 2px 10px rgba(15, 23, 42, 0.04)",
              }}
            >
              <h3 style={{ marginTop: 0, marginBottom: "8px", fontSize: "18px" }}>{s.title}</h3>
              <p style={{ marginTop: 0, marginBottom: s.cta ? "14px" : 0, color: muted, lineHeight: 1.55 }}>
                {s.desc}
              </p>

              {s.cta ? (
                <Link
                  href="/preceptorship"
                  style={{
                    display: "inline-block",
                    padding: "10px 14px",
                    borderRadius: "14px",
                    backgroundColor: teal,
                    color: "white",
                    fontWeight: 900,
                    textDecoration: "none",
                    border: `1px solid ${teal}`,
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
      <section style={{ paddingTop: "12px", paddingBottom: "10px" }}>
        <div
          style={{
            border: `1px solid ${border}`,
            borderRadius: "18px",
            padding: "18px",
            backgroundColor: bgSoft,
          }}
        >
          <h2 style={{ marginTop: 0, marginBottom: "8px", fontSize: "22px" }}>
            Coming soon: EHR Practice Lab (Simulation)
          </h2>
          <p style={{ marginTop: 0, color: muted, lineHeight: 1.65 }}>
            We’ll build a simulation environment where students can practice structured documentation workflows during
            preceptorship (skills, scenarios, and guided feedback).
          </p>
          <p style={{ marginTop: 0, color: muted, fontSize: "13px" }}>
            Want early access? Email{" "}
            <a
              style={{ color: teal, fontWeight: 800, textDecoration: "none" }}
              href="mailto:info@nursebridgeconsulting.com?subject=EHR%20Practice%20Lab%20Interest"
            >
              info@nursebridgeconsulting.com
            </a>{" "}
            with the subject “EHR Practice Lab Interest”.
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ scrollMarginTop: "90px", paddingTop: "26px", paddingBottom: "10px" }}>
        <h2 style={{ marginTop: 0, marginBottom: "10px", fontSize: "24px" }}>About the Founder</h2>

        <div
          style={{
            border: `1px solid ${border}`,
            borderRadius: "18px",
            padding: "18px",
            backgroundColor: "white",
            boxShadow: "0 2px 10px rgba(15, 23, 42, 0.04)",
          }}
        >
          <p style={{ fontSize: "16px", lineHeight: 1.75, color: muted, marginTop: 0 }}>
            Dr. Bernadette Amao is a Doctor of Nursing Practice–prepared nurse and Epic-certified Clinical Informatics
            analyst with more than 12 years of experience supporting hospital systems, clinicians, and digital health
            initiatives.
          </p>

          <p style={{ fontSize: "16px", lineHeight: 1.75, color: muted, marginTop: 0, marginBottom: 0 }}>
            Her work focuses on bridging the gap between bedside clinicians and healthcare technology while mentoring the
            next generation of informatics professionals.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ scrollMarginTop: "90px", paddingTop: "26px", paddingBottom: "22px" }}>
        <h2 style={{ marginTop: 0, marginBottom: "10px", fontSize: "24px" }}>Contact</h2>

        <div
          style={{
            border: `1px solid ${border}`,
            borderRadius: "18px",
            padding: "18px",
            backgroundColor: "white",
            boxShadow: "0 2px 10px rgba(15, 23, 42, 0.04)",
          }}
        >
          <p style={{ margin: 0, fontSize: "16px", color: muted }}>
            Email:{" "}
            <strong style={{ color: ink }}>
              <a style={{ color: ink, textDecoration: "none" }} href="mailto:info@nursebridgeconsulting.com">
                info@nursebridgeconsulting.com
              </a>
            </strong>
          </p>

          <div style={{ marginTop: "14px" }}>
            <Link
              href="/preceptorship"
              style={{
                display: "inline-block",
                padding: "10px 14px",
                borderRadius: "14px",
                backgroundColor: teal,
                color: "white",
                fontWeight: 900,
                textDecoration: "none",
                border: `1px solid ${teal}`,
              }}
            >
              Preceptorship Inquiry Form
            </Link>
          </div>
        </div>
      </section>

      <footer style={{ borderTop: `1px solid ${border}`, paddingTop: "16px", color: muted, fontSize: "13px" }}>
        © 2026 NurseBridge Consulting LLC
      </footer>
    </main>
  );
}
