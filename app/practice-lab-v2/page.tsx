"use client";

import SummaryTab from "./chart/tabs/SummaryTab";
import { CASES, CaseKey } from "./chart/cases";

import { useState } from "react";
import ChartShell from "./ChartShell";

const TABS = [
  "Summary",
  "Notes",
  "Documentation",
  "Flowsheet",
  "I&O",
  "Labs",
  "Orders",
  "MAR",
];

export default function ChartPage() {
  const [activeTab, setActiveTab] = useState("Summary");
const [caseKey] = useState<CaseKey>("pneumonia");

24  return (
25    <ChartShell
26      header={<Header />}
27      tabs={TABS}
28      activeTab={activeTab}
29      onTabChange={setActiveTab}
30    >
31      <TabContent activeTab={activeTab} caseKey={caseKey} />
32    </ChartShell>
33  );

/* ---------------- HEADER ---------------- */

function Header() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <div style={{ fontSize: 22, fontWeight: 800 }}>NurseBridge Practice Lab</div>
      <div style={{ color: "#475569", fontSize: 14 }}>
        Simulation Lab • Version 2 (Clean Build)
      </div>
    </div>
  );
}

/* ---------------- TAB CONTENT ---------------- */

function TabContent({
  activeTab,
  caseKey,
}: {
  activeTab: string;
  caseKey: CaseKey;
}) {
  switch (activeTab) {
    case "Summary":
      return <SummaryTab caseKey={caseKey} />;

    default:
      return (
        <div
          style={{
            background: "white",
            border: "1px solid #dbe7e5",
            borderRadius: 12,
            padding: 20,
          }}
        >
          <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>
            {activeTab}
          </div>
          <div style={{ color: "#475569", lineHeight: 1.6 }}>
            This tab is not wired yet. We’ll migrate it soon.
          </div>
        </div>
      );
  }
}
