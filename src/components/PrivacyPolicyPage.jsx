import React, { useState, useEffect } from "react";
import {
  ShieldCheck,
  FileText,
  Lock,
  ArrowLeft,
  Search,
  ExternalLink,
  Printer,
  Copy,
  Check,
  Mail,
  Phone,
  MapPin,
  Building,
  AlertCircle,
  Clock,
  Eye,
  Server,
  Database,
  Globe,
  Scale,
  Users,
  Coins,
  Cpu,
} from "lucide-react";

export default function PrivacyPolicyPage({ onOpenDemo, onNavigateHome }) {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeSection, setActiveSection] = useState("preamble");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const scrollTo = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const sections = [
    { id: "preamble", label: "Agreement Preamble", category: "terms" },
    { id: "services", label: "1. Services & Definitions", category: "terms" },
    { id: "accounts", label: "2. User Accounts & Security", category: "security" },
    { id: "service-updates", label: "3. Service Evolution & AI", category: "terms" },
    { id: "warranties", label: "4. Disclaimer & Conduct", category: "terms" },
    { id: "data-collection", label: "5. Data Collection & Privacy", category: "privacy" },
    { id: "how-we-use", label: "6. Use & Sharing of Info", category: "privacy" },
    { id: "data-security", label: "7. Data Security & Content", category: "security" },
    { id: "liability", label: "8. Limitation of Liability", category: "legal" },
    { id: "marketplace", label: "9. Bipartite Marketplace Role", category: "terms" },
    { id: "licenses", label: "10. Licenses & Restrictions", category: "legal" },
    { id: "cookies", label: "11. Cookies & Integrations", category: "privacy" },
    { id: "acceptable-use", label: "12. Prohibited Conduct", category: "security" },
    { id: "financial-terms", label: "13. Billing & Tax Terms", category: "financial" },
    { id: "legal-framework", label: "14. Governing Law & Dispute", category: "legal" },
    { id: "grievance", label: "15. Grievance Officer & Notices", category: "legal" },
  ];

  const filteredSections = sections.filter((s) => {
    if (activeTab !== "all" && s.category !== activeTab) return false;
    if (searchQuery.trim() === "") return true;
    return s.label.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="v2-privacy-page">
      {/* Hero Header */}
      <section className="v2-legal-hero">
        <div className="container">
          <div className="v2-legal-breadcrumbs">
            <button
              onClick={onNavigateHome}
              className="v2-legal-back-btn"
              aria-label="Back to home"
            >
              <ArrowLeft size={16} /> Back to Home
            </button>
          </div>

          <div className="v2-legal-hero-content">
            <div className="v2-legal-badge">
              <ShieldCheck size={16} style={{ color: "#0EA5E9" }} />
              <span>Official Enterprise Documentation</span>
            </div>
            <h1 className="v2-legal-title">
              Service Disclaimer Agreement & Privacy Policy
            </h1>
            <p className="v2-legal-subtitle">
              Procucev Enterprise Solutions Pvt Ltd — Governing terms of use,
              autonomous AI services disclaimer (QUA AI & eQua AI), bilateral
              marketplace standards, and comprehensive data privacy governance.
            </p>

            <div className="v2-legal-meta-bar">
              <div className="meta-item">
                <Clock size={15} />
                <span>Last Updated: October 2026</span>
              </div>
              <div className="meta-item">
                <Globe size={15} />
                <span>Jurisdiction: Karnataka / India (IT Act 2000)</span>
              </div>
              <div className="meta-item">
                <Scale size={15} />
                <span>Status: Legally Binding Agreement</span>
              </div>

              <div className="meta-actions">
                <button
                  onClick={handleCopyLink}
                  className="legal-action-btn"
                  title="Copy Link to Clipboard"
                >
                  {copiedLink ? <Check size={15} /> : <Copy size={15} />}
                  <span>{copiedLink ? "Copied" : "Share"}</span>
                </button>
                <button
                  onClick={handlePrint}
                  className="legal-action-btn"
                  title="Print Document"
                >
                  <Printer size={15} />
                  <span>Print / PDF</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <section className="v2-legal-main section">
        <div className="container">
          <div className="v2-legal-layout">
            {/* Left Sidebar: Quick Nav */}
            <aside className="v2-legal-sidebar">
              <div className="sidebar-sticky-box">
                {/* Search */}
                <div className="legal-search-box">
                  <Search size={16} className="search-icon" />
                  <input
                    type="text"
                    placeholder="Search terms or clauses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="legal-search-input"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="clear-search-btn"
                    >
                      ×
                    </button>
                  )}
                </div>

                {/* Filter Pills */}
                <div className="legal-filter-pills">
                  <button
                    className={`filter-pill ${activeTab === "all" ? "active" : ""}`}
                    onClick={() => setActiveTab("all")}
                  >
                    All
                  </button>
                  <button
                    className={`filter-pill ${activeTab === "privacy" ? "active" : ""}`}
                    onClick={() => setActiveTab("privacy")}
                  >
                    Privacy
                  </button>
                  <button
                    className={`filter-pill ${activeTab === "terms" ? "active" : ""}`}
                    onClick={() => setActiveTab("terms")}
                  >
                    Terms
                  </button>
                  <button
                    className={`filter-pill ${activeTab === "security" ? "active" : ""}`}
                    onClick={() => setActiveTab("security")}
                  >
                    Security
                  </button>
                  <button
                    className={`filter-pill ${activeTab === "legal" ? "active" : ""}`}
                    onClick={() => setActiveTab("legal")}
                  >
                    Legal
                  </button>
                </div>

                {/* Table of contents */}
                <div className="legal-toc-title">Table of Contents</div>
                <nav className="legal-toc-nav">
                  {filteredSections.map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => scrollTo(sec.id)}
                      className={`toc-link ${activeSection === sec.id ? "active" : ""}`}
                    >
                      {sec.label}
                    </button>
                  ))}
                </nav>

                {/* Grievance card widget */}
                <div className="sidebar-grievance-card">
                  <div className="grievance-badge">Statutory Officer</div>
                  <h4 className="grievance-title">Grievance & Legal Officer</h4>
                  <p className="grievance-address">
                    Procucev Enterprise Solutions Pvt Ltd
                    <br />
                    302, 1st Floor, Sharada, Above Axis Bank, AECS Layout,
                    Kundalahalli, Bengaluru, Karnataka 560037
                  </p>
                  <a href="mailto:info@procucev.com" className="grievance-mail">
                    <Mail size={13} /> info@procucev.com
                  </a>
                </div>
              </div>
            </aside>

            {/* Right Column: Full Legal Text */}
            <article className="v2-legal-content">
              {/* Preamble Callout Card */}
              <section id="preamble" className="legal-card hero-callout">
                <div className="legal-card-header">
                  <span className="section-pill">Service Disclaimer Agreement</span>
                  <h2>Agreement Preamble & Binding Acceptance</h2>
                </div>
                <div className="legal-card-body">
                  <p className="lead-paragraph">
                    This Service Disclaimer Agreement (<strong>"Agreement"</strong>) is
                    made and entered by you (<strong>User</strong>) and{" "}
                    <strong>Procucev Enterprise Solutions Pvt Ltd</strong> (
                    <strong>"Procucev"</strong>, <strong>"Company"</strong>,{" "}
                    <strong>"we"</strong>, <strong>"us"</strong>, or{" "}
                    <strong>"our"</strong>).
                  </p>
                  <p>
                    If you access, browse and/or choose to use any features of
                    this platform, you are agreeing that you have read,
                    understood, accepted, and are bound by all the terms and
                    conditions (<strong>“Terms”</strong>) of these Terms of Service
                    between you and Procucev. These Terms of Service reflect the
                    way Procucev works, the laws that apply to our company, and
                    certain things we’ve always believed to be true. As a result,
                    these Terms of Service help define Procucev’s relationship with
                    you as you interact with our service.
                  </p>
                  <div className="legal-notice-box">
                    <strong>WHEREAS</strong>, User desires to use the Services.
                    <br />
                    <strong>NOW, THEREFORE</strong>, in consideration of the
                    foregoing premises and the mutual covenants contained herein,
                    the parties agree as set forth below:
                  </div>
                </div>
              </section>

              {/* 1. Services & Definitions */}
              <section id="services" className="legal-card">
                <div className="legal-card-header">
                  <span className="section-pill">Section 1</span>
                  <h2>Services & Definitions</h2>
                </div>
                <div className="legal-card-body">
                  <h3 className="subsection-title">Services Overview</h3>
                  <p>
                    Company provides the Services on an <strong>"as is"</strong>{" "}
                    and <strong>"as available"</strong> basis. Company does not
                    warrant that the Services will be uninterrupted, error-free,
                    or meet any particular requirements. Company reserves the
                    right to modify or discontinue the Services, in whole or in
                    part, at any time, with or without notice.
                  </p>

                  <h3 className="subsection-title">Definitions</h3>
                  <div className="definitions-grid">
                    <div className="def-item">
                      <span className="def-term">Account:</span>
                      <span className="def-desc">
                        Means an account created by a User to access and use the
                        Platform.
                      </span>
                    </div>
                    <div className="def-item">
                      <span className="def-term">Buyer:</span>
                      <span className="def-desc">
                        Means a User who purchases through the Platform.
                      </span>
                    </div>
                    <div className="def-item">
                      <span className="def-term">Seller:</span>
                      <span className="def-desc">
                        Means a User who lists their excess stock/inventory in the
                        Platform.
                      </span>
                    </div>
                    <div className="def-item">
                      <span className="def-term">Content:</span>
                      <span className="def-desc">
                        Means any information, data, text, software, graphics,
                        sounds, photos, videos, or other materials uploaded,
                        posted, or transmitted through the Platform.
                      </span>
                    </div>
                    <div className="def-item">
                      <span className="def-term">Intellectual Property Rights:</span>
                      <span className="def-desc">
                        Means all patents, copyrights, trademarks, trade secrets,
                        and other intellectual property rights.
                      </span>
                    </div>
                    <div className="def-item">
                      <span className="def-term">Services:</span>
                      <span className="def-desc">
                        Means the services provided through the Platform,
                        including facilitating connections between Buyers and
                        Sellers.
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* 2. User Accounts */}
              <section id="accounts" className="legal-card">
                <div className="legal-card-header">
                  <span className="section-pill">Section 2</span>
                  <h2>User Accounts, Credentials & Security</h2>
                </div>
                <div className="legal-card-body">
                  <p>
                    To access certain features of the Platform, you will be
                    required to create an Account. You are responsible for
                    maintaining the confidentiality of your Account credentials
                    and are fully responsible for all activities that occur under
                    your Account. You agree to provide and maintain accurate,
                    complete, and current information about yourself as prompted
                    by the registration process. You may not use another User's
                    Account without their express permission. We reserve the
                    right to suspend or terminate your Account for any reason,
                    including, but not limited to, your violation of these
                    Terms.
                  </p>
                  <p>
                    You must create an account in order to use some of the
                    features offered on the Platform. Use of any personal
                    information you provide to us during the account creation
                    process is governed by our Privacy Policy. You must keep
                    your password confidential and you are solely responsible
                    for maintaining the confidentiality and security of your
                    account, all changes and updates submitted through your
                    account, and all activities that occur in connection with
                    your account.
                  </p>
                  <p>
                    A set of User ID and OTP (One Time Password) / password is
                    unique to a single account created on the Platform. You shall
                    be solely responsible for maintaining the confidentiality and
                    security of your user ID and password and for all activities
                    that occur under User's account. You agree that all
                    activities that occur under your account (including without
                    limitation, posting any company or product information,
                    clicking to accept any Terms &amp; Conditions or rules,
                    subscribing to or making any payment for any services,
                    sending emails using the Platform or other communications)
                    will be deemed to have been authorized by you.
                  </p>
                  <p>
                    You may also be able to register to use the Platform by
                    logging into your account with your credentials from certain
                    third-party sites (e.g., Google). You confirm that you are
                    the owner of any such account and that you are entitled to
                    disclose your login information to us. You authorize us to
                    collect your authentication information, and other
                    information that may be available on or through your account
                    consistent with your applicable settings and instructions.
                  </p>
                  <p>
                    In creating an account, you represent to us that all
                    information provided to us in such process is true,
                    accurate, and correct, and that you will update your
                    information as and when necessary in order to keep it
                    accurate. If you are creating an account, then you represent
                    to us that you are the owner or authorized agent of such
                    business. You may not impersonate someone else, create or
                    use an account for anyone other than yourself, provide an
                    email address other than your own, create multiple accounts
                    except as otherwise authorized by us, or provide or use
                    false information that you are not legally entitled to claim.
                    You acknowledge that any false claiming of a business may
                    cause Procucev or third parties to incur substantial
                    economic damages and losses for which you may be held liable
                    and accountable.
                  </p>
                  <div className="highlight-callout">
                    <AlertCircle size={18} className="callout-icon" />
                    <div>
                      <strong>Account Sharing Strict Prohibition:</strong>
                      <p>
                        You are also responsible for all activities that occur in
                        your account. You agree to notify us immediately of any
                        unauthorized use of your account in order to enable us to
                        take necessary corrective action.{" "}
                        <em>
                          You also agree that you will not allow any third party
                          to use your QUA AI or EQUA AI or GMT or BFS account
                          for any purpose and that you will be liable for such
                          unauthorized access.
                        </em>
                      </p>
                    </div>
                  </div>
                  <p>
                    By creating an account, you agree to receive certain
                    communications in connection with Procucev Platform. For
                    example, you might receive comments from other Users or other
                    users may follow the activity you do on your account. You can
                    opt-out or manage your preferences regarding non-essential
                    communications through account settings.
                  </p>
                  <p>
                    You agree to use the Services only for purposes that are
                    permitted by (a) the Terms &amp; Conditions and (b) any
                    applicable law, regulation or generally accepted practices or
                    guidelines in the relevant jurisdictions.
                  </p>
                  <p>
                    You agree to not to use the data owned by Procucev (as
                    available on the Platform or through any other means like
                    website, API etc.) for any commercial use unless agreed to
                    by/with Procucev in writing.
                  </p>
                  <p>
                    You agree not to access (or attempt to access) any of the
                    services of the Platform by any means other than the
                    interface that is provided by Procucev, unless you have been
                    specifically allowed to do so, by way of a separate
                    agreement with Procucev. You specifically agree not to access
                    (or attempt to access) any part of the Platform through any
                    automated means (including use of scripts or web crawlers).
                  </p>
                  <p>
                    You agree that you will not engage in any activity that
                    interferes with or disrupts the Platform (or the servers and
                    networks which are connected to the Platform). You shall not
                    delete or revise any material or information posted by any
                    other User(s), shall not engage in spamming, including but
                    not limited to any form of emailing, posting or messaging
                    that is unsolicited.
                  </p>
                </div>
              </section>

              {/* 3. Develop, Improve, and Update Services */}
              <section id="service-updates" className="legal-card">
                <div className="legal-card-header">
                  <span className="section-pill">Section 3</span>
                  <h2>Develop, Improve, and Update Services</h2>
                </div>
                <div className="legal-card-body">
                  <p>
                    We’re constantly developing new technologies and features to
                    improve our services. For example, we use artificial
                    intelligence and machine learning to provide you with
                    simultaneous translations and autonomous procurement
                    intelligence. As part of this continual improvement, we
                    sometimes add or remove features and functionalities,
                    increase or decrease limits to our services, and start
                    offering new services or stop offering old ones.
                  </p>
                  <p>
                    If we make material changes that negatively impact your use
                    of our services or if we stop offering a service, we’ll
                    provide you with reasonable advance notice, except in urgent
                    situations such as preventing abuse, responding to legal
                    requirements, or addressing security and operability
                    issues.
                  </p>
                </div>
              </section>

              {/* 4. Disclaimer of Warranties & Respect Others */}
              <section id="warranties" className="legal-card">
                <div className="legal-card-header">
                  <span className="section-pill">Section 4</span>
                  <h2>Disclaimer of Warranties &amp; Code of Conduct</h2>
                </div>
                <div className="legal-card-body">
                  <h3 className="subsection-title">Disclaimer of Warranties</h3>
                  <div className="legal-warning-box">
                    <p>
                      We make no warranties, express or implied, about the
                      services, including the accuracy, completeness,
                      reliability, or suitability. You are solely responsible for
                      evaluating the qualifications, capabilities, and
                      suitability of any Buyer or Seller you choose to work with.
                      We offer no guarantees regarding pricing, payment terms, or
                      delivery timelines.
                    </p>
                  </div>

                  <h3 className="subsection-title">Respect Others (Basic Rules of Conduct)</h3>
                  <p>
                    We want to maintain a respectful environment for everyone,
                    which means you must follow these basic rules of conduct:
                  </p>
                  <ul className="legal-bullet-list">
                    <li>
                      <strong>Comply with applicable laws:</strong> Including
                      export control, sanctions, money laundering, and human
                      trafficking laws.
                    </li>
                    <li>
                      <strong>Respect the rights of others:</strong> Including
                      privacy and intellectual property rights.
                    </li>
                    <li>
                      <strong>Don’t abuse or harm others or yourself:</strong> (or
                      threaten or encourage such abuse or harm) including
                      against children — for example, by misleading, defrauding,
                      illegally impersonating, defaming, bullying, harassing, or
                      stalking others; hosting or publishing any obscene content;
                      or inciting the violation of applicable laws.
                    </li>
                    <li>
                      <strong>Don’t abuse, harm, interfere with, or disrupt the services:</strong>{" "}
                      For example, by accessing or using them in fraudulent or
                      deceptive ways, introducing malware, or spamming, hacking,
                      or bypassing our systems or protective measures.
                    </li>
                    <li>
                      <strong>Respect standard usage restrictions:</strong> When we
                      index the web to bring you search results, we respect
                      standard usage restrictions that website owners specify in
                      their websites’ code, so we require the same when others use
                      our services.
                    </li>
                  </ul>
                  <p>
                    Our service-specific additional terms and policies provide
                    additional details about appropriate conduct that everyone
                    using those services must follow. If you find that others
                    aren’t following these rules, we will take action as
                    outlined in these terms.
                  </p>
                </div>
              </section>

              {/* 5. Data Collection & Privacy */}
              <section id="data-collection" className="legal-card">
                <div className="legal-card-header">
                  <span className="section-pill">Section 5</span>
                  <h2>Information Automatically Collected &amp; Data Sources</h2>
                </div>
                <div className="legal-card-body">
                  <h3 className="subsection-title">
                    Information QUA AI / EQUA AI or OTHER Services Collects
                    Automatically from Your Use
                  </h3>
                  <p>
                    We collect information about the Services that you use and
                    how you use them. QUA AI / EQUA AI / GMT &amp; BFS or Other
                    services does this with your consent where required by
                    applicable law. Certain information is collected
                    automatically through your device, such as your:
                  </p>
                  <div className="telemetry-badges">
                    <span className="badge-chip">IP address</span>
                    <span className="badge-chip">Device identifier</span>
                    <span className="badge-chip">Ad ID</span>
                    <span className="badge-chip">Browser type</span>
                    <span className="badge-chip">OS characteristics</span>
                    <span className="badge-chip">Usage telemetry</span>
                    <span className="badge-chip">Network hardware data</span>
                  </div>
                  <p>
                    This information is collectively termed{" "}
                    <strong>“Usage Information”</strong>. To the extent that Usage
                    Information is Personal Information under applicable law or is
                    combined with Personal Information, we will treat that
                    information as Personal Information under this Privacy Policy.
                  </p>

                  <h3 className="subsection-title">Electronic Communication</h3>
                  <p>
                    When you visit the Platform or send e-mails to us, you are
                    communicating with us electronically. By communicating with
                    us, you consent to receive communication from us
                    electronically. We will communicate with you by e-mail or by
                    posting notices on our Platform. You agree that all
                    agreements, notices, disclosures, and other communications
                    that we provide to you electronically satisfy any legal
                    requirement that such communication be in writing.
                  </p>

                  <h3 className="subsection-title">Data Sharing and Privacy</h3>
                  <p>
                    To connect Sellers with Buyers, we may share the details of
                    your products with buyers on the platform. We strive to
                    maintain data security. However, you acknowledge that data
                    transmission over the internet is inherently insecure, and we
                    cannot guarantee the absolute security of any information
                    transmitted through our services.
                  </p>

                  <h3 className="subsection-title">
                    Personal Information Collected from Other Sources
                  </h3>
                  <p>
                    Our services may (with your consent, where required by
                    applicable law) receive your Personal Information from other
                    sources, such as public databases, joint marketing partners,
                    and social media platforms, and combine that with
                    information QUA AI collects about you. To the extent we
                    combine such third-party sourced information with Personal
                    Information collected directly from you, we will treat the
                    combined information as Personal Information. Subject to
                    applicable law, Procucev is not responsible for the accuracy
                    of the information obtained from third parties or third-party
                    practices.
                  </p>
                </div>
              </section>

              {/* 6. How QUA AI Uses Information Collected */}
              <section id="how-we-use" className="legal-card">
                <div className="legal-card-header">
                  <span className="section-pill">Section 6</span>
                  <h2>How QUA AI Uses Information &amp; Third-Party Disclosures</h2>
                </div>
                <div className="legal-card-body">
                  <p>We use information collected for the following purposes:</p>
                  <ul className="legal-bullet-list">
                    <li>
                      To provide, maintain, protect and improve Procucev’s
                      Services, develop new services, and protect Procucev and
                      QUA AI users;
                    </li>
                    <li>
                      To facilitate, manage, personalize, and improve your online
                      experience;
                    </li>
                    <li>
                      To respond to your inquiries and fulfill your requests,
                      such as to send you newsletters and e-mails;
                    </li>
                    <li>
                      For Procucev’s business purposes, such as data analysis,
                      audits, fraud monitoring and prevention, enhancing,
                      improving, or modifying Procucev’s Services, identifying
                      usage trends, and operating and expanding Procucev’s
                      business activities; and
                    </li>
                    <li>
                      To send you advertisements and communicate with you about
                      products, services, offers, promotions, rewards, and
                      events Procucev believes may be of interest to you.
                    </li>
                  </ul>

                  <h3 className="subsection-title">Disclosures to Service Providers</h3>
                  <p>
                    With your consent (where required by applicable law),
                    Procucev’s agents, Sellers, Buyers, consultants, marketing
                    service providers, and other service providers (collectively{" "}
                    <strong>“Service Providers”</strong>) may receive, or be given
                    access to your information, including Personal Information
                    and Usage Information, in connection with their work on
                    Procucev’s behalf. These Service Providers may be located in
                    countries other than your country of residence. These Service
                    Providers are prohibited from using your Personal Information
                    for any purpose other than to provide this assistance on
                    Procucev’s behalf.
                  </p>
                  <p>
                    Procucev may also (where required by applicable law) share
                    information about you as follows:
                  </p>
                  <div className="legal-disclosure-grid">
                    <div className="disclosure-box">
                      <span className="disc-letter">A</span>
                      <div>
                        <strong>Legal &amp; Regulatory Compliance</strong>
                        <p>
                          (a) to comply with legal process; (b) to respond to
                          requests from public and government authorities,
                          including public and government authorities outside
                          your country of residence to meet national security or
                          law enforcement requirements; (c) to enforce
                          Procucev’s terms and conditions; (d) to protect
                          Procucev’s operations and protect Procucev’s rights,
                          privacy, safety or property, and/or that of you or
                          others; and (e) to allow Procucev to pursue available
                          remedies or limit the damages that Procucev may sustain.
                        </p>
                      </div>
                    </div>
                    <div className="disclosure-box">
                      <span className="disc-letter">B</span>
                      <div>
                        <strong>Internal Business Operations</strong>
                        <p>
                          With Procucev’s affiliates for internal business
                          purposes. For example, processing your orders,
                          fulfilling your requests, providing Buyer service, and
                          improving Procucev’s products and services to better
                          serve you.
                        </p>
                      </div>
                    </div>
                    <div className="disclosure-box">
                      <span className="disc-letter">C</span>
                      <div>
                        <strong>Affiliates &amp; Business Partners</strong>
                        <p>
                          With Procucev’s subsidiaries, affiliates, business
                          partners, and other third parties for their own
                          business purposes. For example, improving their products
                          and services.
                        </p>
                      </div>
                    </div>
                    <div className="disclosure-box">
                      <span className="disc-letter">D</span>
                      <div>
                        <strong>Corporate Transactions &amp; M&amp;A</strong>
                        <p>
                          To a third party in connection with or during
                          negotiations of any reorganization, merger, sale, joint
                          venture, assignment, transfer or other disposition of
                          all or any portion of Procucev’s business, assets or
                          stock (including in connection with any bankruptcy or
                          similar proceedings).
                        </p>
                      </div>
                    </div>
                  </div>
                  <p>
                    When Procucev engages Service Providers and when disclosure
                    of Personal Information to such providers is necessary for
                    the provision of such service, Procucev ensures that such
                    providers will protect Personal Information in a manner
                    consistent with this Privacy Policy and all applicable data
                    privacy laws.
                  </p>

                  <h3 className="subsection-title">Aggregated Information</h3>
                  <p>
                    Without limiting the foregoing, in Procucev’s sole
                    discretion, Procucev may share aggregated information which
                    does not identify you or de-identified information about you
                    with third parties or affiliates for any purpose.
                  </p>
                </div>
              </section>

              {/* 7. Data Security & Content */}
              <section id="data-security" className="legal-card">
                <div className="legal-card-header">
                  <span className="section-pill">Section 7</span>
                  <h2>Data Security, User Content &amp; Communications</h2>
                </div>
                <div className="legal-card-body">
                  <h3 className="subsection-title">Data Security Safeguards</h3>
                  <p>
                    Procucev seeks to use reasonable technical and organizational
                    security measures to help protect your Personal Information
                    from loss, theft, misuse and unauthorized access,
                    disclosure, alteration, or destruction. In addition, Procucev
                    will not keep your Personal Information for longer than
                    necessary for the purposes set out in this Privacy Policy.
                    Unfortunately, no data transmission or storage system is
                    completely secure, and Procucev cannot guarantee the
                    security of your information collected through Procucev’s
                    Services.
                  </p>

                  <h3 className="subsection-title">User Content and Liability</h3>
                  <p>
                    You are responsible for the accuracy and completeness of the
                    information you submit through our services. You agree to
                    hold us harmless from any and all claims, liabilities,
                    damages, losses, and expenses arising from your use of the
                    services, including but not limited to, reliance on quotes,
                    transactions with Sellers and Buyers, or any disputes
                    arising from such transactions.
                  </p>
                  <p>
                    You retain all ownership rights to the Content you upload,
                    submit, or display on the Platform. By submitting Content,
                    you grant Procucev a non-exclusive, royalty-free, worldwide
                    license to use, reproduce, modify, publish, and distribute
                    such Content solely for the purpose of providing and
                    operating the Platform. You are solely responsible for the
                    accuracy, completeness, legality, and reliability of all
                    Content you submit. You agree not to submit Content that is
                    unlawful, harmful, threatening, abusive, harassing,
                    defamatory, obscene, or racially or ethnically offensive.
                  </p>

                  <h3 className="subsection-title">Service-Related Communications &amp; Feedback</h3>
                  <p>
                    To provide you with our services, we sometimes send you
                    service announcements and other information. If you choose
                    to give us feedback, such as suggestions to improve our
                    services, we may act on your feedback without obligation to
                    you.
                  </p>

                  <h3 className="subsection-title">Permission to Use Your Content</h3>
                  <p>
                    Some of our services are designed to let you upload, submit,
                    store, send, receive, or share your content. You have no
                    obligation to provide any content to our services and you’re
                    free to choose the content that you want to provide. If you
                    choose to upload or share content, please make sure you have
                    the necessary rights to do so and that the content is
                    lawful.
                  </p>
                  <p>
                    Our services include software that’s offered under
                    open-source license terms that we make available to you.
                    Sometimes there are provisions in the open-source license
                    that explicitly override parts of these terms, so please be
                    sure to read those licenses. You may not copy, modify,
                    distribute, sell, or lease any part of our services or
                    software.
                  </p>
                </div>
              </section>

              {/* 8. Limitation of Liability */}
              <section id="liability" className="legal-card">
                <div className="legal-card-header">
                  <span className="section-pill">Section 8</span>
                  <h2>Limitation of Liability, User Conduct &amp; Indemnity</h2>
                </div>
                <div className="legal-card-body">
                  <h3 className="subsection-title">Limitation of Liability</h3>
                  <p>
                    We will not be held liable for any damages arising out of or
                    related to the use of our services, including, but not
                    limited to, failed negotiations, payment issues, delayed
                    deliveries, or unsatisfactory work quality.
                  </p>

                  <h3 className="subsection-title">User Conduct</h3>
                  <p>
                    User agrees to use the Services in accordance with all
                    applicable laws and regulations. User shall not use the
                    Services for any illegal or unauthorized purpose.
                  </p>

                  <h3 className="subsection-title">Payment Responsibilities</h3>
                  <p>
                    We are not responsible for facilitating or guaranteeing
                    payment between you and the enterprise. Payment terms are
                    solely between you and the enterprise for the purchase. The
                    other payment related to Procucev and Seller will be as
                    mentioned during our proposal and agreement.
                  </p>

                  <h3 className="subsection-title">Client Relationship &amp; Indemnity</h3>
                  <p>
                    We are not a party to any contract or agreement formed
                    between you and the enterprise. Procucev is neither involved
                    in nor is it a party to any transaction between any parties
                    who use the Service. Procucev’s principal role is merely to
                    connect Buyers with sellers in the Network using information
                    provided by Buyers, You and other sellers. Procucev does not
                    control and has no responsibility for the behavior of or the
                    information provided by Buyers, You and other sellers.
                  </p>
                  <p>
                    You agree and acknowledge that Procucev has no control over
                    its Buyer’s decision to conduct or complete a transaction
                    with You or share Your information with a third party
                    through the Service.
                  </p>
                  <div className="highlight-callout">
                    <Scale size={18} className="callout-icon" />
                    <div>
                      <strong>Indemnity Obligation:</strong>
                      <p>
                        You shall defend, indemnify and hold Procucev harmless
                        against any expense, liability, loss, damage or costs
                        (including reasonable attorneys’ fees) incurred in
                        connection with claims, demands, suits, or proceedings
                        (<strong>"Claims"</strong>) made or brought against
                        Procucev by a third party arising from or relating to:
                      </p>
                      <ul style={{ margin: "8px 0", paddingLeft: "20px" }}>
                        <li>(i) a dispute between You and Your Buyers arising from Your use of the Service to exchange information or conduct business with such Buyer;</li>
                        <li>(ii) Your Information;</li>
                        <li>(iii) Your violation or breach of these Terms of Use; and/or</li>
                        <li>(iv) Your use of any products available on the Early Payment Platform.</li>
                      </ul>
                      <p style={{ marginTop: "8px", fontSize: "0.85rem" }}>
                        Your indemnity obligations are subject to the following:
                        (x) Procucev shall promptly notify You of any Claims; (y)
                        You shall have sole control of the defense and all
                        related settlement negotiations with respect to any Claims
                        (provided that You may not settle any Claim that requires
                        Procucev to admit any civil or criminal liability or incur
                        any financial obligation without Procucev’s prior written
                        consent, which consent shall not be unreasonably
                        withheld); and (z) Procucev shall reasonably cooperate to
                        the extent necessary at Your cost in such defense and
                        settlement.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 9. Marketplace Operations */}
              <section id="marketplace" className="legal-card">
                <div className="legal-card-header">
                  <span className="section-pill">Section 9</span>
                  <h2>Bipartite Marketplace Role &amp; Platform Operations</h2>
                </div>
                <div className="legal-card-body">
                  <p>
                    All commercial/contractual terms with respect to the
                    products and services are offered by and agreed to between the
                    Buyers and Sellers alone. The commercial/contractual terms
                    include without limitation price, taxes, shipping costs,
                    payment methods, payment terms, date, period and mode of
                    delivery, warranties related to products and services and
                    after sales services related to products and services.{" "}
                    <strong>
                      Procucev is just a facilitator or a marketplace and does not
                      have any control or does not determine or in any way involve
                      itself in the offering or acceptance of such
                      commercial/contractual terms between the Buyers and the
                      Sellers.
                    </strong>
                  </p>
                  <p>
                    Procucev may, however, offer support services to the Sellers
                    with respect to technology for the Platform, payment gateway
                    integration, online promotions, and other services, pursuant
                    to the contracts executed by it with the Sellers.
                  </p>
                  <p>
                    Procucev shall not be responsible for managing the Buyer
                    service; however, it shall only provide for the direct
                    contact details and/or Buyer service details of the Sellers
                    on the Platform. However, in case of contingency where the
                    Buyer is unable to reach out to the Seller, Procucev shall
                    provide for such emergency Buyer service through our mediums
                    like email or phone call to bridge the gap between the Buyer
                    and the Seller during its official working hours.
                  </p>
                  <p>
                    You are advised to independently verify the bona fides of
                    any Seller or Buyer that you choose to deal with on the
                    Platform and use your best judgment in that behalf. All Seller
                    or Buyer offers and third-party offers are subject to
                    respective party terms and conditions. Procucev takes no
                    responsibility for such offers.
                  </p>
                  <p>
                    Procucev neither makes any representation or warranty as to
                    specifics (such as quality, value etc.) of the products or
                    services proposed to be sold or offered to be sold or
                    purchased on the Platform nor does implicitly or explicitly
                    support or endorse the sale or purchase of any products or
                    services on the Platform. Procucev accepts no liability for
                    any errors or omissions, whether on behalf of itself or third
                    parties.
                  </p>
                  <p>
                    Procucev is not responsible for any non-performance or breach
                    of any contract entered into between Buyers and Sellers on
                    the Platform. Procucev cannot and does not guarantee that
                    the concerned Buyers and/or Sellers will perform any
                    transaction concluded on the Platform. Procucev is not
                    responsible for unsatisfactory or non-performance of services
                    or damages or delays as a result of products which are out of
                    stock, unavailable or back ordered.
                  </p>
                  <div className="highlight-callout">
                    <Database size={18} className="callout-icon" />
                    <div>
                      <strong>No Title or Possession Over Products:</strong>
                      <p>
                        Procucev is operating an online marketplace and assumes
                        the role of facilitator and does not at any point of time
                        during any transaction between the Buyer and the Seller
                        on the Platform come into or take possession of any of
                        the products or services offered by the Seller. At no time
                        shall Procucev hold any right, title or interest over the
                        products nor shall Procucev have any obligations or
                        liabilities in respect of such contract entered into
                        between the Buyer and the Seller.
                      </p>
                    </div>
                  </div>
                  <p>
                    Procucev is only providing a platform for communication and
                    it is agreed that the contract for sale of any of the
                    products or services shall be a strictly bipartite contract
                    between the Buyer and the Seller. The Seller shall be solely
                    liable for redressing Buyer complaints. In the event you
                    raise any complaint on any Seller accessed using our
                    Platform, we shall assist you to the best of our abilities
                    by providing relevant information to you, such as details of
                    the Seller and the specific order to which the complaint
                    relates, to enable satisfactory resolution of the complaint.
                    Please note that there could be risks in dealing with
                    underage persons or people acting under false pretense.
                  </p>
                  <p>
                    You agree not to use any device, software or routine to
                    interfere or attempt to interfere with the proper working of
                    the Platform or any transaction being conducted on the
                    Platform, or with any other person's use of the Platform.
                  </p>
                  <p>
                    You may not forge headers or otherwise manipulate identifiers
                    in order to disguise the origin of any message or
                    transmittal you send to us on or through the Platform or any
                    service offered on or through the Platform. You may not
                    pretend that you are, or that you represent, someone else,
                    or impersonate any other individual or entity.
                  </p>
                  <p>
                    You shall at all times ensure full compliance with the
                    applicable provisions, as amended from time to time, of:
                  </p>
                  <ul className="legal-bullet-list">
                    <li>(a) the Information Technology Act, 2000 and the rules thereunder;</li>
                    <li>(b) all applicable domestic laws, rules and regulations (including the provisions of any applicable exchange control laws or regulations in force); and</li>
                    <li>(c) international laws, foreign exchange laws, statutes, ordinances and regulations (including, but not limited to sales tax/VAT, GST, income tax, octroi, service tax, central excise, custom duty, local levies) regarding your use of our service and your listing, purchase, solicitation of offers to purchase, and sale of products or services.</li>
                  </ul>
                  <p>
                    You shall not engage in any transaction in an item or
                    service, which is prohibited by the provisions of any
                    applicable law including exchange control laws or regulations
                    for the time being in force.
                  </p>
                  <p>
                    In order to allow us to use the information supplied by you,
                    without violating your rights or any laws, you agree to
                    grant us a non-exclusive, worldwide, perpetual,
                    irrevocable, royalty-free, sub-licensable (through multiple
                    tiers) right to exercise the copyright, publicity, database
                    rights or any other rights you have in your information, in
                    any media now known or not currently known, with respect to
                    your information. We will only use your information in
                    accordance with these Terms &amp; Conditions and Privacy
                    Policy applicable to use of the Platform.
                  </p>
                  <p>
                    From time to time, you shall be responsible for providing
                    information relating to the products or services proposed to
                    be sold by you. In this connection, you undertake that all
                    such information shall be accurate in all respects. You shall
                    not exaggerate or overemphasize the attributes of such
                    products or services so as to mislead other users in any
                    manner.
                  </p>
                  <p>
                    We reserve the right, but have no obligation, to monitor the
                    materials posted on the Platform. Procucev shall have the
                    right to remove or edit any content that in its sole
                    discretion violates, or is alleged to violate, any applicable
                    law or either the spirit or letter of these Terms &amp;
                    Conditions. Notwithstanding this right,{" "}
                    <strong>
                      YOU REMAIN SOLELY RESPONSIBLE FOR THE CONTENT OF THE
                      MATERIALS YOU POST ON THE PLATFORM AND IN YOUR PRIVATE
                      MESSAGES.
                    </strong>
                  </p>
                  <p>
                    Procucev shall have all the rights to take necessary action
                    and claim damages that may occur due to your
                    involvement/participation in any way on your own or through
                    groups of people, intentionally or unintentionally in DoS/DDoS
                    (Distributed Denial of Services), hacking, pen testing
                    attempts without our prior consent or a mutual legal
                    agreement.
                  </p>
                </div>
              </section>

              {/* 10. Licenses */}
              <section id="licenses" className="legal-card">
                <div className="legal-card-header">
                  <span className="section-pill">Section 10</span>
                  <h2>Platform Licenses, Software Extensions &amp; Feedback</h2>
                </div>
                <div className="legal-card-body">
                  <p>
                    Procucev grants to you a limited, revocable,
                    non-transferable, non-sub-licensable and non-exclusive
                    license to use the Platform on payment of fees (as per the
                    agreement signed between you and Procucev), pursuant to which
                    you are allowed to access the Platform for the sale and
                    purchase of goods.
                  </p>
                  <p>
                    You shall at all times during the period of use of the
                    platform avail the services only from Procucev and such use
                    of the services shall be as per the terms and conditions set
                    out in the License Agreement signed by you.
                  </p>
                  <p>
                    The software extensions made available through Procucev are
                    licensed, not sold, to you. The extensions have been
                    developed, and are licensed to you, by Procucev. Your license
                    to each Procucev extension is subject to the License
                    Agreement entered into between you and Procucev. Procucev
                    reserves all rights in and to the extension not expressly
                    granted to you.
                  </p>
                  <h3 className="subsection-title">License Restrictions</h3>
                  <p>
                    You may not make copies, translations, or modifications of or
                    to the Platform. You may not alter, obscure, or remove the
                    copyright notice on any copy of the Platform. You may not
                    assign, sell, distribute, lease, rent, sublicense, or
                    transfer the Platform, nor may you use the Platform in a
                    manner that disrupts the operation of any associated services
                    or otherwise in a manner that was not intended (for example,
                    by engaging in any unlawful activity through the Platform).
                  </p>
                  <p>
                    You are responsible for properly configuring and using the
                    Platform and taking your own steps to maintain appropriate
                    security, protection, and backup of your content, which may
                    include the use of encryption technology to protect your
                    content from unauthorized access and routine archiving of
                    your content.
                  </p>
                  <h3 className="subsection-title">Feedback &amp; Suggestions License</h3>
                  <p>
                    We may use your content in a number of different ways,
                    including publicly displaying it, reformatting it,
                    incorporating it into advertisements and other works,
                    creating derivative works from it, promoting it, and
                    distributing it. As such, you hereby grant us the following
                    licenses:
                  </p>
                  <ul className="legal-bullet-list">
                    <li>
                      A non-exclusive, worldwide, perpetual, irrevocable, fully
                      paid-up, royalty-free license, with the right to sublicense
                      through multiple levels of sublicenses, under your
                      intellectual property rights, to make, use, have made,
                      sell, offer to sell, copy, reproduce, distribute, publicly
                      perform, publicly display, digitally transmit, modify,
                      create derivative works of, import, and otherwise exploit,
                      any suggestions or feedback you provide to us that result in
                      modifications, improvements or enhancements to the
                      Platform.
                    </li>
                    <li>
                      A royalty-free, worldwide, transferable, sublicensable,
                      irrevocable, perpetual license to use or incorporate into
                      the Platform any suggestions, enhancement requests,
                      recommendations or other feedback provided by you relating
                      to the operation of the Platform.
                    </li>
                  </ul>
                  <div className="legal-warning-box">
                    <strong>Commission Disqualification:</strong> Offering
                    commissions or incentives to us or our representatives in
                    exchange for increased visibility or preferential treatment
                    on the platform will result in your immediate
                    disqualification and account termination.
                  </div>
                </div>
              </section>

              {/* 11. Cookies */}
              <section id="cookies" className="legal-card">
                <div className="legal-card-header">
                  <span className="section-pill">Section 11</span>
                  <h2>Cookies Policy &amp; Integration Service Use</h2>
                </div>
                <div className="legal-card-body">
                  <h3 className="subsection-title">Cookie Usage Details</h3>
                  <p>
                    If you use our Service or leave a comment on our site you may
                    opt-in to saving your name, email address and website in
                    cookies. These are for your convenience so that you do not
                    have to fill in your details again when you leave another
                    comment. These cookies will last for one year.
                  </p>
                  <p>
                    If you visit our login page, we will set a temporary cookie
                    to determine if your browser accepts cookies. This cookie
                    contains no personal data and is discarded when you close your
                    browser.
                  </p>
                  <p>
                    When you log in, we will also set up several cookies to save
                    your login information and your screen display choices:
                  </p>
                  <div className="cookies-table-wrap">
                    <table className="cookies-table">
                      <thead>
                        <tr>
                          <th>Cookie Type</th>
                          <th>Purpose</th>
                          <th>Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><strong>Temporary Session</strong></td>
                          <td>Verifies browser cookie acceptance</td>
                          <td>Session (Discarded on close)</td>
                        </tr>
                        <tr>
                          <td><strong>Login Credentials</strong></td>
                          <td>Saves authenticated session state</td>
                          <td>2 Days (2 Weeks if 'Remember Me' selected)</td>
                        </tr>
                        <tr>
                          <td><strong>Screen Options</strong></td>
                          <td>Preserves user display &amp; dashboard preferences</td>
                          <td>1 Year</td>
                        </tr>
                        <tr>
                          <td><strong>Comment &amp; Form Opt-in</strong></td>
                          <td>Remembers user details for form convenience</td>
                          <td>1 Year</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p style={{ marginTop: "12px" }}>
                    If you log out of your account, the login cookies will be
                    automatically removed.
                  </p>

                  <h3 className="subsection-title">Integration Service Use</h3>
                  <p>
                    We leverage third-parties as part of our Services. You have
                    already established a connection with these third-parties and
                    as such, their Privacy Policy applies. These include{" "}
                    <strong>Google Analytics</strong> and{" "}
                    <strong>Google Search Console</strong>. We will use this
                    information to gather statistics and other information to
                    utilize the features of our Service. We obtain this
                    information through the use of APIs and data connections
                    between our Service and third-party providers. We do not
                    control, and are not responsible for, other uses of your
                    personal information by third-party data providers.
                  </p>
                </div>
              </section>

              {/* 12. General Terms of Use & Prohibited Conduct */}
              <section id="acceptable-use" className="legal-card">
                <div className="legal-card-header">
                  <span className="section-pill">Section 12</span>
                  <h2>Platform Acceptable Use &amp; Prohibited Activities</h2>
                </div>
                <div className="legal-card-body">
                  <p>
                    You agree, undertake, and confirm that your use of the
                    Platform shall be strictly governed by the following binding
                    principles. You shall not host, display, upload, download,
                    modify, publish, transmit, update, or share any information
                    which:
                  </p>
                  <div className="prohibited-grid">
                    <div className="prohibited-item">
                      <span className="p-num">1</span>
                      <span>Belongs to another person and which you do not have any right to;</span>
                    </div>
                    <div className="prohibited-item">
                      <span className="p-num">2</span>
                      <span>Is grossly harmful, harassing, blasphemous, defamatory, obscene, pornographic, paedophilic, libellous, slanderous, criminally inciting or invasive of another's privacy, hateful, racially/ethnically objectionable, disparaging, relating to money laundering/gambling, or unlawful under the Indecent Representation of Women (Prohibition) Act, 1986;</span>
                    </div>
                    <div className="prohibited-item">
                      <span className="p-num">3</span>
                      <span>Is misleading or misrepresentative in any way;</span>
                    </div>
                    <div className="prohibited-item">
                      <span className="p-num">4</span>
                      <span>Is patently offensive to the online community (sexually explicit, racism, bigotry, hatred, or physical harm);</span>
                    </div>
                    <div className="prohibited-item">
                      <span className="p-num">5</span>
                      <span>Harasses or advocates harassment of another person;</span>
                    </div>
                    <div className="prohibited-item">
                      <span className="p-num">6</span>
                      <span>Involves transmission of 'junk mail', 'chain letters', or unsolicited mass mailing or spamming;</span>
                    </div>
                    <div className="prohibited-item">
                      <span className="p-num">7</span>
                      <span>Promotes illegal activities or abusive, threatening, or libellous conduct;</span>
                    </div>
                    <div className="prohibited-item">
                      <span className="p-num">8</span>
                      <span>Infringes third party rights including IP, privacy (unauthorized phone/address/email disclosure), or publicity;</span>
                    </div>
                    <div className="prohibited-item">
                      <span className="p-num">9</span>
                      <span>Promotes pirated computer programs, software cracks, circumvention of copy-protection, or pirated media files;</span>
                    </div>
                    <div className="prohibited-item">
                      <span className="p-num">10</span>
                      <span>Contains hidden pages, password-only access pages, or non-linked images;</span>
                    </div>
                    <div className="prohibited-item">
                      <span className="p-num">11</span>
                      <span>Exploits people in a sexual, violent, or inappropriate manner or solicits personal information;</span>
                    </div>
                    <div className="prohibited-item">
                      <span className="p-num">12</span>
                      <span>Provides instructional information about illegal activities (weapons, computer viruses, privacy invasion);</span>
                    </div>
                    <div className="prohibited-item">
                      <span className="p-num">13</span>
                      <span>Contains photos, videos, or images of another person without consent;</span>
                    </div>
                    <div className="prohibited-item">
                      <span className="p-num">14</span>
                      <span>Attempts unauthorized access to platform areas, profiles, accounts, bulletins, or solicits passwords;</span>
                    </div>
                    <div className="prohibited-item">
                      <span className="p-num">15</span>
                      <span>Engages in commercial activities/sales without Procucev Legal Department's prior written consent (contests, pyramid schemes);</span>
                    </div>
                    <div className="prohibited-item">
                      <span className="p-num">16</span>
                      <span>Solicits gambling or illegal betting activities;</span>
                    </div>
                    <div className="prohibited-item">
                      <span className="p-num">17</span>
                      <span>Interferes with another user's enjoyment of the Platform;</span>
                    </div>
                    <div className="prohibited-item">
                      <span className="p-num">18</span>
                      <span>Harms minors in any way;</span>
                    </div>
                    <div className="prohibited-item">
                      <span className="p-num">19</span>
                      <span>Infringes patent, trademark, copyright, trade secrets, or involves counterfeit or stolen products;</span>
                    </div>
                    <div className="prohibited-item">
                      <span className="p-num">20</span>
                      <span>Violates any law currently in force;</span>
                    </div>
                    <div className="prohibited-item">
                      <span className="p-num">21</span>
                      <span>Contains software viruses, trojans, worms, time bombs, cancelbots, easter eggs, or destructive routines;</span>
                    </div>
                    <div className="prohibited-item">
                      <span className="p-num">22</span>
                      <span>Threatens the unity, integrity, defense, security or sovereignty of India, friendly relations with foreign states, or public order;</span>
                    </div>
                    <div className="prohibited-item">
                      <span className="p-num">23</span>
                      <span>Trades in items prohibited or restricted under any applicable law, rule, or exchange control regulation;</span>
                    </div>
                    <div className="prohibited-item">
                      <span className="p-num">24</span>
                      <span>Uses 'deep-link', 'page-scrape', 'robot', 'spider' or automatic tools to monitor, acquire, or copy content;</span>
                    </div>
                    <div className="prohibited-item">
                      <span className="p-num">25</span>
                      <span>Probes, scans, or tests platform vulnerabilities or breaches security/authentication;</span>
                    </div>
                    <div className="prohibited-item">
                      <span className="p-num">26</span>
                      <span>Reverse look-ups, traces, or seeks to trace information of any other platform user or visitor;</span>
                    </div>
                    <div className="prohibited-item">
                      <span className="p-num">27</span>
                      <span>Makes negative, denigrating, or defamatory statements about Procucev, QUA AI, or Sellers on the platform;</span>
                    </div>
                    <div className="prohibited-item">
                      <span className="p-num">28</span>
                      <span>Imposes an unreasonable or disproportionately large load on the infrastructure of Procucev systems.</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* 13. Financial Terms */}
              <section id="financial-terms" className="legal-card">
                <div className="legal-card-header">
                  <span className="section-pill">Section 13</span>
                  <h2>Financial, Billing &amp; Tax Terms</h2>
                </div>
                <div className="legal-card-body">
                  <p>
                    All payments for use and license of the Platform must be
                    received by us prior to using the Platform for sale or
                    purchase of goods. We accept payment by net-banking, credit
                    card, debit card, cash card, and mobile payments.
                  </p>
                  <p>
                    The Platform allows you to place and receive orders for sale
                    or purchase of goods, subject to the Terms &amp; Conditions
                    set out herein. Procucev neither represents the Buyer nor the
                    Seller in the specific transactions between them. Procucev
                    does not own, sell, resell on its own and/or does not control
                    the Seller or the related services provided in connection
                    thereof. You understand that any order that you place shall be
                    subject to the Terms &amp; Conditions including, but not
                    limited to, product availability.
                  </p>
                  <p>
                    Procucev is not responsible for the quality, safety,
                    lawfulness, or availability of the products or services
                    offered on the Platform or the ability of the Sellers to
                    complete a sale or the ability of Buyers to complete a
                    purchase.
                  </p>

                  <h3 className="subsection-title">Tax Invoice Issuance &amp; Bilateral Liability</h3>
                  <div className="highlight-callout">
                    <Coins size={18} className="callout-icon" />
                    <div>
                      <strong>Seller Invoicing Sole Responsibility:</strong>
                      <p>
                        The final tax bill and/or Invoice will be issued by the
                        Seller to the Buyer along with the order and Procucev
                        shall have no role to play in this transaction, other than
                        the role of the facilitator or a marketplace. All
                        applicable taxes and levies, the rates thereof and the
                        manner of applicability of such taxes on the bill are
                        being charged and determined by the Seller. Procucev holds
                        no responsibility for the legal correctness/validity of the
                        levy of such taxes. The sole responsibility for any legal
                        issue arising on the taxes shall reside with the Seller.
                      </p>
                    </div>
                  </div>
                  <p>
                    The prices reflected on the Platform are determined solely by
                    the Seller and are listed based on Seller's information. Very
                    rarely, prices may change at the time of placing order due to
                    Seller changing the listed price without due intimation and
                    such change of price are at the sole discretion of the Seller
                    attributing to various factors beyond control.
                  </p>
                  <p>
                    The Seller shall be solely responsible for any
                    warranty/guarantee of the products sold to the Buyers and in
                    no event shall be the responsibility of Procucev.
                  </p>
                  <p>
                    The transaction is bilateral between the Seller and Buyer
                    and therefore, Procucev is not liable to charge or deposit
                    any taxes applicable on such transaction.
                  </p>
                  <p>
                    <strong>Pricing Disclaimer:</strong> Prices on any product(s)
                    reflected on the Platform may, due to technical issues,
                    typographical errors, or product information supplied by the
                    Seller, be incorrectly reflected, and in such event, the
                    Seller may cancel your order(s).
                  </p>
                </div>
              </section>

              {/* 14. Legal Framework & Governance */}
              <section id="legal-framework" className="legal-card">
                <div className="legal-card-header">
                  <span className="section-pill">Section 14</span>
                  <h2>Disclaimers, Governance &amp; Legal Framework</h2>
                </div>
                <div className="legal-card-body">
                  <h3 className="subsection-title">General Platform Disclaimer</h3>
                  <p>
                    The content on the Platform is for informational purposes
                    only. Procucev disclaims any liability for any information
                    that may have become outdated since the last time the
                    particular piece of information was updated. Procucev
                    reserves the right to make changes and corrections to any part
                    of the content on the Platform at any time without prior
                    notice. Procucev does not guarantee quality of the Goods, the
                    prices listed in Platform or the availability of products
                    posted on the Platform.
                  </p>
                  <p>
                    Unless stated otherwise, all pictures and information
                    contained on the Platform are believed to be owned by or
                    licensed to Procucev. Please email a takedown request to the
                    webmaster if you are the copyright owner of any content on
                    the Platform and you think the use of the above material
                    violates your copyright in any way. Please indicate the exact
                    URL of the webpage in your request. All images shown here
                    have been digitized by Procucev. No other party is authorized
                    to reproduce or republish these digital versions in any format
                    whatsoever without the prior written permission of Procucev.
                  </p>

                  <h3 className="subsection-title">Seller Certifications</h3>
                  <p>
                    Any certification, licenses or permits ('Certification') or
                    information in regard to such Certification displayed on the
                    Seller's listing page is for informational purposes only,
                    provided to Procucev by the Seller on an 'as available' basis.
                    Procucev does not make warranties about the validity,
                    authenticity, reliability, or accuracy of such
                    Certifications. Reliance upon Certifications shall be
                    strictly at the user's own risk.
                  </p>

                  <h3 className="subsection-title">No Endorsement</h3>
                  <p>
                    We do not endorse any Vendor. In addition, although these
                    Terms &amp; Conditions require you to provide accurate
                    information, we do not attempt to confirm, and do not
                    confirm, purported identities. We will not be responsible
                    for any damage or harm resulting from your interactions with
                    other Users. Legal remedies sought will be limited to a claim
                    against the particular User or third parties who caused harm.
                  </p>

                  <h3 className="subsection-title">Force Majeure</h3>
                  <p>
                    Procucev is not liable or responsible for failure or delay in
                    the performance of any of these Terms &amp; Conditions and/or
                    individual contracts, if due to reasons beyond reasonable
                    control, including acts of God, public enemy, war,
                    rebellion, internet hacking, internet outages, telecom
                    service provider issues, power outages, server issues, and
                    riots (collectively <strong>'Force Majeure'</strong>).
                  </p>

                  <h3 className="subsection-title">Term, Termination &amp; Governing Law</h3>
                  <p>
                    This Agreement shall commence on the Effective Date and shall
                    continue until terminated by either party. Company may
                    terminate this Agreement at any time, with or without notice.
                    User may terminate this Agreement by ceasing to use the
                    Services.
                  </p>
                  <p>
                    <strong>Entire Agreement:</strong> This Agreement constitutes
                    the entire agreement between the parties with respect to the
                    subject matter hereof and supersedes all prior or
                    contemporaneous communications, representations, or
                    agreements, whether oral or written.
                  </p>
                  <p>
                    <strong>Governing Law:</strong> This Agreement shall be
                    governed by and construed in accordance with the laws of the
                    State of Karnataka without regard to its conflict of laws
                    principles. The parties agree to submit to the exclusive
                    jurisdiction of the courts of New Delhi and Bengaluru,
                    India.
                  </p>
                  <p>
                    <strong>Severability &amp; Waiver:</strong> If any provision
                    is held invalid or unenforceable, such provision shall be
                    struck and the remaining provisions shall remain in full force
                    and effect. No waiver of any breach shall be deemed a waiver
                    of any subsequent breach.
                  </p>
                  <p>
                    <strong>Modifications:</strong> We reserve the right to
                    modify these terms and conditions at any time by posting the
                    revised agreement on our website. Your continued use of our
                    services constitutes acceptance of the changes.
                  </p>
                </div>
              </section>

              {/* 15. Grievance Officer & Corporate Notices */}
              <section id="grievance" className="legal-card statutory-card">
                <div className="legal-card-header">
                  <span className="section-pill statutory-pill">
                    Statutory Compliance
                  </span>
                  <h2>Corporate Notices &amp; Grievance Officer</h2>
                </div>
                <div className="legal-card-body">
                  <p>
                    In accordance with the <strong>Information Technology Act, 2000</strong>{" "}
                    and rules made thereunder, the official contact details for
                    statutory notices and the Grievance Officer are set forth
                    below:
                  </p>

                  <div className="company-official-box">
                    <div className="cob-header">
                      <Building size={20} style={{ color: "#0EA5E9" }} />
                      <div>
                        <h4 className="cob-name">
                          Procucev Enterprise Solutions Pvt Ltd
                        </h4>
                        <span className="cob-reg">
                          Registered Private Limited Entity · Karnataka, India
                        </span>
                      </div>
                    </div>

                    <div className="cob-details-grid">
                      <div className="cob-col">
                        <span className="cob-label">Corporate Address</span>
                        <div className="cob-val-row">
                          <MapPin size={16} style={{ color: "#F97316", flexShrink: 0 }} />
                          <span>
                            302, First Floor, Sharada, Above Axis Bank, AECS Layout,
                            Kundalahalli, Bengaluru, Karnataka 560037, India
                          </span>
                        </div>
                      </div>

                      <div className="cob-col">
                        <span className="cob-label">Grievance &amp; Compliance Channels</span>
                        <div className="cob-val-row">
                          <Mail size={16} style={{ color: "#0EA5E9", flexShrink: 0 }} />
                          <a href="mailto:info@procucev.com">info@procucev.com</a>
                        </div>
                        <div className="cob-val-row" style={{ marginTop: "6px" }}>
                          <Phone size={16} style={{ color: "#10B981", flexShrink: 0 }} />
                          <a href="tel:+919876543210">+91 98765 43210</a>
                        </div>
                      </div>
                    </div>

                    <div className="cob-footer-notice">
                      All legal notices or demands upon Procucev shall be made in
                      writing and sent to Procucev personally, by courier,
                      certified mail, or facsimile to the above entity and address.
                      Notices shall be effective when received by Procucev.
                    </div>
                  </div>

                  <div className="final-binding-banner">
                    <ShieldCheck size={24} style={{ color: "#10B981" }} />
                    <div>
                      <strong>BY USING THE SERVICES, USER AGREES TO BE BOUND BY THE TERMS OF THIS AGREEMENT.</strong>
                      <p>
                        YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE
                        TO THE TERMS AND CONDITIONS OUTLINED IN THIS AGREEMENT.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </div>
      </section>

      {/* Embedded Styles for High Visual Polish */}
      <style>{`
        .v2-privacy-page {
          background: #F8FAFC;
          color: #334155;
          font-family: 'Poppins', sans-serif;
          min-height: 100vh;
        }

        /* Hero */
        .v2-legal-hero {
          background: linear-gradient(135deg, #0C4A6E 0%, #082F49 100%);
          color: #ffffff;
          padding: 40px 0 46px;
          border-bottom: 3px solid #0EA5E9;
          position: relative;
        }
        .v2-legal-breadcrumbs {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          color: #BAE6FD;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        .v2-legal-back-btn {
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          padding: 4px 12px;
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          font-size: 0.8rem;
          font-weight: 500;
          transition: all 0.2s;
        }
        .v2-legal-back-btn:hover {
          background: #0EA5E9;
          border-color: #0EA5E9;
        }
        .sep-icon {
          color: rgba(255, 255, 255, 0.4);
        }
        .v2-legal-breadcrumbs .current {
          color: #F97316;
          font-weight: 600;
        }
        .v2-legal-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(14, 165, 233, 0.18);
          border: 1px solid rgba(14, 165, 233, 0.4);
          color: #7DD3FC;
          font-size: 0.76rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          padding: 4px 12px;
          border-radius: 999px;
          margin-bottom: 12px;
        }
        .v2-legal-title {
          font-size: clamp(1.8rem, 3.5vw, 2.75rem);
          font-weight: 800;
          line-height: 1.25;
          margin-bottom: 12px;
          color: #ffffff;
        }
        .v2-legal-subtitle {
          font-size: 1rem;
          color: #E0F2FE;
          max-width: 860px;
          line-height: 1.6;
          margin-bottom: 24px;
        }
        .v2-legal-meta-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 14px;
          padding: 12px 20px;
        }
        .meta-item {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 0.82rem;
          color: #BAE6FD;
        }
        .meta-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .legal-action-btn {
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: #ffffff;
          padding: 6px 14px;
          border-radius: 8px;
          font-size: 0.8rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .legal-action-btn:hover {
          background: #F97316;
          border-color: #F97316;
        }

        /* Layout */
        .v2-legal-main {
          padding: 50px 0 80px;
        }
        .v2-legal-layout {
          display: grid;
          grid-template-columns: 310px 1fr;
          gap: 40px;
          align-items: flex-start;
        }

        /* Sticky Sidebar */
        .v2-legal-sidebar {
          position: sticky;
          top: 90px;
        }
        .sidebar-sticky-box {
          background: #ffffff;
          border: 1px solid #E2E8F0;
          border-radius: 18px;
          padding: 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          max-height: calc(100vh - 120px);
          overflow-y: auto;
        }
        .legal-search-box {
          position: relative;
          margin-bottom: 14px;
        }
        .search-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #94A3B8;
        }
        .legal-search-input {
          width: 100%;
          padding: 8px 30px 8px 36px;
          border: 1px solid #CBD5E1;
          border-radius: 10px;
          font-size: 0.84rem;
          font-family: inherit;
          outline: none;
          transition: border-color 0.2s;
        }
        .legal-search-input:focus {
          border-color: #0EA5E9;
        }
        .clear-search-btn {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          font-size: 1.1rem;
          color: #94A3B8;
          cursor: pointer;
        }
        .legal-filter-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid #F1F5F9;
        }
        .filter-pill {
          background: #F1F5F9;
          border: none;
          color: #475569;
          font-size: 0.74rem;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 999px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .filter-pill:hover,
        .filter-pill.active {
          background: #0EA5E9;
          color: #ffffff;
        }
        .legal-toc-title {
          font-size: 0.74rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #64748B;
          margin-bottom: 10px;
        }
        .legal-toc-nav {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 20px;
        }
        .toc-link {
          text-align: left;
          background: none;
          border: none;
          padding: 7px 10px;
          border-radius: 8px;
          font-size: 0.82rem;
          font-weight: 500;
          color: #475569;
          cursor: pointer;
          transition: all 0.2s;
          line-height: 1.35;
        }
        .toc-link:hover {
          background: #F0F9FF;
          color: #0284C7;
        }
        .toc-link.active {
          background: #E0F2FE;
          color: #0369A1;
          font-weight: 700;
          border-left: 3px solid #0EA5E9;
        }

        .sidebar-grievance-card {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 14px;
        }
        .grievance-badge {
          display: inline-block;
          font-size: 0.68rem;
          font-weight: 700;
          color: #F97316;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 4px;
        }
        .grievance-title {
          font-size: 0.86rem;
          font-weight: 700;
          color: #0C4A6E;
          margin: 0 0 6px;
        }
        .grievance-address {
          font-size: 0.74rem;
          color: #64748B;
          line-height: 1.45;
          margin: 0 0 8px;
        }
        .grievance-mail {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.78rem;
          color: #0EA5E9;
          text-decoration: none;
          font-weight: 600;
        }
        .grievance-mail:hover {
          text-decoration: underline;
        }

        /* Content Column */
        .v2-legal-content {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        .legal-card {
          background: #ffffff;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 32px 36px;
          box-shadow: 0 2px 14px rgba(0, 0, 0, 0.03);
          scroll-margin-top: 100px;
        }
        .legal-card-header {
          border-bottom: 1px solid #F1F5F9;
          padding-bottom: 16px;
          margin-bottom: 22px;
        }
        .section-pill {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          color: #0EA5E9;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          background: rgba(14, 165, 233, 0.1);
          padding: 3px 10px;
          border-radius: 999px;
          margin-bottom: 8px;
        }
        .legal-card h2 {
          font-size: 1.45rem;
          font-weight: 800;
          color: #0C4A6E;
          margin: 0;
        }
        .subsection-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #0C4A6E;
          margin: 22px 0 10px;
        }
        .legal-card-body p {
          font-size: 0.92rem;
          line-height: 1.7;
          color: #475569;
          margin-bottom: 14px;
        }
        .lead-paragraph {
          font-size: 1.02rem !important;
          color: #1E293B !important;
          font-weight: 500;
          line-height: 1.75 !important;
        }

        .legal-notice-box {
          background: #F0FDF4;
          border: 1px solid #BBF7D0;
          border-left: 4px solid #16A34A;
          border-radius: 12px;
          padding: 16px 20px;
          font-size: 0.88rem;
          color: #166534;
          line-height: 1.6;
          margin: 16px 0;
        }
        .legal-warning-box {
          background: #FFF7ED;
          border: 1px solid #FED7AA;
          border-left: 4px solid #F97316;
          border-radius: 12px;
          padding: 16px 20px;
          font-size: 0.88rem;
          color: #9A3412;
          line-height: 1.6;
          margin: 16px 0;
        }
        .highlight-callout {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          background: #F8FAFC;
          border: 1px solid #CBD5E1;
          border-radius: 14px;
          padding: 18px 22px;
          margin: 18px 0;
        }
        .callout-icon {
          color: #0EA5E9;
          flex-shrink: 0;
          margin-top: 3px;
        }
        .highlight-callout strong {
          color: #0C4A6E;
          font-size: 0.94rem;
          display: block;
          margin-bottom: 4px;
        }
        .highlight-callout p {
          font-size: 0.88rem;
          color: #475569;
          margin: 0;
          line-height: 1.6;
        }

        /* Definitions */
        .definitions-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
          margin: 16px 0;
        }
        .def-item {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 14px 16px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .def-term {
          font-weight: 700;
          color: #0284C7;
          font-size: 0.9rem;
        }
        .def-desc {
          font-size: 0.84rem;
          color: #475569;
          line-height: 1.5;
        }

        /* Telemetry badges */
        .telemetry-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 12px 0 18px;
        }
        .badge-chip {
          background: #EFF6FF;
          border: 1px solid #BFDBFE;
          color: #1D4ED8;
          font-size: 0.78rem;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 8px;
        }

        /* Bullet lists */
        .legal-bullet-list {
          padding-left: 20px;
          margin: 12px 0 18px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .legal-bullet-list li {
          font-size: 0.9rem;
          color: #475569;
          line-height: 1.6;
        }

        /* Disclosures */
        .legal-disclosure-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
          margin: 16px 0;
        }
        .disclosure-box {
          display: flex;
          gap: 14px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 14px 18px;
        }
        .disc-letter {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #0EA5E9;
          color: #ffffff;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.82rem;
          flex-shrink: 0;
        }
        .disclosure-box strong {
          color: #0C4A6E;
          font-size: 0.92rem;
          display: block;
          margin-bottom: 4px;
        }
        .disclosure-box p {
          margin: 0;
          font-size: 0.85rem;
          color: #64748B;
          line-height: 1.55;
        }

        /* Cookies table */
        .cookies-table-wrap {
          overflow-x: auto;
          margin: 16px 0;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
        }
        .cookies-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.84rem;
          text-align: left;
        }
        .cookies-table th {
          background: #F1F5F9;
          padding: 10px 14px;
          color: #0C4A6E;
          font-weight: 700;
          border-bottom: 1px solid #E2E8F0;
        }
        .cookies-table td {
          padding: 10px 14px;
          border-bottom: 1px solid #F1F5F9;
          color: #475569;
        }

        /* Prohibited Grid */
        .prohibited-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 8px;
          margin: 16px 0;
        }
        .prohibited-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 10px;
          padding: 10px 14px;
          font-size: 0.85rem;
          color: #334155;
          line-height: 1.5;
        }
        .p-num {
          background: #E2E8F0;
          color: #475569;
          font-weight: 700;
          font-size: 0.72rem;
          padding: 2px 7px;
          border-radius: 6px;
          flex-shrink: 0;
          margin-top: 1px;
        }

        /* Statutory Box */
        .statutory-card {
          border: 2px solid #0EA5E9;
        }
        .statutory-pill {
          background: rgba(16, 185, 129, 0.15) !important;
          color: #059669 !important;
        }
        .company-official-box {
          background: #F0F9FF;
          border: 1px solid #BAE6FD;
          border-radius: 16px;
          padding: 24px;
          margin: 20px 0;
        }
        .cob-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          padding-bottom: 14px;
          border-bottom: 1px solid #E0F2FE;
        }
        .cob-name {
          font-size: 1.08rem;
          font-weight: 800;
          color: #0C4A6E;
          margin: 0;
        }
        .cob-reg {
          font-size: 0.78rem;
          color: #0284C7;
          display: block;
        }
        .cob-details-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 20px;
          margin-bottom: 16px;
        }
        .cob-col {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .cob-label {
          font-size: 0.74rem;
          font-weight: 700;
          text-transform: uppercase;
          color: #64748B;
          letter-spacing: 0.5px;
        }
        .cob-val-row {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.86rem;
          color: #334155;
          line-height: 1.5;
        }
        .cob-val-row a {
          color: #0284C7;
          text-decoration: none;
          font-weight: 600;
        }
        .cob-val-row a:hover {
          text-decoration: underline;
        }
        .cob-footer-notice {
          font-size: 0.78rem;
          color: #64748B;
          border-top: 1px solid #E0F2FE;
          padding-top: 12px;
          line-height: 1.5;
        }

        .final-binding-banner {
          display: flex;
          align-items: center;
          gap: 16px;
          background: #ECFDF5;
          border: 1px solid #A7F3D0;
          border-radius: 14px;
          padding: 18px 24px;
          margin-top: 24px;
        }
        .final-binding-banner strong {
          color: #065F46;
          font-size: 0.94rem;
          display: block;
          margin-bottom: 4px;
        }
        .final-binding-banner p {
          color: #047857;
          font-size: 0.82rem;
          margin: 0;
          line-height: 1.45;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .v2-legal-layout {
            grid-template-columns: 1fr;
          }
          .v2-legal-sidebar {
            position: static;
            margin-bottom: 24px;
          }
          .sidebar-sticky-box {
            max-height: none;
          }
        }
        @media (max-width: 768px) {
          .definitions-grid {
            grid-template-columns: 1fr;
          }
          .cob-details-grid {
            grid-template-columns: 1fr;
          }
          .legal-card {
            padding: 22px 20px;
          }
          .v2-legal-meta-bar {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        /* Print styles */
        @media print {
          .v2-legal-sidebar,
          .v2-legal-breadcrumbs,
          .meta-actions,
          .v2-nav-header,
          .v2-contact-section,
          .qua-ai-widget {
            display: none !important;
          }
          .v2-legal-layout {
            display: block !important;
          }
          .legal-card {
            box-shadow: none !important;
            border: 1px solid #ccc !important;
            break-inside: avoid;
            margin-bottom: 20px;
          }
        }
      `}</style>
    </div>
  );
}
