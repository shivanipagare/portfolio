import React from 'react';
import { Container, Typography, Divider, Link, IconButton, Box } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../../App.css';

const ContactPage = () => {
    return (
        <Box className="contact-container">
            <Typography variant="h2" className="contact-heading">Contact Me</Typography>
            <Divider className="contact-divider" />

            <div className="contact-details">
                <Typography variant="h4" className="contact-title">Email</Typography>
                <Link  className="contact-link">
                    <IconButton color="primary" aria-label="Email">
                        <EmailIcon />
                    </IconButton>
                    shivani100002@gmail.com
                </Link>
            </div>

            <div className="contact-details">
                <Typography variant="h4" className="contact-title">Phone</Typography>
                <Link  className="contact-link">
                    <IconButton color="primary" aria-label="Phone">
                        <PhoneIcon />
                    </IconButton>
                    +91 7649040526
                </Link>
            </div>

            <div className="contact-details">
                <Typography variant="h4" className="contact-title">LinkedIn</Typography>
                <Link href="https://www.linkedin.com/in/shivani-pagare-3b735125b/" target="_blank" rel="noopener noreferrer" className="contact-link">
                    <IconButton color="primary" aria-label="LinkedIn">
                        <LinkedInIcon />
                    </IconButton>
                    https://www.linkedin.com/in/shivani-pagare-3b735125b/
                </Link>
            </div>
        </Box>
    );
}

export default ContactPage;
