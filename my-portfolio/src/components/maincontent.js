// MainContent.js
import React from 'react';
import { Typography } from '@mui/material';
import HomeSection from './pages/home';
import AboutSection from './pages/about';
import SkillSection from './pages/skills';
import '../App.css'
import ProjectPage from './pages/project';
import ExperiencePage from './pages/experience';
import EducationPage from './pages/education';
import ContactPage from './pages/contact';
function MainContent({ activeSection }) {
  return (
    <div className="mainContent">
      {activeSection === 'home' && <HomeSection />}
      {activeSection === 'about' && <AboutSection />}
      {activeSection === 'projects' && <ProjectPage />}
      {activeSection === 'experience' && <ExperiencePage />}
      {activeSection === 'skills' && <SkillSection />}
      {activeSection === 'education' && <EducationPage />}
      {activeSection === 'contact' && <ContactPage />}
    </div>
  );
}

export default MainContent;
