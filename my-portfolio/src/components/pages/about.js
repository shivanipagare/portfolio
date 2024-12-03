// AboutPage.js
import React from 'react';
import { Typography, Box } from '@mui/material';
import '../../App.css'; 

function AboutSection() {
    return (
      <Box className="about-container"> 
      <Typography variant="h1" className="about-title" gutterBottom>About Me</Typography>
      <Typography variant="body1" className="about-content" gutterBottom>
          Hello! I'm a <span className="about-highlight">passionate frontend developer</span> with a keen interest in crafting delightful user experiences.
      </Typography>
      <Typography variant="body1" className="about-content" gutterBottom>
          I specialize in <span className="about-highlight">HTML</span>, <span className="about-highlight">CSS</span>, <span className="about-highlight">JavaScript</span>, and <span className="about-highlight">React.js</span>. 
          My mission is to build elegant and user-friendly web applications that leave a lasting impression.
      </Typography>
      <Typography variant="body1" className="about-content" gutterBottom>
          With a focus on <span className="about-highlight">clean code</span> and <span className="about-highlight">beautiful design</span>, I strive to push the boundaries of what's possible in frontend development.
      </Typography>
      <Typography variant="body1" className="about-content" gutterBottom>
          I am passionate about creating <span className="about-highlight">seamless user experiences</span> and love turning ideas into reality.
      </Typography>
      <Typography variant="body1" className="about-content">
          Let's create something <span className="about-highlight">extraordinary</span> together!
      </Typography>
      {/* Add more information about yourself */}
  </Box>
    );
}

export default AboutSection;

