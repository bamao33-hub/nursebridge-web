"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const TEAL = "#0f766e";
const TEAL_DARK = "#115e59";
const BG = "#ffffff";
const TEXT = "#0f172a";
const MUTED = "#475569";
const BORDER = "#e2e8f0";
const SOFT = "#f0fdfa";

const VALID_CODES = [
  "NURSEBRIDGE2026",
  "PRECEPTORSHIP2026",
  "STUDENTACCESS",
];

export default function PracticeLabAccessPage() {
  const router = useRouter();

  const [code, setCode] = useState("");
  const [studentName, setStudentName] = useState("");
  const [schoolProgram, setSchoolProgram] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedCode = code.trim().toUpperCase();
    const trimmedName = studentName.trim();
    const trimmedSchool = schoolProgram.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();

    if (!trimmedName || !trimmedSchool || !trimmedEmail) {
      setError("Please complete all required fields.");
      return;
    }

    if (!VALID_CODES.includes(trimmedCode)) {
      setError("Invalid access code. Please try again.");
      return;
    }

    localStorage.setItem("nursebridge-lab-access", "granted");
    localStorage.setItem("nursebridge-student-name", trimmedName);
    localStorage.setItem("nursebridge-student-school", trimmedSchool);
    localStorage.setItem("nursebridge-student-email", trimmedEmail);
    localStorage.setItem("nursebridge-student-phone", trimmedPhone);

    router.push("/practice-lab");
  };

  return (
    <main
      style={{
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
        backgroundColor: BG,
        color: TEXT,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 560,
          border: `1px solid ${BORDER}`,
          borderRadius: 18,
          padding: 28,
          backgroundColor: "white",
          boxShadow: "0 8px 24px rgba(15, 23, 42, 0.06)",
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

        <h1 style={{ margin: "0 0 10px 0", fontSize: 30 }}>Enter Practice Lab</h1>

        <p style={{ margin: "0 0 18px 0", color: MUTED, lineHeight: 1.7 }}>
          Access is provided to approved students, preceptorship participants, and authorized testers.
        </p>

        <form onSubmit={handleSubmit}>
          <label style={{ display: "block", marginBottom: 8, fontWeight: 700 }}>
            Student Name <span style={{ color: "#b91c1c" }}>*</span>
          </label>
          <input
            value={studentName}
            onChange={(e) => {
              setStudentName(e.target.value);
              setError("");
            }}
            placeholder="Enter your full name"
            style={inputStyle}
          />

          <label style={{ display: "block", marginBottom: 8, fontWeight: 700 }}>
            School / Program <span style={{ color: "#b91c1c" }}>*</span>
          </label>
          <input
            value={schoolProgram}
            onChange={(e) => {
              setSchoolProgram(e.target.value);
              setError("");
            }}
            placeholder="e.g., Walden MSN Informatics"
            style={inputStyle}
          />

          <label style={{ display: "block", marginBottom: 8, fontWeight: 700 }}>
            Email <span style={{ color: "#b91c1c" }}>*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            placeholder="Enter your email"
            style={inputStyle}
          />

          <label style={{ display: "block", marginBottom: 8, fontWeight: 700 }}>
            Phone Number <span style={{ color: MUTED, fontWeight: 500 }}>(optional)</span>
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              setError("");
            }}
            placeholder="Optional"
            style={inputStyle}
          />

          <label style={{ display: "block", marginBottom: 8, fontWeight: 700 }}>
            Access Code <span style={{ color: "#b91c1c" }}>*</span>
          </label>
          <input
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              setError("");
            }}
            placeholder="Enter your access code"
            style={inputStyle}
          />

          {error ? (
            <div
              style={{
                marginBottom: 12,
                border: "1px solid #fecaca",
                backgroundColor: "#fef2f2",
                color: "#991b1b",
                borderRadius: 12,
                padding: "10px 12px",
                fontSize: 14,
              }}
            >
              {error}
            </div>
          ) : null}

          <button
            type="submit"
            style={{
              display: "inline-block",
              padding: "12px 16px",
              borderRadius: 12,
              backgroundColor: TEAL,
              color: "white",
              fontWeight: 800,
              textDecoration: "none",
              border: `1px solid ${TEAL_DARK}`,
              cursor: "pointer",
              width: "100%",
            }}
          >
            Continue to Practice Lab
          </button>
        </form>

        <div
          style={{
            marginTop: 14,
            fontSize: 13,
            color: MUTED,
            lineHeight: 1.6,
          }}
        >
          Your email may be used to send learning resources and updates related to the NurseBridge Practice Lab.
          We do not sell or share your information.
        </div>

        <div style={{ marginTop: 16, fontSize: 14, color: MUTED }}>
          Need access?{" "}
          <a
            href="mailto:info@nursebridgeconsulting.com?subject=EHR%20Practice%20Lab%20Access"
            style={{ color: TEAL, fontWeight: 700, textDecoration: "none" }}
          >
            Request access by email
          </a>
        </div>

        <div style={{ marginTop: 16 }}>
          <Link href="/" style={{ color: TEAL, fontWeight: 700, textDecoration: "none" }}>
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 12,
  border: `1px solid ${BORDER}`,
  fontSize: 15,
  outline: "none",
  marginBottom: 14,
};
