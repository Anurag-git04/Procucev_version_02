import React from 'react';
import { Cpu, Mail, Zap, ArrowRight, CheckCircle2, Package, Sparkles } from 'lucide-react';

export default function QuaAiSection({ onOpenDemo }) {
  const gmtSteps = [
    { num: '1', text: 'Send your requirement' },
    { num: '2', text: 'AI structures the RFQ' },
    { num: '3', text: 'Verified suppliers quote' },
    { num: '4', text: 'Compare and choose' },
  ];

  const categories = [
    'IT Consumables',
    'Electrical Equipment',
    'Packaging Material',
    'MRO & Spares',
    'Chemicals',
    'Pharma & Lab Supplies',
  ];

  return (
    <section className="v2-qua-section section" id="qua-ai">
      <div className="container">

        {/* Header */}
        <div className="v2-section-header text-center">
          <div className="badge-tag-pill">
            <Sparkles size={14} style={{ color: '#0EA5E9' }} /> Qua AI Marketplace
          </div>
          <h2 className="v2-section-title">
            India's AI-powered B2B marketplace <br />
            <span style={{ color: '#F97316', fontStyle: 'italic' }}>for buyers and suppliers</span>
          </h2>
          <p className="v2-section-desc">
            Qua AI matches what you need to buy with suppliers who can deliver it.
            Buyers use it free. Suppliers get qualified RFQs from real buyers.
          </p>
        </div>

        {/* GMT & BFS Cards */}
        <div className="qua-gmt-grid">

          {/* GMT Card */}
          <div className="qua-feat-card">
            <div className="qua-card-header">
              <span className="qua-badge orange">GMT — Get My Quote</span>
              <span className="qua-email-tag">
                <Mail size={13} style={{ color: '#F97316' }} /> RFQ@procucev.com
              </span>
            </div>
            <h3 className="qua-feat-title">Instant Structured RFQs</h3>
            <p className="qua-feat-desc">
              Email your requirement to{' '}
              <a href="mailto:RFQ@procucev.com" style={{ color: '#F97316', fontWeight: 700 }}>
                RFQ@procucev.com
              </a>{' '}
              or fill in a short form. Our AI turns it into a structured RFQ,
              sends it to matching verified suppliers and returns competitive quotes —
              usually within 24 hours. No phone follow-ups.
            </p>
            <h4 className="qua-steps-label">How It Works</h4>
            <div className="qua-steps-grid">
              {gmtSteps.map((s, i) => (
                <div key={i} className="qua-step-box">
                  <span className="qua-step-num" style={{ background: '#F97316' }}>{s.num}</span>
                  <span className="qua-step-txt">{s.text}</span>
                </div>
              ))}
            </div>
            <button onClick={onOpenDemo} className="btn btn-primary" style={{ marginTop: '20px', width: '100%' }} id="gmt-btn">
              Get My Quote Now <ArrowRight size={16} />
            </button>
          </div>

          {/* BFS Card */}
          <div className="qua-feat-card">
            <div className="qua-card-header">
              <span className="qua-badge blue">BFS — Buy From Stock</span>
              <span className="qua-email-tag">
                <Package size={13} style={{ color: '#0EA5E9' }} /> Ready Inventory
              </span>
            </div>
            <h3 className="qua-feat-title">Instant Surplus & Stock Clearing</h3>
            <p className="qua-feat-desc">
              Buy ready inventory, raw materials, equipment and consumables already in
              stock, for faster delivery. Suppliers can also list slow-moving or surplus
              stock and turn it into cash.
            </p>
            <h4 className="qua-steps-label">Categories We Cover</h4>
            <div className="qua-cats-grid">
              {categories.map((cat, i) => (
                <div key={i} className="qua-cat-box">
                  <span className="qua-cat-dot" />
                  <span className="qua-cat-txt">{cat}</span>
                </div>
              ))}
            </div>
            <button onClick={onOpenDemo} className="btn btn-ghost" style={{ marginTop: '20px', width: '100%' }} id="bfs-btn">
              Explore Ready Stock <ArrowRight size={16} />
            </button>
          </div>

        </div>

        {/* Buyer & Supplier Roles */}
        <div className="qua-role-grid">
          <div className="qua-role-card" style={{ borderTop: '3px solid #F97316' }}>
            <span className="qua-badge orange" style={{ marginBottom: '12px' }}>For Buyers</span>
            <h3 className="qua-role-h">Free and Unlimited Sourcing</h3>
            <p className="qua-role-p">
              Raise as many RFQs as you need, get quotes from verified suppliers
              and compare them on price, delivery and terms.
            </p>
            <button onClick={onOpenDemo} className="btn btn-primary" id="buyer-rfq-btn">
              I'm a Buyer: Raise an RFQ <ArrowRight size={16} />
            </button>
          </div>

          <div className="qua-role-card" style={{ borderTop: '3px solid #0EA5E9' }}>
            <span className="qua-badge blue" style={{ marginBottom: '12px' }}>For Suppliers</span>
            <h3 className="qua-role-h">Verified High-Intent Leads</h3>
            <p className="qua-role-p">
              Get real buyer RFQs in your category. Buy credit packs to download
              RFQs and send your quote. Clear idle stock through BFS.
            </p>
            <button onClick={onOpenDemo} className="btn btn-secondary" id="supplier-join-btn">
              I'm a Supplier: Join Qua AI <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>

      <style>{`
        .v2-qua-section {
          background: #F8FAFC;
          border-top: 1px solid #E2E8F0;
        }

        .qua-gmt-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
          margin-bottom: 40px;
        }
        .qua-feat-card {
          background: #ffffff;
          border: 1px solid #E2E8F0;
          border-radius: 24px;
          padding: 36px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 2px 12px rgba(0,0,0,0.05);
          transition: box-shadow 0.3s ease;
        }
        .qua-feat-card:hover {
          box-shadow: 0 12px 32px rgba(12,74,110,0.10);
        }
        .qua-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
          flex-wrap: wrap;
          gap: 8px;
        }
        .qua-badge {
          font-size: 0.72rem; font-weight: 800;
          padding: 4px 12px; border-radius: 999px;
          text-transform: uppercase; letter-spacing: 0.4px;
        }
        .qua-badge.orange {
          background: rgba(249,115,22,0.10);
          color: #EA6C00;
          border: 1px solid rgba(249,115,22,0.25);
        }
        .qua-badge.blue {
          background: rgba(14,165,233,0.10);
          color: #0284C7;
          border: 1px solid rgba(14,165,233,0.25);
        }
        .qua-email-tag {
          display: flex; align-items: center; gap: 5px;
          font-size: 0.78rem; color: #64748B; font-weight: 500;
        }
        .qua-feat-title {
          font-size: 1.5rem; font-weight: 800;
          color: #0C4A6E; margin-bottom: 10px;
        }
        .qua-feat-desc {
          font-size: 0.93rem; color: #475569;
          line-height: 1.65; margin-bottom: 20px;
          flex: 1;
        }
        .qua-steps-label {
          font-size: 0.72rem; font-weight: 700;
          color: #94A3B8; text-transform: uppercase;
          letter-spacing: 0.5px; margin-bottom: 10px;
        }
        .qua-steps-grid, .qua-cats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
        }
        .qua-step-box, .qua-cat-box {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 10px;
          padding: 9px 12px;
          display: flex; align-items: center; gap: 9px;
        }
        .qua-step-num {
          width: 22px; height: 22px; border-radius: 50%;
          color: #fff; font-weight: 900;
          font-size: 0.72rem; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
        }
        .qua-cat-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #0EA5E9; flex-shrink: 0;
        }
        .qua-step-txt, .qua-cat-txt {
          font-size: 0.8rem; font-weight: 600; color: #334155;
        }

        /* Role cards */
        .qua-role-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .qua-role-card {
          background: #ffffff;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 32px;
          display: flex; flex-direction: column;
          align-items: flex-start;
          gap: 12px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.04);
          transition: box-shadow 0.3s;
        }
        .qua-role-card:hover { box-shadow: 0 10px 28px rgba(12,74,110,0.10); }
        .qua-role-h {
          font-size: 1.35rem; font-weight: 800;
          color: #0C4A6E; margin: 0;
        }
        .qua-role-p {
          font-size: 0.92rem; color: #64748B;
          line-height: 1.65; flex: 1;
        }

        @media (max-width: 900px) {
          .qua-gmt-grid { grid-template-columns: 1fr; }
          .qua-role-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
