"use client";

import { useState } from "react";
import Link from "next/link";

const TEAL = "#0f766e";
const TEAL_DARK = "#115e59";
const BG = "#ffffff";
const TEXT = "#0f172a";
const MUTED = "#475569";
const BORDER = "#e2e8f0";
const SOFT = "#f0fdfa";

export default function PracticeLabRequestPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    school: "",
    program: "",
    hasPreceptor: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (isSubmitting) return;

  if (!form.fullName || !form.email || !form.school || !form.program) {
    return;
  }

  setIsSubmitting(true);

  try {
    await fetch("https://script.google.com/macros/s/AKfycby0fndW49SRmLryW1Xq89X5iFWNAhrhncgInxGhpNFvQVNGi7nUJhdDlx6eNluyeSUA/exec", {
      method: "POST",
      body: JSON.stringify({
        ...form,
        formType: "Practice Lab Request",
      }),
    });

    setSubmitted(true);
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <main
      style={{
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
        backgroundColor: BG,
        color: TEXT,
        minHeight: "100vh",
        padding: "40px 20px",
      }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <div
          style={{
            border: `1px solid ${BORDER}`,
            borderRadius: 18,
            padding: 28,
            backgroundColor: "white",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "6px 10px",
              borderRadius: 999,
              backgroundColor: SOFT,
              color: TEAL_DARK,
              fontSize: 12,
              fontWeight: 800,
              marginBottom: 14,
              border: `1px solid ${BORDER}`,
            }}
          >
            NurseBridge Practice Lab
          </div>

          <h1 style={{ margin: "0 0 10px 0", fontSize: 30 }}>
            Request Access to the Practice Lab
          </h1>

          <p style={{ margin: "0 0 18px 0", color: MUTED, lineHeight: 1.7 }}>
            Complete this short form to request access to the NurseBridge EHR Practice Lab.
            This helps us support students, preceptorship participants, and future learners more effectively.
          </p>

          {submitted ? (
            <div
              style={{
                border: "1px solid #86efac",
                backgroundColor: "#ecfdf5",
                color: "#166534",
                borderRadius: 12,
                padding: 16,
                lineHeight: 1.7,
              }}
            >
              <div style={{ fontWeight: 800, marginBottom: 6 }}>Request submitted</div>
              <div>
                Thank you. Your request has been recorded. The next step will be connecting this
                form to automatic email or Google Sheets collection.
              </div>

              <div style={{ marginTop: 14 }}>
                <Link
                  href="/"
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
                  Return Home
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label style={labelStyle}>
                Full Name <span style={{ color: "#b91c1c" }}>*</span>
              </label>
              <input
                value={form.fullName}
                onChange={(e) => updateField("fullName", e.target.value)}
                style={inputStyle}
                placeholder="Enter your full name"
              />

              <label style={labelStyle}>
                Email <span style={{ color: "#b91c1c" }}>*</span>
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                style={inputStyle}
                placeholder="Enter your email"
              />

              <label style={labelStyle}>Phone Number <span style={{ color: MUTED, fontWeight: 500 }}>(optional)</span></label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                style={inputStyle}
                placeholder="Optional"
              />

              <label style={labelStyle}>
                School <span style={{ color: "#b91c1c" }}>*</span>
              </label>
              <input
                value={form.school}
                onChange={(e) => updateField("school", e.target.value)}
                style={inputStyle}
                placeholder="Enter your school"
              />

              <label style={labelStyle}>
                Program <span style={{ color: "#b91c1c" }}>*</span>
              </label>
              <select
                value={form.program}
                onChange={(e) => updateField("program", e.target.value)}
                style={inputStyle}
              >
                <option value="">Select program...</option>
                <option value="MSN Informatics">MSN Informatics</option>
                <option value="DNP Informatics">DNP Informatics</option>
                <option value="MSN Leadership">MSN Leadership</option>
                <option value="Other">Other</option>
              </select>

              <label style={labelStyle}>Do you currently have an informatics preceptor?</label>
              <select
                value={form.hasPreceptor}
                onChange={(e) => updateField("hasPreceptor", e.target.value)}
                style={inputStyle}
              >
                <option value="">Select...</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not sure">Not sure</option>
              </select>

              <label style={labelStyle}>Message <span style={{ color: MUTED, fontWeight: 500 }}>(optional)</span></label>
              <textarea
                value={form.message}
                onChange={(e) => updateField("message", e.target.value)}
                style={{ ...inputStyle, minHeight: 120, resize: "vertical" }}
                placeholder="Tell us briefly what kind of access or support you are seeking."
              />

             <button
  type="submit"
  disabled={isSubmitting}
  style={{
    display: "inline-block",
    padding: "12px 16px",
    borderRadius: 12,
    backgroundColor: isSubmitting ? "#94a3b8" : TEAL,
    color: "white",
    fontWeight: 800,
    textDecoration: "none",
    border: `1px solid ${TEAL_DARK}`,
    cursor: isSubmitting ? "not-allowed" : "pointer",
    width: "100%",
  }}
>
  {isSubmitting ? "Submitting..." : "Submit Request"}
</button>
            </form>
          )}

          <div style={{ marginTop: 18 }}>
            <Link href="/" style={{ color: TEAL, fontWeight: 700, textDecoration: "none" }}>
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: 8,
  fontWeight: 700,
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 12,
  border: `1px solid ${BORDER}`,
  fontSize: 15,
  outline: "none",
  marginBottom: 14,
};
