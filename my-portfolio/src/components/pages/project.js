import React, { useState } from 'react';
import { Typography, Box, Button, Modal, Link } from '@mui/material';
import '../../App.css'; 

function ProjectPage() {
    const [open, setOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleOpen = (project) => {
        setSelectedProject(project);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const projects = [
        {
            name: "E-commerce Project",
            technologies: "HTML, CSS, JavaScript, React.js, React-Bootstrap, Ant Design, Node.js, MySQL",
            status: 'Aug 2023 - Present.',
            description: " Introducing our E-commerce project with three key modules: Admin, Retailer, and Customer. The Admin module provides business owners control over products and sales analytics. Retailers enjoy an easy-to-use platform for inventory and order management. Customers get a personalized shopping experience with intuitive navigation and order tracking. It's the future of E-commerce – simple, connected, and customer-centric.",
            link: "https://github.com/shivanipagare/ecomm-project.git"
        },
        {
            name: "Portal Development",
            technologies: "HTML, CSS, JavaScript, React.js, Material-UI, Node.js, MySQL",
            status: 'Sep 2023 - Present.',
            description: " In our portal development project, we are implementing a Role-Based Access Management (RBAC) system to regulate user access. Users will be assigned roles, and based on these roles, they'll have specific permissions to access different departments within the portal. Whether a user has a single role or multiple roles, the RBAC system ensures a secure and streamlined experience. This approach allows for granular control, accommodating diverse organizational needs while maintaining simplicity for users. The goal is to create an efficient, user-friendly portal that adapts seamlessly to evolving access requirements.",
        },
        {
            name: "My Bio",
            technologies: "HTML, CSS ,Bootstrap",
            status: 'Jan 2023 - Feb 2023.',
            description: "Experience seamless connectivity with My Bio, a clone of the renowned Jio main website. Discover cutting-edge digital services, high-speed internet solutions, and innovative offerings tailored to your needs. Explore, connect, and engage with the world around you at My Bio, where connectivity meets convenience.",
            link: "https://github.com/shivanipagare/mybio.git"
        },
        {
            name: "Restaurant Website",
            technologies: "HTML, CSS , Bootstrap",
            status: 'Jan 2023 - Feb 2023.',
            description: "Indulge your senses at ~FOOD CORNER~, where culinary mastery meets exceptional hospitality. Explore our delectable menu featuring an array of mouthwatering dishes crafted with the finest ingredients and infused with bold flavors. From savory appetizers to sumptuous main courses and decadent desserts, every bite is a culinary journey to savor. Immerse yourself in our inviting ambiance and unwind in the company of friends and family. Whether it's a casual dining experience or a special celebration, ~FOOD CORNER~ offers an unforgettable culinary adventure that delights the palate and warms the soul.",
            link: "https://github.com/shivanipagare/restaurant-website.git"
        }
    ];

    return (
        <Box className="project-container">
            <Typography variant="h2" className="project-title" gutterBottom>Projects</Typography>
            <div className="project-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-box">
                        <Typography variant="h4" sx={{ fontSize: '2rem', marginBottom: '15px', color: '#353232', fontWeight: 'bold' }}>{project.name}</Typography>
                        <Typography
                            sx={{
                                fontSize: '1rem',
                                color: '#333', 
                                marginBottom: '15px',
                            }}
                        >
                            <strong>Technologies Used: </strong>
                            <span style={{ color: '#666' }}>{project.technologies}</span>
                        </Typography>
             
                        <Button variant="contained" className="project-button" onClick={() => handleOpen(project)}>View Description</Button>
                    </div>
                ))}
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="project-modal">
                    <Typography variant="h3">Project Description</Typography>
                    {selectedProject && (
                        <>
                            <Typography variant="h4">{selectedProject.name}</Typography>
                            <Typography variant="body1" sx={{ marginBottom: '15px' }}>{selectedProject.description}</Typography>
                            <Typography>
                                <strong>Project Link: </strong>
                                <Link href={selectedProject.link} target="_blank" rel="noopener noreferrer" sx={{ color: '#1976d2' }}>
                                    {selectedProject.link}
                                </Link>
                            </Typography>
                        </>
                    )}
                </Box>
            </Modal>
        </Box>
    );
}

export default ProjectPage;
