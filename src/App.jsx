import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import VideoHero from "./components/VideoHero";
import LogoMarquee from "./components/LogoMarquee";
import AboutSection from "./components/AboutSection";
import QuaAiSection from "./components/QuaAiSection";
import EquaAiSection from "./components/EquaAiSection";
import ConsultingSection from "./components/ConsultingSection";
import TeamSection from "./components/TeamSection";
import ContactSection from "./components/ContactSection";
import QuaAiWidget from "./components/QuaAiWidget";
import DemoModal from "./components/DemoModal";
import DigitalProcurementPage from "./components/DigitalProcurementPage";
import ProCpxPage from "./components/ProCpxPage";

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const getInitialRoute = () => {
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    if (
      path.includes("digital-procurement-services") ||
      hash.includes("digital-procurement-services") ||
      hash === "#dpsnxt"
    ) {
      return "/digital-procurement-services";
    }
    if (
      path.includes("capex-procurement") ||
      hash.includes("capex-procurement") ||
      hash === "#procpx"
    ) {
      return "/capex-procurement";
    }
    return "/";
  };

  const [currentRoute, setCurrentRoute] = useState(getInitialRoute);

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (
        path.includes("digital-procurement-services") ||
        hash.includes("digital-procurement-services") ||
        hash === "#dpsnxt"
      ) {
        setCurrentRoute("/digital-procurement-services");
      } else if (
        path.includes("capex-procurement") ||
        hash.includes("capex-procurement") ||
        hash === "#procpx"
      ) {
        setCurrentRoute("/capex-procurement");
      } else {
        setCurrentRoute("/");
      }
    };

    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("hashchange", handleLocationChange);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("hashchange", handleLocationChange);
    };
  }, []);

  const navigateTo = (route, hashTarget = null) => {
    if (route === "/digital-procurement-services") {
      window.history.pushState(null, "", "/digital-procurement-services");
      setCurrentRoute("/digital-procurement-services");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (route === "/capex-procurement") {
      window.history.pushState(null, "", "/capex-procurement");
      setCurrentRoute("/capex-procurement");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.history.pushState(null, "", route + (hashTarget || ""));
      setCurrentRoute("/");
      if (hashTarget) {
        setTimeout(() => {
          const el = document.querySelector(hashTarget);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }, 60);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const handleOpenDemo = () => setIsDemoModalOpen(true);
  const handleCloseDemo = () => setIsDemoModalOpen(false);

  return (
    <div
      className="v2-app-root"
      style={{
        minHeight: "100vh",
        background: "#F8FAFC",
        color: "#334155",
        fontFamily: "'Poppins', sans-serif",
        paddingTop: "70px",
      }}
    >
      {/* Levelpath-style Dark Top Navigation */}
      <Navbar
        onOpenDemo={handleOpenDemo}
        currentRoute={currentRoute}
        onNavigate={navigateTo}
      />

      {currentRoute === "/digital-procurement-services" ? (
        /* Dedicated Digital Procurement Services Page */
        <DigitalProcurementPage
          onOpenDemo={handleOpenDemo}
          onNavigateHome={() => navigateTo("/")}
        />
      ) : currentRoute === "/capex-procurement" ? (
        /* Dedicated proCPX / Capex Procurement Page */
        <ProCpxPage
          onOpenDemo={handleOpenDemo}
          onNavigateHome={() => navigateTo("/")}
        />
      ) : (
        /* Standard Landing Page Sections */
        <>
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

          {/* Section 7: Team (#team) - Leadership */}
          <TeamSection />
        </>
      )}

      {/* Section 8: Contact us (#contact) - Enquiry Form, Details & Footer (Shown on all pages) */}
      <ContactSection />

      {/* Floating QUA AI Assistant */}
      <QuaAiWidget onOpenDemo={handleOpenDemo} />

      {/* Interactive Platform Demo Booking Modal */}
      <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseDemo} />
    </div>
  );
}
