import React, { useState, useEffect } from 'react';
import { Users, Award, GraduationCap, Briefcase, ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Zap } from 'lucide-react';

export default function TeamSection() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [expanded, setExpanded] = useState({});

  const leadership = [
    {
      name: 'Srinivas Mukku',
      role: 'Co-Founder & CEO',
      initials: 'SM',
      photo: 'https://procucev.com/wp-content/uploads/2026/02/WhatsApp-Image-2021-06-09-at-8.33.27-PM-e1646728037406.webp',
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
      photo: 'https://procucev.com/wp-content/uploads/2026/02/WhatsApp-Image-2021-06-09-at-8.32.58-PM-e1646728070294.webp',
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
      photo: 'https://ui-avatars.com/api/?name=Sudheer+Kangala&background=0284c7&color=fff&size=200',
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
      photo: 'https://ui-avatars.com/api/?name=Anshul+Goel&background=ea580c&color=fff&size=200',
      tags: ['IT Strategy', 'Tech Infrastructure', 'Digital Transformation'],
      shortBio: 'Leads IT strategy and technology initiatives, focusing on reliable systems, scalable infrastructure, and digital solutions aligned with business objectives.',
      fullBio: [
        'Leads IT strategy and technology initiatives, focusing on reliable systems, scalable infrastructure, and digital solutions aligned with business objectives.',
        'Builds secure, efficient technology environments that support organizational growth and smooth day-to-day operations.',
        'Expertise across enterprise IT systems, infrastructure management, data protection, and process automation.'
      ],
      highlights: [
        { icon: <Briefcase size={14} />, text: 'IT Operations & Infrastructure' },
        { icon: <Zap size={14} />, text: 'Technology Strategy' },
        { icon: <Award size={14} />, text: 'Systems Reliability & Security' },
        { icon: <GraduationCap size={14} />, text: 'Digital Solutions & Automation' },
      ],
      accentColor: '#EA580C',
      gradient: 'linear-gradient(135deg, #EA580C, #C2410C)',
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
          <p className="v2-section-desc">
            Our leadership brings experience from ISRO, Landmark Group, IIM, and decades of enterprise
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
                        {member.photo && (
                          <img 
                            src={member.photo} 
                            alt={member.name} 
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                            className="founder-avatar-img"
                          />
                        )}
                        <span className="founder-avatar-initials">{member.initials}</span>
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
          max-width: 680px;
          margin: 0 auto 46px;
          color: #64748B;
          font-size: 1rem;
          line-height: 1.6;
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

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .team-founder-card {
            flex: 0 0 calc((100% - 20px) / 2);
            width: calc((100% - 20px) / 2);
          }
          .team-carousel-track {
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
        }
      `}</style>
    </section>
  );
}
