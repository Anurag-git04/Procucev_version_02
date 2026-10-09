import React, { useState } from 'react';
import { Cpu, Mail, Zap, ArrowRight, CheckCircle2, Package, Sparkles } from 'lucide-react';

export default function QuaAiSection({ onOpenDemo }) {
  const [activeForm, setActiveForm] = useState('buyer');

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



        {/* Split Layout: Info on Left, Form on Right */}
        <div className="qua-split-layout">
          
          {/* Left Column: Info Boxes */}
          <div className="qua-info-stack">
            <div className="qua-role-card" style={{ borderTop: '3px solid #F97316' }}>
              <span className="qua-badge orange" style={{ marginBottom: '12px' }}>For Buyers</span>
              <h3 className="qua-role-h" style={{textTransform:'none'}}>Free and Unlimited Sourcing</h3>
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
              <h3 className="qua-role-h" style={{textTransform:'none'}}>Verified High-Intent Leads</h3>
              <p className="qua-role-p">
                Get real buyer RFQs in your category. Buy credit packs to download
                RFQs and send your quote. Clear idle stock through BFS.
              </p>
              <button onClick={onOpenDemo} className="btn btn-secondary" id="supplier-join-btn">
                I'm a Supplier: Join Qua AI <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Column: Registration Form with Toggle */}
          <div className="qua-form-wrapper">
            <div className="form-toggle-bar">
              <button 
                className={`toggle-btn ${activeForm === 'buyer' ? 'active orange' : ''}`}
                onClick={() => setActiveForm('buyer')}
              >
                Buyer Registration
              </button>
              <button 
                className={`toggle-btn ${activeForm === 'seller' ? 'active blue' : ''}`}
                onClick={() => setActiveForm('seller')}
              >
                Seller Registration
              </button>
            </div>

            <div className="qua-form-inner">
              {activeForm === 'buyer' && (
                <form className="qua-reg-form w-full" onSubmit={e => e.preventDefault()}>
                  <div className="qua-form-group">
                    <label>Your Name: *</label>
                    <input type="text" placeholder="Name" />
                  </div>
                  <div className="qua-form-group">
                    <label>Company Name: *</label>
                    <input type="text" placeholder="Company Name" />
                  </div>
                  <div className="qua-form-group input-with-btn">
                    <div style={{ flex: 1 }}>
                      <label>PinCode: *</label>
                      <input type="text" placeholder="Enter PIN code" style={{ width: '100%' }} />
                    </div>
                    <button type="button" className="btn-small green">Validate</button>
                  </div>
                  <div className="qua-form-group">
                    <label>Mobile Number: *</label>
                    <input type="text" placeholder="IND +91 Mobile Number" />
                    <span className="form-hint">( You can access on WhatsApp with this number )</span>
                  </div>
                  <div className="qua-form-group">
                    <label>Company EMail Id: *</label>
                    <input type="email" placeholder="Company EMail Id" />
                  </div>
                  <div className="qua-form-actions">
                    <button type="button" className="btn-outline orange">Send OTPs</button>
                  </div>
                  <div className="qua-form-group">
                    <label>Mobile OTP: *</label>
                    <input type="text" placeholder="Enter Mobile OTP" />
                  </div>
                  <div className="qua-form-group">
                    <label>Email OTP: *</label>
                    <input type="text" placeholder="Enter EMail OTP" />
                  </div>
                  <div className="qua-form-actions">
                    <button type="button" className="btn-outline green-solid">Validate OTPs</button>
                  </div>
                  
                  <div className="qua-form-submit">
                    <button type="submit" className="submit-btn">SUBMIT</button>
                    <div className="form-note">Note : If Already Registered! Click here for <a href="#login">Login</a></div>
                    <button type="reset" className="reset-btn">Reset</button>
                  </div>
                </form>
              )}

              {activeForm === 'seller' && (
                <form className="qua-reg-form w-full" onSubmit={e => e.preventDefault()}>
                  <div className="qua-form-group">
                    <label>Company Name: *</label>
                    <input type="text" placeholder="Company Name" />
                  </div>
                  <div className="qua-form-group">
                    <label>Your Name: *</label>
                    <input type="text" placeholder="Enter Name" />
                  </div>
                  <div className="qua-form-group">
                    <label>GSTIN (Format: 88AAAAA8888A8AA)</label>
                    <input type="text" placeholder="GSTIN" />
                  </div>
                  <div className="qua-form-group">
                    <label>Product/Service Details: (Multiple products seperated by comma) *</label>
                    <input type="text" placeholder="Product/Service Details" />
                  </div>
                  <div className="qua-form-group input-with-btn">
                    <div style={{ flex: 1 }}>
                      <label>PinCode: *</label>
                      <input type="text" placeholder="Enter PIN code" style={{ width: '100%' }} />
                    </div>
                    <button type="button" className="btn-small green">Validate</button>
                  </div>
                  <div className="qua-form-group">
                    <label>EMail Id: *</label>
                    <input type="email" placeholder="EMail Id" />
                  </div>
                  <div className="qua-form-group">
                    <label>Mobile Number: *</label>
                    <input type="text" placeholder="IND +91 Mobile Number" />
                    <span className="form-hint">( You can access on WhatsApp with same Number )</span>
                  </div>
                  <div className="qua-form-actions">
                    <button type="button" className="btn-outline orange">Send OTPs</button>
                  </div>
                  <div className="qua-form-group">
                    <label>Email OTP: *</label>
                    <input type="text" placeholder="Enter Email OTP" />
                  </div>
                  <div className="qua-form-group">
                    <label>Mobile OTP: *</label>
                    <input type="text" placeholder="Enter Mobile OTP" />
                  </div>
                  <div className="qua-form-actions">
                    <button type="button" className="btn-outline green-solid">Validate OTPs</button>
                  </div>
                  
                  <div className="qua-form-submit">
                    <button type="submit" className="submit-btn">SUBMIT</button>
                    <div className="form-note">Note : If Already Registered! Click here for <a href="#login">Login</a></div>
                    <button type="reset" className="reset-btn">Reset</button>
                  </div>
                </form>
              )}
            </div>
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

        /* Split Layout & Toggle */
        .qua-split-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: flex-start;
        }
        .qua-info-stack {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .qua-form-wrapper {
          background: #ffffff;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.04);
        }
        .form-toggle-bar {
          display: flex;
          background: #f1f5f9;
          border-radius: 999px;
          padding: 4px;
          margin-bottom: 24px;
        }
        .toggle-btn {
          flex: 1;
          padding: 10px 0;
          border: none;
          background: transparent;
          border-radius: 999px;
          font-weight: 700;
          font-size: 0.9rem;
          color: #64748b;
          cursor: pointer;
          transition: 0.3s;
        }
        .toggle-btn.active {
          background: #ffffff;
          color: #0f172a;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
        }
        .toggle-btn.active.orange { color: #ea580c; }
        .toggle-btn.active.blue { color: #0284c7; }

        /* Role cards */
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
          font-size: 1.15rem; font-weight: 800;
          color: #000; margin: 0; text-transform: uppercase;
        }
        
        /* Registration Form Styles */
        .qua-reg-form {
          display: flex; flex-direction: column; gap: 14px; text-align: left;
        }
        .qua-form-group {
          display: flex; flex-direction: column; gap: 4px;
        }
        .qua-form-group label {
          font-size: 0.85rem; font-weight: 700; color: #1e293b;
        }
        .qua-form-group input {
          padding: 10px 14px; border: 1px solid #e2e8f0; border-radius: 8px;
          font-family: inherit; font-size: 0.9rem; outline: none; transition: 0.2s; background: #f8fafc;
        }
        .qua-form-group input:focus { border-color: #0EA5E9; background: #fff; }
        .form-hint { font-size: 0.7rem; color: #64748B; }
        
        .input-with-btn { flex-direction: row; align-items: flex-end; gap: 12px; }
        .input-with-btn > div { display: flex; flex-direction: column; gap: 4px; }
        
        .btn-small { padding: 10px 16px; border: none; border-radius: 8px; font-weight: 700; font-size: 0.85rem; cursor: pointer; height: 41px; }
        .btn-small.green { background: #84cc16; color: white; }
        
        .qua-form-actions { margin-top: 4px; }
        .btn-outline { padding: 8px 24px; border-radius: 20px; font-weight: 700; font-size: 0.85rem; cursor: pointer; border: none; }
        .btn-outline.orange { background: #f97316; color: #fff; }
        .btn-outline.green-solid { background: #84cc16; color: white; }
        
        .qua-form-submit { display: flex; flex-direction: column; align-items: center; gap: 12px; margin-top: 16px; }
        .submit-btn { width: 100%; padding: 12px; background: #a3e635; color: #3f6212; border: none; border-radius: 8px; font-weight: 800; font-size: 1.05rem; cursor: pointer; letter-spacing: 0.5px; }
        .reset-btn { padding: 6px 32px; background: #f97316; color: white; border: none; border-radius: 20px; font-weight: 700; font-size: 0.9rem; cursor: pointer; }
        .form-note { font-size: 0.75rem; color: #64748b; font-weight: 500; }
        .form-note a { color: #3b82f6; text-decoration: underline; }

        .flex { display: flex; }
        .justify-between { justify-content: space-between; }
        .items-center { align-items: center; }
        .w-full { width: 100%; }

        @media (max-width: 900px) {
          .qua-gmt-grid { grid-template-columns: 1fr; }
          .qua-split-layout { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
