import React, { useState } from 'react';
import Navbar from '../components/boombuy/Navbar';
import HeroSection from '../components/boombuy/HeroSection';
import StorySection from '../components/boombuy/StorySection';
import DocumentsGrid from '../components/boombuy/DocumentsGrid';
import RoiSection from '../components/boombuy/RoiSection';
import Footer from '../components/boombuy/Footer';
import DocumentModal from '../components/boombuy/DocumentModal';
import ToastNotification from '../components/boombuy/ToastNotification';
import TimelineSection from '../components/boombuy/TimelineSection';
import VisionSection from '../components/boombuy/VisionSection';
import { getDocuments } from '../components/boombuy/documentsData';

export default function Home() {
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [activeTabId, setActiveTabId] = useState(null);
  const [orgCount, setOrgCount] = useState(500);
  const [useLarry, setUseLarry] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const documents = getDocuments();

  const handleSelectDoc = (doc) => {
    setSelectedDoc(doc);
    setActiveTabId(doc.tabs[0].id);
  };

  const handleCloseModal = () => {
    setSelectedDoc(null);
    setActiveTabId(null);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-blue-100 bg-[#F5F5F7]">
      <Navbar />
      <HeroSection />
      <StorySection />
      <DocumentsGrid documents={documents} onSelectDoc={handleSelectDoc} />
      <RoiSection 
        orgCount={orgCount} 
        setOrgCount={setOrgCount} 
        useLarry={useLarry} 
        setUseLarry={setUseLarry} 
      />
      <TimelineSection />
      <VisionSection />
      <Footer />
      <DocumentModal 
        selectedDoc={selectedDoc} 
        activeTabId={activeTabId} 
        setActiveTabId={setActiveTabId} 
        onClose={handleCloseModal} 
      />
      <ToastNotification show={showToast} />
    </div>
  );
}