import React from "react";
import { SITE_NAME, SITE_DOMAIN, WHATSAPP_URL, WHATSAPP_NUMBER } from "../constants";

export default function PrivacyPolicy({ onBack }) {
  return (
    <div className="wrap" style={{ maxWidth: "860px", margin: "24px auto", padding: "0 16px" }}>
      <div
        style={{
          background: "var(--bg-card, #18181b)",
          border: "1px solid var(--line, rgba(255, 255, 255, 0.12))",
          borderRadius: "16px",
          padding: "28px 24px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
          color: "#e4e4e7",
          lineHeight: 1.7,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", borderBottom: "1px solid var(--line, rgba(255,255,255,0.12))", paddingBottom: "16px", flexWrap: "wrap", gap: "10px" }}>
          <div>
            <h1 style={{ fontSize: "26px", fontWeight: 900, color: "var(--emerald, #10b981)", margin: 0 }}>
              Privacy Policy
            </h1>
            <p style={{ color: "var(--dim, #a1a1aa)", fontSize: "13px", marginTop: "4px" }}>
              Last Updated: 2026 &bull; {SITE_NAME} ({SITE_DOMAIN})
            </p>
          </div>
          <button
            onClick={onBack}
            className="life-btn"
            style={{ padding: "8px 16px", fontSize: "13px", cursor: "pointer" }}
          >
            ← Back to Home
          </button>
        </div>

        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "18px", color: "#ffffff", fontWeight: 700, marginBottom: "8px" }}>
            1. Introduction & Overview
          </h2>
          <p style={{ fontSize: "14px", color: "#d4d4d8" }}>
            Welcome to <strong>{SITE_NAME}</strong> ("we", "our", or "us"). We operate <strong>{SITE_DOMAIN}</strong>. We value your privacy and are committed to protecting any personal data you may provide or that is automatically collected while accessing our informational portal. This Privacy Policy details how data is handled.
          </p>
        </section>

        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "18px", color: "#ffffff", fontWeight: 700, marginBottom: "8px" }}>
            2. Information We Collect
          </h2>
          <p style={{ fontSize: "14px", color: "#d4d4d8", marginBottom: "8px" }}>
            We collect minimal information necessary to deliver and improve our real-time data services:
          </p>
          <ul style={{ paddingLeft: "20px", fontSize: "14px", color: "#d4d4d8" }}>
            <li style={{ marginBottom: "6px" }}>
              <strong>Log & Technical Data:</strong> Browser type, operating system, IP address, device specs, pages viewed, and timestamps collected via standard web server logs.
            </li>
            <li style={{ marginBottom: "6px" }}>
              <strong>Communication Records:</strong> Queries or contact messages sent voluntarily through WhatsApp helpline or third-party links.
            </li>
            <li style={{ marginBottom: "6px" }}>
              <strong>Cookies & Local Storage:</strong> Technical cookies and local storage tokens used solely to preserve preferences (such as charts, search filters, and page states).
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "18px", color: "#ffffff", fontWeight: 700, marginBottom: "8px" }}>
            3. How We Use Information
          </h2>
          <p style={{ fontSize: "14px", color: "#d4d4d8" }}>
            Information collected is strictly utilized to:
          </p>
          <ul style={{ paddingLeft: "20px", fontSize: "14px", color: "#d4d4d8" }}>
            <li>Provide rapid, reliable uptime for live draw numbers and historical archive charts.</li>
            <li>Monitor server traffic patterns to prevent DDoS attacks, scraping, and service misuse.</li>
            <li>Respond to technical feedback and customer support questions via our WhatsApp channels.</li>
          </ul>
        </section>

        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "18px", color: "#ffffff", fontWeight: 700, marginBottom: "8px" }}>
            4. Third-Party Links & External Platforms
          </h2>
          <p style={{ fontSize: "14px", color: "#d4d4d8" }}>
            Our platform contains interactive links to external services, including WhatsApp ({WHATSAPP_NUMBER}), Telegram channels, and partner entertainment/registration platforms. We do not control and are not responsible for the privacy practices, content, or policies of third-party websites. Users are encouraged to review the respective privacy statements of external links.
          </p>
        </section>

        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "18px", color: "#ffffff", fontWeight: 700, marginBottom: "8px" }}>
            5. Cookies & Tracking Technologies
          </h2>
          <p style={{ fontSize: "14px", color: "#d4d4d8" }}>
            We may use cookies and web beacons to enhance your user experience. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent. However, some aspects of the service may not function optimally without essential cookies.
          </p>
        </section>

        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "18px", color: "#ffffff", fontWeight: 700, marginBottom: "8px" }}>
            6. Children's Privacy
          </h2>
          <p style={{ fontSize: "14px", color: "#d4d4d8" }}>
            Our portal is strictly intended for adult individuals who are at least 18 years of age (or the legal age of majority in their jurisdiction). We do not knowingly collect personal data from minors under 18.
          </p>
        </section>

        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "18px", color: "#ffffff", fontWeight: 700, marginBottom: "8px" }}>
            7. Contact Us
          </h2>
          <p style={{ fontSize: "14px", color: "#d4d4d8" }}>
            If you have questions regarding this Privacy Policy, you can reach out via our 24x7 WhatsApp support:{" "}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ color: "var(--emerald, #10b981)", fontWeight: 700 }}>
              {WHATSAPP_NUMBER}
            </a>.
          </p>
        </section>

        <div style={{ textAlign: "center", marginTop: "30px", paddingTop: "16px", borderTop: "1px solid var(--line, rgba(255,255,255,0.12))" }}>
          <button
            onClick={onBack}
            className="btn-wa-life"
            style={{ padding: "10px 24px", fontSize: "14px", cursor: "pointer" }}
          >
            ← Return to Live Results
          </button>
        </div>
      </div>
    </div>
  );
}
