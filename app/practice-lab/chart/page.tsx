"use client";

import Link from "next/link";
import { useState } from "react";

export default function ChartSimulation() {
  const [activeTab, setActiveTab] = useState("Summary");

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

  const tabs = ["Summary", "Notes", "Labs", "Orders"];

  return (
    <main
      style={{
        fontFamily: 'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial',
        backgroundColor: COLORS.bg,
        minHeight: "100vh",
        color: COLORS.text,
      }}
    >
      <div
        style={{
          borderBottom: `1px solid ${COLORS.border}`,
          background: "#ffffff",
          padding: "10px 20px",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontWeight: 800 }}>NurseBridge Practice Lab</div>

          <Link
            href="/practice-lab"
            style={{ textDecoration: "none", color: COLORS.teal, fontWeight: 700 }}
          >
            Back to Lab
          </Link>
        </div>
      </div>

      <div
        style={{
          borderBottom: `1px solid ${COLORS.border}`,
          background: COLORS.soft,
          padding: "14px 20px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontWeight: 800, fontSize: 18 }}>Maria Gonzalez</div>
          <div style={{ fontSize: 13, color: COLORS.muted }}>
            DOB: 04/12/1972 • MRN: 847221 • Admit Dx: Pneumonia • Room: 412B
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "220px 1fr",
          gap: 16,
          padding: 20,
        }}
      >
        <div
          style={{
            border: `1px solid ${COLORS.border}`,
            borderRadius: 12,
            background: "#fff",
            padding: 10,
            alignSelf: "start",
          }}
        >
          <div style={{ fontWeight: 700, marginBottom: 8 }}>Chart Navigation</div>

          <div style={{ display: "grid", gap: 6, fontSize: 14 }}>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  textAlign: "left",
                  padding: "8px 10px",
                  borderRadius: 8,
                  border: `1px solid ${activeTab === tab ? COLORS.teal : "transparent"}`,
                  background: activeTab === tab ? COLORS.soft : "transparent",
                  color: activeTab === tab ? COLORS.tealDark : COLORS.text,
                  fontWeight: activeTab === tab ? 700 : 500,
                  cursor: "pointer",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div
          style={{
            border: `1px solid ${COLORS.border}`,
            borderRadius: 12,
            background: "#fff",
            padding: 18,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              marginBottom: 18,
              borderBottom: `1px solid ${COLORS.border}`,
              paddingBottom: 12,
            }}
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: "8px 12px",
                  borderRadius: 10,
                  border: `1px solid ${activeTab === tab ? COLORS.teal : COLORS.border}`,
                  background: activeTab === tab ? COLORS.teal : "#fff",
                  color: activeTab === tab ? "#fff" : COLORS.text,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === "Summary" && (
            <div>
              <h2 style={{ marginTop: 0 }}>Patient Summary</h2>
              <p style={{ color: COLORS.muted, lineHeight: 1.7 }}>
                Patient admitted with community-acquired pneumonia. Oxygen saturation was
                initially 88% on room air. Currently receiving IV antibiotics and oxygen therapy.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: 14,
                  marginTop: 16,
                }}
              >
                <InfoCard label="Primary Nurse" value="J. Thompson, RN" colors={COLORS} />
                <InfoCard label="Attending" value="R. Patel, MD" colors={COLORS} />
                <InfoCard label="Allergies" value="NKDA" colors={COLORS} />
                <InfoCard label="Isolation" value="None" colors={COLORS} />
              </div>

              <ExerciseBox colors={COLORS}>
                Review the patient summary. What key documentation fields would you expect to
                see completed for oxygen therapy, respiratory assessment, and patient education?
              </ExerciseBox>
            </div>
          )}

          {activeTab === "Notes" && (
            <div>
              <h2 style={{ marginTop: 0 }}>Clinical Notes</h2>

              <div
                style={{
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: 10,
                  padding: 14,
                  background: COLORS.soft,
                }}
              >
                <div style={{ fontWeight: 700, marginBottom: 6 }}>Nursing Progress Note</div>
                <div style={{ color: COLORS.muted, lineHeight: 1.7 }}>
                  Patient alert and oriented x3. Mild shortness of breath with exertion.
                  Receiving 2L oxygen via nasal cannula. Tolerating antibiotics without adverse
                  reaction. Encouraged cough, deep breathing, and incentive spirometer use.
                </div>
              </div>

              <ExerciseBox colors={COLORS}>
                Identify one note improvement that would strengthen clarity, compliance, or data
                quality.
              </ExerciseBox>
            </div>
          )}

          {activeTab === "Labs" && (
            <div>
              <h2 style={{ marginTop: 0 }}>Recent Labs</h2>

              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: 14,
                }}
              >
                <thead>
                  <tr style={{ background: COLORS.soft }}>
                    <th style={thStyle}>Lab</th>
                    <th style={thStyle}>Result</th>
                    <th style={thStyle}>Reference</th>
                    <th style={thStyle}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={tdStyle}>WBC</td>
                    <td style={tdStyle}>14.2</td>
                    <td style={tdStyle}>4.0–11.0</td>
                    <td style={tdStyle}>High</td>
                  </tr>
                  <tr>
                    <td style={tdStyle}>Hgb</td>
                    <td style={tdStyle}>11.8</td>
                    <td style={tdStyle}>12.0–16.0</td>
                    <td style={tdStyle}>Low</td>
                  </tr>
                  <tr>
                    <td style={tdStyle}>Sodium</td>
                    <td style={tdStyle}>136</td>
                    <td style={tdStyle}>135–145</td>
                    <td style={tdStyle}>Normal</td>
                  </tr>
                  <tr>
                    <td style={tdStyle}>Lactate</td>
                    <td style={tdStyle}>2.1</td>
                    <td style={tdStyle}>0.5–2.0</td>
                    <td style={tdStyle}>Slightly High</td>
                  </tr>
                </tbody>
              </table>

              <ExerciseBox colors={COLORS}>
                Which lab values may be clinically important for pneumonia monitoring, and how
                could they influence workflow or escalation?
              </ExerciseBox>
            </div>
          )}

          {activeTab === "Orders" && (
            <div>
              <h2 style={{ marginTop: 0 }}>Active Orders</h2>

              <div style={{ display: "grid", gap: 10 }}>
                <OrderRow text="Oxygen via nasal cannula at 2L/min" colors={COLORS} />
                <OrderRow text="Ceftriaxone 1g IV every 24 hours" colors={COLORS} />
                <OrderRow text="Azithromycin 500mg PO daily" colors={COLORS} />
                <OrderRow text="Incentive spirometry every 2 hours while awake" colors={COLORS} />
              </div>

              <ExerciseBox colors={COLORS}>
                Which orders require nursing follow-through documentation, and where would you
                expect that documentation to appear?
              </ExerciseBox>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

function InfoCard({
  label,
  value,
  colors,
}: {
  label: string;
  value: string;
  colors: { border: string; soft: string; muted: string; text: string };
}) {
  return (
    <div
      style={{
        border: `1px solid ${colors.border}`,
        borderRadius: 10,
        padding: 12,
        background: colors.soft,
      }}
    >
      <div style={{ fontSize: 12, color: colors.muted, marginBottom: 4 }}>{label}</div>
      <div style={{ fontWeight: 700, color: colors.text }}>{value}</div>
    </div>
  );
}

function ExerciseBox({
  children,
  colors,
}: {
  children: React.ReactNode;
  colors: { border: string; muted: string };
}) {
  return (
    <div
      style={{
        marginTop: 20,
        padding: 14,
        border: `1px dashed ${colors.border}`,
        borderRadius: 10,
      }}
    >
      <div style={{ fontWeight: 800, marginBottom: 6 }}>Informatics Exercise</div>
      <div style={{ color: colors.muted, lineHeight: 1.7 }}>{children}</div>
    </div>
  );
}

function OrderRow({
  text,
  colors,
}: {
  text: string;
  colors: { border: string; soft: string };
}) {
  return (
    <div
      style={{
        border: `1px solid ${colors.border}`,
        borderRadius: 8,
        padding: 12,
        background: colors.soft,
      }}
    >
      {text}
    </div>
  );
}

const thStyle: React.CSSProperties = {
  textAlign: "left",
  padding: "10px 12px",
  borderBottom: "1px solid #dbe7e5",
};

const tdStyle: React.CSSProperties = {
  padding: "10px 12px",
  borderBottom: "1px solid #e5ecea",
};
