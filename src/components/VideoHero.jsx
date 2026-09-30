import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Heart, TrendingUp, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function VideoHero({ onOpenDemo }) {
  // 4 Core Client Statements for Version 2 High-Tech Dark/Cyan Rotation
  const heroStatements = [
    {
      id: 0,
      badge: "Love of Procurement",
      titlePrefix: "Made with the ",
      titleCyan: "Love of Procurement",
      titleSuffix: "",
      lead: "Building the future of autonomous enterprise purchasing with zero human friction.",
      icon: Heart,
      iconColor: "text-cyan fill-cyan"
    },
    {
      id: 1,
      badge: "Direct Profit Impact",
      titlePrefix: "Saving at procurement is the ",
      titleCyan: "direct profit for company",
      titleSuffix: "",
      lead: "Every rupee saved in procurement flows directly to your company's net EBITDA profit.",
      icon: TrendingUp,
      iconColor: "text-emerald-400"
    },
    {
      id: 2,
      badge: "500+ Cr Finance Hero",
      titlePrefix: "Procurement is the ",
      titleCyan: "finance hero behind 500+ crores",
      titleSuffix: " Retail, E-Commerce, Consumer brands",
      lead: "Empowering CFOs and enterprise purchasing teams with automated proCPX S2P engines.",
      icon: ShieldCheck,
      iconColor: "text-blue-400"
    },
    {
      id: 3,
      badge: "Zero Human Delay",
      titlePrefix: "",
      titleCyan: "Zero Human intervention",
      titleSuffix: " from PR to Comparison",
      lead: "Eliminating manual delays across requisition matching, vendor outreach, and quote comparison.",
      icon: CheckCircle2,
      iconColor: "text-amber-400"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate every 3.8s
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroStatements.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="video-hero-section">
      {/* Background Video Stream */}
      <div className="video-background-container">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="hero-bg-video"
          poster="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-cargo-container-ship-sailing-in-the-sea-42045-large.mp4" 
            type="video/mp4" 
          />
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-workers-in-a-large-logistics-warehouse-42995-large.mp4" 
            type="video/mp4" 
          />
        </video>
        {/* Dark Video Overlay Layer */}
        <div className="video-overlay"></div>
      </div>

      <div className="container hero-content-relative">
        <div className="hero-split-grid">
          
          {/* Left Column: Rotating Cyber-Cyan Headline Stage */}
          <div className="hero-left-column">
            
            {/* Rotating Statement Stage */}
            <div className="v2-statement-stage">
              {heroStatements.map((item, idx) => {
                const isActive = idx === activeIndex;
                const ItemIcon = item.icon;

                return (
                  <div 
                    key={item.id} 
                    className={`v2-headline-slide ${isActive ? 'active' : 'inactive'}`}
                  >
                    <div className="hero-badge-pill">
                      <ItemIcon size={14} className={item.iconColor} />
                      <span>{item.badge}</span>
                    </div>

                    <h1 className="hero-main-title">
                      {item.titlePrefix}
                      <span className="serif-title text-cyan">{item.titleCyan}</span>
                      {item.titleSuffix}
                    </h1>

                    <p className="hero-lead-text">
                      {item.lead}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* High-Tech Step Selectors */}
            <div className="v2-step-selectors">
              {heroStatements.map((item, idx) => (
                <button 
                  key={idx} 
                  className={`v2-step-btn ${idx === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Select Statement ${idx + 1}`}
                >
                  <span className="v2-step-dot"></span>
                  <span className="v2-step-num">0{idx + 1}</span>
                </button>
              ))}
            </div>

            {/* Hero CTAs */}
            <div className="hero-actions-row">
              <button className="btn btn-blue btn-lg" onClick={onOpenDemo}>
                Request a Demo <ArrowUpRight size={18} />
              </button>
              <a href="#capabilities" className="btn btn-outline-white btn-lg">
                Explore Capabilities
              </a>
            </div>

          </div>

          {/* Right Column: Sleek Frosted Spend UI Card (Levelpath Reference) */}
          <div className="hero-right-column">
            <div className="spend-card-glass">
              
              <div className="card-top-tag flex items-center justify-between">
                <span className="text-tag">Here's your YoY Q1 contract spend data:</span>
                <span className="live-pill"><span className="live-dot"></span> LIVE S2P</span>
              </div>

              <div className="card-header-block">
                <h3 className="card-main-heading">YoY Q1 Contract Spend Data</h3>
                <p className="card-sub-heading">FY 2025 - FY 2026 • Prepared for CFO Review</p>
              </div>

              {/* 3 Metric Columns */}
              <div className="metrics-grid">
                <div className="metric-box">
                  <span className="m-label">TOT. CONTRACT SPEND</span>
                  <span className="m-value">₹53.2 Cr</span>
                  <span className="m-sub">71 Active Contracts</span>
                </div>
                <div className="metric-box">
                  <span className="m-label">ANNUAL BUDGET</span>
                  <span className="m-value">₹53.0 Cr</span>
                  <span className="m-sub">Target Target</span>
                </div>
                <div className="metric-box highlight">
                  <span className="m-label">DIRECT PROFIT SAVED</span>
                  <span className="m-value text-cyan">+₹4.2 Cr</span>
                  <span className="m-sub text-cyan">18% YoY Savings</span>
                </div>
              </div>

              {/* Data Table Preview */}
              <div className="card-table-preview">
                <div className="table-row head">
                  <span>CATEGORY</span>
                  <span>SUPPLIER</span>
                  <span>CYCLE TIME</span>
                  <span>SAVINGS</span>
                </div>
                <div className="table-row">
                  <span>Raw Packaging</span>
                  <span>Kalpana Packaging Ltd</span>
                  <span className="text-cyan">24 Hours (GMT)</span>
                  <span className="font-bold">14.2%</span>
                </div>
                <div className="table-row">
                  <span>MRO Consumables</span>
                  <span>Pan-India Logistics</span>
                  <span className="text-cyan">Instant (BFS)</span>
                  <span className="font-bold">18.0%</span>
                </div>
              </div>

              {/* Footer status pill inside card */}
              <div className="card-footer-status">
                <ShieldCheck size={14} className="text-cyan" />
                <span>Zero Human Intervention • Automated PR-to-Comparison</span>
              </div>

            </div>
          </div>

        </div>

        {/* 5-Step Value Chain Strip */}
        <div className="hero-value-chain-strip">
          <div className="v-step">
            <div className="v-num">1</div>
            <span>Raise RFQ easier</span>
          </div>
          <div className="v-arrow">→</div>
          <div className="v-step">
            <div className="v-num">2</div>
            <span>Reach Vendors faster</span>
          </div>
          <div className="v-arrow">→</div>
          <div className="v-step">
            <div className="v-num">3</div>
            <span>Get Quotations quicker</span>
          </div>
          <div className="v-arrow">→</div>
          <div className="v-step">
            <div className="v-num">4</div>
            <span>Compare Quotations better</span>
          </div>
          <div className="v-arrow">→</div>
          <div className="v-step highlight">
            <div className="v-num highlight-num">5</div>
            <span>Spend Time & Money lesser</span>
          </div>
        </div>

      </div>

      <style>{`
        .video-hero-section {
          position: relative;
          min-height: 88vh;
          display: flex;
          align-items: center;
          padding: 60px 0 50px;
          color: #ffffff;
          overflow: hidden;
          background: #07152e;
        }

        /* Background Video Container */
        .video-background-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          overflow: hidden;
        }
        .hero-bg-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, rgba(7, 21, 46, 0.84) 0%, rgba(7, 21, 46, 0.94) 100%);
        }

        .hero-content-relative {
          position: relative;
          z-index: 2;
          width: 100%;
        }

        .hero-split-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 40px;
          align-items: center;
        }

        /* Left Column Text Stage */
        .v2-statement-stage {
          position: relative;
          min-height: 350px;
          display: flex;
          align-items: flex-start;
        }

        .v2-headline-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          transition: opacity 0.75s cubic-bezier(0.4, 0, 0.2, 1), transform 0.75s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .v2-headline-slide.active {
          opacity: 1;
          visibility: visible;
          transform: translateY(0) scale(1);
          pointer-events: auto;
          z-index: 10;
        }

        .v2-headline-slide.inactive {
          opacity: 0;
          visibility: hidden;
          transform: translateY(20px) scale(0.96);
          pointer-events: none;
          z-index: 1;
        }

        .hero-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: 20px;
          background: rgba(56, 189, 248, 0.12);
          border: 1px solid rgba(56, 189, 248, 0.3);
          color: #ffffff;
          font-size: 0.82rem;
          font-weight: 700;
          margin-bottom: 18px;
        }
        .text-cyan { color: #38bdf8; }
        .fill-cyan { fill: #38bdf8; }

        .hero-main-title {
          font-size: 2.75rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
          letter-spacing: -0.8px;
          margin-bottom: 16px;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        }

        .hero-lead-text {
          font-size: 1.05rem;
          color: #cbd5e1;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        /* High-Tech Step Selectors */
        .v2-step-selectors {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 24px 0 28px;
        }
        .v2-step-btn {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 4px 14px;
          border-radius: 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.25s ease;
        }
        .v2-step-btn:hover {
          border-color: #38bdf8;
          background: rgba(56, 189, 248, 0.12);
        }
        .v2-step-btn.active {
          background: #1d6bf3;
          border-color: #38bdf8;
          box-shadow: 0 0 12px rgba(29, 107, 243, 0.5);
        }
        .v2-step-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #64748b;
        }
        .v2-step-btn.active .v2-step-dot {
          background: #38bdf8;
          box-shadow: 0 0 8px #38bdf8;
        }
        .v2-step-num {
          font-size: 0.78rem;
          font-weight: 700;
          color: #94a3b8;
        }
        .v2-step-btn.active .v2-step-num {
          color: #ffffff;
        }

        .hero-actions-row {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        /* Right Column Glassmorphism Spend Card (Picture 2 Reference) */
        .spend-card-glass {
          background: rgba(15, 34, 64, 0.78);
          backdrop-filter: blur(18px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.45);
        }

        .card-top-tag {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.78rem;
          color: #94a3b8;
          margin-bottom: 12px;
        }
        .live-pill {
          background: rgba(56, 189, 248, 0.15);
          color: #38bdf8;
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .live-dot {
          width: 6px;
          height: 6px;
          background: #38bdf8;
          border-radius: 50%;
          box-shadow: 0 0 8px #38bdf8;
        }

        .card-header-block {
          margin-bottom: 20px;
        }
        .card-main-heading {
          font-size: 1.35rem;
          font-weight: 800;
          color: #ffffff;
        }
        .card-sub-heading {
          font-size: 0.8rem;
          color: #94a3b8;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-bottom: 20px;
        }
        .metric-box {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 12px;
          border-radius: 12px;
        }
        .metric-box.highlight {
          background: rgba(56, 189, 248, 0.12);
          border-color: rgba(56, 189, 248, 0.3);
        }
        .m-label {
          display: block;
          font-size: 0.65rem;
          font-weight: 700;
          color: #94a3b8;
          letter-spacing: 0.5px;
        }
        .m-value {
          display: block;
          font-size: 1.3rem;
          font-weight: 800;
          color: #ffffff;
          margin: 2px 0;
        }
        .m-sub {
          display: block;
          font-size: 0.7rem;
          color: #64748b;
        }

        .card-table-preview {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 12px;
          padding: 10px;
          margin-bottom: 16px;
          font-size: 0.78rem;
        }
        .table-row {
          display: grid;
          grid-template-columns: 1.2fr 1.2fr 1fr 0.8fr;
          padding: 6px 8px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          color: #cbd5e1;
        }
        .table-row.head {
          font-size: 0.68rem;
          font-weight: 700;
          color: #64748b;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        }

        .card-footer-status {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.76rem;
          color: #cbd5e1;
          padding-top: 6px;
        }

        /* 5-Step Value Chain Strip */
        .hero-value-chain-strip {
          margin-top: 45px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
        }
        .v-step {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.06);
          padding: 6px 14px;
          border-radius: 30px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          font-size: 0.82rem;
          font-weight: 700;
          color: #ffffff;
        }
        .v-num {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #1d6bf3;
          color: #ffffff;
          font-size: 0.7rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .v-arrow {
          color: rgba(255, 255, 255, 0.3);
          font-weight: 700;
        }
        .v-step.highlight {
          background: rgba(56, 189, 248, 0.15);
          border-color: #38bdf8;
          color: #38bdf8;
        }
        .v-num.highlight-num {
          background: #38bdf8;
          color: #07152e;
        }

        @media (max-width: 992px) {
          .hero-split-grid {
            grid-template-columns: 1fr;
          }
          .v2-statement-stage { min-height: 250px; }
          .hero-main-title { font-size: 2.4rem; }
          .hero-value-chain-strip { flex-direction: column; align-items: flex-start; }
          .v-arrow { display: none; }
        }
      `}</style>
    </section>
  );
}

