"use client";

import React from "react";
import { CASES, CaseKey } from "../cases";
import { COLORS } from "../../ChartShell"; // optional if you export COLORS

export default function SummaryTab({ caseKey }: { caseKey: CaseKey }) {
  const currentCase = CASES[caseKey];

  return (
    <div
      style={{
        background: "white",
        border: "1px solid #dbe7e5",
        borderRadius: 12,
        padding: 20,
        display: "flex",
        flexDirection: "column",
        gap: 24,
      }}
    >
      {/* ---------------- CASE HEADER ---------------- */}
      <section>
        <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 6 }}>
          {currentCase.label}
        </div>
        <div style={{ color: "#475569", lineHeight: 1.5 }}>
          {currentCase.scenario}
        </div>
      </section>

      {/* ---------------- SUMMARY CARDS ---------------- */}
      <section>
        <div
          style={{
            fontSize: 18,
            fontWeight: 700,
            marginBottom: 12,
          }}
        >
          Patient Snapshot
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 12,
          }}
        >
          {currentCase.summaryCards.map((card) => (
            <div
              key={card.label}
              style={{
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: 10,
                padding: "12px 14px",
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  color: "#475569",
                  marginBottom: 4,
                  fontWeight: 600,
                }}
              >
                {card.label}
              </div>
              <div style={{ fontSize: 16, fontWeight: 700 }}>
                {card.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- CASE SUMMARY ---------------- */}
      <section>
        <div
          style={{
            fontSize: 18,
            fontWeight: 700,
            marginBottom: 8,
          }}
        >
          Clinical Summary
        </div>
        <div style={{ color: "#475569", lineHeight: 1.6 }}>
          {currentCase.summary}
        </div>
      </section>

      {/* ---------------- LEARNING GOALS ---------------- */}
      <section>
        <div
          style={{
            fontSize: 18,
            fontWeight: 700,
            marginBottom: 8,
          }}
        >
          Learning Goals
        </div>

        <ul style={{ paddingLeft: 20, color: "#475569", lineHeight: 1.6 }}>
          {currentCase.learningGoals.map((goal, idx) => (
            <li key={idx}>{goal}</li>
          ))}
        </ul>
      </section>

      {/* ---------------- PROMPT ---------------- */}
      <section
        style={{
          background: "#f1f5f9",
          border: "1px solid #dbe7e5",
          borderRadius: 10,
          padding: 16,
        }}
      >
        <div
          style={{
            fontSize: 16,
            fontWeight: 700,
            marginBottom: 6,
          }}
        >
          Reflection Prompt
        </div>
        <div style={{ color: "#475569", lineHeight: 1.6 }}>
          {currentCase.summaryPrompt}
        </div>
      </section>
    </div>
  );
}

