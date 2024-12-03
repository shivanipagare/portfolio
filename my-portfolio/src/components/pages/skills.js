import React from 'react'
import { Container, Typography, Grid,Divider ,Box} from '@mui/material';
import '../../App.css';
const SkillSection = () => {
  return (
    <Box className="skill-container">
      <Typography variant="h2" className="skill-heading">
        Skills
      </Typography>
      <Divider className="experience-divider" />
      <Grid container mt={4} spacing={4} className="skill-grid">
        <Grid item xs={12} sm={4}>
          <div className="skill-category">
            <Typography variant="h4" className="category-title">
              Frontend
            </Typography>
            <ul className="skill-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>

            </ul>
          </div>
        </Grid>

        <Grid item xs={12} sm={4}>
          <div className="skill-category">
            <Typography variant="h4" className="category-title">
              Backend
            </Typography>
            <ul className="skill-list">
              <li>Node.js</li>
              <li>Express.js</li>
            </ul>
          </div>
        </Grid>

        <Grid item xs={12} sm={4}>
          <div className="skill-category">
            <Typography variant="h4" className="category-title">
              Database
            </Typography>
            <ul className="skill-list">
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SkillSection
