import React from 'react';
import { ArrowUpRight, Heart, ShieldCheck, Mail, Phone, MapPin, Globe, Share2, FileText } from 'lucide-react';

export default function Footer({ onOpenDemo }) {
  return (
    <footer className="level-footer">
      <div className="container">
        
        {/* Top CTA Banner inside Footer */}
        <div className="footer-cta-banner">
          <div className="cta-left">
            <span className="badge-blue mb-2">
              <Heart size={12} className="fill-cyan" /> Made with the Love of Procurement
            </span>
            <h3 className="cta-title">
              Ready to automate your source-to-pay workflow?
            </h3>
            <p className="cta-desc">
              Saving at procurement is the direct profit for company. Join 500+ Cr enterprise leaders operating with zero human intervention.
            </p>
          </div>
          <button className="btn btn-blue btn-lg cta-btn" onClick={onOpenDemo}>
            Request a Live Demo <ArrowUpRight size={18} />
          </button>
        </div>

        {/* Levelpath Footer Columns Grid */}
        <div className="footer-grid">
          
          {/* Brand Column */}
          <div className="f-col col-brand">
            <div className="brand-logo-card">
              <img src="/procucev-logo.png" alt="Procucev Logo" className="f-logo-img" />
            </div>
            <p className="f-brand-desc">
              Procucev is India's premier autonomous procurement & sourcing platform. We empower retail, e-commerce, and consumer brands with AI-driven PR-to-Comparison automation.
            </p>
            <div className="f-contact-list">
              <div className="c-item">
                <MapPin size={14} className="c-icon" />
                <span>Kundalahalli, Bengaluru • Gurugram • Mumbai</span>
              </div>
              <div className="c-item">
                <Mail size={14} className="c-icon" />
                <a href="mailto:info@procucev.com">info@procucev.com</a>
              </div>
              <div className="c-item">
                <Phone size={14} className="c-icon" />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </div>
            </div>
          </div>

          {/* Platform Column */}
          <div className="f-col">
            <h4 className="f-title">Platform</h4>
            <ul className="f-links">
              <li><a href="#">Procucev Overview</a></li>
              <li><a href="#autonomous">QUA AI Agent</a></li>
              <li><a href="#autonomous">Autonomous RFQ</a></li>
              <li><a href="#calculator">ROI & Profit Calculator</a></li>
              <li><a href="#industries">Integrations & API</a></li>
            </ul>
          </div>

          {/* Capabilities Column */}
          <div className="f-col">
            <h4 className="f-title">Capabilities</h4>
            <ul className="f-links">
              <li><a href="#autonomous">Intake & Orchestration</a></li>
              <li><a href="#capabilities">Strategic Sourcing</a></li>
              <li><a href="#capabilities">Supplier Management</a></li>
              <li><a href="#capabilities">Contract Analysis</a></li>
              <li><a href="#capabilities">Risk & Compliance</a></li>
              <li><a href="#autonomous">Invoice Duplicate Check</a></li>
            </ul>
          </div>

          {/* Tech & Company Column */}
          <div className="f-col">
            <h4 className="f-title highlight">Tech & Company</h4>
            <ul className="f-links">
              <li><a href="#about">About Procucev</a></li>
              <li><a href="#capabilities">Consulting Services</a></li>
              <li><a href="#autonomous">QUA AI Platform</a></li>
              <li><a href="#industries">Retail & E-commerce</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* App Card Column */}
          <div className="f-col col-app-card">
            <span className="app-tag">Get the app</span>
            <h5 className="app-title">Procucev Mobile</h5>
            <p className="app-desc">
              Download the mobile app to have visibility across all RFQs, contract approvals, and supplier quotes anywhere.
            </p>
            <button className="btn btn-white app-btn" onClick={onOpenDemo}>
              Request a Demo
            </button>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="footer-bottom-bar">
          <div className="b-left">
            <span>© Procucev 2026. All rights reserved.</span>
            <span className="b-sep">|</span>
            <span className="b-cert">
              <ShieldCheck size={14} className="text-green" /> Enterprise ISO/IEC 27001 Certified
            </span>
          </div>

          <div className="b-mid">
            <a href="#security">Security</a>
            <a href="#terms">Terms of Service</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#cookies">Cookie Settings</a>
          </div>

          <div className="b-right">
            <a href="#" className="s-icon-btn" aria-label="Globe"><Globe size={16} /></a>
            <a href="#" className="s-icon-btn" aria-label="Share"><Share2 size={16} /></a>
            <a href="#" className="s-icon-btn" aria-label="Docs"><FileText size={16} /></a>
          </div>
        </div>

      </div>

      <style>{`
        .level-footer {
          background: #07152e;
          color: #ffffff;
          padding: 60px 0 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-cta-banner {
          background: linear-gradient(135deg, #091e42 0%, #041026 100%);
          border-radius: 20px;
          padding: 32px 36px;
          margin-bottom: 50px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .cta-left {
          max-width: 650px;
        }
        .cta-title {
          font-family: var(--font-serif);
          font-size: 2rem;
          color: #ffffff;
          margin: 10px 0 6px;
          font-weight: 400;
        }
        .cta-desc {
          color: #cbd5e1;
          font-size: 0.9rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr repeat(3, 1fr) 1.5fr;
          gap: 32px;
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .f-col {
          display: flex;
          flex-direction: column;
        }

        .brand-logo-card {
          background: #ffffff;
          display: inline-block;
          padding: 6px 12px;
          border-radius: 8px;
          margin-bottom: 16px;
          width: fit-content;
        }
        .f-logo-img {
          height: 30px;
          width: auto;
          object-fit: contain;
        }

        .f-brand-desc {
          color: #94a3b8;
          font-size: 0.85rem;
          line-height: 1.6;
          margin-bottom: 18px;
        }

        .f-contact-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 0.8rem;
          color: #94a3b8;
        }
        .c-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .c-item a {
          color: #cbd5e1;
          text-decoration: none;
        }
        .c-item a:hover { color: #ffffff; }
        .c-icon { color: #38bdf8; }

        .f-title {
          font-size: 0.82rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #cbd5e1;
          margin-bottom: 16px;
        }
        .f-title.highlight { color: #38bdf8; }

        .f-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .f-links a {
          color: #94a3b8;
          font-size: 0.82rem;
          text-decoration: none;
          transition: var(--transition);
        }
        .f-links a:hover {
          color: #ffffff;
        }

        .col-app-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          padding: 18px;
          justify-content: space-between;
        }
        .app-tag {
          font-size: 0.68rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #38bdf8;
          font-weight: 700;
        }
        .app-title {
          font-size: 0.92rem;
          color: #ffffff;
          margin: 4px 0 6px;
        }
        .app-desc {
          font-size: 0.76rem;
          color: #94a3b8;
          line-height: 1.5;
          margin-bottom: 14px;
        }
        .app-btn {
          width: 100%;
          font-size: 0.8rem;
          padding: 8px;
          border-radius: 8px;
        }

        .footer-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 24px;
          font-size: 0.78rem;
          color: #64748b;
          flex-wrap: wrap;
          gap: 16px;
        }

        .b-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .b-sep { color: #334155; }
        .b-cert {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #94a3b8;
        }
        .text-green { color: #22c55e; }

        .b-mid {
          display: flex;
          align-items: center;
          gap: 18px;
        }
        .b-mid a {
          color: #94a3b8;
          text-decoration: none;
          transition: var(--transition);
        }
        .b-mid a:hover { color: #ffffff; }

        .b-right {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .s-icon-btn {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          color: #cbd5e1;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
          text-decoration: none;
        }
        .s-icon-btn:hover {
          background: #1d6bf3;
          color: #ffffff;
        }

        @media (max-width: 992px) {
          .footer-cta-banner {
            flex-direction: column;
            text-align: center;
          }
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .footer-bottom-bar {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
