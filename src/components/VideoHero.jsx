import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Heart, TrendingUp, ShieldCheck, CheckCircle2, Play, Pause, Volume2, VolumeX, Sparkles } from 'lucide-react';

export default function VideoHero({ onOpenDemo }) {
  // 4 Core Rotating Slides (3 original headlines + 1 grouped 5-statement value chain slide)
  const heroStatements = [
    {
      id: 0,
      titlePrefix: "Made with the ",
      titleHighlight: "Love of Procurement",
      titleSuffix: ""
    },
    {
      id: 1,
      titlePrefix: "Saving at procurement is the ",
      titleHighlight: "direct profit for company",
      titleSuffix: ""
    },
    {
      id: 2,
      titlePrefix: "",
      titleHighlight: "Zero Human intervention",
      titleSuffix: " from PR to Comparison"
    },
    {
      id: 3,
      isGrouped: true,
      items: [
        "Raise RFQ easier",
        "Reach Vendors faster",
        "Get Quotations quicker",
        "Compare Quotations better",
        "Spend Time & Money lesser"
      ]
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const rightVideoRef = useRef(null);

  // Auto-rotate every 4.0s
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroStatements.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroStatements.length]);

  const togglePlay = () => {
    if (!rightVideoRef.current) return;
    if (isPlaying) {
      rightVideoRef.current.pause();
    } else {
      rightVideoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!rightVideoRef.current) return;
    rightVideoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

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
        {/* Dark Overlay Layer for Video */}
        <div className="video-overlay"></div>
      </div>

      <div className="container hero-content-relative">
        <div className="hero-split-grid">
          
          {/* Left Column: Rotating Headline Statements */}
          <div className="hero-left-column">
            
            {/* Rotating Statement Stage */}
            <div className="v2-statement-stage">
              {heroStatements.map((item, idx) => {
                const isActive = idx === activeIndex;

                if (item.isGrouped) {
                  return (
                    <div 
                      key={item.id} 
                      className={`v2-headline-slide ${isActive ? 'active' : 'inactive'}`}
                    >
                      <div className="grouped-statements-grid">
                        {item.items.map((stmt, sIdx) => (
                          <div key={sIdx} className="grouped-statement-pill">
                            <span className="bullet-dot-orange"></span>
                            <span className="serif-title text-orange">{stmt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <div 
                    key={item.id} 
                    className={`v2-headline-slide ${isActive ? 'active' : 'inactive'}`}
                  >
                    <h1 className="hero-main-title">
                      {item.titlePrefix}
                      <span className="serif-title text-orange">{item.titleHighlight}</span>
                      {item.titleSuffix}
                    </h1>
                  </div>
                );
              })}
            </div>

            {/* Hero CTAs */}
            <div className="hero-actions-row">
              <button className="btn btn-orange-primary btn-lg" onClick={onOpenDemo}>
                Request a Demo <ArrowUpRight size={18} />
              </button>
              <a href="#capabilities" className="btn btn-outline-white btn-lg">
                Explore Capabilities
              </a>
            </div>

          </div>

          {/* Right Column: Premium Blue Video Demo Box */}
          <div className="hero-right-column">
            <div className="v2-blue-video-card">
              
              {/* Card Header Bar with Blue & Cyan Badges */}
              <div className="video-card-top-bar flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="live-blue-pulse">
                    <span className="blue-pulse-dot"></span>
                  </span>
                  <span className="video-title-tag">AI S2P PLATFORM DEMO</span>
                </div>
                <span className="blue-badge-pill">
                  <Sparkles size={12} className="text-cyan" /> LIVE SYSTEM
                </span>
              </div>

              {/* Embedded Video Showcase Container */}
              <div className="blue-video-frame">
                <video 
                  ref={rightVideoRef}
                  autoPlay 
                  loop 
                  muted={isMuted} 
                  playsInline 
                  className="showcase-video"
                  poster="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80"
                >
                  <source 
                    src="https://assets.mixkit.co/videos/preview/mixkit-logistics-center-with-automated-machines-42043-large.mp4" 
                    type="video/mp4" 
                  />
                  <source 
                    src="https://assets.mixkit.co/videos/preview/mixkit-workers-in-a-large-logistics-warehouse-42995-large.mp4" 
                    type="video/mp4" 
                  />
                </video>

                {/* Gradient Blue Overlay matching site shades */}
                <div className="blue-video-overlay"></div>

                {/* Floating Live Feature Badges Overlaid on Video */}
                <div className="video-floating-badge top-right">
                  <ShieldCheck size={14} className="text-cyan" />
                  <span>50,000+ Verified Suppliers</span>
                </div>

                <div className="video-floating-badge bottom-left">
                  <span className="blue-dot-small"></span>
                  <span>Automated L1/L2 Comparison</span>
                </div>

                {/* Center Play Button Overlay */}
                <button 
                  className={`center-play-overlay-btn ${!isPlaying ? 'show' : ''}`}
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? <Pause size={22} /> : <Play size={22} className="ml-1" />}
                </button>

                {/* Bottom Video Controls Bar */}
                <div className="video-bottom-controls-bar">
                  <button className="control-icon-btn" onClick={togglePlay}>
                    {isPlaying ? <Pause size={15} /> : <Play size={15} />}
                  </button>
                  
                  <div className="video-progress-track">
                    <div className="video-progress-fill"></div>
                  </div>

                  <button className="control-icon-btn" onClick={toggleMute}>
                    {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                  </button>
                </div>
              </div>

              {/* Bottom Metrics Bar matching shades of blue */}
              <div className="video-card-footer-metrics">
                <div className="blue-metric-item">
                  <span className="b-label">CYCLE TIME</span>
                  <span className="b-val text-cyan">Instant (BFS)</span>
                </div>
                <div className="blue-metric-item border-l border-r border-cyan-800/40">
                  <span className="b-label">HUMAN INTERVENTION</span>
                  <span className="b-val text-white">0% (PR to PO)</span>
                </div>
                <div className="blue-metric-item">
                  <span className="b-label">DIRECT EBITDA SAVED</span>
                  <span className="b-val text-orange">+18% Direct</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      <style>{`
        .video-hero-section {
          position: relative;
          min-height: 84vh;
          display: flex;
          align-items: center;
          padding: 50px 0 40px;
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
          background: linear-gradient(180deg, rgba(7, 21, 46, 0.86) 0%, rgba(7, 21, 46, 0.94) 100%);
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
          min-height: 120px;
          display: flex;
          align-items: flex-start;
        }

        .grouped-statements-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px 18px;
          padding: 2px 0;
        }
        .grouped-statement-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 1.22rem;
          font-weight: 700;
        }
        .bullet-dot-orange {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ff5722;
          box-shadow: 0 0 8px #ff5722;
          flex-shrink: 0;
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

        .text-orange { 
          color: #ff5722; 
        }
        .text-cyan { color: #38bdf8; }

        .hero-main-title {
          font-size: 2.75rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
          letter-spacing: -0.8px;
          margin-bottom: 18px;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        }

        .hero-lead-text {
          font-size: 1.05rem;
          color: #cbd5e1;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .hero-actions-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 24px;
        }
        .btn-orange-primary {
          background: linear-gradient(135deg, #ff5722 0%, #f97316 100%);
          color: #ffffff;
          box-shadow: 0 4px 20px rgba(255, 87, 34, 0.4);
          border: none;
        }
        .btn-orange-primary:hover {
          background: linear-gradient(135deg, #e64a19 0%, #ea580c 100%);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(255, 87, 34, 0.55);
        }

        /* Right Column Blue Video Card Container */
        .v2-blue-video-card {
          background: linear-gradient(145deg, rgba(7, 21, 46, 0.92) 0%, rgba(7, 65, 147, 0.85) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(56, 189, 248, 0.35);
          border-radius: 22px;
          padding: 20px;
          box-shadow: 0 25px 65px rgba(7, 65, 147, 0.45), inset 0 0 30px rgba(29, 107, 243, 0.15);
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .v2-blue-video-card:hover {
          border-color: rgba(56, 189, 248, 0.6);
          box-shadow: 0 30px 80px rgba(7, 65, 147, 0.65), inset 0 0 40px rgba(56, 189, 248, 0.25);
          transform: translateY(-4px);
        }

        .video-card-top-bar {
          margin-bottom: 14px;
        }
        .live-blue-pulse {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 10px;
          height: 10px;
        }
        .blue-pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #38bdf8;
          box-shadow: 0 0 10px #38bdf8, 0 0 18px #1d6bf3;
          animation: pulseGlow 1.8s infinite alternate;
        }
        @keyframes pulseGlow {
          0% { transform: scale(0.85); opacity: 0.7; }
          100% { transform: scale(1.2); opacity: 1; }
        }

        .video-title-tag {
          font-size: 0.76rem;
          font-weight: 800;
          color: #e2e8f0;
          letter-spacing: 0.6px;
        }
        .blue-badge-pill {
          background: rgba(29, 107, 243, 0.25);
          border: 1px solid rgba(56, 189, 248, 0.35);
          color: #38bdf8;
          padding: 3px 10px;
          border-radius: 20px;
          font-size: 0.68rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .blue-video-frame {
          position: relative;
          width: 100%;
          height: 250px;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.5);
          background: #040d1a;
        }
        .showcase-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .blue-video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, rgba(7, 65, 147, 0.2) 0%, rgba(7, 21, 46, 0.75) 100%);
          pointer-events: none;
        }

        .video-floating-badge {
          position: absolute;
          background: rgba(7, 21, 46, 0.88);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(56, 189, 248, 0.4);
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.72rem;
          font-weight: 700;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 6px;
          z-index: 5;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
        }
        .video-floating-badge.top-right {
          top: 12px;
          right: 12px;
        }
        .video-floating-badge.bottom-left {
          bottom: 48px;
          left: 12px;
        }
        .blue-dot-small {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #38bdf8;
          box-shadow: 0 0 8px #38bdf8;
        }

        .center-play-overlay-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1d6bf3 0%, #074193 100%);
          border: 2px solid #38bdf8;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 6;
          box-shadow: 0 0 25px rgba(56, 189, 248, 0.6);
          transition: all 0.25s ease;
          opacity: 0;
        }
        .blue-video-frame:hover .center-play-overlay-btn,
        .center-play-overlay-btn.show {
          opacity: 1;
        }
        .center-play-overlay-btn:hover {
          transform: translate(-50%, -50%) scale(1.1);
          background: linear-gradient(135deg, #ff5722 0%, #f97316 100%);
          border-color: #ffffff;
        }

        .video-bottom-controls-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 8px 14px;
          background: linear-gradient(360deg, rgba(7, 21, 46, 0.95) 0%, rgba(7, 21, 46, 0) 100%);
          display: flex;
          align-items: center;
          gap: 12px;
          z-index: 6;
        }
        .control-icon-btn {
          background: transparent;
          border: none;
          color: #cbd5e1;
          cursor: pointer;
          display: flex;
          align-items: center;
          padding: 4px;
          transition: color 0.2s ease;
        }
        .control-icon-btn:hover {
          color: #38bdf8;
        }
        .video-progress-track {
          flex: 1;
          height: 4px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
          overflow: hidden;
          position: relative;
        }
        .video-progress-fill {
          height: 100%;
          width: 65%;
          background: linear-gradient(90deg, #1d6bf3 0%, #38bdf8 100%);
          box-shadow: 0 0 8px #38bdf8;
          animation: progressAnim 8s linear infinite;
        }
        @keyframes progressAnim {
          0% { width: 10%; }
          100% { width: 100%; }
        }

        .video-card-footer-metrics {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          margin-top: 14px;
          background: rgba(7, 21, 46, 0.6);
          border: 1px solid rgba(56, 189, 248, 0.2);
          border-radius: 12px;
          padding: 10px 8px;
          text-align: center;
        }
        .blue-metric-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .b-label {
          font-size: 0.62rem;
          font-weight: 700;
          color: #94a3b8;
          letter-spacing: 0.4px;
        }
        .b-val {
          font-size: 0.85rem;
          font-weight: 800;
          margin-top: 2px;
        }

        @media (max-width: 992px) {
          .hero-split-grid {
            grid-template-columns: 1fr;
          }
          .v2-statement-stage { min-height: 220px; }
          .hero-main-title { font-size: 2.2rem; }
          .hero-five-statements-row { flex-direction: column; align-items: flex-start; }
          .s-arrow { display: none; }
        }
      `}</style>
    </section>
  );
}

