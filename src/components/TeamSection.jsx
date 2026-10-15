import React, { useState, useEffect } from 'react';
import { Users, Award, GraduationCap, Briefcase, ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Zap } from 'lucide-react';

export default function TeamSection() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [expanded, setExpanded] = useState({});
  const [expandedAdvisors, setExpandedAdvisors] = useState({});

  const leadership = [
    {
      name: 'Srinivas Mukku',
      role: 'Co-Founder & CEO',
      initials: 'SM',
      photo: '/Srinivas_Mukku.webp',
      tags: ['Co-Founder & CEO', 'Ex-ISRO Scientist', 'CPSM Certified'],
      shortBio: 'Senior Procurement Professional with $2B+ in procurement across manufacturing, retail and services. Ex-ISRO Scientist turned enterprise procurement strategist.',
      fullBio: [
        'A Senior Procurement Professional and subject matter expert, he comes with a wealth of market insights across varied product categories. Throughout his career, he has handled procurement of products/services worth more than $2 Billion across sectors like manufacturing, retail and services.',
        'His passion lies in transforming procurement departments from being operational focused to becoming a true strategic constituent in a company\'s growth. He is a "Certified Professional in Supply Management (CPSM)" by ISM, USA - and a reputed conference speaker in multiple national & international forums.',
        'Srini is a strong advocate of adopting innovative technologies to drive efficiencies and effectiveness of the procurement processes.',
        'He is a University Topper in Mechanical Engineering from Andhra University & has an MBA from Welingkar Institute of Management, Mumbai.'
      ],
      highlights: [
        { icon: <Briefcase size={14} />, text: '$2 Billion+ procurement handled' },
        { icon: <Award size={14} />, text: 'CPSM Certified (ISM, USA)' },
        { icon: <GraduationCap size={14} />, text: 'MBA – Welingkar Institute' },
        { icon: <Award size={14} />, text: 'Ex-Scientist, ISRO' },
      ],
      accentColor: '#0EA5E9',
      gradient: 'linear-gradient(135deg, #0EA5E9, #0284C7)',
    },
    {
      name: 'M N Rao',
      role: 'Co-Founder, Chief of BD & Finance',
      initials: 'MN',
      photo: '/mnrao.webp',
      tags: ['Co-Founder', 'Chief BD & Finance', 'Chartered Accountant'],
      shortBio: 'Expert Commercial Professional with 20+ years experience. Driven profitability of ₹3,000 Cr turnover retail stores and handled ₹1,000 Cr procurement across Capex and Opex.',
      fullBio: [
        'Expert Commercial Professional with 20+ years of deep domain experience in enterprise finance, commercial operations, and procurement management.',
        'He has driven profitability of ₹3,000 Cr turnover retail stores and handled ₹1,000 Cr procurement across Capex and Opex segments.',
        'Ex-Head of Project Commercial at Landmark Group India, bringing rigorous financial discipline and strategic vendor management.'
      ],
      highlights: [
        { icon: <Briefcase size={14} />, text: '₹1,000 Cr+ procurement handled' },
        { icon: <Award size={14} />, text: 'Chartered Accountant (CA)' },
        { icon: <GraduationCap size={14} />, text: 'B.Com + CA' },
        { icon: <Briefcase size={14} />, text: 'Ex-Landmark Group India' },
      ],
      accentColor: '#F97316',
      gradient: 'linear-gradient(135deg, #F97316, #EA580C)',
    },
    {
      name: 'Sudheer Kangala',
      role: 'Head of Growth & Marketing',
      initials: 'SK',
      photo: '/Sudheer-Kangala.jpeg',
      tags: ['Growth Strategy', 'Revenue Growth', 'PGDM – IIM Rohtak'],
      shortBio: 'Strategic growth professional with 12+ years across sales leadership, CRM, and business development. Led ₹350 Cr+ annual revenue across B2B and real estate sectors.',
      fullBio: [
        'Sudheer Kangala is a strategic business and growth professional with experience across sales leadership, customer relationship management, business development, and strategic partnerships.',
        'Throughout his career, he has led sales and CRM operations, managed high-performing teams, developed strategic partnerships with 15+ top developers, and implemented data-driven strategies that improved business performance.',
        'He holds a PGDM from IIM Rohtak with dual specialization in IT and Marketing.'
      ],
      highlights: [
        { icon: <Briefcase size={14} />, text: '12+ Years Experience' },
        { icon: <Award size={14} />, text: '₹350 Cr+ Revenue Led' },
        { icon: <Users size={14} />, text: '15+ Developer Partnerships' },
        { icon: <GraduationCap size={14} />, text: 'IIM Rohtak – PGDM' },
      ],
      accentColor: '#0284C7',
      gradient: 'linear-gradient(135deg, #0284C7, #0369A1)',
    },
    {
      name: 'Anshul Goel',
      role: 'Head of IT',
      initials: 'AG',
      photo: '/Anshul.png',
      tags: ['IIT Bombay', 'IT Strategy', 'Tech Infrastructure', 'Digital Transformation'],
      shortBio: 'IIT Bombay alumnus and Ex-SAP Labs technologist leading IT strategy, reliable systems, scalable infrastructure, and enterprise digital solutions.',
      fullBio: [
        'Leads IT strategy and technology initiatives, focusing on reliable systems, scalable infrastructure, and digital solutions aligned with business objectives.',
        'An alumnus of IIT Bombay with prior experience at SAP Labs, building secure, efficient enterprise technology environments that support rapid organizational growth.',
        'Expertise across enterprise IT systems, infrastructure management, data protection, and process automation.'
      ],
      highlights: [
        { icon: <Briefcase size={14} />, text: 'IT Operations & Infrastructure' },
        { icon: <Briefcase size={14} />, text: 'Ex-SAP Labs' },
        { icon: <Award size={14} />, text: 'Systems Reliability & Security' },
        { icon: <GraduationCap size={14} />, text: 'Digital Solutions & Automation' },
      ],
      accentColor: '#EA580C',
      gradient: 'linear-gradient(135deg, #EA580C, #C2410C)',
    },
  ];

  /* Strategic Advisory Board */
  const advisors = [
    {
      name: 'Dr. Pradeep Pendse',
      role: 'Strategic Technology Advisor',
      initials: 'PP',
      photo: '/Dr. Pradeep Pendse.webp',
      tags: ['Strategic Advisor', 'CTO & Director – WeSchool', 'President – IIBA Mumbai'],
      shortBio: 'In-charge Director (University Programs) & CTO at Welingkar Institute of Management (WeSchool). Instrumental in laying the technology foundation for Procucev.',
      fullBio: [
        'Dr. Pradeep Pendse has been instrumental in laying the foundation for Procucev and its underlying enterprise architecture.',
        'He serves as the In-Charge Director (University Programs) and Chief Technology Officer (CTO) at the Prin. L.N. Welingkar Institute of Management Development and Research (WeSchool), Mumbai.',
        'A pioneer of the Business Analysis movement in India and President of the IIBA Mumbai Chapter, he specializes in Emerging Technologies, Digital Transformation, and Design Thinking.',
        'Dr. Pendse is a seasoned tech entrepreneur, PhD holder, and enterprise mentor guiding next-generation enterprise SaaS systems.'
      ],
      highlights: [
        { icon: <Award size={14} />, text: 'CTO & Director – WeSchool Mumbai' },
        { icon: <Briefcase size={14} />, text: 'President – IIBA Mumbai Chapter' },
        { icon: <Zap size={14} />, text: 'Pioneer in Business Analysis & IT' },
        { icon: <GraduationCap size={14} />, text: 'PhD – Tech Enterprise Mentor' },
      ],
      accentColor: '#0EA5E9',
      gradient: 'linear-gradient(135deg, #0EA5E9, #0284C7)',
    },
    {
      name: 'Mr. Venu Juvvala',
      role: 'Enterprise Strategy & GTM Advisor',
      initials: 'VJ',
      photo: '/Mr.Venu-Juvvala.webp',
      tags: ['Enterprise Advisor', 'Head – Adobe India', 'Ex-Director – IBM Cloud'],
      shortBio: 'Technology industry leader and IIM Bangalore alumnus. Head of Digital Experience Business for India at Adobe, with former senior leadership at IBM, Salesforce, and Lenovo.',
      fullBio: [
        'Venu Juvvala is an accomplished technology executive with decades of experience leading enterprise software, cloud, and digital business units.',
        'He currently serves as the Head of Digital Experience Business for India at Adobe, and previously held senior leadership roles including Director of Enterprise Business & Cloud Services at IBM.',
        'He also held strategic executive positions at Salesforce and Lenovo, bringing proven mastery in B2B software scaling and client success.',
        'An alumnus of IIM Bangalore, he advises Procucev on enterprise market expansion, go-to-market execution, and high-velocity SaaS partnerships.'
      ],
      highlights: [
        { icon: <Briefcase size={14} />, text: 'Head – Digital Experience, Adobe India' },
        { icon: <Award size={14} />, text: 'Ex-Director Enterprise & Cloud, IBM' },
        { icon: <GraduationCap size={14} />, text: 'Alumnus – IIM Bangalore' },
        { icon: <Users size={14} />, text: '25+ Yrs Enterprise Tech Leadership' },
      ],
      accentColor: '#F97316',
      gradient: 'linear-gradient(135deg, #F97316, #EA580C)',
    },
    {
      name: 'Mr. Vasanth Kumar',
      role: 'Senior Advisor & Retail Strategist',
      initials: 'VK',
      photo: '/Mr.-Vasanth-Kumar.webp',
      tags: ['Senior Advisor', 'Ex-MD – Landmark Group India', 'Advisor – Samara Capital'],
      shortBio: 'Distinguished retail icon and angel investor. Former Managing Director of Landmark Group India; built Max Fashion India from inception and launched Peter England.',
      fullBio: [
        'M. Vasanth Kumar is a distinguished business leader and angel investor, instrumental in shaping Procucev’s strategic commercial vision and supply chain scale.',
        'He previously served as the Managing Director of Landmark Group India, where he built Max Fashion India from inception into a multi-thousand crore retail powerhouse.',
        'Earlier in his career, he established the Peter England brand in India, creating one of the country’s most recognizable apparel franchises.',
        'He currently serves as a Senior Advisor at Samara Capital, offering unmatched insights into large-scale vendor ecosystems and procurement operations.'
      ],
      highlights: [
        { icon: <Briefcase size={14} />, text: 'Ex-MD – Landmark Group India' },
        { icon: <Award size={14} />, text: 'Senior Advisor – Samara Capital' },
        { icon: <Zap size={14} />, text: 'Built Max Fashion India & Peter England' },
        { icon: <Users size={14} />, text: 'Retail & Enterprise Commercial Icon' },
      ],
      accentColor: '#059669',
      gradient: 'linear-gradient(135deg, #059669, #047857)',
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 680) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxSlide = Math.max(0, leadership.length - visibleCount);

  useEffect(() => {
    if (slideIndex > maxSlide) {
      setSlideIndex(maxSlide);
    }
  }, [maxSlide, slideIndex]);

  const handlePrev = () => {
    setSlideIndex(prev => (prev > 0 ? prev - 1 : maxSlide));
  };

  const handleNext = () => {
    setSlideIndex(prev => (prev < maxSlide ? prev + 1 : 0));
  };

  const toggleExpand = (idx) => {
    setExpanded(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const toggleExpandAdvisor = (idx) => {
    setExpandedAdvisors(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  // Calculate sliding transform
  const getTransform = () => {
    if (visibleCount === 3) {
      return `translateX(calc(-${slideIndex} * ((100% - 48px) / 3 + 24px)))`;
    } else if (visibleCount === 2) {
      return `translateX(calc(-${slideIndex} * ((100% - 20px) / 2 + 20px)))`;
    } else {
      return `translateX(calc(-${slideIndex} * (100% + 16px)))`;
    }
  };

  return (
    <section className="v2-team-section section" id="team">
      <div className="container">

        {/* Section Header */}
        <div className="v2-section-header text-center">
          <div className="badge-tag-pill">
            <Users size={14} style={{ color: '#0EA5E9' }} /> Our Leadership
          </div>
          <h2 className="v2-section-title">
            Procurement people, building <br />
            <span style={{ color: '#F97316', fontStyle: 'italic' }}>procurement technology</span>
          </h2>
          <p className="v2-section-desc" style={{ maxWidth: '860px', margin: '0 auto 46px', textAlign: 'center', lineHeight: '1.65' }}>
            Our leadership brings experience from ISRO, Landmark Group, IIM, IIT and decades of enterprise
            <br className="desc-break" />
            procurement and technology — combining deep domain expertise with a passion for growth.
          </p>
        </div>

        {/* Carousel Root with Side Arrows */}
        <div className="team-carousel-wrapper">

          {/* Prev Arrow */}
          <button
            className="team-nav-arrow prev"
            onClick={handlePrev}
            aria-label="Previous leadership members"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Carousel Viewport */}
          <div className="team-carousel-viewport">
            <div
              className="team-carousel-track"
              style={{ transform: getTransform() }}
            >
              {leadership.map((member, idx) => {
                const isExpanded = !!expanded[idx];
                return (
                  <div
                    className="team-founder-card"
                    key={idx}
                    style={{ '--accent': member.accentColor }}
                  >
                    {/* Header: Avatar, Name & Role */}
                    <div className="founder-header" style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                      {/* Avatar box */}
                      <div className="founder-avatar-box" style={{ background: member.gradient, marginBottom: 0 }}>
                        {member.photo ? (
                          <img
                            src={member.photo}
                            alt={member.name}
                            className="founder-avatar-img"
                          />
                        ) : (
                          <span className="founder-avatar-initials">{member.initials}</span>
                        )}
                      </div>

                      {/* Name & Role */}
                      <div className="founder-name-role">
                        <h3 className="founder-name">{member.name}</h3>
                        <div className="founder-role" style={{ color: member.accentColor, marginBottom: 0 }}>{member.role}</div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="founder-tags">
                      {member.tags.map((tag, ti) => (
                        <span
                          key={ti}
                          className="founder-tag"
                          style={{
                            background: `${member.accentColor}12`,
                            color: member.accentColor,
                            borderColor: `${member.accentColor}30`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Key Highlights */}
                    <div className="founder-highlights">
                      {member.highlights.map((h, hi) => (
                        <div key={hi} className="founder-hl-item">
                          <span className="founder-hl-icon" style={{ color: member.accentColor }}>
                            {h.icon}
                          </span>
                          <span className="founder-hl-text">{h.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Bio */}
                    <div className="founder-bio-box">
                      <p className="founder-bio-text">{member.shortBio}</p>
                      {isExpanded && (
                        <div className="founder-bio-expanded">
                          {member.fullBio.slice(1).map((para, pi) => (
                            <p key={pi} className="founder-bio-text" style={{ marginTop: '8px' }}>
                              {para}
                            </p>
                          ))}
                        </div>
                      )}
                      <button
                        className="founder-bio-toggle"
                        onClick={() => toggleExpand(idx)}
                        style={{ color: member.accentColor }}
                      >
                        {isExpanded ? (
                          <>Read Less <ChevronUp size={14} /></>
                        ) : (
                          <>Read Full Bio <ChevronDown size={14} /></>
                        )}
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

          {/* Next Arrow */}
          <button
            className="team-nav-arrow next"
            onClick={handleNext}
            aria-label="Next leadership members"
          >
            <ChevronRight size={22} />
          </button>

        </div>

        {/* Carousel Pagination Dots */}
        {maxSlide > 0 && (
          <div className="team-carousel-dots">
            {Array.from({ length: maxSlide + 1 }).map((_, i) => (
              <button
                key={i}
                className={`team-dot ${slideIndex === i ? 'active' : ''}`}
                onClick={() => setSlideIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}

        {/* ── Strategic Advisory Board (Below Founding Members) ── */}
        <div className="v2-advisory-section">
          <div className="v2-section-header text-center">
            <div className="badge-tag-pill advisory-pill">
              <Award size={14} style={{ color: '#0EA5E9' }} /> Strategic Advisory Board
            </div>
            <h3 className="v2-advisory-title">
              Guided by Industry Veterans &amp; Tech Pioneers
            </h3>
            <p className="v2-section-desc" style={{ maxWidth: '860px', margin: '0 auto 36px', textAlign: 'center', lineHeight: '1.65' }}>
              Our advisory board provides strategic counsel across enterprise architecture,
              <br className="desc-break" />
              global market expansion, and large-scale retail procurement operations.
            </p>
          </div>

          <div className="advisory-grid">
            {advisors.map((advisor, idx) => {
              const isExpanded = !!expandedAdvisors[idx];
              return (
                <div
                  className="advisory-card"
                  key={idx}
                  style={{ '--accent': advisor.accentColor }}
                >
                  {/* Header: Avatar, Name & Role */}
                  <div className="founder-header" style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                    <div className="founder-avatar-box" style={{ background: advisor.gradient, marginBottom: 0 }}>
                      {advisor.photo ? (
                        <img
                          src={advisor.photo}
                          alt={advisor.name}
                          className="founder-avatar-img"
                        />
                      ) : (
                        <span className="founder-avatar-initials">{advisor.initials}</span>
                      )}
                    </div>

                    <div className="founder-name-role">
                      <h4 className="founder-name">{advisor.name}</h4>
                      <div className="founder-role" style={{ color: advisor.accentColor, marginBottom: 0 }}>{advisor.role}</div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="founder-tags">
                    {advisor.tags.map((tag, ti) => (
                      <span
                        key={ti}
                        className="founder-tag"
                        style={{
                          background: `${advisor.accentColor}12`,
                          color: advisor.accentColor,
                          borderColor: `${advisor.accentColor}30`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Key Highlights */}
                  <div className="founder-highlights">
                    {advisor.highlights.map((h, hi) => (
                      <div key={hi} className="founder-hl-item">
                        <span className="founder-hl-icon" style={{ color: advisor.accentColor }}>
                          {h.icon}
                        </span>
                        <span className="founder-hl-text">{h.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bio */}
                  <div className="founder-bio-box">
                    <p className="founder-bio-text">{advisor.shortBio}</p>
                    {isExpanded && (
                      <div className="founder-bio-expanded">
                        {advisor.fullBio.slice(1).map((para, pi) => (
                          <p key={pi} className="founder-bio-text" style={{ marginTop: '8px' }}>
                            {para}
                          </p>
                        ))}
                      </div>
                    )}
                    <button
                      className="founder-bio-toggle"
                      onClick={() => toggleExpandAdvisor(idx)}
                      style={{ color: advisor.accentColor }}
                    >
                      {isExpanded ? (
                        <>Read Less <ChevronUp size={14} /></>
                      ) : (
                        <>Read Full Bio <ChevronDown size={14} /></>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      <style>{`
        .v2-team-section {
          background: #ffffff;
          padding-top: 40px;
          padding-bottom: 80px;
          overflow: hidden;
        }

        .badge-tag-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #E0F2FE;
          color: #0284C7;
          font-size: 0.8rem;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: 999px;
          margin-bottom: 14px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .v2-section-title {
          font-size: 2.25rem;
          font-weight: 800;
          color: #0F172A;
          line-height: 1.25;
          margin-bottom: 14px;
        }

        .v2-section-desc {
          max-width: 860px;
          margin: 0 auto 46px;
          color: #64748B;
          font-size: 1rem;
          line-height: 1.65;
          text-align: center !important;
        }

        /* Carousel Wrapper */
        .team-carousel-wrapper {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px;
        }

        .team-carousel-viewport {
          overflow: hidden;
          width: 100%;
          padding: 10px 4px 20px;
        }

        .team-carousel-track {
          display: flex;
          gap: 24px;
          transition: transform 0.45s cubic-bezier(0.2, 0.9, 0.3, 1);
          will-change: transform;
        }

        /* Founder Card */
        .team-founder-card {
          flex: 0 0 calc((100% - 48px) / 3);
          width: calc((100% - 48px) / 3);
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-top: 4px solid var(--accent);
          border-radius: 18px;
          box-shadow: 0 4px 18px -2px rgba(15, 23, 42, 0.06);
          padding: 26px 22px;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .team-founder-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px -4px rgba(15, 23, 42, 0.1);
        }

        /* Avatar */
        .founder-avatar-box {
          width: 58px;
          height: 58px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          margin-bottom: 16px;
          flex-shrink: 0;
        }

        .founder-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
        }

        .founder-avatar-initials {
          color: #FFFFFF;
          font-size: 1.2rem;
          font-weight: 700;
          letter-spacing: -0.5px;
        }

        /* Name & Role */
        .founder-name {
          font-size: 1.18rem;
          font-weight: 700;
          color: #0F172A;
          margin: 0 0 4px 0;
          line-height: 1.3;
        }

        .founder-role {
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 14px;
          line-height: 1.3;
        }

        /* Tags */
        .founder-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 16px;
        }

        .founder-tag {
          font-size: 0.72rem;
          font-weight: 600;
          padding: 3px 9px;
          border-radius: 999px;
          border: 1px solid;
          line-height: 1.3;
        }

        /* Highlights */
        .founder-highlights {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 12px 14px;
          margin-bottom: 16px;
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .founder-hl-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          color: #334155;
          font-weight: 500;
        }

        .founder-hl-icon {
          flex-shrink: 0;
          display: flex;
          align-items: center;
        }

        .founder-hl-text {
          line-height: 1.35;
        }

        /* Bio */
        .founder-bio-box {
          margin-top: auto;
          display: flex;
          flex-direction: column;
        }

        .founder-bio-text {
          font-size: 0.82rem;
          line-height: 1.55;
          color: #64748B;
          margin: 0;
        }

        .founder-bio-expanded {
          margin-top: 4px;
        }

        .founder-bio-toggle {
          background: none;
          border: none;
          padding: 8px 0 0;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          margin-top: 6px;
          text-align: left;
        }

        .founder-bio-toggle:hover {
          text-decoration: underline;
        }

        /* Navigation Arrows */
        .team-nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          color: #334155;
          transition: all 0.2s ease;
        }

        .team-nav-arrow:hover {
          background: #FFFFFF;
          color: #0EA5E9;
          border-color: #0EA5E9;
          box-shadow: 0 6px 18px rgba(14, 165, 233, 0.2);
          transform: translateY(-50%) scale(1.08);
        }

        .team-nav-arrow.prev {
          left: 0;
        }

        .team-nav-arrow.next {
          right: 0;
        }

        /* Dots */
        .team-carousel-dots {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-top: 14px;
        }

        .team-dot {
          width: 9px;
          height: 9px;
          border-radius: 999px;
          border: none;
          background: #CBD5E1;
          cursor: pointer;
          transition: all 0.25s ease;
          padding: 0;
        }

        .team-dot.active {
          width: 26px;
          background: #0EA5E9;
        }

        /* ── Strategic Advisory Board Styling ── */
        .v2-advisory-section {
          margin-top: 64px;
          padding-top: 56px;
          border-top: 1px solid #E2E8F0;
        }

        .advisory-pill {
          background: rgba(14, 165, 233, 0.08);
          color: #0284C7;
          border: 1px solid rgba(14, 165, 233, 0.2);
        }

        .v2-advisory-title {
          font-size: clamp(1.6rem, 2.8vw, 2.1rem);
          font-weight: 800;
          color: #0C4A6E;
          line-height: 1.3;
          margin-bottom: 12px;
        }

        .advisory-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .advisory-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-top: 4px solid var(--accent);
          border-radius: 18px;
          box-shadow: 0 4px 18px -2px rgba(15, 23, 42, 0.06);
          padding: 26px 22px;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .advisory-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px -4px rgba(15, 23, 42, 0.1);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .team-founder-card {
            flex: 0 0 calc((100% - 20px) / 2);
            width: calc((100% - 20px) / 2);
          }
          .team-carousel-track {
            gap: 20px;
          }
          .advisory-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 680px) {
          .team-carousel-wrapper {
            padding: 0 20px;
          }
          .team-founder-card {
            flex: 0 0 100%;
            width: 100%;
          }
          .team-carousel-track {
            gap: 16px;
          }
          .team-nav-arrow.prev {
            left: -10px;
          }
          .team-nav-arrow.next {
            right: -10px;
          }
          .advisory-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
      `}</style>
    </section>
  );
}
