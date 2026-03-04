"use client";

import { useState, type FormEvent } from "react";

export default function PreceptorshipPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const fullName = String(data.get("fullName") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const school = String(data.get("school") || "");
    const program = String(data.get("program") || "");
    const track = String(data.get("track") || "");
    const startDate = String(data.get("startDate") || "");
    const hours = String(data.get("hours") || "");
    const availability = String(data.get("availability") || "");
    const goals = String(data.get("goals") || "");
    const timezone = String(data.get("timezone") || "");
    const preferredContact = String(data.get("preferredContact") || "");

    const subject = encodeURIComponent(`Preceptorship Inquiry — ${fullName}`);
    const body = encodeURIComponent(
      [
        "Preceptorship Inquiry",
        "",
        `Name: ${fullName}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `School: ${school}`,
        `Program: ${program}`,
        `Track/Focus: ${track}`,
        `Target start date: ${startDate}`,
        `Hours needed: ${hours}`,
        `Availability: ${availability}`,
        `Time zone: ${timezone}`,
        `Preferred contact method: ${preferredContact}`,
        "",
        "Goals / What you need help with:",
        goals,
      ].join("\n")
    );

    window.location.href = `mailto:info@nursebridgeconsulting.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    form.reset();
  }

  const page = {
    maxWidth: 980,
    margin: "0 auto",
    padding: "56px 20px 72px",
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
    color: "white",
  } as const;

  const muted = { color: "#9ca3af" } as const;

  const card = {
    border: "1px solid #2a2a2a",
    borderRadius: 16,
    background: "rgba(0,0,0,0.35)",
    padding: 20,
  } as const;

  const label = { display: "block", fontSize: 14, marginBottom: 6 } as const;

  const input = {
    width: "100%",
    padding: "12px 12px",
    borderRadius: 12,
    border: "1px solid #2a2a2a",
    background: "black",
    color: "white",
    outline: "none",
  } as const;

  const textarea = { ...input, minHeight: 110, resize: "vertical" } as const;

  const button = {
    display: "inline-block",
    padding: "12px 16px",
    borderRadius: 12,
    border: "1px solid #2a2a2a",
    background: "white",
    color: "black",
    fontWeight: 700,
    cursor: "pointer",
  } as const;

  const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 14,
    marginTop: 14,
  } as const;

  const helper = { fontSize: 13, color: "#9ca3af", marginTop: 6 } as const;

  return (
    <main style={page}>
      <h1 style={{ fontSize: 44, lineHeight: 1.1, margin: 0 }}>
        Preceptorship Inquiry
      </h1>
      <p style={{ ...muted, marginTop: 10, maxWidth: 820 }}>
        For MSN/DNP Nursing Informatics students seeking a structured preceptorship experience.
        Complete the form below and it will open an email pre-filled to{" "}
        <strong>info@nursebridgeconsulting.com</strong>.
      </p>

      <div style={{ ...card, marginTop: 22 }}>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16 }}>Contact</div>
            <div style={muted}>Email: info@nursebridgeconsulting.com</div>
          </div>
          {submitted ? (
            <div
              style={{
                marginLeft: "auto",
                padding: "10px 12px",
                borderRadius: 12,
                border: "1px solid #2a2a2a",
                background: "rgba(34,197,94,0.12)",
                color: "white",
                fontSize: 13,
              }}
            >
              Draft email opened. If it didn’t open, scroll down and click “Email NurseBridge”.
            </div>
          ) : null}
        </div>

        <form onSubmit={handleSubmit} style={{ marginTop: 18 }}>
          <div style={grid}>
            <div>
              <label style={label} htmlFor="fullName">
                Full name <span style={{ color: "#fca5a5" }}>*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                required
                style={input}
                placeholder="e.g., Jane Doe"
              />
            </div>

            <div>
              <label style={label} htmlFor="email">
                Email <span style={{ color: "#fca5a5" }}>*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                style={input}
                placeholder="e.g., janedoe@email.com"
              />
            </div>

            <div>
              <label style={label} htmlFor="phone">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                style={input}
                placeholder="e.g., (555) 123-4567"
              />
              <div style={helper}>Optional, but helpful for scheduling.</div>
            </div>

            <div>
              <label style={label} htmlFor="school">
                School <span style={{ color: "#fca5a5" }}>*</span>
              </label>
              <input
                id="school"
                name="school"
                required
                style={input}
                placeholder="e.g., Walden University"
              />
            </div>

            <div>
              <label style={label} htmlFor="program">
                Program <span style={{ color: "#fca5a5" }}>*</span>
              </label>
              <select id="program" name="program" required style={input} defaultValue="">
                <option value="" disabled>
                  Select…
                </option>
                <option value="MSN">MSN</option>
                <option value="DNP">DNP</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label style={label} htmlFor="track">
                Track/Focus <span style={{ color: "#fca5a5" }}>*</span>
              </label>
              <input
                id="track"
                name="track"
                required
                style={input}
                placeholder="e.g., Nursing Informatics"
              />
            </div>

            <div>
              <label style={label} htmlFor="startDate">
                Target start date
              </label>
              <input id="startDate" name="startDate" type="date" style={input} />
            </div>

            <div>
              <label style={label} htmlFor="hours">
                Hours needed <span style={{ color: "#fca5a5" }}>*</span>
              </label>
              <input
                id="hours"
                name="hours"
                required
                style={input}
                placeholder="e.g., 120 hours"
              />
            </div>

            <div>
              <label style={label} htmlFor="timezone">
                Time zone
              </label>
              <input
                id="timezone"
                name="timezone"
                style={input}
                placeholder="e.g., Central (US)"
              />
            </div>

            <div>
              <label style={label} htmlFor="preferredContact">
                Preferred contact
              </label>
              <select
                id="preferredContact"
                name="preferredContact"
                style={input}
                defaultValue="Email"
              >
                <option value="Email">Email</option>
                <option value="Phone">Phone</option>
                <option value="Text">Text</option>
              </select>
            </div>
          </div>

          <div style={{ marginTop: 14 }}>
            <label style={label} htmlFor="availability">
              Availability <span style={{ color: "#fca5a5" }}>*</span>
            </label>
            <input
              id="availability"
              name="availability"
              required
              style={input}
              placeholder="e.g., Weeknights after 6pm; Saturdays 10am–2pm"
            />
          </div>

          <div style={{ marginTop: 14 }}>
            <label style={label} htmlFor="goals">
              Goals / what you want from the preceptorship <span style={{ color: "#fca5a5" }}>*</span>
            </label>
            <textarea
              id="goals"
              name="goals"
              required
              style={textarea}
              placeholder="Briefly describe your objectives, course requirements, and what you hope to learn (e.g., Epic workflow optimization, documentation standards, project work, career transition)."
            />
          </div>

          <div style={{ marginTop: 16, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button type="submit" style={button}>
              Email NurseBridge
            </button>
            <a
              href="mailto:info@nursebridgeconsulting.com"
              style={{
                ...button,
                background: "transparent",
                color: "white",
              }}
            >
              Open Email App
            </a>
          </div>

          <div style={{ ...helper, marginTop: 10 }}>
            Note: This form does not store your information on the website yet—it simply drafts an email for you to send.
          </div>
        </form>
      </div>
    </main>
  );
}
