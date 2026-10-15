import React from 'react';

const logos = [
  { name: 'Dr. Reddy\'s', src: '/drReddy.png' },
  { name: 'Spencer\'s', src: '/spencers.png' },
  { name: 'Arvind Fashions', src: '/Arvind Fashions.png' },
  { name: 'Borosil', src: '/borosil.png' },
  { name: 'Flying Machine', src: '/flyingMachine.png' },
  { name: 'Livspace', src: '/livespace.png' },
  { name: 'AGS Transact', src: '/agsTransact.png' },
  { name: 'Third Wave Coffee', src: '/thirdwavecoffe.png' },
  { name: 'Waaree Energies', src: '/waree.png' },
  { name: 'HomeLane', src: '/HomeLane_idSNQsmKwb_1.png' },
  { name: 'Viraj Profiles', src: '/viraj.png' },
  { name: 'Muthoot Finance', src: '/muthoot-finance.png' },
  { name: 'Kesoram', src: '/kresoram.png' },
  { name: 'Enamor', src: '/enamor.png' },
  { name: 'Modenik Lifestyle', src: '/modenik.png' },
  { name: 'Dindigul Thalappakatti', src: '/Dindigul-Thalappakatti.png' },
  { name: 'Nirani Sugars', src: '/niraniSugars.png' },
  { name: 'HDB Financial Services', src: '/hbd.webp' },
  { name: 'Shiva Shakthi', src: '/shivasakti.png' },
  { name: 'Robo Silicon', src: '/Robo.png.webp' },
  { name: 'Mahajan & Aibara', src: '/mahajana&Aibara.png' },
  { name: 'AB Mauri', src: '/abmauri.png' },
];

export default function LogoMarquee() {
  return (
    <div className="logo-marquee-section">
      <div className="logo-marquee-container">
        <div className="logo-marquee-track">
          {/* Group 1 */}
          <div className="logo-marquee-group">
            {logos.map((logo, index) => (
              <div key={`g1-${index}`} className="marquee-logo-wrapper" title={logo.name}>
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="marquee-logo"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Group 2 (duplicate for seamless infinite scroll) */}
          <div className="logo-marquee-group" aria-hidden="true">
            {logos.map((logo, index) => (
              <div key={`g2-${index}`} className="marquee-logo-wrapper" title={logo.name}>
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="marquee-logo"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .logo-marquee-section {
          background: #ffffff;
          padding: 34px 0;
          border-bottom: 1px solid #e2e8f0;
          overflow: hidden;
        }
        .logo-marquee-container {
          max-width: 100%;
          margin: 0 auto;
          position: relative;
        }
        /* Gradient mask for smooth fade on left and right edges */
        .logo-marquee-container::before,
        .logo-marquee-container::after {
          content: "";
          position: absolute;
          top: 0;
          width: 140px;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }
        .logo-marquee-container::before {
          left: 0;
          background: linear-gradient(to right, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
        }
        .logo-marquee-container::after {
          right: 0;
          background: linear-gradient(to left, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
        }

        .logo-marquee-track {
          display: flex;
          width: max-content;
          user-select: none;
        }

        .logo-marquee-track:hover .logo-marquee-group {
          animation-play-state: paused;
        }

        .logo-marquee-group {
          display: flex;
          align-items: center;
          gap: 52px;
          padding-right: 52px;
          flex-shrink: 0;
          animation: marquee-scroll 48s linear infinite;
        }

        .marquee-logo-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 170px;
          height: 72px;
          flex-shrink: 0;
        }

        .marquee-logo {
          max-width: 155px;
          max-height: 62px;
          width: auto;
          height: auto;
          object-fit: contain;
          filter: grayscale(100%) opacity(0.82) contrast(1.05);
          transition: all 0.25s ease;
        }

        .marquee-logo-wrapper:hover .marquee-logo {
          filter: grayscale(0%) opacity(1) contrast(1);
          transform: scale(1.08);
        }

        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @media (max-width: 768px) {
          .logo-marquee-section {
            padding: 24px 0;
          }
          .logo-marquee-group {
            gap: 36px;
            padding-right: 36px;
            animation-duration: 38s;
          }
          .marquee-logo-wrapper {
            width: 120px;
            height: 50px;
          }
          .marquee-logo {
            max-width: 105px;
            max-height: 42px;
          }
          .logo-marquee-container::before,
          .logo-marquee-container::after {
            width: 70px;
          }
        }
      `}</style>
    </div>
  );
}

