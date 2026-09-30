import React from 'react';
import { CheckCircle2, ShieldAlert, FileText, Cpu, Zap } from 'lucide-react';

export default function AutonomousSection() {
  return (
    <section className="section autonomous-section" id="capabilities">
      <div className="container">
        
        {/* Levelpath Style Section Title */}
        <div className="title-grid mb-5">
          <div>
            <span className="badge-blue mb-2">AUTONOMOUS PROCUREMENT PLATFORM</span>
            <h2 className="section-title">
              On Procucev, <br />
              <span className="serif-title text-blue">procurement runs itself.</span>
            </h2>
          </div>
          <div>
            <p className="section-lead-text">
              Procucev's autonomous source-to-pay platform directs the work instead of processing it. Operate with clarity across sourcing, contracts, suppliers, and risk management with QUA AI running each step inside your enterprise workflow.
            </p>
          </div>
        </div>

        {/* 4 Interactive Workflow Cards (Levelpath Style Reference) */}
        <div className="workflow-cards-grid">
          
          {/* Card 1: Intake & RFx */}
          <div className="wf-card">
            <div className="wf-card-header">
              <span className="wf-badge">Intake & Orchestration</span>
              <Cpu size={18} className="text-blue" />
            </div>
            <h4>Create RFx & Auto PR Match</h4>
            <p>Direct intake requisitions without manual data entry. QUA AI categorizes items and dispatches RFQs within 2 hours.</p>
            <div className="wf-preview-box">
              <div className="wf-pill-status">
                <CheckCircle2 size={14} className="text-green" /> Auto-matched 14 Verified Suppliers
              </div>
            </div>
          </div>

          {/* Card 2: Contract Review */}
          <div className="wf-card">
            <div className="wf-card-header">
              <span className="wf-badge">Contract Insights</span>
              <FileText size={18} className="text-blue" />
            </div>
            <h4>Clause & Spec Engineering</h4>
            <p>360° Price Benchmarking analyzes payment terms, specification grades, and contract rate compliance.</p>
            <div className="wf-preview-box">
              <div className="wf-code-preview">
                <small>Payment Terms Clause:</small>
                <strong className="text-blue">Net 60 → Target Savings: 16%</strong>
              </div>
            </div>
          </div>

          {/* Card 3: Supplier Ranking */}
          <div className="wf-card">
            <div className="wf-card-header">
              <span className="wf-badge">Risk Signals</span>
              <ShieldAlert size={18} className="text-blue" />
            </div>
            <h4>Supplier Risk & Ranking</h4>
            <p>Evaluating vendor financial stability, ESG standards, and capacity to eliminate single-source bottleneck risks.</p>
            <div className="wf-preview-box">
              <div className="wf-rank-row">
                <span>#1 Supplier A (Score 4.8/5)</span>
                <span className="rank-tag">Top Choice</span>
              </div>
            </div>
          </div>

          {/* Card 4: Invoice Check */}
          <div className="wf-card">
            <div className="wf-card-header">
              <span className="wf-badge">Invoice Automation</span>
              <Zap size={18} className="text-blue" />
            </div>
            <h4>Duplicate Check & S2P</h4>
            <p>Zero-defect 3-way matching between PO, delivery receipt, and invoice to prevent duplicate payments.</p>
            <div className="wf-preview-box">
              <div className="wf-pill-green">
                <CheckCircle2 size={14} /> No duplicate invoice found
              </div>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        .autonomous-section {
          background: #f8fafc;
          border-bottom: 1px solid var(--border-light);
          padding: 80px 0;
        }

        .title-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
          margin-bottom: 48px;
        }

        .section-title {
          font-size: 2.8rem;
          font-weight: 800;
          color: var(--text-dark);
          margin-top: 10px;
        }
        .text-blue { color: #1d6bf3; }
        .text-green { color: #10b981; }

        .section-lead-text {
          font-size: 1.15rem;
          color: var(--text-muted);
          line-height: 1.7;
        }

        .workflow-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .wf-card {
          background: #ffffff;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          padding: 26px 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: var(--transition);
          box-shadow: 0 4px 12px rgba(7, 65, 147, 0.04);
        }
        .wf-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: #1d6bf3;
        }

        .wf-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .wf-badge {
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .wf-card h4 {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--text-dark);
          margin-bottom: 8px;
        }
        .wf-card p {
          font-size: 0.88rem;
          color: var(--text-muted);
          margin-bottom: 20px;
          line-height: 1.5;
        }

        .wf-preview-box {
          background: #f1f5f9;
          border: 1px solid var(--border-light);
          padding: 10px 12px;
          border-radius: 10px;
        }
        .wf-pill-status {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-dark);
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .wf-code-preview small { display: block; color: var(--text-muted); font-size: 0.72rem; }
        .wf-code-preview strong { font-size: 0.82rem; }

        .wf-rank-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--text-dark);
        }
        .rank-tag {
          background: #eff6ff;
          color: #1d6bf3;
          padding: 2px 6px;
          border-radius: 6px;
        }
        .wf-pill-green {
          background: #d1fae5;
          color: #065f46;
          font-weight: 700;
          font-size: 0.78rem;
          padding: 4px 8px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        @media (max-width: 992px) {
          .title-grid { grid-template-columns: 1fr; }
          .workflow-cards-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
