import React, { useState } from 'react';
import { ChevronDown, Menu, X, Sparkles, Phone, Mail } from 'lucide-react';

export default function Navbar({ onOpenDemo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <header className="level-navbar-header">
      {/* Top Sub Announcement Strip */}
      <div className="top-sub-banner">
        <div className="container sub-banner-flex">
          <div className="sub-banner-left">
            <Sparkles size={14} className="text-cyan" />
            <span>Register with QUA AI For Free Today — India's Premier Autonomous Procurement Ecosystem</span>
          </div>
          <div className="sub-banner-right">
            <a href="tel:+919876543210" className="sub-contact-link">
              <Phone size={12} /> +91 98765 43210
            </a>
            <span className="sub-sep">|</span>
            <a href="mailto:info@procucev.com" className="sub-contact-link">
              <Mail size={12} /> info@procucev.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Dark Header Bar */}
      <div className="main-header-bar">
        <div className="container header-wrapper">
          
          {/* Brand Logo Container */}
          <a href="#" className="brand-logo-link">
            <img 
              src="/procucev-logo.png" 
              alt="Procucev Logo" 
              className="brand-img"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="brand-fallback-dark" style={{ display: 'none' }}>
              <span className="p-badge-icon">P</span>
              <span className="p-brand-text">PROCUCEV</span>
            </div>
          </a>

          {/* Desktop Nav Taxonomy - Strict Single Line */}
          <nav className="desktop-menu">
            <a href="#" className="menu-link active">HOME</a>
            <a href="#about" className="menu-link">ABOUT US</a>

            {/* CONSULTING Dropdown */}
            <div 
              className="menu-dd-container"
              onMouseEnter={() => setActiveDropdown('consulting')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="menu-dd-btn">
                <span>CONSULTING</span> <ChevronDown size={12} />
              </button>
              {activeDropdown === 'consulting' && (
                <div className="dd-card-popup">
                  <a href="#capabilities" className="dd-item">
                    <span className="dot-bullet blue"></span>
                    <div>
                      <strong>Price Benchmark Analysis</strong>
                      <small>360° Spend & Spec Analytics</small>
                    </div>
                  </a>
                  <a href="#capabilities" className="dd-item">
                    <span className="dot-bullet blue"></span>
                    <div>
                      <strong>Strategic Sourcing</strong>
                      <small>Vendor Capacity & SLA Audits</small>
                    </div>
                  </a>
                  <a href="#capabilities" className="dd-item">
                    <span className="dot-bullet blue"></span>
                    <div>
                      <strong>Category Management</strong>
                      <small>Tail Spend & PO Orchestration</small>
                    </div>
                  </a>
                </div>
              )}
            </div>

            {/* TECHNOLOGY SOLUTIONS Dropdown */}
            <div 
              className="menu-dd-container"
              onMouseEnter={() => setActiveDropdown('tech')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="menu-dd-btn">
                <span>TECHNOLOGY SOLUTIONS</span> <ChevronDown size={12} />
              </button>
              {activeDropdown === 'tech' && (
                <div className="dd-card-popup">
                  <a href="#capabilities" className="dd-item">
                    <span className="dot-bullet cyan"></span>
                    <div>
                      <strong>proCPX Platform</strong>
                      <small>Enterprise Source-to-Pay Suite</small>
                    </div>
                  </a>
                  <a href="#capabilities" className="dd-item">
                    <span className="dot-bullet cyan"></span>
                    <div>
                      <strong>E-Auction Suite</strong>
                      <small>Reverse & Forward Dynamic Bidding</small>
                    </div>
                  </a>
                </div>
              )}
            </div>

            {/* QUA AI (GMT & BFS) Dropdown - Clean Single Line */}
            <div 
              className="menu-dd-container"
              onMouseEnter={() => setActiveDropdown('qua')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="menu-dd-btn qua-btn">
                <span>QUA AI (GMT & BFS)</span> <ChevronDown size={12} />
              </button>
              {activeDropdown === 'qua' && (
                <div className="dd-card-popup">
                  <a href="#autonomous" className="dd-item">
                    <span className="dot-bullet cyan"></span>
                    <div>
                      <strong>QUA AI Engine</strong>
                      <small>50,000+ Verified Supplier Matching</small>
                    </div>
                  </a>
                  <a href="#autonomous" className="dd-item">
                    <span className="dot-bullet cyan"></span>
                    <div>
                      <strong>GMT - Get My QuoTe</strong>
                      <small>Instant Part RFQ & Automated Quoting</small>
                    </div>
                  </a>
                  <a href="#autonomous" className="dd-item">
                    <span className="dot-bullet cyan"></span>
                    <div>
                      <strong>BFS - Buy From Stock</strong>
                      <small>Surplus Raw Material Marketplace</small>
                    </div>
                  </a>
                </div>
              )}
            </div>

            <a href="#industries" className="menu-link">INDUSTRIES</a>
            <a href="#contact" className="menu-link">CONTACT US</a>
          </nav>

          {/* Mobile Hamburger Button */}
          <button className="mobile-menu-trigger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="mobile-nav-panel">
          <a href="#" onClick={() => setMobileMenuOpen(false)}>HOME</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>ABOUT US</a>
          <a href="#capabilities" onClick={() => setMobileMenuOpen(false)}>CONSULTING</a>
          <a href="#capabilities" onClick={() => setMobileMenuOpen(false)}>TECHNOLOGY SOLUTIONS</a>
          <a href="#autonomous" onClick={() => setMobileMenuOpen(false)}>QUA AI (GMT & BFS)</a>
          <a href="#industries" onClick={() => setMobileMenuOpen(false)}>INDUSTRIES</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>CONTACT US</a>
        </div>
      )}

      <style>{`
        .level-navbar-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: #07152e;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
        }
        .top-sub-banner {
          background: #040e21;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding: 6px 0;
          font-size: 0.8rem;
          color: #94a3b8;
        }
        .sub-banner-flex {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .sub-banner-left {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #cbd5e1;
        }
        .text-cyan { color: #38bdf8; }
        .sub-banner-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .sub-contact-link {
          color: #94a3b8;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 4px;
          transition: var(--transition);
        }
        .sub-contact-link:hover {
          color: #ffffff;
        }
        .sub-sep { color: #334155; }

        .main-header-bar {
          padding: 10px 0;
        }
        .header-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }
        .brand-logo-link {
          display: flex;
          align-items: center;
          margin-right: 16px;
          flex-shrink: 0;
        }
        .brand-img {
          height: 42px;
          width: auto;
          object-fit: contain;
          background: #ffffff;
          padding: 4px 12px;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }
        .brand-fallback-dark {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .p-badge-icon {
          width: 34px;
          height: 34px;
          background: #1d6bf3;
          color: #fff;
          font-weight: 800;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .p-brand-text {
          font-family: var(--font-display);
          font-weight: 800;
          color: #ffffff;
          font-size: 1.3rem;
        }

        /* Single Line Nav Taxonomy */
        .desktop-menu {
          display: flex;
          align-items: center;
          gap: 18px;
          white-space: nowrap;
          flex-wrap: nowrap;
        }
        .menu-link {
          color: #cbd5e1;
          font-weight: 700;
          font-size: 0.81rem;
          text-decoration: none;
          letter-spacing: 0.5px;
          padding: 6px 4px;
          transition: var(--transition);
          white-space: nowrap;
        }
        .menu-link:hover, .menu-link.active {
          color: #ffffff;
        }

        .menu-dd-container {
          position: relative;
        }
        .menu-dd-btn {
          background: transparent;
          border: none;
          color: #cbd5e1;
          font-weight: 700;
          font-size: 0.81rem;
          letter-spacing: 0.5px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 6px 4px;
          transition: var(--transition);
          white-space: nowrap;
        }
        .menu-dd-btn:hover {
          color: #ffffff;
        }

        .dd-card-popup {
          position: absolute;
          top: 100%;
          left: 0;
          width: 270px;
          background: #091e42;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          padding: 10px;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.4);
          z-index: 100;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .dd-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 8px 10px;
          border-radius: 8px;
          text-decoration: none;
          color: #cbd5e1;
          transition: var(--transition);
        }
        .dd-item:hover {
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
        }
        .dd-item strong {
          display: block;
          font-size: 0.82rem;
          color: #ffffff;
        }
        .dd-item small {
          display: block;
          font-size: 0.72rem;
          color: #94a3b8;
        }

        .dot-bullet {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin-top: 5px;
          flex-shrink: 0;
        }
        .dot-bullet.blue { background: #1d6bf3; }
        .dot-bullet.cyan { background: #38bdf8; }

        .mobile-menu-trigger {
          display: none;
          background: transparent;
          border: none;
          color: #ffffff;
          cursor: pointer;
        }

        .mobile-nav-panel {
          background: #07152e;
          padding: 16px 24px 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .mobile-nav-panel a {
          color: #cbd5e1;
          text-decoration: none;
          font-weight: 700;
          font-size: 0.9rem;
        }

        @media (max-width: 1080px) {
          .desktop-menu { display: none; }
          .mobile-menu-trigger { display: block; }
        }
      `}</style>
    </header>
  );
}
