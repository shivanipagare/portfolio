
import { useState } from 'react';
import React from 'react'
import '../App.css';
import coderBackground from '../../src/images/profile.jpeg'
import { Typography, Container, Avatar } from '@mui/material';
function Sidebar({setActive}) {
    const [activeSection, setActiveSection] = useState('home');
  
    // Function to handle setting active section
    const handleSetActiveSection = (section) => {
      setActive(section);
    };
  
    return (
      <div className="sidebar">
        <div className="user">
          <Avatar className="avatar" alt="Shivani Pagare" src={coderBackground} sx={{ width: 150, height: 150, margin: '0 auto' }}/>
          <Typography variant="h5" className="userName">Shivani Pagare</Typography>
          <Typography variant="subtitle1" className="userRole">Frontend Developer</Typography>
        </div>
        <div className="sections">
       
          <ul className="sectionList">
            <li className={activeSection === 'home' ? 'active' : ''}>
              <a href="#home" onClick={() => handleSetActiveSection('home')}>Home</a>
            </li>
            <li className={activeSection === 'about' ? 'active' : ''}>
              <a href="#about" onClick={() => handleSetActiveSection('about')}>About</a>
            </li>
            <li className={activeSection === 'projects' ? 'active' : ''}>
              <a href="#projects" onClick={() => handleSetActiveSection('projects')}>Projects</a>
            </li>
            <li className={activeSection === 'experience' ? 'active' : ''}>
              <a href="#experience" onClick={() => handleSetActiveSection('experience')}>Experience</a>
            </li>
            <li className={activeSection === 'skills' ? 'active' : ''}>
              <a href="#skills" onClick={() => handleSetActiveSection('skills')}>Skills</a>
            </li>
            <li className={activeSection === 'education' ? 'active' : ''}>
              <a href="#education" onClick={() => handleSetActiveSection('education')}>Education</a>
            </li>
            <li className={activeSection === 'contact' ? 'active' : ''}>
              <a href="#contact" onClick={() => handleSetActiveSection('contact')}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  export default Sidebar