import React from 'react';
import { Cpu, CheckCircle2, ArrowRight, Server, Sparkles } from 'lucide-react';

export default function EquaAiSection({ onOpenDemo }) {
  const workflowSteps = [
    'Intelligent RFQ Automation',
    'AI-Powered Vendor Sourcing',
    'Automated Quotation Tracking',
    'Follow-Ups',
  ];

  const sourcingModes = [
    {
      title: 'Your vendors',
      desc: 'Source only from your approved supplier list.',
      color: '#F97316',
    },
    {
      title: 'Your vendors + Procucev network',
      desc: 'Widen competition with our verified suppliers.',
      color: '#0EA5E9',
    },
    {
      title: 'Managed sourcing',
      desc: "Procucev's team handles supplier onboarding, strategic sourcing and the deal from start to finish.",
      color: '#0C4A6E',
    },
  ];

  const enterpriseFeatures = [
    'End-to-end encrypted',
    'API access',
    'Single sign-on',
    'Role-based access',
    'Supplier KYC & performance tracking',
    'Multi-level approvals',
    'Full audit trail',
    'Spend analytics',
  ];

  return (
    <section className="v2-equa-section section" id="equa-ai">
      <div className="container">

        {/* Header */}
        <div className="v2-section-header text-center">
          <div className="badge-tag-pill">
            <Cpu size={14} style={{ color: '#0EA5E9' }} /> eQua AI Enterprise Platform
          </div>
          <h2 className="v2-section-title">
            Your own AI procurement engine, <br />
            <span style={{ color: '#F97316', fontStyle: 'italic' }}>inside your workflow</span>
          </h2>
          <p className="v2-section-desc">
            eQua AI is a private procurement platform for enterprise buying teams. Send RFQs and
            BOQs by email, and eQua AI reads them, chases suppliers for quotes, builds the
            comparison and routes it for approval — all the way to a purchase order.
          </p>
        </div>

        {/* Workflow Pipeline */}
        <div className="equa-pipeline-box">
          <h3 className="equa-pipe-label">AI Automated End-to-End Workflow Pipeline</h3>
          <div className="equa-pipe-grid">
            {workflowSteps.map((step, idx) => (
              <div key={idx} className="equa-pipe-card">
                <span className="equa-pipe-txt">{step}</span>
              </div>
            ))}
          </div>
        </div>



        {/* Enterprise Features Box */}
        <div className="equa-ent-box">
          <div className="equa-ent-header">
            <div>
              <span className="qua-badge blue" style={{ marginBottom: '8px', display: 'inline-flex' }}>
                Enterprise Ready
              </span>
              <h3 className="equa-ent-h">Built for Enterprise Security &amp; Scale</h3>
            </div>

          </div>
          <div className="equa-ent-grid">
            {enterpriseFeatures.map((feat, idx) => (
              <div key={idx} className="equa-ent-pill">
                <CheckCircle2 size={15} style={{ color: '#10B981', flexShrink: 0 }} />
                <span>{feat}</span>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '28px' }}>
            <button onClick={onOpenDemo} className="btn btn-primary btn-lg" id="equa-demo-btn">
              Book an eQua AI Demo <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>

      <style>{`
        .v2-equa-section {
          background: #ffffff;
          border-top: 1px solid #E2E8F0;
        }

        /* Pipeline */
        .equa-pipeline-box {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 24px;
          padding: 32px;
          margin-bottom: 40px;
        }
        .equa-pipe-label {
          font-size: 0.78rem; font-weight: 700;
          color: #94A3B8; text-transform: uppercase;
          letter-spacing: 1px; margin-bottom: 20px;
          text-align: center;
        }
        .equa-pipe-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }
        .equa-pipe-card {
          background: #ffffff;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          padding: 16px 10px;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center; text-align: center;
          gap: 10px;
          box-shadow: 0 1px 4px rgba(0,0,0,0.04);
          transition: border-color 0.2s;
        }
        .equa-pipe-card:hover { border-color: #0EA5E9; }
        .equa-pipe-num {
          width: 26px; height: 26px; border-radius: 50%;
          background: rgba(249,115,22,0.12);
          border: 1px solid rgba(249,115,22,0.35);
          color: #EA6C00; font-weight: 900;
          font-size: 0.78rem;
          display: flex; align-items: center; justify-content: center;
        }
        .equa-pipe-txt {
          font-size: 0.75rem; font-weight: 600;
          color: #334155; line-height: 1.35;
        }

        /* Sourcing modes */
        .equa-modes-block { margin-bottom: 40px; }
        .equa-modes-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .equa-mode-card {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 28px;
          transition: all 0.3s ease;
        }
        .equa-mode-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 28px rgba(12,74,110,0.09);
          background: #ffffff;
        }
        .equa-mode-num {
          font-size: 1.25rem; font-weight: 900;
          display: block; margin-bottom: 12px;
        }
        .equa-mode-h {
          font-size: 1.15rem; font-weight: 800;
          color: #0C4A6E; margin-bottom: 8px;
        }
        .equa-mode-p {
          font-size: 0.9rem; color: #64748B; line-height: 1.6;
        }

        /* Enterprise box */
        .equa-ent-box {
          background: linear-gradient(135deg, #0C4A6E 0%, #063554 100%);
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 16px 40px rgba(12,74,110,0.18);
        }
        .equa-ent-header {
          display: flex; align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 24px; padding-bottom: 20px;
          border-bottom: 1px solid rgba(255,255,255,0.12);
          flex-wrap: wrap; gap: 16px;
        }
        .equa-ent-h {
          font-size: 1.7rem; font-weight: 800;
          color: #ffffff; margin-top: 8px;
        }
        .equa-azure-chip {
          display: flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,0.10);
          border: 1px solid rgba(255,255,255,0.15);
          padding: 8px 16px; border-radius: 12px;
          font-size: 0.82rem; font-weight: 600;
          color: #BAE6FD; white-space: nowrap;
        }
        .equa-ent-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }
        .equa-ent-pill {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          padding: 11px 14px; border-radius: 10px;
          display: flex; align-items: center;
          gap: 9px; font-size: 0.83rem;
          font-weight: 600; color: #F0F9FF;
        }

        /* Badge reuse */
        .qua-badge.blue {
          background: rgba(14,165,233,0.10);
          color: #0284C7;
          border: 1px solid rgba(14,165,233,0.25);
          font-size: 0.72rem; font-weight: 800;
          padding: 4px 12px; border-radius: 999px;
          text-transform: uppercase; letter-spacing: 0.4px;
        }

        @media (max-width: 992px) {
          .equa-pipe-grid { grid-template-columns: repeat(2, 1fr); }
          .equa-modes-grid { grid-template-columns: 1fr; }
          .equa-ent-grid  { grid-template-columns: repeat(2, 1fr); }
          .equa-ent-box   { padding: 28px 20px; }
        }
      `}</style>
    </section>
  );
}
