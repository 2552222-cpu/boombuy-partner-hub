import React, { useState, useEffect } from 'react';
import SilentRaiseNavbar from '../components/silentRaise/SilentRaiseNavbar';
import HeroSection from '../components/silentRaise/HeroSection';
import WhySection from '../components/silentRaise/WhySection';
import WhatYouGetSection from '../components/silentRaise/WhatYouGetSection';
import ResearchSection from '../components/silentRaise/ResearchSection';
import RegistrationSection from '../components/silentRaise/RegistrationSection';
import PrivacySection from '../components/silentRaise/PrivacySection';
import AcademicSection from '../components/silentRaise/AcademicSection';
import SocialSection from '../components/silentRaise/SocialSection';
import SilentRaiseFooter from '../components/silentRaise/SilentRaiseFooter';

export default function SilentRaise() {
  return (
    <div className="font-heebo" dir="rtl" style={{ fontFamily: "'Heebo', sans-serif" }}>
      <SilentRaiseNavbar />
      <HeroSection />
      <WhySection />
      <WhatYouGetSection />
      <ResearchSection />
      <RegistrationSection />
      <PrivacySection />
      <AcademicSection />
      <SocialSection />
      <SilentRaiseFooter />
    </div>
  );
}