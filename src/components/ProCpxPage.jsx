import React, { useState } from "react";
import {
  Building2,
  Factory,
  Store,
  Warehouse,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  FileText,
  Gavel,
  Users,
  DollarSign,
  BarChart3,
  ChevronDown,
  Sparkles,
  MessageSquare,
  Briefcase,
  Zap,
  Layers,
  ChevronRight,
  Landmark,
  ShieldAlert,
  HardHat,
  Cpu,
  Check,
} from "lucide-react";

export default function ProCpxPage({ onOpenDemo, onNavigateHome }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [activeFeatureTab, setActiveFeatureTab] = useState(0);

  const keyFeatures = [
    {
      id: "pr-po",
      num: "01",
      title: "Simplified PR to PO Process",
      subtitle: "Workflow Orchestration",
      icon: FileText,
      color: "#0EA5E9",
      bg: "rgba(14, 165, 233, 0.1)",
      desc: "Streamline your procurement workflow with streamlined approvals and document management.",
      details: [
        "Centralize requisitions for factory expansions, site setups, and retail rollouts",
        "Multi-level authorization matrix based on CAPEX project budgets and thresholds",
        "Zero manual data re-entry with direct conversion of approved BOQs to POs",
        "Complete audit trails and milestone payment release checkpoints",
      ],
    },
    {
      id: "cost-optimization",
      num: "02",
      title: "Optimize Costs",
      subtitle: "Commercial Leverage",
      icon: DollarSign,
      color: "#F97316",
      bg: "rgba(249, 115, 22, 0.1)",
      desc: "Negotiate better deals through automatic quote comparisons and dynamic price discovery.",
      details: [
        "Side-by-side commercial comparison matrices normalize tax, freight, and payment terms",
        "Identify cost outliers across line items before final award",
        "Consolidated volume negotiation across multi-site ongoing CAPEX projects",
        "Proven 15% to 28% total Capex outlay reduction across key categories",
      ],
    },
    {
      id: "enhanced-transparency",
      num: "03",
      title: "Enhanced Transparency",
      subtitle: "Complete Spend Visibility",
      icon: BarChart3,
      color: "#8B5CF6",
      bg: "rgba(139, 92, 246, 0.1)",
      desc: "Gain real-time visibility into your Capex spend across every plant, facility, and outlet.",
      details: [
        "Live dashboard of ongoing projects, committed funds, and actual disbursements",
        "Compare actual vendor quotes against estimated baseline engineering budgets",
        "Eliminate blind spots and cost escalations through granular milestone tracking",
        "Executive reports exportable to ERP and financial management platforms",
      ],
    },
    {
      id: "e-auctions",
      num: "04",
      title: "User-Friendly E-Auction Module",
      subtitle: "Dynamic Digital Bidding",
      icon: Gavel,
      color: "#10B981",
      bg: "rgba(16, 185, 129, 0.1)",
      desc: "Easily conduct E-Auctions (Forward and Reverse), Dutch, and Sealed bids for high-value Capex.",
      details: [
        "Tailored bidding rules for complex package contracting and turnkey works",
        "Real-time decremental bidding room with masked vendor rankings",
        "Eliminates vendor collusion while delivering true market price discovery",
        "Automated auction reports with complete compliance and bid logs",
      ],
    },
    {
      id: "vendor-comm",
      num: "05",
      title: "Effortless Vendor Communication",
      subtitle: "Real-Time Collaboration",
      icon: MessageSquare,
      color: "#EC4899",
      bg: "rgba(236, 72, 153, 0.1)",
      desc: "Communicate with vendors easily with built-in chat support and direct clarification logs.",
      details: [
        "In-line technical queries and clarifications on drawings and BOQ specs",
        "Timestamped communication history avoiding post-award project disputes",
        "Automated alerts to suppliers for pending quotes, revisions, and deadlines",
        "Single communication channel eliminating scattered emails and WhatsApp threads",
      ],
    },
    {
      id: "accelerate-decisions",
      num: "06",
      title: "Accelerate Decision-Making",
      subtitle: "Actionable Intelligence",
      icon: Zap,
      color: "#0284C7",
      bg: "rgba(2, 132, 199, 0.1)",
      desc: "Make informed decisions with real-time data, cost analytics, and timeline tracking.",
      details: [
        "Compress Capex sourcing cycles from months into days",
        "Automated vendor scoring combining commercial rank, lead time, and technical capability",
        "Comparative evaluation summaries prepared instantly for Capex committee review",
        "Prevent project launch delays with milestone countdown telemetry",
      ],
    },
    {
      id: "expert-support",
      num: "07",
      title: "Expert Support",
      subtitle: "Domain Engineering",
      icon: Users,
      color: "#F59E0B",
      bg: "rgba(245, 158, 11, 0.1)",
      desc: "Our team of procurement experts is available to assist you with vendor selection, negotiation, and value engineering.",
      details: [
        "Dedicated category specialists with deep Capex industry engineering experience",
        "Value engineering assistance to optimize bill of quantities without compromising quality",
        "Hands-on negotiation backing for high-ticket machine bought-outs and turnkey civil packages",
        "Comprehensive market benchmark rate validations before PO issuance",
      ],
    },
  ];

  const uniqueCapabilities = [
    {
      title: "Standard Technical BOQs",
      tag: "Precision Specifications",
      desc: "Facilitates Complex Technical BOQs ensuring smooth comparisons and Transparent Vendor Quotes. Eliminates ambiguity between engineering specs and contractor deliverables.",
      icon: FileText,
      color: "#0EA5E9",
    },
    {
      title: "PAN INDIA Capex Vendor Network",
      tag: "6 Lakh+ Pre-Vetted Partners",
      desc: "Access verified Capex vendors across every Indian state for Turnkey Projects, Bought-outs, Civil works, MEP, and specialized technical services.",
      icon: Users,
      color: "#F97316",
    },
    {
      title: "In-Built Project Cost Controls",
      tag: "Budget Governance",
      desc: "Consolidate diverse estimates with real market rates, ensuring full cost visibility, milestone spending caps, and stronger financial discipline.",
      icon: ShieldCheck,
      color: "#10B981",
    },
    {
      title: "Comparisons for Exhaustive BOQs",
      tag: "Deep Item Analytics",
      desc: "Side-by-side line item analytics for multi-page complex BOQs. Normalize deviations, item rates, and add-on charges in a single unified view.",
      icon: BarChart3,
      color: "#8B5CF6",
    },
    {
      title: "Unified Approval Workflows",
      tag: "Governance & SOPs",
      desc: "Unified Approval Workflows ensure SOP Compliance, Accountability, and Complete Transparency across project managers, procurement, and CXOs.",
      icon: Layers,
      color: "#0284C7",
    },
    {
      title: "Category-Wise Rate Cards",
      tag: "Instant Benchmarks",
      desc: "Standardized Capex Pricing Benchmarks enable faster Vendor Finalization with complete cost transparency based on historical market trends.",
      icon: DollarSign,
      color: "#F59E0B",
    },
    {
      title: "Extended Category Expertise",
      tag: "End-to-End Alignment",
      desc: "Procucev enables optimized Sourcing by aligning Cost analysis, Technical specifications, and Supplier capabilities across complex capital expenditures.",
      icon: Sparkles,
      color: "#EC4899",
    },
  ];

  const sectors = [
    {
      name: "Retail Chains",
      icon: Store,
      color: "#F97316",
      desc: "Store fitouts, kitchen setups, commercial refrigeration, signage, and pan-India multi-outlet rollouts on tight schedules.",
    },
    {
      name: "Manufacturing & Industrial",
      icon: Factory,
      color: "#0EA5E9",
      desc: "Plant machinery procurement, industrial utilities, cleanroom setups, heavy fabrication, and factory commissioning.",
    },
    {
      name: "Logistics & Warehousing",
      icon: Warehouse,
      color: "#10B981",
      desc: "High-density storage racking systems, prefabricated PEB sheds, dock levellers, and automated material handling equipment.",
    },
    {
      name: "Construction & Real Estate",
      icon: HardHat,
      color: "#8B5CF6",
      desc: "Turnkey interior packages, civil engineering contractors, structural steel fabrication, MEP, and HVAC contracts.",
    },
    {
      name: "Hospitality",
      icon: Building2,
      color: "#F59E0B",
      desc: "Commercial kitchen equipment, hotel furniture fitouts, MEP infrastructure, and luxury guest facility finishing.",
    },
    {
      name: "Banking & Insurance",
      icon: Landmark,
      color: "#0284C7",
      desc: "Rapid multi-location branch office setups, ATM infrastructure, secure vaults, modular furnishings, and network wiring.",
    },
  ];

  const customerBenefits = [
    {
      title: "Consolidates Multi-Project Procurement",
      desc: "Aggregate purchasing power across multiple upcoming facilities or renovation sites to secure volume-tier price discounts.",
    },
    {
      title: "Automates Indent-to-Order Cycle",
      desc: "Compress Capex requisition-to-contract cycle time by up to 70% with standardized digital approvals and ready templates.",
    },
    {
      title: "Pre-Qualified Vendors Across Locations",
      desc: "Tap into 6 Lakh+ verified suppliers with verified delivery track records, GST compliance, and local footprint in Tier 1, 2, and 3 cities.",
    },
    {
      title: "Vendor Performance Scorecards",
      desc: "Track quality conformance, timeline adherence, safety standards, and post-installation support with automated scorecards.",
    },
    {
      title: "Built for Multi-Location Enterprises",
      desc: "Enable centralized Capex strategy with distributed on-ground execution, giving regional managers agility while headquarters retains control.",
    },
  ];

  const faqs = [
    {
      q: "What is proCPX?",
      a: "proCPX is a digital procurement platform and service purpose-built for Capex procurement. It streamlines the entire PR-to-PO journey, bringing transparency, control, and cost efficiency to high-value purchases such as retail fitouts, factory setups, prefab structures, and storage solutions. It combines advanced tools like e-auctions and technical bid comparisons with access to category experts and a quality vendor ecosystem.",
    },
    {
      q: "What kind of vendor base does proCPX offer access to?",
      a: "proCPX connects you to a curated network of over 6 Lakh+ pre-vetted vendors across Capex categories ranging from interior contractors and MEP vendors to structural steel fabricators, OEMs, and turnkey solution providers. Each vendor is evaluated on quality, compliance, and delivery track record, making sourcing for projects like restaurant fitouts or warehouse setups both faster and more reliable.",
    },
    {
      q: "How is proCPX unique compared to general procurement tools?",
      a: "proCPX stands apart by blending technology, domain expertise, and vendor intelligence. Unlike general procurement tools, proCPX is designed for the complexities of Capex procurement—handling technical BOQs, multi-vendor comparisons, milestone-based delivery, and prefab sourcing. Our expert-led model ensures better outcomes, even for lean procurement teams.",
    },
    {
      q: "Can proCPX integrate with our existing ERP system?",
      a: "Yes. proCPX supports seamless integration with ERP systems including SAP, Oracle, and Microsoft Dynamics. We offer both API-based and file-based integration to ensure smooth data flow for PRs, POs, and approvals without disrupting your existing financial and accounting systems.",
    },
    {
      q: "What specific Capex categories can proCPX handle?",
      a: "proCPX is category-agnostic and highly configurable. It routinely handles: Retail and restaurant fitouts, Multi-location office setups, Factory and warehouse infrastructure, IT and automation systems, Prefabricated steel structures, Storage racking & material handling, and HVAC, electricals & civil work. Each category is supported by relevant workflows, documentation, and technical evaluation stages.",
    },
    {
      q: "What are the core features of proCPX?",
      a: "Key features include PR-to-PO digitization, Standard technical BOQs, E-auctions (reverse, forward, Dutch, sealed bid), Interactive negotiations & Price discovery, Real-time vendor chat and clarifications, Multi-tiered approval routing and audit trail, PAN India Capex vendor network, and Hands-on support from domain experts.",
    },
    {
      q: "Does proCPX support vendor onboarding and management?",
      a: "Yes. proCPX includes a robust vendor onboarding module covering documentation, statutory compliance checks (GST, PAN, MSME, ISO), category qualification, and past performance tracking. You can also tap into our pre-vetted vendor network to source faster without compromising quality.",
    },
    {
      q: "Do we need a large team to run proCPX?",
      a: "No. proCPX is purpose-designed for lean, agile procurement teams. It automates repetitive steps, enables centralized controls, and brings in category experts when needed. Even companies with limited internal resources can manage high-value Capex projects with confidence.",
    },
    {
      q: "How does proCPX help reduce Capex costs?",
      a: "Clients using proCPX typically see 15% to 28% savings on Capex through competitive e-bidding, structured negotiations, and data-driven supplier selection. For example, in prefab or storage procurement, our cost benchmarking and vendor leverage lead to superior pricing and significantly faster turnaround times.",
    },
    {
      q: "Is proCPX suitable for multi-location projects or central Capex teams?",
      a: "Yes. proCPX supports centralized planning with decentralized execution. PRs, RFQs, and approvals can be routed as per your organisation structure, be it regional or centralized. Ideal for multi-location retail rollouts, factory expansions, or pan-India infrastructure projects.",
    },
    {
      q: "Which industries benefit most from proCPX?",
      a: "Industries with recurring or project-based capital expenditure benefit most, including Retail chains (store fitouts, kitchen setups), Manufacturing & Industrial (plant & machinery procurement), Logistics & Warehousing (storage systems, prefab sheds), Construction & Real Estate (turnkey interiors, civil works), and Energy & Utilities (equipment, infrastructure assets).",
    },
    {
      q: "Beyond software, what managed services are included with proCPX?",
      a: "Beyond our software platform, we deliver comprehensive managed procurement services including PAN India Vendor On-boarding and Management (leveraging our 6 Lakh+ pre-vetted network) and Category Negotiation Support where senior industry specialists assist in negotiating high-ticket packages to maximize commercial savings.",
    },
  ];

  return (
    <div className="procpx-page">
      {/* HERO SECTION */}
      <section
        style={{
          position: "relative",
          background: "linear-gradient(180deg, #F0F9FF 0%, #FFFFFF 100%)",
          borderBottom: "1px solid #E2E8F0",
          padding: "24px 0 60px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-100px",
            width: "550px",
            height: "550px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, rgba(249, 115, 22, 0.05) 60%, transparent 80%)",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div
            style={{ maxWidth: "980px", margin: "0 auto", textAlign: "center" }}
          >
            {/* Tag Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 16px",
                borderRadius: "999px",
                background: "#E0F2FE",
                border: "1px solid #BAE6FD",
                color: "#0369A1",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.02em",
                marginBottom: "22px",
              }}
            >
              <Sparkles size={15} color="#0284C7" />
              End-to-End Capex Sourcing Platform & Service
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: "clamp(32px, 5vw, 52px)",
                fontWeight: 800,
                lineHeight: 1.15,
                color: "#0C4A6E",
                letterSpacing: "-0.02em",
                marginBottom: "20px",
              }}
            >
              End-to-End Capex Sourcing - <br />
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #0EA5E9 0%, #F97316 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Powered by Technology, Backed by Experts
              </span>
            </h1>

            {/* Value Rotating Highlights */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "12px",
                marginBottom: "24px",
              }}
            >
              <span
                style={{
                  padding: "6px 14px",
                  borderRadius: "8px",
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  color: "#334155",
                  fontSize: "14px",
                  fontWeight: 600,
                  boxShadow: "0 2px 6px rgba(0,0,0,0.03)",
                }}
              >
                🏭 Factory Set-up
              </span>
              <span
                style={{
                  padding: "6px 14px",
                  borderRadius: "8px",
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  color: "#334155",
                  fontSize: "14px",
                  fontWeight: 600,
                  boxShadow: "0 2px 6px rgba(0,0,0,0.03)",
                }}
              >
                🏗️ New Sites & Infrastructure
              </span>
              <span
                style={{
                  padding: "6px 14px",
                  borderRadius: "8px",
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  color: "#334155",
                  fontSize: "14px",
                  fontWeight: 600,
                  boxShadow: "0 2px 6px rgba(0,0,0,0.03)",
                }}
              >
                🏪 Retail Outlets
              </span>
              <span
                style={{
                  padding: "6px 14px",
                  borderRadius: "8px",
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  color: "#334155",
                  fontSize: "14px",
                  fontWeight: 600,
                  boxShadow: "0 2px 6px rgba(0,0,0,0.03)",
                }}
              >
                🏢 Branch Offices
              </span>
            </div>

            {/* Subtitle Description */}
            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.65,
                color: "#475569",
                maxWidth: "820px",
                margin: "0 auto 36px",
                fontWeight: 400,
              }}
            >
              <strong>proCPX</strong> is a state-of-the-art software and service
              designed to streamline your Capex Procurement. With immense Capex
              Procurement experience over the years, we understand the
              challenges you face. By simplifying your tasks, we empower you to
              achieve operational efficiency along with significant cost
              savings.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "16px",
              }}
            >
              <button
                className="btn btn-primary"
                onClick={onOpenDemo}
                style={{
                  padding: "14px 32px",
                  fontSize: "16px",
                  fontWeight: 600,
                  borderRadius: "10px",
                  background:
                    "linear-gradient(135deg, #F97316 0%, #EA580C 100%)",
                  boxShadow: "0 8px 24px rgba(249, 115, 22, 0.35)",
                  border: "none",
                  color: "#FFFFFF",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Schedule proCPX Demo <ArrowUpRight size={18} />
              </button>

              <a
                href="#features"
                className="btn btn-outline"
                style={{
                  padding: "14px 28px",
                  fontSize: "16px",
                  fontWeight: 600,
                  borderRadius: "10px",
                  border: "1.5px solid #0EA5E9",
                  color: "#0284C7",
                  background: "#FFFFFF",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Explore Key Features <ChevronDown size={18} />
              </a>
            </div>
          </div>

          {/* METRIC STRIP */}
          <div
            style={{
              marginTop: "56px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
            }}
          >
            {[
              {
                val: "6 Lakh+",
                lbl: "Verified Suppliers",
                sub: "Turnkey, MEP, Civil & OEMs",
              },
              {
                val: "2,000+",
                lbl: "Registered Buyers",
                sub: "Active enterprise & growth brands",
              },
              {
                val: "< 24 Hrs",
                lbl: "Quote Turnaround",
                sub: "From Technical BOQ to vendor quotes",
              },
              {
                val: "15-28%",
                lbl: "Capex Cost Savings",
                sub: "Via e-bidding & benchmark intelligence",
              },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  background: "#FFFFFF",
                  borderRadius: "16px",
                  padding: "24px 20px",
                  textAlign: "center",
                  boxShadow: "0 4px 16px rgba(15, 23, 42, 0.05)",
                  border: "1px solid #E2E8F0",
                }}
              >
                <div
                  style={{
                    fontSize: "34px",
                    fontWeight: 800,
                    color: "#0284C7",
                    letterSpacing: "-0.02em",
                    marginBottom: "4px",
                  }}
                >
                  {stat.val}
                </div>
                <div
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#0F172A",
                    marginBottom: "4px",
                  }}
                >
                  {stat.lbl}
                </div>
                <div style={{ fontSize: "12px", color: "#64748B" }}>
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: 7 KEY FEATURES OF proCPX */}
      <section
        id="features"
        style={{ padding: "80px 0", background: "#FFFFFF" }}
      >
        <div className="container">
          <div
            style={{
              textAlign: "center",
              maxWidth: "800px",
              margin: "0 auto 50px",
            }}
          >
            <span
              style={{
                fontSize: "13px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#0284C7",
              }}
            >
              Intelligent Capex Workflows
            </span>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 800,
                color: "#0C4A6E",
                marginTop: "8px",
                marginBottom: "16px",
              }}
            >
              Key Features of proCPX
            </h2>
            <p style={{ fontSize: "16px", color: "#64748B", lineHeight: 1.6 }}>
              Purpose-built tools designed to tackle high-ticket capital
              expenditure, exhaustive technical specifications, and distributed
              multi-site projects.
            </p>
          </div>

          {/* Interactive Feature Tabs */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "8px",
              marginBottom: "40px",
            }}
          >
            {keyFeatures.map((feat, idx) => {
              const isActive = activeFeatureTab === idx;
              return (
                <button
                  key={feat.id}
                  onClick={() => setActiveFeatureTab(idx)}
                  style={{
                    padding: "10px 18px",
                    borderRadius: "999px",
                    fontSize: "14px",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    border: isActive
                      ? `1.5px solid ${feat.color}`
                      : "1px solid #E2E8F0",
                    background: isActive ? feat.bg : "#F8FAFC",
                    color: isActive ? feat.color : "#475569",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <feat.icon size={16} />
                  <span>{feat.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Feature Showcase Card */}
          {(() => {
            const current = keyFeatures[activeFeatureTab];
            return (
              <div
                style={{
                  background: "#F8FAFC",
                  borderRadius: "24px",
                  border: `2px solid ${current.color}30`,
                  padding: "40px",
                  boxShadow: "0 12px 36px rgba(15, 23, 42, 0.06)",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: "40px",
                  alignItems: "center",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "6px 14px",
                      borderRadius: "8px",
                      background: current.bg,
                      color: current.color,
                      fontWeight: 700,
                      fontSize: "13px",
                      marginBottom: "16px",
                    }}
                  >
                    Feature {current.num} • {current.subtitle}
                  </div>
                  <h3
                    style={{
                      fontSize: "30px",
                      fontWeight: 800,
                      color: "#0F172A",
                      marginBottom: "16px",
                      lineHeight: 1.2,
                    }}
                  >
                    {current.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "17px",
                      color: "#475569",
                      lineHeight: 1.6,
                      marginBottom: "24px",
                    }}
                  >
                    {current.desc}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    }}
                  >
                    {current.details.map((pt, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                        }}
                      >
                        <div
                          style={{
                            marginTop: "3px",
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            background: current.color,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <Check size={13} color="#FFFFFF" />
                        </div>
                        <span
                          style={{
                            fontSize: "15px",
                            color: "#334155",
                            lineHeight: 1.5,
                          }}
                        >
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: "32px" }}>
                    <button
                      onClick={onOpenDemo}
                      style={{
                        padding: "12px 24px",
                        borderRadius: "10px",
                        background: current.color,
                        color: "#FFFFFF",
                        border: "none",
                        fontWeight: 600,
                        fontSize: "15px",
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        boxShadow: `0 6px 20px ${current.color}40`,
                      }}
                    >
                      Schedule Demo for {current.title} <ArrowRight size={16} />
                    </button>
                  </div>
                </div>

                {/* Right Visual Panel */}
                <div
                  style={{
                    background: "#FFFFFF",
                    borderRadius: "20px",
                    border: "1px solid #E2E8F0",
                    padding: "32px",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      borderBottom: "1px solid #F1F5F9",
                      paddingBottom: "16px",
                      marginBottom: "20px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: 700,
                        color: "#64748B",
                        textTransform: "uppercase",
                      }}
                    >
                      Capex Operations Matrix
                    </span>
                    <span
                      style={{
                        padding: "4px 10px",
                        borderRadius: "6px",
                        background: "#ECFDF5",
                        color: "#059669",
                        fontSize: "12px",
                        fontWeight: 700,
                      }}
                    >
                      Live Telemetry
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                    }}
                  >
                    <div
                      style={{
                        padding: "16px",
                        borderRadius: "12px",
                        background: "#F8FAFC",
                        border: "1px solid #F1F5F9",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "12px",
                          color: "#64748B",
                          marginBottom: "4px",
                        }}
                      >
                        Project Phase
                      </div>
                      <div
                        style={{
                          fontSize: "16px",
                          fontWeight: 700,
                          color: "#0F172A",
                        }}
                      >
                        High-Value Technical Requisition
                      </div>
                      <div
                        style={{
                          fontSize: "13px",
                          color: current.color,
                          fontWeight: 600,
                          marginTop: "2px",
                        }}
                      >
                        BOQ Verification & Rate Benchmarking Active
                      </div>
                    </div>

                    <div
                      style={{
                        padding: "16px",
                        borderRadius: "12px",
                        background: "#F8FAFC",
                        border: "1px solid #F1F5F9",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "12px",
                          color: "#64748B",
                          marginBottom: "4px",
                        }}
                      >
                        Vendor Ecosystem
                      </div>
                      <div
                        style={{
                          fontSize: "16px",
                          fontWeight: 700,
                          color: "#0F172A",
                        }}
                      >
                        6 Lakh+ Pre-Vetted National Network
                      </div>
                      <div
                        style={{
                          fontSize: "13px",
                          color: "#059669",
                          fontWeight: 600,
                          marginTop: "2px",
                        }}
                      >
                        Pan-India Turnkey & Specialized Contractors
                      </div>
                    </div>

                    <div
                      style={{
                        padding: "16px",
                        borderRadius: "12px",
                        background: "#F8FAFC",
                        border: "1px solid #F1F5F9",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "12px",
                          color: "#64748B",
                          marginBottom: "4px",
                        }}
                      >
                        Outcome Metric
                      </div>
                      <div
                        style={{
                          fontSize: "16px",
                          fontWeight: 700,
                          color: "#0F172A",
                        }}
                      >
                        15% to 28% Bottom-Line Savings
                      </div>
                      <div
                        style={{
                          fontSize: "13px",
                          color: "#F97316",
                          fontWeight: 600,
                          marginTop: "2px",
                        }}
                      >
                        Eliminates Cost Escalations & Milestone Delays
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* SECTION: UNIQUE CAPABILITIES */}
      <section
        style={{
          padding: "80px 0",
          background: "#F8FAFC",
          borderTop: "1px solid #E2E8F0",
          borderBottom: "1px solid #E2E8F0",
        }}
      >
        <div className="container">
          <div
            style={{
              textAlign: "center",
              maxWidth: "800px",
              margin: "0 auto 50px",
            }}
          >
            <span
              style={{
                fontSize: "13px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#F97316",
              }}
            >
              Engineered for Complex Spend
            </span>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 800,
                color: "#0C4A6E",
                marginTop: "8px",
                marginBottom: "16px",
              }}
            >
              Unique Capabilities of proCPX
            </h2>
            <p style={{ fontSize: "16px", color: "#64748B", lineHeight: 1.6 }}>
              Unlike generic procurement systems, proCPX addresses the unique
              engineering, contracting, and rate benchmarking challenges
              inherent to Capex sourcing.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px",
            }}
          >
            {uniqueCapabilities.map((cap, idx) => (
              <div
                key={idx}
                style={{
                  background: "#FFFFFF",
                  borderRadius: "20px",
                  padding: "32px 28px",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 4px 16px rgba(15, 23, 42, 0.04)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "20px",
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "12px",
                        background: `${cap.color}15`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <cap.icon size={24} color={cap.color} />
                    </div>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 700,
                        color: cap.color,
                        background: `${cap.color}10`,
                        padding: "4px 10px",
                        borderRadius: "6px",
                      }}
                    >
                      {cap.tag}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#0F172A",
                      marginBottom: "12px",
                      lineHeight: 1.3,
                    }}
                  >
                    {cap.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "14.5px",
                      color: "#64748B",
                      lineHeight: 1.6,
                    }}
                  >
                    {cap.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: BEYOND SOFTWARE (MANAGED SERVICES) */}
      <section
        style={{
          padding: "80px 0",
          background: "linear-gradient(135deg, #074193 0%, #0C4A6E 100%)",
          color: "#FFFFFF",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "48px",
              alignItems: "center",
            }}
          >
            <div>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#BAE6FD",
                }}
              >
                Strategic Extension
              </span>
              <h2
                style={{
                  fontSize: "clamp(30px, 4vw, 44px)",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  marginTop: "10px",
                  marginBottom: "20px",
                  lineHeight: 1.2,
                }}
              >
                Beyond Software... <br />
                <span style={{ color: "#FDBA74" }}>
                  Expert Managed Sourcing
                </span>
              </h2>
              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.65,
                  color: "#E0F2FE",
                  marginBottom: "32px",
                }}
              >
                Beyond our robust software platform, we deliver comprehensive
                procurement services customized to your requirements. We act as
                an agile extension of your procurement and project management
                teams.
              </p>

              <button
                className="btn"
                onClick={onOpenDemo}
                style={{
                  padding: "14px 28px",
                  borderRadius: "10px",
                  background: "#F97316",
                  color: "#FFFFFF",
                  fontWeight: 600,
                  fontSize: "16px",
                  border: "none",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  boxShadow: "0 8px 24px rgba(249, 115, 22, 0.4)",
                }}
              >
                Consult Capex Specialists <ArrowUpRight size={18} />
              </button>
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.18)",
                  borderRadius: "20px",
                  padding: "30px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    marginBottom: "14px",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "10px",
                      background: "#0EA5E9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Users size={22} color="#FFFFFF" />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "20px",
                        fontWeight: 700,
                        color: "#FFFFFF",
                        margin: 0,
                      }}
                    >
                      Vendor On-boarding & Management
                    </h3>
                    <span style={{ fontSize: "13px", color: "#BAE6FD" }}>
                      6 Lakh+ Pre-Qualified Enterprise Network
                    </span>
                  </div>
                </div>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#E0F2FE",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  Leverage our extensive 6 Lakh+ qualified and diversified
                  vendor network and expertise. We handle contractor background
                  verifications, GST statutory checks, machine shop inspections,
                  and past project track records.
                </p>
              </div>

              <div
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.18)",
                  borderRadius: "20px",
                  padding: "30px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    marginBottom: "14px",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "10px",
                      background: "#F97316",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <DollarSign size={22} color="#FFFFFF" />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "20px",
                        fontWeight: 700,
                        color: "#FFFFFF",
                        margin: 0,
                      }}
                    >
                      Negotiation Support
                    </h3>
                    <span style={{ fontSize: "13px", color: "#FED7AA" }}>
                      Category Specialists With Decades of Experience
                    </span>
                  </div>
                </div>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#E0F2FE",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  Benefit from our skilled category experts with years of
                  experience in your specific industry. We assist in complex
                  commercial negotiations, warranty terms, SLA definition, and
                  payment milestone structuring to secure the best deals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: CUSTOMER BENEFITS & SECTOR EXPERIENCE */}
      <section style={{ padding: "80px 0", background: "#FFFFFF" }}>
        <div className="container">
          {/* Top Benefits Grid */}
          <div
            style={{
              textAlign: "center",
              maxWidth: "780px",
              margin: "0 auto 48px",
            }}
          >
            <span
              style={{
                fontSize: "13px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#0284C7",
              }}
            >
              Measurable Business Impact
            </span>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 800,
                color: "#0C4A6E",
                marginTop: "8px",
                marginBottom: "16px",
              }}
            >
              proCPX Customer Benefits
            </h2>
            <p style={{ fontSize: "16px", color: "#64748B" }}>
              Why India's leading enterprises, fast-growing retail chains, and
              industrial houses rely on proCPX.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
              marginBottom: "72px",
            }}
          >
            {customerBenefits.map((ben, idx) => (
              <div
                key={idx}
                style={{
                  background: "#F8FAFC",
                  borderRadius: "16px",
                  padding: "24px",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "#E0F2FE",
                    color: "#0284C7",
                    fontWeight: 700,
                    fontSize: "14px",
                    marginBottom: "14px",
                  }}
                >
                  0{idx + 1}
                </div>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#0F172A",
                    marginBottom: "8px",
                  }}
                >
                  {ben.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#64748B",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {ben.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Proven Sector Experience */}
          <div
            style={{
              background: "linear-gradient(180deg, #F0F9FF 0%, #FFFFFF 100%)",
              borderRadius: "24px",
              border: "1px solid #BAE6FD",
              padding: "48px 36px",
              boxShadow: "0 12px 32px rgba(14, 165, 233, 0.08)",
            }}
          >
            <div
              style={{
                textAlign: "center",
                maxWidth: "720px",
                margin: "0 auto 40px",
              }}
            >
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#0369A1",
                }}
              >
                Cross-Domain Versatility
              </span>
              <h3
                style={{
                  fontSize: "clamp(24px, 3.5vw, 34px)",
                  fontWeight: 800,
                  color: "#0C4A6E",
                  marginTop: "6px",
                }}
              >
                Our Proven Sector Experience
              </h3>
              <p
                style={{ fontSize: "15px", color: "#475569", marginTop: "8px" }}
              >
                Extensive track record deploying Capex procurement engines
                across specialized industry verticals.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "20px",
              }}
            >
              {sectors.map((sec, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "#FFFFFF",
                    borderRadius: "16px",
                    padding: "24px",
                    border: "1px solid #E2E8F0",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
                  }}
                >
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "10px",
                      background: `${sec.color}15`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "14px",
                    }}
                  >
                    <sec.icon size={22} color={sec.color} />
                  </div>
                  <h4
                    style={{
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#0F172A",
                      marginBottom: "8px",
                    }}
                  >
                    {sec.name}
                  </h4>
                  <p
                    style={{
                      fontSize: "13.5px",
                      color: "#64748B",
                      lineHeight: 1.55,
                      margin: 0,
                    }}
                  >
                    {sec.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
      `}</style>
    </div>
  );
}
