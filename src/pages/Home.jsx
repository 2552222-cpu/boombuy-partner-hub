import React, { useState } from 'react';
import HubNavbar from '../components/hub/HubNavbar';
import HubHero from '../components/hub/HubHero';
import HrusSection from '../components/hub/HrusSection';
import HRManagerSection from '../components/hub/HRManagerSection';
import AcademiaSection from '../components/hub/AcademiaSection';
import HubFooter from '../components/hub/HubFooter';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hrus');

  return (
    <div className="min-h-screen bg-[#0A0A0B] font-sans" dir="rtl" style={{ fontFamily: "'Heebo', sans-serif" }}>
      <HubNavbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <HubHero activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <div className="relative">
        {activeSection === 'hrus' && <HrusSection />}
        {activeSection === 'hr' && <HRManagerSection />}
        {activeSection === 'academia' && <AcademiaSection />}
      </div>

      <HubFooter />
    </div>
  );
}