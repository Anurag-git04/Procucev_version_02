import React from 'react';
import { Building2, Quote } from 'lucide-react';

export default function ClientsSection() {
  const clients = [
    'Third Wave Coffee',
    'HDB Financial Services',
    'Thalappakatti Restaurant',
    "Spencer's",
    'Arvind Fashions',
    'Enamor',
    'Muthoot Finance',
    'AB Mauri',
    'HomeLane',
  ];

  const industries = [
    'Retail',
    'Food & Beverage',
    'Financial Services',
    'Fashion & Apparel',
    'Home & Interiors',
    'FMCG Ingredients',
  ];

  const testimonials = [
    {
      quote:
        'GMT has significantly reduced both my sourcing time and costs. GMT is our primary channel for sourcing the right vendor for the right product at a right price.',
      name: 'Kalpana',
      title: 'Procurement Manager',
      company: 'Leading Enterprise Brand',
    },
    {
      quote:
        "With Procucev's consulting services and price benchmarking, we got clarity and pricing transparency. It is our go-to approach for key sourcing decisions.",
      name: 'Priya',
      title: 'Head – Procurement & Admin',
      company: 'Logistics & Infrastructure',
    },
    {
      quote:
        "Packaging material pricing was always difficult. With Procucev's Price Benchmarking and Category Management, our effort was dramatically reduced.",
      name: 'Ramesh',
      title: 'Procurement Manager',
      company: 'Agrochemical Manufacturing',
    },
  ];

  return (
    <section className="v2-clients-section section" id="clients">
      <div className="container">

        {/* Header */}
        <div className="v2-section-header text-center">
          <div className="badge-tag-pill">
            <Building2 size={14} style={{ color: '#0EA5E9' }} /> Our Clients
          </div>
          <h2 className="v2-section-title">
            Trusted by leading brands <br />
            <span style={{ color: '#F97316', fontStyle: 'italic' }}>across India</span>
          </h2>
          <p className="v2-section-desc">
            From high-growth retail chains to enterprise manufacturers, leading brands rely on
            Procucev for procurement savings and automation.
          </p>
        </div>

        {/* Brand chips Marquee */}
        <div className="cl-marquee-container">
          <div className="cl-marquee-track">
            <div className="cl-marquee-set">
              {clients.map((brand, i) => (
                <div key={`a-${i}`} className="cl-brand-chip">
                  <span className="cl-brand-dot" />
                  <span>{brand}</span>
                </div>
              ))}
            </div>
            <div className="cl-marquee-set" aria-hidden="true">
              {clients.map((brand, i) => (
                <div key={`b-${i}`} className="cl-brand-chip">
                  <span className="cl-brand-dot" />
                  <span>{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Industries */}
        <div className="cl-ind-box">
          <h3 className="cl-ind-title">Industries We Serve</h3>
          <div className="cl-ind-pills">
            {industries.map((ind, i) => (
              <span key={i} className="cl-ind-pill">{ind}</span>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="cl-testi-block">
          <h3 className="cl-testi-heading text-center">What Our Clients Say</h3>
          <div className="cl-testi-grid">
            {testimonials.map((item, i) => (
              <div key={i} className="cl-testi-card">
                <Quote size={28} style={{ color: '#F97316', opacity: 0.6, marginBottom: '12px' }} />
                <p className="cl-testi-q">"{item.quote}"</p>
                <div className="cl-testi-meta">
                  <strong className="cl-t-name">{item.name}</strong>
                  <span className="cl-t-title">{item.title}</span>
                  <span className="cl-t-comp">{item.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .v2-clients-section {
          background: #ffffff;
          border-top: 1px solid #E2E8F0;
        }

        /* Brands Marquee */
        .cl-marquee-container {
          overflow: hidden;
          width: 100%;
          margin-bottom: 40px;
          display: flex;
          position: relative;
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        
        .cl-marquee-track {
          display: flex;
          gap: 12px;
        }

        .cl-marquee-set {
          display: flex;
          gap: 12px;
          flex-shrink: 0;
          animation: marquee 20s linear infinite;
        }

        .cl-marquee-track:hover .cl-marquee-set {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% - 12px)); }
        }

        .cl-brand-chip {
          display: flex; align-items: center; gap: 8px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 999px;
          padding: 8px 18px;
          font-size: 0.88rem; font-weight: 700;
          color: #0C4A6E;
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        .cl-brand-chip:hover {
          border-color: #0EA5E9;
          background: rgba(14,165,233,0.06);
          color: #0284C7;
        }
        .cl-brand-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #0EA5E9; flex-shrink: 0;
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

        /* Testimonials */
        .cl-testi-heading {
          font-size: 1.5rem; font-weight: 800;
          color: #0C4A6E; margin-bottom: 28px;
        }
        .cl-testi-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .cl-testi-card {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 28px;
          display: flex; flex-direction: column;
          transition: all 0.3s ease;
        }
        .cl-testi-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(12,74,110,0.09);
          border-color: #0EA5E9;
          background: #ffffff;
        }
        .cl-testi-q {
          font-size: 0.92rem; color: #475569;
          line-height: 1.65; font-style: italic;
          flex: 1; margin-bottom: 20px;
        }
        .cl-testi-meta {
          border-top: 1px solid #E2E8F0;
          padding-top: 16px;
          display: flex; flex-direction: column; gap: 2px;
        }
        .cl-t-name {
          font-size: 0.95rem; font-weight: 800; color: #0C4A6E;
        }
        .cl-t-title {
          font-size: 0.8rem; color: #F97316; font-weight: 600;
        }
        .cl-t-comp {
          font-size: 0.78rem; color: #94A3B8;
        }

        @media (max-width: 900px) {
          .cl-testi-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
