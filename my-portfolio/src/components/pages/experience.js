import React from 'react';
import { Container, Typography, Divider ,Box} from '@mui/material';
import '../../App.css';

const ExperiencePage = () => {
    return (
        <Box className="experience-container">
            <Typography variant="h2" className="experience-heading">Professional Experience</Typography>
            <Divider className="experience-divider" />

            <div className="experience-details">
                <Typography variant="h4" className="experience-title">Employee Pooling Resources Pvt. Ltd.</Typography>
                <Typography variant="subtitle1" className="experience-duration">August 2023 - Februry-2024</Typography>
            </div>

            <div className="experience-project-detail">
                <Typography variant="h5" className="project-detail-heading">Project Detail</Typography>
                <Typography variant="body1" className="project-detail-description">
                    In our portal development project, we implemented a Role-Based Access Management (RBAC) system to regulate user access.
                    Users were assigned roles, and based on these roles, they had specific permissions to access different departments within the portal.
                    The RBAC system ensured a secure and streamlined experience, accommodating diverse organizational needs while maintaining simplicity for users.
                    The goal was to create an efficient, user-friendly portal that adapts seamlessly to evolving access requirements.
                </Typography>
            </div>

            <div className="experience-technologies">
                <Typography variant="h5" className="technologies-heading">Technologies Used</Typography>
                <Typography variant="body1" className="technologies-list">
                    Frontend: HTML, CSS, JavaScript, React.js
                </Typography>
                <Typography variant="body1" className="technologies-list">
                    Backend: Node.js, MySQL
                </Typography>
            </div>

            <div className="experience-contribution">
                <Typography variant="h5" className="contribution-heading">My Contribution</Typography>
                <Typography variant="body1" className="contribution-description">
                    During my internship, I actively participated in frontend development tasks, including UI/UX design, component implementation, and user interaction features.
                    I also contributed to backend development using Node.js and MySQL, ensuring seamless data flow and optimal user experience.
                </Typography>
            </div>

            <div className="experience-outcome">
                <Typography variant="h5" className="outcome-heading">Outcome</Typography>
                <Typography variant="body1" className="outcome-description">
                    Through this internship, I gained valuable experience in frontend and backend technologies.
                    I developed a deeper understanding of software development methodologies and best practices, contributing to the creation of an efficient, user-friendly portal.
                </Typography>
            </div>
        </Box>
    );
}

export default ExperiencePage;
