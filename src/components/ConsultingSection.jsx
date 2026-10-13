import React, { useState } from 'react';
import {
  TrendingUp,
  Layers,
  BarChart3,
  DollarSign,
  RefreshCw,
  ArrowRight,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
  FileText,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export default function ConsultingSection({ onOpenDemo }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const slides = [
    {
      id: 'spend-summary',
      step: '01',
      tabLabel: 'Spend Diagnostic',
      badge: 'Module 1 — Spend Ingestion & Normalization',
      title: 'Consolidated Spend Summary & FX Normalization',
      metric: '₹613.88 Cr Spend Normalized',
      statPill: '23,570 Lines • 12 Plants',
      desc: 'Consolidated multi-facility enterprise datasets across 262 material groups and 1,291 vendors, standardizing historical FX rates into an audited baseline.',
      src: '/aicev-spend-summary.png',
      alt: 'aiCEV Consolidated Spend Summary & FX Normalization Dashboard',
      icon: BarChart3,
      accent: '#0EA5E9',
    },
    {
      id: 'opportunity-pipeline',
      step: '02',
      tabLabel: 'Opportunity Baseline',
      badge: 'Module 2 — Baseline & Pipeline Controls',
      title: 'Certified Sourcing & Opportunity Baseline',
      metric: '₹74.155 Cr Net Opportunity',
      statPill: '100% Audit-Ready Baseline',
      desc: 'Transforms gross opportunities into defensible net savings by deducting multi-lever overlaps, establishing execution delivery bands, and locking baselines.',
      src: '/aicev-opportunity-pipeline.png',
      alt: 'aiCEV Certified Sourcing and Opportunity Baseline Pipeline',
      icon: TrendingUp,
      accent: '#10B981',
    },
    {
      id: 'savings-workbooks',
      step: '03',
      tabLabel: 'Evidence Workbooks',
      badge: 'Module 4 — Forensic Audit Ledgers',
      title: 'Dedicated Savings Type Evidence Workbooks',
      metric: '7 Canonical Evidence Workbooks',
      statPill: 'Excel Evidence Backed',
      desc: 'Granular mathematical proof for vendor consolidation, price benchmarking, strategic commercial levers, process productivity, and risk avoidance.',
      src: '/aicev-savings-workbooks.png',
      alt: 'aiCEV Dedicated Savings Type Evidence Workbooks',
      icon: FileText,
      accent: '#F97316',
    },
  ];

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const industries = [];

  const services = [
    {
      title: 'Strategic Sourcing',
      desc: 'Category strategy, supplier discovery and negotiation to get the right price and terms.',
      icon: <TrendingUp size={20} style={{ color: '#F97316' }} />,
      accent: '#F97316',
    },
    {
      title: 'Category Management',
      desc: 'Day-to-day management of your categories, from purchase orders to supplier relationships.',
      icon: <Layers size={20} style={{ color: '#0EA5E9' }} />,
      accent: '#0EA5E9',
    },
    {
      title: '360° Price Benchmarking',
      desc: 'Compare what you pay against market rates, specifications and payment terms to find leakage.',
      icon: <BarChart3 size={20} style={{ color: '#0C4A6E' }} />,
      accent: '#0C4A6E',
    },
    {
      title: 'Spend Analytics & Standardisation',
      desc: 'Item master clean-up, specification optimisation and tail-spend consolidation.',
      icon: <DollarSign size={20} style={{ color: '#10B981' }} />,
      accent: '#10B981',
    },
    {
      title: 'E-Auctions',
      desc: 'Reverse auctions to bring prices down and forward auctions to sell surplus assets.',
      icon: <RefreshCw size={20} style={{ color: '#F97316' }} />,
      accent: '#F97316',
    },
  ];



  return (
    <section className="v2-consulting-section section" id="consulting">
      <div className="container">

        {/* Header */}
        <div className="v2-section-header text-center">
          <div className="badge-tag-pill">
            <TrendingUp size={14} style={{ color: '#0EA5E9' }} /> Procurement Consulting
          </div>
          <h2 className="v2-section-title">
            Get the visibility of your procurement savings within 24-48 hours <br />
            <span style={{ color: '#F97316', fontStyle: 'italic' }}>executed by industry experts</span>
          </h2>
          <p className="v2-section-desc">
            Our consultants work inside your procurement process to find savings and lock them in.
            With our gain-share model there is no upfront fee — we earn only when the savings are realised.
          </p>
        </div>

        {/* Services Grid */}
        <div className="cons-services-grid">
          {services.map((srv, idx) => (
            <div key={idx} className="cons-srv-card" style={{ '--accent': srv.accent }}>
              <div className="cons-srv-icon" style={{ background: `${srv.accent}15`, border: `1px solid ${srv.accent}30` }}>
                {srv.icon}
              </div>
              <h3 className="cons-srv-h">{srv.title}</h3>
              <p className="cons-srv-p">{srv.desc}</p>
            </div>
          ))}

          {/* Gain-Share card */}
          <div className="cons-srv-card cons-gain-card">
            <span className="badge-orange" style={{ marginBottom: '12px' }}>Gain-Share Model</span>
            <h3 className="cons-srv-h" style={{ color: '#fff' }}>Zero Upfront Risk</h3>
            <p className="cons-srv-p" style={{ color: '#BAE6FD', flex: 1 }}>
              We only charge a percentage of realized savings. If we don't deliver hard cost savings, you pay nothing.
            </p>
            <button onClick={onOpenDemo} className="btn btn-primary" style={{ width: '100%', marginTop: '16px' }} id="savings-assessment-btn">
              Get a Free Savings Assessment <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Savings Showcase Area */}
        <div className="cons-calc-box">
          <div className="cons-calc-header" style={{ marginBottom: '28px', justifyContent: 'center' }}>
            <div className="text-center">
              <span className="qua-badge blue" style={{ marginBottom: '10px', display: 'inline-flex' }}>
                <Sparkles size={13} style={{ marginRight: '6px' }} /> Strategic Sourcing Engine
              </span>
              <h3 className="cons-calc-h" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
                How <img src="/aicev_logo.png" alt="aiCEV" style={{ height: '52px', verticalAlign: 'middle' }} /> can Help you do saving?
              </h3>
              <p className="cons-calc-sub" style={{ maxWidth: '680px', margin: '8px auto 0' }}>
                Explore live dashboards from the aiCEV Suite showing how enterprise spend is ingested, normalized, audited, and converted into defensible bottom-line savings.
              </p>
            </div>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="aicev-tabs-nav">
            {slides.map((s, idx) => {
              const IconComp = s.icon;
              const isActive = activeSlide === idx;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveSlide(idx)}
                  className={`aicev-tab-btn ${isActive ? 'active' : ''}`}
                >
                  <span className="aicev-tab-step">{s.step}</span>
                  <div className="aicev-tab-text">
                    <div className="aicev-tab-title">
                      <IconComp size={15} style={{ color: isActive ? s.accent : '#64748B' }} />
                      <span>{s.tabLabel}</span>
                    </div>
                    <span className="aicev-tab-metric">{s.metric}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* SaaS Frame / Mockup Window */}
          <div className="aicev-browser-window">
            {/* Window Topbar */}
            <div className="aicev-window-bar">
              <div className="aicev-mac-dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>

              <div className="aicev-window-address">
                <span className="aicev-suite-tag">aiCEV Suite</span>
                <span className="aicev-addr-sep">/</span>
                <span className="aicev-module-tag">{slides[activeSlide].badge}</span>
              </div>

              <div className="aicev-window-actions">
                <button onClick={prevSlide} className="aicev-nav-btn" aria-label="Previous screenshot">
                  <ChevronLeft size={16} />
                </button>
                <span className="aicev-counter">{activeSlide + 1} / {slides.length}</span>
                <button onClick={nextSlide} className="aicev-nav-btn" aria-label="Next screenshot">
                  <ChevronRight size={16} />
                </button>
                <button
                  onClick={() => setIsLightboxOpen(true)}
                  className="aicev-zoom-btn"
                  title="Click to expand fullscreen"
                >
                  <Maximize2 size={13} />
                  <span className="zoom-text">Enlarge</span>
                </button>
              </div>
            </div>

            {/* Window Content / Main Screenshot */}
            <div className="aicev-screen-view" onClick={() => setIsLightboxOpen(true)}>
              <img
                src={slides[activeSlide].src}
                alt={slides[activeSlide].alt}
                className="aicev-main-img"
              />
              <div className="aicev-hover-overlay">
                <div className="aicev-hover-chip">
                  <Maximize2 size={15} /> Click to view full resolution
                </div>
              </div>
            </div>

            {/* Context & Description Footer */}
            <div className="aicev-window-footer">
              <div className="aicev-footer-info">
                <div className="aicev-footer-headline">
                  <h4>{slides[activeSlide].title}</h4>
                  <span className="aicev-stat-pill">
                    <CheckCircle2 size={13} style={{ color: '#10B981' }} />
                    {slides[activeSlide].statPill}
                  </span>
                </div>
                <p className="aicev-footer-desc">{slides[activeSlide].desc}</p>
              </div>
            </div>
          </div>

          {/* 3 Interactive Thumbnail Cards */}
          <div className="aicev-thumbnails-grid">
            {slides.map((s, idx) => (
              <div
                key={s.id}
                onClick={() => setActiveSlide(idx)}
                className={`aicev-thumb-card ${activeSlide === idx ? 'active' : ''}`}
              >
                <div className="aicev-thumb-img-wrap">
                  <img src={s.src} alt={s.title} />
                  <span className="aicev-thumb-num">{s.step}</span>
                </div>
                <div className="aicev-thumb-meta">
                  <h5>{s.tabLabel}</h5>
                  <p>{s.statPill}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="aicev-lightbox-backdrop"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="aicev-lightbox-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aicev-lightbox-header">
              <div>
                <span className="lightbox-badge">{slides[activeSlide].badge}</span>
                <h4 className="lightbox-title">{slides[activeSlide].title}</h4>
              </div>
              <div className="lightbox-controls">
                <button
                  onClick={prevSlide}
                  className="lightbox-btn"
                  aria-label="Previous"
                >
                  <ChevronLeft size={18} />
                </button>
                <span className="lightbox-counter">{activeSlide + 1} of {slides.length}</span>
                <button
                  onClick={nextSlide}
                  className="lightbox-btn"
                  aria-label="Next"
                >
                  <ChevronRight size={18} />
                </button>
                <button
                  onClick={() => setIsLightboxOpen(false)}
                  className="lightbox-close-btn"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            <div className="aicev-lightbox-img-wrap">
              <img
                src={slides[activeSlide].src}
                alt={slides[activeSlide].alt}
                className="aicev-lightbox-img"
              />
            </div>
            <div className="aicev-lightbox-footer">
              <p>{slides[activeSlide].desc}</p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .v2-consulting-section {
          background: #F8FAFC;
          border-top: 1px solid #E2E8F0;
          padding-bottom: 24px !important;
        }

        /* Services grid */
        .cons-services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 48px;
        }
        .cons-srv-card {
          background: #ffffff;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 28px;
          display: flex; flex-direction: column;
          transition: all 0.3s ease;
          box-shadow: 0 1px 6px rgba(0,0,0,0.04);
        }
        .cons-srv-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent, #0EA5E9);
          box-shadow: 0 12px 28px rgba(12,74,110,0.09);
          background: #fff;
        }
        .cons-gain-card {
          background: linear-gradient(135deg, #0C4A6E 0%, #063554 100%);
          border: none;
          color: #fff;
        }
        .cons-gain-card:hover {
          border-color: transparent;
          box-shadow: 0 14px 32px rgba(12,74,110,0.22);
        }
        .cons-srv-icon {
          width: 46px; height: 46px;
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 18px;
        }
        .cons-srv-h {
          font-size: 1.15rem; font-weight: 800;
          color: #0C4A6E; margin-bottom: 8px;
        }
        .cons-srv-p {
          font-size: 0.9rem; color: #64748B;
          line-height: 1.6; flex: 1;
        }

        /* Calculator / Showcase Box */
        .cons-calc-box {
          background: #ffffff;
          border: 1px solid #E2E8F0;
          border-radius: 24px;
          padding: 36px;
          box-shadow: 0 8px 28px rgba(12,74,110,0.06);
        }
        .cons-calc-header {
          display: flex; align-items: flex-start; gap: 16px;
        }
        .cons-calc-h {
          font-size: 1.55rem; font-weight: 800; color: #0C4A6E;
        }
        .cons-calc-sub {
          font-size: 0.92rem; color: #64748B; line-height: 1.5;
        }

        /* Navigation Tabs */
        .aicev-tabs-nav {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-bottom: 24px;
        }
        .aicev-tab-btn {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          padding: 14px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          transition: all 0.25s ease;
          text-align: left;
        }
        .aicev-tab-btn:hover {
          background: #F1F5F9;
          border-color: #CBD5E1;
        }
        .aicev-tab-btn.active {
          background: #ffffff;
          border-color: #0EA5E9;
          box-shadow: 0 4px 14px rgba(14, 165, 233, 0.12);
        }
        .aicev-tab-step {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(14, 165, 233, 0.1);
          color: #0284C7;
          font-size: 0.8rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .aicev-tab-btn.active .aicev-tab-step {
          background: #0EA5E9;
          color: #ffffff;
        }
        .aicev-tab-text {
          flex: 1;
          min-width: 0;
        }
        .aicev-tab-title {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.88rem;
          font-weight: 700;
          color: #1E293B;
          margin-bottom: 2px;
        }
        .aicev-tab-btn.active .aicev-tab-title {
          color: #0369A1;
        }
        .aicev-tab-metric {
          font-size: 0.76rem;
          font-weight: 600;
          color: #64748B;
          display: block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* SaaS Browser Window */
        .aicev-browser-window {
          background: #ffffff;
          border: 1px solid #E2E8F0;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 16px 36px rgba(15, 23, 42, 0.08);
          margin-bottom: 24px;
        }
        .aicev-window-bar {
          background: #0F172A;
          padding: 12px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
        .aicev-mac-dots {
          display: flex;
          gap: 7px;
          align-items: center;
        }
        .aicev-mac-dots .dot {
          width: 11px;
          height: 11px;
          border-radius: 50%;
        }
        .dot.red { background: #EF4444; }
        .dot.yellow { background: #F59E0B; }
        .dot.green { background: #10B981; }

        .aicev-window-address {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          padding: 6px 14px;
          border-radius: 8px;
          font-size: 0.78rem;
          font-weight: 600;
          color: #E2E8F0;
        }
        .aicev-suite-tag {
          color: #38BDF8;
          font-weight: 700;
        }
        .aicev-addr-sep {
          color: #64748B;
        }
        .aicev-module-tag {
          color: #F1F5F9;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 320px;
        }

        .aicev-window-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .aicev-nav-btn {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #F1F5F9;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }
        .aicev-nav-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          color: #ffffff;
        }
        .aicev-counter {
          font-size: 0.75rem;
          font-weight: 700;
          color: #94A3B8;
          padding: 0 4px;
        }
        .aicev-zoom-btn {
          display: flex;
          align-items: center;
          gap: 5px;
          background: rgba(14, 165, 233, 0.2);
          border: 1px solid rgba(14, 165, 233, 0.4);
          color: #38BDF8;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 5px 10px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .aicev-zoom-btn:hover {
          background: #0EA5E9;
          color: #ffffff;
        }

        /* Screen View */
        .aicev-screen-view {
          position: relative;
          background: #F8FAFC;
          cursor: zoom-in;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .aicev-main-img {
          width: 100%;
          max-height: 580px;
          object-fit: contain;
          display: block;
          transition: transform 0.3s ease;
        }
        .aicev-screen-view:hover .aicev-main-img {
          transform: scale(1.008);
        }
        .aicev-hover-overlay {
          position: absolute;
          inset: 0;
          background: rgba(15, 23, 42, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.2s ease;
        }
        .aicev-screen-view:hover .aicev-hover-overlay {
          opacity: 1;
        }
        .aicev-hover-chip {
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(8px);
          color: #ffffff;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.82rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.2);
        }

        /* Window Footer */
        .aicev-window-footer {
          padding: 18px 24px;
          background: #ffffff;
          border-top: 1px solid #E2E8F0;
        }
        .aicev-footer-headline {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 6px;
        }
        .aicev-footer-headline h4 {
          font-size: 1.08rem;
          font-weight: 800;
          color: #0C4A6E;
          margin: 0;
        }
        .aicev-stat-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.25);
          color: #059669;
          font-size: 0.78rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 999px;
        }
        .aicev-footer-desc {
          font-size: 0.88rem;
          color: #64748B;
          line-height: 1.55;
          margin: 0;
        }

        /* Thumbnails Grid */
        .aicev-thumbnails-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }
        .aicev-thumb-card {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 10px;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .aicev-thumb-card:hover {
          border-color: #0EA5E9;
          background: #F0F9FF;
        }
        .aicev-thumb-card.active {
          border-color: #0EA5E9;
          background: #F0F9FF;
          box-shadow: 0 2px 8px rgba(14, 165, 233, 0.12);
        }
        .aicev-thumb-img-wrap {
          position: relative;
          width: 80px;
          height: 52px;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid #CBD5E1;
          flex-shrink: 0;
        }
        .aicev-thumb-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .aicev-thumb-num {
          position: absolute;
          bottom: 2px;
          left: 2px;
          background: rgba(15, 23, 42, 0.8);
          color: #ffffff;
          font-size: 0.65rem;
          font-weight: 800;
          padding: 1px 5px;
          border-radius: 4px;
        }
        .aicev-thumb-meta h5 {
          font-size: 0.82rem;
          font-weight: 700;
          color: #1E293B;
          margin: 0 0 2px 0;
        }
        .aicev-thumb-meta p {
          font-size: 0.74rem;
          color: #64748B;
          margin: 0;
          font-weight: 500;
        }

        /* Lightbox Modal */
        .aicev-lightbox-backdrop {
          position: fixed;
          inset: 0;
          z-index: 1000;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: aicevFadeIn 0.2s ease;
        }
        .aicev-lightbox-modal {
          background: #ffffff;
          border-radius: 20px;
          max-width: 1200px;
          width: 100%;
          max-height: 94vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35);
        }
        .aicev-lightbox-header {
          background: #0F172A;
          padding: 16px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .lightbox-badge {
          font-size: 0.74rem;
          font-weight: 700;
          color: #38BDF8;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .lightbox-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #ffffff;
          margin: 2px 0 0 0;
        }
        .lightbox-controls {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .lightbox-btn, .lightbox-close-btn {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #F1F5F9;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }
        .lightbox-btn:hover, .lightbox-close-btn:hover {
          background: rgba(255, 255, 255, 0.25);
          color: #ffffff;
        }
        .lightbox-close-btn {
          margin-left: 8px;
          background: rgba(239, 68, 68, 0.2);
          border-color: rgba(239, 68, 68, 0.4);
          color: #FCA5A5;
        }
        .lightbox-close-btn:hover {
          background: #EF4444;
          color: #ffffff;
        }
        .lightbox-counter {
          font-size: 0.8rem;
          font-weight: 700;
          color: #94A3B8;
        }
        .aicev-lightbox-img-wrap {
          flex: 1;
          background: #0B1120;
          padding: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: auto;
          max-height: 74vh;
        }
        .aicev-lightbox-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          border-radius: 8px;
        }
        .aicev-lightbox-footer {
          background: #F8FAFC;
          padding: 14px 24px;
          border-top: 1px solid #E2E8F0;
        }
        .aicev-lightbox-footer p {
          font-size: 0.88rem;
          color: #475569;
          margin: 0;
          line-height: 1.5;
        }

        @keyframes aicevFadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }

        @media (max-width: 992px) {
          .cons-services-grid { grid-template-columns: 1fr; }
          .cons-calc-box { padding: 24px; }
          .aicev-tabs-nav { grid-template-columns: 1fr; }
          .aicev-thumbnails-grid { grid-template-columns: 1fr; }
          .aicev-module-tag { max-width: 180px; }
        }

      `}</style>
    </section>
  );
}
