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
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmed = code.trim().toUpperCase();

    if (VALID_CODES.includes(trimmed)) {
      localStorage.setItem("nursebridge-lab-access", "granted");
      router.push("/practice-lab");
      return;
    }

    setError("Invalid access code. Please try again.");
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
          maxWidth: 520,
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

        <h1 style={{ margin: "0 0 10px 0", fontSize: 30 }}>Enter Access Code</h1>

        <p style={{ margin: "0 0 18px 0", color: MUTED, lineHeight: 1.7 }}>
          Access to the EHR Practice Lab is provided to approved students, preceptorship participants,
          and authorized testers.
        </p>

        <form onSubmit={handleSubmit}>
          <label style={{ display: "block", marginBottom: 8, fontWeight: 700 }}>
            Access Code
          </label>

          <input
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              setError("");
            }}
            placeholder="Enter your access code"
            style={{
              width: "100%",
              padding: "12px 14px",
              borderRadius: 12,
              border: `1px solid ${BORDER}`,
              fontSize: 15,
              outline: "none",
              marginBottom: 12,
            }}
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
