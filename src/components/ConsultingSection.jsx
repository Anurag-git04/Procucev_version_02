import React, { useState } from 'react';
import { TrendingUp, Layers, BarChart3, DollarSign, RefreshCw, ArrowRight, Calculator } from 'lucide-react';

export default function ConsultingSection({ onOpenDemo }) {
  // Form state can be added here if needed

  const industries = [
    'Retail',
    'Food & Beverage',
    'Financial Services',
    'Fashion & Apparel',
    'Home & Interiors',
    'FMCG Ingredients',
  ];

  const services = [
    {
      title: 'Strategic Sourcing',
      desc: 'Category strategy, supplier discovery and negotiation to get the right price and terms.',
      icon: <TrendingUp size={20} style={{ color: '#F97316' }} />,
      accent: '#F97316',
    },
    {
      title: 'Category Management',
      desc: 'Day-to-day management of your categories, from purchase orders to supplier relationships.',
      icon: <Layers size={20} style={{ color: '#0EA5E9' }} />,
      accent: '#0EA5E9',
    },
    {
      title: '360° Price Benchmarking',
      desc: 'Compare what you pay against market rates, specifications and payment terms to find leakage.',
      icon: <BarChart3 size={20} style={{ color: '#0C4A6E' }} />,
      accent: '#0C4A6E',
    },
    {
      title: 'Spend Analytics & Standardisation',
      desc: 'Item master clean-up, specification optimisation and tail-spend consolidation.',
      icon: <DollarSign size={20} style={{ color: '#10B981' }} />,
      accent: '#10B981',
    },
    {
      title: 'E-Auctions',
      desc: 'Reverse auctions to bring prices down and forward auctions to sell surplus assets.',
      icon: <RefreshCw size={20} style={{ color: '#F97316' }} />,
      accent: '#F97316',
    },
  ];



  return (
    <section className="v2-consulting-section section" id="consulting">
      <div className="container">

        {/* Header */}
        <div className="v2-section-header text-center">
          <div className="badge-tag-pill">
            <TrendingUp size={14} style={{ color: '#0EA5E9' }} /> Procurement Consulting
          </div>
          <h2 className="v2-section-title">
            Savings you can see on the <br />
            <span style={{ color: '#F97316', fontStyle: 'italic' }}>P&amp;L Statement</span>
          </h2>
          <p className="v2-section-desc">
            Our consultants work inside your procurement process to find savings and lock them in.
            With our gain-share model there is no upfront fee — we earn only when the savings are realised.
          </p>
        </div>

        {/* Services Grid */}
        <div className="cons-services-grid">
          {services.map((srv, idx) => (
            <div key={idx} className="cons-srv-card" style={{ '--accent': srv.accent }}>
              <div className="cons-srv-icon" style={{ background: `${srv.accent}15`, border: `1px solid ${srv.accent}30` }}>
                {srv.icon}
              </div>
              <h3 className="cons-srv-h">{srv.title}</h3>
              <p className="cons-srv-p">{srv.desc}</p>
            </div>
          ))}

          {/* Gain-Share card */}
          <div className="cons-srv-card cons-gain-card">
            <span className="badge-orange" style={{ marginBottom: '12px' }}>Gain-Share Model</span>
            <h3 className="cons-srv-h" style={{ color: '#fff' }}>Zero Upfront Risk</h3>
            <p className="cons-srv-p" style={{ color: '#BAE6FD', flex: 1 }}>
              We only charge a percentage of realized savings. If we don't deliver hard cost savings, you pay nothing.
            </p>
            <button onClick={onOpenDemo} className="btn btn-primary" style={{ width: '100%', marginTop: '16px' }} id="savings-assessment-btn">
              Get a Free Savings Assessment <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Savings Form */}
        <div className="cons-calc-box">
          <div className="cons-calc-header" style={{ marginBottom: '16px' }}>
            <div>
              <h3 className="cons-calc-h">How Aicev can Help you do saving?</h3>
            </div>
          </div>
          <form className="saving-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-grid">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" placeholder="Enter your phone" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label>Designation</label>
                <input type="text" placeholder="Enter your designation" />
              </div>
              <div className="form-group">
                <label>Company</label>
                <input type="text" placeholder="Enter your company" />
              </div>
              <div className="form-group">
                <label>Upload File (Excel, JSON, Word, PDF)</label>
                <input type="file" multiple accept=".xlsx,.xls,.json,.doc,.docx,.pdf" className="file-input" />
              </div>
            </div>
            <button type="submit" className="btn btn-primary" style={{ marginTop: '24px' }}>
              Submit
            </button>
          </form>
        </div>

        {/* Industries We Serve */}
        <div className="cl-ind-box" style={{ marginTop: '40px' }}>
          <h3 className="cl-ind-title">Industries We Serve</h3>
          <div className="cl-ind-pills">
            {industries.map((ind, i) => (
              <span key={i} className="cl-ind-pill">{ind}</span>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .v2-consulting-section {
          background: #F8FAFC;
          border-top: 1px solid #E2E8F0;
        }

        /* Services grid */
        .cons-services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 48px;
        }
        .cons-srv-card {
          background: #ffffff;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 28px;
          display: flex; flex-direction: column;
          transition: all 0.3s ease;
          box-shadow: 0 1px 6px rgba(0,0,0,0.04);
        }
        .cons-srv-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent, #0EA5E9);
          box-shadow: 0 12px 28px rgba(12,74,110,0.09);
          background: #fff;
        }
        .cons-gain-card {
          background: linear-gradient(135deg, #0C4A6E 0%, #063554 100%);
          border: none;
          color: #fff;
        }
        .cons-gain-card:hover {
          border-color: transparent;
          box-shadow: 0 14px 32px rgba(12,74,110,0.22);
        }
        .cons-srv-icon {
          width: 46px; height: 46px;
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 18px;
        }
        .cons-srv-h {
          font-size: 1.15rem; font-weight: 800;
          color: #0C4A6E; margin-bottom: 8px;
        }
        .cons-srv-p {
          font-size: 0.9rem; color: #64748B;
          line-height: 1.6; flex: 1;
        }

        /* Calculator */
        .cons-calc-box {
          background: #ffffff;
          border: 1px solid #E2E8F0;
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 4px 16px rgba(12,74,110,0.06);
        }
        .cons-calc-header {
          display: flex; align-items: flex-start; gap: 16px;
          margin-bottom: 32px;
        }
        .cons-calc-icon {
          width: 48px; height: 48px; flex-shrink: 0;
          border-radius: 12px;
          background: rgba(249,115,22,0.10);
          border: 1px solid rgba(249,115,22,0.25);
          display: flex; align-items: center; justify-content: center;
        }
        .cons-calc-h {
          font-size: 1.5rem; font-weight: 800; color: #0C4A6E;
        }
        .cons-calc-sub {
          font-size: 0.92rem; color: #64748B; margin-top: 4px;
        }

        /* Form Styles */
        .saving-form {
          margin-top: 16px;
        }
        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .form-group label {
          font-weight: 600;
          color: #334155;
          font-size: 0.9rem;
        }
        .form-group input {
          padding: 12px;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          outline: none;
          transition: border-color 0.2s;
          font-family: inherit;
        }
        .form-group input:focus {
          border-color: #0EA5E9;
        }
        .file-input {
          padding: 8px;
          border: 1px dashed #cbd5e1 !important;
          background: #f8fafc;
        }

        @media (max-width: 992px) {
          .cons-services-grid { grid-template-columns: 1fr; }
          .cons-calc-grid { grid-template-columns: 1fr; }
          .cons-calc-box { padding: 24px; }
        }

        /* Industries */
        .cl-ind-box {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 32px;
          text-align: center;
          margin-bottom: 48px;
        }
        .cl-ind-title {
          font-size: 1.1rem; font-weight: 800;
          color: #0C4A6E; margin-bottom: 18px;
        }
        .cl-ind-pills {
          display: flex; flex-wrap: wrap;
          justify-content: center; gap: 10px;
        }
        .cl-ind-pill {
          background: #ffffff;
          border: 1px solid #E2E8F0;
          border-radius: 999px;
          padding: 7px 18px;
          font-size: 0.85rem; font-weight: 600;
          color: #334155;
          box-shadow: 0 1px 4px rgba(0,0,0,0.04);
          transition: all 0.2s;
        }
        .cl-ind-pill:hover {
          border-color: #F97316;
          color: #EA6C00;
        }
      `}</style>
    </section>
  );
}
