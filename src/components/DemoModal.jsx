import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Building,
  Mail,
  Phone,
  User,
  Loader2,
  AlertCircle
} from 'lucide-react';

export default function DemoModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [botcheck, setBotcheck] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    spendCategory: 'Packaging & Corrugated Cartons',
  });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);

    // Spam honeypot: silently ignore if bot filled hidden field
    if (botcheck) {
      setSubmitted(true);
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey || accessKey === 'your_web3forms_access_key_here') {
      setErrorMessage(
        'Web3Forms Access Key is not configured. Please add VITE_WEB3FORMS_ACCESS_KEY in your .env or Vercel environment variables.'
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        access_key: accessKey,
        subject: `New Procucev Demo Request: ${formData.company ? formData.company + ' - ' : ''}${formData.name}`,
        from_name: 'Procucev Demo Booking',
        replyto: formData.email,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        procurement_category: formData.spendCategory,
        botcheck: false,
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setErrorMessage(null);
      } else {
        setErrorMessage(
          result.message || 'Something went wrong while booking the demo. Please try again or email info@procucev.com.'
        );
      }
    } catch (err) {
      console.error('Demo booking error:', err);
      setErrorMessage(
        'Unable to submit request due to a network error. Please try again or email info@procucev.com directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrorMessage(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      spendCategory: 'Packaging & Corrugated Cartons',
    });
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
    position: 'absolute',
    left: '12px',
    top: '11px',
    width: '16px',
    height: '16px',
    color: '#94A3B8',
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        background: 'rgba(12, 74, 110, 0.55)',
        backdropFilter: 'blur(10px)',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '560px',
          maxHeight: '95vh',
          overflowY: 'auto',
          background: '#ffffff',
          borderRadius: '24px',
          boxShadow: '0 32px 80px rgba(12,74,110,0.22)',
          border: '1px solid #E2E8F0',
          animation: 'modalIn 0.28s ease',
        }}
      >
        <style>{`
          @keyframes modalIn {
            from { opacity: 0; transform: scale(0.94) translateY(12px); }
            to   { opacity: 1; transform: scale(1) translateY(0); }
          }
          @keyframes spin {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
          .spin-animate {
            animation: spin 1s linear infinite;
          }
        `}</style>

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close Modal"
          id="modal-close-btn"
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            zIndex: 10,
            background: '#F8FAFC',
            border: '1px solid #E2E8F0',
            borderRadius: '50%',
            padding: '6px',
            cursor: 'pointer',
            color: '#64748B',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
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
              <div
                style={{
                  padding: '7px',
                  background: 'rgba(14,165,233,0.10)',
                  borderRadius: '10px',
                  color: '#0EA5E9',
                }}
              >
                <Sparkles style={{ width: '16px', height: '16px' }} />
              </div>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: '#0EA5E9',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                Procucev Autonomous Platform
              </span>
            </div>

            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0C4A6E', marginBottom: '6px' }}>
              Schedule a 15-Min Live Platform Demo
            </h3>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {/* Honeypot field for spam prevention */}
              <input
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                style={{ display: 'none' }}
                checked={botcheck}
                onChange={(e) => setBotcheck(e.target.checked)}
              />

              {errorMessage && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    background: '#FEF2F2',
                    border: '1px solid #FECACA',
                    borderRadius: '10px',
                    padding: '10px 14px',
                    marginBottom: '4px',
                  }}
                  role="alert"
                >
                  <AlertCircle size={16} style={{ color: '#EF4444', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.82rem', color: '#B91C1C', lineHeight: 1.4 }}>
                    {errorMessage}
                  </span>
                </div>
              )}

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={labelStyle} htmlFor="modal-name">Full Name *</label>
                  <div style={iconWrapStyle}>
                    <User style={iconStyle} />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={inputStyle}
                      id="modal-name"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                <div>
                  <label style={labelStyle} htmlFor="modal-email">Official Email *</label>
                  <div style={iconWrapStyle}>
                    <Mail style={iconStyle} />
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={inputStyle}
                      id="modal-email"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={labelStyle} htmlFor="modal-phone">Mobile Number *</label>
                  <div style={iconWrapStyle}>
                    <Phone style={iconStyle} />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={inputStyle}
                      id="modal-phone"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                <div>
                  <label style={labelStyle} htmlFor="modal-company">Company Name *</label>
                  <div style={iconWrapStyle}>
                    <Building style={iconStyle} />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Retail Enterprises Ltd"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      style={inputStyle}
                      id="modal-company"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
              </div>
              <div>
                <label style={labelStyle} htmlFor="modal-category">Primary Procurement Category</label>
                <select
                  value={formData.spendCategory}
                  onChange={(e) => setFormData({ ...formData, spendCategory: e.target.value })}
                  style={{ ...inputStyle, paddingLeft: '14px', cursor: 'pointer' }}
                  id="modal-category"
                  disabled={isSubmitting}
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
                style={{
                  width: '100%',
                  marginTop: '4px',
                  opacity: isSubmitting ? 0.8 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
                id="modal-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    Booking Demo... <Loader2 size={16} className="spin-animate" />
                  </>
                ) : (
                  <>
                    Confirm Live Demo Booking <ArrowRight style={{ width: '16px', height: '16px' }} />
                  </>
                )}
              </button>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  fontSize: '0.78rem',
                  color: '#94A3B8',
                }}
              >
                <ShieldCheck style={{ width: '14px', height: '14px', color: '#10B981' }} />
                <span>Zero Upfront Fee · Gain-Share Model Available</span>
              </div>
            </form>
          </div>
        ) : (
          <div style={{ padding: '48px 36px', textAlign: 'center' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(16,185,129,0.12)',
                border: '1px solid rgba(16,185,129,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
              }}
            >
              <CheckCircle2 style={{ width: '32px', height: '32px', color: '#10B981' }} />
            </div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0C4A6E', marginBottom: '8px' }}>
              Demo Booking Confirmed!
            </h3>
            <p
              style={{
                fontSize: '0.9rem',
                color: '#64748B',
                maxWidth: '380px',
                margin: '0 auto 24px',
                lineHeight: 1.65,
              }}
            >
              Thank you, <strong style={{ color: '#0C4A6E' }}>{formData.name}</strong>. Your demo request has been forwarded to our team at <strong>info@procucev.com</strong>. Our procurement solution architect will contact you at <strong style={{ color: '#0C4A6E' }}>{formData.email}</strong> shortly with your customized demo link.
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
