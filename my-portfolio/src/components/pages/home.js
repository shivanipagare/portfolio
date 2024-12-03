// HomeSection.js
import React from 'react';
import { Typography, Box } from '@mui/material';
import coderBackground from '../../images/emile-perron-xrVDYZRGdw4-unsplash.jpg'

function HomeSection() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${coderBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Typography variant="h2" gutterBottom>Welcome to My Portfolio</Typography>
      <Typography variant="h4" gutterBottom>Shivani Pagare</Typography>
      <Typography variant="subtitle1">Frontend Developer</Typography>
    </Box>
  );
}

export default HomeSection;
