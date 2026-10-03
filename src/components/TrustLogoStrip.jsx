import React from 'react';

export default function TrustLogoStrip() {
  const clientBrands = [
    { name: "THIRD WAVE COFFEE", tag: "Coffee & Beverage" },
    { name: "HDB FINANCIAL SERVICES", tag: "Financial Services" },
    { name: "THALAPPAKATTI RESTAURANT", tag: "Food & Hospitality" },
    { name: "SPENCER'S", tag: "Retail & Hypermarket" },
    { name: "ARVIND FASHIONS", tag: "Apparel & Brands" },
    { name: "ENAMOR", tag: "Consumer Brands" },
    { name: "MUTHOOT FINANCE", tag: "Banking & NBFC" },
    { name: "AB MAURI", tag: "Baking & Ingredients" },
    { name: "HOMELANE", tag: "Home Interiors" }
  ];

  return (
    <section className="logo-strip-section">
      <div className="container">
        
        <div className="logos-flex-row">
          {clientBrands.map((brand, index) => (
            <div key={index} className="logo-item-box">
              <span className="logo-brand-name">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .logo-strip-section {
          background: #ffffff;
          padding: 28px 0;
          border-bottom: 1px solid var(--border-light);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
        }
        .logos-flex-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 28px 36px;
          flex-wrap: wrap;
        }
        .logo-item-box {
          padding: 8px 16px;
          border-radius: 8px;
          background: #f8fafc;
          border: 1px solid rgba(226, 232, 240, 0.8);
          opacity: 0.85;
          transition: var(--transition);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .logo-item-box:hover {
          opacity: 1;
          transform: translateY(-2px);
          border-color: #0EA5E9;
          background: #ffffff;
          box-shadow: 0 4px 14px rgba(14, 165, 233, 0.15);
        }
        .logo-brand-name {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 0.88rem;
          letter-spacing: 0.5px;
          color: #0C4A6E;
          white-space: nowrap;
        }
        @media (max-width: 768px) {
          .logos-flex-row {
            gap: 16px;
          }
          .logo-brand-name {
            font-size: 0.82rem;
          }
        }
      `}</style>
    </section>
  );
}
