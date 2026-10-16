import React, { useState } from "react";
import {
  FileText,
  Send,
  Gavel,
  TrendingDown,
  Users,
  CheckCircle2,
  Receipt,
  ArrowRight,
  Sparkles,
  ChevronDown,
  ShieldCheck,
  Cloud,
  Layers,
  BarChart3,
  Check,
  Building2,
  Clock,
  Coins,
  ArrowUpRight,
  ExternalLink,
  ChevronRight,
  Zap,
  Cpu,
  RefreshCw,
  Sliders,
  DollarSign,
} from "lucide-react";

export default function DigitalProcurementPage({ onOpenDemo, onNavigateHome }) {
  const [activeModule, setActiveModule] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const modules = [
    {
      id: "pr-workbench",
      name: "PR Workbench",
      tag: "Requisition Intelligence",
      icon: FileText,
      color: "#0EA5E9",
      bgColor: "rgba(14, 165, 233, 0.1)",
      headline: "Automated Purchase Requisition & Approval Automation",
      desc: "Centralize and accelerate purchase requests from every department. Eliminate manual paperwork, enforce budget controls, and automatically map requests to pre-approved categories.",
      highlights: [
        "Multi-tiered dynamic approval hierarchies based on cost centers & thresholds",
        "Direct catalog lookup and automated category taxonomy mapping",
        "Instant 1-click conversion of approved PRs into competitive RFQs or POs",
        "Zero duplicate data entry with real-time audit logging for complete compliance",
      ],
      metrics: { primary: "80% Faster", label: "PR Approval Turnaround" },
    },
    {
      id: "rfq-management",
      name: "RFQ Management",
      tag: "Strategic Dispatch",
      icon: Send,
      color: "#F97316",
      bgColor: "rgba(249, 115, 22, 0.1)",
      headline: "Automated Multi-Supplier Quote Orchestration",
      desc: "Effortlessly launch, track, and analyze multi-item Requests for Quotation (RFQs). Distribute specs to qualified vendor panels and evaluate quotes through automated side-by-side matrices.",
      highlights: [
        "Pre-configured templates for Raw Materials, Capex, MRO, and Services",
        "Automated dispatch to verified category suppliers with encrypted bids",
        "Side-by-side automated comparison matrices for technical and commercial bids",
        "Real-time response tracking with automated deadline countdowns and alerts",
      ],
      metrics: { primary: "3x More", label: "Competitive Supplier Bids" },
    },
    {
      id: "e-auctions",
      name: "E-Auctions",
      tag: "Real-Time Dynamic Bidding",
      icon: Gavel,
      color: "#8B5CF6",
      bgColor: "rgba(139, 92, 246, 0.1)",
      headline: "Forward & Reverse Auctions for Accelerated Price Discovery",
      desc: "Drive real-time competitive bidding in high-stakes procurement. Enable qualified suppliers to compete transparently, driving maximum cost reduction within a compressed timeframe.",
      highlights: [
        "Supports English, Dutch, Japanese reverse auctions and sealed-bid formats",
        "Live dynamic rank ticker, real-time bid decrements, and overtime extensions",
        "Strict compliance rules preventing collusion with masked supplier identities",
        "Instant award letters and contract generation upon auction completion",
      ],
      metrics: { primary: "8-18%", label: "Additional Cost Savings" },
    },
    {
      id: "dynamic-pricing",
      name: "Dynamic Pricing",
      tag: "Proprietary Market Intelligence",
      icon: TrendingDown,
      color: "#10B981",
      bgColor: "rgba(16, 185, 129, 0.1)",
      headline: "Price Discovery & Market Benchmark Intelligence",
      desc: "A unique signature feature of Procucev facilitating transparent Price Discovery. Real-time updated pricing from our qualified vendor panel shields businesses from commodity volatility and eliminates repetitive negotiations.",
      highlights: [
        "Real-time market benchmark analysis across 6 Lakh+ pan-India verified suppliers",
        "Protects operational margins against sudden raw material price surges",
        "Eliminates repeated quotations with pre-negotiated, index-linked price baskets",
        "Actionable price trend forecasting powered by category intelligence",
      ],
      metrics: { primary: "Real-Time", label: "Updated Price Benchmarks" },
    },
    {
      id: "sourcing-supplier",
      name: "Sourcing & Supplier Management",
      tag: "360° Supplier Ecosystem",
      icon: Users,
      color: "#0284C7",
      bgColor: "rgba(2, 132, 199, 0.1)",
      headline: "End-to-End Onboarding, Vetting & Category Mapping",
      desc: "Access a vetted panel of reliable enterprise suppliers. Manage digital onboarding, statutory compliance checks, quality certifications, and performance scorecards from a single dashboard.",
      highlights: [
        "Rigorous technical, financial, and regulatory compliance screening (GST, MSME, ISO)",
        "Centralized digital document vault with automated expiry alerts",
        "Dynamic vendor performance scorecards tracking OTIF delivery, quality, and responsiveness",
        "Dedicated category specialists providing proactive supplier development",
      ],
      metrics: { primary: "6 Lakh+", label: "Verified Vendor Network" },
    },
    {
      id: "po-management",
      name: "PO Management",
      tag: "Order Execution",
      icon: Sliders,
      color: "#EA580C",
      bgColor: "rgba(234, 88, 12, 0.1)",
      headline: "Streamlined Purchase Order Generation & Lifecycle Tracking",
      desc: "Convert awarded quotes into formal legal Purchase Orders with zero friction. Enable digital supplier acknowledgments, delivery milestone schedules, and live shipment tracking.",
      highlights: [
        "Single-click automated PO generation directly from approved RFQ or auction outcome",
        "Digital vendor acknowledgment tracking with delivery timeline commitments",
        "Milestone-based delivery scheduling and advance payment linkage",
        "Real-time dispatch, transit, and warehouse gate-in tracking",
      ],
      metrics: { primary: "65% Less", label: "Order Processing Time" },
    },
    {
      id: "invoice-matching",
      name: "Invoice Matching & Payment",
      tag: "3-Way Reconciliation",
      icon: Receipt,
      color: "#059669",
      bgColor: "rgba(5, 150, 105, 0.1)",
      headline: "Automated 3-Way Reconciliation (PO vs. GRN vs. Invoice)",
      desc: "Eliminate billing disputes and fraudulent invoices. Our intelligent engine matches line items, quantities, and pricing between Purchase Orders, Goods Receipt Notes (GRN), and vendor invoices.",
      highlights: [
        "Automated tolerance checks for quantity and unit price variance",
        "Automated routing of exceptions to category managers for instant clearance",
        "Seamless bidirectional sync with ERPs (SAP, Oracle, Tally, Zoho) for automated payment runs",
        "Audit-ready electronic records ensuring 100% tax and GST compliance",
      ],
      metrics: { primary: "100%", label: "Reconciliation Accuracy" },
    },
  ];

  const differentiators = [
    {
      icon: TrendingDown,
      color: "#0EA5E9",
      title: "Dynamic Pricing",
      desc: "Its unique feature facilitates you with Price Discovery. Real-time updated prices by our qualified vendor panel avoid repeated quotations, negotiations, and volatility surprises.",
    },
    {
      icon: Coins,
      color: "#F97316",
      title: "Cost Optimization",
      desc: "Achieve significant cost savings through Strategic Sourcing, Expert Negotiation, and rigorous Category Management excellence tailored to your spend categories.",
    },
    {
      icon: Zap,
      color: "#8B5CF6",
      title: "Category Expertise",
      desc: "Our team of seasoned procurement professionals supports you in vendor sourcing, technical negotiation, and ongoing supplier performance diagnostics.",
    },
    {
      icon: ShieldCheck,
      color: "#10B981",
      title: "Verified Vendor Network",
      desc: "Suppliers are validated on defined technical, commercial, and statutory compliance criteria, ensuring trustworthy partnerships and on-time fulfillment.",
    },
    {
      icon: Cloud,
      color: "#0284C7",
      title: "Cloud-Based In-House Tech",
      desc: "Procucev uses an in-house proprietary cloud platform to ensure streamlined processes, customized to your internal controls without compromising data security.",
    },
    {
      icon: Layers,
      color: "#EA580C",
      title: "Seamless ERP Integration",
      desc: "Pre-built connectors integrate smoothly with major ERPs and accounting systems (SAP, Oracle, Tally, Microsoft Dynamics) for frictionless data flow.",
    },
  ];

  const benefits = [
    {
      title: "Boosted Procurement Efficiency",
      metric: "75%",
      sub: "Faster Process Cycle",
      desc: "Eliminate bottlenecks across the source-to-pay lifecycle with automated workflows, instant quote comparisons, and digital approvals.",
    },
    {
      title: "Significant Cost Optimization",
      metric: "12-25%",
      sub: "Cumulative Savings",
      desc: "Leverage competitive bidding, real-time e-auctions, and commodity price benchmarks to achieve bottom-line financial impact.",
    },
    {
      title: "Access to Trusted Vendor Base",
      metric: "6 Lakh+",
      sub: "Pre-Vetted Suppliers",
      desc: "Expand your supply chain reach with pre-screened manufacturers and distributors validated for quality and financial stability.",
    },
    {
      title: "Automated Price Discovery",
      metric: "100%",
      sub: "Transparent Market Rates",
      desc: "Gain instant visibility into prevailing market rates and benchmark prices across raw materials, packaging, and indirect categories.",
    },
    {
      title: "Improved Sourcing Speed & Accuracy",
      metric: "< 24 Hrs",
      sub: "Quote Turnaround Time",
      desc: "Standardized RFQ specifications ensure zero miscommunication, leading to highly accurate quotes and rapid order execution.",
    },
    {
      title: "Data-Driven Analytics & Decisions",
      metric: "360°",
      sub: "Spend Visibility",
      desc: "Actionable executive dashboards reveal spend patterns, vendor rating trends, and savings opportunities across business units.",
    },
  ];

  const faqs = [
    {
      q: "What is Digital Procurement Services (DPS)?",
      a: "DPS is a cloud-based, end-to-end procurement solution combined with expert managed services that digitizes and optimizes your entire Source-to-Procure-to-Pay (S2P2P) cycle.",
    },
    {
      q: "How is DPS different from other S2P platforms?",
      a: "DPS is a tailor-made solution built for strategic procurement. It enables smarter sourcing decisions through analytics, competitive bidding (e-auctions), Dynamic Pricing, a pre-vetted quality vendor base, and human category expertise—capabilities most standard ERPs do not offer out-of-the-box.",
    },
    {
      q: "Can DPS integrate with our existing ERP or finance system?",
      a: "Yes. DPS is engineered for seamless bidirectional integration with major enterprise ERP platforms including SAP, Oracle, Microsoft Dynamics, Tally, and Zoho, ensuring procurement data flows effortlessly across accounting systems.",
    },
    {
      q: "Is there expert support included or is it just a platform?",
      a: "DPS includes dedicated expert-led services along with the software platform. Our procurement specialists help configure sourcing strategies, run complex e-auctions, onboard suppliers, and guide your team through cost-saving initiatives. It’s software plus elite expertise.",
    },
    {
      q: "Do we need to train our team to use DPS?",
      a: "Minimal training is required. DPS features an intuitive, consumer-grade user interface. We provide hands-on onboarding workshops, role-based walkthroughs, and ongoing technical support to ensure rapid adoption.",
    },
    {
      q: "What kind of savings can we expect?",
      a: "Organizations using DPS typically report 12% to 25% cost savings through heightened sourcing competition, transparency, and benchmark intelligence. Exact results depend on category spend volume and initial procurement maturity.",
    },
    {
      q: "Is DPS suitable for all sizes of enterprises?",
      a: "DPS is scalable across mid-market and enterprise organizations. Whether you operate decentralized regional procurement or centralized multi-location sourcing, DPS adapts flexibly to your organizational structure.",
    },
    {
      q: "Is vendor onboarding included?",
      a: "Yes. DPS includes complete vendor onboarding support. We assist in qualifying, vetting, and training your suppliers using a structured onboarding protocol backed by our pan-India network.",
    },
  ];

  const currentMod = modules[activeModule];

  return (
    <div className="v2-dps-page">
      {/* Hero Section */}
      <section className="v2-dps-hero">
        <div className="container v2-dps-hero-inner">
          <div className="v2-dps-hero-badge">
            <Sparkles size={15} className="text-sky-500" />
            <span>Integrated S2P Technology & Service Platform</span>
          </div>

          <h1 className="v2-dps-hero-title">
            Digital Procurement Services{" "}
            <span className="highlight-text">(DPS)</span>
          </h1>

          <p className="v2-dps-hero-subtitle">
            Make your procurement a strategic driver. Faster Procurement.
            Smarter Insights. Lower Costs.
          </p>

          <p className="v2-dps-hero-desc">
            DPS automates your entire Source-to-Pay cycle, enhances operational
            efficiency with its 7 specialized modules, real-time dynamic
            pricing, and an elite network of 6 Lakh+ verified suppliers.
          </p>

          <div className="v2-dps-hero-actions">
            <button
              className="btn btn-primary v2-dps-btn-primary"
              onClick={onOpenDemo}
            >
              Schedule Platform Demo <ArrowUpRight size={18} />
            </button>
            <a
              href="#dps-modules"
              className="btn btn-secondary v2-dps-btn-secondary"
            >
              Explore 7 Modules <ChevronDown size={18} />
            </a>
          </div>

          {/* Key Value Stat Strip */}
          <div className="v2-dps-stats-grid">
            <div className="v2-dps-stat-card">
              <div className="stat-number">6 Lakh+</div>
              <div className="stat-label">Verified Suppliers</div>
            </div>
            <div className="v2-dps-stat-card">
              <div className="stat-number">2,000+</div>
              <div className="stat-label">Registered Buyers</div>
            </div>
            <div className="v2-dps-stat-card">
              <div className="stat-number">&lt; 24 Hrs</div>
              <div className="stat-label">Quote Turnaround</div>
            </div>
            <div className="v2-dps-stat-card">
              <div className="stat-number">12-25%</div>
              <div className="stat-label">Cumulative Cost Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7 Core Modules Interactive Showcase */}
      <section id="dps-modules" className="v2-dps-modules-section">
        <div className="container">
          <div className="section-head text-center">
            <span className="section-tag">End-to-End Orchestration</span>
            <h2 className="section-title">The 7 Specialized Modules of DPS</h2>
            <p className="section-subtitle">
              Comprehensive Source-to-Pay digitization designed to maximize
              transparency, automate approvals, and deliver measurable
              procurement ROI.
            </p>
          </div>

          {/* Module Selector Tabs */}
          <div className="v2-dps-tab-bar">
            {modules.map((mod, index) => {
              const Icon = mod.icon;
              const isActive = index === activeModule;
              return (
                <button
                  key={mod.id}
                  className={`v2-dps-tab-btn ${isActive ? "active" : ""}`}
                  onClick={() => setActiveModule(index)}
                  style={{
                    borderBottomColor: isActive ? mod.color : "transparent",
                  }}
                >
                  <Icon
                    size={17}
                    style={{ color: isActive ? mod.color : "#64748B" }}
                  />
                  <span>{mod.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Module Detail Card */}
          <div className="v2-dps-module-showcase">
            <div className="module-content-left">
              <div
                className="module-badge"
                style={{
                  background: currentMod.bgColor,
                  color: currentMod.color,
                }}
              >
                <currentMod.icon size={16} />
                <span>{currentMod.tag}</span>
              </div>

              <h3 className="module-headline">{currentMod.headline}</h3>
              <p className="module-desc">{currentMod.desc}</p>

              <div className="module-highlights-title">Key Capabilities:</div>
              <div className="module-highlights-list">
                {currentMod.highlights.map((h, i) => (
                  <div key={i} className="module-highlight-item">
                    <div
                      className="check-icon-wrap"
                      style={{
                        background: currentMod.bgColor,
                        color: currentMod.color,
                      }}
                    >
                      <Check size={14} />
                    </div>
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="module-cta-row">
                <button className="btn btn-primary" onClick={onOpenDemo}>
                  Request {currentMod.name} Demo <ArrowUpRight size={16} />
                </button>
                <div className="module-metric-pill">
                  <strong>{currentMod.metrics.primary}</strong>
                  <span>{currentMod.metrics.label}</span>
                </div>
              </div>
            </div>

            <div className="module-visual-right">
              <div className="module-visual-card">
                <div className="mockup-header">
                  <div className="mockup-dots">
                    <span className="dot dot-r"></span>
                    <span className="dot dot-y"></span>
                    <span className="dot dot-g"></span>
                  </div>
                  <span className="mockup-title">
                    DPS NXT Platform // {currentMod.name}
                  </span>
                </div>

                <div className="mockup-body">
                  <div className="mockup-workflow-step">
                    <div
                      className="step-num"
                      style={{ background: currentMod.color }}
                    >
                      01
                    </div>
                    <div className="step-info">
                      <div className="step-title">
                        Automated Ingestion & Validation
                      </div>
                      <div className="step-sub">
                        System parses requisitions, line items & specs instantly
                      </div>
                    </div>
                  </div>

                  <div className="mockup-workflow-step">
                    <div
                      className="step-num"
                      style={{ background: currentMod.color }}
                    >
                      02
                    </div>
                    <div className="step-info">
                      <div className="step-title">
                        Real-Time Rule-Based Execution
                      </div>
                      <div className="step-sub">
                        Threshold matching, automated dispatch & workflow
                        validation
                      </div>
                    </div>
                  </div>

                  <div className="mockup-workflow-step">
                    <div
                      className="step-num"
                      style={{ background: currentMod.color }}
                    >
                      03
                    </div>
                    <div className="step-info">
                      <div className="step-title">
                        Audit Log & ERP Synchronization
                      </div>
                      <div className="step-sub">
                        Secure transactional sync with financial systems
                      </div>
                    </div>
                  </div>

                  <div
                    className="mockup-stat-box"
                    style={{ borderColor: currentMod.color }}
                  >
                    <div className="stat-label">
                      Verified Enterprise Outcome
                    </div>
                    <div
                      className="stat-val"
                      style={{ color: currentMod.color }}
                    >
                      {currentMod.metrics.primary}
                    </div>
                    <div className="stat-sub">
                      {currentMod.metrics.label} achieved with standard DPS
                      rollout
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* S2P Visual Flow Diagram */}
          <div className="v2-dps-flow-section">
            <h4 className="flow-title">Continuous Source-to-Pay Lifecycle</h4>
            <div className="v2-dps-flow-grid">
              {modules.map((m, idx) => (
                <div
                  key={m.id}
                  className="flow-step-box"
                  onClick={() => setActiveModule(idx)}
                >
                  <div className="flow-step-idx">{idx + 1}</div>
                  <m.icon size={20} style={{ color: m.color }} />
                  <div className="flow-step-name">{m.name}</div>
                  {idx < modules.length - 1 && (
                    <ChevronRight size={16} className="flow-arrow" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Differentiators Section */}
      <section className="v2-dps-diff-section">
        <div className="container">
          <div className="section-head text-center">
            <span className="section-tag">Why Enterprises Choose Procucev</span>
            <h2 className="section-title">
              Strategic Value & Unique Capabilities
            </h2>
            <p className="section-subtitle">
              Unlike generic standalone software tools, DPS pairs
              high-performance cloud technology with seasoned category
              specialists.
            </p>
          </div>

          <div className="v2-dps-diff-grid">
            {differentiators.map((d, i) => {
              const Icon = d.icon;
              return (
                <div key={i} className="v2-dps-diff-card">
                  <div
                    className="diff-icon-wrap"
                    style={{ background: `${d.color}15`, color: d.color }}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 className="diff-card-title">{d.title}</h3>
                  <p className="diff-card-desc">{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Customer Benefits Grid */}
      <section className="v2-dps-benefits-section">
        <div className="container">
          <div className="section-head text-center">
            <span className="section-tag">Tangible ROI</span>
            <h2 className="section-title">DPS Customer Benefits</h2>
            <p className="section-subtitle">
              Measured results delivered across manufacturing, engineering,
              retail, infrastructure, and services enterprises.
            </p>
          </div>

          <div className="v2-dps-benefits-grid">
            {benefits.map((b, i) => (
              <div key={i} className="v2-dps-benefit-card">
                <div className="benefit-metric-badge">
                  <span className="b-metric">{b.metric}</span>
                  <span className="b-sub">{b.sub}</span>
                </div>
                <h4 className="benefit-title">{b.title}</h4>
                <p className="benefit-desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Styles for Digital Procurement Services Page (V2 Theme) */}
      <style>{`
        .v2-dps-page {
          background: #F8FAFC;
          color: #334155;
          font-family: 'Poppins', sans-serif;
          padding-bottom: 60px;
        }



        /* Hero */
        .v2-dps-hero {
          padding: 60px 0 50px;
          text-align: center;
          background: radial-gradient(circle at 50% 10%, rgba(14, 165, 233, 0.08) 0%, transparent 60%);
        }
        .v2-dps-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(14, 165, 233, 0.1);
          color: #0284C7;
          border: 1px solid rgba(14, 165, 233, 0.25);
          padding: 6px 16px;
          border-radius: 999px;
          font-size: 0.82rem;
          font-weight: 600;
          margin-bottom: 20px;
        }
        .v2-dps-hero-title {
          font-size: 2.75rem;
          font-weight: 800;
          color: #0C4A6E;
          line-height: 1.2;
          margin-bottom: 16px;
          letter-spacing: -0.5px;
        }
        .v2-dps-hero-title .highlight-text {
          color: #0EA5E9;
        }
        .v2-dps-hero-subtitle {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1E293B;
          margin-bottom: 14px;
        }
        .v2-dps-hero-desc {
          font-size: 1rem;
          color: #64748B;
          max-width: 820px;
          margin: 0 auto 30px;
          line-height: 1.6;
        }
        .v2-dps-hero-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 48px;
        }
        .v2-dps-btn-primary {
          padding: 12px 28px;
          font-size: 0.95rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .v2-dps-btn-secondary {
          padding: 12px 24px;
          font-size: 0.95rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
        }

        /* Stats Grid */
        .v2-dps-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          max-width: 960px;
          margin: 0 auto;
        }
        .v2-dps-stat-card {
          background: #ffffff;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 20px 16px;
          box-shadow: 0 4px 14px rgba(12, 74, 110, 0.04);
          text-align: center;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .v2-dps-stat-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(14, 165, 233, 0.12);
        }
        .stat-number {
          font-size: 1.85rem;
          font-weight: 800;
          color: #0C4A6E;
          line-height: 1.2;
          margin-bottom: 4px;
        }
        .stat-label {
          font-size: 0.8rem;
          font-weight: 500;
          color: #64748B;
        }

        /* Section Headings */
        .section-head {
          margin-bottom: 40px;
        }
        .section-tag {
          display: inline-block;
          font-size: 0.82rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #0EA5E9;
          margin-bottom: 8px;
        }
        .section-title {
          font-size: 2.1rem;
          font-weight: 800;
          color: #0C4A6E;
          margin-bottom: 12px;
          letter-spacing: -0.3px;
        }
        .section-subtitle {
          font-size: 1rem;
          color: #64748B;
          max-width: 720px;
          margin: 0 auto;
          line-height: 1.55;
        }

        /* Modules Section */
        .v2-dps-modules-section {
          padding: 70px 0;
          background: #ffffff;
          border-top: 1px solid #E2E8F0;
          border-bottom: 1px solid #E2E8F0;
        }
        .v2-dps-tab-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
          border-bottom: 1px solid #E2E8F0;
          padding-bottom: 12px;
          margin-bottom: 36px;
        }
        .v2-dps-tab-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          background: transparent;
          border: none;
          border-bottom: 3px solid transparent;
          font-size: 0.9rem;
          font-weight: 600;
          color: #64748B;
          cursor: pointer;
          border-radius: 8px 8px 0 0;
          transition: all 0.2s ease;
        }
        .v2-dps-tab-btn:hover {
          color: #0EA5E9;
          background: rgba(14, 165, 233, 0.05);
        }
        .v2-dps-tab-btn.active {
          color: #0C4A6E;
          background: rgba(14, 165, 233, 0.08);
        }

        /* Active Showcase Card */
        .v2-dps-module-showcase {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 40px;
          align-items: center;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(12, 74, 110, 0.05);
          margin-bottom: 40px;
        }
        .module-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 14px;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 700;
          margin-bottom: 14px;
        }
        .module-headline {
          font-size: 1.65rem;
          font-weight: 800;
          color: #0C4A6E;
          line-height: 1.3;
          margin-bottom: 12px;
        }
        .module-desc {
          font-size: 0.96rem;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 24px;
        }
        .module-highlights-title {
          font-size: 0.88rem;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .module-highlights-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 28px;
        }
        .module-highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.92rem;
          color: #334155;
          line-height: 1.5;
        }
        .check-icon-wrap {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .module-cta-row {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .module-metric-pill {
          display: flex;
          flex-direction: column;
          padding: 6px 16px;
          background: #ffffff;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
        }
        .module-metric-pill strong {
          font-size: 1.05rem;
          font-weight: 800;
          color: #0C4A6E;
        }
        .module-metric-pill span {
          font-size: 0.72rem;
          color: #64748B;
          font-weight: 500;
        }

        /* Module Mockup */
        .module-visual-card {
          background: #ffffff;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
        }
        .mockup-header {
          background: #F1F5F9;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid #E2E8F0;
        }
        .mockup-dots {
          display: flex;
          gap: 6px;
        }
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .dot-r { background: #EF4444; }
        .dot-y { background: #F59E0B; }
        .dot-g { background: #10B981; }
        .mockup-title {
          font-size: 0.76rem;
          font-family: monospace;
          color: #64748B;
          font-weight: 600;
        }
        .mockup-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .mockup-workflow-step {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 12px 14px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
        }
        .step-num {
          color: #ffffff;
          font-weight: 800;
          font-size: 0.75rem;
          padding: 4px 8px;
          border-radius: 6px;
          flex-shrink: 0;
        }
        .step-title {
          font-size: 0.88rem;
          font-weight: 700;
          color: #0F172A;
        }
        .step-sub {
          font-size: 0.78rem;
          color: #64748B;
        }
        .mockup-stat-box {
          margin-top: 8px;
          padding: 16px;
          background: #ffffff;
          border: 2px dashed #E2E8F0;
          border-radius: 14px;
          text-align: center;
        }
        .stat-val {
          font-size: 1.6rem;
          font-weight: 800;
          margin: 4px 0 2px;
        }

        /* Flow Diagram */
        .v2-dps-flow-section {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 18px;
          padding: 24px;
          text-align: center;
        }
        .flow-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #0C4A6E;
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .v2-dps-flow-grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
        }
        .flow-step-box {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          border: 1px solid #CBD5E1;
          border-radius: 12px;
          padding: 8px 14px;
          font-size: 0.84rem;
          font-weight: 600;
          color: #1E293B;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .flow-step-box:hover {
          border-color: #0EA5E9;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(14, 165, 233, 0.15);
        }
        .flow-step-idx {
          width: 20px;
          height: 20px;
          background: #E2E8F0;
          color: #475569;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: 700;
        }
        .flow-arrow {
          color: #94A3B8;
          margin-left: 4px;
        }

        /* Differentiators Grid */
        .v2-dps-diff-section {
          padding: 70px 0;
        }
        .v2-dps-diff-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .v2-dps-diff-card {
          background: #ffffff;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 28px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          display: flex;
          flex-direction: column;
        }
        .v2-dps-diff-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(12, 74, 110, 0.08);
          border-color: #BAE6FD;
        }
        .diff-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        .diff-card-title {
          font-size: 1.18rem;
          font-weight: 700;
          color: #0C4A6E;
          margin-bottom: 10px;
        }
        .diff-card-desc {
          font-size: 0.9rem;
          color: #64748B;
          line-height: 1.6;
        }

        /* Benefits Grid */
        .v2-dps-benefits-section {
          padding: 70px 0;
          background: #ffffff;
          border-top: 1px solid #E2E8F0;
          border-bottom: 1px solid #E2E8F0;
        }
        .v2-dps-benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .v2-dps-benefit-card {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 28px;
          position: relative;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }
        .v2-dps-benefit-card:hover {
          transform: translateY(-4px);
          border-color: #0EA5E9;
          background: #ffffff;
          box-shadow: 0 10px 28px rgba(14, 165, 233, 0.09);
        }
        .benefit-metric-badge {
          display: inline-flex;
          align-items: baseline;
          gap: 8px;
          background: #ffffff;
          border: 1px solid #E2E8F0;
          padding: 6px 14px;
          border-radius: 10px;
          margin-bottom: 16px;
        }
        .b-metric {
          font-size: 1.45rem;
          font-weight: 800;
          color: #0EA5E9;
        }
        .b-sub {
          font-size: 0.74rem;
          font-weight: 600;
          color: #64748B;
        }
        .benefit-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #0C4A6E;
          margin-bottom: 8px;
        }
        .benefit-desc {
          font-size: 0.88rem;
          color: #64748B;
          line-height: 1.6;
        }

        /* FAQ Accordion */
        .v2-dps-faq-section {
          padding: 70px 0;
        }
        .v2-dps-faq-wrapper {
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .v2-dps-faq-item {
          background: #ffffff;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          overflow: hidden;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .v2-dps-faq-item.open {
          border-color: #0EA5E9;
          box-shadow: 0 4px 18px rgba(14, 165, 233, 0.08);
        }
        .faq-question-btn {
          width: 100%;
          background: transparent;
          border: none;
          padding: 20px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: left;
          cursor: pointer;
          gap: 16px;
        }
        .faq-q-text {
          font-size: 1.02rem;
          font-weight: 700;
          color: #0C4A6E;
          line-height: 1.4;
        }
        .faq-arrow {
          color: #0EA5E9;
          flex-shrink: 0;
          transition: transform 0.25s ease;
        }
        .faq-arrow.rotated {
          transform: rotate(180deg);
        }
        .faq-answer-pane {
          padding: 0 24px 22px;
          color: #475569;
          font-size: 0.94rem;
          line-height: 1.65;
          border-top: 1px solid rgba(226, 232, 240, 0.6);
          padding-top: 14px;
        }

        /* Responsive */
        @media (max-width: 992px) {
          .v2-dps-hero-title { font-size: 2.2rem; }
          .v2-dps-stats-grid { grid-template-columns: repeat(2, 1fr); }
          .v2-dps-module-showcase { grid-template-columns: 1fr; }
          .v2-dps-diff-grid { grid-template-columns: repeat(2, 1fr); }
          .v2-dps-benefits-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .v2-dps-hero-title { font-size: 1.85rem; }
          .v2-dps-stats-grid { grid-template-columns: 1fr; }
          .v2-dps-diff-grid { grid-template-columns: 1fr; }
          .v2-dps-benefits-grid { grid-template-columns: 1fr; }
          .v2-dps-hero-actions { flex-direction: column; width: 100%; }
          .v2-dps-hero-actions button, .v2-dps-hero-actions a { width: 100%; justify-content: center; }
          .v2-dps-tab-bar { flex-direction: column; align-items: stretch; }
          .v2-dps-tab-btn { justify-content: flex-start; width: 100%; }
          .v2-dps-module-showcase { gap: 24px; padding: 24px; }
          .module-content-left, .module-visual-right { padding: 0; }
          .module-cta-row { flex-direction: column; align-items: stretch; gap: 12px; }
          .module-cta-row button { width: 100%; }
          .v2-dps-flow-grid { flex-wrap: wrap; justify-content: center; gap: 12px; }
          .flow-step-box { flex: 1 1 calc(50% - 8px); min-width: 140px; }
          .flow-arrow { display: none; }
        }
      `}</style>
    </div>
  );
}
