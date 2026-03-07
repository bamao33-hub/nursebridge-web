"use client";

import Link from "next/link";

export default function ChartSimulation() {

const COLORS = {
  teal: "#0f766e",
  bg: "#f7faf9",
  card: "#ffffff",
  border: "#dbe7e5",
  text: "#0f172a",
  muted: "#475569",
  soft: "#ecf7f5"
};

return (

<main style={{
  fontFamily: 'ui-sans-serif, system-ui',
  backgroundColor: COLORS.bg,
  minHeight: "100vh"
}}>

{/* Header */}

<div style={{
  borderBottom:`1px solid ${COLORS.border}`,
  background:"#ffffff",
  padding:"10px 20px"
}}>

<div style={{maxWidth:1200, margin:"0 auto", display:"flex", justifyContent:"space-between", alignItems:"center"}}>

<div style={{fontWeight:800}}>
NurseBridge Practice Lab
</div>

<Link href="/practice-lab" style={{textDecoration:"none", color:COLORS.teal}}>
Back to Lab
</Link>

</div>
</div>


{/* Patient Header */}

<div style={{
borderBottom:`1px solid ${COLORS.border}`,
background:COLORS.soft,
padding:"14px 20px"
}}>

<div style={{maxWidth:1200, margin:"0 auto"}}>

<div style={{fontWeight:800,fontSize:18}}>
Maria Gonzalez
</div>

<div style={{fontSize:13,color:COLORS.muted}}>
DOB: 04/12/1972 • MRN: 847221 • Admit Dx: Pneumonia
</div>

</div>

</div>


{/* Workspace */}

<div style={{
maxWidth:1200,
margin:"0 auto",
display:"grid",
gridTemplateColumns:"240px 1fr",
gap:16,
padding:"20px"
}}>


{/* Navigation */}

<div style={{
border:`1px solid ${COLORS.border}`,
borderRadius:12,
background:"#fff",
padding:10
}}>

<div style={{fontWeight:700,marginBottom:8}}>Chart Navigation</div>

<div style={{display:"grid",gap:6,fontSize:14}}>

<div style={{padding:"6px 8px",background:COLORS.soft,borderRadius:6}}>Patient Summary</div>
<div style={{padding:"6px 8px"}}>Notes</div>
<div style={{padding:"6px 8px"}}>Flowsheets</div>
<div style={{padding:"6px 8px"}}>Orders</div>
<div style={{padding:"6px 8px"}}>Labs</div>

</div>

</div>


{/* Chart Area */}

<div style={{
border:`1px solid ${COLORS.border}`,
borderRadius:12,
background:"#fff",
padding:18
}}>

<h2 style={{marginTop:0}}>Patient Summary</h2>

<p style={{color:COLORS.muted,lineHeight:1.6}}>

Patient admitted with community acquired pneumonia.
Oxygen saturation initially 88% on room air.
Currently receiving IV antibiotics and oxygen therapy.

</p>


<div style={{
marginTop:20,
padding:12,
border:`1px dashed ${COLORS.border}`,
borderRadius:10
}}>

<b>Informatics Exercise</b>

<p style={{marginTop:6,color:COLORS.muted}}>

Review the patient summary above.

Question:
What documentation elements might be missing that could affect
clinical workflow or data quality?

</p>

</div>

</div>

</div>

</main>

);
}
