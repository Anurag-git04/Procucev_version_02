import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Building, Mail, Phone, User } from 'lucide-react';

export default function DemoModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', spendCategory: 'Packaging & Cartons',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const inputStyle = {
    width: '100%',
    background: '#F8FAFC',
    border: '1px solid #E2E8F0',
    borderRadius: '10px',
    padding: '10px 12px 10px 38px',
    fontSize: '0.88rem',
    color: '#334155',
    fontFamily: "'Poppins', sans-serif",
    outline: 'none',
  };
  const labelStyle = {
    display: 'block',
    fontSize: '0.75rem',
    fontWeight: 700,
    color: '#64748B',
    textTransform: 'uppercase',
    letterSpacing: '0.4px',
    marginBottom: '6px',
  };
  const iconWrapStyle = { position: 'relative' };
  const iconStyle = {
    position: 'absolute', left: '12px', top: '11px',
    width: '16px', height: '16px', color: '#94A3B8',
  };

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 300,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '16px',
        background: 'rgba(12, 74, 110, 0.55)',
        backdropFilter: 'blur(10px)',
      }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        style={{
          position: 'relative', width: '100%', maxWidth: '560px',
          background: '#ffffff', borderRadius: '24px',
          boxShadow: '0 32px 80px rgba(12,74,110,0.22)',
          overflow: 'hidden',
          border: '1px solid #E2E8F0',
          animation: 'modalIn 0.28s ease',
        }}
      >
        <style>{`
          @keyframes modalIn {
            from { opacity: 0; transform: scale(0.94) translateY(12px); }
            to   { opacity: 1; transform: scale(1) translateY(0); }
          }
        `}</style>

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close Modal"
          id="modal-close-btn"
          style={{
            position: 'absolute', top: '16px', right: '16px', zIndex: 10,
            background: '#F8FAFC', border: '1px solid #E2E8F0',
            borderRadius: '50%', padding: '6px', cursor: 'pointer', color: '#64748B',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <X style={{ width: '18px', height: '18px' }} />
        </button>

        {/* Orange top stripe */}
        <div style={{ height: '4px', background: 'linear-gradient(90deg, #0EA5E9, #F97316)' }} />

        {!submitted ? (
          <div style={{ padding: '32px 36px' }}>
            {/* Badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <div style={{
                padding: '7px', background: 'rgba(14,165,233,0.10)',
                borderRadius: '10px', color: '#0EA5E9',
              }}>
                <Sparkles style={{ width: '16px', height: '16px' }} />
              </div>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#0EA5E9', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Procucev Autonomous Platform
              </span>
            </div>

            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0C4A6E', marginBottom: '6px' }}>
              Schedule a 15-Min Live Platform Demo
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#64748B', marginBottom: '24px', lineHeight: 1.65 }}>
              Experience zero human intervention from PR to supplier quotation comparison.
              Saving at procurement is direct profit for your company.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={labelStyle}>Full Name *</label>
                  <div style={iconWrapStyle}>
                    <User style={iconStyle} />
                    <input
                      type="text" required placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      style={inputStyle} id="modal-name"
                    />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Official Email *</label>
                  <div style={iconWrapStyle}>
                    <Mail style={iconStyle} />
                    <input
                      type="email" required placeholder="name@company.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      style={inputStyle} id="modal-email"
                    />
                  </div>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={labelStyle}>Mobile Number *</label>
                  <div style={iconWrapStyle}>
                    <Phone style={iconStyle} />
                    <input
                      type="tel" required placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      style={inputStyle} id="modal-phone"
                    />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Company Name *</label>
                  <div style={iconWrapStyle}>
                    <Building style={iconStyle} />
                    <input
                      type="text" required placeholder="e.g. Retail Enterprises Ltd"
                      value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                      style={inputStyle} id="modal-company"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label style={labelStyle}>Primary Procurement Category</label>
                <select
                  value={formData.spendCategory}
                  onChange={e => setFormData({ ...formData, spendCategory: e.target.value })}
                  style={{ ...inputStyle, paddingLeft: '14px', cursor: 'pointer' }}
                  id="modal-category"
                >
                  <option>Packaging & Corrugated Cartons</option>
                  <option>Raw Materials & Industrial Metals</option>
                  <option>Logistics & Transportation</option>
                  <option>Chemicals & Ingredients</option>
                  <option>MRO & Indirect Supplies</option>
                </select>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg"
                style={{ width: '100%', marginTop: '4px' }}
                id="modal-submit"
              >
                Confirm Live Demo Booking <ArrowRight style={{ width: '16px', height: '16px' }} />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '0.78rem', color: '#94A3B8' }}>
                <ShieldCheck style={{ width: '14px', height: '14px', color: '#10B981' }} />
                <span>Zero Upfront Fee · Gain-Share Model Available</span>
              </div>
            </form>
          </div>
        ) : (
          <div style={{ padding: '48px 36px', textAlign: 'center' }}>
            <div style={{
              width: '64px', height: '64px', borderRadius: '50%',
              background: 'rgba(16,185,129,0.12)',
              border: '1px solid rgba(16,185,129,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 16px',
            }}>
              <CheckCircle2 style={{ width: '32px', height: '32px', color: '#10B981' }} />
            </div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0C4A6E', marginBottom: '8px' }}>
              Demo Booking Confirmed!
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#64748B', maxWidth: '380px', margin: '0 auto 24px', lineHeight: 1.65 }}>
              Thank you, <strong style={{ color: '#0C4A6E' }}>{formData.name}</strong>. Our procurement solution
              architect will contact you at <strong style={{ color: '#0C4A6E' }}>{formData.email}</strong> shortly
              with your customized demo link.
            </p>
            <button
              onClick={handleReset}
              className="btn btn-white"
              id="modal-close-confirm"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
