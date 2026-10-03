import React from 'react';
import { ArrowUpRight, Heart, ShieldCheck, Mail, Phone, MapPin, Globe, Share2, FileText } from 'lucide-react';

export default function Footer({ onOpenDemo }) {
  return (
    <footer className="v2-footer">
      <div className="container">

        {/* CTA Banner */}
        <div className="v2-footer-banner">
          <div className="v2-banner-left">
            <span className="v2-banner-badge">
              <Heart size={12} style={{ color: '#F97316' }} /> Made with the Love of Procurement
            </span>
            <h3 className="v2-banner-h">Ready to automate your source-to-pay workflow?</h3>
            <p className="v2-banner-p">
              Saving at procurement is the direct profit for company. Join 500+ Cr enterprise leaders
              operating with zero human intervention.
            </p>
          </div>
          <button className="btn btn-primary btn-lg v2-banner-btn" onClick={onOpenDemo} id="footer-demo-btn">
            Request a Live Demo <ArrowUpRight size={18} />
          </button>
        </div>

        {/* Footer Columns */}
        <div className="v2-footer-grid">

          {/* Brand column */}
          <div className="v2-fcol v2-fcol-brand">
            <div className="v2-footer-logo-box">
              <img src="/procucev-logo.png" alt="Procucev Logo" className="v2-footer-logo" />
            </div>
            <p className="v2-footer-brand-desc">
              Procucev is India's premier autonomous procurement & sourcing platform. We empower
              retail, e-commerce, and consumer brands with AI-driven PR-to-Comparison automation.
            </p>
            <div className="v2-footer-contacts">
              <div className="v2-fc-row">
                <MapPin size={13} style={{ color: '#0EA5E9', flexShrink: 0 }} />
                <span>Kundalahalli, Bengaluru · Gurugram · Mumbai</span>
              </div>
              <div className="v2-fc-row">
                <Mail size={13} style={{ color: '#0EA5E9', flexShrink: 0 }} />
                <a href="mailto:info@procucev.com">info@procucev.com</a>
              </div>
              <div className="v2-fc-row">
                <Phone size={13} style={{ color: '#0EA5E9', flexShrink: 0 }} />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </div>
            </div>
          </div>

          <div className="v2-fcol">
            <h4 className="v2-ftitle">Platform</h4>
            <ul className="v2-flinks">
              <li><a href="#">Procucev Overview</a></li>
              <li><a href="#qua-ai">QUA AI Agent</a></li>
              <li><a href="#qua-ai">Autonomous RFQ</a></li>
              <li><a href="#consulting">ROI & Profit Calculator</a></li>
              <li><a href="#contact">Integrations & API</a></li>
            </ul>
          </div>

          <div className="v2-fcol">
            <h4 className="v2-ftitle">Capabilities</h4>
            <ul className="v2-flinks">
              <li><a href="#qua-ai">Intake & Orchestration</a></li>
              <li><a href="#consulting">Strategic Sourcing</a></li>
              <li><a href="#equa-ai">Supplier Management</a></li>
              <li><a href="#equa-ai">Contract Analysis</a></li>
              <li><a href="#equa-ai">Risk & Compliance</a></li>
              <li><a href="#equa-ai">Invoice Duplicate Check</a></li>
            </ul>
          </div>

          <div className="v2-fcol">
            <h4 className="v2-ftitle" style={{ color: '#0EA5E9' }}>Tech & Company</h4>
            <ul className="v2-flinks">
              <li><a href="#about">About Procucev</a></li>
              <li><a href="#consulting">Consulting Services</a></li>
              <li><a href="#qua-ai">QUA AI Platform</a></li>
              <li><a href="#clients">Our Clients</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="v2-fcol v2-fcol-app">
            <span className="v2-app-tag">Get the app</span>
            <h5 className="v2-app-title">Procucev Mobile</h5>
            <p className="v2-app-desc">
              Download the mobile app to have visibility across all RFQs, contract approvals,
              and supplier quotes anywhere.
            </p>
            <button className="btn btn-ghost" style={{ fontSize: '0.82rem', padding: '8px 16px' }} onClick={onOpenDemo}>
              Request a Demo
            </button>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="v2-footer-bottom">
          <div className="v2-fb-left">
            <span>© Procucev 2026. All rights reserved.</span>
            <span className="v2-fb-sep">|</span>
            <span className="v2-fb-cert">
              <ShieldCheck size={13} style={{ color: '#10B981' }} /> Enterprise ISO/IEC 27001 Certified
            </span>
          </div>
          <div className="v2-fb-mid">
            <a href="#">Security</a>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Settings</a>
          </div>
          <div className="v2-fb-right">
            <a href="#" className="v2-social-btn" aria-label="Website"><Globe size={15} /></a>
            <a href="#" className="v2-social-btn" aria-label="Share"><Share2 size={15} /></a>
            <a href="#" className="v2-social-btn" aria-label="Docs"><FileText size={15} /></a>
          </div>
        </div>

      </div>

      <style>{`
        .v2-footer {
          background: #0C4A6E;
          color: rgba(255,255,255,0.80);
          padding: 60px 0 0;
          border-top: 3px solid #F97316;
        }

        /* CTA Banner */
        .v2-footer-banner {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 20px;
          padding: 32px 36px;
          margin-bottom: 50px;
          display: flex; align-items: center;
          justify-content: space-between; gap: 24px;
          backdrop-filter: blur(8px);
        }
        .v2-banner-badge {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(249,115,22,0.20);
          border: 1px solid rgba(249,115,22,0.35);
          color: #FDBA74;
          font-size: 0.75rem; font-weight: 700;
          padding: 4px 12px; border-radius: 999px;
          text-transform: uppercase; margin-bottom: 8px;
        }
        .v2-banner-h {
          font-size: 1.75rem; font-weight: 800;
          color: #ffffff; margin-bottom: 6px;
        }
        .v2-banner-p {
          font-size: 0.88rem; color: #BAE6FD;
        }
        .v2-banner-btn { flex-shrink: 0; }

        /* Columns grid */
        .v2-footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1.5fr;
          gap: 32px;
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(255,255,255,0.12);
        }
        .v2-fcol { display: flex; flex-direction: column; }
        .v2-footer-logo-box {
          background: #ffffff;
          display: inline-block; padding: 6px 12px;
          border-radius: 10px; margin-bottom: 14px; width: fit-content;
        }
        .v2-footer-logo { height: 30px; width: auto; object-fit: contain; }
        .v2-footer-brand-desc {
          font-size: 0.82rem; color: #BAE6FD;
          line-height: 1.65; margin-bottom: 16px;
        }
        .v2-footer-contacts { display: flex; flex-direction: column; gap: 7px; font-size: 0.78rem; }
        .v2-fc-row { display: flex; align-items: flex-start; gap: 7px; color: #BAE6FD; }
        .v2-fc-row a { color: #BAE6FD; text-decoration: none; transition: color 0.2s; }
        .v2-fc-row a:hover { color: #F97316; }

        .v2-ftitle {
          font-size: 0.78rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 1px;
          color: rgba(255,255,255,0.70); margin-bottom: 14px;
        }
        .v2-flinks { list-style: none; display: flex; flex-direction: column; gap: 9px; }
        .v2-flinks a {
          font-size: 0.82rem; color: rgba(255,255,255,0.60);
          text-decoration: none; transition: color 0.2s;
        }
        .v2-flinks a:hover { color: #F97316; }

        /* App card */
        .v2-fcol-app {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 14px; padding: 18px;
          justify-content: space-between;
        }
        .v2-app-tag {
          font-size: 0.68rem; text-transform: uppercase;
          letter-spacing: 1px; color: #7DD3FC; font-weight: 700;
        }
        .v2-app-title {
          font-size: 0.92rem; color: #ffffff;
          font-weight: 700; margin: 4px 0 6px;
        }
        .v2-app-desc {
          font-size: 0.76rem; color: #BAE6FD;
          line-height: 1.5; margin-bottom: 14px; flex: 1;
        }

        /* Bottom bar */
        .v2-footer-bottom {
          display: flex; align-items: center;
          justify-content: space-between; flex-wrap: wrap;
          gap: 16px; padding: 24px 0;
          font-size: 0.78rem; color: rgba(255,255,255,0.45);
        }
        .v2-fb-left { display: flex; align-items: center; gap: 10px; }
        .v2-fb-sep { color: rgba(255,255,255,0.2); }
        .v2-fb-cert { display: flex; align-items: center; gap: 6px; }
        .v2-fb-mid { display: flex; align-items: center; gap: 16px; }
        .v2-fb-mid a {
          color: rgba(255,255,255,0.50); text-decoration: none; transition: color 0.2s;
        }
        .v2-fb-mid a:hover { color: #F97316; }
        .v2-fb-right { display: flex; align-items: center; gap: 6px; }
        .v2-social-btn {
          width: 30px; height: 30px; border-radius: 50%;
          background: rgba(255,255,255,0.10);
          color: rgba(255,255,255,0.60);
          display: flex; align-items: center; justify-content: center;
          text-decoration: none; transition: all 0.2s;
        }
        .v2-social-btn:hover {
          background: #F97316; color: #fff;
        }

        @media (max-width: 1100px) {
          .v2-footer-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 768px) {
          .v2-footer-banner { flex-direction: column; text-align: center; }
          .v2-footer-grid { grid-template-columns: 1fr; }
          .v2-footer-bottom { flex-direction: column; align-items: center; text-align: center; }
        }
      `}</style>
    </footer>
  );
}
