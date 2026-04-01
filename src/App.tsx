import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CommunityOverview from './components/CommunityOverview';
import VideoSection from './components/VideoSection';
import StateMap from './components/StateMap';
import SkillCategories from './components/SkillCategories';
import LanguageConnect from './components/LanguageConnect';
import OngoingProjects from './components/OngoingProjects';
import Incentives from './components/Incentives';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import JoinUs from './components/JoinUs';
import WhatWeDo from './components/WhatWeDo';
import ContactForm from './components/ContactForm';
import Offerings from './components/Offerings';
import { Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <CommunityOverview />
              <VideoSection />
              <StateMap />
              <SkillCategories />
              <LanguageConnect />
              <OngoingProjects />
              <Incentives />
              <Testimonials />
              <Contact />
            </>
          }
        />
        <Route path="/aboutus" element={<About />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/joinus" element={<JoinUs />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/offerings" element={<Offerings />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;