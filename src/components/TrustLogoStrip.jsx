import React from 'react';

export default function TrustLogoStrip() {
  const clientBrands = [
    { name: "DR. REDDY'S", tag: "Pharmaceuticals" },
    { name: "SPENCER'S", tag: "Retail & Hypermarket" },
    { name: "ARVIND FASHIONS", tag: "Apparel & Brands" },
    { name: "BOROSIL", tag: "Consumerware & Glass" },
    { name: "FLYING MACHINE", tag: "Denim & Apparel" },
    { name: "LIVSPACE", tag: "Home Interiors" },
    { name: "AGS TRANSACT", tag: "Payment Solutions" },
    { name: "THIRD WAVE COFFEE", tag: "Coffee & Beverage" },
    { name: "WAAREE ENERGIES", tag: "Solar & Clean Energy" },
    { name: "HOMELANE", tag: "Home Interiors" },
    { name: "VIRAJ PROFILES", tag: "Stainless Steel & Manufacturing" },
    { name: "MUTHOOT FINANCE", tag: "Banking & NBFC" },
    { name: "KESORAM", tag: "Cement & Heavy Industry" },
    { name: "ENAMOR", tag: "Consumer Brands" },
    { name: "MODENIK LIFESTYLE", tag: "Apparel & Fashion" },
    { name: "THALAPPAKATTI RESTAURANT", tag: "Food & Hospitality" },
    { name: "NIRANI SUGARS", tag: "Sugar & Biofuels" },
    { name: "HDB FINANCIAL SERVICES", tag: "Financial Services" },
    { name: "SHIVA SHAKTHI", tag: "Agritech & Farming" },
    { name: "ROBO SILICON", tag: "Construction & Sand" },
    { name: "MAHAJAN & AIBARA", tag: "Advisory & Consulting" },
    { name: "AB MAURI", tag: "Baking & Ingredients" }
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
