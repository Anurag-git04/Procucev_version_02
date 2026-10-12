import React from 'react';
import { TrendingUp, Layers, BarChart3, DollarSign, RefreshCw, ArrowRight, Image as ImageIcon } from 'lucide-react';

export default function ConsultingSection({ onOpenDemo }) {
  const industries = [];

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
            Get the visibility of your procurement savings within 24-48 hours <br />
            <span style={{ color: '#F97316', fontStyle: 'italic' }}>executed by industry experts</span>
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

        {/* Savings Picture Area */}
        <div className="cons-calc-box">
          <div className="cons-calc-header" style={{ marginBottom: '24px', justifyContent: 'center' }}>
            <div>
              <h3 className="cons-calc-h" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
                How <img src="/aicev_logo.png" alt="aiCEV" style={{ height: '52px' }} /> can Help you do saving?
              </h3>
            </div>
          </div>

          <div className="savings-picture-container">
            {/* Picture space: You can replace this placeholder with:
                <img src="/your-image.png" alt="How aiCEV can Help you do saving?" className="savings-picture-img" />
            */}
            <div className="savings-picture-placeholder">
              <ImageIcon size={48} className="placeholder-icon" />
              <p className="placeholder-title">Picture Space</p>
              <p className="placeholder-subtitle">Space reserved for image / infographic</p>
            </div>
          </div>
        </div>



      </div>

      <style>{`
        .v2-consulting-section {
          background: #F8FAFC;
          border-top: 1px solid #E2E8F0;
          padding-bottom: 24px !important;
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

        /* Calculator / Picture Box */
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

        /* Picture Space */
        .savings-picture-container {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .savings-picture-placeholder {
          width: 100%;
          min-height: 380px;
          border: 2px dashed #CBD5E1;
          border-radius: 16px;
          background: #F8FAFC;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 32px;
          text-align: center;
          transition: all 0.2s ease;
        }
        .savings-picture-placeholder:hover {
          border-color: #0EA5E9;
          background: #F0F9FF;
        }
        .placeholder-icon {
          color: #94A3B8;
          margin-bottom: 12px;
        }
        .placeholder-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #334155;
          margin: 0 0 6px 0;
        }
        .placeholder-subtitle {
          font-size: 0.88rem;
          color: #64748B;
          margin: 0;
        }
        .savings-picture-img {
          width: 100%;
          max-height: 600px;
          object-fit: contain;
          border-radius: 12px;
        }

        @media (max-width: 992px) {
          .cons-services-grid { grid-template-columns: 1fr; }
          .cons-calc-grid { grid-template-columns: 1fr; }
          .cons-calc-box { padding: 24px; }
        }

      `}</style>
    </section>
  );
}
