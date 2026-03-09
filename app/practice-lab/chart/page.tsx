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
  | "MAR"
  | "I&O";

type MarStatus = "Due" | "Given" | "Held" | "Late";
type CaseKey = "pneumonia" | "chf" | "sepsis";

type DocState = {
  respRate: string;
  oxygenDevice: string;
  oxygenLiters: string;
  spo2: string;
  painScore: string;
  education: boolean;
  coughDeepBreathing: boolean;
  incentiveSpirometry: boolean;
  escalationNoted: boolean;
  narrative: string;
};

type FlowState = {
  temp: string;
  pulse: string;
  bp: string;
  spo2: string;
  pain: string;
  lungSounds: string;
  cough: string;
  activityTolerance: string;
};

type IOState = {
  intake: string;
  urineOutput: string;
  otherOutput: string;
  todayWeight: string;
  yesterdayWeight: string;
  edema: string;
  fluidRestrictionReviewed: boolean;
};

type MarItem = {
  med: string;
  route: string;
  schedule: string;
  due: string;
  status: MarStatus;
  note: string;
};

type LabItem = {
  lab: string;
  result: string;
  reference: string;
  status: string;
};

type CaseConfig = {
  key: CaseKey;
  label: string;
  patientName: string;
  dob: string;
  mrn: string;
  admitDx: string;
  room: string;
  scenario: string;
  learningGoals: string[];
  summary: string;
  summaryPrompt: string;
  noteTitle: string;
  noteBody: string;
  notePrompt: string;
  labs: LabItem[];
  labPrompt: string;
  orders: string[];
  orderPrompt: string;
  mar: MarItem[];
  summaryCards: { label: string; value: string }[];
};

type UpdatedState = {
  documentation: string;
  flowsheet: string;
  mar: string;
  io: string;
};

const initialDoc: DocState = {
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
};

const initialFlow: FlowState = {
  temp: "",
  pulse: "",
  bp: "",
  spo2: "",
  pain: "",
  lungSounds: "",
  cough: "",
  activityTolerance: "",
};

const initialIO: IOState = {
  intake: "",
  urineOutput: "",
  otherOutput: "",
  todayWeight: "",
  yesterdayWeight: "",
  edema: "",
  fluidRestrictionReviewed: false,
};

const initialUpdated: UpdatedState = {
  documentation: "",
  flowsheet: "",
  mar: "",
  io: "",
};

const CASES: Record<CaseKey, CaseConfig> = {
  pneumonia: {
    key: "pneumonia",
    label: "Case 1 • Pneumonia",
    patientName: "Maria Gonzalez",
    dob: "04/12/1972",
    mrn: "847221",
    admitDx: "Pneumonia",
    room: "412B",
    scenario:
      "Community-acquired pneumonia with oxygen therapy, patient education needs, respiratory reassessment workflow, flowsheet completion, and medication administration follow-up.",
    learningGoals: [
      "Document key respiratory elements",
      "Identify missing structured data",
      "Connect charting to workflow quality",
      "Practice flowsheet completion",
      "Review MAR follow-up logic",
    ],
    summary:
      "Patient admitted with community-acquired pneumonia. Oxygen saturation was initially 88% on room air. Currently receiving IV antibiotics and oxygen therapy. Intermittent cough, diminished breath sounds at bases, and fatigue with exertion noted.",
    summaryPrompt:
      "What documentation fields should be completed to support oxygen therapy management, respiratory reassessment, and patient education?",
    noteTitle: "Nursing Progress Note",
    noteBody:
      "Patient alert and oriented x3. Mild shortness of breath with exertion. Receiving 2L oxygen via nasal cannula. Tolerating antibiotics without adverse reaction. Encouraged cough, deep breathing, and incentive spirometer use.",
    notePrompt:
      "Strengthen the note by adding measurable respiratory assessment data, response to oxygen therapy, and patient teaching outcomes.",
    labs: [
      { lab: "WBC", result: "14.2", reference: "4.0–11.0", status: "High" },
      { lab: "Hgb", result: "11.8", reference: "12.0–16.0", status: "Low" },
      { lab: "Sodium", result: "136", reference: "135–145", status: "Normal" },
      { lab: "Lactate", result: "2.1", reference: "0.5–2.0", status: "Slightly High" },
    ],
    labPrompt:
      "Which lab values may matter most for pneumonia monitoring, and how could they affect clinical workflow or escalation decisions?",
    orders: [
      "Oxygen via nasal cannula at 2L/min",
      "Ceftriaxone 1g IV every 24 hours",
      "Azithromycin 500mg PO daily",
      "Incentive spirometry every 2 hours while awake",
    ],
    orderPrompt:
      "Which orders require nursing follow-through documentation, and where would you expect that documentation to appear in the chart?",
    mar: [
      { med: "Ceftriaxone 1g", route: "IV", schedule: "q24h", due: "09:00", status: "Due", note: "" },
      { med: "Azithromycin 500mg", route: "PO", schedule: "Daily", due: "09:00", status: "Given", note: "Given with water" },
      { med: "Acetaminophen 650mg", route: "PO", schedule: "PRN", due: "12:00", status: "Late", note: "" },
      { med: "Albuterol Neb", route: "Neb", schedule: "q6h", due: "14:00", status: "Held", note: "Patient resting; reassess respiratory status" },
    ],
    summaryCards: [
      { label: "Primary Nurse", value: "J. Thompson, RN" },
      { label: "Attending", value: "R. Patel, MD" },
      { label: "Allergies", value: "NKDA" },
      { label: "Isolation", value: "None" },
      { label: "Current O₂", value: "2L NC" },
      { label: "Code Status", value: "Full Code" },
    ],
  },
  chf: {
    key: "chf",
    label: "Case 2 • CHF Exacerbation",
    patientName: "James Carter",
    dob: "11/03/1958",
    mrn: "552904",
    admitDx: "CHF Exacerbation",
    room: "518A",
    scenario:
      "Heart failure exacerbation with fluid overload, edema monitoring, oxygen support, diuretic administration, intake/output tracking, and escalation workflow.",
    learningGoals: [
      "Document fluid overload indicators",
      "Track structured CHF assessment data",
      "Review medication administration follow-up",
      "Connect charting to escalation logic",
      "Practice workflow-based decision support",
    ],
    summary:
      "Patient admitted with acute on chronic CHF exacerbation. Reports shortness of breath, orthopnea, and bilateral lower-extremity edema. Receiving oxygen and IV diuretics. Weight gain and reduced activity tolerance noted.",
    summaryPrompt:
      "Which structured fields are most important for documenting fluid overload, oxygen status, and response to diuretic therapy?",
    noteTitle: "Cardiopulmonary Nursing Note",
    noteBody:
      "Patient reports dyspnea with minimal exertion and difficulty lying flat. Bilateral ankle edema present. Oxygen in use via nasal cannula. Diuretic therapy ongoing. Reinforced low-sodium diet and fluid restriction teaching.",
    notePrompt:
      "Strengthen the note by adding measurable edema, respiratory status, and response-to-treatment details.",
    labs: [
      { lab: "BNP", result: "1280", reference: "<100", status: "High" },
      { lab: "Potassium", result: "3.4", reference: "3.5–5.1", status: "Low" },
      { lab: "Creatinine", result: "1.4", reference: "0.6–1.2", status: "Slightly High" },
      { lab: "Sodium", result: "132", reference: "135–145", status: "Low" },
    ],
    labPrompt:
      "Which lab values may affect diuretic management, fluid balance, and escalation decisions in CHF?",
    orders: [
      "Furosemide 40mg IV twice daily",
      "Oxygen via nasal cannula at 2L/min",
      "Daily weights",
      "Strict intake and output",
    ],
    orderPrompt:
      "Which CHF-related orders require consistent nursing documentation and trending for safe care?",
    mar: [
      { med: "Furosemide 40mg", route: "IV", schedule: "BID", due: "08:00", status: "Due", note: "" },
      { med: "Potassium Chloride 20 mEq", route: "PO", schedule: "Daily", due: "09:00", status: "Given", note: "Given with breakfast" },
      { med: "Metoprolol 25mg", route: "PO", schedule: "BID", due: "09:00", status: "Held", note: "" },
      { med: "Enoxaparin 40mg", route: "SubQ", schedule: "Daily", due: "10:00", status: "Given", note: "Administered to abdomen" },
    ],
    summaryCards: [
      { label: "Primary Nurse", value: "L. Harris, RN" },
      { label: "Attending", value: "D. Nguyen, MD" },
      { label: "Allergies", value: "ACE inhibitors" },
      { label: "Diet", value: "Low sodium" },
      { label: "Current O₂", value: "2L NC" },
      { label: "Code Status", value: "Full Code" },
    ],
  },
  sepsis: {
    key: "sepsis",
    label: "Case 3 • Sepsis / Infection Escalation",
    patientName: "Angela Brooks",
    dob: "07/19/1966",
    mrn: "661782",
    admitDx: "Sepsis secondary to UTI",
    room: "620C",
    scenario:
      "Sepsis screening, abnormal vital sign trending, elevated lactate review, culture timing, antibiotic administration, fluid resuscitation, and rapid escalation workflow.",
    learningGoals: [
      "Recognize sepsis-related abnormal trends",
      "Connect time-sensitive tasks to documentation quality",
      "Review escalation and provider notification workflow",
      "Track culture / antibiotic timing logic",
      "Practice structured documentation under urgency",
    ],
    summary:
      "Patient admitted with suspected sepsis secondary to urinary tract infection. Febrile, tachycardic, hypotensive, and intermittently confused. Blood cultures, lactate, IV fluids, and broad-spectrum antibiotics ordered. Escalation timing and reassessment are critical.",
    summaryPrompt:
      "Which structured documentation fields are most critical when a patient is showing possible sepsis and requires rapid reassessment and escalation?",
    noteTitle: "Sepsis Reassessment Note",
    noteBody:
      "Patient febrile and tachycardic with soft blood pressure. Provider notified of clinical deterioration. Blood cultures obtained and IV fluid bolus initiated per order. Antibiotic timing and lactate follow-up under review.",
    notePrompt:
      "Strengthen the note by adding exact abnormal findings, escalation timing, intervention response, and reassessment details.",
    labs: [
      { lab: "WBC", result: "18.9", reference: "4.0–11.0", status: "High" },
      { lab: "Lactate", result: "4.3", reference: "0.5–2.0", status: "Critical High" },
      { lab: "Creatinine", result: "1.8", reference: "0.6–1.2", status: "High" },
      { lab: "Procalcitonin", result: "6.2", reference: "<0.10", status: "High" },
    ],
    labPrompt:
      "Which laboratory findings most strongly support urgent sepsis escalation, and how should they influence reassessment and communication workflow?",
    orders: [
      "Blood cultures x2 prior to antibiotics",
      "Normal saline 30 mL/kg bolus",
      "Piperacillin-tazobactam 3.375g IV now",
      "Repeat lactate in 2 hours",
    ],
    orderPrompt:
      "Which sepsis orders are most time-sensitive, and where should completion and follow-up be documented to support safe escalation?",
    mar: [
      { med: "Piperacillin-tazobactam 3.375g", route: "IV", schedule: "Now", due: "08:15", status: "Due", note: "" },
      { med: "Normal Saline Bolus", route: "IV", schedule: "Once", due: "08:20", status: "Given", note: "Bolus started" },
      { med: "Acetaminophen 650mg", route: "PO", schedule: "PRN", due: "08:30", status: "Late", note: "" },
      { med: "Vancomycin 1g", route: "IV", schedule: "Now", due: "09:00", status: "Held", note: "" },
    ],
    summaryCards: [
      { label: "Primary Nurse", value: "S. Reed, RN" },
      { label: "Attending", value: "M. Ellis, MD" },
      { label: "Allergies", value: "Sulfa" },
      { label: "Isolation", value: "Standard" },
      { label: "Current O₂", value: "3L NC" },
      { label: "Code Status", value: "Full Code" },
    ],
  },
};

function nowStamp() {
  return new Date().toLocaleString([], {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function ChartSimulation() {
  const [activeTab, setActiveTab] = useState<TabKey>("Summary");
  const [caseKey, setCaseKey] = useState<CaseKey>("pneumonia");
  const [doc, setDoc] = useState<DocState>(initialDoc);
  const [flow, setFlow] = useState<FlowState>(initialFlow);
  const [io, setIo] = useState<IOState>(initialIO);
  const [mar, setMar] = useState<MarItem[]>(CASES.pneumonia.mar.map((m) => ({ ...m })));
  const [submitted, setSubmitted] = useState(false);
  const [updated, setUpdated] = useState<UpdatedState>(initialUpdated);
  const [reviewMode, setReviewMode] = useState(false);

  const currentCase = CASES[caseKey];

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
    scoreBg: "#eff6ff",
    scoreBorder: "#93c5fd",
    scoreText: "#1d4ed8",
  };

  const tabs: TabKey[] = [
    "Summary",
    "Notes",
    "Documentation",
    "Flowsheet",
    "I&O",
    "Labs",
    "Orders",
    "MAR",
  ];

  const netBalance = useMemo(() => {
    const intake = parseFloat(io.intake || "0");
    const urine = parseFloat(io.urineOutput || "0");
    const other = parseFloat(io.otherOutput || "0");
    if (
      (!io.intake && !io.urineOutput && !io.otherOutput) ||
      Number.isNaN(intake) ||
      Number.isNaN(urine) ||
      Number.isNaN(other)
    ) {
      return "";
    }
    const total = intake - urine - other;
    return total > 0 ? `+${total}` : `${total}`;
  }, [io.intake, io.urineOutput, io.otherOutput]);

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

  const missingIOItems = useMemo(() => {
    if (caseKey !== "chf") return [];
    const items: string[] = [];
    if (!io.intake) items.push("Intake");
    if (!io.urineOutput) items.push("Urine output");
    if (!netBalance) items.push("Net balance");
    if (!io.todayWeight) items.push("Today's weight");
    if (!io.yesterdayWeight) items.push("Yesterday's weight");
    if (!io.edema) items.push("Edema assessment");
    return items;
  }, [caseKey, io, netBalance]);

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

  const noteGaps = useMemo(() => {
    const items: string[] = [];
    if (!doc.narrative.trim()) items.push("Narrative note not completed");
    if (doc.narrative.trim() && doc.narrative.trim().length < 60) {
      items.push("Narrative note lacks detail");
    }
    if (!doc.escalationNoted) items.push("Escalation/provider notification not documented");
    return items;
  }, [doc]);

  const weightDelta = useMemo(() => {
    const today = parseFloat(io.todayWeight);
    const yesterday = parseFloat(io.yesterdayWeight);
    if (Number.isNaN(today) || Number.isNaN(yesterday)) return "";
    const diff = +(today - yesterday).toFixed(1);
    if (diff > 0) return `+${diff} lb from yesterday`;
    if (diff < 0) return `${diff} lb from yesterday`;
    return "No weight change from yesterday";
  }, [io.todayWeight, io.yesterdayWeight]);

  const scoreData = useMemo(() => {
    let score = 100;
    score -= missingDocItems.length * 6;
    score -= missingFlowItems.length * 5;
    score -= marGaps.length * 7;
    score -= noteGaps.length * 4;
    if (caseKey === "chf") score -= missingIOItems.length * 5;

    if (doc.education) score += 2;
    if (doc.coughDeepBreathing) score += 1;
    if (doc.incentiveSpirometry) score += 1;
    if (doc.narrative.trim().length >= 100) score += 2;
    if (caseKey === "chf" && io.fluidRestrictionReviewed) score += 2;

    score = Math.max(0, Math.min(100, score));

    const strengths: string[] = [];
    const improvements: string[] = [];

    if (!missingDocItems.length) strengths.push("Key documentation fields are complete.");
    if (!missingFlowItems.length) strengths.push("Flowsheet entries support trending and structured charting.");
    if (!marGaps.length) strengths.push("MAR statuses and follow-up notes are aligned.");
    if (doc.education) strengths.push("Patient education is documented.");
    if (doc.narrative.trim().length >= 100) strengths.push("Narrative note includes helpful detail.");
    if (caseKey === "chf" && !missingIOItems.length) strengths.push("CHF intake/output and daily weight tracking are documented.");

    if (missingDocItems.length) improvements.push(`Complete core documentation fields: ${missingDocItems.join(", ")}.`);
    if (missingFlowItems.length) improvements.push(`Finish key flowsheet rows: ${missingFlowItems.join(", ")}.`);
    if (caseKey === "chf" && missingIOItems.length) improvements.push(`Complete CHF I&O / weight fields: ${missingIOItems.join(", ")}.`);
    if (marGaps.length) improvements.push(`Resolve MAR follow-up gaps: ${marGaps.join(", ")}.`);
    if (noteGaps.length) improvements.push(`Strengthen note quality: ${noteGaps.join(", ")}.`);

    let level = "Needs improvement";
    if (score >= 90) level = "Strong";
    else if (score >= 75) level = "Developing well";

    return { score, strengths, improvements, level };
  }, [caseKey, doc, io.fluidRestrictionReviewed, marGaps, missingDocItems, missingFlowItems, missingIOItems, noteGaps]);

  const completionPct = Math.max(
    0,
    Math.round(
      (((caseKey === "chf" ? 24 : 18) -
        Math.min(missingDocItems.length, 6) -
        Math.min(missingFlowItems.length, 6) -
        Math.min(marGaps.length, 6) -
        (caseKey === "chf" ? Math.min(missingIOItems.length, 6) : 0)) /
        (caseKey === "chf" ? 24 : 18)) *
        100
    )
  );

  const updateDocField = <K extends keyof DocState>(key: K, value: DocState[K]) => {
    setDoc((prev) => ({ ...prev, [key]: value }));
    setUpdated((prev) => ({ ...prev, documentation: nowStamp() }));
  };

  const updateFlowField = <K extends keyof FlowState>(key: K, value: FlowState[K]) => {
    setFlow((prev) => ({ ...prev, [key]: value }));
    setUpdated((prev) => ({ ...prev, flowsheet: nowStamp() }));
  };

  const updateIOField = <K extends keyof IOState>(key: K, value: IOState[K]) => {
    setIo((prev) => ({ ...prev, [key]: value }));
    setUpdated((prev) => ({ ...prev, io: nowStamp() }));
  };

  const updateMarStatus = (idx: number, status: MarStatus) => {
    setMar((prev) => {
      const next = [...prev];
      next[idx].status = status;
      return next;
    });
    setUpdated((prev) => ({ ...prev, mar: nowStamp() }));
  };

  const updateMarNote = (idx: number, note: string) => {
    setMar((prev) => {
      const next = [...prev];
      next[idx].note = note;
      return next;
    });
    setUpdated((prev) => ({ ...prev, mar: nowStamp() }));
  };

  const resetCase = () => {
    setDoc(initialDoc);
    setFlow(initialFlow);
    setIo(initialIO);
    setMar(CASES[caseKey].mar.map((m) => ({ ...m })));
    setSubmitted(false);
    setUpdated(initialUpdated);
    setReviewMode(false);
    setActiveTab("Summary");
  };

  const switchCase = (nextCase: CaseKey) => {
    setCaseKey(nextCase);
    setDoc(initialDoc);
    setFlow(initialFlow);
    setIo(initialIO);
    setMar(CASES[nextCase].mar.map((m) => ({ ...m })));
    setSubmitted(false);
    setUpdated(initialUpdated);
    setReviewMode(false);
    setActiveTab("Summary");
  };

  if (reviewMode) {
    return (
      <main
        style={{
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
          backgroundColor: "#ffffff",
          minHeight: "100vh",
          color: COLORS.text,
          padding: 24,
        }}
      >
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 12,
              flexWrap: "wrap",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <div>
              <div style={{ fontSize: 28, fontWeight: 800 }}>Preceptor Review Summary</div>
              <div style={{ color: COLORS.muted, marginTop: 6 }}>NurseBridge Practice Lab</div>
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button onClick={() => window.print()} style={primaryButtonStyle}>
                Print / Save as PDF
              </button>
              <button onClick={() => setReviewMode(false)} style={secondaryButtonStyle}>
                Exit Review Mode
              </button>
            </div>
          </div>

          <ReviewCard title="Case Information">
            <ReviewGrid
              items={[
                ["Case", currentCase.label],
                ["Patient", currentCase.patientName],
                ["DOB", currentCase.dob],
                ["MRN", currentCase.mrn],
                ["Admit Dx", currentCase.admitDx],
                ["Room", currentCase.room],
                ["Submitted", submitted ? "Yes" : "No"],
              ]}
            />
          </ReviewCard>

          <ReviewCard title="Performance Summary">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: 14,
              }}
            >
              <MetricCard label="Score" value={`${scoreData.score}/100`} />
              <MetricCard label="Level" value={scoreData.level} />
              <MetricCard label="Completion" value={`${completionPct}%`} />
            </div>
          </ReviewCard>

          <ReviewCard title="Strengths">
            {scoreData.strengths.length ? (
              <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.8 }}>
                {scoreData.strengths.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <div style={{ color: COLORS.muted }}>No strengths identified yet.</div>
            )}
          </ReviewCard>

          <ReviewCard title="Improvement Areas">
            {scoreData.improvements.length ? (
              <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.8 }}>
                {scoreData.improvements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <div style={{ color: COLORS.muted }}>No major improvement areas identified.</div>
            )}
          </ReviewCard>

          <ReviewCard title="Documentation Snapshot">
            <ReviewGrid
              items={[
                ["Respiratory rate", doc.respRate || "—"],
                ["Oxygen device", doc.oxygenDevice || "—"],
                ["Oxygen flow rate", doc.oxygenLiters || "—"],
                ["SpO₂", doc.spo2 || "—"],
                ["Pain score", doc.painScore || "—"],
                ["Education documented", doc.education ? "Yes" : "No"],
                ["Escalation documented", doc.escalationNoted ? "Yes" : "No"],
                ["Last updated", updated.documentation || "—"],
              ]}
            />
            <div style={{ marginTop: 14 }}>
              <div style={{ fontWeight: 700, marginBottom: 6 }}>Narrative note</div>
              <div
                style={{
                  border: "1px solid #dbe7e5",
                  borderRadius: 10,
                  padding: 12,
                  lineHeight: 1.7,
                  color: doc.narrative ? COLORS.text : COLORS.muted,
                }}
              >
                {doc.narrative || "No narrative note entered."}
              </div>
            </div>
          </ReviewCard>

          <ReviewCard title="Flowsheet Snapshot">
            <ReviewGrid
              items={[
                ["Temperature", flow.temp || "—"],
                ["Pulse", flow.pulse || "—"],
                ["Blood Pressure", flow.bp || "—"],
                ["SpO₂", flow.spo2 || "—"],
                ["Pain", flow.pain || "—"],
                ["Lung Sounds", flow.lungSounds || "—"],
                ["Cough", flow.cough || "—"],
                ["Activity Tolerance", flow.activityTolerance || "—"],
                ["Last updated", updated.flowsheet || "—"],
              ]}
            />
          </ReviewCard>

          {caseKey === "chf" ? (
            <ReviewCard title="CHF I&O / Daily Weight Snapshot">
              <ReviewGrid
                items={[
                  ["Intake", io.intake ? `${io.intake} mL` : "—"],
                  ["Urine output", io.urineOutput ? `${io.urineOutput} mL` : "—"],
                  ["Other output", io.otherOutput ? `${io.otherOutput} mL` : "—"],
                  ["Net balance", netBalance ? `${netBalance} mL` : "—"],
                  ["Today's weight", io.todayWeight ? `${io.todayWeight} lb` : "—"],
                  ["Yesterday's weight", io.yesterdayWeight ? `${io.yesterdayWeight} lb` : "—"],
                  ["Weight trend", weightDelta || "—"],
                  ["Edema", io.edema || "—"],
                  ["Fluid restriction reviewed", io.fluidRestrictionReviewed ? "Yes" : "No"],
                  ["Last updated", updated.io || "—"],
                ]}
              />
            </ReviewCard>
          ) : null}

          <ReviewCard title="MAR Snapshot">
            <div style={{ display: "grid", gap: 10 }}>
              {mar.map((m) => (
                <div
                  key={`${m.med}-${m.due}`}
                  style={{
                    border: "1px solid #dbe7e5",
                    borderRadius: 10,
                    padding: 12,
                  }}
                >
                  <div style={{ fontWeight: 700 }}>{m.med}</div>
                  <div style={{ color: COLORS.muted, marginTop: 4 }}>
                    {m.route} • {m.schedule} • Due {m.due}
                  </div>
                  <div style={{ marginTop: 6 }}>
                    <b>Status:</b> {m.status}
                  </div>
                  <div style={{ marginTop: 4, color: m.note ? COLORS.text : COLORS.muted }}>
                    <b>Follow-up note:</b> {m.note || "None documented"}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 12, color: COLORS.muted }}>
              Last updated: {updated.mar || "—"}
            </div>
          </ReviewCard>
        </div>
      </main>
    );
  }

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
            <Link href="/practice-lab" style={{ textDecoration: "none", color: COLORS.teal, fontWeight: 700 }}>
              Back to Lab
            </Link>
            <Link href="/preceptorship" style={{ textDecoration: "none", color: COLORS.teal, fontWeight: 700 }}>
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
              <div style={{ fontWeight: 800, fontSize: 18 }}>{currentCase.patientName}</div>
              <div style={{ fontSize: 13, color: COLORS.muted }}>
                DOB: {currentCase.dob} • MRN: {currentCase.mrn} • Admit Dx: {currentCase.admitDx} • Room: {currentCase.room}
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
          gridTemplateColumns: "220px 1fr 320px",
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
              justifyContent: "space-between",
              gap: 12,
              flexWrap: "wrap",
              marginBottom: 18,
              borderBottom: `1px solid ${COLORS.border}`,
              paddingBottom: 12,
            }}
          >
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
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

            <select
              value={caseKey}
              onChange={(e) => switchCase(e.target.value as CaseKey)}
              style={{
                padding: "10px 12px",
                borderRadius: 10,
                border: `1px solid ${COLORS.border}`,
                background: "#fff",
                color: COLORS.text,
                fontWeight: 700,
              }}
            >
              <option value="pneumonia">{CASES.pneumonia.label}</option>
              <option value="chf">{CASES.chf.label}</option>
              <option value="sepsis">{CASES.sepsis.label}</option>
            </select>
          </div>

          {activeTab === "Summary" && (
            <div>
              <h2 style={{ marginTop: 0 }}>Patient Summary</h2>
              <p style={{ color: COLORS.muted, lineHeight: 1.7 }}>{currentCase.summary}</p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: 14,
                  marginTop: 16,
                }}
              >
                {currentCase.summaryCards.map((card) => (
                  <InfoCard key={card.label} label={card.label} value={card.value} colors={COLORS} />
                ))}
              </div>

              <ExerciseBox colors={COLORS}>{currentCase.summaryPrompt}</ExerciseBox>
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
                <div style={{ fontWeight: 700, marginBottom: 6 }}>{currentCase.noteTitle}</div>
                <div style={{ color: COLORS.muted, lineHeight: 1.7 }}>{currentCase.noteBody}</div>
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
                <div style={{ color: COLORS.muted, lineHeight: 1.7 }}>{currentCase.notePrompt}</div>
              </div>

              <ExerciseBox colors={COLORS}>
                Identify one improvement that would strengthen note clarity, compliance, or data quality.
              </ExerciseBox>
            </div>
          )}

          {activeTab === "Documentation" && (
            <div>
              <SectionHeaderWithTime title="Documentation Workspace" stamp={updated.documentation} />
              <AlertBox
                title={missingDocItems.length ? "Incomplete documentation alert" : "Documentation status looks complete"}
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
                  <input value={doc.respRate} onChange={(e) => updateDocField("respRate", e.target.value)} style={inputStyle(COLORS)} placeholder="e.g., 24" />
                </Field>

                <Field label="Oxygen device">
                  <select value={doc.oxygenDevice} onChange={(e) => updateDocField("oxygenDevice", e.target.value)} style={inputStyle(COLORS)}>
                    <option value="">Select...</option>
                    <option value="Room Air">Room Air</option>
                    <option value="Nasal Cannula">Nasal Cannula</option>
                    <option value="Simple Mask">Simple Mask</option>
                    <option value="Non-Rebreather">Non-Rebreather</option>
                  </select>
                </Field>

                <Field label="Oxygen flow rate">
                  <input value={doc.oxygenLiters} onChange={(e) => updateDocField("oxygenLiters", e.target.value)} style={inputStyle(COLORS)} placeholder="e.g., 2 L/min" />
                </Field>

                <Field label="SpO₂">
                  <input value={doc.spo2} onChange={(e) => updateDocField("spo2", e.target.value)} style={inputStyle(COLORS)} placeholder="e.g., 94%" />
                </Field>

                <Field label="Pain score">
                  <input value={doc.painScore} onChange={(e) => updateDocField("painScore", e.target.value)} style={inputStyle(COLORS)} placeholder="0–10" />
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

                <ChecklistRow checked={doc.education} onChange={() => updateDocField("education", !doc.education)} label="Education provided about disease process and therapy" />
                <ChecklistRow checked={doc.coughDeepBreathing} onChange={() => updateDocField("coughDeepBreathing", !doc.coughDeepBreathing)} label="Breathing / self-management interventions reinforced" />
                <ChecklistRow checked={doc.incentiveSpirometry} onChange={() => updateDocField("incentiveSpirometry", !doc.incentiveSpirometry)} label="Therapeutic technique / equipment use reviewed" />
                <ChecklistRow checked={doc.escalationNoted} onChange={() => updateDocField("escalationNoted", !doc.escalationNoted)} label="Escalation / provider notification documented if indicated" />
              </div>

              <div style={{ marginTop: 18 }}>
                <Field label="Brief documentation narrative">
                  <textarea
                    value={doc.narrative}
                    onChange={(e) => updateDocField("narrative", e.target.value)}
                    style={{ ...inputStyle(COLORS), minHeight: 110, resize: "vertical" }}
                    placeholder="Document reassessment findings, therapy status, patient response, and teaching."
                  />
                </Field>
              </div>

              <ExerciseBox colors={COLORS}>
                Informatics review: Which required fields are most likely to impact downstream reporting, clinical communication, and compliance if left incomplete?
              </ExerciseBox>
            </div>
          )}

          {activeTab === "Flowsheet" && (
            <div>
              <SectionHeaderWithTime title="Flowsheet" stamp={updated.flowsheet} />
              <AlertBox
                title={missingFlowItems.length ? "Flowsheet documentation needs completion" : "Flowsheet entries look complete"}
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

                <FlowRow label="Temperature" value={flow.temp} input={<input value={flow.temp} onChange={(e) => updateFlowField("temp", e.target.value)} style={miniInputStyle(COLORS)} placeholder="e.g., 38.1 °C" />} colors={COLORS} />
                <FlowRow label="Pulse" value={flow.pulse} input={<input value={flow.pulse} onChange={(e) => updateFlowField("pulse", e.target.value)} style={miniInputStyle(COLORS)} placeholder="e.g., 104" />} colors={COLORS} />
                <FlowRow label="Blood Pressure" value={flow.bp} input={<input value={flow.bp} onChange={(e) => updateFlowField("bp", e.target.value)} style={miniInputStyle(COLORS)} placeholder="e.g., 138/82" />} colors={COLORS} />
                <FlowRow label="SpO₂" value={flow.spo2} input={<input value={flow.spo2} onChange={(e) => updateFlowField("spo2", e.target.value)} style={miniInputStyle(COLORS)} placeholder="e.g., 94%" />} colors={COLORS} />
                <FlowRow label="Pain" value={flow.pain} input={<input value={flow.pain} onChange={(e) => updateFlowField("pain", e.target.value)} style={miniInputStyle(COLORS)} placeholder="0–10" />} colors={COLORS} />
                <FlowRow
                  label="Lung Sounds"
                  value={flow.lungSounds}
                  input={
                    <select value={flow.lungSounds} onChange={(e) => updateFlowField("lungSounds", e.target.value)} style={miniInputStyle(COLORS)}>
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
                    <select value={flow.cough} onChange={(e) => updateFlowField("cough", e.target.value)} style={miniInputStyle(COLORS)}>
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
                    <select value={flow.activityTolerance} onChange={(e) => updateFlowField("activityTolerance", e.target.value)} style={miniInputStyle(COLORS)}>
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
                Informatics review: Which flowsheet rows are most important for trending status, and how could missing structured entries affect quality reporting or team communication?
              </ExerciseBox>
            </div>
          )}

          {activeTab === "I&O" && (
            <div>
              <SectionHeaderWithTime title="Intake & Output / Daily Weights" stamp={updated.io} />

              {caseKey !== "chf" ? (
                <div
                  style={{
                    border: `1px solid ${COLORS.border}`,
                    borderRadius: 12,
                    padding: 16,
                    background: COLORS.soft,
                    color: COLORS.muted,
                    lineHeight: 1.7,
                  }}
                >
                  This tab is most relevant for the CHF case. Switch to <b>Case 2 • CHF Exacerbation</b> to practice intake/output, daily weight, and edema trending.
                </div>
              ) : (
                <>
                  <AlertBox
                    title={missingIOItems.length ? "I&O / weight documentation needs completion" : "I&O / weight tracking looks complete"}
                    text={
                      missingIOItems.length
                        ? `Missing items: ${missingIOItems.join(", ")}.`
                        : "Fluid balance and daily weight fields are documented."
                    }
                    ok={!missingIOItems.length}
                    colors={COLORS}
                  />

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                      gap: 14,
                      marginTop: 16,
                    }}
                  >
                    <Field label="Intake (mL)">
                      <input value={io.intake} onChange={(e) => updateIOField("intake", e.target.value)} style={inputStyle(COLORS)} placeholder="e.g., 1500" />
                    </Field>

                    <Field label="Urine output (mL)">
                      <input value={io.urineOutput} onChange={(e) => updateIOField("urineOutput", e.target.value)} style={inputStyle(COLORS)} placeholder="e.g., 1100" />
                    </Field>

                    <Field label="Other output (mL)">
                      <input value={io.otherOutput} onChange={(e) => updateIOField("otherOutput", e.target.value)} style={inputStyle(COLORS)} placeholder="e.g., 0" />
                    </Field>

                    <Field label="Net balance (mL)">
                      <input
                        value={netBalance}
                        readOnly
                        style={{ ...inputStyle(COLORS), backgroundColor: COLORS.soft, fontWeight: 700 }}
                        placeholder="Auto-calculated"
                      />
                    </Field>

                    <Field label="Today's weight (lb)">
                      <input value={io.todayWeight} onChange={(e) => updateIOField("todayWeight", e.target.value)} style={inputStyle(COLORS)} placeholder="e.g., 198.4" />
                    </Field>

                    <Field label="Yesterday's weight (lb)">
                      <input value={io.yesterdayWeight} onChange={(e) => updateIOField("yesterdayWeight", e.target.value)} style={inputStyle(COLORS)} placeholder="e.g., 194.8" />
                    </Field>

                    <Field label="Edema assessment">
                      <select value={io.edema} onChange={(e) => updateIOField("edema", e.target.value)} style={inputStyle(COLORS)}>
                        <option value="">Select...</option>
                        <option value="None">None</option>
                        <option value="1+">1+</option>
                        <option value="2+">2+</option>
                        <option value="3+">3+</option>
                      </select>
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
                    <ChecklistRow
                      checked={io.fluidRestrictionReviewed}
                      onChange={() => updateIOField("fluidRestrictionReviewed", !io.fluidRestrictionReviewed)}
                      label="Fluid restriction and CHF self-management teaching reviewed"
                    />

                    <div
                      style={{
                        marginTop: 8,
                        padding: 12,
                        borderRadius: 10,
                        background: "#fff",
                        border: `1px solid ${COLORS.border}`,
                        color: COLORS.muted,
                        lineHeight: 1.6,
                      }}
                    >
                      <b style={{ color: COLORS.text }}>Weight trend:</b>{" "}
                      {weightDelta || "Enter today's and yesterday's weights to calculate change."}
                    </div>
                  </div>

                  <ExerciseBox colors={COLORS}>
                    Informatics review: Which CHF trends require the most reliable structured documentation—net balance, edema, daily weights, or oxygen status—and how could missing entries delay escalation?
                  </ExerciseBox>
                </>
              )}
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
                  {currentCase.labs.map((row) => (
                    <tr key={row.lab}>
                      <td style={tdStyle}>{row.lab}</td>
                      <td style={tdStyle}>{row.result}</td>
                      <td style={tdStyle}>{row.reference}</td>
                      <td style={tdStyle}>{row.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <ExerciseBox colors={COLORS}>{currentCase.labPrompt}</ExerciseBox>
            </div>
          )}

          {activeTab === "Orders" && (
            <div>
              <h2 style={{ marginTop: 0 }}>Active Orders</h2>

              <div style={{ display: "grid", gap: 10 }}>
                {currentCase.orders.map((order) => (
                  <OrderRow key={order} text={order} colors={COLORS} />
                ))}
              </div>

              <ExerciseBox colors={COLORS}>{currentCase.orderPrompt}</ExerciseBox>
            </div>
          )}

          {activeTab === "MAR" && (
            <div>
              <SectionHeaderWithTime title="Medication Administration Record (MAR)" stamp={updated.mar} />
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
                      <select value={m.status} onChange={(e) => updateMarStatus(idx, e.target.value as MarStatus)} style={miniInputStyle(COLORS)}>
                        <option value="Due">Due</option>
                        <option value="Given">Given</option>
                        <option value="Held">Held</option>
                        <option value="Late">Late</option>
                      </select>
                    </div>
                    <div style={marCellStyle}>
                      <input value={m.note} onChange={(e) => updateMarNote(idx, e.target.value)} style={miniInputStyle(COLORS)} placeholder="Add note if held / late" />
                    </div>
                  </div>
                ))}
              </div>

              <ExerciseBox colors={COLORS}>
                Which medication administration gaps could affect compliance, handoff communication, or medication safety?
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
            <div style={{ fontWeight: 700, marginBottom: 6 }}>Current case</div>
            <div style={{ color: COLORS.text, fontWeight: 700, marginBottom: 6 }}>
              {currentCase.label}
            </div>
            <div style={{ color: COLORS.muted, fontSize: 14, lineHeight: 1.6 }}>
              {currentCase.scenario}
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
              {currentCase.learningGoals.map((goal) => (
                <li key={goal}>{goal}</li>
              ))}
            </ul>
          </div>

          <div
            style={{
              marginTop: 14,
              borderTop: `1px solid ${COLORS.border}`,
              paddingTop: 12,
            }}
          >
            <div style={{ fontWeight: 700, marginBottom: 6 }}>Last updated</div>
            <div style={{ fontSize: 13, color: COLORS.muted, lineHeight: 1.8 }}>
              <div>Documentation: {updated.documentation || "—"}</div>
              <div>Flowsheet: {updated.flowsheet || "—"}</div>
              <div>I&O: {updated.io || "—"}</div>
              <div>MAR: {updated.mar || "—"}</div>
            </div>
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

          <div
            style={{
              marginTop: 14,
              borderTop: `1px solid ${COLORS.border}`,
              paddingTop: 12,
            }}
          >
            <div style={{ fontWeight: 700, marginBottom: 6 }}>Score</div>
            <div
              style={{
                border: `1px solid ${COLORS.scoreBorder}`,
                background: COLORS.scoreBg,
                color: COLORS.scoreText,
                borderRadius: 10,
                padding: 12,
              }}
            >
              <div style={{ fontSize: 28, fontWeight: 800, lineHeight: 1 }}>
                {scoreData.score}/100
              </div>
              <div style={{ fontSize: 13, marginTop: 6 }}>{scoreData.level}</div>
            </div>
          </div>

          <div
            style={{
              marginTop: 14,
              borderTop: `1px solid ${COLORS.border}`,
              paddingTop: 12,
            }}
          >
            <div style={{ fontWeight: 700, marginBottom: 6 }}>Feedback</div>

            <div style={{ fontSize: 13, color: COLORS.muted, lineHeight: 1.7 }}>
              {scoreData.strengths.length ? (
                <div style={{ marginBottom: 10 }}>
                  <div style={{ fontWeight: 700, color: COLORS.text, marginBottom: 4 }}>
                    Strengths
                  </div>
                  <ul style={{ paddingLeft: 18, margin: 0 }}>
                    {scoreData.strengths.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div>
                <div style={{ fontWeight: 700, color: COLORS.text, marginBottom: 4 }}>
                  Improve next
                </div>
                <ul style={{ paddingLeft: 18, margin: 0 }}>
                  {scoreData.improvements.length ? (
                    scoreData.improvements.map((item) => <li key={item}>{item}</li>)
                  ) : (
                    <li>Scenario looks strong. Review the chart one more time before submission.</li>
                  )}
                </ul>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: 14,
              borderTop: `1px solid ${COLORS.border}`,
              paddingTop: 12,
              display: "grid",
              gap: 10,
            }}
          >
            <button onClick={() => setSubmitted(true)} style={primaryButtonStyle}>
              Submit Scenario
            </button>

            <button onClick={() => setReviewMode(true)} style={secondaryButtonStyle}>
              Open Preceptor Review Mode
            </button>

            <button onClick={resetCase} style={secondaryButtonStyle}>
              Reset Case
            </button>

            {submitted ? (
              <div
                style={{
                  border: `1px solid ${COLORS.okBorder}`,
                  background: COLORS.okBg,
                  color: COLORS.okText,
                  borderRadius: 10,
                  padding: 10,
                  fontSize: 13,
                  lineHeight: 1.6,
                }}
              >
                Scenario submitted. Final score: <b>{scoreData.score}/100</b>.
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
}

function SectionHeaderWithTime({
  title,
  stamp,
}: {
  title: string;
  stamp: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: 12,
        alignItems: "center",
        flexWrap: "wrap",
        marginBottom: 8,
      }}
    >
      <h2 style={{ margin: 0 }}>{title}</h2>
      <div style={{ fontSize: 12, color: "#475569" }}>
        Last updated: {stamp || "—"}
      </div>
    </div>
  );
}

function ReviewCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      style={{
        border: "1px solid #dbe7e5",
        borderRadius: 14,
        padding: 18,
        marginBottom: 18,
        background: "#fff",
      }}
    >
      <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 12 }}>{title}</div>
      {children}
    </section>
  );
}

function ReviewGrid({
  items,
}: {
  items: [string, string][];
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 12,
      }}
    >
      {items.map(([label, value]) => (
        <div
          key={label}
          style={{
            border: "1px solid #dbe7e5",
            borderRadius: 10,
            padding: 12,
            background: "#f8fbfa",
          }}
        >
          <div style={{ fontSize: 12, color: "#475569", marginBottom: 4 }}>{label}</div>
          <div style={{ fontWeight: 700 }}>{value}</div>
        </div>
      ))}
    </div>
  );
}

function MetricCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div
      style={{
        border: "1px solid #dbe7e5",
        borderRadius: 10,
        padding: 14,
        background: "#f8fbfa",
      }}
    >
      <div style={{ fontSize: 12, color: "#475569", marginBottom: 6 }}>{label}</div>
      <div style={{ fontWeight: 800, fontSize: 24 }}>{value}</div>
    </div>
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

const primaryButtonStyle: React.CSSProperties = {
  padding: "10px 12px",
  borderRadius: 10,
  border: "1px solid #0b5f58",
  background: "#0f766e",
  color: "#fff",
  fontWeight: 800,
  cursor: "pointer",
};

const secondaryButtonStyle: React.CSSProperties = {
  padding: "10px 12px",
  borderRadius: 10,
  border: "1px solid #dbe7e5",
  background: "#fff",
  color: "#0f172a",
  fontWeight: 700,
  cursor: "pointer",
};

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
