import React from 'react';

const logos = [
  { name: 'Arvind Fashions', src: '/Arvind Fashions.png' },
  { name: 'Dindigul Thalappakatti', src: '/Dindigul-Thalappakatti.png' },
  { name: 'HomeLane', src: '/HomeLane_idSNQsmKwb_1.png' },
  { name: 'Enamor', src: '/enamor.png' },
  { name: 'HBD', src: '/hbd.webp' },
  { name: 'Muthoot Finance', src: '/muthoot-finance.png' },
  { name: 'Third Wave Coffee', src: '/thirdwavecoffe.png' }
];

export default function LogoMarquee() {
  return (
    <div className="logo-marquee-section">
      <div className="logo-marquee-container">
        <div className="logo-marquee-track">
          {/* Duplicate logos to create an infinite loop effect */}
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div key={index} className="marquee-logo-wrapper">
              <img src={logo.src} alt={logo.name} className="marquee-logo" />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .logo-marquee-section {
          background: #ffffff;
          padding: 40px 0;
          border-bottom: 1px solid #e2e8f0;
          overflow: hidden;
        }
        .logo-marquee-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
        }
        /* Gradient mask for smooth fade on edges */
        .logo-marquee-container::before,
        .logo-marquee-container::after {
          content: "";
          position: absolute;
          top: 0;
          width: 150px;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }
        .logo-marquee-container::before {
          left: 0;
          background: linear-gradient(to right, #ffffff 0%, transparent 100%);
        }
        .logo-marquee-container::after {
          right: 0;
          background: linear-gradient(to left, #ffffff 0%, transparent 100%);
        }
        
        .logo-marquee-track {
          display: flex;
          align-items: center;
          gap: 60px;
          width: max-content;
          animation: marquee-scroll 35s linear infinite;
        }
        
        .marquee-logo-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 160px;
          height: 80px;
        }
        
        .marquee-logo {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          filter: grayscale(100%) opacity(0.7);
          transition: filter 0.3s ease;
        }
        
        .marquee-logo:hover {
          filter: grayscale(0%) opacity(1);
        }

        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-1 * (160px + 60px) * 7)); /* width + gap * number of unique logos */
          }
        }
        
        @media (max-width: 768px) {
          .logo-marquee-track {
            gap: 40px;
          }
          .marquee-logo-wrapper {
            width: 120px;
          }
          @keyframes marquee-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-1 * (120px + 40px) * 7)); }
          }
          .logo-marquee-container::before,
          .logo-marquee-container::after {
            width: 80px;
          }
        }
      `}</style>
    </div>
  );
}
