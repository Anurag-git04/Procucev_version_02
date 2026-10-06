import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';

export default function Navbar({ onOpenDemo }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Home',        href: '#home' },
    { label: 'About us',    href: '#about' },
    { label: 'Qua AI',      href: '#qua-ai' },
    { label: 'eQua AI',     href: '#equa-ai' },
    { label: 'DPSNXT',      href: '#dpsnxt' },
    { label: 'proCPX',      href: '#procpx' },
    { label: 'aiCEV (Consulting)', href: '#consulting' },
    { label: 'Our Clients', href: '#clients' },
    { label: 'Team',        href: '#team' },
    { label: 'Contact us',  href: '#contact' },
  ];

  return (
    <header className={`v2-nav-header${scrolled ? ' scrolled' : ''}`}>
      <div className="container v2-nav-inner">

        {/* Brand */}
        <a href="#home" className="v2-brand" aria-label="Procucev Home">
          <img
            src="/procucev-logo.png"
            alt="Procucev"
            className="v2-brand-logo"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="v2-brand-fallback" style={{ display: 'none' }}>
            <span className="v2-brand-icon">P</span>
            <span className="v2-brand-text">PROCUCEV</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="v2-desktop-nav" aria-label="Main navigation">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="v2-nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + Hamburger */}
        <div className="v2-nav-actions">
          <button className="btn btn-primary v2-nav-cta" onClick={onOpenDemo} id="nav-rfq-btn">
            Raise an RFQ <ArrowUpRight size={16} />
          </button>
          <button
            className="v2-hamburger"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="v2-mobile-drawer">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="v2-mobile-link"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            className="btn btn-primary"
            style={{ marginTop: '8px' }}
            onClick={() => { setMobileOpen(false); onOpenDemo(); }}
          >
            Raise an RFQ, it's free <ArrowUpRight size={15} />
          </button>
        </div>
      )}

      <style>{`
        /* ── V2 Navbar ── */
        .v2-nav-header {
          position: sticky;
          top: 0;
          z-index: 100;
          width: 100%;
          background: rgba(248, 250, 252, 0.90);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid transparent;
          transition: border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
        }
        .v2-nav-header.scrolled {
          background: rgba(255, 255, 255, 0.96);
          border-bottom-color: #E2E8F0;
          box-shadow: 0 4px 20px rgba(12, 74, 110, 0.07);
        }

        .v2-nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding-top: 14px;
          padding-bottom: 14px;
        }

        /* Brand */
        .v2-brand {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          text-decoration: none;
        }
        .v2-brand-logo {
          height: 40px;
          width: auto;
          object-fit: contain;
        }
        .v2-brand-fallback {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .v2-brand-icon {
          width: 36px;
          height: 36px;
          background: #0EA5E9;
          color: #fff;
          font-weight: 800;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
        }
        .v2-brand-text {
          font-weight: 800;
          font-size: 1.15rem;
          color: #0C4A6E;
          letter-spacing: 0.5px;
        }

        /* Desktop links */
        .v2-desktop-nav {
          display: flex;
          align-items: center;
          gap: 4px;
          flex: 1;
          justify-content: center;
        }
        .v2-nav-link {
          color: #334155;
          font-weight: 500;
          font-size: 0.88rem;
          text-decoration: none;
          padding: 6px 12px;
          border-radius: 8px;
          transition: color 0.2s ease, background 0.2s ease;
          white-space: nowrap;
        }
        .v2-nav-link:hover {
          color: #0EA5E9;
          background: rgba(14, 165, 233, 0.08);
        }

        /* Nav CTA */
        .v2-nav-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }
        .v2-nav-cta {
          font-size: 0.84rem;
          padding: 9px 18px;
        }

        /* Hamburger */
        .v2-hamburger {
          display: none;
          background: transparent;
          border: 1px solid #E2E8F0;
          border-radius: 8px;
          padding: 6px;
          cursor: pointer;
          color: #0C4A6E;
          transition: border-color 0.2s;
        }
        .v2-hamburger:hover { border-color: #0EA5E9; }

        /* Mobile drawer */
        .v2-mobile-drawer {
          background: #ffffff;
          border-top: 1px solid #E2E8F0;
          padding: 16px 24px 20px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          box-shadow: 0 8px 24px rgba(12,74,110,0.08);
          animation: slideDown 0.22s ease;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .v2-mobile-link {
          color: #334155;
          font-weight: 500;
          font-size: 0.95rem;
          text-decoration: none;
          padding: 10px 12px;
          border-radius: 8px;
          transition: color 0.2s, background 0.2s;
        }
        .v2-mobile-link:hover {
          color: #0EA5E9;
          background: rgba(14, 165, 233, 0.07);
        }

        @media (max-width: 1100px) {
          .v2-desktop-nav { display: none; }
          .v2-hamburger { display: flex; }
          .v2-nav-cta { display: none; }
        }
      `}</style>
    </header>
  );
}
