export default function Home() {
  return (
    <main style={{
      fontFamily: "Arial, sans-serif",
      padding: "40px",
      maxWidth: "1100px",
      margin: "auto",
      color: "white",
      backgroundColor: "black"
    }}>

      <h1 style={{fontSize: "48px", marginBottom: "10px"}}>
        NurseBridge Consulting
      </h1>

      <h2 style={{color:"#9ca3af", marginBottom:"30px"}}>
        Clinical Informatics • EHR Optimization • Nursing Preceptorship
      </h2>

      <p style={{fontSize:"20px", lineHeight:"1.6"}}>
        Founded by <strong>Dr. Bernadette Amao, DNP</strong>, NurseBridge Consulting helps
        clinicians and healthcare organizations improve workflow efficiency,
        optimize Electronic Health Record systems, and mentor nurses transitioning
        into clinical informatics careers.
      </p>

      <br/>

      <h2 style={{marginTop:"40px"}}>Our Services</h2>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit, minmax(250px,1fr))",
        gap:"20px",
        marginTop:"20px"
      }}>

        <div style={{border:"1px solid #444", padding:"20px", borderRadius:"10px"}}>
          <h3>EHR Workflow Optimization</h3>
          <p>Improve clinician efficiency and reduce documentation burden.</p>
        </div>

        <div style={{border:"1px solid #444", padding:"20px", borderRadius:"10px"}}>
          <h3>Clinical Documentation Improvement</h3>
          <p>Enhance accuracy, compliance, and workflow integration.</p>
        </div>

        <div style={{border:"1px solid #444", padding:"20px", borderRadius:"10px"}}>
          <h3>Nursing Informatics Mentorship</h3>
          <p>Guidance for clinicians transitioning into informatics careers.</p>
        </div>

        <div style={{border:"1px solid #444", padding:"20px", borderRadius:"10px"}}>
          <h3>Graduate Informatics Preceptorship</h3>
          <p>Structured preceptorship opportunities for MSN and DNP students.</p>
        </div>

      </div>

      <h2 style={{marginTop:"60px"}}>About the Founder</h2>

      <p style={{fontSize:"18px", lineHeight:"1.6"}}>
        Dr. Bernadette Amao is a Doctor of Nursing Practice–prepared nurse and
        Epic-certified Clinical Informatics analyst with more than 12 years of
        experience supporting hospital systems, clinicians, and digital health
        initiatives.
      </p>

      <p style={{fontSize:"18px", lineHeight:"1.6"}}>
        Her work focuses on bridging the gap between bedside clinicians and
        healthcare technology while mentoring the next generation of informatics
        professionals.
      </p>

      <h2 style={{marginTop:"60px"}}>Contact</h2>

      <p style={{fontSize:"18px"}}>
        Email: <strong>info@nursebridgeconsulting.com</strong>
      </p>

      <p style={{color:"#9ca3af", marginTop:"60px"}}>
        © 2026 NurseBridge Consulting
      </p>

    </main>
  );
}
