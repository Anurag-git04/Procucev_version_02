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
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const [activeHighlightIdx, setActiveHighlightIdx] = useState(0);
  const [dashStep, setDashStep] = useState(0);

  const highlights = [
    'Raise RFQs easier',
    'Reach vendors faster',
    'Get quotations quicker',
    'Compare quotations better',
    'Spend less time and money',
  ];

  useEffect(() => {
    const t = setInterval(() => setActiveIdx(i => (i + 1) % headlines.length), 4200);
    return () => clearInterval(t);
  }, [headlines.length]);

  useEffect(() => {
    const t2 = setInterval(() => setActiveHighlightIdx(i => (i + 1) % highlights.length), 2500);
    return () => clearInterval(t2);
  }, [highlights.length]);

  useEffect(() => {
    const sequence = [
      { step: 0, duration: 2000 },
      { step: 1, duration: 800 },
      { step: 2, duration: 800 },
      { step: 3, duration: 300 },
      { step: 4, duration: 800 },
      { step: 5, duration: 800 },
      { step: 6, duration: 300 },
      { step: 7, duration: 600 },
      { step: 8, duration: 1500 },
      { step: 9, duration: 600 },
      { step: 10, duration: 300 },
      { step: 11, duration: 600 },
    ];
    let i = 0;
    let t;
    const run = () => {
      setDashStep(sequence[i].step);
      t = setTimeout(() => {
        i = (i + 1) % sequence.length;
        run();
      }, sequence[i].duration);
    };
    run();
    return () => clearTimeout(t);
  }, []);

  const stats = [
    { label: 'Verified Suppliers', value: '45,000+', icon: <Users size={16} /> },
    { label: 'Registered Buyers', value: '1,800+', icon: <BarChart3 size={16} /> },
    { label: 'Quote Turnaround', value: '< 24 Hrs', icon: <Clock size={16} /> },
  ];

  const liveMetrics = [
    { dept: 'Packaging Material', rfqs: 112, savings: '18.4%', color: '#0EA5E9' },
    { dept: 'MRO & Spares',       rfqs: 95,  savings: '19.1%', color: '#F97316' },
    { dept: 'IT Consumables',     rfqs: 48,  savings: '16.8%', color: '#0C4A6E' },
    { dept: 'Chemicals',          rfqs: 29,  savings: '15.5%', color: '#0EA5E9' },
    { dept: 'Logistics',          rfqs: 74,  savings: '14.2%', color: '#10B981' },
    { dept: 'Office Supplies',    rfqs: 31,  savings: '12.0%', color: '#F97316' },
  ];

  return (
    <section className="v2-hero" id="home">
      {/* ── Background decoration ── */}
      <div className="v2-hero-bg-deco" aria-hidden="true">
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
            <button className="btn btn-primary btn-lg" onClick={onOpenDemo} id="hero-rfq-btn">
              Raise an RFQ, it's free <ArrowUpRight size={18} />
            </button>
            <button className="btn btn-ghost btn-lg" onClick={onOpenDemo} id="hero-supplier-btn">
              Become a Supplier
            </button>
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

        {/* ── Right Column: Live Procurement Dashboard ── */}
        <div className="v2-hero-right" aria-label="Live procurement platform preview">
          <div className="v2-dashboard-card">
            {/* Animated Cursor */}
            <div className={`v2-demo-cursor step-${dashStep}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ fill: '#334155', stroke: '#fff', strokeWidth: 1.5 }}>
                <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
              </svg>
            </div>

            {/* Screen 1 */}
            <div className={`v2-dash-screen-1 ${dashStep >= 7 && dashStep <= 10 ? 'inactive' : 'active'}`}>
              {/* Dashboard header */}
            <div className="v2-dash-header">
              <div className="v2-dash-title-row">
                <div className="v2-dash-dot green" />
                <span className="v2-dash-title">Procucev Live Platform</span>
              </div>
              <span className="v2-dash-live-badge">
                <span className="blink-dot" />
                LIVE
              </span>
            </div>

            {/* Summary row */}
            <div className="v2-dash-summary">
              <div className="v2-dash-summary-item">
                <TrendingUp size={14} className="ds-icon orange" />
                <span className="ds-label">Active RFQs</span>
                <span className="ds-val orange">284</span>
              </div>
              <div className="v2-dash-summary-item">
                <CheckCircle2 size={14} className="ds-icon blue" />
                <span className="ds-label">Orders Today</span>
                <span className="ds-val blue">47</span>
              </div>
              <div className="v2-dash-summary-item">
                <BarChart3 size={14} className="ds-icon green" />
                <span className="ds-label">Avg. Savings</span>
                <span className="ds-val green">17.4%</span>
              </div>
            </div>

            {/* Live metrics table */}
            <div className="v2-dash-table-head">
              <span>Department</span>
              <span>Live RFQs</span>
              <span>Savings</span>
            </div>
            <div className="v2-dash-scroll-window">
              <div className={`v2-dash-rows scroll-step-${dashStep}`}>
                {liveMetrics.map((m, i) => {
                  const isHovered = (dashStep === 2 || dashStep === 3) && i === 2;
                  const isClicked = dashStep === 3 && i === 2;
                  return (
                    <div 
                      key={i} 
                      className={`v2-dash-row ${isHovered ? 'simulated-hover' : ''} ${isClicked ? 'simulated-click' : ''}`}
                      style={{ animationDelay: `${i * 120}ms` }}
                    >
                      <div className="v2-dept-col">
                        <span className="v2-dept-dot" style={{ background: m.color }} />
                        <span className="v2-dept-name">{m.dept}</span>
                      </div>
                      <span className="v2-rfq-count">{m.rfqs}</span>
                      <span className="v2-savings-tag">{m.savings}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="v2-dash-footer">
              <span className="v2-dash-footer-text">45,000+ verified suppliers · Quotes within 24h</span>
              <button 
                className={`v2-dash-action btn btn-primary ${(dashStep === 5 || dashStep === 6) ? 'simulated-btn-hover' : ''} ${dashStep === 6 ? 'simulated-btn-click' : ''}`} 
                onClick={onOpenDemo}
              >
                View Dashboard <ArrowUpRight size={13} />
              </button>
            </div>
            </div>

            {/* Screen 2: Inner Dashboard View */}
            <div className={`v2-dash-screen-2 ${dashStep >= 7 && dashStep <= 10 ? 'active' : ''}`}>
              <div className="v2-dash-header" style={{ padding: '16px 20px', borderBottom: '1px solid #F1F5F9', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div className={`v2-back-btn ${dashStep === 9 || dashStep === 10 ? 'simulated-btn-hover' : ''} ${dashStep === 10 ? 'simulated-btn-click' : ''}`}>
                  <ChevronLeft size={18} />
                </div>
                <div style={{ fontWeight: 700, color: '#0C4A6E', fontSize: '0.9rem' }}>Enterprise Overview</div>
              </div>
              <div style={{ padding: '24px' }}>
                <div style={{ height: '160px', background: 'linear-gradient(135deg, rgba(14,165,233,0.1), rgba(16,185,129,0.1))', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px dashed #cbd5e1', marginBottom: '24px' }}>
                  <div style={{ textAlign: 'center' }}>
                    <BarChart3 size={32} color="#0EA5E9" style={{ margin: '0 auto 8px' }} />
                    <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0C4A6E' }}>₹ 14.5 Cr Saved</div>
                    <div style={{ fontSize: '0.8rem', color: '#64748B' }}>This Quarter</div>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div style={{ background: '#F8FAFC', padding: '16px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                     <div style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase' }}>Total RFQs</div>
                     <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0C4A6E', marginTop: '4px' }}>1,248</div>
                  </div>
                  <div style={{ background: '#F8FAFC', padding: '16px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                     <div style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase' }}>Suppliers</div>
                     <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0C4A6E', marginTop: '4px' }}>350+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating accent card */}
          <div className={`v2-float-card ${dashStep >= 7 && dashStep <= 10 ? 'inactive' : 'active'}`}>
            <CheckCircle2 size={18} className="fc-icon" />
            <div>
              <div className="fc-val">₹284 Cr+</div>
              <div className="fc-label">Procurement Managed</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* ── V2 Hero ── */
        .v2-hero {
          position: relative;
          padding: clamp(2.5rem, 5vw, 4rem) 0 clamp(1rem, 2vw, 1.5rem);
          overflow: hidden;
          background: #F8FAFC;
        }

        /* Background decorations */
        .v2-hero-bg-deco { position: absolute; inset: 0; pointer-events: none; z-index: 0; }
        .deco-circle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.45;
        }
        .deco-1 {
          width: 700px; height: 700px;
          background: radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%);
          top: -200px; right: -200px;
        }
        .deco-2 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%);
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
          grid-template-columns: 1fr 1fr;
          gap: clamp(2rem, 5vw, 5rem);
          align-items: center;
        }

        /* LEFT */
        .v2-hero-left { display: flex; flex-direction: column; gap: 0; }

        /* Headline stage */
        .v2-headline-stage {
          display: grid;
          grid-template-areas: "slide";
          margin: 8px 0 16px;
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
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: #0C4A6E;
          line-height: 1.2;
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

        /* Sub-headline */
        .v2-hero-sub {
          font-size: 1rem;
          color: #475569;
          line-height: 1.7;
          max-width: 540px;
          margin-bottom: 24px;
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
          margin-bottom: 32px;
        }

        /* Stats bar */
        .v2-stats-bar {
          display: flex;
          align-items: center;
          gap: 0;
          background: #ffffff;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 16px 24px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.05);
          width: fit-content;
          max-width: 100%;
        }
        .v2-stat {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0 20px;
        }
        .v2-stat:first-of-type { padding-left: 0; }
        .v2-stat-icon { color: #0EA5E9; }
        .v2-stat-val {
          display: block;
          font-size: 1.35rem;
          font-weight: 800;
          color: #0C4A6E;
          line-height: 1;
        }
        .v2-stat-label {
          display: block;
          font-size: 0.72rem;
          font-weight: 600;
          color: #64748B;
          text-transform: uppercase;
          letter-spacing: 0.4px;
          margin-top: 2px;
        }
        .v2-stat-divider {
          width: 1px; height: 36px;
          background: #E2E8F0;
          flex-shrink: 0;
        }

        /* RIGHT: Dashboard card */
        .v2-hero-right {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .v2-dashboard-card {
          position: relative;
          background: #ffffff;
          border: 1px solid #E2E8F0;
          border-radius: 24px;
          box-shadow: 0 20px 50px rgba(12,74,110,0.12);
          overflow: hidden;
          width: 100%;
          max-width: 480px;
        }

        /* Screen Transitions */
        .v2-dash-screen-1 {
          transition: opacity 0.5s ease, transform 0.5s ease;
          background: #fff;
          width: 100%;
        }
        .v2-dash-screen-1.inactive { opacity: 0; transform: translateX(-20px); pointer-events: none; }
        .v2-dash-screen-1.active { opacity: 1; transform: translateX(0); pointer-events: auto; }
        
        .v2-dash-screen-2 { 
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: #fff;
          transition: opacity 0.5s ease, transform 0.5s ease;
          opacity: 0; transform: translateX(20px); pointer-events: none; 
          z-index: 10;
        }
        .v2-dash-screen-2.active { opacity: 1; transform: translateX(0); pointer-events: auto; }

        .v2-back-btn {
          width: 32px; height: 32px;
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          background: #F1F5F9; color: #475569;
          transition: all 0.2s;
        }
        .v2-back-btn.simulated-btn-hover { background: #E2E8F0; color: #0F172A; }
        .v2-back-btn.simulated-btn-click { transform: scale(0.9); }

        /* Demo Cursor Animation */
        .v2-demo-cursor {
          position: absolute;
          z-index: 50;
          pointer-events: none;
          transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
          top: 110%;
          left: 90%;
          opacity: 0;
          transform: scale(1);
        }
        .v2-demo-cursor svg { filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3)); }
        
        .v2-demo-cursor.step-1 { top: 60%; left: 70%; opacity: 1; }
        .v2-demo-cursor.step-2 { top: 55%; left: 50%; opacity: 1; }
        .v2-demo-cursor.step-3 { top: 55%; left: 50%; opacity: 1; transform: scale(0.8); }
        .v2-demo-cursor.step-4 { top: 75%; left: 60%; opacity: 1; }
        .v2-demo-cursor.step-5 { top: 88%; left: 78%; opacity: 1; }
        .v2-demo-cursor.step-6 { top: 88%; left: 78%; opacity: 1; transform: scale(0.8); }
        .v2-demo-cursor.step-7 { top: 88%; left: 78%; opacity: 0; transform: scale(1); }
        .v2-demo-cursor.step-8 { top: 40%; left: 50%; opacity: 1; transform: scale(1); }
        .v2-demo-cursor.step-9 { top: 5%; left: 6%; opacity: 1; transform: scale(1); }
        .v2-demo-cursor.step-10 { top: 5%; left: 6%; opacity: 1; transform: scale(0.8); }
        .v2-demo-cursor.step-11 { top: 5%; left: 6%; opacity: 0; transform: scale(1); }

        .v2-dash-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          border-bottom: 1px solid #F1F5F9;
          background: #F8FAFC;
        }
        .v2-dash-title-row {
          display: flex; align-items: center; gap: 8px;
        }
        .v2-dash-dot {
          width: 9px; height: 9px; border-radius: 50%;
        }
        .v2-dash-dot.green { background: #10B981; box-shadow: 0 0 6px #10B981; }
        .v2-dash-title {
          font-size: 0.82rem; font-weight: 700; color: #0C4A6E;
        }
        .v2-dash-live-badge {
          display: flex; align-items: center; gap: 5px;
          background: rgba(16,185,129,0.12);
          color: #059669;
          font-size: 0.7rem; font-weight: 800;
          padding: 3px 10px; border-radius: 999px;
          border: 1px solid rgba(16,185,129,0.3);
          letter-spacing: 0.5px;
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

        .v2-dash-summary {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          padding: 16px 20px;
          border-bottom: 1px solid #F1F5F9;
        }
        .v2-dash-summary-item {
          display: flex; flex-direction: column; align-items: center; gap: 3px;
          text-align: center;
          padding: 0 8px;
          border-right: 1px solid #F1F5F9;
        }
        .v2-dash-summary-item:last-child { border-right: none; }
        .ds-icon { margin-bottom: 2px; }
        .ds-icon.orange { color: #F97316; }
        .ds-icon.blue   { color: #0EA5E9; }
        .ds-icon.green  { color: #10B981; }
        .ds-label { font-size: 0.68rem; color: #64748B; font-weight: 500; }
        .ds-val { font-size: 1.05rem; font-weight: 800; }
        .ds-val.orange { color: #F97316; }
        .ds-val.blue   { color: #0EA5E9; }
        .ds-val.green  { color: #10B981; }

        .v2-dash-table-head {
          display: grid;
          grid-template-columns: 1fr auto auto;
          gap: 12px;
          padding: 10px 20px;
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #94A3B8;
          border-bottom: 1px solid #F1F5F9;
          background: #FAFBFC;
        }

        .v2-dash-scroll-window {
          max-height: 176px;
          overflow: hidden;
          position: relative;
        }
        .v2-dash-rows {
          padding: 8px 0;
          transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .v2-dash-rows.scroll-step-1,
        .v2-dash-rows.scroll-step-2,
        .v2-dash-rows.scroll-step-3 {
          transform: translateY(-44px);
        }
        .v2-dash-rows.scroll-step-4,
        .v2-dash-rows.scroll-step-5,
        .v2-dash-rows.scroll-step-6,
        .v2-dash-rows.scroll-step-7 {
          transform: translateY(-88px);
        }

        .v2-dash-row {
          display: grid;
          grid-template-columns: 1fr auto auto;
          gap: 12px;
          align-items: center;
          padding: 10px 20px;
          animation: fadeUp 0.42s ease both;
          transition: background 0.2s, transform 0.1s;
        }
        .v2-dash-row:hover, .v2-dash-row.simulated-hover { background: #F1F5F9; }
        .v2-dash-row.simulated-click { background: #E2E8F0; transform: scale(0.98); }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .v2-dept-col { display: flex; align-items: center; gap: 9px; }
        .v2-dept-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
        .v2-dept-name { font-size: 0.8rem; font-weight: 600; color: #0C4A6E; }
        .v2-rfq-count { font-size: 0.82rem; font-weight: 700; color: #334155; text-align: center; }
        .v2-savings-tag {
          font-size: 0.72rem; font-weight: 700;
          background: rgba(16,185,129,0.1);
          color: #059669;
          border: 1px solid rgba(16,185,129,0.25);
          padding: 2px 8px; border-radius: 6px;
        }

        .v2-dash-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 20px;
          border-top: 1px solid #F1F5F9;
          background: #F8FAFC;
          gap: 12px;
        }
        .v2-dash-footer-text { font-size: 0.72rem; color: #64748B; font-weight: 500; }
        .v2-dash-action { 
          font-size: 0.75rem; 
          padding: 6px 14px; 
          transition: all 0.2s; 
        }
        .v2-dash-action.simulated-btn-hover {
          background: #EA6C00;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(249, 115, 22, 0.45);
        }
        .v2-dash-action.simulated-btn-click {
          transform: translateY(-1px);
          background: #CC5A00;
        }

        /* Floating accent card */
        .v2-float-card {
          position: absolute;
          bottom: -20px;
          left: -20px;
          display: flex;
          align-items: center;
          gap: 10px;
          background: #0C4A6E;
          color: #fff;
          padding: 14px 18px;
          border-radius: 16px;
          box-shadow: 0 12px 30px rgba(12,74,110,0.28);
          animation: floatY 3.5s ease-in-out infinite alternate;
          transition: opacity 0.5s ease;
        }
        .v2-float-card.inactive {
          opacity: 0;
          pointer-events: none;
        }
        @keyframes floatY {
          0%   { transform: translateY(0px); }
          100% { transform: translateY(-8px); }
        }
        .fc-icon { color: #F97316; flex-shrink: 0; }
        .fc-val { font-size: 1.05rem; font-weight: 800; color: #fff; line-height: 1.1; }
        .fc-label { font-size: 0.7rem; color: rgba(255,255,255,0.7); font-weight: 500; }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .v2-hero-grid {
            grid-template-columns: 1fr;
          }
          .v2-hero-right {
            align-items: center;
            margin-top: 32px;
          }
          .v2-float-card {
            left: 50%;
            transform: translateX(-50%);
            bottom: -28px;
          }
          .v2-headline-stage { min-height: 160px; }
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
