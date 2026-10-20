import React from "react";
import { SITE_NAME, SITE_DOMAIN, WHATSAPP_URL, WHATSAPP_NUMBER } from "../constants";

export default function TermsConditions({ onBack }) {
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
            <h1 style={{ fontSize: "26px", fontWeight: 900, color: "var(--gold, #fbbf24)", margin: 0 }}>
              Terms & Conditions
            </h1>
            <p style={{ color: "var(--dim, #a1a1aa)", fontSize: "13px", marginTop: "4px" }}>
              Terms of Service & Usage &bull; {SITE_NAME} ({SITE_DOMAIN})
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
            1. Agreement to Terms
          </h2>
          <p style={{ fontSize: "14px", color: "#d4d4d8" }}>
            By accessing or using <strong>{SITE_DOMAIN}</strong> (operated under <strong>{SITE_NAME}</strong>), you agree to comply with and be bound by these Terms and Conditions. If you do not accept or agree to any part of these terms, you must discontinue using our website immediately.
          </p>
        </section>

        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "18px", color: "#ffffff", fontWeight: 700, marginBottom: "8px" }}>
            2. Informational & Entertainment Use Only
          </h2>
          <p style={{ fontSize: "14px", color: "#d4d4d8" }}>
            All content, including live draw numbers, monthly record charts, numbers, and historical archive results displayed on this site, are compiled strictly for <strong>informational, archival, and entertainment purposes</strong>. We do not operate, organise, or host gambling, betting, or wagering games on this site.
          </p>
        </section>

        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "18px", color: "#ffffff", fontWeight: 700, marginBottom: "8px" }}>
            3. Age & Jurisdiction Compliance
          </h2>
          <p style={{ fontSize: "14px", color: "#d4d4d8", marginBottom: "8px" }}>
            You represent and warrant that:
          </p>
          <ul style={{ paddingLeft: "20px", fontSize: "14px", color: "#d4d4d8" }}>
            <li style={{ marginBottom: "6px" }}>
              You are at least 18 years of age (or the legal age of majority in your jurisdiction).
            </li>
            <li style={{ marginBottom: "6px" }}>
              You comply with all local, state, and national laws governing online content, gaming, and gambling in your region. Gambling or betting may be strictly illegal in certain states or jurisdictions; you are solely responsible for ensuring your compliance.
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "18px", color: "#ffffff", fontWeight: 700, marginBottom: "8px" }}>
            4. Limitation of Financial Liability
          </h2>
          <p style={{ fontSize: "14px", color: "#d4d4d8" }}>
            Under no circumstances shall <strong>{SITE_NAME}</strong>, its founders, operators, or affiliates be liable for any direct, indirect, incidental, punitive, or consequential financial losses, damages, or claims arising from the use of our site, reliance on any published numbers or formulas, or transactions carried out with external third-party bookmakers/khaaival.
          </p>
        </section>

        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "18px", color: "#ffffff", fontWeight: 700, marginBottom: "8px" }}>
            5. Intellectual Property & Prohibited Activities
          </h2>
          <p style={{ fontSize: "14px", color: "#d4d4d8" }}>
            Users agree not to scrape, reverse engineer, flood, DDoS, or attempt unauthorized exploitation of the site’s APIs, assets, or software architecture. All graphic designs, styling, logos, and custom layout codes remain protected assets.
          </p>
        </section>

        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "18px", color: "#ffffff", fontWeight: 700, marginBottom: "8px" }}>
            6. Modifications to Terms & Services
          </h2>
          <p style={{ fontSize: "14px", color: "#d4d4d8" }}>
            We reserve the right to modify, suspend, or update these terms and any portion of the site at any time without prior written notice. Continued use of the platform constitutes acceptance of revised terms.
          </p>
        </section>

        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "18px", color: "#ffffff", fontWeight: 700, marginBottom: "8px" }}>
            7. Contact Support
          </h2>
          <p style={{ fontSize: "14px", color: "#d4d4d8" }}>
            For queries concerning these terms, contact our team on WhatsApp:{" "}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold, #fbbf24)", fontWeight: 700 }}>
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
