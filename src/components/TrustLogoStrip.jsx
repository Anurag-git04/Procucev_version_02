import React from 'react';

export default function TrustLogoStrip() {
  const logos = [
    "TORAY", "LUCID MOTORS", "BLUE CROSS BLUE SHIELD", "TREEHOUSE", "CONGRUEX", "ULTRATECH CEMENT", "UPL AGROCHEMICALS"
  ];

  return (
    <section className="logo-strip-section">
      <div className="container">
        <p className="strip-title">Procurement is the finance hero behind 500+ crores in Retail, E-Commerce & Consumer Brands</p>
        
        <div className="logos-flex-row">
          {logos.map((logo, index) => (
            <div key={index} className="logo-item-box">
              <span className="logo-brand-name">{logo}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .logo-strip-section {
          background: #ffffff;
          padding: 36px 0;
          border-bottom: 1px solid var(--border-light);
        }
        .strip-title {
          text-align: center;
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 24px;
        }
        .logos-flex-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
        }
        .logo-item-box {
          opacity: 0.7;
          transition: var(--transition);
        }
        .logo-item-box:hover {
          opacity: 1;
        }
        .logo-brand-name {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.15rem;
          letter-spacing: 1.5px;
          color: var(--text-dark);
        }
        @media (max-width: 768px) {
          .logos-flex-row {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
