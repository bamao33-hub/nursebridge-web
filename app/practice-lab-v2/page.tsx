"use client";

import { useState } from "react";
import ChartShell from "./ChartShell";
import SummaryTab from "./chart/tabs/SummaryTab";
import { CASES, CaseKey } from "./chart/cases";

/* --------------- TABS --------------- */

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

/* --------------- PAGE --------------- */

export default function ChartPage() {
  const [activeTab, setActiveTab] = useState("Summary");
  const [caseKey] = useState<CaseKey>("pneumonia");

  return (
    <ChartShell
      header={<Header />}
      tabs={TABS}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      <TabContent activeTab={activeTab} caseKey={caseKey} />
    </ChartShell>
  );
}

/* --------------- TAB CONTENT --------------- */

function TabContent({ activeTab, caseKey }: { activeTab: string; caseKey: CaseKey }) {
  switch (activeTab) {
    case "Summary":
      return <SummaryTab caseData={CASES[caseKey]} />;
    default:
      return <div style={{ padding: 20 }}>Coming soon...</div>;
  }
}

/* --------------- HEADER --------------- */

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
