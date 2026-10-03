import React, { useState } from 'react';
import { TrendingUp, Layers, BarChart3, DollarSign, RefreshCw, ArrowRight, Calculator } from 'lucide-react';

export default function ConsultingSection({ onOpenDemo }) {
  const [spend, setSpend] = useState(25);
  const [categoryRate, setCategoryRate] = useState(0.16);
  const [selectedCatName, setSelectedCatName] = useState('Packaging & Cartons');

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

  const handleCategoryChange = (e) => {
    const val = Number(e.target.value);
    setCategoryRate(val);
    setSelectedCatName(e.target.options[e.target.selectedIndex].text.split(' (')[0]);
  };

  const estimatedSavings = (spend * categoryRate).toFixed(2);

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

        {/* Interactive Calculator */}
        <div className="cons-calc-box">
          <div className="cons-calc-header">
            <div className="cons-calc-icon">
              <Calculator size={22} style={{ color: '#F97316' }} />
            </div>
            <div>
              <h3 className="cons-calc-h">Interactive Savings Calculator</h3>
              <p className="cons-calc-sub">
                Enter your annual procurement spend and main category to see your estimated annual savings.
              </p>
            </div>
          </div>

          <div className="cons-calc-grid">
            {/* Inputs */}
            <div className="cons-inputs">
              <div className="cons-range-group">
                <div className="cons-range-header">
                  <label className="cons-lbl">Annual Procurement Spend (₹ Crore)</label>
                  <span className="cons-spend-tag">₹{spend} Cr</span>
                </div>
                <input
                  type="range" min="1" max="500" value={spend}
                  onChange={e => setSpend(Number(e.target.value))}
                  className="cons-slider"
                  id="spend-slider"
                />
                <div className="cons-tick-row">
                  <span>₹1 Cr</span><span>₹250 Cr</span><span>₹500 Cr</span>
                </div>
              </div>

              <div className="cons-select-group">
                <label className="cons-lbl">Main Spend Category</label>
                <select
                  value={categoryRate}
                  onChange={handleCategoryChange}
                  className="cons-select"
                  id="category-select"
                >
                  <option value={0.16}>Packaging &amp; Cartons (Est. 16% Savings)</option>
                  <option value={0.14}>Electrical Equipment &amp; Cables (Est. 14% Savings)</option>
                  <option value={0.18}>Chemicals &amp; Raw Ingredients (Est. 18% Savings)</option>
                  <option value={0.20}>MRO &amp; Spares (Est. 20% Savings)</option>
                  <option value={0.15}>IT Consumables &amp; Hardware (Est. 15% Savings)</option>
                  <option value={0.21}>Pharma &amp; Lab Supplies (Est. 21% Savings)</option>
                </select>
              </div>
              <p className="cons-disc">* Estimates are indicative; actual savings depend on your spend profile.</p>
            </div>

            {/* Result */}
            <div className="cons-result-card">
              <div>
                <span className="badge-orange" style={{ marginBottom: '8px', display: 'inline-flex' }}>
                  Estimated Annual Savings
                </span>
                <div className="cons-savings-val">₹{estimatedSavings} Cr</div>
                <p className="cons-savings-sub">Direct hard savings added straight back to your P&amp;L</p>

                <div className="cons-breakdown">
                  <div className="cons-b-row">
                    <span>Category:</span>
                    <strong>{selectedCatName}</strong>
                  </div>
                  <div className="cons-b-row">
                    <span>Est. Savings Rate:</span>
                    <strong style={{ color: '#F97316' }}>{(categoryRate * 100).toFixed(0)}%</strong>
                  </div>
                  <div className="cons-b-row">
                    <span>Upfront Fee:</span>
                    <strong>₹0 (Gain-Share)</strong>
                  </div>
                </div>
              </div>
              <button onClick={onOpenDemo} className="btn btn-primary btn-lg" style={{ width: '100%' }} id="calc-cta-btn">
                Get a Free Savings Assessment <ArrowRight size={16} />
              </button>
            </div>
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

        .cons-calc-grid {
          display: grid;
          grid-template-columns: 7fr 5fr;
          gap: 40px;
          align-items: start;
        }
        .cons-range-group { margin-bottom: 24px; }
        .cons-range-header {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 8px;
        }
        .cons-lbl {
          font-size: 0.88rem; font-weight: 700; color: #0C4A6E;
        }
        .cons-spend-tag {
          background: rgba(249,115,22,0.12);
          color: #EA6C00;
          font-weight: 800; font-size: 1rem;
          padding: 3px 12px; border-radius: 8px;
        }
        .cons-slider {
          width: 100%; height: 6px;
          border-radius: 4px;
          accent-color: #F97316;
          margin: 8px 0 6px;
          cursor: pointer;
        }
        .cons-tick-row {
          display: flex; justify-content: space-between;
          font-size: 0.72rem; color: #94A3B8; font-weight: 600;
        }
        .cons-select-group { margin-bottom: 12px; }
        .cons-select {
          width: 100%; padding: 11px 14px;
          border: 1px solid #E2E8F0; border-radius: 12px;
          background: #F8FAFC; color: #334155;
          font-family: 'Poppins', sans-serif;
          font-size: 0.9rem; font-weight: 500;
          cursor: pointer; outline: none;
          transition: border-color 0.2s;
        }
        .cons-select:focus { border-color: #0EA5E9; }
        .cons-disc {
          font-size: 0.75rem; color: #94A3B8; font-style: italic;
        }

        /* Result card */
        .cons-result-card {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 28px;
          display: flex; flex-direction: column; gap: 20px;
          text-align: center;
        }
        .cons-savings-val {
          font-size: 3rem; font-weight: 900;
          color: #F97316; line-height: 1;
          margin: 8px 0 4px;
        }
        .cons-savings-sub {
          font-size: 0.82rem; color: #64748B; margin-bottom: 20px;
        }
        .cons-breakdown {
          background: #ffffff; border: 1px solid #E2E8F0;
          border-radius: 12px; padding: 14px; text-align: left;
          font-size: 0.82rem;
        }
        .cons-b-row {
          display: flex; justify-content: space-between;
          padding: 4px 0; color: #64748B;
          border-bottom: 1px solid #F1F5F9;
        }
        .cons-b-row:last-child { border-bottom: none; }
        .cons-b-row strong { color: #0C4A6E; }

        @media (max-width: 992px) {
          .cons-services-grid { grid-template-columns: 1fr; }
          .cons-calc-grid { grid-template-columns: 1fr; }
          .cons-calc-box { padding: 24px; }
        }
      `}</style>
    </section>
  );
}
