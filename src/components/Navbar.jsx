import React, { useState } from 'react';
import { ChevronDown, Menu, X, Sparkles, Phone, Mail } from 'lucide-react';

export default function Navbar({ onOpenDemo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <header className="level-navbar-header">
      {/* Main Header Bar */}
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

          {/* Desktop Nav Taxonomy */}
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
                    <span className="dot-bullet orange"></span>
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
                    <span className="dot-bullet orange"></span>
                    <div>
                      <strong>proCPX Platform</strong>
                      <small>Enterprise Source-to-Pay Suite</small>
                    </div>
                  </a>
                  <a href="#capabilities" className="dd-item">
                    <span className="dot-bullet blue"></span>
                    <div>
                      <strong>E-Auction Suite</strong>
                      <small>Reverse & Forward Dynamic Bidding</small>
                    </div>
                  </a>
                </div>
              )}
            </div>

            {/* QUA AI (GMT & BFS) Dropdown */}
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
                    <span className="dot-bullet orange"></span>
                    <div>
                      <strong>QUA AI Engine</strong>
                      <small>50,000+ Verified Supplier Matching</small>
                    </div>
                  </a>
                  <a href="#autonomous" className="dd-item">
                    <span className="dot-bullet blue"></span>
                    <div>
                      <strong>GMT - Get My QuoTe</strong>
                      <small>Instant Part RFQ & Automated Quoting</small>
                    </div>
                  </a>
                  <a href="#autonomous" className="dd-item">
                    <span className="dot-bullet orange"></span>
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
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(226, 232, 240, 0.8);
          box-shadow: 0 4px 20px rgba(7, 21, 46, 0.06);
          transition: var(--transition);
        }

        .main-header-bar {
          padding: 12px 0;
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
          height: 44px;
          width: auto;
          object-fit: contain;
          background: transparent;
          padding: 0;
        }
        .brand-fallback-dark {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .p-badge-icon {
          width: 34px;
          height: 34px;
          background: linear-gradient(135deg, #ff5722 0%, #1d6bf3 100%);
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
          color: #07152e;
          font-size: 1.3rem;
          letter-spacing: -0.5px;
        }

        /* Desktop Nav Taxonomy */
        .desktop-menu {
          display: flex;
          align-items: center;
          gap: 20px;
          white-space: nowrap;
          flex-wrap: nowrap;
        }
        .menu-link {
          color: #1e293b;
          font-weight: 700;
          font-size: 0.82rem;
          text-decoration: none;
          letter-spacing: 0.5px;
          padding: 6px 8px;
          border-radius: 6px;
          transition: var(--transition);
          white-space: nowrap;
        }
        .menu-link:hover {
          color: #ff5722;
          background: rgba(255, 87, 34, 0.06);
        }
        .menu-link.active {
          color: #1d6bf3;
          background: rgba(29, 107, 243, 0.08);
        }

        .menu-dd-container {
          position: relative;
        }
        .menu-dd-btn {
          background: transparent;
          border: none;
          color: #1e293b;
          font-weight: 700;
          font-size: 0.82rem;
          letter-spacing: 0.5px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 6px 8px;
          border-radius: 6px;
          transition: var(--transition);
          white-space: nowrap;
        }
        .menu-dd-btn:hover {
          color: #1d6bf3;
          background: rgba(29, 107, 243, 0.06);
        }
        .qua-btn:hover {
          color: #ff5722;
          background: rgba(255, 87, 34, 0.06);
        }

        .dd-card-popup {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          width: 280px;
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-radius: 12px;
          padding: 10px;
          box-shadow: 0 16px 36px rgba(7, 21, 46, 0.12);
          z-index: 100;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .dd-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 8px;
          text-decoration: none;
          color: #334155;
          transition: var(--transition);
        }
        .dd-item:hover {
          background: #f8fafc;
          color: #1d6bf3;
        }
        .dd-item strong {
          display: block;
          font-size: 0.84rem;
          color: #0f172a;
        }
        .dd-item small {
          display: block;
          font-size: 0.74rem;
          color: #64748b;
        }

        .dot-bullet {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin-top: 5px;
          flex-shrink: 0;
        }
        .dot-bullet.blue { background: #1d6bf3; }
        .dot-bullet.orange { background: #ff5722; }

        .mobile-menu-trigger {
          display: none;
          background: transparent;
          border: none;
          color: #0f172a;
          cursor: pointer;
        }

        .mobile-nav-panel {
          background: #ffffff;
          padding: 16px 24px 24px;
          border-top: 1px solid rgba(226, 232, 240, 0.8);
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .mobile-nav-panel a {
          color: #1e293b;
          text-decoration: none;
          font-weight: 700;
          font-size: 0.9rem;
        }
        .mobile-nav-panel a:hover {
          color: #ff5722;
        }

        @media (max-width: 1080px) {
          .desktop-menu { display: none; }
          .mobile-menu-trigger { display: block; }
        }
      `}</style>
    </header>
  );
}
