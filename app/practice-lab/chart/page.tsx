"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type TabKey =
  | "Summary"
  | "Notes"
  | "Documentation"
  | "Flowsheet"
  | "Labs"
  | "Orders"
  | "MAR";

type MarStatus = "Due" | "Given" | "Held" | "Late";

export default function ChartSimulation() {
  const [activeTab, setActiveTab] = useState<TabKey>("Summary");
  const [doc, setDoc] = useState({
    respRate: "",
    oxygenDevice: "",
    oxygenLiters: "",
    spo2: "",
    painScore: "",
    education: false,
    coughDeepBreathing: false,
    incentiveSpirometry: false,
    escalationNoted: false,
    narrative: "",
  });

  const [flow, setFlow] = useState({
    temp: "",
    pulse: "",
    bp: "",
    spo2: "",
    pain: "",
    lungSounds: "",
    cough: "",
    activityTolerance: "",
  });

  const [mar, setMar] = useState([
    {
      med: "Ceftriaxone 1g",
      route: "IV",
      schedule: "q24h",
      due: "09:00",
      status: "Due" as MarStatus,
      note: "",
    },
    {
      med: "Azithromycin 500mg",
      route: "PO",
      schedule: "Daily",
      due: "09:00",
      status: "Given" as MarStatus,
      note: "Given with water",
    },
    {
      med: "Acetaminophen 650mg",
      route: "PO",
      schedule: "PRN",
      due: "12:00",
      status: "Late" as MarStatus,
      note: "",
    },
    {
      med: "Albuterol Neb",
      route: "Neb",
      schedule: "q6h",
      due: "14:00",
      status: "Held" as MarStatus,
      note: "Patient resting; reassess respiratory status",
    },
  ]);

  const COLORS = {
    teal: "#0f766e",
    tealDark: "#0b5f58",
    bg: "#f7faf9",
    card: "#ffffff",
    border: "#dbe7e5",
    text: "#0f172a",
    muted: "#475569",
    soft: "#ecf7f5",
    warnBg: "#fff7ed",
    warnBorder: "#fdba74",
    warnText: "#9a3412",
    okBg: "#ecfdf5",
    okBorder: "#86efac",
    okText: "#166534",
    lateBg: "#fef2f2",
    lateBorder: "#fca5a5",
    lateText: "#991b1b",
  };

  const tabs: TabKey[] = [
    "Summary",
    "Notes",
    "Documentation",
    "Flowsheet",
    "Labs",
    "Orders",
    "MAR",
  ];

  const missingDocItems = useMemo(() => {
    const items: string[] = [];
    if (!doc.respRate) items.push("Respiratory rate");
    if (!doc.oxygenDevice) items.push("Oxygen device");
    if (!doc.oxygenLiters) items.push("Oxygen flow rate");
    if (!doc.spo2) items.push("SpO₂");
    if (!doc.painScore) items.push("Pain score");
    if (!doc.education) items.push("Patient education documented");
    return items;
  }, [doc]);

  const missingFlowItems = useMemo(() => {
    const items: string[] = [];
    if (!flow.temp) items.push("Temperature");
    if (!flow.pulse) items.push("Pulse");
    if (!flow.bp) items.push("Blood pressure");
    if (!flow.spo2) items.push("SpO₂");
    if (!flow.pain) items.push("Pain");
    if (!flow.lungSounds) items.push("Lung sounds");
    return items;
  }, [flow]);

  const marGaps = useMemo(() => {
    const items: string[] = [];
    mar.forEach((m) => {
      if ((m.status === "Held" || m.status === "Late") && !m.note.trim()) {
        items.push(`${m.med} missing follow-up note`);
      }
      if (m.status === "Due") {
        items.push(`${m.med} still due`);
      }
    });
    return items;
  }, [mar]);

  const completionPct = Math.max(
    0,
    Math.round(
      ((18 -
        Math.min(missingDocItems.length, 6) -
        Math.min(missingFlowItems.length, 6) -
        Math.min(marGaps.length, 6)) /
        18) *
        100
    )
  );

  return (
    <main
      style={{
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
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
            maxWidth: 1280,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div style={{ fontWeight: 800 }}>NurseBridge Practice Lab</div>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link
              href="/practice-lab"
              style={{ textDecoration: "none", color: COLORS.teal, fontWeight: 700 }}
            >
              Back to Lab
            </Link>
            <Link
              href="/preceptorship"
              style={{ textDecoration: "none", color: COLORS.teal, fontWeight: 700 }}
            >
              Preceptorship
            </Link>
          </div>
        </div>
      </div>

      <div
        style={{
          borderBottom: `1px solid ${COLORS.border}`,
          background: COLORS.soft,
          padding: "14px 20px",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 12,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ fontWeight: 800, fontSize: 18 }}>Maria Gonzalez</div>
              <div style={{ fontSize: 13, color: COLORS.muted }}>
                DOB: 04/12/1972 • MRN: 847221 • Admit Dx: Pneumonia • Room: 412B
              </div>
            </div>

            <div
              style={{
                display: "inline-flex",
                gap: 8,
                padding: "6px 10px",
                borderRadius: 999,
                backgroundColor: "#ffffff",
                color: COLORS.tealDark,
                border: `1px solid ${COLORS.border}`,
                fontSize: 12,
                fontWeight: 700,
              }}
            >
              Training Chart • Mini EHR Simulation
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "220px 1fr 300px",
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
            minHeight: 640,
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
                Patient admitted with community-acquired pneumonia. Oxygen saturation was initially
                88% on room air. Currently receiving IV antibiotics and oxygen therapy. Intermittent
                cough, diminished breath sounds at bases, and fatigue with exertion noted.
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
                <InfoCard label="Current O₂" value="2L NC" colors={COLORS} />
                <InfoCard label="Code Status" value="Full Code" colors={COLORS} />
              </div>

              <ExerciseBox colors={COLORS}>
                Review the patient summary. What documentation fields should be completed to support
                oxygen therapy management, respiratory reassessment, and patient education?
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
                  Patient alert and oriented x3. Mild shortness of breath with exertion. Receiving
                  2L oxygen via nasal cannula. Tolerating antibiotics without adverse reaction.
                  Encouraged cough, deep breathing, and incentive spirometer use.
                </div>
              </div>

              <div
                style={{
                  marginTop: 16,
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: 10,
                  padding: 14,
                  background: "#fff",
                }}
              >
                <div style={{ fontWeight: 700, marginBottom: 8 }}>Documentation coaching prompt</div>
                <div style={{ color: COLORS.muted, lineHeight: 1.7 }}>
                  Strengthen the note by adding measurable respiratory assessment data, response to
                  oxygen therapy, and patient teaching outcomes.
                </div>
              </div>

              <ExerciseBox colors={COLORS}>
                Identify one improvement that would strengthen note clarity, compliance, or data
                quality.
              </ExerciseBox>
            </div>
          )}

          {activeTab === "Documentation" && (
            <div>
              <h2 style={{ marginTop: 0 }}>Documentation Workspace</h2>

              <AlertBox
                title={
                  missingDocItems.length
                    ? "Incomplete documentation alert"
                    : "Documentation status looks complete"
                }
                text={
                  missingDocItems.length
                    ? `Missing items: ${missingDocItems.join(", ")}.`
                    : "Key respiratory fields and education elements are documented."
                }
                ok={!missingDocItems.length}
                colors={COLORS}
              />

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: 14,
                }}
              >
                <Field label="Respiratory rate">
                  <input
                    value={doc.respRate}
                    onChange={(e) => setDoc({ ...doc, respRate: e.target.value })}
                    style={inputStyle(COLORS)}
                    placeholder="e.g., 24"
                  />
                </Field>

                <Field label="Oxygen device">
                  <select
                    value={doc.oxygenDevice}
                    onChange={(e) => setDoc({ ...doc, oxygenDevice: e.target.value })}
                    style={inputStyle(COLORS)}
                  >
                    <option value="">Select...</option>
                    <option value="Room Air">Room Air</option>
                    <option value="Nasal Cannula">Nasal Cannula</option>
                    <option value="Simple Mask">Simple Mask</option>
                    <option value="Non-Rebreather">Non-Rebreather</option>
                  </select>
                </Field>

                <Field label="Oxygen flow rate">
                  <input
                    value={doc.oxygenLiters}
                    onChange={(e) => setDoc({ ...doc, oxygenLiters: e.target.value })}
                    style={inputStyle(COLORS)}
                    placeholder="e.g., 2 L/min"
                  />
                </Field>

                <Field label="SpO₂">
                  <input
                    value={doc.spo2}
                    onChange={(e) => setDoc({ ...doc, spo2: e.target.value })}
                    style={inputStyle(COLORS)}
                    placeholder="e.g., 94%"
                  />
                </Field>

                <Field label="Pain score">
                  <input
                    value={doc.painScore}
                    onChange={(e) => setDoc({ ...doc, painScore: e.target.value })}
                    style={inputStyle(COLORS)}
                    placeholder="0–10"
                  />
                </Field>
              </div>

              <div
                style={{
                  marginTop: 18,
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: 12,
                  padding: 14,
                  background: COLORS.soft,
                }}
              >
                <div style={{ fontWeight: 700, marginBottom: 10 }}>Patient education / interventions</div>

                <ChecklistRow
                  checked={doc.education}
                  onChange={() => setDoc({ ...doc, education: !doc.education })}
                  label="Education provided about pneumonia care and oxygen therapy"
                />
                <ChecklistRow
                  checked={doc.coughDeepBreathing}
                  onChange={() =>
                    setDoc({ ...doc, coughDeepBreathing: !doc.coughDeepBreathing })
                  }
                  label="Cough and deep breathing encouraged"
                />
                <ChecklistRow
                  checked={doc.incentiveSpirometry}
                  onChange={() =>
                    setDoc({ ...doc, incentiveSpirometry: !doc.incentiveSpirometry })
                  }
                  label="Incentive spirometry reviewed / reinforced"
                />
                <ChecklistRow
                  checked={doc.escalationNoted}
                  onChange={() =>
                    setDoc({ ...doc, escalationNoted: !doc.escalationNoted })
                  }
                  label="Escalation / provider notification documented if indicated"
                />
              </div>

              <div style={{ marginTop: 18 }}>
                <Field label="Brief documentation narrative">
                  <textarea
                    value={doc.narrative}
                    onChange={(e) => setDoc({ ...doc, narrative: e.target.value })}
                    style={{
                      ...inputStyle(COLORS),
                      minHeight: 110,
                      resize: "vertical",
                    }}
                    placeholder="Document the respiratory reassessment, oxygen therapy status, patient response, and teaching."
                  />
                </Field>
              </div>

              <ExerciseBox colors={COLORS}>
                Informatics review: Which required fields are most likely to impact downstream
                reporting, clinical communication, and compliance if left incomplete?
              </ExerciseBox>
            </div>
          )}

          {activeTab === "Flowsheet" && (
            <div>
              <h2 style={{ marginTop: 0 }}>Flowsheet</h2>

              <AlertBox
                title={
                  missingFlowItems.length
                    ? "Flowsheet documentation needs completion"
                    : "Flowsheet entries look complete"
                }
                text={
                  missingFlowItems.length
                    ? `Missing items: ${missingFlowItems.join(", ")}.`
                    : "Key vital signs and assessment items are documented."
                }
                ok={!missingFlowItems.length}
                colors={COLORS}
              />

              <div
                style={{
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: 12,
                  overflow: "hidden",
                  marginTop: 16,
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "220px 1fr 1fr",
                    background: COLORS.soft,
                    fontWeight: 700,
                  }}
                >
                  <div style={flowHeadStyle}>Row</div>
                  <div style={flowHeadStyle}>Current Entry</div>
                  <div style={flowHeadStyle}>Document</div>
                </div>

                <FlowRow
                  label="Temperature"
                  value={flow.temp}
                  input={
                    <input
                      value={flow.temp}
                      onChange={(e) => setFlow({ ...flow, temp: e.target.value })}
                      style={miniInputStyle(COLORS)}
                      placeholder="e.g., 38.1 °C"
                    />
                  }
                  colors={COLORS}
                />
                <FlowRow
                  label="Pulse"
                  value={flow.pulse}
                  input={
                    <input
                      value={flow.pulse}
                      onChange={(e) => setFlow({ ...flow, pulse: e.target.value })}
                      style={miniInputStyle(COLORS)}
                      placeholder="e.g., 104"
                    />
                  }
                  colors={COLORS}
                />
                <FlowRow
                  label="Blood Pressure"
                  value={flow.bp}
                  input={
                    <input
                      value={flow.bp}
                      onChange={(e) => setFlow({ ...flow, bp: e.target.value })}
                      style={miniInputStyle(COLORS)}
                      placeholder="e.g., 138/82"
                    />
                  }
                  colors={COLORS}
                />
                <FlowRow
                  label="SpO₂"
                  value={flow.spo2}
                  input={
                    <input
                      value={flow.spo2}
                      onChange={(e) => setFlow({ ...flow, spo2: e.target.value })}
                      style={miniInputStyle(COLORS)}
                      placeholder="e.g., 94%"
                    />
                  }
                  colors={COLORS}
                />
                <FlowRow
                  label="Pain"
                  value={flow.pain}
                  input={
                    <input
                      value={flow.pain}
                      onChange={(e) => setFlow({ ...flow, pain: e.target.value })}
                      style={miniInputStyle(COLORS)}
                      placeholder="0–10"
                    />
                  }
                  colors={COLORS}
                />
                <FlowRow
                  label="Lung Sounds"
                  value={flow.lungSounds}
                  input={
                    <select
                      value={flow.lungSounds}
                      onChange={(e) => setFlow({ ...flow, lungSounds: e.target.value })}
                      style={miniInputStyle(COLORS)}
                    >
                      <option value="">Select...</option>
                      <option value="Clear">Clear</option>
                      <option value="Diminished">Diminished</option>
                      <option value="Crackles">Crackles</option>
                      <option value="Wheezes">Wheezes</option>
                    </select>
                  }
                  colors={COLORS}
                />
                <FlowRow
                  label="Cough"
                  value={flow.cough}
                  input={
                    <select
                      value={flow.cough}
                      onChange={(e) => setFlow({ ...flow, cough: e.target.value })}
                      style={miniInputStyle(COLORS)}
                    >
                      <option value="">Select...</option>
                      <option value="None">None</option>
                      <option value="Dry">Dry</option>
                      <option value="Productive">Productive</option>
                    </select>
                  }
                  colors={COLORS}
                />
                <FlowRow
                  label="Activity Tolerance"
                  value={flow.activityTolerance}
                  input={
                    <select
                      value={flow.activityTolerance}
                      onChange={(e) =>
                        setFlow({ ...flow, activityTolerance: e.target.value })
                      }
                      style={miniInputStyle(COLORS)}
                    >
                      <option value="">Select...</option>
                      <option value="Independent">Independent</option>
                      <option value="Mild fatigue">Mild fatigue</option>
                      <option value="Dyspnea with exertion">Dyspnea with exertion</option>
                    </select>
                  }
                  colors={COLORS}
                />
              </div>

              <ExerciseBox colors={COLORS}>
                Informatics review: Which flowsheet rows are most important for trending pneumonia
                status, and how could missing structured entries affect quality reporting or team communication?
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
                Which lab values may matter most for pneumonia monitoring, and how could they
                affect clinical workflow or escalation decisions?
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
                expect that documentation to appear in the chart?
              </ExerciseBox>
            </div>
          )}

          {activeTab === "MAR" && (
            <div>
              <h2 style={{ marginTop: 0 }}>Medication Administration Record (MAR)</h2>

              <AlertBox
                title={marGaps.length ? "MAR review needed" : "MAR looks complete"}
                text={
                  marGaps.length
                    ? `Items needing follow-up: ${marGaps.join(", ")}.`
                    : "Medication statuses and follow-up notes appear complete."
                }
                ok={!marGaps.length}
                colors={COLORS}
              />

              <div
                style={{
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: 12,
                  overflow: "hidden",
                  marginTop: 16,
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "2fr 80px 90px 80px 100px 1.5fr",
                    background: COLORS.soft,
                    fontWeight: 700,
                  }}
                >
                  <div style={marHeadStyle}>Medication</div>
                  <div style={marHeadStyle}>Route</div>
                  <div style={marHeadStyle}>Schedule</div>
                  <div style={marHeadStyle}>Due</div>
                  <div style={marHeadStyle}>Status</div>
                  <div style={marHeadStyle}>Follow-up note</div>
                </div>

                {mar.map((m, idx) => (
                  <div
                    key={m.med}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "2fr 80px 90px 80px 100px 1.5fr",
                      borderTop: `1px solid ${COLORS.border}`,
                      background:
                        m.status === "Late"
                          ? COLORS.lateBg
                          : m.status === "Held"
                          ? COLORS.warnBg
                          : "#fff",
                    }}
                  >
                    <div style={marCellStyle}>{m.med}</div>
                    <div style={marCellStyle}>{m.route}</div>
                    <div style={marCellStyle}>{m.schedule}</div>
                    <div style={marCellStyle}>{m.due}</div>
                    <div style={marCellStyle}>
                      <select
                        value={m.status}
                        onChange={(e) => {
                          const next = [...mar];
                          next[idx].status = e.target.value as MarStatus;
                          setMar(next);
                        }}
                        style={miniInputStyle(COLORS)}
                      >
                        <option value="Due">Due</option>
                        <option value="Given">Given</option>
                        <option value="Held">Held</option>
                        <option value="Late">Late</option>
                      </select>
                    </div>
                    <div style={marCellStyle}>
                      <input
                        value={m.note}
                        onChange={(e) => {
                          const next = [...mar];
                          next[idx].note = e.target.value;
                          setMar(next);
                        }}
                        style={miniInputStyle(COLORS)}
                        placeholder="Add note if held / late"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <ExerciseBox colors={COLORS}>
                Informatics review: Which medication administration gaps could affect compliance,
                handoff communication, or medication safety?
              </ExerciseBox>
            </div>
          )}
        </div>

        <div
          style={{
            border: `1px solid ${COLORS.border}`,
            borderRadius: 12,
            background: "#fff",
            padding: 14,
            alignSelf: "start",
          }}
        >
          <div style={{ fontWeight: 800, marginBottom: 10 }}>Instructor Panel</div>

          <div style={{ fontSize: 13, color: COLORS.muted, lineHeight: 1.7 }}>
            Use this screen to practice chart review, documentation quality, and workflow thinking.
          </div>

          <div
            style={{
              marginTop: 14,
              borderTop: `1px solid ${COLORS.border}`,
              paddingTop: 12,
            }}
          >
            <div style={{ fontWeight: 700, marginBottom: 6 }}>Current scenario</div>
            <div style={{ color: COLORS.muted, fontSize: 14, lineHeight: 1.6 }}>
              Community-acquired pneumonia with oxygen therapy, patient education needs, respiratory reassessment workflow, flowsheet completion, and medication administration follow-up.
            </div>
          </div>

          <div
            style={{
              marginTop: 14,
              borderTop: `1px solid ${COLORS.border}`,
              paddingTop: 12,
            }}
          >
            <div style={{ fontWeight: 700, marginBottom: 6 }}>Learning goals</div>
            <ul style={{ paddingLeft: 18, margin: 0, color: COLORS.muted, lineHeight: 1.7 }}>
              <li>Document key respiratory elements</li>
              <li>Identify missing structured data</li>
              <li>Connect charting to workflow quality</li>
              <li>Practice flowsheet completion</li>
              <li>Review MAR follow-up logic</li>
            </ul>
          </div>

          <div
            style={{
              marginTop: 14,
              borderTop: `1px solid ${COLORS.border}`,
              paddingTop: 12,
            }}
          >
            <div style={{ fontWeight: 700, marginBottom: 6 }}>Overall completion</div>
            <div
              style={{
                height: 10,
                background: COLORS.soft,
                borderRadius: 999,
                overflow: "hidden",
                border: `1px solid ${COLORS.border}`,
              }}
            >
              <div
                style={{
                  width: `${completionPct}%`,
                  height: "100%",
                  background: COLORS.teal,
                }}
              />
            </div>
            <div style={{ fontSize: 12, color: COLORS.muted, marginTop: 6 }}>
              {completionPct}% complete
            </div>
          </div>
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

function ChecklistRow({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: () => void;
  label: string;
}) {
  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 10,
        cursor: "pointer",
      }}
    >
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span>{label}</span>
    </label>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label style={{ display: "block" }}>
      <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 8 }}>{label}</div>
      {children}
    </label>
  );
}

function AlertBox({
  title,
  text,
  ok,
  colors,
}: {
  title: string;
  text: string;
  ok: boolean;
  colors: {
    warnBg: string;
    warnBorder: string;
    warnText: string;
    okBg: string;
    okBorder: string;
    okText: string;
  };
}) {
  return (
    <div
      style={{
        border: `1px solid ${ok ? colors.okBorder : colors.warnBorder}`,
        backgroundColor: ok ? colors.okBg : colors.warnBg,
        color: ok ? colors.okText : colors.warnText,
        borderRadius: 10,
        padding: 12,
        marginBottom: 16,
      }}
    >
      <div style={{ fontWeight: 800, marginBottom: 4 }}>{title}</div>
      <div style={{ lineHeight: 1.6 }}>{text}</div>
    </div>
  );
}

function FlowRow({
  label,
  value,
  input,
  colors,
}: {
  label: string;
  value: string;
  input: React.ReactNode;
  colors: { border: string; muted: string };
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "220px 1fr 1fr",
        borderTop: `1px solid ${colors.border}`,
      }}
    >
      <div style={flowCellStyle}>
        <div style={{ fontWeight: 700 }}>{label}</div>
      </div>
      <div style={flowCellStyle}>
        <span style={{ color: value ? "#0f172a" : colors.muted }}>
          {value || "Not documented"}
        </span>
      </div>
      <div style={flowCellStyle}>{input}</div>
    </div>
  );
}

function inputStyle(colors: {
  border: string;
  text: string;
}): React.CSSProperties {
  return {
    width: "100%",
    padding: "12px 12px",
    borderRadius: 12,
    border: `1px solid ${colors.border}`,
    backgroundColor: "#ffffff",
    color: colors.text,
    outline: "none",
    fontSize: 14,
  };
}

function miniInputStyle(colors: {
  border: string;
  text: string;
}): React.CSSProperties {
  return {
    width: "100%",
    padding: "10px 10px",
    borderRadius: 10,
    border: `1px solid ${colors.border}`,
    backgroundColor: "#ffffff",
    color: colors.text,
    outline: "none",
    fontSize: 13,
  };
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

const flowHeadStyle: React.CSSProperties = {
  padding: "10px 12px",
  borderRight: "1px solid #dbe7e5",
};

const flowCellStyle: React.CSSProperties = {
  padding: "10px 12px",
  borderRight: "1px solid #e5ecea",
};

const marHeadStyle: React.CSSProperties = {
  padding: "10px 12px",
  borderRight: "1px solid #dbe7e5",
};

const marCellStyle: React.CSSProperties = {
  padding: "10px 12px",
  borderRight: "1px solid #e5ecea",
};
