import React, { useState } from 'react';
import Navbar from './components/Navbar';
import VideoHero from './components/VideoHero';
import LogoMarquee from './components/LogoMarquee';
import AboutSection from './components/AboutSection';
import QuaAiSection from './components/QuaAiSection';
import EquaAiSection from './components/EquaAiSection';
import ConsultingSection from './components/ConsultingSection';
import ClientsSection from './components/ClientsSection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import QuaAiWidget from './components/QuaAiWidget';
import DemoModal from './components/DemoModal';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleOpenDemo = () => setIsDemoModalOpen(true);
  const handleCloseDemo = () => setIsDemoModalOpen(false);

  return (
    <div className="v2-app-root" style={{ minHeight: '100vh', background: '#F8FAFC', color: '#334155', fontFamily: "'Poppins', sans-serif" }}>
      {/* Levelpath-style Dark Top Navigation */}
      <Navbar onOpenDemo={handleOpenDemo} />

      {/* Section 1: Home (#home) - Video Stream & Rotating Statements */}
      <VideoHero onOpenDemo={handleOpenDemo} />

      {/* Brand Logos */}
      <LogoMarquee />

      {/* Section 2: About us (#about) */}
      <AboutSection onOpenDemo={handleOpenDemo} />

      {/* Section 3: Qua AI (#qua-ai) - GMT & BFS */}
      <QuaAiSection onOpenDemo={handleOpenDemo} />

      {/* Section 4: eQua AI (#equa-ai) - Enterprise AI Platform */}
      <EquaAiSection onOpenDemo={handleOpenDemo} />

      {/* Section 5: Consulting (#consulting) - Services & Interactive Savings Calculator */}
      <ConsultingSection onOpenDemo={handleOpenDemo} />

      {/* Section 6: Our Clients (#clients) - Brands, Industries & Testimonials */}
      <ClientsSection />

      {/* Section 7: Team (#team) - Leadership */}
      <TeamSection />

      {/* Section 8: Contact us (#contact) - Enquiry Form, Details & Footer */}
      <ContactSection />

      {/* Floating QUA AI Assistant */}
      <QuaAiWidget onOpenDemo={handleOpenDemo} />

      {/* Interactive Platform Demo Booking Modal */}
      <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseDemo} />
    </div>
  );
}
