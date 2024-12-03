import React from 'react';
import { Container, Typography,Divider, Box } from '@mui/material';
import '../../App.css';
const EducationPage = () => {
        return (
            <Box className="education-container">
                <Typography variant="h2" className="education-heading">Academic Qualifications</Typography>
                <Divider className="education-divider" />
    
                <div className="education-details">
                    <Typography variant="h5" className="education-title">MSc (Physics with Computer Applications)</Typography>
                    <Typography variant="subtitle1" className="education-school">Govt. Narmada College</Typography>
                    <Typography variant="subtitle1" className="education-year">May 2022</Typography>
                    <Typography variant="subtitle1" className="education-location">Hoshangabad, India</Typography>
                </div>
    
                <div className="education-details">
                    <Typography variant="h5" className="education-title">BSc (Computer Science)</Typography>
                    <Typography variant="subtitle1" className="education-school">Vardhaman College</Typography>
                    <Typography variant="subtitle1" className="education-year">May 2020</Typography>
                    <Typography variant="subtitle1" className="education-location">Itarsi, India</Typography>
                </div>
    
                <div className="education-details">
                    <Typography variant="h5" className="education-title">12th Grade</Typography>
                    <Typography variant="subtitle1" className="education-school">Guru Nanak Public School Itarsi</Typography>
                    <Typography variant="subtitle1" className="education-year">june 2017</Typography>
                    <Typography variant="subtitle1" className="education-location">Itarsi, India</Typography>
                </div>
    
                <div className="education-details">
                    <Typography variant="h5" className="education-title">10th Grade</Typography>
                    <Typography variant="subtitle1" className="education-school">Guru Nanak Public School Itarsi</Typography>
                    <Typography variant="subtitle1" className="education-year">june 2015</Typography>
                    <Typography variant="subtitle1" className="education-location">Itarsi, India</Typography>
                </div>
            </Box>
        );
}

export default EducationPage;
