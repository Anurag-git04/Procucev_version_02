import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, ShieldCheck, MessageCircle, ExternalLink, Loader2, AlertCircle } from 'lucide-react';

export default function ContactSection({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', roleType: 'Buyer', message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [botcheck, setBotcheck] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);

    // Spam honeypot: silently discard if bot filled hidden field
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
        subject: `New Procucev Lead: ${formData.company ? formData.company + ' - ' : ''}${formData.name}`,
        from_name: 'Procucev Website Form',
        replyto: formData.email,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        role: formData.roleType,
        message: formData.message,
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
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          roleType: 'Buyer',
          message: '',
        });
        setErrorMessage(null);
      } else {
        setErrorMessage(
          result.message || 'Something went wrong while submitting the enquiry. Please try again or reach out directly to info@procucev.com.'
        );
      }
    } catch (err) {
      console.error('Submission error:', err);
      setErrorMessage(
        'Unable to send message due to a network error. Please try again or email us directly at info@procucev.com.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactItems = [
    {
      icon: <Mail size={18} style={{ color: '#F97316' }} />,
      iconBg: 'rgba(249,115,22,0.10)',
      label: 'Enterprise Qua AI & General Inquiries',
      val: 'info@procucev.com',
      href: 'mailto:info@procucev.com',
    },
    {
      icon: <Send size={18} style={{ color: '#0EA5E9' }} />,
      iconBg: 'rgba(14,165,233,0.10)',
      label: 'Send Buying Requirements',
      val: 'RFQ@procucev.com',
      href: 'mailto:RFQ@procucev.com',
    },
    {
      icon: <MessageCircle size={18} style={{ color: '#25D366' }} />,
      iconBg: 'rgba(37,211,102,0.10)',
      label: 'WhatsApp Support',
      val: '+91 70901 70801',
      href: 'https://wa.me/917090170801',
    },
  ];

  return (
    <section className="v2-contact-section section" id="contact">
      <div className="container">

        {/* Header */}
        <div className="v2-section-header text-center">
          <div className="badge-tag-pill">
            <Mail size={14} style={{ color: '#0EA5E9' }} /> Contact Us
          </div>
          <h2 className="v2-section-title">
            Let's talk <span style={{ color: '#F97316', fontStyle: 'italic' }}>procurement</span>
          </h2>
        </div>

        <div className="ct-grid">

          {/* Left Info */}
          <div className="ct-info-card">
            <h3 className="ct-info-h">Direct Contact Channels</h3>
            <div className="ct-items-list">
              {contactItems.map((item, i) => (
                <div key={i} className="ct-item">
                  <div className="ct-item-icon" style={{ background: item.iconBg }}>
                    {item.icon}
                  </div>
                  <div>
                    <span className="ct-lbl">{item.label}</span>
                    <a href={item.href} className="ct-val">{item.val}</a>
                  </div>
                </div>
              ))}
            </div>
            <div className="ct-addr">
              <MapPin size={18} style={{ color: '#F97316', flexShrink: 0 }} />
              <div>
                <strong style={{ display: 'block', color: '#0C4A6E', marginBottom: '4px', fontSize: '0.88rem' }}>
                  Head Office:
                </strong>
                <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.5, margin: 0 }}>
                  302, Sharada, AECS Layout, Kundalahalli,<br />
                  Bengaluru 560037, India
                </p>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="ct-map-container">
              <iframe
                title="Procucev Enterprise Solutions Location"
                src="https://maps.google.com/maps?q=12.9643645,77.7134303&hl=en&z=16&output=embed"
                width="100%"
                height="200"
                style={{ border: 0, display: 'block', width: '100%' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href="https://www.google.com/maps/place/Procucev+Enterprise+Solutions+Private+Limited/@12.9643645,77.7108554,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae136f36919f15:0x51124838dca8c279!8m2!3d12.9643645!4d77.7134303!16s%2Fg%2F11pz1c87s7"
                target="_blank"
                rel="noopener noreferrer"
                className="ct-map-direct-link"
              >
                <span>View on Google Maps</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="ct-form-card">
            {submitted ? (
              <div className="ct-success">
                <div className="ct-success-circle">
                  <CheckCircle2 size={32} style={{ color: '#10B981' }} />
                </div>
                <h3 className="ct-success-h">Enquiry Submitted!</h3>
                <p className="ct-success-p">
                  Thank you for reaching out to Procucev. Your enquiry has been received and forwarded to <strong>info@procucev.com</strong>.
                  Our procurement specialists will get back to you within one working day.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setErrorMessage(null);
                  }}
                  className="btn btn-primary"
                  style={{ marginTop: '16px' }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="ct-form">
                <h3 className="ct-form-h">Send an Enquiry</h3>

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
                  <div className="ct-error-alert" role="alert">
                    <AlertCircle size={18} style={{ color: '#EF4444', flexShrink: 0, marginTop: '2px' }} />
                    <div style={{ flex: 1 }}>
                      <strong style={{ display: 'block', color: '#991B1B', fontSize: '0.86rem', marginBottom: '2px' }}>
                        Submission Failed
                      </strong>
                      <span style={{ fontSize: '0.82rem', color: '#B91C1C', lineHeight: 1.4 }}>
                        {errorMessage}
                      </span>
                    </div>
                  </div>
                )}

                <div className="ct-form-2col">
                  <div className="ct-fg">
                    <label className="form-label" htmlFor="contact-name">Name *</label>
                    <input
                      type="text" required placeholder="Your full name"
                      className="form-input"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      id="contact-name"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="ct-fg">
                    <label className="form-label" htmlFor="contact-email">Work Email *</label>
                    <input
                      type="email" required placeholder="name@company.com"
                      className="form-input"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      id="contact-email"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                <div className="ct-form-2col">
                  <div className="ct-fg">
                    <label className="form-label" htmlFor="contact-phone">Phone *</label>
                    <input
                      type="tel" required placeholder="+91 98765 43210"
                      className="form-input"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      id="contact-phone"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="ct-fg">
                    <label className="form-label" htmlFor="contact-company">Company *</label>
                    <input
                      type="text" required placeholder="Company Name"
                      className="form-input"
                      value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                      id="contact-company"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                <div className="ct-fg">
                  <label className="form-label" htmlFor="contact-role">I am a *</label>
                  <select
                    className="cons-select"
                    value={formData.roleType}
                    onChange={e => setFormData({ ...formData, roleType: e.target.value })}
                    id="contact-role"
                    disabled={isSubmitting}
                  >
                    <option value="Buyer">Buyer</option>
                    <option value="Supplier">Supplier</option>
                    <option value="Enterprise">Enterprise</option>
                    <option value="Partner">Partner</option>
                  </select>
                </div>
                <div className="ct-fg">
                  <label className="form-label" htmlFor="contact-message">Message *</label>
                  <textarea
                    rows={4} required
                    placeholder="Tell us about your requirement or procurement spend..."
                    className="form-input"
                    style={{ resize: 'vertical', fontFamily: "'Poppins', sans-serif" }}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    id="contact-message"
                    disabled={isSubmitting}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{
                    width: '100%',
                    opacity: isSubmitting ? 0.8 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                  id="contact-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      Sending Enquiry... <Loader2 size={16} className="spin-animate" />
                    </>
                  ) : (
                    <>
                      Submit Enquiry <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>

      {/* Bottom Footer */}
      <footer className="v2-bottom-bar">
        <div className="container v2-bottom-inner">
          <span>© 2026 Procucev Enterprise Solutions Pvt Ltd. All rights reserved.</span>
          <div className="v2-bottom-links">
            <a
              href="/privacy-policy"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate("/privacy-policy");
                else window.location.href = "/privacy-policy";
              }}
            >
              Privacy Policy
            </a>
            <span>·</span>
            <a
              href="/privacy-policy#terms"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate("/privacy-policy", "#preamble");
                else window.location.href = "/privacy-policy#preamble";
              }}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>

      <style>{`
        .v2-contact-section {
          background: #ffffff;
          border-top: 1px solid #E2E8F0;
          padding-bottom: 0;
        }

        /* Grid */
        .ct-grid {
          display: grid;
          grid-template-columns: 5fr 7fr;
          gap: 36px;
          margin-bottom: 64px;
        }

        /* Info card */
        .ct-info-card {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 24px;
          padding: 36px;
          display: flex; flex-direction: column;
        }
        .ct-info-h {
          font-size: 1.3rem; font-weight: 800;
          color: #0C4A6E; margin-bottom: 24px;
        }
        .ct-items-list {
          display: flex; flex-direction: column;
          gap: 18px; margin-bottom: 28px; flex: 1;
        }
        .ct-item {
          display: flex; align-items: center; gap: 14px;
        }
        .ct-item-icon {
          width: 40px; height: 40px; border-radius: 12px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
        }
        .ct-lbl {
          display: block; font-size: 0.7rem; font-weight: 700;
          color: #94A3B8; text-transform: uppercase; letter-spacing: 0.4px;
        }
        .ct-val {
          display: block; font-size: 0.93rem; font-weight: 700;
          color: #0C4A6E; text-decoration: none;
          transition: color 0.2s;
        }
        .ct-val:hover { color: #F97316; }
        .ct-addr {
          display: flex; gap: 12px;
          border-top: 1px solid #E2E8F0;
          padding-top: 20px;
        }
        .ct-map-container {
          margin-top: 18px;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid #E2E8F0;
          background: #F8FAFC;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }
        .ct-map-direct-link {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 8px 12px;
          font-size: 0.82rem;
          font-weight: 700;
          color: #0EA5E9;
          text-decoration: none;
          background: #ffffff;
          border-top: 1px solid #E2E8F0;
          transition: all 0.2s;
        }
        .ct-map-direct-link:hover {
          color: #F97316;
          background: #FFF7ED;
        }

        /* Form card */
        .ct-form-card {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 24px;
          padding: 36px;
        }
        .ct-form-h {
          font-size: 1.4rem; font-weight: 800;
          color: #0C4A6E; margin-bottom: 24px;
        }
        .ct-form-2col {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        .ct-fg { margin-bottom: 16px; }

        .ct-error-alert {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: #FEF2F2;
          border: 1px solid #FECACA;
          border-radius: 12px;
          padding: 14px 16px;
          margin-bottom: 20px;
        }

        .spin-animate {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .ct-success {
          text-align: center;
          display: flex; flex-direction: column; align-items: center;
          padding: 32px 0;
        }
        .ct-success-circle {
          width: 64px; height: 64px; border-radius: 50%;
          background: rgba(16,185,129,0.12);
          border: 1px solid rgba(16,185,129,0.3);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 16px;
        }
        .ct-success-h {
          font-size: 1.5rem; font-weight: 800;
          color: #0C4A6E; margin-bottom: 8px;
        }
        .ct-success-p {
          font-size: 0.92rem; color: #64748B; max-width: 360px; line-height: 1.65;
        }

        /* Bottom bar */
        .v2-bottom-bar {
          background: #0C4A6E;
          color: rgba(255,255,255,0.65);
          font-size: 0.82rem;
          padding: 20px 0;
        }
        .v2-bottom-inner {
          display: flex; align-items: center;
          justify-content: space-between; flex-wrap: wrap; gap: 8px;
        }
        .v2-bottom-links {
          display: flex; align-items: center; gap: 10px;
        }
        .v2-bottom-links a {
          color: rgba(255,255,255,0.7);
          text-decoration: none; transition: color 0.2s;
        }
        .v2-bottom-links a:hover { color: #F97316; }

        /* Shared select style */
        .cons-select {
          width: 100%; padding: 11px 14px;
          border: 1px solid #E2E8F0; border-radius: 12px;
          background: #ffffff; color: #334155;
          font-family: 'Poppins', sans-serif;
          font-size: 0.9rem; font-weight: 500;
          cursor: pointer; outline: none;
        }
        .cons-select:focus { border-color: #0EA5E9; }

        @media (max-width: 900px) {
          .ct-grid { grid-template-columns: 1fr; }
          .ct-form-2col { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
