import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', roleType: 'Buyer', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactItems = [
    {
      icon: <Mail size={18} style={{ color: '#F97316' }} />,
      iconBg: 'rgba(249,115,22,0.10)',
      label: 'Enterprise (eQua AI) General Enquiries',
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
      icon: <Phone size={18} style={{ color: '#10B981' }} />,
      iconBg: 'rgba(16,185,129,0.10)',
      label: 'Phone Support',
      val: '+91 80 4567 8900',
      href: 'tel:+918045678900',
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
          <p className="v2-section-desc">
            Tell us what you need and the right team will get back to you within one working day.
          </p>
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
                <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.5 }}>
                  302, Sharada, AECS Layout, Kundalahalli,<br />
                  Bengaluru 560037, India
                </p>
              </div>
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
                  Thank you for reaching out to Procucev. Our procurement specialists
                  will get back to you within one working day.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn btn-primary" style={{ marginTop: '16px' }}>
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="ct-form">
                <h3 className="ct-form-h">Send an Enquiry</h3>
                <div className="ct-form-2col">
                  <div className="ct-fg">
                    <label className="form-label">Name *</label>
                    <input
                      type="text" required placeholder="Your full name"
                      className="form-input"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      id="contact-name"
                    />
                  </div>
                  <div className="ct-fg">
                    <label className="form-label">Work Email *</label>
                    <input
                      type="email" required placeholder="name@company.com"
                      className="form-input"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      id="contact-email"
                    />
                  </div>
                </div>
                <div className="ct-form-2col">
                  <div className="ct-fg">
                    <label className="form-label">Phone *</label>
                    <input
                      type="tel" required placeholder="+91 98765 43210"
                      className="form-input"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      id="contact-phone"
                    />
                  </div>
                  <div className="ct-fg">
                    <label className="form-label">Company *</label>
                    <input
                      type="text" required placeholder="Company Name"
                      className="form-input"
                      value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                      id="contact-company"
                    />
                  </div>
                </div>
                <div className="ct-fg">
                  <label className="form-label">I am a *</label>
                  <select
                    className="cons-select"
                    value={formData.roleType}
                    onChange={e => setFormData({ ...formData, roleType: e.target.value })}
                    id="contact-role"
                  >
                    <option value="Buyer">Buyer</option>
                    <option value="Supplier">Supplier</option>
                    <option value="Enterprise">Enterprise</option>
                    <option value="Partner">Partner</option>
                  </select>
                </div>
                <div className="ct-fg">
                  <label className="form-label">Message *</label>
                  <textarea
                    rows={4} required
                    placeholder="Tell us about your requirement or procurement spend..."
                    className="form-input"
                    style={{ resize: 'vertical', fontFamily: "'Poppins', sans-serif" }}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    id="contact-message"
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }} id="contact-submit">
                  Submit Enquiry <Send size={16} />
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
            <a href="#">Privacy Policy</a>
            <span>·</span>
            <a href="#">Terms of Service</a>
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

        /* Success state */
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
