"use client";

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

  return (
    <ChartShell
      header={<Header />}
      tabs={TABS}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      <TabContent activeTab={activeTab} />
    </ChartShell>
  );
}

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

function TabContent({ activeTab }: { activeTab: string }) {
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
        {/* Placeholder content — we will replace this with your real logic */}
        This is the <strong>{activeTab}</strong> tab. Your full simulation logic
        will be plugged in here as we migrate each section safely from V1.
      </div>
    </div>
  );
}

