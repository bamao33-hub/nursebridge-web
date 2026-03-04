export default function PreceptorshipPage() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", padding: "40px", maxWidth: "900px", margin: "auto" }}>
      <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>Preceptorship Inquiry</h1>
      <p style={{ color: "#9ca3af", marginTop: 0 }}>
        For MSN/DNP Nursing Informatics students seeking a structured preceptorship experience.
      </p>

      <div style={{ border: "1px solid #444", borderRadius: 12, padding: 20, marginTop: 24 }}>
        <h2 style={{ marginTop: 0 }}>Student Details</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget as HTMLFormElement;
            const data = new FormData(form);

            const fullName = String(data.get("fullName") || "");
            const email = String(data.get("email") || "");
            const phone = String(data.get("phone") || "");
            const school = String(data.get("school") || "");
            const program = String(data.get("program") || "");
            const startDate = String(data.get("startDate") || "");
            const hours = String(data.get("hours") || "");
            const availability = String(data.get("availability") || "");
            const goals = String(data.get("goals") || "");

            const subject = encodeURIComponent(`Preceptorship Inquiry — ${fullName}`);
            const body = encodeURIComponent(
              `Preceptorship Inquiry\n\n` +
              `Name: ${fullName}\n` +
              `Email: ${email}\n` +
              `Phone: ${phone}\n\n` +
              `School: ${school}\n` +
              `Program/Track: ${program}\n` +
              `Target start date: ${startDate}\n` +
              `Required hours: ${hours}\n` +
              `Availability: ${availability}\n\n` +
              `Learning goals / expectations:\n${goals}\n`
            );

            // Change this to your preferred inbox:
            const to = "info@nursebridgeconsulting.com";
            window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <label>
              Full name
              <input name="fullName" required style={inputStyle} />
            </label>

            <label>
              Email
              <input name="email" type="email" required style={inputStyle} />
            </label>

            <label>
              Phone (optional)
              <input name="phone" style={inputStyle} />
            </label>

            <label>
              School
              <input name="school" required style={inputStyle} />
            </label>

            <label>
              Program/Track
              <input name="program" placeholder="e.g., MSN Informatics / DNP Informatics" required style={inputStyle} />
            </label>

            <label>
              Target start date
              <input name="startDate" placeholder="e.g., May 2026" required style={inputStyle} />
            </label>

            <label>
              Required hours
              <input name="hours" placeholder="e.g., 120" required style={inputStyle} />
            </label>

            <label>
              Availability
              <input name="availability" placeholder="e.g., evenings/weekends" required style={inputStyle} />
            </label>
          </div>

          <label style={{ display: "block", marginTop: 14 }}>
            Learning goals / what you want to get out of this preceptorship
            <textarea name="goals" required rows={6} style={textareaStyle} />
          </label>

          <button type="submit" style={buttonStyle}>
            Submit Inquiry
          </button>

          <p style={{ color: "#9ca3af", marginTop: 12, fontSize: 14 }}>
            Submitting opens your email app with the details pre-filled. Send the email to complete your inquiry.
          </p>
        </form>
      </div>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  marginTop: 6,
  padding: "10px 12px",
  borderRadius: 10,
  border: "1px solid #444",
  background: "black",
  color: "white",
};

const textareaStyle: React.CSSProperties = {
  width: "100%",
  marginTop: 6,
  padding: "10px 12px",
  borderRadius: 10,
  border: "1px solid #444",
  background: "black",
  color: "white",
};

const buttonStyle: React.CSSProperties = {
  marginTop: 16,
  padding: "12px 16px",
  borderRadius: 12,
  border: "1px solid #444",
  background: "white",
  color: "black",
  fontWeight: 700,
  cursor: "pointer",
};
<div style={{ marginTop: 18 }}>
  <a
    href="/preceptorship"
    style={{
      display: "inline-block",
      padding: "12px 16px",
      borderRadius: 12,
      background: "white",
      color: "black",
      fontWeight: 700,
      textDecoration: "none",
      border: "1px solid #444",
    }}
  >
    Apply for Preceptorship
  </a>
</div>
