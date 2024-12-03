// Import necessary libraries
import React, { useState, useEffect } from 'react';
import { Typography, Container, Button, FormControl, Select, MenuItem } from '@mui/material';
import './Home.css';

// Functional component for the Home page
function Home() {
  // State for dropdown menu
  const [selectedOption, setSelectedOption] = useState('Option 1');
  const [showWelcomeAnimation, setShowWelcomeAnimation] = useState(true);

  // Handler function for dropdown menu change
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Handler function for button click
  const handleButtonClick = () => {
    // Action to perform when the button is clicked
    console.log('Button clicked');
  };

  // Effect to handle welcome animation on component mount
  useEffect(() => {
    setTimeout(() => {
      setShowWelcomeAnimation(false);
    }, 1500); // Adjust duration as needed
  }, []);

  return (
    <div className="App">
      {/* Welcome Text Animation */}
      <div className='welcome-text'>
        <Typography variant="h4" className="welcome-title">Welcome to My Portal</Typography>
      </div>

      {/* Main Content */}
      <Container maxWidth="sm" className="main-content">
        <Typography variant="h6" className="content-title">Choose an Option:</Typography>
        {/* Dropdown Menu */}
        <FormControl fullWidth variant="outlined">
          <Select
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <MenuItem value="Option 1">Option 1</MenuItem>
            <MenuItem value="Option 2">Option 2</MenuItem>
            <MenuItem value="Option 3">Option 3</MenuItem>
            <MenuItem value="Option 4">Option 4</MenuItem>
          </Select>
        </FormControl>
        {/* Button */}
        <Button variant="contained" color="primary" onClick={handleButtonClick} fullWidth className="submit-button">
          Submit
        </Button>
      </Container>

      {/* Footer */}
      <footer className="App-footer">
        <Typography variant="body2" color="textSecondary" align="center">
          &copy; 2024 My Portal. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
}

// Export the Home component
export default Home;
