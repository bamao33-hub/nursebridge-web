"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";

export default function PreceptorshipPage() {
  // --- theme (matches your teal + light home page) ---
  const COLORS = {
    teal: "#0f766e",
    tealDark: "#0b5f58",
    bg: "#f7faf9",
    card: "#ffffff",
    border: "#dbe7e5",
    text: "#0f172a",
    muted: "#475569",
    soft: "#ecf7f5",
  };

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    school: "",
    program: "",
    track: "",
    startDate: "",
    hours: "",
    timeZone: "",
    preferred: "Email",
    availability: "",
    goals: "",
  });

  const update = (k: keyof typeof form) => (e: any) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  const subject = useMemo(() => {
    const who = form.fullName?.trim() ? ` - ${form.fullName.trim()}` : "";
    return `Preceptorship Inquiry${who}`;
  }, [form.fullName]);

  const body = useMemo(() => {
    return [
      "Hello NurseBridge Consulting,",
      "",
      "I am requesting a Nursing Informatics preceptorship.",
      "",
      `Full name: ${form.fullName}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "N/A"}`,
      "",
      `School: ${form.school}`,
      `Program: ${form.program}`,
      `Track/Focus: ${form.track}`,
      "",
      `Target start date: ${form.startDate || "N/A"}`,
      `Hours needed: ${form.hours}`,
      `Time zone: ${form.timeZone || "N/A"}`,
      `Preferred contact: ${form.preferred}`,
      "",
      `Availability: ${form.availability}`,
      "",
      "Goals / what I want from the preceptorship:",
      form.goals,
      "",
      "Thank you,",
      form.fullName || "",
    ].join("\n");
  }, [form]);

  const mailtoHref = useMemo(() => {
    const to = "info@nursebridgeconsulting.com";
    return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [subject, body]);

  const canSubmit =
    form.fullName.trim() &&
    form.email.trim() &&
    form.school.trim() &&
    form.program.trim() &&
    form.track.trim() &&
    form.hours.trim() &&
    form.availability.trim() &&
    form.goals.trim();

  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: COLORS.bg,
        color: COLORS.text,
        minHeight: "100vh",
      }}
    >
      {/* Top nav */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          backgroundColor: "rgba(247, 250, 249, 0.92)",
          backdropFilter: "blur(8px)",
          borderBottom: `1px solid ${COLORS.border}`,
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "14px 18px",
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
              color: COLORS.text,
            }}
          >
            <Image
              src="/logo.jpeg"
              alt="NurseBridge Consulting LLC"
              width={190}
              height={44}
              style={{
                height: 44,
                width: "auto",
                borderRadius: 8,
                background: "white",
              }}
              priority
            />
            <div style={{ lineHeight: 1.1 }}>
              <div style={{ fontWeight: 800 }}>NurseBridge Consulting LLC</div>
              <div style={{ fontSize: 12, color: COLORS.muted }}>
                Clinical Informatics • EHR Optimization • Nursing Preceptorship
              </div>
            </div>
          </Link>

          <nav style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
            <Link
              href="/#services"
              style={{ textDecoration: "none", color: COLORS.muted, fontSize: 14, fontWeight: 700 }}
            >
              Services
            </Link>
            <Link
              href="/#about"
              style={{ textDecoration: "none", color: COLORS.muted, fontSize: 14, fontWeight: 700 }}
            >
              About
            </Link>
            <Link
              href="/#contact"
              style={{ textDecoration: "none", color: COLORS.muted, fontSize: 14, fontWeight: 700 }}
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Page body */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "26px 18px 40px" }}>
        {/* Hero */}
        <section
          style={{
            border: `1px solid ${COLORS.border}`,
            borderRadius: 18,
            background: COLORS.soft,
            padding: "22px 22px 18px",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              gap: 8,
              alignItems: "center",
              padding: "6px 10px",
              borderRadius: 999,
              border: `1px solid ${COLORS.border}`,
              backgroundColor: "#ffffff",
              color: COLORS.teal,
              fontWeight: 800,
              fontSize: 12,
              marginBottom: 12,
            }}
          >
            Preceptorship • MSN/DNP Nursing Informatics
          </div>

          <h1 style={{ fontSize: 40, margin: "0 0 10px 0", lineHeight: 1.05 }}>
            Preceptorship Inquiry
          </h1>

          <p style={{ margin: 0, color: COLORS.muted, lineHeight: 1.6, maxWidth: 900 }}>
            Complete this short intake form. When you submit, it will open a pre-filled email to{" "}
            <strong>info@nursebridgeconsulting.com</strong> so we can respond with next steps.
          </p>
        </section>

        {/* Form card */}
        <section
          style={{
            marginTop: 18,
            border: `1px solid ${COLORS.border}`,
            borderRadius: 18,
            background: COLORS.card,
            padding: 22,
          }}
        >
          <div style={{ fontWeight: 900, marginBottom: 6, color: COLORS.teal }}>Contact</div>
          <div style={{ color: COLORS.muted, marginBottom: 18 }}>
            Email: <strong>info@nursebridgeconsulting.com</strong>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 14,
            }}
          >
            <Field label="Full name *">
              <input
                value={form.fullName}
                onChange={update("fullName")}
                placeholder="e.g., Jane Doe"
                style={inputStyle(COLORS)}
              />
            </Field>

            <Field label="Email *">
              <input
                value={form.email}
                onChange={update("email")}
                placeholder="e.g., janedoe@email.com"
                style={inputStyle(COLORS)}
              />
            </Field>

            <Field label="Phone">
              <input
                value={form.phone}
                onChange={update("phone")}
                placeholder="e.g., (555) 123-4567"
                style={inputStyle(COLORS)}
              />
              <div style={{ fontSize: 12, color: COLORS.muted, marginTop: 6 }}>
                Optional, but helpful for scheduling.
              </div>
            </Field>

            <Field label="School *">
              <input
                value={form.school}
                onChange={update("school")}
                placeholder="e.g., Walden University"
                style={inputStyle(COLORS)}
              />
            </Field>

            <Field label="Program *">
              <select value={form.program} onChange={update("program")} style={inputStyle(COLORS)}>
                <option value="">Select…</option>
                <option value="MSN">MSN</option>
                <option value="DNP">DNP</option>
                <option value="Other">Other</option>
              </select>
            </Field>

            <Field label="Track/Focus *">
              <input
                value={form.track}
                onChange={update("track")}
                placeholder="e.g., Nursing Informatics"
                style={inputStyle(COLORS)}
              />
            </Field>

            <Field label="Target start date">
              <input value={form.startDate} onChange={update("startDate")} placeholder="mm/dd/yyyy" style={inputStyle(COLORS)} />
            </Field>

            <Field label="Hours needed *">
              <input
                value={form.hours}
                onChange={update("hours")}
                placeholder="e.g., 120 hours"
                style={inputStyle(COLORS)}
              />
            </Field>

            <Field label="Time zone">
              <input
                value={form.timeZone}
                onChange={update("timeZone")}
                placeholder="e.g., Central (US)"
                style={inputStyle(COLORS)}
              />
            </Field>

            <Field label="Preferred contact">
              <select value={form.preferred} onChange={update("preferred")} style={inputStyle(COLORS)}>
                <option>Email</option>
                <option>Phone</option>
                <option>Either</option>
              </select>
            </Field>
          </div>

          <div style={{ marginTop: 14 }}>
            <Field label="Availability *">
              <input
                value={form.availability}
                onChange={update("availability")}
                placeholder="e.g., Weeknights after 6pm; Saturdays 10am–2pm"
                style={inputStyle(COLORS)}
              />
            </Field>
          </div>

          <div style={{ marginTop: 14 }}>
            <Field label="Goals / what you want from the preceptorship *">
              <textarea
                value={form.goals}
                onChange={update("goals")}
                placeholder="Briefly describe your objectives, course requirements, and what you hope to learn (e.g., Epic workflow optimization, documentation standards, project work, career transition)."
                style={{ ...inputStyle(COLORS), minHeight: 130, resize: "vertical" }}
              />
            </Field>
          </div>

          {/* Actions */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }}>
            <a
              href={mailtoHref}
              style={{
                display: "inline-block",
                padding: "12px 16px",
                borderRadius: 12,
                backgroundColor: canSubmit ? COLORS.teal : "#94a3b8",
                color: "white",
                fontWeight: 900,
                textDecoration: "none",
                border: `1px solid ${COLORS.border}`,
                pointerEvents: canSubmit ? "auto" : "none",
              }}
            >
              Email NurseBridge
            </a>

            <a
              href={mailtoHref}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                padding: "12px 16px",
                borderRadius: 12,
                backgroundColor: "white",
                color: COLORS.teal,
                fontWeight: 900,
                textDecoration: "none",
                border: `1px solid ${COLORS.border}`,
              }}
            >
              Open Email App
            </a>

            {!canSubmit ? (
              <div style={{ alignSelf: "center", color: COLORS.muted, fontSize: 13 }}>
                Please complete the required fields (*) to enable the email button.
              </div>
            ) : null}
          </div>
        </section>

        <footer style={{ marginTop: 18, color: COLORS.muted, fontSize: 13 }}>
          © 2026 NurseBridge Consulting LLC
        </footer>
      </div>
    </main>
  );
}

function Field({ label, children }: { label: string; children: any }) {
  return (
    <label style={{ display: "block" }}>
      <div style={{ fontSize: 13, fontWeight: 800, marginBottom: 8 }}>{label}</div>
      {children}
    </label>
  );
}

function inputStyle(COLORS: any) {
  return {
    width: "100%",
    padding: "12px 12px",
    borderRadius: 12,
    border: `1px solid ${COLORS.border}`,
    backgroundColor: "#ffffff",
    color: COLORS.text,
    outline: "none",
    fontSize: 14,
  } as const;
}
