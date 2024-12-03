import React from 'react';
import { Button, TextField } from '@mui/material';
import './Navbar.css';


const LargeForm = () => {
  return (
    <div className="formContainer">
      <form>
        <div className="row">
          <TextField
            className="textField"
            label="Full Name"
            variant="outlined"
            fullWidth
          />
          <TextField
            className="textField"
            label="Email"
            variant="outlined"
            fullWidth
          />
          <TextField
            className="textField"
            label="Phone Number"
            variant="outlined"
            fullWidth
          />
          <TextField
            className="textField"
            label="Address"
            variant="outlined"
            fullWidth
          />
        </div>
        <div className="row">

          <TextField
            className="textField"
            label="City"
            variant="outlined"
            fullWidth
          />
          <TextField
            className="textField"
            label="State"
            variant="outlined"
            fullWidth
          />
          <TextField
            className="textField"
            label="Zip Code"
            variant="outlined"
            fullWidth
          />
          <TextField
            className="textField"
            label="Country"
            variant="outlined"
            fullWidth
          />
        </div>
        <div className="row">
          <TextField
            className="textField"
            label="Occupation"
            variant="outlined"
            fullWidth
          />
          <TextField
            className="textField"
            label="Company"
            variant="outlined"
            fullWidth
          />
          <TextField
            className="textField"
            label="Website"
            variant="outlined"
            fullWidth
          />
        </div>
        <TextField
          className="textField"
          label="Notes"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
        />
        <div className="submitButton">
          <Button
className='Button-submit'
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};


export default LargeForm;

