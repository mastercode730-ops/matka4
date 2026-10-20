import React from "react";
import { SITE_NAME, SITE_DOMAIN, WHATSAPP_URL, WHATSAPP_NUMBER } from "../constants";

export default function Disclaimer({ onBack }) {
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
            <h1 style={{ fontSize: "26px", fontWeight: 900, color: "#f87171", margin: 0 }}>
              Disclaimer (अस्वीकरण)
            </h1>
            <p style={{ color: "var(--dim, #a1a1aa)", fontSize: "13px", marginTop: "4px" }}>
              Legal & Informational Disclaimer &bull; {SITE_NAME} ({SITE_DOMAIN})
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

        {/* Warning Alert Box */}
        <div
          style={{
            background: "rgba(239, 68, 68, 0.15)",
            border: "1px solid rgba(239, 68, 68, 0.4)",
            borderRadius: "12px",
            padding: "16px",
            marginBottom: "24px",
          }}
        >
          <div style={{ color: "#fca5a5", fontWeight: 800, fontSize: "15px", marginBottom: "6px" }}>
            ⚠️ महत्वपूर्ण चेतावनी / IMPORTANT LEGAL NOTICE
          </div>
          <p style={{ color: "#fecaca", fontSize: "13px", margin: 0, lineHeight: 1.6 }}>
            सट्टा / मटका खेलना या जुआ खेलना आपके राज्य या देश में गैर-कानूनी और दंडनीय अपराध हो सकता है। हमारी वेबसाइट किसी भी प्रकार के सट्टा या जुआ खेलने का समर्थन या बढ़ावा नहीं देती है। यह पोर्टल केवल सूचना और रिकॉर्ड संग्रह के उद्देश्य से संचालित है।
          </p>
        </div>

        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "18px", color: "#ffffff", fontWeight: 700, marginBottom: "8px" }}>
            1. Purely Informational Purpose
          </h2>
          <p style={{ fontSize: "14px", color: "#d4d4d8" }}>
            The content provided on <strong>{SITE_DOMAIN}</strong> is purely for informational, archival, and entertainment purposes. We collect and display numerical results published openly across various public forums, market feeds, and historical charts. We do not operate or promote any illegal wagering syndicates.
          </p>
        </section>

        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "18px", color: "#ffffff", fontWeight: 700, marginBottom: "8px" }}>
            2. Compliance with Indian & Local Laws
          </h2>
          <p style={{ fontSize: "14px", color: "#d4d4d8" }}>
            Under the Public Gambling Act of 1867 and respective state amendments across India and other jurisdictions, betting and gambling activities may be legally prohibited. If gambling is banned in your territory or state, you are instructed to exit this website immediately. Users are strictly bound by their own local jurisdictions.
          </p>
        </section>

        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "18px", color: "#ffffff", fontWeight: 700, marginBottom: "8px" }}>
            3. No Financial Advice & Zero Liability
          </h2>
          <p style={{ fontSize: "14px", color: "#d4d4d8" }}>
            Any guessing numbers, leak jodi hints, Haruf formulas, or predictions shared on this site, forums, or linked WhatsApp groups are purely hypothetical guesses based on numerical patterns. We give <strong>zero guarantee</strong> of accuracy. Users engaging in financial transactions with any third-party individuals or bookmakers do so entirely at their own risk and sole responsibility.
          </p>
        </section>

        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "18px", color: "#ffffff", fontWeight: 700, marginBottom: "8px" }}>
            4. Third-Party Advertisements & External Links
          </h2>
          <p style={{ fontSize: "14px", color: "#d4d4d8" }}>
            Our website displays banners, promotional notices, and links directing to external platforms, WhatsApp accounts, or third-party web apps (e.g., login/register links). We do not control, endorse, or verify the legitimacy or operations of these external parties.
          </p>
        </section>

        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "18px", color: "#ffffff", fontWeight: 700, marginBottom: "8px" }}>
            5. User Discretion & Acceptance
          </h2>
          <p style={{ fontSize: "14px", color: "#d4d4d8" }}>
            By continuing to browse this site, you certify that you are over 18 years of age, are accessing this information voluntarily for educational or news archival interest, and unconditionally indemnify <strong>{SITE_NAME}</strong> from any legal claims, liabilities, or losses.
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
