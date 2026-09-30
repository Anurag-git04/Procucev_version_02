import React, { useState } from 'react';
import Navbar from './components/Navbar';
import VideoHero from './components/VideoHero';
import TrustLogoStrip from './components/TrustLogoStrip';
import AutonomousSection from './components/AutonomousSection';
import CalculatorSection from './components/CalculatorSection';
import Footer from './components/Footer';
import QuaAiWidget from './components/QuaAiWidget';
import DemoModal from './components/DemoModal';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleOpenDemo = () => setIsDemoModalOpen(true);
  const handleCloseDemo = () => setIsDemoModalOpen(false);

  return (
    <div className="min-h-screen bg-[#fcfbf7] text-[#09162e] font-sans selection:bg-[#ff4800]/20 selection:text-[#ff4800]">
      {/* Levelpath-style Dark Top Navigation */}
      <Navbar onOpenDemo={handleOpenDemo} />

      {/* Hero Section with Video Background */}
      <VideoHero onOpenDemo={handleOpenDemo} />

      {/* Enterprise Logo Ticker Strip */}
      <TrustLogoStrip />

      {/* Autonomous Source-to-Pay Workflow Section */}
      <AutonomousSection onOpenDemo={handleOpenDemo} />

      {/* Procurement ROI & Direct Profit Calculator */}
      <CalculatorSection onOpenDemo={handleOpenDemo} />

      {/* Levelpath-style Dark Footer */}
      <Footer onOpenDemo={handleOpenDemo} />

      {/* Floating QUA AI Assistant */}
      <QuaAiWidget onOpenDemo={handleOpenDemo} />

      {/* Interactive Platform Demo Booking Modal */}
      <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseDemo} />
    </div>
  );
}
