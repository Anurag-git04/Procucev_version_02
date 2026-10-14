import React, { useState, useEffect } from 'react';
import {
  TrendingUp,
  Layers,
  BarChart3,
  DollarSign,
  RefreshCw,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react';

export default function ConsultingSection({ onOpenDemo }) {
  const aicevPhotos = [
    {
      id: 'spend-summary',
      src: '/aicev-spend-summary.png',
      alt: 'aiCEV Consolidated Spend Summary & FX Normalization Dashboard',
    },
    {
      id: 'opportunity-pipeline',
      src: '/aicev-opportunity-pipeline.png',
      alt: 'aiCEV Certified Sourcing and Opportunity Baseline Pipeline',
    },
    {
      id: 'savings-workbooks',
      src: '/aicev-savings-workbooks.png',
      alt: 'aiCEV Dedicated Savings Type Evidence Workbooks',
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Auto-rotate every 3 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % aicevPhotos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, aicevPhotos.length]);

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % aicevPhotos.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + aicevPhotos.length) % aicevPhotos.length);

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
          <p className="v2-section-desc" style={{ maxWidth: '820px', margin: '0 auto 36px', textAlign: 'center', lineHeight: '1.65' }}>
            Our consultants work inside your procurement process to find savings and lock them in.
            <br />
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

        {/* aiCEV Photos Only Showcase - 3s Auto-Rotation, Snug Fit, No Arrows */}
        <div
          className="aicev-pure-showcase"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Photo Stage */}
          <div
            className="aicev-pure-stage"
            onClick={() => setIsLightboxOpen(true)}
            title="Click to view full size"
          >
            {aicevPhotos.map((photo, idx) => (
              <div
                key={photo.id}
                className={`aicev-pure-slide ${activeSlide === idx ? 'active' : ''}`}
                aria-hidden={activeSlide !== idx}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="aicev-pure-img"
                />
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="aicev-pure-dots">
            {aicevPhotos.map((_, idx) => (
              <button
                key={idx}
                className={`aicev-dot ${activeSlide === idx ? 'active' : ''}`}
                onClick={() => setActiveSlide(idx)}
                aria-label={`Slide ${idx + 1}`}
              />
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
              <div className="lightbox-dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <div className="lightbox-controls">
                <button
                  onClick={prevSlide}
                  className="lightbox-btn"
                  aria-label="Previous"
                >
                  <ChevronLeft size={18} />
                </button>
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
                src={aicevPhotos[activeSlide].src}
                alt={aicevPhotos[activeSlide].alt}
                className="aicev-lightbox-img"
              />
            </div>
          </div>
        </div>
      )}

      <style>{`
        .v2-consulting-section {
          background: #F8FAFC;
          border-top: 1px solid #E2E8F0;
          padding-bottom: 48px !important;
        }

        /* Services grid */
        .cons-services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 40px;
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
          background: linear-gradient(135deg, #075985 0%, #0c4a6e 100%) !important;
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
          text-align: left;
        }

        /* Pure aiCEV Photos Showcase */
        .aicev-pure-showcase {
          max-width: 1120px;
          width: 100%;
          margin: 24px auto 0;
          position: relative;
        }

        .aicev-pure-stage {
          position: relative;
          width: 100%;
          border-radius: 18px;
          overflow: hidden;
          background: #ffffff;
          border: 1px solid #E2E8F0;
          box-shadow: 0 14px 40px -8px rgba(15, 23, 42, 0.1);
          cursor: pointer;
          aspect-ratio: 1024 / 506;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .aicev-pure-slide {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transform: scale(0.99);
          transition: opacity 0.5s ease, transform 0.5s ease;
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
        }

        .aicev-pure-slide.active {
          opacity: 1;
          transform: scale(1);
          pointer-events: auto;
        }

        .aicev-pure-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          background: #ffffff;
          display: block;
          user-select: none;
          -webkit-user-drag: none;
        }

        .aicev-pure-dots {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-top: 14px;
        }

        .aicev-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          border: none;
          background: #CBD5E1;
          cursor: pointer;
          transition: all 0.25s ease;
          padding: 0;
        }

        .aicev-dot:hover {
          background: #94A3B8;
        }

        .aicev-dot.active {
          width: 28px;
          background: #0EA5E9;
          box-shadow: 0 2px 8px rgba(14, 165, 233, 0.35);
        }

        /* Lightbox Modal */
        .aicev-lightbox-backdrop {
          position: fixed;
          inset: 0;
          z-index: 1000;
          background: rgba(15, 23, 42, 0.88);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: aicevFadeIn 0.2s ease;
        }
        .aicev-lightbox-modal {
          background: #0F172A;
          border-radius: 20px;
          max-width: 1240px;
          width: 100%;
          max-height: 94vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .aicev-lightbox-header {
          background: #0F172A;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .lightbox-dots {
          display: flex;
          gap: 7px;
          align-items: center;
        }
        .lightbox-dots .dot {
          width: 11px;
          height: 11px;
          border-radius: 50%;
        }
        .dot.red { background: #EF4444; }
        .dot.yellow { background: #F59E0B; }
        .dot.green { background: #10B981; }

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
        .aicev-lightbox-img-wrap {
          flex: 1;
          background: #0B1120;
          padding: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: auto;
          max-height: 80vh;
        }
        .aicev-lightbox-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          border-radius: 8px;
        }

        @keyframes aicevFadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }

        @media (max-width: 992px) {
          .cons-services-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 768px) {
          .aicev-arrow.prev {
            left: 8px;
          }
          .aicev-arrow.next {
            right: 8px;
          }
          .aicev-arrow {
            width: 36px;
            height: 36px;
            background: rgba(255, 255, 255, 0.9);
          }
        }
      `}</style>
    </section>
  );
}
