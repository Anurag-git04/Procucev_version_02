import React, { useState, useEffect } from 'react';
import { ArrowUpRight, CheckCircle2, TrendingUp, Zap, Users, BarChart3, Clock, ChevronLeft } from 'lucide-react';

export default function VideoHero({ onOpenDemo }) {
  const headlines = [
    {
      id: 0,
      prefix: 'Made with the ',
      highlight: 'Love of Procurement',
      suffix: '',
    },
    {
      id: 1,
      prefix: 'Saving at procurement is the ',
      highlight: 'direct profit',
      suffix: ' for your company',
    },
    {
      id: 2,
      prefix: '',
      highlight: 'Zero human intervention',
      suffix: ' from PR to Comparison',
    },
    {
      id: 3,
      prefix: 'Procurement is the finance hero behind 500+ crores for ',
      isDynamic: true,
      words: ['Retail', 'E-commerce', 'Consumer brands'],
      suffix: '',
    },
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const [activeHighlightIdx, setActiveHighlightIdx] = useState(0);
  const [subWordIdx, setSubWordIdx] = useState(0);

  const highlights = [
    'Raise RFQs easier',
    'Reach vendors faster',
    'Get quotations quicker',
    'Compare quotations better',
    'Spend less time and money',
  ];

  /* 3 Hero rotating screens - exact dimensions: 1600 x 792 (~2.02:1 ratio) */
  const heroScreens = [
    {
      src: '/hero1.png',
      alt: 'QUA AI 2.0 Sourcing Dashboard',
      badge: 'Dashboard',
      title: 'Active Procurement Pipeline',
    },
    {
      src: '/hero2.png',
      alt: 'Supplier 6-Pillar Evaluation & Scorecard',
      badge: 'Evaluation Summary',
      title: '360° AI Supplier Scoring',
    },
    {
      src: '/hero3.png',
      alt: 'Vendor Master & PO Data Ingestion Setup',
      badge: 'ERP Setup',
      title: 'PO & Vendor Data Ingestion',
    },
  ];

  const [activeHeroIdx, setActiveHeroIdx] = useState(0);
  const [isHeroPaused, setIsHeroPaused] = useState(false);

  /* Auto-rotate hero images every 3.2 seconds */
  useEffect(() => {
    if (isHeroPaused) return;
    const t = setInterval(() => {
      setActiveHeroIdx(prev => (prev + 1) % heroScreens.length);
    }, 3200);
    return () => clearInterval(t);
  }, [isHeroPaused, heroScreens.length]);

  useEffect(() => {
    const delay = activeIdx === 3 ? 5500 : 4200;
    const t = setTimeout(() => setActiveIdx(i => (i + 1) % headlines.length), delay);
    return () => clearTimeout(t);
  }, [activeIdx, headlines.length]);

  useEffect(() => {
    let t;
    if (activeIdx === 3) {
      setSubWordIdx(0);
      t = setInterval(() => setSubWordIdx(i => (i + 1) % 3), 1700);
    }
    return () => {
      if (t) clearInterval(t);
    };
  }, [activeIdx]);

  useEffect(() => {
    const t2 = setInterval(() => setActiveHighlightIdx(i => (i + 1) % highlights.length), 2500);
    return () => clearInterval(t2);
  }, [highlights.length]);

  const stats = [
    { label: 'Verified Suppliers', value: '6 Lakh+', icon: <Users size={16} /> },
    { label: 'Registered Buyers', value: '2,000+', icon: <BarChart3 size={16} /> },
    { label: 'Quote Turnaround', value: '< 24 Hrs', icon: <Clock size={16} /> },
  ];

  return (
    <section className="v2-hero" id="home">
      {/* ── Background decoration ── */}
      <div className="v2-hero-bg-deco" aria-hidden="true">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="v2-bg-video"
        >
          <source src="/hero_v2.mp4" type="video/mp4" />
        </video>
        <div className="v2-video-overlay" />
        <div className="deco-circle deco-1" />
        <div className="deco-circle deco-2" />
        <div className="deco-stripe" />
      </div>

      <div className="container v2-hero-grid">
        {/* ── Left Column ── */}
        <div className="v2-hero-left">
          {/* Tagline badge */}
          <div className="badge-tag-pill">
            <Zap size={13} style={{ flexShrink: 0 }} />
            <div className="v2-badge-stage">
              {highlights.map((h, i) => (
                <span key={i} className={`v2-badge-slide ${i === activeHighlightIdx ? 'active' : ''}`}>
                  {h}
                </span>
              ))}
            </div>
          </div>

          {/* Rotating Headlines */}
          <div className="v2-headline-stage" role="region" aria-live="polite">
            {headlines.map((item, idx) => {
              const isActive = idx === activeIdx;
              if (item.isGrouped) {
                return (
                  <div key={item.id} className={`v2-slide${isActive ? ' active' : ''}`}>
                    <h1 className="v2-hero-h1">
                      {item.items.map((s, si) => (
                        <span key={si} className="v2-grouped-item">
                          <span className="v2-dot-orange" aria-hidden="true" />
                          <span className="v2-highlight">{s}</span>
                        </span>
                      ))}
                    </h1>
                  </div>
                );
              }
              if (item.isDynamic) {
                return (
                  <div key={item.id} className={`v2-slide${isActive ? ' active' : ''}`}>
                    <h1 className="v2-hero-h1">
                      {item.prefix}
                      <span className="v2-highlight" style={{ display: 'inline-flex', position: 'relative', verticalAlign: 'bottom' }}>
                        {item.words.map((w, wIdx) => (
                           <span 
                             key={wIdx} 
                             style={{ 
                               position: wIdx === subWordIdx ? 'relative' : 'absolute', 
                               opacity: wIdx === subWordIdx ? 1 : 0, 
                               transform: wIdx === subWordIdx ? 'translateY(0)' : 'translateY(12px)',
                               transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                               left: 0,
                               top: 0,
                               visibility: wIdx === subWordIdx ? 'visible' : 'hidden',
                               color: '#F97316'
                             }}
                           >
                             {w}
                           </span>
                        ))}
                      </span>
                      {item.suffix}
                    </h1>
                  </div>
                );
              }
              return (
                <div key={item.id} className={`v2-slide${isActive ? ' active' : ''}`}>
                  <h1 className="v2-hero-h1">
                    {item.prefix}
                    <span className="v2-highlight">{item.highlight}</span>
                    {item.suffix}
                  </h1>
                </div>
              );
            })}
          </div>

          {/* CTAs */}
          <div className="v2-hero-ctas">
            <a
              href="https://qua.procucev.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-blue btn-lg"
              id="hero-rfq-btn"
            >
              Raise an RFQ, it's free <ArrowUpRight size={18} />
            </a>
            <a
              href="https://qua.procucev.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-orange btn-lg"
              id="hero-supplier-btn"
            >
              Become a Seller <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Stats bar */}
          <div className="v2-stats-bar">
            {stats.map((s, i) => (
              <React.Fragment key={i}>
                {i > 0 && <div className="v2-stat-divider" />}
                <div className="v2-stat">
                  <span className="v2-stat-icon">{s.icon}</span>
                  <div>
                    <span className="v2-stat-val">{s.value}</span>
                    <span className="v2-stat-label">{s.label}</span>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ── Right Column: Snug-fit Rotating Hero Screenshots (Zero empty bottom space) ── */}
        <div className="v2-hero-right">
          <div
            className="v2-hero-showcase-card"
            onMouseEnter={() => setIsHeroPaused(true)}
            onMouseLeave={() => setIsHeroPaused(false)}
            onClick={onOpenDemo}
            title="Click to explore interactive demo"
          >
            {/* Top Browser / App chrome */}
            <div className="v2-showcase-browser-bar">
              <div className="v2-browser-dots">
                <span className="v2-b-dot red" />
                <span className="v2-b-dot yellow" />
                <span className="v2-b-dot green" />
              </div>
              <div className="v2-browser-url-pill">
                <span>app.procucev.com/qua-ai</span>
              </div>
              <div className="v2-showcase-live-tag">
                <span className="blink-dot" />
                <span>LIVE PREVIEW</span>
              </div>
            </div>

            {/* Stage with rotating hero images - exact snug 1600 / 792 aspect ratio */}
            <div className="v2-showcase-stage">
              {heroScreens.map((screen, idx) => (
                <div
                  key={idx}
                  className={`v2-showcase-slide ${idx === activeHeroIdx ? 'active' : ''}`}
                >
                  <img
                    src={screen.src}
                    alt={screen.alt}
                    className="v2-showcase-img"
                    loading={idx === 0 ? 'eager' : 'lazy'}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Clean Dots Indicator directly below the card */}
          <div className="v2-showcase-dots">
            {heroScreens.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`v2-showcase-dot-btn ${idx === activeHeroIdx ? 'active' : ''}`}
                onClick={() => setActiveHeroIdx(idx)}
                aria-label={`View slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* ── V2 Hero ── */
        .v2-hero {
          position: relative;
          padding: clamp(2rem, 4vw, 3.5rem) 0 clamp(1.2rem, 2vw, 1.8rem);
          overflow: hidden;
          background: #F8FAFC;
        }

        /* Background decorations */
        .v2-hero-bg-deco { position: absolute; inset: 0; pointer-events: none; z-index: 0; overflow: hidden; }
        .v2-bg-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }
        .v2-video-overlay {
          position: absolute;
          inset: 0;
          background: rgba(248, 250, 252, 0.70);
          backdrop-filter: blur(4px);
          z-index: 0;
        }
        .deco-circle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.55;
        }
        .deco-1 {
          width: 700px; height: 700px;
          background: radial-gradient(circle, rgba(14,165,233,0.14) 0%, transparent 70%);
          top: -200px; right: -200px;
        }
        .deco-2 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(249,115,22,0.10) 0%, transparent 70%);
          bottom: -100px; left: -100px;
        }
        .deco-stripe {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #0EA5E9 40%, #F97316 60%, transparent);
          opacity: 0.35;
        }

        /* Grid: split-screen */
        .v2-hero-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: clamp(2rem, 4vw, 3.5rem);
          align-items: center;
        }

        /* LEFT */
        .v2-hero-left { display: flex; flex-direction: column; gap: 0; }

        /* Headline stage */
        .v2-headline-stage {
          display: grid;
          grid-template-areas: "slide";
          margin: 8px 0 16px;
          min-height: 110px;
        }
        .v2-slide {
          grid-area: slide;
          opacity: 0;
          transform: translateY(14px);
          pointer-events: none;
          transition: opacity 0.65s ease, transform 0.65s ease;
          display: flex;
          align-items: flex-start;
        }
        .v2-slide.active {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
          z-index: 2;
        }
        .v2-hero-h1 {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(2rem, 3.6vw, 2.9rem);
          font-weight: 800;
          color: #0C4A6E;
          line-height: 1.22;
          letter-spacing: -0.5px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 6px;
        }
        .v2-highlight {
          color: #F97316;
          font-style: italic;
        }
        .v2-grouped-item {
          display: flex;
          align-items: center;
          gap: 8px;
          width: 100%;
          margin-bottom: 4px;
          font-size: clamp(1.1rem, 2.2vw, 1.5rem);
        }
        .v2-dot-orange {
          width: 9px; height: 9px;
          border-radius: 50%;
          background: #F97316;
          flex-shrink: 0;
          box-shadow: 0 0 8px rgba(249,115,22,0.6);
        }

        /* Badge Animation */
        .v2-badge-stage {
          display: grid;
          grid-template-areas: "slide";
          align-items: center;
        }
        .v2-badge-slide {
          grid-area: slide;
          opacity: 0;
          transform: translateY(8px);
          pointer-events: none;
          transition: opacity 0.4s ease, transform 0.4s ease;
          white-space: nowrap;
        }
        .v2-badge-slide.active {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        /* CTAs */
        .v2-hero-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 24px;
        }

        /* Stats bar */
        .v2-stats-bar {
          display: flex;
          align-items: center;
          gap: 0;
          background: #ffffff;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 14px 20px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.05);
          width: fit-content;
          max-width: 100%;
        }
        .v2-stat {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0 16px;
          white-space: nowrap;
        }
        .v2-stat:first-of-type { padding-left: 0; }
        .v2-stat-icon { color: #0EA5E9; flex-shrink: 0; }
        .v2-stat-val {
          display: block;
          font-size: 1.3rem;
          font-weight: 800;
          color: #0C4A6E;
          line-height: 1;
          white-space: nowrap;
        }
        .v2-stat-label {
          display: block;
          font-size: 0.7rem;
          font-weight: 600;
          color: #64748B;
          text-transform: uppercase;
          letter-spacing: 0.4px;
          margin-top: 2px;
          white-space: nowrap;
        }
        .v2-stat-divider {
          width: 1px; height: 32px;
          background: #E2E8F0;
          flex-shrink: 0;
        }

        /* ── RIGHT COLUMN: ROTATING HERO SHOWCASE ── */
        .v2-hero-right {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        .v2-hero-showcase-card {
          position: relative;
          background: #ffffff;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          box-shadow: 0 16px 40px rgba(12, 74, 110, 0.12), 0 2px 8px rgba(0, 0, 0, 0.04);
          overflow: hidden;
          width: 100%;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .v2-hero-showcase-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 48px rgba(12, 74, 110, 0.16), 0 4px 12px rgba(0, 0, 0, 0.06);
        }

        .v2-showcase-browser-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 14px;
          background: #F8FAFC;
          border-bottom: 1px solid #E2E8F0;
        }
        .v2-browser-dots {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .v2-b-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .v2-b-dot.red { background: #EF4444; }
        .v2-b-dot.yellow { background: #F59E0B; }
        .v2-b-dot.green { background: #10B981; }

        .v2-browser-url-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          padding: 2px 12px;
          border-radius: 999px;
          font-size: 0.7rem;
          color: #64748B;
          font-weight: 500;
        }

        .v2-showcase-live-tag {
          display: flex;
          align-items: center;
          gap: 5px;
          background: rgba(16, 185, 129, 0.12);
          color: #059669;
          font-size: 0.65rem;
          font-weight: 800;
          padding: 2px 8px;
          border-radius: 999px;
          border: 1px solid rgba(16, 185, 129, 0.3);
          letter-spacing: 0.4px;
        }
        .blink-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #10B981;
          animation: blink 1.4s infinite alternate;
        }
        @keyframes blink {
          0%  { opacity: 0.3; }
          100%{ opacity: 1; }
        }

        .v2-showcase-stage {
          position: relative;
          width: 100%;
          aspect-ratio: 1600 / 792;
          background: #FFFFFF;
          overflow: hidden;
          display: block;
        }
        .v2-showcase-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }
        .v2-showcase-slide.active {
          opacity: 1;
          pointer-events: auto;
        }
        .v2-showcase-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          background: #ffffff;
        }

        .v2-showcase-dots {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 14px;
        }
        .v2-showcase-dot-btn {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #CBD5E1;
          border: none;
          padding: 0;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .v2-showcase-dot-btn.active {
          width: 24px;
          background: #F97316;
        }

        /* ── Responsive ── */
        @media (max-width: 960px) {
          .v2-hero-grid {
            grid-template-columns: 1fr;
            gap: 2.2rem;
          }
          .v2-hero-right {
            max-width: 600px;
            margin: 0 auto;
          }
          .v2-headline-stage { min-height: 140px; }
          .v2-stats-bar { width: 100%; justify-content: space-around; }
          .v2-stat { padding: 0 12px; }
        }

        @media (max-width: 540px) {
          .v2-stats-bar { flex-direction: column; gap: 12px; }
          .v2-stat-divider { display: none; }
          .v2-stat { padding: 0; }
        }
      `}</style>
    </section>
  );
}
