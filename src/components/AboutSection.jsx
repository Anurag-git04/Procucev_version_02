import React from 'react';
import { Target, TrendingUp, Cpu, CheckCircle2, ArrowRight, Building2, Award } from 'lucide-react';

export default function AboutSection({ onOpenDemo }) {
  const howWeWork = [
    {
      step: '01',
      title: 'Strategize',
      desc: 'Understand your spend and set the right sourcing plan.',
      icon: <Target size={22} style={{ color: '#F97316' }} />,
      accent: '#F97316',
    },
    {
      step: '02',
      title: 'Optimize',
      desc: 'Benchmark prices, specifications and suppliers to find savings.',
      icon: <TrendingUp size={22} style={{ color: '#0EA5E9' }} />,
      accent: '#0EA5E9',
    },
    {
      step: '03',
      title: 'Empower',
      desc: 'Give your team AI tools that run RFQs without manual follow-up.',
      icon: <Cpu size={22} style={{ color: '#0C4A6E' }} />,
      accent: '#0C4A6E',
    },
  ];

  const whyProcucev = [
    'A verified supplier network across India.',
    'AI that turns an email or a BOQ into a structured RFQ.',
    'Side-by-side quote comparison, ready for approval.',
    'A leadership team with procurement, ISRO, IIM and IIT backgrounds.',
  ];

  return (
    <section className="v2-about-section section" id="about">
      <div className="container">

        {/* Header */}
        <div className="v2-section-header text-center">
          <div className="badge-tag-pill">
            <Building2 size={14} style={{ color: '#0EA5E9' }} /> About Procucev
          </div>
          <h2 className="v2-section-title">
            One partner for the <br />
            <span style={{ color: '#F97316', fontStyle: 'italic' }}>full procurement cycle</span>
          </h2>
          <p className="v2-section-desc">
            Procucev is a Bengaluru-based procurement company that brings together consulting,
            digital platforms and an AI-driven supplier marketplace. We help retail, consumer,
            manufacturing and services companies cut procurement cost and cycle time, from the
            first requirement to the final purchase order.
          </p>
        </div>

        {/* How We Work */}
        <div className="about-how-block">
          <h3 className="about-sub-title text-center">
            How We Work: <span style={{ color: '#10B981' }}>Strategize</span> ·{' '}
            <span style={{ color: '#0EA5E9' }}>Optimize</span> ·{' '}
            <span style={{ color: '#0C4A6E' }}>Empower</span>
          </h3>
          <div className="about-cards-grid">
            {howWeWork.map((item, idx) => (
              <div key={idx} className="about-card" style={{ '--card-accent': item.accent }}>
                <span className="about-step-num">{item.step}</span>
                <div className="about-icon-box">
                  {item.icon}
                </div>
                <h4 className="about-card-title">{item.title}</h4>
                <p className="about-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Procucev Banner */}
        <div className="about-why-banner">
          <div className="about-banner-grid">
            <div className="about-banner-left">
              <div className="about-banner-badge">
                <Award size={13} style={{ color: '#F97316' }} /> Proven Advantage
              </div>
              <h3 className="about-banner-title">Why Procucev?</h3>
              <p className="about-banner-desc">
                We combine deep domain expertise with cutting-edge AI automation to ensure
                total pricing transparency, rapid execution, and guaranteed ROI.
              </p>
              <button onClick={onOpenDemo} className="btn btn-primary btn-lg" id="about-talk-btn">
                Talk to us <ArrowRight size={16} />
              </button>
            </div>

            <div className="about-reasons-grid">
              {whyProcucev.map((reason, idx) => (
                <div key={idx} className="about-reason-card">
                  <CheckCircle2 size={18} style={{ color: '#10B981', flexShrink: 0 }} />
                  <span>{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .v2-about-section {
          background: #ffffff;
          border-top: 1px solid #E2E8F0;
        }

        .v2-section-header {
          margin-bottom: 56px;
        }
        .v2-section-title {
          font-size: clamp(2rem, 4vw, 2.75rem);
          font-weight: 800;
          color: #0C4A6E;
          margin: 14px 0 16px;
          line-height: 1.15;
        }
        .v2-section-desc {
          font-size: 1.05rem;
          color: #475569;
          max-width: 760px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* How We Work */
        .about-how-block { margin-bottom: 56px; }
        .about-sub-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: #0C4A6E;
          margin-bottom: 32px;
        }
        .about-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .about-card {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 32px 24px;
          position: relative;
          transition: all 0.3s ease;
        }
        .about-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 32px rgba(12, 74, 110, 0.10);
          border-color: var(--card-accent, #0EA5E9);
          background: #ffffff;
        }
        .about-step-num {
          position: absolute;
          top: 20px; right: 24px;
          font-size: 1.8rem; font-weight: 900;
          color: #E2E8F0;
        }
        .about-icon-box {
          width: 48px; height: 48px;
          border-radius: 12px;
          background: #ffffff;
          border: 1px solid #E2E8F0;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
        }
        .about-card-title {
          font-size: 1.25rem; font-weight: 800;
          color: #0C4A6E; margin-bottom: 8px;
        }
        .about-card-desc {
          font-size: 0.92rem; color: #64748B; line-height: 1.6;
        }

        /* Why banner */
        .about-why-banner {
          background: linear-gradient(135deg, #0C4A6E 0%, #073352 100%);
          border-radius: 24px;
          padding: 48px;
          box-shadow: 0 20px 48px rgba(12, 74, 110, 0.20);
        }
        .about-banner-grid {
          display: grid;
          grid-template-columns: 5fr 7fr;
          gap: 40px;
          align-items: center;
        }
        .about-banner-badge {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(249,115,22,0.18);
          border: 1px solid rgba(249,115,22,0.35);
          color: #FDBA74;
          padding: 4px 12px; border-radius: 999px;
          font-size: 0.75rem; font-weight: 700;
          text-transform: uppercase; margin-bottom: 16px;
        }
        .about-banner-title {
          font-size: 2rem; font-weight: 800;
          color: #ffffff; margin-bottom: 12px;
        }
        .about-banner-desc {
          font-size: 0.95rem; color: #BAE6FD;
          margin-bottom: 24px; line-height: 1.65;
        }
        .about-reasons-grid {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px;
        }
        .about-reason-card {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          backdrop-filter: blur(6px);
          padding: 16px; border-radius: 12px;
          display: flex; align-items: flex-start;
          gap: 12px; font-size: 0.88rem; font-weight: 600;
          color: #F0F9FF; line-height: 1.5;
        }

        @media (max-width: 992px) {
          .about-cards-grid { grid-template-columns: 1fr; }
          .about-banner-grid { grid-template-columns: 1fr; }
          .about-reasons-grid { grid-template-columns: 1fr; }
          .about-why-banner { padding: 32px 24px; }
        }
      `}</style>
    </section>
  );
}
