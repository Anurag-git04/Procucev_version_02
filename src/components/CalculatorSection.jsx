import React, { useState } from 'react';
import { Clock, ShieldCheck, ArrowRight, PiggyBank } from 'lucide-react';

export default function CalculatorSection({ onOpenDemo }) {
  const [spend, setSpend] = useState(25);
  const [categoryRate, setCategoryRate] = useState(0.16);

  const savingsAmount = (spend * categoryRate).toFixed(2);

  return (
    <section className="section calc-section" id="calculator">
      <div className="container">
        
        <div className="calc-card-level">
          
          <div className="direct-profit-tagline">
            <PiggyBank size={20} className="text-blue" />
            <span><strong>Saving at procurement is direct profit for the company.</strong> Turn spend leakages into hard bottom-line earnings.</span>
          </div>

          <div className="calc-grid">
            
            <div className="calc-inputs">
              <span className="badge-blue mb-2">INTERACTIVE ROI MODEL</span>
              <h2 className="calc-title">Calculate Your Projected Spend Savings</h2>
              <p className="calc-subtitle">
                Adjust your annual procurement spend to estimate instant cash savings and turnaround cycle time reduction.
              </p>

              <div className="range-box">
                <div className="range-head">
                  <label>Annual Procurement Spend (₹ Crore)</label>
                  <span className="spend-num">₹{spend} Crore</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="500" 
                  value={spend} 
                  onChange={(e) => setSpend(Number(e.target.value))}
                  className="range-slider"
                />
              </div>

              <div className="category-box">
                <label>Primary Spend Category</label>
                <select 
                  value={categoryRate} 
                  onChange={(e) => setCategoryRate(Number(e.target.value))}
                  className="cat-select"
                >
                  <option value={0.16}>Packaging & Cartons (Est. 16% Savings)</option>
                  <option value={0.14}>Industrial Steel & Raw Metals (Est. 14% Savings)</option>
                  <option value={0.18}>Chemicals & Agrochemical Ingredients (Est. 18% Savings)</option>
                  <option value={0.15}>Logistics & Freight Transportation (Est. 15% Savings)</option>
                  <option value={0.20}>MRO & Indirect Consumables (Est. 20% Savings)</option>
                </select>
              </div>

              <div className="no-fee-banner">
                <ShieldCheck size={18} className="text-blue" />
                <span><strong>No Upfront Fee Model:</strong> Procucev only earns when hard spend savings are realized!</span>
              </div>
            </div>

            <div className="calc-results">
              <div className="results-box-dark">
                <span className="res-tag">Direct Profit Added Back to Company</span>
                <div className="res-amount">₹{savingsAmount} Crore</div>
                <p className="res-sub">Direct hard savings impact on your bottom line</p>

                <div className="res-list">
                  <div className="res-item">
                    <span><Clock size={16} className="text-cyan" /> Procurement TAT Saved:</span>
                    <strong>65% (~14 Days Faster)</strong>
                  </div>
                  <div className="res-item">
                    <span><ShieldCheck size={16} className="text-cyan" /> Service Fee Risk:</span>
                    <strong className="text-green">Zero Upfront (Gain-Share Only)</strong>
                  </div>
                </div>

                <button className="btn btn-blue btn-lg btn-block mt-4" onClick={onOpenDemo}>
                  Claim These Savings Now <ArrowRight size={18} />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        .calc-section {
          background: #ffffff;
          padding: 80px 0;
          border-bottom: 1px solid var(--border-light);
        }
        .calc-card-level {
          background: #f8fafc;
          border-radius: var(--radius-xl);
          padding: 48px;
          box-shadow: 0 10px 30px rgba(7, 65, 147, 0.06);
          border: 1px solid var(--border-light);
        }
        .direct-profit-tagline {
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          color: #1e3a8a;
          padding: 14px 20px;
          border-radius: 12px;
          font-size: 0.95rem;
          margin-bottom: 32px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .calc-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .calc-title {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--text-dark);
          margin: 10px 0;
        }
        .calc-subtitle {
          color: var(--text-muted);
          font-size: 1rem;
          margin-bottom: 24px;
        }

        .range-box { margin-bottom: 20px; }
        .range-head {
          display: flex;
          justify-content: space-between;
          font-weight: 700;
          margin-bottom: 8px;
          font-size: 0.9rem;
        }
        .spend-num {
          color: #1d6bf3;
          font-size: 1.15rem;
          font-weight: 800;
        }
        .range-slider {
          width: 100%;
          height: 8px;
          border-radius: 4px;
          background: #cbd5e1;
          outline: none;
          -webkit-appearance: none;
        }
        .range-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #1d6bf3;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(29, 107, 243, 0.4);
        }

        .category-box label {
          display: block;
          font-weight: 700;
          font-size: 0.9rem;
          margin-bottom: 6px;
        }
        .cat-select {
          width: 100%;
          padding: 12px;
          border-radius: 10px;
          border: 1px solid var(--border-light);
          font-family: inherit;
          font-size: 0.9rem;
          outline: none;
          background: #ffffff;
        }

        .no-fee-banner {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #ffffff;
          border: 1px solid var(--border-light);
          padding: 12px 16px;
          border-radius: 10px;
          margin-top: 20px;
          font-size: 0.85rem;
          color: var(--text-body);
        }

        .results-box-dark {
          background: #07152e;
          color: #ffffff;
          padding: 36px;
          border-radius: var(--radius-lg);
          text-align: center;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        .res-tag {
          font-size: 0.78rem;
          font-weight: 700;
          color: #38bdf8;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .res-amount {
          font-family: var(--font-display);
          font-size: 3rem;
          font-weight: 800;
          color: #ffffff;
          margin: 8px 0;
        }
        .res-sub {
          font-size: 0.85rem;
          color: #cbd5e1;
          margin-bottom: 20px;
        }
        .res-list {
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          padding-top: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          text-align: left;
        }
        .res-item {
          display: flex;
          justify-content: space-between;
          font-size: 0.84rem;
        }
        .res-item span {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #94a3b8;
        }
        .text-blue { color: #1d6bf3; }
        .text-cyan { color: #38bdf8; }
        .text-green { color: #10b981; }
        .btn-block { width: 100%; }
        .mt-4 { margin-top: 20px; }

        @media (max-width: 992px) {
          .calc-grid { grid-template-columns: 1fr; }
          .calc-card-level { padding: 24px; }
        }
      `}</style>
    </section>
  );
}
